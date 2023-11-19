import { Question, QuestionProp, MultipleChoice, MultipleChoiceProp, DateProp, Repeat, RepeatProp } from "../interfaces";
import { interviewParams } from "../types/General";
export declare const getQuestion: (params: QuestionProp | MultipleChoiceProp | DateProp | RepeatProp, setAsCurrent?: boolean) => Question | MultipleChoice | Repeat;
export declare const buildTextQuestion: (params: QuestionProp) => {
    value: string;
    required: boolean;
    placeholder: string;
    subType: string;
};
export declare const buildNumberQuestion: (params: QuestionProp) => {
    value: any;
    required: boolean;
    placeholder: string;
    subType: string;
};
export declare const buildDateQuestion: (params: DateProp) => {
    value: string;
    required: boolean;
    placeholder: string;
    subType: string;
    format: string;
};
export declare const buildMultipleChoiceQuestion: (params: MultipleChoiceProp) => {
    value: string;
    values: (string | number)[];
    choices: import("../interfaces").Choice[];
    subType: "multiSelect";
} | {
    value: string;
    choices: import("../interfaces").Choice[];
    subType: "select" | "radio";
    values?: undefined;
};
export declare const buildRepeatQuestion: (params: RepeatProp) => {
    value: string;
    range: {
        min: number;
        max: number;
    };
    questions: interviewParams;
};
export declare const replaceIndexInQuestionsOfRepeatQuestion: (questions: interviewParams, index: number, indexInsideRepeat?: string | null) => interviewParams;
