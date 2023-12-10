import { Interview } from '../Interview.class'
import { Question } from '../questions/Question.class';
import { RepeatQuestion } from '../questions/types/RepeatQuestion.class';

export const getPreviousQuestion = (
    interview: Interview, 
    isRoot: boolean, 
    previous: Question | null = null,
    isLastContentInterviewOfRepeat: boolean = false,
    isQuestionTheLastOfInterview: (id: string, interview: Interview | null) => boolean
): Question | null | undefined => {
    const interviewList = interview.getAsArray()
    const firstQuestion = interviewList[0][1]
    if (firstQuestion.isCurrent) {
        if (isRoot) {
            return firstQuestion
        } else {
            if (previous) previous.isCurrent = true
            firstQuestion.isCurrent = false
            return previous
        }
    }

    let previousQuestion = firstQuestion
    let newCurrent;
    for (let i = 0; i < interviewList.length ; i++) {
        const question = interviewList[i][1]
        const questionCanBeShown = question.canBeShown()
        // remove trash created in next question
        if (question.exitRepeat) delete question.exitRepeat
        if (question.isLast) delete question.isLast
        if (question.isNotLastOfRepeatContent) delete question.isNotLastOfRepeatContent
        if (!question.isCurrent) {
            if (questionCanBeShown) previousQuestion = question
            if (question.type === 'repeat') {
                const repeat = question as RepeatQuestion
                for (let j = 0; j < parseInt(question.value as string) ; j++) {
                    if (!repeat.content[j].hidden) {
                        newCurrent = repeat.content[j].nestedInterview.getPreviousQuestion(previousQuestion)
                        // update previous
                        if (newCurrent?.isPrevious) {
                            newCurrent.isPrevious = false
                            previousQuestion = newCurrent
                            newCurrent = null
                        }
                        if (newCurrent && newCurrent.isCurrent) break
                    }
                }
                if (newCurrent && newCurrent.isCurrent) break
            }
        } else {
            previousQuestion.isCurrent = true
            newCurrent = previousQuestion
            question.isCurrent = false
            break
        }
    }
    if (previous && !newCurrent) {
        const found = reversePreviousUtil(interviewList)
        if (found) newCurrent = found
    }
    if (newCurrent && !isRoot) {
        if (isQuestionTheLastOfInterview(newCurrent.id, interview)) {
            if (isLastContentInterviewOfRepeat) {
                newCurrent.isLast = true
                newCurrent.exitRepeat = true
            } else {
                newCurrent.isNotLastOfRepeatContent = true
            }
        }
    }
    if (newCurrent && isRoot && newCurrent.indexInsideRepeat && newCurrent.isNotLastOfRepeatContent) {
        newCurrent.isLast = true
    }

    return newCurrent
}

const reversePreviousUtil = (interviewList: [string, Question][]): Question | null | undefined => {
    let newCurrent;
    for (let i = interviewList.length - 1; i >= 0; i--) {
        const question = interviewList[i][1]
        const questionCanBeShown = question.canBeShown()
        if (questionCanBeShown) {
            if (question.type === 'repeat') {
                const repeat = question as RepeatQuestion
                // let j = parseInt(question.value as string) - 1; j >= 0; j--
                for (let j = parseInt(question.value as string) - 1; j >= 0; j--) {
                    if (!repeat.content[j].hidden) {
                        const nestedInterviewList = repeat.content[j].nestedInterview.getInterviewAsArray() as [string, Question][] 
                        newCurrent = reversePreviousUtil(nestedInterviewList)
                        if (newCurrent) {
                            newCurrent.isPrevious = true
                        }
                        if (newCurrent) break
                    }
                }
                if (newCurrent) break
            } else {
                newCurrent = question
                newCurrent.isPrevious = true
                break
            }
        }
    }
    return newCurrent
}