import { Question, QuestionProp } from "../interfaces/Question.interface";
import { RepeatProp } from '../interfaces/Repeat.interface'
import { interviewParams, GenericQuestion } from "../types/General";
import Str from '@supercharge/strings'

export const isTest = (): boolean => {
  return process.env.NODE_ENV === 'test'
}

export const generateRandomId = (): string => {
  return "id-" + (Math.random() + 1).toString(36).substring(7);
};

export const isCamelCase = (str: string): boolean => {
  return Str(str).isCamel()
}

export const isSnakeCase = (str: string): boolean => {
  const snakeCaseRegex = /^([a-z0-9]{1,})(_[a-z0-9]{1,})*$/;
  return snakeCaseRegex.test(str);
}

const findIdsNotInCamelCaseOrSnakeCase = (params: interviewParams): string | null => {
  let idNotInCamelCase = null
  Object.entries(params).forEach(([id, value]) => {
    if (value.type === "repeat") {
      const repeatEl = value as RepeatProp
      const repeatIdNotInCamelCase = findIdsNotInCamelCaseOrSnakeCase(repeatEl.questions)
      if (repeatIdNotInCamelCase) idNotInCamelCase = repeatIdNotInCamelCase
    }
    if (!isCamelCase(id) && !isSnakeCase(id)) idNotInCamelCase = id
  })
  return idNotInCamelCase
}
const findDuplicatedIdValues = (params: interviewParams): (QuestionProp | undefined)[] => {
  const array = Object.values(params)
  let repeatDuplicates: (QuestionProp | undefined)[] = [];
  const duplicates = array
  .map((el, i) => {
      return array.find((element, index) => {
        if (element.type === "repeat") {
          const repeatEl = element as RepeatProp
          repeatDuplicates = findDuplicatedIdValues(repeatEl.questions)
        }
          if (i !== index && element.id === el.id) return el
      })
  })
  .filter(Boolean)
  if (repeatDuplicates.length) duplicates.push(...repeatDuplicates)
  return duplicates;
}

export const validateParams = (params: interviewParams): boolean => {
  const duplicates = findDuplicatedIdValues(params)
  if (duplicates.length) {
    throw new Error(`Duplicated id values: ${duplicates[0]?.id}`);
  }
  const idNotInCamelCase = findIdsNotInCamelCaseOrSnakeCase(params)
  if (idNotInCamelCase) {
    throw new Error(`ID must be in camel case: ${idNotInCamelCase}`);
  }
  return true;
}

export const getValueBetweenRanges = (value: number, min: number, max: number): number => {
  if (value < min) {
      if (!isTest()) console.warn(`Value ${value} is lower than min ${min}. Returning min.`)
      return min
  }
  if (value > max) {
    if (!isTest()) console.warn(`Value ${value} is higher than max ${max}. Returning max.`)
      return max
  }
  return value
}

export const validateSetValue = (value: string | number | string[], question: GenericQuestion): void => {
  if (question.type === 'repeat') {
    if (isNaN(value as number)) {
      throw new Error("Value of repeat question must be a number");
    }
  }
  if (question.type === 'number') {
    if (isNaN(value as number) || value === '') {
      throw new Error("Value of 'number' question must be a number");
    }
  }
}
