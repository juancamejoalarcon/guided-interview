import { 
  Question, 
  QuestionProp,
  MultipleChoice,
  MultipleChoiceProp, 
  DateProp, 
  Repeat, 
  RepeatProp,
  Choice
} from "./interfaces";
import { GenericQuestion, interviewParams, DataSaved } from "./types/General";
import { validateParams, getValueBetweenRanges, validateSetValue, isCamelCase } from "./services/utils.service";
import { EventBus, EventList } from "./services/event-bus.service";
import { getQuestion, replaceIndexInQuestionsOfRepeatQuestion } from "./services/create.service";
import { makeTemplate } from "./services/templating.service";

export * from "./interfaces";

export class GuidedInterview {
  public interview = new Map<string, Question | MultipleChoice | Repeat>();
  private events!: EventBus;
  private current!: string;
  private isRoot: boolean = true;
  public data: any = {};

  constructor(interview: any = "empty", options: any = { isRoot: true, data: null }) {
    this.events = options.events || new EventBus();
    this.isRoot = options.isRoot;
    this.data = options.data || this.data
    // FIXME: This is a hack to avoid the data to be modified by reference
    const copyOFData = options.data ? JSON.parse(JSON.stringify(this.data)) : null
    if (interview !== "empty") this.init(interview);
    if (copyOFData) this.applyDataToQuestions(copyOFData)
  }

  public get questionsMap(): Map<string, Question | MultipleChoice | Repeat> {
    return this.interview;
  }

  setInterview(interview: Map<string, Question | MultipleChoice | Repeat>) {
    this.interview = interview
  }

  init(interviewParams: interviewParams) {
    if (interviewParams === null) throw new Error("Interview init param is null");
    if (!validateParams(interviewParams)) return
    
    for (const value of Object.values(interviewParams)) {
      this.add(value);
    }
  }

  getInterviewParams(): interviewParams {
    const interviewParams: interviewParams = {};
    this.interview.forEach((value, key) => {
      interviewParams[key] = value as QuestionProp | MultipleChoiceProp | DateProp | RepeatProp;
      if (value.type === 'repeat') {
        (interviewParams[key] as RepeatProp).content = {}
      }
    });
    return interviewParams;
  }

  add(params: QuestionProp | MultipleChoiceProp | DateProp | RepeatProp, setAsCurrent: boolean = false) {
    const question = getQuestion(params);
    if (question.type === 'repeat') this.buildContentForRepeatQuestion(question as Repeat)
    this.interview.set(question.id, question);
    this.setValue(question.id, question.value);
    this.events.dispatch("question-added", question);
    return question;
  }

  remove(id: string) {
    if (!this.interview.has(id)) throw new Error("No question with id:" + id);
    this.interview.delete(id);
  }

  getNestedInterview(id: string, index: number): GuidedInterview {
    const question = this.interview.get(id) as Repeat
    if (!question) throw new Error("No question with id:" + id);
    if (question?.type !== 'repeat') throw new Error("Question with id " + id + " is not a repeat question")
    return question.content[index].nestedInterview
  }
  
  canBeShown(question: Question): boolean {
    if (question.logic?.showIf) {
        const keys = this.interview.keys()
        const values = this.interview.values()
        const showIfFunct = Function(...keys, `return ${question.logic.showIf}`).bind(this)
        const result = showIfFunct(...values)
        if (!result) return false
    }
    if (question.logic?.hideIf) {
        const keys = this.interview.keys()
        const values = this.interview.values()
        const hideIfFunct = Function(...keys, `return ${question.logic.hideIf}`).bind(this)
        const result = !hideIfFunct(...values)
        if (!result) return false
    }
    return true
  }

  setCurrent(id: string) {
    if (!this.interview.has(id)) {
      throw new Error("No question with id:" + id);
    }
    this.current = id;
    this.events.dispatch("set-current", this.getCurrent());
  }

