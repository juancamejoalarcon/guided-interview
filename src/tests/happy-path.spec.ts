import { GuidedInterview } from "@/lib/GuidedInterview";
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
});
