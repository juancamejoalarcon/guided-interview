import { GuidedInterview } from '@/lib/GuidedInterview'
import * as interviewData from "@/test-data/interview-with-numbers.json";

let guidedInterview: GuidedInterview;

describe("NumberQuestion.class", () => {

    beforeAll(() => {
        guidedInterview = new GuidedInterview({ interviewParams: interviewData })
    });


    test("Set initial value ", () => {
        const current = guidedInterview.getCurrent();
        expect(current.value).toEqual(0);
    });

    test("Set next question", () => {
        guidedInterview.next();
        expect(guidedInterview.getCurrent().id).toEqual("endQuestion");

        guidedInterview.previous();
        expect(guidedInterview.getCurrent().id).toEqual("age");

    });

    test("Set previous question", () => {
        guidedInterview.setValue("age", 18);
        guidedInterview.next();
        expect(guidedInterview.getCurrent().id).toEqual("adultQuestion");
    });

    test("Set wrong value to number", () => {
        guidedInterview.previous();
        const current = guidedInterview.getCurrent();
        const t = () => { guidedInterview.setValue(current.id, "John Doe") };
        expect(t).toThrow("Value of question whith id 'age' must be a number");
    });
});