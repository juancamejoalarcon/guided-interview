import { Interview } from '../../Interview.class';
import { Question, QuestionParams } from '../Question.class';

export class NumberQuestion extends Question {

    constructor(params: QuestionParams, interview: Interview) {
        super(params, interview)
        this.setValue(params.value || 0)
        this.update()
    }

    setValue(value: string | number) {

        const parsedNumber = parseFloat(value as string)

        if (isNaN(parsedNumber) || value === '') {
            throw new Error(`Value of question whith id '${this.id}' must be a number`);
        }
        this._value = parsedNumber
    }
    
}