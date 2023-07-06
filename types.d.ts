declare module "interfaces/Question.interface" {
    export interface Question {
        id: string;
        type: 'text' | 'number' | 'date' | 'multipleChoice' | 'repeat';
        subType?: string;
        title: string;
        required?: boolean;
        indications?: string;
        value: string | number;
        placeholder?: string;
        logic?: {
            showIf?: any;
        };
    }
    export interface QuestionProp extends Omit<Question, 'id' | 'title' | 'required' | 'value'> {
        id?: string;
        title?: string;
        required?: boolean;
        value?: string;
        placeholder?: string;
    }
}
declare module "interfaces/MultipleChoice.interface" {
    import { Question } from "interfaces/Question.interface";
    export interface MultipleChoice extends Question {
        choices: Choice[];
        type: 'multipleChoice';
        subType?: 'radio' | 'select';
    }
    export interface Choice {
        label: string;
        checked: boolean;
    }
    export interface MultipleChoiceProp extends Omit<MultipleChoice, 'id' | 'title' | 'required' | 'value'> {
        id?: string;
        title?: string;
        value?: string;
    }
}
declare module "types/General" {
    import { MultipleChoice, Repeat, Question, QuestionProp } from "interfaces/index";
    export type interviewParams = {
        [id: string]: QuestionProp;
    };
    export type DataSaved = {
        [id: string]: {
            value: string;
            content?: {
                [id: string]: {
                    hidden?: boolean;
                    questions: DataSaved;
                };
            };
        };
    };
    export type GenericQuestion = Question | MultipleChoice | Repeat;
}
declare module "interfaces/Repeat.interface" {
    import { interviewParams } from "types/General";
    import { Question } from "interfaces/Question.interface";
    export interface Repeat extends Question {
        type: "repeat";
        range: {
            min: number;
            max: number;
        };
        questions: interviewParams;
        content: {
            [index: string]: {
                hidden: boolean;
                nestedInterview: any;
            };
        };
        value: number;
    }
    export interface RepeatProp extends Omit<Repeat, "id" | "title" | "required" | "value"> {
        id?: string;
        title?: string;
        required?: boolean;
        value?: string;
        placeholder?: string;
    }
}
declare module "interfaces/Date.interface" {
    import { Question } from "interfaces/Question.interface";
    export interface DateTime extends Question {
        type: "date";
        format: string;
    }
    export interface DateProp extends Omit<DateTime, "id" | "title" | "required" | "value"> {
        id?: string;
        title?: string;
        required?: boolean;
        value?: string;
        placeholder?: string;
    }
}
declare module "interfaces/index" {
    export * from "interfaces/Question.interface";
    export * from "interfaces/MultipleChoice.interface";
    export * from "interfaces/Repeat.interface";
    export * from "interfaces/Date.interface";
}
declare module "services/utils.service" {
    import { interviewParams, GenericQuestion } from "types/General";
    export const isTest: () => boolean;
    export const generateRandomId: () => string;
    export const validateParams: (params: interviewParams) => boolean;
    export const getValueBetweenRanges: (value: number, min: number, max: number) => number;
    export const validateSetValue: (value: string | number, question: GenericQuestion) => void;
}
declare module "services/event-bus.service" {
    export interface Registry {
        unregister: () => void;
    }
    export interface Callable {
        [key: string]: Function;
    }
    export interface Subscriber {
        [key: string]: Callable;
    }
    export interface IEventBus {
        dispatch<T>(event: string, arg?: T): void;
        register(event: string, callback: Function): Registry;
    }
    export type EventList = 'inited' | 'question-added' | 'set-current' | 'set-value';
    export class EventBus implements IEventBus {
        private subscribers;
        private static nextId;
        constructor();
        dispatch<T>(event: EventList, arg?: T): void;
        register(event: EventList, callback: Function): Registry;
        private getNextId;
    }
}
declare module "services/create.service" {
    import { Question, QuestionProp } from "interfaces/Question.interface";
    import { MultipleChoice, MultipleChoiceProp } from "interfaces/MultipleChoice.interface";
    import { DateProp } from "interfaces/Date.interface";
    import { Repeat, RepeatProp } from "interfaces/Repeat.interface";
    import { interviewParams } from "types/General";
    export const getQuestion: (params: QuestionProp | MultipleChoiceProp | DateProp | RepeatProp, setAsCurrent?: boolean) => Question | MultipleChoice | Repeat;
    export const buildTextQuestion: (params: QuestionProp) => {
        value: string;
        required: boolean;
        placeholder: string;
        subType: string;
    };
    export const buildDateQuestion: (params: DateProp) => {
        value: string;
        required: boolean;
        placeholder: string;
        subType: string;
        format: string;
    };
    export const buildMultipleChoiceQuestion: (params: MultipleChoiceProp) => {
        value: string;
        choices: import("interfaces/MultipleChoice.interface").Choice[];
        subType: "select" | "radio";
    };
    export const buildRepeatQuestion: (params: RepeatProp) => {
        value: string;
        range: {
            min: number;
            max: number;
        };
        questions: interviewParams;
    };
    export const replaceIndexInQuestionsOfRepeatQuestion: (questions: interviewParams, index: number) => interviewParams;
}
declare module "services/templating.service" {
    export const makeTemplate: (interviewData: any, template: string) => string;
}
declare module "GuidedInterview" {
    import { Question, QuestionProp, MultipleChoice, MultipleChoiceProp, DateProp, Repeat, RepeatProp } from "interfaces/index";
    import { interviewParams, DataSaved } from "types/General";
    import { EventList } from "services/event-bus.service";
    export * from "interfaces/index";
    export class GuidedInterview {
        interview: Map<string, Question | MultipleChoice | Repeat>;
        private events;
        private current;
        private isRoot;
        private data;
        constructor(interview?: any, options?: any);
        get questionsMap(): Map<string, Question | MultipleChoice | Repeat>;
        init(interviewParams: interviewParams): void;
        add(params: QuestionProp | MultipleChoiceProp | DateProp | RepeatProp, setAsCurrent?: boolean): Question | MultipleChoice | Repeat;
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
    }
}
