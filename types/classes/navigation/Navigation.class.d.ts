import { Interview } from '../Interview.class';
import { Question } from '../questions/Question.class';
export declare class Navigation {
    private _interview;
    private _isRoot;
    private _currentQuestion;
    constructor(interview: Interview, isRoot: boolean);
    next(): void;
    getNextQuestion(): Question | null | undefined;
    previous(): void;
    getPreviousQuestion(previous?: Question | null, isLastContentInterviewOfRepeat?: boolean): Question | null | undefined;
    setCurrent(question: Question): void;
    getCurrent(): Question;
    isQuestionTheLastOfInterview(id: string): boolean;
    getLastQuestionOfInterview(): Question | null;
    getProgress(): {
        total: number;
        currentPosition: number;
        percentageOfCompletion: number;
    };
    isStartOfInterview(): boolean;
    isEndOfInterview(): boolean;
}
