import { Interview } from '../../Interview.class';
import { Question, QuestionParams } from '../Question.class';
export type DateQuestionParams = {
    format: string;
} & QuestionParams;
export declare class DateQuestion extends Question {
    private _format;
    constructor(params: DateQuestionParams, interview: Interview);
}
