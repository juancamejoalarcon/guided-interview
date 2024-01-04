import { Interview } from '../../Interview.class';
import { Question, QuestionParams } from '../Question.class';

export type DateQuestionParams = {
    format: string;
} & QuestionParams

export class DateQuestion extends Question {

    private _format: string;

    constructor(params: DateQuestionParams, interview: Interview) {
        super(params, interview)
        this._format = params.format || "dd/mm/yyyy"
        this.setValue(params.value as string || '')
    }
    
}