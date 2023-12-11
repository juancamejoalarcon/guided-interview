import { GuidedInterview } from './GuidedInterview'

import * as happyPath from "@/test-data/happy-path.json";
import * as solicitudDeVacaciones from "@/data/forms/solicitud-vacaciones.json";
import { MultipleChoiceQuestion } from './classes/questions/types/MultipleChoiceQuestion.class';

let guidedInterview: GuidedInterview;

describe("GuidedInterview.class", () => {

    describe("Happy path", () => {

        beforeAll(() => {
            guidedInterview = new GuidedInterview({ interviewParams: happyPath })
        });

        test("Set initial value", () => {
            expect(guidedInterview.getCurrent().id).toEqual("name");
        })

        test("Set next question", () => {
            guidedInterview.next();
            expect(guidedInterview.getCurrent().id).toEqual("country");
        })

        test("Set previous question", () => {
            guidedInterview.previous();
            expect(guidedInterview.getCurrent().id).toEqual("name");
        })

        test("Set value of question", () => {
            const value = "Juan";
            guidedInterview.setValue("name", value);
            expect(guidedInterview.getCurrent().value).toEqual(value);
        });

        test("Check if logic works after changing value", () => {
            guidedInterview.next();
            expect(guidedInterview.getCurrent().id).toEqual("age");
        });

    });

    describe("Happy path whith real life form: 'Solicitud de vacaciones'", () => {

        beforeAll(() => {
            guidedInterview = new GuidedInterview({ interviewParams: solicitudDeVacaciones });
        });

        test("Set next question", () => {
            guidedInterview.next();
            expect(guidedInterview.getCurrent().id).toEqual("dni");
        });

        test("Set previous question", () => {
            guidedInterview.previous();
            expect(guidedInterview.getCurrent().id).toEqual("name");
        });
    
        test("Set value of question", () => {
            const value = "John Doe";
            const current = guidedInterview.getCurrent();
            guidedInterview.setValue(current.id, "John Doe");
            expect(current.value).toEqual(value);
        });

        test("Set value of multiple choice", () => {
            const id = "sexoEmpleador";
            const value = "un hombre";
            guidedInterview.setValue(id, value);
            const current = guidedInterview.findQuestionById(id);
            expect(current.value).toEqual(value);
        });
    
        test("Test Logic Can Be Shown 'Show If'", () => {
            for (let i = 0; i < 5 ; i++) {
                guidedInterview.next();
            }
            const current = guidedInterview.getCurrent();
            expect(current.canBeShown()).toEqual(true);
            const id = "sexoEmpleador";
            const value = "una persona jurídica";
            guidedInterview.setValue(id, value);
            expect(current.canBeShown()).toEqual(false);
        });

        test("Test Logic Can Be Shown 'Hide If'", () => {
            const questionWithHideIf = guidedInterview.findQuestionById('direccionEmpleador');
            expect(questionWithHideIf.canBeShown()).toEqual(false);
        });

        test("Test Get ID", () => {
            const id = "sexoEmpleador";
            const el = guidedInterview.findQuestionById(id);
            expect(el?.id).toEqual(id);
        
            const interviewWrap = () => { guidedInterview.findQuestionById('null') };
            expect(interviewWrap).toThrow("No question with id: null");
        });

        test("Add choice to multiple choice", () => {
            const id = "sexoEmpleador";
            guidedInterview.addChoiceToMultipleChoiceQuestion(id, {
                label: "Otro",
                checked: false,
            });
            const question = guidedInterview.findQuestionById(id) as MultipleChoiceQuestion;
            expect(question.choices.length).toEqual(4);
        });

        test("Remove choice from multiple choice", () => {
            const id = "sexoEmpleador";
            guidedInterview.removeChoiceFromMultipleChoice(id, 0);
            const question = guidedInterview.findQuestionById(id) as MultipleChoiceQuestion;
            expect(question?.choices.length).toEqual(3);
            expect(question?.choices[0].label).toEqual("un hombre");

            guidedInterview.addChoiceToMultipleChoiceQuestion(id, {
                label: "Otro",
                checked: false,
            });

            expect(question?.choices.length).toEqual(4);

            guidedInterview.removeChoiceFromMultipleChoice(id, "Otro");

            expect(question?.choices.length).toEqual(3);

            const interviewWrap = () => { guidedInterview.removeChoiceFromMultipleChoice(id, "Wrong label") };
            expect(interviewWrap).toThrow("Choice with label: 'Wrong label', does not exist in Question with id: 'sexoEmpleador'");

        });

        test("Change label of choice", () => {
            const id = "sexoEmpleador";
            guidedInterview.changeLabelOfChoice(id, 0, "un hombre updated");
            const question = guidedInterview.findQuestionById(id) as MultipleChoiceQuestion;
            expect(question?.choices[0].label).toEqual("un hombre updated");
        });

        test("Set question as required", () => {
            const id = "sexoEmpleador";
            guidedInterview.addOrUpdateParamOfQuestion(id, {name: 'required', value: true });
            const question = guidedInterview.findQuestionById(id);
            expect(question.required).toEqual(true);
        });

    });

});