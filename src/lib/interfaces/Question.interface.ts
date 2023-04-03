export interface Question {
    id: string;
    type: 'text' | 'number' | 'date' | 'multipleChoice';
    subType?: string;
    title: string;
    required?: boolean;
    indications?: string;
    value: string | number;
    placeholder?: string;
    logic?: {
        showIf?: any
    }
}

export interface QuestionProp extends Omit<Question, 'id' | 'title' | 'required' | 'value'> {
    id?: string;
    title?: string;
    required?: boolean;
    value?: string;
    placeholder?: string;
  }