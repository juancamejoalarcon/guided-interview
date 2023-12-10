import { RepeatProp, InterviewInterface } from "@/lib/interfaces";
import { ValidationError } from "./ValidationError.class";
import { QuestionParams, Question } from './questions/Question.class'
import { QuestionFactory } from "./questions/QuestionFactory.class";
import { Subject } from "./observable/Subject.class";
import { State } from './state/State.class'
import { Choice, MultipleChoiceQuestion } from "./questions/types/MultipleChoiceQuestion.class";

export type interviewParams = { 
    [id: string]: QuestionParams
};

export class Interview extends Subject {

    public map = new Map<string, Question>();
    public state: State;

    constructor(params: interviewParams) {
        super()
        this.state = new State();
        this.validateParams(params);
        this.setInitialParams(params)
    }

    validateParams(params: interviewParams) {
        if (params === null || params === undefined) {
            throw new ValidationError("nullOrUndefined");
        }
    }

    getInterviewParams(): interviewParams {
        const params: interviewParams = {}
        for (const [id, question] of this.map) {
            params[id] = question.getParams()
        }
        return params
    }

    setInitialParams(params: interviewParams) {
        for (const value of Object.values(params)) {
            this.addQuestion(value);
        }
    }

    addQuestion(params: QuestionParams) {
        const question = QuestionFactory.createQuetion(params, this);
        this.map.set(question.id, question);
        this.attach(question)
    }

    removeQuestion(id: string) {
        const question = this.getQuestionById(id) as Question
        this.map.delete(id);
        this.detach(question)
    }

    getQuestionById(id: string) {
        this.idExists(id)
        return this.map.get(id) as Question
    }

    setValueOfQuestion(id: string, value: string) {

        this.idExists(id)

        const question = this.map.get(id)
        question?.setValue(value)

        this.notify()
    }

    idExists(id: string) {
        if (!this.map.has(id)) {
            throw new Error("No question with id: " + id);
        }
    }

    changeIdOfQuestion(oldId: string, newId: string) {
        
        const question = this.getQuestionById(oldId) as Question
        question.id = newId

        this.map.set(newId, question)
        this.map.delete(oldId)

    }

    addChoiceToMultipleChoiceQuestion(id: string, choice: Choice) {
        const question = this.getMultipleChoiceQuestionById(id);
        question.addChoice(choice)
    }

    getMultipleChoiceQuestionById(id: string): MultipleChoiceQuestion {
        const question = this.getQuestionById(id)
        if (question.type !== 'multipleChoice') {
            throw new Error(`Question with id: ${id}, is not of type 'multipleChoice'`);
        }
        return question as MultipleChoiceQuestion
    }

    removeChoiceFromMultipleChoice(id: string, choice: Choice | number | string) {
        const question = this.getMultipleChoiceQuestionById(id);
        question.removeChoice(choice)
    }

    changeLabelOfChoice(id: string, index: number, label: string) {
        const question = this.getMultipleChoiceQuestionById(id);
        question.changeLabelOfChoice(index, label)
    }

    addOrUpdateParamOfQuestion(id: string, param: { name: string, value: any}) {
        const question = this.getQuestionById(id) as Question
        question.addOrUpdateParam(param?.name, param?.value)

    }

    getAsArray() {
        return Array.from(this.map)
    }

    getState() {
        return this.state.get()
    }

}