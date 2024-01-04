export type copiedQuestion = {
    id: string | undefined;
    title: string | undefined;
    type: string;
    choices?: any[];
    value: any;
    placeholder?: string;
    subType?: string;
};
export declare class Cloner {
    interview: any[];
    nested: string[];
    ignoreIds: string[];
    endsForRepeat: any;
    result: any;
    alreadyCopiedRepeats: any;
    questionsInsideRepeat: any[];
    getQuestion: (options?: any) => Promise<copiedQuestion>;
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
    setValueOfRepeat: (id: string, value: number, options?: any) => Promise<void>;
    waitPreviousActive: () => Promise<void>;
    separator: string;
    constructor(getQuestion: (options?: any) => Promise<copiedQuestion>, isLastRadio: () => Promise<boolean>, getCompletionPercen: () => Promise<string | number>, checkNextRadio: (id: string) => Promise<{
        id: string;
        label: string;
    }>, checkFirstRadio: (id: string) => Promise<{
        id: string;
        label: string;
    }>, isEnd: () => Promise<boolean>, nextQuestion: () => Promise<void>, previousQuestion: () => Promise<void>, isRepeat: (id: string) => Promise<boolean>, goToEndAndGetIdsAndGoBack: () => Promise<string[]>, setValueOfRepeat: (id: string, value: number, options?: any) => Promise<void>, waitPreviousActive: () => Promise<void>, ignoreIds?: string[], endsForRepeat?: any);
    start(question: copiedQuestion): Promise<void>;
    insertQuestionInInterview(question: any, percentageOfCompletion: string | number): void;
    applyLogicToQuestion(question: any): void;
    questionExistsInInterview(id: string): any;
    getQuestionInInterview(id: string): any;
    getQuestionInsideRepeat(id: string): any;
    setActiveMultipleOption(id: string, label: string, subType?: string): void;
    removeActiveMultipleOption(): void;
    addQuestion(questionProps: copiedQuestion, percentageOfCompletion: string | number): void;
    copyRepeat(question: copiedQuestion): Promise<void>;
    copyQuestion(start?: boolean, happyPath?: boolean): Promise<void>;
    backToPreviousActive(): Promise<void>;
    happyPath(): Promise<void>;
    transform(): void;
    createResult(): void;
    copy(): Promise<any>;
}
