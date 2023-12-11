import { Interview } from '../Interview.class';
import { Question } from '../questions/Question.class';
export declare const getPreviousQuestion: (interview: Interview, isRoot: boolean, previous: Question | null, isLastContentInterviewOfRepeat: boolean, isQuestionTheLastOfInterview: (id: string, interview: Interview | null) => boolean) => Question | null | undefined;
