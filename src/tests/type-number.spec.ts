import { GuidedInterview, MultipleChoice, Question } from "@/lib/GuidedInterview";
import * as data from "@/data/forms/type-number.json";

const interview = new GuidedInterview(data);

const missingValues = {
    indications: "",
    subType: "",
    logic: {},
    options: {},
    isCurrent: true,
    indexInsideRepeat: null
};

describe("Type number", () => {
    test("Set initial value ", () => {
        const current = interview.getCurrent();
        expect(current).toEqual({
            ...missingValues,
            ...data.age,
        });

        expect(current.value).toEqual(0);
    });

    test("Set next question", () => {
        interview.next();
        expect(interview.getCurrent().id).toEqual("endQuestion");

        interview.previous();
        expect(interview.getCurrent().id).toEqual("age");

    });

    test("Set previous question", () => {
        interview.setValue(interview.getCurrent().id, 18);
        interview.next();
        expect(interview.getCurrent().id).toEqual("adultQuestion");
    });

    test("Set wrong value to number", () => {
        interview.previous();
        const current = interview.getCurrent();
        const t = () => { interview.setValue(current.id, "John Doe") };
        expect(t).toThrow("Value of 'number' question must be a number");
    });

});
