import { RepeatProp, InterviewInterface } from "@/lib/interfaces";
import { ValidationError } from "./ValidationError.class";
import { QuestionParams, Question } from './questions/Question.class'
import { QuestionFactory } from "./questions/QuestionFactory.class";

type interviewParams = { 
    [id: string]: QuestionParams
    
};

export class Interview implements InterviewInterface {

    private interviewMap = new Map<string, Question>();

    constructor(params: interviewParams) {
        this.validateParams(params);
        this.setInitialParams(params)
    }

    validateParams(params: interviewParams) {
        if (params === null || params === undefined) {
            throw new ValidationError("nullOrUndefined");
        }
        this.findDuplicatedIds(params)
    }

    // getInterviewParams(): interviewParams {
    //     const params: interviewParams = {}
    //     for (let [id, question] of this.interviewMap) {
    //         params.id = question.getParams()
    //         console.log(key + " is " + value);
    //     }
    //     return params
    // }

    // Poner esto en Question.class
    findDuplicatedIds(params: interviewParams, ids: string[] = []): void {

        for (const question of Object.values(params)) {
            const id = question.id
            if (ids.includes(id)) {
                throw new ValidationError('', 'ID REPEATED: ' + id);
            }

            ids.push(id)

            if (question.type === 'repeat') {
                this.findDuplicatedIds((question as any).questions)
            }
        }

    }

    setInitialParams(params: interviewParams) {
        for (const value of Object.values(params)) {
            this.addQuestion(value);
        }
    }

    addQuestion(params: QuestionParams) {
        const question = QuestionFactory.createQuetion(params);
        this.interviewMap.set(question.id, question);
    }


    setValueOfQuestion(id: string, value: string) {

        this.idExists(id)

        const question = this.interviewMap.get(id)
        question?.setValue(value)
    }

    idExists(id: string) {

        if (!this.interviewMap.has(id)) {
            throw new Error("No question with id:" + id);
        }

    }

}