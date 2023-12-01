import { Question, QuestionParams } from '../Question.class';
import { InterviewInterface } from "@/lib/interfaces";

export type RepeatQuestionParams = {
    range: {
        min: number;
        max: number;
    }
} & QuestionParams

export class RepeatQuestion extends Question {

    private _range: {
        min: number;
        max: number;
    };
    private _content: { 
        [index: string]: { hidden: boolean, nestedInterview: any } 
    } = {};

    constructor(params: RepeatQuestionParams, interview: InterviewInterface) {
        super(params, interview)
        // TODO: validate range params
        this._range = params.range
        this.setValue(this._value as string)
        this.buildContent()
    }

    setValue(value: string) {

        const parsedNumber = parseInt(value)

        if (isNaN(parseFloat(value)) || value === '') {
            throw new Error(`Value of question whith id '${this.id}' must be a number`);
        }
        this._value = this._range ? parsedNumber : this.getValueBetweenRange(parsedNumber)
    }

    getValueBetweenRange(value: number) {

        if (value < this._range.min) {
            return this._range.min
        }

        if (value > this._range.max) {
            return this._range.max
        }

        return this._value
    }

    buildContent() {
        const value = this._value as number
        for (let i = 0; i < value; i++) {
            const contentElement = this._content[i]

            if (contentElement) {
                contentElement.hidden = false
                continue;
            }

        }
    }
    
}