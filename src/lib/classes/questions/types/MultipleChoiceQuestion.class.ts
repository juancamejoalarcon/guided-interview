import { Question, QuestionParams } from '../Question.class';
import { InterviewInterface } from "@/lib/interfaces";

export type MultipleChoiceQuestionParams = {
    choices: Choice[];
} & QuestionParams

export interface Choice {
    label: string;
    checked: boolean;
}

export class MultipleChoiceQuestion extends Question {

    private _choices: Choice[];

    constructor(params: MultipleChoiceQuestionParams, interview: InterviewInterface) {
        super(params, interview)

    }

    setChoices(choices: Choice[] = []) {

        if (!Array.isArray(choices)) {
            throw new Error(`Choices value of question whith id '${this.id}' must be an Array`);
        }

    }

    setValue(value: string) {

    }
    
}