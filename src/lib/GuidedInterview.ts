import { Question, QuestionProp } from "./interfaces/Question.interface";
import { MultipleChoice } from "./interfaces/MultipleChoice.interface";
import { generateRandomId } from "./services/create.service";
import { EventBus, EventList } from "./services/event-bus.service";

const QuestionTypes = {
  text: true,
  multipleChoice: true,
  number: true,
};

type interviewParams = { [id: string]: QuestionProp };

export class GuidedInterview {
  private interview = new Map<string, Question | MultipleChoice>();
  private events = new EventBus();
  private current!: string;

  constructor(interview: any) {
    if (interview) this.init(interview);
  }

  public get questionsMap(): Map<string, Question | MultipleChoice> {
    return this.interview;
  }

  init(interview: interviewParams) {
    for (const value of Object.values(interview)) {
      this.add(value);
    }
  }

  add(params: QuestionProp, setAsCurrent: boolean = false) {
    if (!QuestionTypes[params.type]) {
      throw new Error("Invalid question type");
    }
    const id: string = params.id || generateRandomId();
    const question = {
      id,
      type: params.type,
      subType: params.subType || "",
      title: params.title || "",
      required: Boolean(params.required),
      indications: params.indications || "",
      value: params.value || "",
      logic: params.logic || {}
    };
    this.interview.set(id, question);
    this.events.dispatch("question-added", question);
    return question;
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
    this.interview.get(id)!.value = value;
    this.events.dispatch("set-value", this.interview.get(id));
  }

  on(event: EventList, callback: Function) {
    this.events.register(event, callback);
  }
}
