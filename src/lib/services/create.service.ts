import { Question, QuestionProp } from "../interfaces/Question.interface";
import { interviewParams } from "../types/General";
import Str from '@supercharge/strings'

export const generateRandomId = (): string => {
  return "id-" + (Math.random() + 1).toString(36).substring(7);
};

const findIdsNotInCamelCase = (params: interviewParams): string | null => {
  let idNotInCamelCase = null
  Object.keys(params).forEach((id) => {
    if (!Str(id).isCamel()) idNotInCamelCase = id
  })
  return idNotInCamelCase
}
const findDuplicatedIdValues = (params: interviewParams): (QuestionProp | undefined)[] => {
  const array = Object.values(params)
  const duplicates = array
  .map((el, i) => {
      return array.find((element, index) => {
          if (i !== index && element.id === el.id) return el
      })
  })
  .filter(Boolean)
  return duplicates;
}

export const validateParams = (params: interviewParams): boolean => {
  const duplicates = findDuplicatedIdValues(params)
  if (duplicates.length) {
    throw new Error(`Duplicated id values: ${duplicates[0]?.id}`);
  }
  const idNotInCamelCase = findIdsNotInCamelCase(params)
  if (idNotInCamelCase) {
    throw new Error(`ID must be in camel case: ${idNotInCamelCase}`);
  }
  return true;
}
