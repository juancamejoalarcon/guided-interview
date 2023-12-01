import { QuestionParams } from './Question.class'
import { TextQuestion } from './types/TextQuestion.class'
import { NumberQuestion } from './types/NumberQuestion.class'
import { RepeatQuestion, RepeatQuestionParams } from './types/RepeatQuestion.class'

export const QuestionFactory = {
    createQuetion(params: QuestionParams) {

        const { type } = params
        let question;

        if (type === 'text') {
            question = new TextQuestion(params, this);
        } else if (type === 'number') {
            question = new NumberQuestion(params, this);
        } else if (type === 'repeat') {
            question = new RepeatQuestion(params as RepeatQuestionParams, this);
        } else {
            question = new TextQuestion(params, this)
        }
        return question
    }
}