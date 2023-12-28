import { Interview, interviewParams } from '../../Interview.class';
import { Question, QuestionParams } from '../Question.class';
import { GuidedInterview } from '../../../GuidedInterview';
export type RepeatQuestionParams = {
    range: {
        min: number;
        max: number;
    };
    questions: interviewParams;
} & QuestionParams;
export declare class RepeatQuestion extends Question {
    private _range;
    private _questions;
    private _content;
    constructor(params: RepeatQuestionParams, interview: Interview);
    get content(): {
        [index: string]: {
            hidden: boolean;
            nestedInterview: GuidedInterview;
        };
    };
    get range(): {
        min: number;
        max: number;
    };
    setValue(value: string): void;
    getValueBetweenRange(value: number): number;
    buildContent(): void;
    addIndexToNestedQuestions(i: number): void;
    getParams(): {
        id: string;
        type: string;
        questions: interviewParams;
    };
    updateState(): void;
    getContentForState(): {
        [index: string]: {
            hidden: boolean;
            state: string;
        };
    };
}