  next() {
    const idOfCurrent = this.getCurrent().id
    const interviewList = Array.from(this.interview)
    for (let i = 0; i < interviewList.length ; i++) {
        const [key] = interviewList[i]
        if (idOfCurrent === key) {
            const nextQuestion = this.nextAvailableQuestion(i + 1)
            if (nextQuestion) this.setCurrent(nextQuestion[0])
            break
        }
    }
  }

  nextAvailableQuestion(index: number) { 
    const interviewList = Array.from(this.interview)
    for (let i = index; i < interviewList.length ; i++) {
        const [key, value] = interviewList[i]
        if (this.canBeShown(value)) {
            return interviewList[i]
        }
    }
  }

  previous() {
    const idOfCurrent = this.getCurrent().id
    const interviewList = Array.from(this.interview)
    for (let i = 0; i < interviewList.length ; i++) {
        const [key] = interviewList[i]
        if (idOfCurrent === key) {
            const previousQuestion = this.previousAvailableQuestion(i - 1)
            if (previousQuestion) this.setCurrent(previousQuestion[0])
            break
        }
    }
  }

  previousAvailableQuestion(index: number) { 
    const interviewList = Array.from(this.interview)
    for (let i = index; i >= 0 ; i--) {
        const [key, value] = interviewList[i]
        if (this.canBeShown(value)) {
            return interviewList[i]
        }
    }
  }

  getCurrent(): Question | MultipleChoice | Repeat {
    if (!this.current) this.current = Array.from(this.interview)[0][0]
    const currentEl = this.interview.get(this.current)
    if (!currentEl) {
        throw new Error("Could not find current Quetion");  
    }
    return currentEl;
  }

  setValue(id: string, value: string | number) {
    if (!this.interview.has(id)) {
      throw new Error("No question with id:" + id);
    }
    const question = this.interview.get(id);
    if (!question) throw new Error("No question with id:" + id);
    validateSetValue(value, question)
    question!.value = value;
    
    if (question?.type === 'multipleChoice') {
      this.setRadioChecked(question as MultipleChoice, value as string)
    }

    if (question?.type === 'repeat') {
      this.buildContentForRepeatQuestion(question as Repeat, value as number)
    }

    if (this.data[id]) this.data[id].value = question.value;
    else this.data[id] = { value: question.value };

    
    this.events.dispatch("set-value", this.interview.get(id));
  }

  on(event: EventList, callback: Function) {
    this.events.register(event, callback);
  }

  getData() {
    return this.data;
  }


  setRadioChecked(question: MultipleChoice, value: string) {
    question.choices.forEach(choice => {
      choice.checked = choice.label === value
    })
  }

  buildContentForRepeatQuestion(repeatQuestion: Repeat, value: number | null = null): void {

    const { range, id, questions } = repeatQuestion
    const { min, max } = range

    value = getValueBetweenRanges(repeatQuestion.value, min, max)

    repeatQuestion.value = value

    if (!repeatQuestion.content) repeatQuestion.content = {}
    if (!this.data[id]) this.data[id] = { value: value, content: {} }
    else this.data[id].value = value
     
    for (let i = 0; i < value; i++) {
      if (repeatQuestion.content[i]) {
        // Añadir logica de hidden
        repeatQuestion.content[i].hidden = false
        continue
      }
      this.data[id].content[i] = { hidden: false, questions: {} }

      const nestedInterview = new GuidedInterview(replaceIndexInQuestionsOfRepeatQuestion(questions, i), { 
        isRoot: false, 
        events: this.events,
        data: this.data[id].content[i].questions
      })
      repeatQuestion.content[i] = { hidden: false, nestedInterview }
    }
    // Hide remaining questions
    const totalLength = Object.keys(repeatQuestion.content)
    if (value < totalLength.length) {
      for (let i = value; i < totalLength.length; i++) {
        repeatQuestion.content[i].hidden = true
        this.data[id].content[i].hidden = true
      }
    }
  }

  applyDataToQuestions(data: DataSaved) {
    Object.entries(data).forEach(([key, { value, content }]) => {
      this.setValue(key, value)
      if (content) {
        Object.values(content).forEach((contentValue: {
          hidden?: boolean | undefined;
          questions: DataSaved;
      }, index) => {
          if (!contentValue.hidden) {
            this.getNestedInterview(key, index).applyDataToQuestions(contentValue.questions)
          }
        })
      }
    })
  }

