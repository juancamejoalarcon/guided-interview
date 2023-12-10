import { Interview } from '../Interview.class'
import { Question } from '../questions/Question.class';
import { RepeatQuestion } from '../questions/types/RepeatQuestion.class';
export const getNextQuestion = (interview: Interview, isRoot: boolean): Question | null | undefined => {
    let newCurrent;
    let nextQuestionExists;
    const interviewList = interview.getAsArray()
    for (let i = 0; i < interviewList.length ; i++) {
        const question = interviewList[i][1]
        const isCurrent = question?.isCurrent
        const isRepeat = question?.type === 'repeat'
        nextQuestionExists = interviewList[i + 1] && interviewList[i + 1][1]


        if (isCurrent && !isRepeat && !nextQuestionExists && !isRoot) {
            if (question.canBeShown()) {
                question.isEnd = true
                newCurrent = question
                break
            }
            question.isCurrent = false
            // Find exit repeat
            for (let j = 0; j < interviewList.length ; j++) {
                const q = interviewList[j][1]
                if (q.exitRepeat) {
                    newCurrent = q
                    break
                }
            }
        }
        if (isCurrent && !isRepeat && nextQuestionExists ) {
            question.isCurrent = false
            newCurrent = interviewList[i + 1][1]
            newCurrent.isCurrent = true
            if (!newCurrent.canBeShown()) {
                newCurrent = getNextQuestion(interview, isRoot)
            }
            break
        }
        if (isCurrent && isRepeat && question.canBeShown()) {
            const repeat = question as RepeatQuestion
            repeat.isCurrent = false;
            const firstNestedInterview = repeat.content[0].nestedInterview.getInterviewAsArray()
            newCurrent = firstNestedInterview[0][1]
            newCurrent.isCurrent = true
            break
        }

        if (isCurrent && isRepeat && !question.canBeShown() && nextQuestionExists) {
            question.isCurrent = false
            newCurrent = interviewList[i + 1][1]
            newCurrent.isCurrent = true
            if (!newCurrent.canBeShown()) {
                newCurrent = getNextQuestion(interview, isRoot)
            }
            break
        }

        if (isCurrent && isRepeat && !question.canBeShown() && !nextQuestionExists) {
            question.isEnd = true
            newCurrent = question
            break
        }

        if (!isCurrent && isRepeat && !question.canBeShown() && !nextQuestionExists) {
            question.isEnd = true
            newCurrent = question
            break
        }


        if (!isCurrent && isRepeat && question.canBeShown()) {
            let shouldContinue = false
            const repeat = question as RepeatQuestion
            for (let j = 0; j < (repeat.value as number); j++) {
      
                if (!repeat.content[j].hidden) {

                    const repeatIsFinished = !repeat.content[j + 1] || repeat.content[j + 1]?.hidden

                    newCurrent = repeat.content[j].nestedInterview.getNextQuestion()
                    if (newCurrent) {
                        // Fixme: should check here for next question
                        const isLast = repeat.content[j].nestedInterview.isQuestionTheLastOfInterview(newCurrent.id, repeat.content[j].nestedInterview._interview)
                        if (isLast) {
                            if (repeatIsFinished && nextQuestionExists) {
                                const current = newCurrent
                                // si tiene EXIT REPEAT
                                if (current.exitRepeat) {
                                    current.isEnd = false
                                    current.isCurrent = false
                                    newCurrent = interviewList[i + 1][1]
                                    newCurrent.isCurrent = true
                                    if (!newCurrent.canBeShown()) {
                                        newCurrent = getNextQuestion(interview, isRoot)
                                    }
                                    delete current.exitRepeat
                                    break
                                } else {
                                    current.exitRepeat = true
                                }
                            } else {
                                if (!repeatIsFinished) {
                                    newCurrent.isLast = true
                                }
                            }
                        }

                        if (newCurrent?.isEnd) {
                            if ((j + 1) < parseInt(question.value as string)) {
                                if (!newCurrent.isCurrent) {
                                    newCurrent.isEnd = false
                                    newCurrent = null
                                } else {
                                    const firstOfNextNestedInterview = repeat.content[j + 1].nestedInterview.getInterviewAsArray()
                                    newCurrent.isCurrent = false
                                    newCurrent.isEnd = false
                                    newCurrent = firstOfNextNestedInterview[0][1]
                                    newCurrent.isCurrent = true
                                }
                            } else {
                                const canBeShown = newCurrent.canBeShown()
                                if (newCurrent.isEnd && !canBeShown) {
                                    newCurrent.isCurrent = false
                                    newCurrent = null
                                }
                            }
                        }
                        if (newCurrent) break

                    } else {
                        if (repeatIsFinished && nextQuestionExists) {
                            shouldContinue = true
                        } else {
                            if (!repeatIsFinished && !newCurrent) {
                                const lastQuestion = repeat.content[j].nestedInterview.getInterviewAsArray().find((q) => q[1].isLast)
                                if (lastQuestion) {
                                    delete lastQuestion[1].isLast

                                    const firstOfNextNestedInterview = repeat.content[j + 1].nestedInterview.getInterviewAsArray()
                                    if (!firstOfNextNestedInterview[0][1].isCurrent) {
                                        firstOfNextNestedInterview[0][1].isCurrent = true
                                        newCurrent = firstOfNextNestedInterview[0][1]
                                        break
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (shouldContinue) continue
            else break
        }
    }
    return newCurrent
}