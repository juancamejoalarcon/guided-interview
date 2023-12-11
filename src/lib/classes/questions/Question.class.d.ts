import { Interview, interviewParams } from "@/lib/classes/Interview.class";
import { Observer } from "../observable/Observer.interface";
export type QuestionParams = {
    id: string;
    type: string;
    subType?: string;
    title?: string;
    placeholder?: string;
    required?: boolean;
    indications?: string;
    value?: string | number;
    logic?: {
        showIf?: string;
        hideIf?: string;
    };
    indexInsideRepeat?: string | null;
};
export declare abstract class Question implements Observer {
    private _id;
    private _type;
    protected _subType: string;
    private _title;
    private _placeholder;
    private _required;
    protected _value: string | number;
    private _logic;
    protected _interview: Interview;
    isCurrent: boolean;
    isEnd: boolean;
    exitRepeat: boolean;
    indexInsideRepeat: string | null;
    isLast: boolean;
    isNotLastOfRepeatContent: boolean;
    isPrevious: boolean;
    constructor(params: QuestionParams, interview: Interview);
    get id(): string;
    set id(id: string);
    get type(): string;
    get value(): string | number;
    get required(): boolean;
    get title(): string;
    get state(): {
        title: string;
        value: string | number;
    };
    idIsNotInCamelCaseOrSnakeCase(id: string): void;
    findDuplicatedIdsInInterview(params: interviewParams, ids?: string[]): void;
    setValue(value: string): void;
    update(): void;
    updateState(): void;
    getStateOfQuestion(): {
        title: string;
        value: string | number;
    };
    getTitleForState(): string;
    getParams(): {
        id: string;
        type: string;
    };
    canBeShown(): boolean;
    addOrUpdateParam(name: string, value: unknown): void;
}
