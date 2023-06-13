import { 
  Question, 
  QuestionProp,
  MultipleChoice,
  MultipleChoiceProp, 
  DateProp, 
  Repeat, 
  RepeatProp 
} from "./interfaces";
import { GenericQuestion } from "./types/General";
import { validateParams, getValueBetweenRanges, validateSetValue } from "./services/utils.service";
import { EventBus, EventList } from "./services/event-bus.service";
import { getQuestion, replaceIndexInQuestionsOfRepeatQuestion } from "./services/create.service";

export * from "./interfaces";
type interviewParams = { [id: string]: QuestionProp };


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
    if (interview !== "empty") this.init(interview);
    // if (this.isRoot) console.log(this.interview)
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
}
