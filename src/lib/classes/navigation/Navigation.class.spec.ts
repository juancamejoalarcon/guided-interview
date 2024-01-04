import { GuidedInterview } from '../../GuidedInterview'

import * as repeatExample from "@/test-data/interview-with-repeat-questions-4.json";
import * as repeatExample2 from "@/test-data/interview-with-repeat-questions-6.json";
import * as repeatExample3 from "@/test-data/interview-with-repeat-questions-7.json";
import * as poderEspecial from "@/test-data/interview-with-repeat-questions-8.json";

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
            expect(guidedInterview.getCurrent().state.title).toEqual("La persona arrendadora 2 (propietaria) es");
    
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
            expect(guidedInterview.getCurrent().state.title).toEqual("La persona arrendadora 3 (propietaria) es");
    
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
            expect(guidedInterview.getCurrent().state.title).toEqual("La persona arrendadora 2 (propietaria) es");
    
            guidedInterview.previous();
            expect(guidedInterview.getCurrent().id).toEqual("funcionRepresentantePersonaJuridica");
            expect(guidedInterview.getCurrent().state.title).toEqual("Función del representante de la persona jurídica 2:");
    
            guidedInterview.previous();
            expect(guidedInterview.getCurrent().id).toEqual("nombreRepresentantePersonaJuridica");
            expect(guidedInterview.getCurrent().state.title).toEqual("Nombre completo, incluyendo apellidos, del representante 2 de la persona jurídica:");
    
            guidedInterview.previous();
            expect(guidedInterview.getCurrent().id).toEqual("funcionRepresentantePersonaJuridica");
            expect(guidedInterview.getCurrent().state.title).toEqual("Función del representante de la persona jurídica 1:");
    
            guidedInterview.previous();
            expect(guidedInterview.getCurrent().id).toEqual("nombreRepresentantePersonaJuridica");
            expect(guidedInterview.getCurrent().state.title).toEqual("Nombre completo, incluyendo apellidos, del representante 1 de la persona jurídica:");
    
            guidedInterview.previous();
            expect(guidedInterview.getCurrent().id).toEqual("personasQueFirmanPersonJuridica");
    
            guidedInterview.previous();
            expect(guidedInterview.getCurrent().id).toEqual("nombrePersonaJuridica");
    
            guidedInterview.previous();
            expect(guidedInterview.getCurrent().id).toEqual("actuaComo");
    
            guidedInterview.previous();
            expect(guidedInterview.getCurrent().id).toEqual("tipoPersona");
            expect(guidedInterview.getCurrent().state.title).toEqual("La persona arrendadora 1 (propietaria) es");
    
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

    describe("Change repeat value", () => {

        beforeAll(() => {
            guidedInterview = new GuidedInterview({ interviewParams: repeatExample2 })
        });

        test("Navigate", () => {

            for (let i = 0; i < 4 ; i++) guidedInterview.next()

            expect(guidedInterview.getCurrent().id).toEqual("idpaubh");
            expect(guidedInterview.getCurrent().state.title).toEqual("2.2 - index 1");
            expect(guidedInterview.isEnd()).toEqual(true);

            for (let i = 0; i < 2 ; i++) guidedInterview.previous()

            expect(guidedInterview.getCurrent().id).toEqual("idjhxms");

            guidedInterview.getCurrentGuidedInterview()?.setValue(guidedInterview.getCurrent().id, 2)

            for (let i = 0; i < 2 ; i++) guidedInterview.next();

            expect(guidedInterview.getCurrent().id).toEqual("idpaubh");
            expect(guidedInterview.getCurrent().state.title).toEqual("2.2 - index 1");
            expect(guidedInterview.isEnd()).toEqual(false);

            guidedInterview.next()

            expect(guidedInterview.getCurrent().id).toEqual("ideamev");
            expect(guidedInterview.getCurrent().state.title).toEqual("2.1 - index 2");
            expect(guidedInterview.isEnd()).toEqual(false);

            guidedInterview.next()

            expect(guidedInterview.getCurrent().id).toEqual("idpaubh");
            expect(guidedInterview.getCurrent().state.title).toEqual("2.2 - index 2");
            expect(guidedInterview.isEnd()).toEqual(true);

            for (let i = 0; i < 4 ; i++) guidedInterview.previous();

            expect(guidedInterview.getCurrent().id).toEqual("idjhxms");

            guidedInterview.getCurrentGuidedInterview()?.setValue(guidedInterview.getCurrent().id, 1);

            for (let i = 0; i < 2 ; i++) guidedInterview.next();

            expect(guidedInterview.getCurrent().id).toEqual("idpaubh");
            expect(guidedInterview.getCurrent().state.title).toEqual("2.2 - index 1");
            expect(guidedInterview.isEnd()).toEqual(true);

            for (let i = 0; i < 2 ; i++) guidedInterview.previous();

            expect(guidedInterview.getCurrent().id).toEqual("idjhxms");

            guidedInterview.getCurrentGuidedInterview()?.setValue(guidedInterview.getCurrent().id, 3);

            for (let i = 0; i < 5 ; i++) guidedInterview.next();

            expect(guidedInterview.getCurrent().id).toEqual("ideamev");
            expect(guidedInterview.getCurrent().state.title).toEqual("2.1 - index 3");
            expect(guidedInterview.isEnd()).toEqual(false);

            guidedInterview.next();
            expect(guidedInterview.getCurrent().state.title).toEqual("2.2 - index 3");
            expect(guidedInterview.isEnd()).toEqual(true);
        })
    })
    
    describe("3 level nested", () => {

        beforeAll(() => {
            guidedInterview = new GuidedInterview({ interviewParams: repeatExample3 })
        });

        test("Navigate", () => {

            expect(guidedInterview.getCurrent().id).toEqual("idxgsqa");
            expect(guidedInterview.isStart()).toEqual(true);
    
            guidedInterview.next();
    
            expect(guidedInterview.getCurrent().id).toEqual("idnoczv");
    
            guidedInterview.getCurrentGuidedInterview()?.setValue(guidedInterview.getCurrent().id, 2);
    
            for (let i = 0; i < 2 ; i++) guidedInterview.next();
    
            expect(guidedInterview.getCurrent().id).toEqual("idaubct");
            guidedInterview.getCurrentGuidedInterview()?.setValue(guidedInterview.getCurrent().id, 2);

    
            for (let i = 0; i < 2 ; i++) guidedInterview.next();
            expect(guidedInterview.getCurrent().id).toEqual("idszikt");
            expect(guidedInterview.getCurrent().state.title).toEqual("2.2.2 - index 1");
            expect(guidedInterview.isEnd()).toEqual(false);
    
            guidedInterview.next();
    
            expect(guidedInterview.getCurrent().id).toEqual("idgqylc");
            expect(guidedInterview.getCurrent().state.title).toEqual("2.2.1 - index 2");
            expect(guidedInterview.isEnd()).toEqual(false);
    
      
            for (let i = 0; i < 2 ; i++) guidedInterview.next();
    
            expect(guidedInterview.getCurrent().id).toEqual("idjvlnl");
            expect(guidedInterview.getCurrent().state.title).toEqual("2.1 - index 2");
            expect(guidedInterview.isEnd()).toEqual(false);
    
            guidedInterview.next();
    
            expect(guidedInterview.getCurrent().id).toEqual("idaubct");
            expect(guidedInterview.getCurrent().state.title).toEqual("2.2 - index 2");
            expect(guidedInterview.isEnd()).toEqual(false);
    
            for (let i = 0; i < 2 ; i++) guidedInterview.next();
    
            expect(guidedInterview.getCurrent().id).toEqual("idszikt");
            expect(guidedInterview.getCurrent().state.title).toEqual("2.2.2 - index 1");
            expect(guidedInterview.isEnd()).toEqual(true);
        })
    })








    describe("Repeat next when first question is a repeat question", () => {

        beforeEach(() => {
            guidedInterview = new GuidedInterview({ interviewParams: poderEspecial })
        });

        test("With value 1", () => {
      
            const current = guidedInterview.getCurrent();
            expect(current.type).toEqual("repeat");
            expect(current.id).toEqual("numero_poderdantes");
            guidedInterview.next()
            expect(guidedInterview.getCurrent().id).toEqual("poderdante");
            guidedInterview.next()
            expect(guidedInterview.getCurrent().id).toEqual("nombre_concluido_n");
            guidedInterview.previous();
            expect(guidedInterview.getCurrent().id).toEqual("poderdante");
            for (let i = 0; i < 6; i++) guidedInterview.next();
            expect(guidedInterview.getCurrent().id).toEqual("direccion_poderdante");
            guidedInterview.next()
            expect(guidedInterview.getCurrent().id).toEqual("numero_apoderados");
            guidedInterview.next();
            expect(guidedInterview.getCurrent().id).toEqual("nombre_apoderado");
            guidedInterview.next();
            expect(guidedInterview.getCurrent().id).toEqual("doc_apoderado");
            guidedInterview.previous();
            expect(guidedInterview.getCurrent().id).toEqual("nombre_apoderado");
            guidedInterview.previous();
            expect(guidedInterview.getCurrent().id).toEqual("numero_apoderados");
            guidedInterview.previous();
            expect(guidedInterview.getCurrent().id).toEqual("direccion_poderdante");
            for (let i = 0; i < 6; i++) guidedInterview.previous();
            expect(guidedInterview.getCurrent().id).toEqual("poderdante");
      
        });
      
        test("With value 2", () => {
      
            const current = guidedInterview.getCurrent();
            expect(current.type).toEqual("repeat");
            expect(current.id).toEqual("numero_poderdantes");
            guidedInterview.setValue(current.id, 2);
            guidedInterview.next();
            expect(guidedInterview.getCurrent().id).toEqual("poderdante");
            for (let i = 0; i < 6; i++) guidedInterview.next();
            expect(guidedInterview.getCurrent().id).toEqual("direccion_poderdante");
            guidedInterview.next();
            expect(guidedInterview.getCurrent().id).toEqual("poderdante");
            guidedInterview.next();
            expect(guidedInterview.getCurrent().id).toEqual("nombre_concluido_n");
            expect(guidedInterview.getCurrent().indexInsideRepeat).toEqual("2");
            guidedInterview.next();
            expect(guidedInterview.getCurrent().id).toEqual("nombre_poderdante");
            for (let i = 0; i < 4; i++) guidedInterview.next();
            expect(guidedInterview.getCurrent().id).toEqual("direccion_poderdante");
            expect(guidedInterview.getCurrent().indexInsideRepeat).toEqual("2");
            guidedInterview.next();
            expect(guidedInterview.getCurrent().id).toEqual("numero_apoderados");
            guidedInterview.previous();
            expect(guidedInterview.getCurrent().id).toEqual("direccion_poderdante");
            expect(guidedInterview.getCurrent().indexInsideRepeat).toEqual("2");
            for (let i = 0; i < 6; i++) guidedInterview.previous();
            expect(guidedInterview.getCurrent().id).toEqual("poderdante");
            expect(guidedInterview.getCurrent().indexInsideRepeat).toEqual("2");
            guidedInterview.previous();
            expect(guidedInterview.getCurrent().id).toEqual("direccion_poderdante");
            expect(guidedInterview.getCurrent().indexInsideRepeat).toEqual("1");
      
        });
      
        test("Change values inside repeat", () => {
      
            const current = guidedInterview.getCurrent();
            expect(current.type).toEqual("repeat");
            expect(current.id).toEqual("numero_poderdantes");
            guidedInterview.setValue(current.id, 2);
            guidedInterview.next();
            expect(guidedInterview.getCurrent().id).toEqual("poderdante");
            const value = 'una persona jurídica'
            guidedInterview.getCurrentGuidedInterview()?.setValue(guidedInterview.getCurrent().id, value)
            expect(guidedInterview.getCurrent().value).toEqual(value);
            expect(guidedInterview.getCurrent().indexInsideRepeat).toEqual("1");
            guidedInterview.next();
            expect(guidedInterview.getCurrent().id).toEqual("representante");
            guidedInterview.next();
            expect(guidedInterview.getCurrent().id).toEqual("doc_representante");
            guidedInterview.next();
            expect(guidedInterview.getCurrent().id).toEqual("dni_representante");
            for (let i = 0; i < 7; i++) guidedInterview.next();
            expect(guidedInterview.getCurrent().id).toEqual("poderdante");
            expect(guidedInterview.getCurrent().indexInsideRepeat).toEqual("2");
            expect(guidedInterview.getCurrent().value).toEqual("una persona física");
            guidedInterview.getCurrentGuidedInterview()?.setValue(guidedInterview.getCurrent().id, value);
            expect(guidedInterview.getCurrent().value).toEqual("una persona jurídica");
      
        });
      
        test("Go to next value after repeat, then return to last question inside repeat and then go again to next question after repeat", () => {
      
          
            const current = () => guidedInterview.getCurrent();
            expect(current().type).toEqual("repeat");
            expect(current().id).toEqual("numero_poderdantes");
      
            for (let i = 0; i < 7; i++) guidedInterview.next();
            guidedInterview.next();
      
            expect(current().id).toEqual("numero_apoderados");
      
            guidedInterview.previous();
      
            expect(current().id).toEqual("direccion_poderdante");
      
            guidedInterview.next();
      
            expect(current().id).toEqual("numero_apoderados");
      
            guidedInterview.previous();
      
            expect(current().id).toEqual("direccion_poderdante");
      
            guidedInterview.previous();
      
            expect(current().id).toEqual("dni_poderdante");
      
            for (let i = 0; i < 6; i++) guidedInterview.previous();
      
            expect(current().id).toEqual("numero_poderdantes");
      
            guidedInterview.setValue(current().id, 2);
      
            for (let i = 0; i < 7; i++) guidedInterview.next();
      
            expect(current().id).toEqual("direccion_poderdante");
      
            guidedInterview.next();
      
            expect(current().id).toEqual("poderdante");
            expect(current().indexInsideRepeat).toEqual("2");
      
            guidedInterview.previous();
      
            expect(current().id).toEqual("direccion_poderdante");
            expect(current().indexInsideRepeat).toEqual("1");
      
            guidedInterview.next();
      
            expect(current().id).toEqual("poderdante");
            expect(current().indexInsideRepeat).toEqual("2");
      
            guidedInterview.next();
      
            expect(current().id).toEqual("nombre_concluido_n");
            expect(current().indexInsideRepeat).toEqual("2");
      
            for (let i = 0; i < 5; i++) guidedInterview.next();
            guidedInterview.next();
      
            expect(current().id).toEqual("numero_apoderados");
      
            guidedInterview.previous();
      
            expect(current().id).toEqual("direccion_poderdante");
            expect(current().indexInsideRepeat).toEqual("2");
      
            guidedInterview.next();
      
            expect(current().id).toEqual("numero_apoderados");
      
            for (let i = 0; i < 15; i++) guidedInterview.previous();
      
            expect(current().id).toEqual("numero_poderdantes");
      
            guidedInterview.setValue(current().id, 3);
      
            for (let i = 0; i < 8; i++) guidedInterview.next();
      
            expect(current().id).toEqual("poderdante");
            expect(current().indexInsideRepeat).toEqual("2");
      
            guidedInterview.previous();
      
            expect(current().id).toEqual("direccion_poderdante");
            expect(current().indexInsideRepeat).toEqual("1");
      
            guidedInterview.next();
      
            expect(current().id).toEqual("poderdante");
            expect(current().indexInsideRepeat).toEqual("2");
      
            for (let i = 0; i < 7; i++) guidedInterview.next();
      
            expect(current().id).toEqual("poderdante");
            expect(current().indexInsideRepeat).toEqual("3");
      
            guidedInterview.previous();
      
            expect(current().id).toEqual("direccion_poderdante");
            expect(current().indexInsideRepeat).toEqual("2");
      
            for (let i = 0; i < 8; i++) guidedInterview.next();
      
            expect(current().id).toEqual("numero_apoderados");
      
      
        });
      
    });

});