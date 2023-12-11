import { Interview } from '../../Interview.class';
import { Question, QuestionParams } from '../Question.class';
export type MultipleChoiceQuestionParams = {
    choices: Choice[];
    value: string;
} & QuestionParams;
export interface Choice {
    label: string;
    checked: boolean;
}
export declare class MultipleChoiceQuestion extends Question {
    private _choices;
    private _values;
    constructor(params: MultipleChoiceQuestionParams, interview: Interview);
    get choices(): Choice[];
    get values(): (string | number)[];
    setChoices(choices?: Choice[]): void;
    setValue(value: string): void;
    choiceWithValueExists(value: string): void;
    setMultiSelectValue(value: string): void;
    addChoice(choice: Choice): void;
    removeChoice(choice: Choice | number | string): void;
    changeLabelOfChoice(index: number, label: string): void;
    addOrUpdateParam(name: string, value: any): void;
}
