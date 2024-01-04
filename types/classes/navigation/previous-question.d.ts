import { Interview } from '../Interview.class';
import { Question } from '../questions/Question.class';
export declare const getPreviousQuestion: (interview: Interview, isRoot: boolean, previous: Question | null | undefined, isLastContentInterviewOfRepeat: boolean | undefined, isQuestionTheLastOfInterview: (id: string, interview: Interview | null) => boolean) => Question | null | undefined;
