import { Interview, interviewParams } from '../../Interview.class';
import { Question, QuestionParams } from '../Question.class';
import { GuidedInterview } from '@/lib/GuidedInterview';

export type RepeatQuestionParams = {
    range: {
        min: number;
        max: number;
    },
    questions: interviewParams
} & QuestionParams

export class RepeatQuestion extends Question {

    private _range: {
        min: number;
        max: number;
    };
    private _questions: interviewParams;
    private _content: { 
        [index: string]: { hidden: boolean, nestedInterview: GuidedInterview } 
    } = {};

    constructor(params: RepeatQuestionParams, interview: Interview) {
        super(params, interview)
        // TODO: validate range params
        this._range = params.range
        this._questions = params.questions
        this.setValue(params.value as string)
        this.update()
    }

    public get content() {
        return this._content;
    }

    public get range() {
        return this._range;
    }

    setValue(value: string) {

        const parsedNumber = parseFloat(value)

        if (isNaN(parsedNumber) || value === '') {
            throw new Error(`Value of question whith id '${this.id}' must be a number`);
        }

        this._value = this.getValueBetweenRange(parsedNumber)
        
        if (this._questions) this.buildContent()
    }

    getValueBetweenRange(value: number) {

        if (value < this._range.min) {
            return this._range.min
        }

        if (value > this._range.max) {
            return this._range.max
        }

        return value
    }

    buildContent() {
        const value = this._value as number
        for (let i = 0; i < value; i++) {
            const contentElement = this._content[i]

            if (contentElement) {
                contentElement.hidden = false
                continue;
            }

            this.addIndexToNestedQuestions(i)
            const nestedInterview = new GuidedInterview({ interviewParams: this._questions }, false)

            this._content[i] = { hidden: false, nestedInterview }
        }

        // Hide remaining questions
        const contentLength = Object.keys(this._content)
        if (value < contentLength.length) {
            for (let i = value; i < contentLength.length; i++) {
                this._content[i].hidden = true
            }
        }

        // Add flag to know if it is the last nested interview while navigating
        const allNestedInterviews = Object.values(this._content)
        allNestedInterviews.forEach((interview, index) => {
            interview.nestedInterview.isLastContentInterviewOfRepeat = (index + 1) === this._value
        })

    }

    addIndexToNestedQuestions(i: number) {
        Object.values(this._questions).forEach((question) => {
            const index = i + 1
            if (this.indexInsideRepeat !== null) {
                question.indexInsideRepeat = this.indexInsideRepeat + `.${index}`
            } else {
                question.indexInsideRepeat = index.toString()
            }
        })
    }

    getParams() {
        return {
            id: this.id,
            type: this.type,
            questions: this._questions
        }
    }

    updateState() {
        this._interview.state.setPropertyInState(this.id, {
            title: this.title,
            value: this._value,
            content: this.getContentForState()
        })
    }

    getContentForState() {
        const contentData: { [index: string]: {
            hidden: boolean,
            state: string,
        }} = {}

        for (const [key, value] of Object.entries(this._content)) {
            contentData[key] = {
                hidden: value.hidden,
                state: value.nestedInterview.getState()
            }
        }
        return contentData
    }
    
}