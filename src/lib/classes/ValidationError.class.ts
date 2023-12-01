const validationErrorMessageList: { [key: string]: string } = {
    nullOrUndefined: "Interview params are null or undefined",
};
  
export class ValidationError extends Error {
    constructor(errorKey: string, customMessage: string = '') {
        super(errorKey);
        this.name = "ValidationError";
        this.message = customMessage || validationErrorMessageList[errorKey];
    }
}