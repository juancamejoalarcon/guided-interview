import { Interview } from '../../Interview.class';
import { Question, QuestionParams } from '../Question.class';

export class TextQuestion extends Question {

    constructor(params: QuestionParams, interview: Interview) {
        super(params, interview)
        this.setValue(params.value as string || '')
        this.update()
    }
    
}