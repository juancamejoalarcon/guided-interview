import { GuidedInterview, MultipleChoice, Question } from "@/lib/GuidedInterview";
import * as data from "@/data/forms/multiple-select.json";

const interview = new GuidedInterview(data);

const missingValues = {
  indications: "",
  subType: "",
  logic: {},
  options: {},
  isCurrent: true,
  indexInsideRepeat: null
};

describe("Happy path", () => {
  test("Set initial value ", () => {
    expect(interview.getCurrent()).toEqual({
      ...missingValues,
      ...data.q1,
    });
  });

  test("Set next question", () => {
    interview.next();
    const current = interview.getCurrent();
    expect(current.id).toEqual("dni");
  });

  // test("Set previous question", () => {
  //   interview.previous();
  //   const current = interview.getCurrent();
  //   expect(current.id).toEqual("name");
  // });

  // test("Set value of question", () => {
  //   const value = "John Doe";
  //   const current = interview.getCurrent();
  //   interview.setValue(current.id, "John Doe");
  //   expect(current.value).toEqual(value);
  // });

  // test("Set value of multiple choice", () => {
  //   const id = "sexoEmpleador";
  //   const value = "un hombre";
  //   interview.setValue(id, value);
  //   const current = interview.findQuestionById(id);
  //   expect(current.value).toEqual(value);
  // });

  // test("Test Logic Can Be Shown 'Show If'", () => {
  //   for (let i = 0; i < 5 ; i++) {
  //     interview.next();
  //   }
  //   const current = interview.getCurrent();
  //   expect(interview.canBeShown(current)).toEqual(true);
  //   const id = "sexoEmpleador";
  //   const value = "una persona jurídica";
  //   interview.setValue(id, value);
  //   expect(interview.canBeShown(current)).toEqual(false);
  // });

});
