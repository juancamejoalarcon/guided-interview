import { Question, QuestionProp } from "./interfaces/Question.interface";
import { MultipleChoice, MultipleChoiceProp } from "./interfaces/MultipleChoice.interface";
import { DateProp } from "./interfaces/Date.interface";
import { Repeat, RepeatProp } from "./interfaces/Repeat.interface";
import { validateParams } from "./services/create-utils.service";
import { EventBus, EventList } from "./services/event-bus.service";
import { getQuestion } from "./services/create.service";

type interviewParams = { [id: string]: QuestionProp };

export class GuidedInterview {
  private interview = new Map<string, Question | MultipleChoice>();
  private events!: EventBus;
  private current!: string;
  private isRoot: boolean = true;
  private data: any = {};

  constructor(interview: any = "empty", options: any = { isRoot: true }) {
    this.events = options.events || new EventBus();
    this.isRoot = options.isRoot;
    if (interview !== "empty") this.init(interview);
  }

  public get questionsMap(): Map<string, Question | MultipleChoice> {
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
    if (question.type === 'repeat') this.buildGuidedInterviewForRepeatQuestion(question as Repeat)
    this.interview.set(question.id, question);
    this.events.dispatch("question-added", question);
    return question;
  }

  buildGuidedInterviewForRepeatQuestion(repeatQuestion: Repeat): void {
    repeatQuestion.questions = new GuidedInterview(repeatQuestion.questions, { isRoot: false, events: this.events }) as any
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

  getCurrent(): Question | MultipleChoice {
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
    question!.value = value;
    
    if (question?.type === 'multipleChoice') {
      this.setRadioChecked(question as MultipleChoice, value as string)
    }

    if (this.data[id]) this.data[id].value = value;
    else this.data[id] = { value: value };
    
    this.events.dispatch("set-value", this.interview.get(id));
  }

  setRadioChecked(question: MultipleChoice, value: string) {
    question.choices.forEach(choice => {
      choice.checked = choice.label === value
    })
  }

  on(event: EventList, callback: Function) {
    this.events.register(event, callback);
  }

  getData() {
    return this.data;
  }
}
