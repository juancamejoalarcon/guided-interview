import { Question } from "./Question.interface";

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
