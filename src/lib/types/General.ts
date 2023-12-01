import { MultipleChoice, Repeat, Question, QuestionProp, RepeatProp } from "../interfaces";

export type interviewParams = { 
    [id: string]: {
        id: string,
        type: string,
    }
    
};

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