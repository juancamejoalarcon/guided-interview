export interface Question {
    id: string;
    type: 'text' | 'number' | 'date' | 'multipleChoice' | 'repeat';
    subType?: string;
    title: string;
    required?: boolean;
    indications?: string;
    value: string | number;
    placeholder?: string;
    isCurrent?: boolean;
    isEnd?: boolean;
    logic?: {
        showIf?: any;
        hideIf?: any;
    },
    options?: any
}

export interface QuestionProp extends Omit<Question, 'id' | 'title' | 'required' | 'value'> {
    id?: string;
    title?: string;
    required?: boolean;
    value?: string;
    placeholder?: string;
  }