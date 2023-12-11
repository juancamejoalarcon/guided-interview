import { Interview, interviewParams } from './classes/Interview.class'
import { Navigation } from './classes/navigation/Navigation.class'
import { Question } from './classes/questions/Question.class';
import { Choice } from './classes/questions/types/MultipleChoiceQuestion.class';
import { RepeatQuestion } from './classes/questions/types/RepeatQuestion.class';

type GuidedInterviewParams = {
    interviewParams: interviewParams
}
export class GuidedInterview {

    public _interview: Interview;
    private _isRoot;

    public navigation: Navigation;

    public isLastContentInterviewOfRepeat: boolean = false

    constructor(params: GuidedInterviewParams = { interviewParams: {} }, isRoot = true) {
        this._interview = new Interview(params.interviewParams)
        this._isRoot = isRoot
        this.navigation = new Navigation(this._interview, this._isRoot)
    }

    get interview () {
        return this._interview
    }

    setValue(id: string, value: string | number) {
        this._interview.setValueOfQuestion(id, value as string)
    }

    getCurrent() {
        return this.navigation.getCurrent()
    }

    next() {
        this.navigation.next()
    }

    getNextQuestion() {
        return this.navigation.getNextQuestion()
    }

    previous() {
        this.navigation.previous()
    }

    getPreviousQuestion(previous: Question | null = null) {
        return this.navigation.getPreviousQuestion(previous, this.isLastContentInterviewOfRepeat)
    }

    getLastQuestionOfInterview() {
        return this.navigation.getLastQuestionOfInterview()
    }

    isQuestionTheLastOfInterview(id: string) {
        return this.navigation.isQuestionTheLastOfInterview(id)
    }

    getProgress(): { total: number, currentPosition: number, percentageOfCompletion: number } {
        return this.navigation.getProgress()
    }

    // returns true if you are at the first question
    // FIXME, rename to isStartOfInterview
    isStart() {
        return this.navigation.isStartOfInterview()
    }

    // returns true if you reach the last question
    // FIXME, rename to isEndOfInterview
    isEnd() {
        return this.navigation.isEndOfInterview()
    }

    getInterviewAsArray() {
        return this._interview.getAsArray()
    }

    getInterviewParams() {
        return this._interview.getInterviewParams()
    }

    getNestedInterview(id: string, index: number): GuidedInterview {
        const question = this._interview.getQuestionById(id) as RepeatQuestion
        if (question?.type !== 'repeat') throw new Error("Question with id " + id + " is not a repeat question")
        return question.content[index].nestedInterview
    }

    // Returns interview of current question
    getCurrentGuidedInterview(): GuidedInterview | null {
        const interviewList = this.getInterviewAsArray()
        let current: GuidedInterview | null = null;
        for (let i = 0; i < interviewList.length ; i++) {
            const question = interviewList[i][1];
            if (question.isCurrent) {
                // eslint-disable-next-line @typescript-eslint/no-this-alias
                current = this
                break
            }
            if (question.type === 'repeat') {
                const repeat = question as RepeatQuestion
                for (let j = 0; j < parseInt(question.value as string) ; j++) {
                    if (!repeat.content[j].hidden) {
                        current = repeat.content[j].nestedInterview.getCurrentGuidedInterview()
                        if (current) break
                    }
                }
            }
            if (current) break
        }
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        if (this._isRoot && !current) current = this
        return current
    }

    changeIdOfQuestion(oldId: string, newId: string) {
        this._interview.changeIdOfQuestion(oldId, newId)
    }

    findQuestionById(id: string) {
        return this._interview.getQuestionById(id)
    }

    addChoiceToMultipleChoiceQuestion(id: string, choice: Choice) {
        this._interview.addChoiceToMultipleChoiceQuestion(id, choice)
    }

    removeChoiceFromMultipleChoice(id: string, choice: Choice | number | string) {
        this._interview.removeChoiceFromMultipleChoice(id, choice)
    }

    changeLabelOfChoice(id: string, index: number, label: string) {
        this._interview.changeLabelOfChoice(id, index, label)
    }

    addOrUpdateParamOfQuestion(id: string, param: { name: string, value: any}) {
        this._interview.addOrUpdateParamOfQuestion(id, param)
    }

    getState() {
        return this._interview.getState()
    }

} 