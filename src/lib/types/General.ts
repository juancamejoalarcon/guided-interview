import { MultipleChoice, Repeat, Question, QuestionProp } from "../interfaces";

export type interviewParams = { [id: string]: QuestionProp };

export type GenericQuestion = Question | MultipleChoice | Repeat;