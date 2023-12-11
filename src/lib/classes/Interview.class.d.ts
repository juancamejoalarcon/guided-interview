import { QuestionParams, Question } from './questions/Question.class';
import { Subject } from "./observable/Subject.class";
import { State } from './state/State.class';
import { Choice, MultipleChoiceQuestion } from "./questions/types/MultipleChoiceQuestion.class";
export type interviewParams = {
    [id: string]: QuestionParams;
};
export declare class Interview extends Subject {
    map: Map<string, Question>;
    state: State;
    constructor(params: interviewParams);
    validateParams(params: interviewParams): void;
    getInterviewParams(): interviewParams;
    setInitialParams(params: interviewParams): void;
    addQuestion(params: QuestionParams): void;
    removeQuestion(id: string): void;
    getQuestionById(id: string): Question;
    setValueOfQuestion(id: string, value: string): void;
    idExists(id: string): void;
    changeIdOfQuestion(oldId: string, newId: string): void;
    addChoiceToMultipleChoiceQuestion(id: string, choice: Choice): void;
    getMultipleChoiceQuestionById(id: string): MultipleChoiceQuestion;
    removeChoiceFromMultipleChoice(id: string, choice: Choice | number | string): void;
    changeLabelOfChoice(id: string, index: number, label: string): void;
    addOrUpdateParamOfQuestion(id: string, param: {
        name: string;
        value: unknown;
    }): void;
    getAsArray(): [string, Question][];
    getState(): any;
}
