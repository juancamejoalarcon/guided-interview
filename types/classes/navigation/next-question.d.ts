import { Interview } from '../Interview.class';
import { Question } from '../questions/Question.class';
export declare const getNextQuestion: (interview: Interview, isRoot: boolean) => Question | null | undefined;
