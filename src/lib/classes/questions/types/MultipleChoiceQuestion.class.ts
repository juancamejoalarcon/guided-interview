import { Interview } from '../../Interview.class';
import { Question, QuestionParams } from '../Question.class';

export type MultipleChoiceQuestionParams = {
    choices: Choice[];
    value: string
} & QuestionParams

export interface Choice {
    label: string;
    checked: boolean;
}

export class MultipleChoiceQuestion extends Question {

    private _choices: Choice[] = [];
    private _values: Array<string | number> = []

    constructor(params: MultipleChoiceQuestionParams, interview: Interview) {
        super(params, interview)
        this.setChoices(params.choices)
        if (params.value) this.setValue(params.value)
        this.update()
    }

    get choices () {
        return this._choices
    }

    get values () {
        return this._values
    }

    setChoices(choices: Choice[] = []) {

        if (!Array.isArray(choices)) {
            throw new Error(`Choices value of question whith id '${this.id}' must be an Array`);
        }
        
        this._choices = choices
        if (this._subType === 'multiSelect') {
            this._choices.forEach(choice => {
                const includedInValues = this._values.includes(choice.label)
                if (choice.checked && !includedInValues) this._values.push(choice.label)
                choice.checked = includedInValues || choice.checked
            })
        } else {
            this._value = this._choices.find((choice) => choice.checked === true)?.label || ""
        }
    }

    setValue(value: string) {

        this.choiceWithValueExists(value)

        if (this._subType === 'multiSelect') {
            this.setMultiSelectValue(value)
        } else {
            this._choices.forEach(choice => {
                choice.checked = choice.label === value
            })
            this._value = value
        }
    }

    choiceWithValueExists(value: string) {
        const choice = this._choices.find(choice => choice.label === value)

        if (!choice) {
            throw new Error(`Question with id: ${this.id}, does not have choice with value: ${value}`);
        }
    }

    setMultiSelectValue(value: string) {
        if (Array.isArray(value)) {
            this._values = value
            this._choices.forEach(choice => {
                choice.checked = value.includes(choice.label)
            })
        } else {
            const valueExists = this._choices.find((q) => q.label === value)
            if (!valueExists) throw new Error("Value does not exists");
            if (!this._values.includes(value) && value) {
                this._values.push(value)
                this._choices.forEach(choice => {
                    choice.checked = this._values.includes(choice.label)
                })
            } else {
                // Uncheck choice
                const index = this._values.indexOf(valueExists.label);
                if (index !== -1) this._values.splice(index, 1);
                valueExists.checked = false
            }
        }
    }

    addChoice(choice: Choice) {
        this._choices.push(choice)
    }

    removeChoice(choice: Choice | number | string) {

        if (typeof choice === 'number') {
            this._choices.splice(choice, 1)
            return
        }

        const labelToFind = typeof choice === 'string' ? choice : choice.label;
        const index = this._choices.findIndex(_choice => _choice.label === labelToFind);

        if (index === -1) {
            throw new Error(`Choice with label: '${labelToFind}', does not exist in Question with id: '${this.id}'`)
        }

        this._choices.splice(index, 1)

    }

    changeLabelOfChoice(index: number, label: string) {

        if (!this._choices[index]) {
            throw new Error("No choice with index:" + index);
        }

        this._choices[index].label = label
    }

    addOrUpdateParam(name: string, value: any) {
        super.addOrUpdateParam(name, value)
    }
    
}