  makeTemplate(template: string): string {
    if (!template) throw new Error("No template provided")
    return makeTemplate(this.data, template)
  }

  getStepById(id: string): GenericQuestion | null {
    const question = this.interview.get(id)
    if (!question) return null;
    return question
  }

  checkIfIdIsValid(id: string): { isValid: boolean, message: string } {
    if (!id) throw new Error("No id provided")
    if (this.interview.has(id)) return { isValid: false, message: "Id already exists" }
    if (!isCamelCase(id)) return { isValid: false, message: "Id must be in camel case" }
    return { isValid: true, message: '' }
  }

  changeIdOfQuestion(id: string, newId: string) {
    const question = this.interview.get(id)
    if (!question) throw new Error("No question with id:" + id);
    const idValidation = this.checkIfIdIsValid(newId)
    if (!idValidation.isValid) throw new Error(idValidation.message)
    const interviewToArray = Array.from(this.interview, ([name, value]) => ({ name, value }));
    interviewToArray.forEach((question, index) => {
      if (question.name === id) {
        interviewToArray[index].value.id = newId
        interviewToArray[index].name = newId
      }
    })
    const newInterview = new Map<string, Question | MultipleChoice | Repeat>();
    interviewToArray.forEach(question => {
      newInterview.set(question.name, question.value)
    })
    this.interview = newInterview
  }

  findQuestionById(id: string): Question | MultipleChoice | Repeat {
    const question = this.interview.get(id)
    if (!question) throw new Error("No question with id:" + id);
    return question
  }

  findMultipleChoiceById(id: string): MultipleChoice {
    const question = this.interview.get(id)
    if (!question) throw new Error("No question with id:" + id);
    if (question?.type !== 'multipleChoice') throw new Error("Question with id " + id + " is not a multiple choice question");
    return question as MultipleChoice
  }

  addChoiceToMultipleChoice(id: string, choice: Choice) {
    const question = this.findMultipleChoiceById(id);
    (question as MultipleChoice).choices.push(choice)
  }

  removeChoiceFromMultipleChoice(id: string, index: number) {
    const question = this.findMultipleChoiceById(id);
    (question as MultipleChoice).choices.splice(index, 1)
  }

  changeLabelOfChoice(id: string, index: number, label: string) {
    const question = this.findMultipleChoiceById(id);
    if (!label) throw new Error("No label provided");
    if (!(question as MultipleChoice).choices[index]) throw new Error("No choice with index:" + index);
    (question as MultipleChoice).choices[index].label = label
  }

  setDefaultCheckedChoice(id: string, index: number) {
    const question = this.findMultipleChoiceById(id);
    if (!(question as MultipleChoice).choices[index]) throw new Error("No choice with index:" + index);
    (question as MultipleChoice).choices.forEach(choice => choice.checked = false);
    (question as MultipleChoice).choices[index].checked = true
  }

  setQuestionAsRequired(id: string, required: boolean) {
    const question = this.findQuestionById(id);
    question.required = required
  }

  setTitleOfQuestion(id: string, title: string) {
    const question = this.findQuestionById(id);
    question.title = title
  }

  setPlaceholder(id: string, placeholder: string) {
    const question = this.findQuestionById(id);
    question.placeholder = placeholder
  }

  setExtraOption(id: string, param: string, value: any) {
    const question = this.findQuestionById(id);
    if (!question.options) question.options = {}
    question.options[param] = value
  }

  setIndications(id: string, indications: string) {
    const question = this.findQuestionById(id);
    question.indications = indications
  }

  setLogic(id: string, logic: { showIf?: any; hideIf?: any; }) {
    this.findQuestionById(id).logic = logic
  }

  setRange(id: string, range: { min: number; max: number; }) {
    const question = this.findQuestionById(id) as Repeat;
    if (question?.type !== 'repeat') throw new Error("Question with id " + id + " is not a repeat question")
    question.range = range
  }

}
