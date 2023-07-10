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
  private data: any = {};

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

  init(interviewParams: interviewParams) {
    if (interviewParams === null) throw new Error("Interview init param is null");
    if (!validateParams(interviewParams)) return
    
    for (const value of Object.values(interviewParams)) {
      this.add(value);
    }
  }

  add(params: QuestionProp | MultipleChoiceProp | DateProp | RepeatProp, setAsCurrent: boolean = false) {
    const question = getQuestion(params);
    if (question.type === 'repeat') this.buildContentForRepeatQuestion(question as Repeat)
    this.interview.set(question.id, question);
    this.events.dispatch("question-added", question);
    return question;
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
        return showIfFunct(...values)
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

  addChoiceToMultipleChoice(id: string, choice: Choice) {
    const question = this.interview.get(id)
    if (!question) throw new Error("No question with id:" + id);
    if (question?.type !== 'multipleChoice') throw new Error("Question with id " + id + " is not a multiple choice question");
    (question as MultipleChoice).choices.push(choice)
  }

  setQuestionAsRequired(id: string, required: boolean) {
    const question = this.interview.get(id)
    if (!question) throw new Error("No question with id:" + id);
    question.required = required
  }

  setTitleOfQuestion(id: string, title: string) {
    const question = this.interview.get(id)
    if (!question) throw new Error("No question with id:" + id);
    question.title = title
  }

  setPlaceholder(id: string, placeholder: string) {
    const question = this.interview.get(id)
    if (!question) throw new Error("No question with id:" + id);
    question.placeholder = placeholder
  }

  setExtraOption(id: string, param: string, value: any) {
    const question = this.interview.get(id)
    if (!question) throw new Error("No question with id:" + id);
    if (!question.options) question.options = {}
    question.options[param] = value
  }

  setIndications(id: string, indications: string) {
    const question = this.interview.get(id)
    if (!question) throw new Error("No question with id:" + id);
    question.indications = indications
  }

}
