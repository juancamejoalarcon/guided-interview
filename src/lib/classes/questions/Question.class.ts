import { ValidationError } from "../ValidationError.class";
import { isSnakeCase, isCamelCase } from '@/lib/services/utils.service'
import { InterviewInterface } from "@/lib/interfaces";

export type QuestionParams = {
    id: string,
    type: string,
    subType?: string,
    title?: string,
    placeholder?: string;
    required?: boolean;
    indications?: string;
    value?: string;
    logic?: {
        showIf?: string;
        hideIf?: string;
    }
}

export abstract class Question {

    private _id!: string;
    private _type: string;
    private _subType: string;
    private _title: string;
    private _placeholder: string;
    protected _value!: string | number;
    private _logic: {
        showIf?: string;
        hideIf?: string;
    };

    private _interview: InterviewInterface

    constructor(params: QuestionParams, interview: InterviewInterface) {
        this.id = params.id
        this._type = params.type
        this._subType = params.subType || ''
        this._title = params.title || ''
        this._placeholder = params.placeholder || ''
        this._logic = params.logic || {}

        this.setValue(params.value || '')

        this._interview = interview
    }

    public get id() {
        return this._id;
    }

    public set id(id: string) {
        this.idIsNotInCamelCaseOrSnakeCase(id)
        this._id = id
    }

    idIsNotInCamelCaseOrSnakeCase(id: string): void {

        if (!isCamelCase(id) && !isSnakeCase(id)) {
            throw new ValidationError('', `ID '${id}' is not in camel case or snake case`);
        }

    }

    setValue(value: string) {
        this._value = value
    }

    getParams() {
        return {
            id: this._id,
            type: this._type
        }
    }
    
}