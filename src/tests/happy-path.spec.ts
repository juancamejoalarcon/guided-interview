import { GuidedInterview, MultipleChoice } from "@/lib/GuidedInterview";
import * as data from "@/data/forms/solicitud-vacaciones.json";

const interview = new GuidedInterview(data);

const missingValues = {
  indications: "",
  subType: "",
  logic: {},
};

describe("Happy path", () => {
  test("Set initial value ", () => {
    expect(interview.getCurrent()).toEqual({
      ...missingValues,
      ...data.name,
    });
  });

  test("Set next question", () => {
    interview.next();
    const current = interview.getCurrent();
    expect(current.id).toEqual("dni");
  });

  test("Set previous question", () => {
    interview.previous();
    const current = interview.getCurrent();
    expect(current.id).toEqual("name");
  });

  test("Set value of question", () => {
    const value = "John Doe";
    const current = interview.getCurrent();
    interview.setValue(current.id, "John Doe");
    expect(current.value).toEqual(value);
  });

  test("Set current question", () => {
    const id = "sexoEmpleador";
    interview.setCurrent(id)
    const current = interview.getCurrent();
    expect(current.id).toEqual(id);
  });

  test("Set value of multiple choice", () => {
    const id = "sexoEmpleador";
    const value = "un hombre";
    interview.setValue(id, value);
    const current = interview.getCurrent();
    expect(current.value).toEqual(value);
  });

  test("Test Logic Can Be Shown", () => {
    interview.next();
    const current = interview.getCurrent();
    expect(interview.canBeShown(current)).toEqual(true);
    const id = "sexoEmpleador";
    const value = "una persona jurídica";
    interview.setValue(id, value);
    expect(interview.canBeShown(current)).toEqual(false);
  });

  test("Test Get ID", () => {
    const id = "sexoEmpleador";
    const el = interview.getStepById(id);
    expect(el?.id).toEqual(id);
    
    const nullId = null;
    const nullEl = interview.getStepById('null');
    expect(nullEl).toEqual(nullId);
  });

  test("Add choice to multiple choice", () => {
    const id = "sexoEmpleador";
    interview.addChoiceToMultipleChoice("sexoEmpleador", {
      label: "Otro",
      checked: false,
    });
    const question = interview.getStepById(id);
    expect((question as MultipleChoice)?.choices.length).toEqual(4);
  });

  test("Set question as required", () => {
    const id = "sexoEmpleador";
    interview.setQuestionAsRequired(id, false);
    const question = interview.getStepById(id);
    expect(question?.required).toEqual(false);
    interview.setQuestionAsRequired(id, true);
    expect(question?.required).toEqual(true);
  });

  test("Set extra option to questions", () => {
    const id = "sexoEmpleador";
    interview.setExtraOption(id, 'extraOption', "value");
    const question = interview.getStepById(id);
    expect(question?.options.extraOption).toEqual("value");
  });

  test("Change ID of Question", () => {
    const id = "sexoEmpleador";


    const t = () => {  interview.changeIdOfQuestion(id, id) };
    expect(t).toThrow("Id already exists");
    expect(interview.getStepById(id)?.id).toEqual(id);

    const t2 = () => {  interview.changeIdOfQuestion(id, 'not_in_camel') };
    expect(t2).toThrow("Id must be in camel case");
    expect(interview.getStepById(id)?.id).toEqual(id);

    interview.changeIdOfQuestion(id, "newId");
    const question = interview.getStepById(id);
    expect(question).toEqual(null);
    const newQuestion = interview.getStepById("newId");
    expect(newQuestion?.id).toEqual("newId");
  })

});
