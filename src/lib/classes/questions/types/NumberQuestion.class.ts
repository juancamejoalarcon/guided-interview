import { Question, QuestionParams } from '../Question.class';
import { InterviewInterface } from "@/lib/interfaces";

export class NumberQuestion extends Question {

    constructor(params: QuestionParams, interview: InterviewInterface) {
        super(params, interview)
    }

    setValue(value: string) {

        const parsedNumber = parseFloat(value)

        if (isNaN(parseFloat(value)) || value === '') {
            throw new Error(`Value of question whith id '${this.id}' must be a number`);
        }
        this._value = parsedNumber
    }
    
}