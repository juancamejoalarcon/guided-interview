import { Question } from "./Question.interface";

export interface MultipleChoice extends Question {
    choices: Choice[];
}

export interface Choice {
    id: string;
    label: string;
    checked: boolean;
}