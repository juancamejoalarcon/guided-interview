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
  private current!: GenericQuestion;
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
  // This question should be private
  setCurrent(question: GenericQuestion) {
    if (!question) {
      throw new Error("No question provided");
    }
    if (typeof question !== 'object') {
      throw new Error("No question provided");
    }
    this.current = question;
    this.events.dispatch("set-current", this.getCurrent());
  }

  next() {
    let nextQuestion = this.getNextQuestion()
    if (nextQuestion) this.setCurrent(nextQuestion)
    // Fixes when nextQuestion is null
    else this.getCurrent().isCurrent = true
    this.getCurrent().isEnd = false
  }
  
  getNextQuestion(): GenericQuestion | null {
    let newCurrent;
    let nextQuestionExists;
    const interviewList = Array.from(this.interview)
    for (let i = 0; i < interviewList.length ; i++) {
      const question = interviewList[i][1]
      const isCurrent = question?.isCurrent
      const isRepeat = question?.type === 'repeat'
      nextQuestionExists = interviewList[i + 1] && interviewList[i + 1][1]


      if (isCurrent && !isRepeat && !nextQuestionExists && !this.isRoot) {
        question.isEnd = true
        newCurrent = question
        break
      }
      if (isCurrent && !isRepeat && nextQuestionExists ) {
        question.isCurrent = false
        newCurrent = interviewList[i + 1][1]
        newCurrent.isCurrent = true
        if (!this.canBeShown(newCurrent)) {
          newCurrent = this.getNextQuestion()
        }
        break
      }
      if (isCurrent && isRepeat && this.canBeShown(question)) {
        const repeat = question as Repeat
        repeat.isCurrent = false;
        const firstNestedInterview = Array.from(repeat.content[0].nestedInterview.interview) as any
        newCurrent = firstNestedInterview[0][1]
        newCurrent.isCurrent = true
        break
      }

      if (isCurrent && isRepeat && !this.canBeShown(question) && nextQuestionExists) {
        question.isCurrent = false
        newCurrent = interviewList[i + 1][1]
        newCurrent.isCurrent = true
        if (!this.canBeShown(newCurrent)) {
          newCurrent = this.getNextQuestion()
        }
        break
      }

      if (isCurrent && isRepeat && !this.canBeShown(question) && !nextQuestionExists) {
        question.isEnd = true
        newCurrent = question
        break
      }

      if (!isCurrent && isRepeat && !this.canBeShown(question) && !nextQuestionExists) {
        question.isEnd = true
        newCurrent = question
        break
      }


      if (!isCurrent && isRepeat && this.canBeShown(question)) {
        const repeat = question as Repeat
        for (let j = 0; j < parseInt(question.value as string) ; j++) {
          
          if (!repeat.content[j].hidden) {

            newCurrent = repeat.content[j].nestedInterview.getNextQuestion()

            if (newCurrent) {
              if (newCurrent.isEnd) {
                if ((j + 1) < parseInt(question.value as string)) {
                  if (!newCurrent.isCurrent) {
                    newCurrent.isEnd = false
                    newCurrent = null
                  } else {
                    const firstOfNextNestedInterview = Array.from(repeat.content[j + 1].nestedInterview.interview) as any
                    newCurrent.isCurrent = false
                    newCurrent.isEnd = false
                    newCurrent = firstOfNextNestedInterview[0][1]
                    newCurrent.isCurrent = true
                  }
                } else {
                  const canBeShown = repeat.content[j].nestedInterview.canBeShown(newCurrent)
                  if (newCurrent.isEnd && !canBeShown) {
                    newCurrent.isCurrent = false
                    newCurrent = null
                  }
                }
              }
              if (newCurrent) break
            }
          }
        }
        break
      }
    }
    return newCurrent
  }

  previous() {
    let previousQuestion = this.getPreviousQuestion()
    if (previousQuestion) this.setCurrent(previousQuestion)
  }

  getPreviousQuestion(previous: GenericQuestion | null = null): GenericQuestion | null {
    const interviewList = Array.from(this.interview)
    const firstQuestion = interviewList[0][1]
    if (firstQuestion.isCurrent) {
      if (this.isRoot) {
        return firstQuestion
      } else {
        if (previous) previous.isCurrent = true
        firstQuestion.isCurrent = false
        return previous
      }
    }

    let previousQuestion = firstQuestion
    let newCurrent;
    let nextQuestionExists;
    for (let i = 1; i < interviewList.length ; i++) {
      const question = interviewList[i][1]
      const questionCanBeShown = this.canBeShown(question)
      nextQuestionExists = interviewList[i + 1] && interviewList[i + 1][1]
      if (!question.isCurrent) {
        if (questionCanBeShown) previousQuestion = question
        if (question.type === 'repeat') {
          const repeat = question as Repeat
          for (let j = 0; j < parseInt(question.value as string) ; j++) {
            if (!repeat.content[j].hidden) {
              newCurrent = repeat.content[j].nestedInterview.getPreviousQuestion(previousQuestion)
              // update previous
              if (newCurrent?.isPrevious) {
                newCurrent.isPrevious = false
                previousQuestion = newCurrent
                newCurrent = null
              }
              if (newCurrent && newCurrent.isCurrent) break
            }
          }
          if (newCurrent && newCurrent.isCurrent) break
        }
      } else {
        previousQuestion.isCurrent = true
        newCurrent = previousQuestion
        question.isCurrent = false
        break
      }
    }
    if (previous && !newCurrent) {
      const found = this.reversePreviousUtil(interviewList)
      if (found) newCurrent = found
    }
    return newCurrent
  }
  
  // traverse interview backwards to find previous question
  reversePreviousUtil(interviewList: [string, Question | MultipleChoice | Repeat][]) {
    let newCurrent;
    for (let i = interviewList.length - 1; i >= 0; i--) {
      const question = interviewList[i][1]
      const questionCanBeShown = this.canBeShown(question)
      if (questionCanBeShown) {
        if (question.type === 'repeat') {
          const repeat = question as Repeat
          // let j = parseInt(question.value as string) - 1; j >= 0; j--
          for (let j = parseInt(question.value as string) - 1; j >= 0; j--) {
            if (!repeat.content[j].hidden) {
              const nestedInterviewList = Array.from(repeat.content[j].nestedInterview.interview) as [string, Question | MultipleChoice | Repeat][] 
              newCurrent = repeat.content[j].nestedInterview.reversePreviousUtil(nestedInterviewList)
              if (newCurrent) {
                newCurrent.isPrevious = true
              }
              if (newCurrent) break
            }
          }
          if (newCurrent) break
        } else {
          newCurrent = question as any
          newCurrent.isPrevious = true
          break
        }
      }
    }
    return newCurrent
  }

    // Returns an object whith the current total questions 
  // and the position you are in it
  getProgress(): { total: number, currentPosition: number, percentageOfCompletion: number } {
    let total = 0;
    let currentPosition = 0
    const interviewList = Array.from(this.interview)
    interviewList.forEach(([id, question]) => {
      total += 1
      if (question.isCurrent) currentPosition = total
      if (question.type === 'repeat') {
        const repeat = question as Repeat
        Object.values(repeat.content).forEach(content => {
          if (!content.hidden) {
            const progress = content.nestedInterview.getProgress()
            if (progress.currentPosition !== 0) {
              currentPosition = total + progress.currentPosition
            }
            total += progress.total
          }
        })
      }
    })
    return {
      total,
      currentPosition,
      percentageOfCompletion: Math.round((currentPosition * 100) / total)
    }
  }

  // returns true if you are at the first question
  isStart() {
    const interviewList = Array.from(this.interview)
    const idOfFirstQuestion = interviewList[0][1].id
    const idOfCurrent = this.getCurrent().id
    return idOfFirstQuestion === idOfCurrent
  }

  // returns true if you reach the last question
  isEnd() {
    const lastQuestion = this.getLastQuestionOfInterview()
    const current = this.getCurrent()
    if (current.indexInsideRepeat !== null) {
      return current.id === lastQuestion?.id && current.indexInsideRepeat === lastQuestion.indexInsideRepeat
    }
    return lastQuestion?.id === current.id
  }

  getLastQuestionOfInterview(): GenericQuestion | null {
    let found = null;
    const interviewList = Array.from(this.interview)
    for (let i = interviewList.length - 1; i >= 0; i--) {
      const question = interviewList[i][1]
      const questionCanBeShown = this.canBeShown(question)
      if (questionCanBeShown) {
        if (question.type === 'repeat') {
          const repeat = question as Repeat
          for (let j = parseInt(question.value as string) - 1; j >= 0; j--) {
            if (!repeat.content[j].hidden) {
              found = repeat.content[j].nestedInterview.getLastQuestionOfInterview()
              if (found) break
            }
          }
          if (!found) found = question
          break
        } else {
          found = question
          break
        }
      }
    }
    return found
  }

  // Returns interview of current question
  getCurrentGuidedInterview(): GuidedInterview | null {
    const interviewList = Array.from(this.interview)
    let current: GuidedInterview | null = null;
    for (let i = 0; i < interviewList.length ; i++) {
      const question = interviewList[i][1];
      if (question.isCurrent) {
        current = this
        break
      }
      if (question.type === 'repeat') {
        const repeat = question as Repeat
        for (let j = 0; j < parseInt(question.value as string) ; j++) {
          if (!repeat.content[j].hidden) {
            current = repeat.content[j].nestedInterview.getCurrentGuidedInterview()
            if (current) break
          }
        }
      }
    }
    if (this.isRoot && !current) current = this
    return current
  }

  getCurrent(): Question | MultipleChoice | Repeat {
    if (!this.current) {
      this.current = Array.from(this.interview)[0][1]
      if (this.isRoot) {
        Array.from(this.interview)[0][1].isCurrent = true
      }
    }
    return this.current;
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

    const { range, id, questions, indexInsideRepeat } = repeatQuestion
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

      const nestedInterview = new GuidedInterview(replaceIndexInQuestionsOfRepeatQuestion(questions, i, indexInsideRepeat), { 
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
    // Check if id ALREADY EXISTS IN NESTED QUESTIONS
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
