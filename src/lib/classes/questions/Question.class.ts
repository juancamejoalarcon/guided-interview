import { ValidationError } from "../ValidationError.class";
import { isSnakeCase, isCamelCase } from '@/lib/services/utils.service'
import { Interview, interviewParams } from "@/lib/classes/Interview.class";
import { Observer } from "../observable/Observer.interface";

export type QuestionParams = {
    id: string,
    type: string,
    subType?: string,
    title?: string,
    placeholder?: string;
    required?: boolean;
    indications?: string;
    value?: string | number;
    logic?: {
        showIf?: string;
        hideIf?: string;
    }
}

export abstract class Question implements Observer {

    private _id!: string;
    private _type: string;
    protected _subType: string;
    private _title: string;
    private _placeholder: string;
    private _required: boolean;
    protected _value!: string | number;
    private _logic: {
        showIf?: string;
        hideIf?: string;
    };

    protected _interview: Interview

    // These public variables are for Navigation purposes
    public isCurrent: boolean = false
    public isEnd: boolean = false
    public exitRepeat: boolean = false
    public indexInsideRepeat: number = 0
    public isLast: boolean = false
    public isNotLastOfRepeatContent: boolean = false
    public isPrevious: boolean = false

    constructor(params: QuestionParams, interview: Interview) {
        this._interview = interview

        this.id = params.id
        this._type = params.type
        this._subType = params.subType || ''
        this._title = params.title || ''
        this._placeholder = params.placeholder || ''
        this._required = params.required || false
        this._logic = params.logic || {}

    }

    public get id() {
        return this._id;
    }

    public set id(id: string) {
        this.idIsNotInCamelCaseOrSnakeCase(id)
        this.findDuplicatedIdsInInterview(this._interview.getInterviewParams(), [id])
        this._id = id
    }

    public get type() {
        return this._type;
    }

    public get value() {
        return this._value
    }

    public get required() {
        return this._required
    }

    public get title() {
        return this._title
    }

    idIsNotInCamelCaseOrSnakeCase(id: string): void {

        if (!isCamelCase(id) && !isSnakeCase(id)) {
            throw new ValidationError('', `ID '${id}' is not in camel case or snake case`);
        }

    }

    findDuplicatedIdsInInterview(params: interviewParams, ids: string[] = []) {
        for (const question of Object.values(params)) {
            const id = question.id
            if (ids.includes(id)) {
                throw new ValidationError('', 'ID REPEATED: ' + id);
            }

            ids.push(id)

            if (question.type === 'repeat') {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                this.findDuplicatedIdsInInterview((question as any).questions)
            }
        }
    }

    setValue(value: string) {
        this._value = value
    }

    update() {
        this.updateState()
    }

    updateState() {
        this._interview.state.setPropertyInState(this._id, {
            title: this._title,
            value: this._value
        })
    }

    getParams() {
        return {
            id: this._id,
            type: this._type,
        }
    }

    canBeShown(): boolean {
        if (this._logic?.showIf) {
            const keys = this._interview.map.keys()
            const values = this._interview.map.values()
            const showIfFunct = Function(...keys, `return ${this._logic.showIf}`).bind(this)
            const result = showIfFunct(...values)
            if (!result) return false
        }
        if (this._logic?.hideIf) {
            const keys = this._interview.map.keys()
            const values = this._interview.map.values()
            const hideIfFunct = Function(...keys, `return ${this._logic.hideIf}`).bind(this)
            const result = !hideIfFunct(...values)
            if (!result) return false
        }
        return true
    }

    addOrUpdateParam(name: string, value: any): void {
        if (name === 'required') {
            this._required = Boolean(value)
        }
    }
    
}