import { MultipleChoice, Repeat, Question, QuestionProp } from "../interfaces";

export type interviewParams = { [id: string]: QuestionProp };

export type DataSaved = { 
    [id: string]: { 
        value: string, 
        content?: { 
            [id: string]: { 
                hidden?: boolean, 
                questions: DataSaved 
            } 
        }  
    } 
};

export type GenericQuestion = Question | MultipleChoice | Repeat;