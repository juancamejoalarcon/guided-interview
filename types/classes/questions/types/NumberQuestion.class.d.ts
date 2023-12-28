import { Interview } from '../../Interview.class';
import { Question, QuestionParams } from '../Question.class';
export declare class NumberQuestion extends Question {
    constructor(params: QuestionParams, interview: Interview);
    setValue(value: string | number): void;
}
