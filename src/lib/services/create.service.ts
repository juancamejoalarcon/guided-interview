import {
  Question,
  QuestionProp,
  MultipleChoice,
  MultipleChoiceProp,
  DateProp,
  Repeat,
  RepeatProp
} from "../interfaces";
import { generateRandomId } from "./utils.service";
import { interviewParams } from "../types/General";


const QuestionTypes = {
  text: true,
  multipleChoice: true,
  number: true,
  date: true,
  repeat: true,
};

export const getQuestion = (
  params: QuestionProp | MultipleChoiceProp | DateProp | RepeatProp,
  setAsCurrent: boolean = false
): Question | MultipleChoice | Repeat => {
  if (!QuestionTypes[params.type]) {
    throw new Error("Invalid question type");
  }
  const id: string = params.id || generateRandomId();
  let typeParams;

  if (params.type === "text") typeParams = buildTextQuestion(params);
  else if (params.type === "date") typeParams = buildDateQuestion(params as DateProp);
  else if (params.type === "multipleChoice") typeParams = buildMultipleChoiceQuestion(params as MultipleChoiceProp);
  else if (params.type === "repeat") typeParams = buildRepeatQuestion(params as RepeatProp);
  else typeParams = buildTextQuestion(params);

  const question = {
    id,
    type: params.type,
    title: params.title || "",
    indications: params.indications || "",
    logic: params.logic || {},
    options: params.options || {},
    ...typeParams,
  };

  return question;
};

export const buildTextQuestion = (params: QuestionProp) => {

  return {
    value: params.value || "",
    required: Boolean(params.required),
    placeholder: params.placeholder || "",
    subType: params.subType || "",
  };
  
};

export const buildDateQuestion = (params: DateProp) => {
  return {
    format: params.format || "dd/mm/yyyy",
    ...buildTextQuestion(params),
  };
};

export const buildMultipleChoiceQuestion = (params: MultipleChoiceProp) => {
  return {
    value: params.choices.find((choice) => choice.checked === true)?.label || "",
    choices: params.choices || [],
    subType: params.subType || "radio",
  };
};

export const buildRepeatQuestion = (params: RepeatProp) => {
  return {
    value: params.value || "",
    range: params.range || { min: 0, max: 0 },
    questions: params.questions || {},
  };
};

export const replaceIndexInQuestionsOfRepeatQuestion = (questions: interviewParams, index: number): interviewParams => {
  const copyOfQuestions: interviewParams = JSON.parse(JSON.stringify(questions))
  Object.entries(copyOfQuestions).forEach(([id, value]) => {
    const realIndex = index + 1
    if (value.title) {
      value.title = value.title.replace(/\<%= index %>/g, realIndex.toString())
    } 
  })
  return copyOfQuestions
}
