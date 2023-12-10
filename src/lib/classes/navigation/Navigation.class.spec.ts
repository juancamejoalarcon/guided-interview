import { GuidedInterview } from '../../GuidedInterview2'

import * as repeatExample from "@/test-data/interview-with-repeat-questions-4.json";

let guidedInterview: GuidedInterview;

describe("Navigation.class", () => {

    describe("1 level nested", () => {

        beforeAll(() => {
            guidedInterview = new GuidedInterview({ interviewParams: repeatExample })
        });

        test("Navigate", () => {

            let progress = { currentPosition: 0, total: 0, percentageOfCompletion: 0};
            const updateProgress = () =>  {
                progress = guidedInterview.getProgress()
            }

            for (let i = 0; i < 3 ; i++) guidedInterview.next()
            expect(guidedInterview.getCurrent().id).toEqual("nombreArrendador");
            expect(guidedInterview.isStart()).toEqual(false);
            expect(guidedInterview.isEnd()).toEqual(false);
    
            updateProgress()
            expect(progress.currentPosition).toEqual(5);
            expect(progress.total).toEqual(47);
            expect(progress.percentageOfCompletion).toEqual(11);
    
            guidedInterview.previous();
            expect(guidedInterview.getCurrent().id).toEqual("tipoPersona");
    
            guidedInterview.previous();
            expect(guidedInterview.getCurrent().id).toEqual("personasPropietarias");
    
            guidedInterview.previous();
            expect(guidedInterview.getCurrent().id).toEqual("name");
            expect(guidedInterview.isStart()).toEqual(true);
    
            updateProgress()
            expect(progress.currentPosition).toEqual(1);
            expect(progress.total).toEqual(47);
            expect(progress.percentageOfCompletion).toEqual(2);
    
            for (let i = 0; i < 7 ; i++) guidedInterview.next();
            expect(guidedInterview.getCurrent().id).toEqual("tipoPersona");
            expect(guidedInterview.isStart()).toEqual(false);

        })

    });

    describe("2 level nested", () => {

        beforeAll(() => {
            guidedInterview = new GuidedInterview({ interviewParams: repeatExample })
        });

        test("Navigate", () => {

            let progress = { currentPosition: 0, total: 0, percentageOfCompletion: 0};
            const updateProgress = () =>  {
                progress = guidedInterview.getProgress()
            }

            guidedInterview.next()
            guidedInterview.next()
            const current = guidedInterview.getCurrent();
            expect(current.id).toEqual("tipoPersona");
    
            const value = "Persona jurídica";
            guidedInterview.getCurrentGuidedInterview()?.setValue(current.id, value)
            guidedInterview.next()
            expect(guidedInterview.getCurrent().id).toEqual("actuaComo");
    
            guidedInterview.next()
            expect(guidedInterview.getCurrent().id).toEqual("nombrePersonaJuridica");
    
            guidedInterview.next()
            expect(guidedInterview.getCurrent().id).toEqual("personasQueFirmanPersonJuridica");

            guidedInterview.next()
            expect(guidedInterview.getCurrent().id).toEqual("nombreRepresentantePersonaJuridica");
    
            updateProgress()
            expect(progress.currentPosition).toEqual(14);
            expect(progress.total).toEqual(47);
            expect(progress.percentageOfCompletion).toEqual(30);
    
    
            for (let i = 0; i < 4 ; i++) guidedInterview.next()
    
            expect(guidedInterview.getCurrent().id).toEqual("tipoPersona");
            expect(guidedInterview.getCurrent().title).toEqual("La persona arrendadora 2 (propietaria) es");
    
            updateProgress()
            expect(progress.currentPosition).toEqual(18);
            expect(progress.total).toEqual(47);
            expect(progress.percentageOfCompletion).toEqual(38);
    
            guidedInterview.next()
            expect(guidedInterview.getCurrent().id).toEqual("nombreArrendador");
    
            guidedInterview.next()
            expect(guidedInterview.getCurrent().id).toEqual("direccionArrendador");
    
            guidedInterview.next()
            expect(guidedInterview.getCurrent().id).toEqual("tipoDocumento");
    
            guidedInterview.next()
            expect(guidedInterview.getCurrent().id).toEqual("numeroDocAnterior");
    
            guidedInterview.next();
            expect(guidedInterview.getCurrent().id).toEqual("tipoPersona");
            expect(guidedInterview.getCurrent().title).toEqual("La persona arrendadora 3 (propietaria) es");
    
            guidedInterview.next();
            expect(guidedInterview.getCurrent().id).toEqual("nombreArrendador");
            expect(guidedInterview.isEnd()).toEqual(false);
    
            for (let i = 0; i < 5 ; i++) guidedInterview.next();
    
            expect(guidedInterview.getCurrent().id).toEqual("numeroDocAnterior");
            expect(guidedInterview.isEnd()).toEqual(true);
        
            // go back to begining
        
            guidedInterview.previous();
            expect(guidedInterview.getCurrent().id).toEqual("tipoDocumento");
    
            for (let i = 0; i < 4 ; i++) guidedInterview.previous();
    
            expect(guidedInterview.getCurrent().id).toEqual("numeroDocAnterior");
            expect(guidedInterview.isEnd()).toEqual(false);
    
            for (let i = 0; i < 4 ; i++) guidedInterview.previous();
    
            expect(guidedInterview.getCurrent().id).toEqual("tipoPersona");
            expect(guidedInterview.getCurrent().title).toEqual("La persona arrendadora 2 (propietaria) es");
    
            guidedInterview.previous();
            expect(guidedInterview.getCurrent().id).toEqual("funcionRepresentantePersonaJuridica");
            expect(guidedInterview.getCurrent().title).toEqual("Función del representante de la persona jurídica 2:");
    
            guidedInterview.previous();
            expect(guidedInterview.getCurrent().id).toEqual("nombreRepresentantePersonaJuridica");
            expect(guidedInterview.getCurrent().title).toEqual("Nombre completo, incluyendo apellidos, del representante 2 de la persona jurídica:");
    
            guidedInterview.previous();
            expect(guidedInterview.getCurrent().id).toEqual("funcionRepresentantePersonaJuridica");
            expect(guidedInterview.getCurrent().title).toEqual("Función del representante de la persona jurídica 1:");
    
            guidedInterview.previous();
            expect(guidedInterview.getCurrent().id).toEqual("nombreRepresentantePersonaJuridica");
            expect(guidedInterview.getCurrent().title).toEqual("Nombre completo, incluyendo apellidos, del representante 1 de la persona jurídica:");
    
            guidedInterview.previous();
            expect(guidedInterview.getCurrent().id).toEqual("personasQueFirmanPersonJuridica");
    
            guidedInterview.previous();
            expect(guidedInterview.getCurrent().id).toEqual("nombrePersonaJuridica");
    
            guidedInterview.previous();
            expect(guidedInterview.getCurrent().id).toEqual("actuaComo");
    
            guidedInterview.previous();
            expect(guidedInterview.getCurrent().id).toEqual("tipoPersona");
            expect(guidedInterview.getCurrent().title).toEqual("La persona arrendadora 1 (propietaria) es");
    
            guidedInterview.previous();
            expect(guidedInterview.getCurrent().id).toEqual("personasPropietarias");
    
            guidedInterview.previous();
            expect(guidedInterview.getCurrent().id).toEqual("name");
            expect(guidedInterview.isStart()).toEqual(true);
            expect(guidedInterview.isEnd()).toEqual(false);
    
            updateProgress();
            expect(progress.currentPosition).toEqual(1);
            expect(progress.total).toEqual(47);
            expect(progress.percentageOfCompletion).toEqual(2);

        })

    });

});