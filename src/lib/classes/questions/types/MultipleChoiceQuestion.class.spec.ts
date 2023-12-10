import { GuidedInterview } from '@/lib/GuidedInterview2'
import * as interviewData from "@/test-data/interview-with-multiple-select.json";
import { MultipleChoiceQuestion } from './MultipleChoiceQuestion.class';

let guidedInterview: GuidedInterview;

describe("MultipleChoiceQuestion.class", () => {

    beforeAll(() => {
        guidedInterview = new GuidedInterview({ interviewParams: interviewData })
    });

    test("Set initial value ", () => {
        const current = guidedInterview.getCurrent() as MultipleChoiceQuestion;

        expect(current.values).toEqual([ 'a', 'b' ]);
    });

    test("Set next question", () => {
        guidedInterview.next();
        let current = guidedInterview.getCurrent();
        expect(current.id).toEqual("q2");

        guidedInterview.next();
        current = guidedInterview.getCurrent();
        expect(current.id).toEqual("q3");

    });

    test("Set previous question", () => {
        guidedInterview.previous();
        let current = guidedInterview.getCurrent();
        expect(current.id).toEqual("q2");
        guidedInterview.previous();
        current = guidedInterview.getCurrent();
        expect(current.id).toEqual("q1");
    });

    test("Select wrong option", () => {
        const current = guidedInterview.getCurrent();
        const t = () => { guidedInterview.setValue(current.id, "John Doe") };
        expect(t).toThrow("Question with id: q1, does not have choice with value: John Doe");
    });

    test("Unselect option", () => {
        const current = guidedInterview.getCurrent() as MultipleChoiceQuestion;
        guidedInterview.setValue(current.id, "a");
        expect(current.values).toEqual([ 'b' ]);
        guidedInterview.next();
        expect(guidedInterview.getCurrent().id).toEqual("q4");
    });

    test("Get data", () => {
        // interview.previous();
        // const current = interview.getCurrent();
        // interview.setValue(current.id, "a");
        // expect((current as MultipleChoice).values).toEqual([ 'b', 'a' ]);
        // const data = interview.getData()
        // expect(data.q1.values).toEqual([ 'b', 'a' ]);
    });

});