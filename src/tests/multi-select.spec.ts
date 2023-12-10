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
        const current = interview.getCurrent();
        expect(current).toEqual({
            ...missingValues,
            ...data.q1,
        });

        expect((current as MultipleChoice).values).toEqual([ 'a', 'b' ]);
    });

    test("Set next question", () => {
        interview.next();
        let current = interview.getCurrent();
        expect(current.id).toEqual("q2");

        interview.next();
        current = interview.getCurrent();
        expect(current.id).toEqual("q3");

    });

    test("Set previous question", () => {
        interview.previous();
        let current = interview.getCurrent();
        expect(current.id).toEqual("q2");
        interview.previous();
        current = interview.getCurrent();
        expect(current.id).toEqual("q1");
    });

    test("Select wrong option", () => {
        const current = interview.getCurrent();
        const t = () => { interview.setValue(current.id, "John Doe") };
        expect(t).toThrow("Value does not exists");
    });

    test("Unselect option", () => {
        let current = interview.getCurrent();
        interview.setValue(current.id, "a", { unselect: true });
        expect((current as MultipleChoice).values).toEqual([ 'b' ]);
        interview.next();
        current = interview.getCurrent();
        expect(current.id).toEqual("q4");
    });

    test("Get data", () => {
        interview.previous();
        const current = interview.getCurrent();
        interview.setValue(current.id, "a");
        expect((current as MultipleChoice).values).toEqual([ 'b', 'a' ]);
        const data = interview.getData()
        expect(data.q1.values).toEqual([ 'b', 'a' ]);
    });

});
