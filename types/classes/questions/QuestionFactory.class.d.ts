import { Question, QuestionParams } from './Question.class';
import { Interview } from '../Interview.class';
export declare const QuestionFactory: {
    createQuetion(params: QuestionParams, interview: Interview): Question;
};
