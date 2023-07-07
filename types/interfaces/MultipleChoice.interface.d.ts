import { Question } from "./Question.interface";
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
