import { Repeat } from "../interfaces";
import { GenericQuestion } from "../types/General";

export type copiedQuestion = {
  id: string | undefined;
  title: string | undefined;
  type: string;
  choices?: any[];
  value: any;
  placeholder?: string,
  subType?: string,
};

export class Cloner {
  interview: GenericQuestion[] = [];
  nested: string[] = [];
  result: any = {}

  questionsInsideRepeat: GenericQuestion[] = [];

  getQuestion!: (options?: any) => Promise<copiedQuestion>;
  isLastRadio!: () => Promise<boolean>;
  isEnd!: () => Promise<boolean>;
  nextQuestion!: () => Promise<void>;
  previousQuestion!: () => Promise<void>;
  getCompletionPercen!: () => Promise<string | number>;
  checkNextRadio!: (id: string) => Promise<{ id: string; label: string }>;
  checkFirstRadio!: (id: string) => Promise<{ id: string; label: string }>;
  isRepeat!: (id: string) => Promise<boolean>;
  goToEndAndGetIdsAndGoBack!: () => Promise<string[]>;
  setValueOfRepeat!: (id: string, value: number) => Promise<void>;

  alphabetMap = { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f" };

  constructor(
    getQuestion: (options?: any) => Promise<copiedQuestion>,
    isLastRadio: () => Promise<boolean>,
    getCompletionPercen: () => Promise<string | number>,
    checkNextRadio: (id: string) => Promise<{ id: string; label: string }>,
    checkFirstRadio: (id: string) => Promise<{ id: string; label: string }>,
    isEnd: () => Promise<boolean>,
    nextQuestion: () => Promise<void>,
    previousQuestion: () => Promise<void>,
    isRepeat: (id: string) => Promise<boolean>,
    goToEndAndGetIdsAndGoBack: () => Promise<string[]>,
    setValueOfRepeat: (id: string, value: number) => Promise<void>
  ) {
    this.getQuestion = getQuestion;
    this.isLastRadio = isLastRadio;
    this.getCompletionPercen = getCompletionPercen;
    this.checkNextRadio = checkNextRadio;
    this.checkFirstRadio = checkFirstRadio;
    this.isEnd = isEnd;
    this.nextQuestion = nextQuestion;
    this.previousQuestion = previousQuestion;
    this.isRepeat = isRepeat;
    this.goToEndAndGetIdsAndGoBack = goToEndAndGetIdsAndGoBack;
    this.setValueOfRepeat = setValueOfRepeat;
  }

  start(question: copiedQuestion) {
    this.interview = [];
    this.addQuestion(question, "start");
  }

  insertQuestionInInterview(
    question: GenericQuestion,
    percentageOfCompletion: string | number
  ) {
    this.interview.push(question);
    if (percentageOfCompletion === "start") return;
    // Order
    this.interview.sort(
      (a: any, b: any) => a.percentageOfCompletion - b.percentageOfCompletion
    );
  }

  applyLogicToQuestion(question: GenericQuestion) {
    const q = question as any;

    if (!q.preLogic) q.preLogic = [];
    let currentArr = q.preLogic;
    this.nested.forEach((idAndLabel, index) => {
      const nextId = this.nested[index + 1];

      let id = currentArr.find((caca: string) => caca === idAndLabel);
      if (!id) {
        currentArr.push(idAndLabel);
        id = currentArr.find((caca: string) => caca === idAndLabel);
      }
      if (nextId) {
        const nextNestedId = currentArr[currentArr.indexOf(id) + 1];
        if (!nextNestedId) {
          const newArray: string[] = [];
          currentArr.push(newArray);
          currentArr = newArray;
        } else {
          if (Array.isArray(nextNestedId)) {
            currentArr = nextNestedId;
          } else {
            const newArray: string[] = [];
            currentArr.splice(
              currentArr[currentArr.indexOf(id) + 1],
              0,
              newArray
            );
            currentArr = newArray;
          }
        }
      }
    });
  }

  questionExistsInInterview(id: string) {
    return this.getQuestionInInterview(id);
  }

  getQuestionInInterview(id: string) {
    return this.interview.find((q) => q.id === id);
  }

  getQuestionInsideRepeat(id: string) {
    return this.questionsInsideRepeat.find((q) => q.id === id);
  }

  setActiveMultipleOption(id: string, label: string) {
    if (this.nested.length && this.nested[this.nested.length - 1].includes(id))
      this.nested.pop();
    this.nested.push(`${id}-${label}`);
  }

  removeActiveMultipleOption() {
    this.nested.pop();
  }

  addQuestion(
    questionProps: copiedQuestion,
    percentageOfCompletion: string | number
  ) {
    const { id = "", title = "", value = "", type = "", subType = "", indications = "", placeholder = "", questions = {}, other = {} } = questionProps as any;
    const question: GenericQuestion & { other: any } = { id, title, value, type, indications, placeholder, subType, questions, other };

    // start or referenceQuestion
    if (percentageOfCompletion !== "start") this.applyLogicToQuestion(question);

    const q = question as any;
    if (question.type === "multipleChoice") {
      q.choices = (questionProps as any).choices;
    }


    q.percentageOfCompletion =
      percentageOfCompletion === "start" ? 0 : percentageOfCompletion;
    this.insertQuestionInInterview(question, percentageOfCompletion);
  }

  async copyRepeat(question: copiedQuestion) {
    const repeatId = question.id as string;
    await this.setValueOfRepeat(repeatId, 1);
    const ids1 = await this.goToEndAndGetIdsAndGoBack();
    await this.setValueOfRepeat(repeatId, 2);
    const ids2 = await this.goToEndAndGetIdsAndGoBack();
    await this.setValueOfRepeat(repeatId, 1);

    let repeatEnd = '';
    for (let i = 0; i < ids1.length; i++) {
      if (ids1[i] !== ids2[i]) {
        repeatEnd = ids1[i]
        break;
      }
    }

    const isEnd = async () => {
      const thisIsEnd = await this.isEnd()
      await this.nextQuestion()
      const question = await this.getQuestion({ ignoreCopy: true})
      await this.previousQuestion()


      return question.id === repeatEnd || thisIsEnd 
    }


    const cloner = new Cloner(
      this.getQuestion,
      this.isLastRadio,
      this.getCompletionPercen,
      this.checkNextRadio,
      this.checkFirstRadio,
      isEnd,
      this.nextQuestion,
      this.previousQuestion,
      this.isRepeat,
      this.goToEndAndGetIdsAndGoBack,
      this.setValueOfRepeat
    )

    await this.nextQuestion();

    (question as any).questions = await cloner.copy()

    this.questionsInsideRepeat = [...this.questionsInsideRepeat, ...cloner.interview]

  }

  async copyQuestion(start = false, happyPath = false) {
    const current = await this.getQuestion();
    const questionID = current.id as string;
    if (this.getQuestionInsideRepeat(questionID)) return
    if (this.questionExistsInInterview(questionID)) {
      if (current.type === "multipleChoice") {
        if (!this.nested.find((id) => id.includes(questionID))) {
          this.applyLogicToQuestion(
            this.getQuestionInInterview(questionID) as any
          );
        }

        const lastRadio = await this.isLastRadio();
        if (lastRadio) {
          if (happyPath && this.nested.length) {
            const result = await this.checkFirstRadio(current.id as string);
            this.setActiveMultipleOption(result.id, result.label);
          }
        } else {
          const result = await this.checkNextRadio(questionID);
          this.setActiveMultipleOption(result.id, result.label);
        }
      } else {
        this.applyLogicToQuestion(
          this.getQuestionInInterview(questionID) as any
        );
      }
    } else {
      if (start) this.start(current);
      else {
        const conpletionPercen = await this.getCompletionPercen();
        const repeat = await this.isRepeat(current.id as string);
        if (repeat) {
          await this.copyRepeat(current);
          this.addQuestion(current, conpletionPercen);
        } else {
          this.addQuestion(current, conpletionPercen);
        }
      }

      if (current.type === "multipleChoice") {
        const result = await this.checkFirstRadio(current.id as string);
        this.setActiveMultipleOption(result.id, result.label);
      }
    }
  }

  async backToPreviousActive() {
    const nested = this.nested;
    if (nested.length) {
      const lastActive = nested[nested.length - 1].split("-")[0];
      let question = await this.getQuestion();
      while (question.id !== lastActive) {
        await this.previousQuestion();
        question = await this.getQuestion();
      }
      const lastRadio = await this.isLastRadio();
      await this.copyQuestion();
      if (question.type === "multipleChoice") {
        if (lastRadio) {
          this.removeActiveMultipleOption();
          await this.backToPreviousActive();
        }
      }
    }
  }

  async happyPath() {
    let isEnd = await this.isEnd();
    while (!isEnd) {
      await this.nextQuestion();
      await this.copyQuestion(false, true);
      isEnd = await this.isEnd();
    }
    if (this.nested.length) {
      await this.backToPreviousActive();
      await this.happyPath();
    }
  }

  transform() {
    this.interview.forEach((question) => {
      delete (question as any).percentageOfCompletion;
      if (!(question as any).preLogic) return;

      let condition = "";
      const transformLogic = (arr: any, needsEnd = false) => {
        arr.forEach((el: any, index: any) => {
          const nextEl = arr[index + 1];
          if (typeof el === "string") {
            const [id, label] = el.split("-");
            condition += `${id}.value === '${label}'`;

            if (nextEl) {
              if (typeof nextEl === "string") condition += " || ";
              if (Array.isArray(nextEl)) condition += " && ";
            }
          }

          if (Array.isArray(el)) {
            condition += " (";
            transformLogic(el, true);
            if (nextEl) {
              if (typeof nextEl === "string") condition += "|| ";
              // if (Array.isArray(nextEl)) condition += ' && '
            }
          }

          if (needsEnd && !nextEl) {
            condition += ") ";
          }
        });
      };
      transformLogic((question as any).preLogic);
      question.logic = { showIf: condition };
      delete (question as any).preLogic;
    });
  }

  createResult() {
    this.interview.forEach((question) => {
      this.result[question.id] = question
    })
  }

  async copy() {
    await this.copyQuestion(true);
    await this.happyPath();
    this.transform();
    this.createResult()
    return this.result
  }
}
