import { Question, QuestionProp, MultipleChoice, MultipleChoiceProp, DateProp, Repeat, RepeatProp, Choice } from "./interfaces";
import { GenericQuestion, interviewParams, DataSaved } from "./types/General";
import { EventList } from "./services/event-bus.service";
export * from "./interfaces";
export declare class GuidedInterview {
    interview: Map<string, Question | MultipleChoice | Repeat>;
    private events;
    private current;
    private isRoot;
    data: any;
    constructor(interview?: any, options?: any);
    get questionsMap(): Map<string, Question | MultipleChoice | Repeat>;
    setInterview(interview: Map<string, Question | MultipleChoice | Repeat>): void;
    init(interviewParams: interviewParams): void;
    getInterviewParams(): interviewParams;
    add(params: QuestionProp | MultipleChoiceProp | DateProp | RepeatProp, setAsCurrent?: boolean): Question | MultipleChoice | Repeat;
    remove(id: string): void;
    getNestedInterview(id: string, index: number): GuidedInterview;
    canBeShown(question: Question): boolean;
    setCurrent(id: string): void;
    next(): void;
    nextAvailableQuestion(index: number): [string, Question | MultipleChoice | Repeat];
    previous(): void;
    previousAvailableQuestion(index: number): [string, Question | MultipleChoice | Repeat];
    getCurrent(): Question | MultipleChoice | Repeat;
    setValue(id: string, value: string | number): void;
    on(event: EventList, callback: Function): void;
    getData(): any;
    setRadioChecked(question: MultipleChoice, value: string): void;
    buildContentForRepeatQuestion(repeatQuestion: Repeat, value?: number | null): void;
    applyDataToQuestions(data: DataSaved): void;
    makeTemplate(template: string): string;
    getStepById(id: string): GenericQuestion | null;
    checkIfIdIsValid(id: string): {
        isValid: boolean;
        message: string;
    };
    changeIdOfQuestion(id: string, newId: string): void;
    findQuestionById(id: string): Question | MultipleChoice | Repeat;
    findMultipleChoiceById(id: string): MultipleChoice;
    addChoiceToMultipleChoice(id: string, choice: Choice): void;
    removeChoiceFromMultipleChoice(id: string, index: number): void;
    changeLabelOfChoice(id: string, index: number, label: string): void;
    setDefaultCheckedChoice(id: string, index: number): void;
    setQuestionAsRequired(id: string, required: boolean): void;
    setTitleOfQuestion(id: string, title: string): void;
    setPlaceholder(id: string, placeholder: string): void;
    setExtraOption(id: string, param: string, value: any): void;
    setIndications(id: string, indications: string): void;
}
