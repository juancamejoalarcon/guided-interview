import { Interview } from '../Interview.class';
import { Question } from '../questions/Question.class';
import { RepeatQuestion } from '../questions/types/RepeatQuestion.class';
import { getNextQuestion } from './next-question'
import { getPreviousQuestion } from './previous-question'

export class Navigation {

    private _interview: Interview;
    private _isRoot: boolean;
    private _currentQuestion: Question;

    constructor(interview: Interview, isRoot: boolean) {
        this._isRoot = isRoot
        this._interview = interview
        if (isRoot) this.getCurrent()
    }

    next() {
        const nextQuestion = getNextQuestion(this._interview, this._isRoot)
        if (nextQuestion) this.setCurrent(nextQuestion)
        // Fixes when nextQuestion is null
        else this.getCurrent().isCurrent = true
        this.getCurrent().isEnd = false
    }

    getNextQuestion(): Question | null | undefined {
        return getNextQuestion(this._interview, this._isRoot)
    }

    previous() {
        const previousQuestion = this.getPreviousQuestion()
        if (previousQuestion) this.setCurrent(previousQuestion)
    }

    getPreviousQuestion(
        previous: Question | null = null,
        isLastContentInterviewOfRepeat: boolean = false
    ): Question | null | undefined {
        return getPreviousQuestion(
            this._interview, 
            this._isRoot, 
            previous, 
            isLastContentInterviewOfRepeat, 
            this.isQuestionTheLastOfInterview.bind(this)
        )
    }

    setCurrent(question: Question) {
        this._currentQuestion = question
    }

    getCurrent(): Question {
        if (!this._currentQuestion) {
            this._currentQuestion = this._interview.getAsArray()[0][1]
            if (this._isRoot) {
                this._currentQuestion.isCurrent = true
            }
        }
        return this._currentQuestion;
    }

    isQuestionTheLastOfInterview (id: string) {
        const lastQuestion = this.getLastQuestionOfInterview()
        const question = this._interview.map.get(id)
        if (question?.indexInsideRepeat !== null) {
            return question?.id === lastQuestion?.id && question?.indexInsideRepeat === lastQuestion?.indexInsideRepeat
        }
        return lastQuestion?.id === question.id
    }

    getLastQuestionOfInterview(): Question | null {

        let found = null;
        const interviewList = this._interview.getAsArray()
        for (let i = interviewList.length - 1; i >= 0; i--) {
            const question = interviewList[i][1]
            const questionCanBeShown = question.canBeShown()
            if (questionCanBeShown) {
                if (question.type === 'repeat') {
                    const repeat = question as RepeatQuestion
                    for (let j = parseInt(question.value as string) - 1; j >= 0; j--) {
                        if (!repeat.content[j].hidden) {
                            found = repeat.content[j].nestedInterview.getLastQuestionOfInterview()
                            if (found) break
                        }
                    }
                    if (!found) found = question
                    break
                } else {
                    found = question
                    break
                }
            }
        }
        return found
    }

    getProgress(): { total: number, currentPosition: number, percentageOfCompletion: number } {
        let total = 0;
        let currentPosition = 0
        const interviewList = this._interview.getAsArray()
        interviewList.forEach(([id, question]) => {
            total += 1
            if (question.isCurrent) currentPosition = total
            if (question.type === 'repeat') {
                const repeat = question as RepeatQuestion
                Object.values(repeat.content).forEach(content => {
                    if (!content.hidden) {
                        const progress = content.nestedInterview.getProgress()
                        if (progress.currentPosition !== 0) {
                            currentPosition = total + progress.currentPosition
                        }
                        total += progress.total
                    }
                })
            }
        })
        return {
            total,
            currentPosition,
            percentageOfCompletion: Math.round((currentPosition * 100) / total)
        }
    }

    isStartOfInterview() {
        const interviewList = this._interview.getAsArray()
        const idOfFirstQuestion = interviewList[0][1].id
        const idOfCurrent = this.getCurrent().id
        return idOfFirstQuestion === idOfCurrent
    }

    isEndOfInterview() {
        const lastQuestion = this.getLastQuestionOfInterview()
        const current = this.getCurrent()
        if (current.indexInsideRepeat !== null) {
            return current.id === lastQuestion?.id && current.indexInsideRepeat === lastQuestion.indexInsideRepeat
        }
        return lastQuestion?.id === current.id
    }
    
}