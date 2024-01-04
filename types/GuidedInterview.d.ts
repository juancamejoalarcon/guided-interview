import { Interview, interviewParams } from './classes/Interview.class';
import { Navigation } from './classes/navigation/Navigation.class';
import { Question, Choice } from './classes/questions';
type GuidedInterviewParams = {
    interviewParams: interviewParams;
};
export declare class GuidedInterview {
    _interview: Interview;
    private _isRoot;
    navigation: Navigation;
    isLastContentInterviewOfRepeat: boolean;
    constructor(params?: GuidedInterviewParams, isRoot?: boolean);
    get interview(): Interview;
    setValue(id: string, value: string | number): void;
    getCurrent(): Question;
    next(): void;
    getNextQuestion(): Question | null | undefined;
    previous(): void;
    getPreviousQuestion(previous?: Question | null): Question | null | undefined;
    getLastQuestionOfInterview(): Question | null;
    isQuestionTheLastOfInterview(id: string): boolean;
    getProgress(): {
        total: number;
        currentPosition: number;
        percentageOfCompletion: number;
    };
    isStart(): boolean;
    isEnd(): boolean;
    getInterviewAsArray(): [string, Question][];
    getInterviewParams(): interviewParams;
    getNestedInterview(id: string, index: number): GuidedInterview;
    getCurrentGuidedInterview(): GuidedInterview | null;
    changeIdOfQuestion(oldId: string, newId: string): void;
    findQuestionById(id: string): Question;
    addChoiceToMultipleChoiceQuestion(id: string, choice: Choice): void;
    removeChoiceFromMultipleChoice(id: string, choice: Choice | number | string): void;
    changeLabelOfChoice(id: string, index: number, label: string): void;
    addOrUpdateParamOfQuestion(id: string, param: {
        name: string;
        value: any;
    }): void;
    getState(): any;
}
export {};
