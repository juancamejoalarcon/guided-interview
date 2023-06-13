import { GuidedInterview, Repeat } from "@/lib/GuidedInterview";
import * as duplicatedErrorJson from "@/data/repeat-error-duplicated-id.json";
import * as nestedDuplicatedErrorJson from "@/data/repeat-error-duplicated-id-2.json";
import * as idNotInCamel from "@/data/repeat-error-id-not-camel.json";
import * as repeatExample1 from "@/data/repeat-example-1.json";
import * as repeatExample1Result from "@/data/results/test-repeat-example-1.json";

describe("Repeat errors", () => {
  test("Duplicated id values", () => {
    const t = () => {
      new GuidedInterview(duplicatedErrorJson);
    };
    expect(t).toThrow(
      "Duplicated id values: nombreRepresentantePersonaJuridica"
    );
  });
  test("Nested: Duplicated id values", () => {
    const t = () => {
      new GuidedInterview(nestedDuplicatedErrorJson);
    };
    expect(t).toThrow("Duplicated id values: nombreDelFamiliar");
  });
  test("ID not in camel case", () => {
    const t = () => {
      new GuidedInterview(idNotInCamel);
    };
    expect(t).toThrow("ID must be in camel case: nombre_del_familiar");
  });
});

describe("Repeat Basic", () => {
  const interview = new GuidedInterview(repeatExample1);

  const checkContentOfRepeat = () => {
    const current = interview.getCurrent() as Repeat;
    Object.keys(current.content).forEach((key) => {
      const index = parseInt(key);
      const nestedInterview = interview.getNestedInterview(current.id, index);
      expect(nestedInterview.interview.get("name")?.title).toEqual(
        repeatExample1Result.intialParams[index].title
      );
    });
  };

  test("Set initial param", () => {
    const current = interview.getCurrent() as Repeat;
    expect(current.type).toEqual("repeat");
    expect(current.value).toEqual(repeatExample1.numeroAsociados.value);

    const keys = Object.keys(current.content);
    expect(keys.length).toEqual(1);
    checkContentOfRepeat();
  });

  test("Change value of repeat question", () => {
    const current = interview.getCurrent() as Repeat;
    interview.setValue(current.id, 4);
    checkContentOfRepeat();
  });

  test("Set value of repeat question out of MAX range", () => {
    const current = interview.getCurrent() as Repeat;
    interview.setValue(current.id, 100);
  
    expect(current.value).toEqual(current.range.max);
  });
  test("Set value of repeat question out of MIN range", () => {
    const current = interview.getCurrent() as Repeat;
    interview.setValue(current.id, 0);
  
    expect(current.value).toEqual(current.range.min);
  });
  
});
