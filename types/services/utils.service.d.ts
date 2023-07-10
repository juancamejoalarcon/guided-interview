import { interviewParams, GenericQuestion } from "../types/General";
export declare const isTest: () => boolean;
export declare const generateRandomId: () => string;
export declare const isCamelCase: (str: string) => boolean;
export declare const validateParams: (params: interviewParams) => boolean;
export declare const getValueBetweenRanges: (value: number, min: number, max: number) => number;
export declare const validateSetValue: (value: string | number, question: GenericQuestion) => void;
