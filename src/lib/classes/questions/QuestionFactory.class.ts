import { Question, QuestionParams } from './Question.class'
import { TextQuestion } from './types/TextQuestion.class'
import { NumberQuestion } from './types/NumberQuestion.class'
import { RepeatQuestion, RepeatQuestionParams } from './types/RepeatQuestion.class'
import { DateQuestion, DateQuestionParams } from './types/DateQuestion.class'
import { Interview } from '../Interview.class'
import { MultipleChoiceQuestion, MultipleChoiceQuestionParams } from './types/MultipleChoiceQuestion.class'

export const QuestionFactory = {
    createQuetion(params: QuestionParams, interview: Interview): Question {

        const { type } = params
        let question;

        if (type === 'text') {
            question = new TextQuestion(params, interview);
        } else if (type === 'number') {
            question = new NumberQuestion(params, interview);
        } else if (type === 'date') {
            question = new DateQuestion(params as DateQuestionParams, interview);
        } else if (type === 'multipleChoice') {
            question = new MultipleChoiceQuestion(params as MultipleChoiceQuestionParams, interview);
        } else if (type === 'repeat') {
            question = new RepeatQuestion(params as RepeatQuestionParams, interview);
        } else {
            question = new TextQuestion(params, interview)
        }
        return question
    }
}