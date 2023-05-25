import { Question } from "./Question.interface";

export interface Repeat extends Question {
  type: "repeat";
  range: {
    min: number;
    max: number;
  };
  questions: any;
  value: number;
}

export interface RepeatProp extends Omit<Repeat, "id" | "title" | "required" | "value"> {
  id?: string;
  title?: string;
  required?: boolean;
  value?: string;
  placeholder?: string;
}
