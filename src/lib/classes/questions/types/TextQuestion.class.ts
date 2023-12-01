import { Question, QuestionParams } from '../Question.class';
import { InterviewInterface } from "@/lib/interfaces";

export class TextQuestion extends Question {

    constructor(params: QuestionParams, interview: InterviewInterface) {
        super(params, interview)
    }
    
}