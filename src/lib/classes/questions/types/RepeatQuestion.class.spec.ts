import { GuidedInterview } from '@/lib/GuidedInterview2'
import { RepeatQuestion } from './RepeatQuestion.class';

import * as duplicatedErrorJson from "@/test-data/interview-with-repeat-questions-1.json";
import * as nestedDuplicatedErrorJson from "@/test-data/interview-with-repeat-questions-2.json";
import * as happyPath from "@/test-data/interview-with-repeat-questions-3.json";
import * as nestedRepeatExample from "@/test-data/interview-with-repeat-questions-4.json";

let guidedInterview: GuidedInterview;

describe("RepeatQuestion.class", () => {

    describe("Errors", () => {
        test("Duplicated id values", () => {

            const t = () => {
                guidedInterview = new GuidedInterview({ interviewParams: duplicatedErrorJson })
            };

            expect(t).toThrow("ID REPEATED: nombreRepresentantePersonaJuridica");
        });

        test("Nested: Duplicated id values", () => {
            const t = () => {
                guidedInterview = new GuidedInterview({ interviewParams: nestedDuplicatedErrorJson })
            };
            expect(t).toThrow("ID REPEATED: nombreDelFamiliar");
        });

    })

    describe("Happy path", () => {

        beforeAll(() => {
            guidedInterview = new GuidedInterview({ interviewParams: happyPath });
        });

        test("Set initial param", () => {
            const current = guidedInterview.getCurrent();
            expect(current.type).toEqual("repeat");
            expect(current.value).toEqual(parseFloat(happyPath.numeroAsociados.value));
        });

        test("Change value of repeat question", () => {
            const current = guidedInterview.getCurrent();
            guidedInterview.setValue(current.id, 4);
            expect(current.value).toEqual(4);
        });

        test("Set value of repeat question out of MAX range", () => {
            const current = guidedInterview.getCurrent() as RepeatQuestion;
            guidedInterview.setValue(current.id, 100);
      
            expect(current.value).toEqual(current.range.max);
        });

        test("Set value of repeat question out of MIN range", () => {
            const current = guidedInterview.getCurrent() as RepeatQuestion;
            guidedInterview.setValue(current.id, 0);
      
            expect(current.value).toEqual(current.range.min);
        });

        test("Set value of repeat question to number and hide the rest of content", () => {
            const current = guidedInterview.getCurrent() as RepeatQuestion;
            guidedInterview.setValue(current.id, 4);
      
            Object.keys(current.content).forEach((key, index) => {
                const expected = index < 4 ? false : true;
                expect(current.content[parseInt(key)].hidden).toEqual(expected);
            });
        });

        test("Set value of nested questions", () => {
            const current = guidedInterview.getCurrent();
            for (let index = 0; index < 4; index++) {
                const nestedInterview = guidedInterview.getNestedInterview(current.id, index);
                const newValue = "Result " + (index + 1);
                nestedInterview.setValue("name", newValue);
                expect(nestedInterview.findQuestionById("name")?.value).toEqual(newValue);
            }
        });

    })

    describe("Repeat nested", () => {

        beforeAll(() => {
            guidedInterview = new GuidedInterview({ interviewParams: nestedRepeatExample });
        });
    
        test("Set initial param", () => {

            guidedInterview.next()
            expect(guidedInterview.getCurrent().type).toEqual("repeat");
        });
    
        test("Set initial param", () => {
            const current = guidedInterview.getCurrent();
            const nestedInterview = guidedInterview.getNestedInterview(current.id, 0);
            nestedInterview.setValue("personasQueFirmanPersonJuridica", 5);
            const data = guidedInterview.getState().personasPropietarias.content[0].state.personasQueFirmanPersonJuridica.value
            expect(data).toEqual(5);
    
        });
    
    });

});