import { GenericQuestion } from "../types/General";
export type copiedQuestion = {
    id: string | undefined;
    title: string | undefined;
    type: string;
    choices?: any[];
    value: any;
    placeholder?: string;
};
export declare class Cloner {
    interview: GenericQuestion[];
    nested: string[];
    currentRepeat: string[];
    currentRepeatEnd: string[];
    result: any;
    getQuestion: () => Promise<copiedQuestion>;
    isLastRadio: () => Promise<boolean>;
    isEnd: () => Promise<boolean>;
    nextQuestion: () => Promise<void>;
    previousQuestion: () => Promise<void>;
    getCompletionPercen: () => Promise<string | number>;
    checkNextRadio: (id: string) => Promise<{
        id: string;
        label: string;
    }>;
    checkFirstRadio: (id: string) => Promise<{
        id: string;
        label: string;
    }>;
    isRepeat: (id: string) => Promise<boolean>;
    goToEndAndGetIdsAndGoBack: () => Promise<string[]>;
    setValueOfRepeat: (id: string, value: number) => Promise<void>;
    alphabetMap: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    constructor(getQuestion: () => Promise<copiedQuestion>, isLastRadio: () => Promise<boolean>, getCompletionPercen: () => Promise<string | number>, checkNextRadio: (id: string) => Promise<{
        id: string;
        label: string;
    }>, checkFirstRadio: (id: string) => Promise<{
        id: string;
        label: string;
    }>, isEnd: () => Promise<boolean>, nextQuestion: () => Promise<void>, previousQuestion: () => Promise<void>, isRepeat: (id: string) => Promise<boolean>, goToEndAndGetIdsAndGoBack: () => Promise<string[]>, setValueOfRepeat: (id: string, value: number) => Promise<void>);
    start(question: copiedQuestion): void;
    insertQuestionInInterview(question: GenericQuestion, percentageOfCompletion: string | number): void;
    applyLogicToQuestion(question: GenericQuestion): void;
    questionExistsInInterview(id: string): GenericQuestion;
    getQuestionInInterview(id: string): GenericQuestion;
    setActiveMultipleOption(id: string, label: string): void;
    removeActiveMultipleOption(): void;
    addQuestion(questionProps: copiedQuestion, percentageOfCompletion: string | number): void;
    copyRepeat(question: copiedQuestion): Promise<void>;
    copyQuestion(start?: boolean, happyPath?: boolean): Promise<void>;
    backToPreviousActive(): Promise<void>;
    happyPath(): Promise<void>;
    transform(): void;
    relocateQuestionsInsideRepeat(): void;
    createResult(): void;
    copy(): Promise<any>;
}
