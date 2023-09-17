import { GuidedInterview, MultipleChoice, MultipleChoiceProp } from "@/lib/GuidedInterview";
import { Cloner, copiedQuestion } from "@/lib/services/clone.service"
import * as data from "@/data/forms/cloner-data.json";

const interview = new GuidedInterview(data);

const missingValues = {
  indications: "",
  subType: "",
  logic: {},
  options: {},
  isCurrent: true,
  indexInsideRepeat: null
};


describe("Cloner", () => {
  test("Set initial value ", async () => {
    expect(interview.getCurrent()).toEqual({ ...missingValues, ...data.q1 });

    const getQuestion = () => {
      return new Promise<copiedQuestion>((resolve, reject) => {
        const { id = '', title, type, choices, value } = interview.getCurrent() as MultipleChoiceProp
        resolve({ id, title, type, choices, value })
      })
    }
    

    const getCompletionPercen = () => {
      return new Promise<string | number>((resolve, reject) => {
        resolve(interview.getProgress().percentageOfCompletion)
      })
    }

    const isLastRadio = () => {
      return new Promise<boolean>((resolve, reject) => {
        const question = interview.getCurrent() as MultipleChoice;
        let isLastRadio = false;
        question.choices.forEach((choice, index) => {
          if (choice.checked) {
            if (question.choices.length === index + 1) isLastRadio = true;
          }
        });

        resolve(isLastRadio);
      });
    };

    const checkNextRadio = (id: string) => {
      return new Promise<{ id: string, label: string }>((resolve, reject) => {
        const question = interview.getStepById(id) as MultipleChoice;
        let label: string = "";
        for (let index = 0; index < question.choices.length; index++) {
          const choice = question.choices[index];
          if (choice.checked) {
            label = question.choices[index + 1].label;
            interview.setValue(question.id, label);
            break;
          }
        }
        resolve({ id, label });
      });
    };

    const checkFirstRadio = (id: string) => {
      return new Promise<{ id: string; label: string }>((resolve, reject) => {
        const question = interview.getStepById(id) as MultipleChoice;
        const label = question.choices[0].label;
        interview.setValue(question.id, label);

        resolve({ id, label });
      });
    };

    const isEnd = () => {
      return new Promise<boolean>((resolve, reject) => {
        resolve(interview.isEnd());
      });
    };

    const nextQuestion = () => {
      return new Promise<void>((resolve, reject) => {
        interview.next();
        resolve();
      });
    };

    const previousQuestion = () => {
      return new Promise<void>((resolve, reject) => {
        interview.previous();
        resolve();
      });
    };

    const cloner = new Cloner(
      getQuestion,
      isLastRadio,
      getCompletionPercen,
      checkNextRadio,
      checkFirstRadio,
      isEnd,
      nextQuestion,
      previousQuestion
    )

    await cloner.copy()

  });

});
