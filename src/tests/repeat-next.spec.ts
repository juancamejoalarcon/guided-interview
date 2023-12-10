import { GuidedInterview, Question, Repeat } from "@/lib/GuidedInterview";
import * as repeatExample3 from "@/data/forms/repeat-example-3.json";
import * as repeatExample4 from "@/data/forms/repeat-example-4.json";
import * as repeatExample5 from "@/data/forms/repeat-example-5.json";


describe("Repeat Next & Previous", () => {

    test("1 level nested", () => {
        const interview = new GuidedInterview(repeatExample3);
        const current = interview.getCurrent() as Question;
        let progress = { currentPosition: 0, total: 0, percentageOfCompletion: 0};
        const updateProgress = () =>  {
            progress = interview.getProgress()
        }

        for (let i = 0; i < 3 ; i++) interview.next()
        expect(interview.getCurrent().id).toEqual("nombreArrendador");
        expect(interview.isStart()).toEqual(false);
        expect(interview.isEnd()).toEqual(false);

        updateProgress()
        expect(progress.currentPosition).toEqual(5);
        expect(progress.total).toEqual(47);
        expect(progress.percentageOfCompletion).toEqual(11);

        interview.previous();
        expect(interview.getCurrent().id).toEqual("tipoPersona");

        interview.previous();
        expect(interview.getCurrent().id).toEqual("personasPropietarias");

        interview.previous();
        expect(interview.getCurrent().id).toEqual("name");
        expect(interview.isStart()).toEqual(true);

        updateProgress()
        expect(progress.currentPosition).toEqual(1);
        expect(progress.total).toEqual(47);
        expect(progress.percentageOfCompletion).toEqual(2);

        for (let i = 0; i < 7 ; i++) interview.next();
        expect(interview.getCurrent().id).toEqual("tipoPersona");
        expect(interview.isStart()).toEqual(false);
    });

    test("2 level nested", () => {
        const interview = new GuidedInterview(repeatExample3);
        let current = interview.getCurrent() as Question;
        let progress = { currentPosition: 0, total: 0, percentageOfCompletion: 0};
        const updateProgress = () =>  {
            progress = interview.getProgress()
        }
    
        interview.next()
        interview.next()
        current = interview.getCurrent() as Question;
        expect(current.id).toEqual("tipoPersona");

        const value = "Persona jurídica";
        interview.getCurrentGuidedInterview()?.setValue(current.id, value)
        interview.next()
        expect(interview.getCurrent().id).toEqual("actuaComo");

        interview.next()
        expect(interview.getCurrent().id).toEqual("nombrePersonaJuridica");

        interview.next()
        expect(interview.getCurrent().id).toEqual("personasQueFirmanPersonJuridica");

        interview.next()
        expect(interview.getCurrent().id).toEqual("nombreRepresentantePersonaJuridica");

        updateProgress()
        expect(progress.currentPosition).toEqual(14);
        expect(progress.total).toEqual(47);
        expect(progress.percentageOfCompletion).toEqual(30);


        for (let i = 0; i < 4 ; i++) interview.next()

        expect(interview.getCurrent().id).toEqual("tipoPersona");
        expect(interview.getCurrent().title).toEqual("La persona arrendadora 2 (propietaria) es");

        updateProgress()
        expect(progress.currentPosition).toEqual(18);
        expect(progress.total).toEqual(47);
        expect(progress.percentageOfCompletion).toEqual(38);

        interview.next()
        expect(interview.getCurrent().id).toEqual("nombreArrendador");

        interview.next()
        expect(interview.getCurrent().id).toEqual("direccionArrendador");

        interview.next()
        expect(interview.getCurrent().id).toEqual("tipoDocumento");

        interview.next()
        expect(interview.getCurrent().id).toEqual("numeroDocAnterior");

        interview.next();
        expect(interview.getCurrent().id).toEqual("tipoPersona");
        expect(interview.getCurrent().title).toEqual("La persona arrendadora 3 (propietaria) es");

        interview.next();
        expect(interview.getCurrent().id).toEqual("nombreArrendador");
        expect(interview.isEnd()).toEqual(false);

        for (let i = 0; i < 5 ; i++) interview.next();

        expect(interview.getCurrent().id).toEqual("numeroDocAnterior");
        expect(interview.isEnd()).toEqual(true);
    
        // go back to begining
    
        interview.previous();
        expect(interview.getCurrent().id).toEqual("tipoDocumento");

        for (let i = 0; i < 4 ; i++) interview.previous();

        expect(interview.getCurrent().id).toEqual("numeroDocAnterior");
        expect(interview.isEnd()).toEqual(false);

        for (let i = 0; i < 4 ; i++) interview.previous();

        expect(interview.getCurrent().id).toEqual("tipoPersona");
        expect(interview.getCurrent().title).toEqual("La persona arrendadora 2 (propietaria) es");

        interview.previous();
        expect(interview.getCurrent().id).toEqual("funcionRepresentantePersonaJuridica");
        expect(interview.getCurrent().title).toEqual("Función del representante de la persona jurídica 2:");

        interview.previous();
        expect(interview.getCurrent().id).toEqual("nombreRepresentantePersonaJuridica");
        expect(interview.getCurrent().title).toEqual("Nombre completo, incluyendo apellidos, del representante 2 de la persona jurídica:");

        interview.previous();
        expect(interview.getCurrent().id).toEqual("funcionRepresentantePersonaJuridica");
        expect(interview.getCurrent().title).toEqual("Función del representante de la persona jurídica 1:");

        interview.previous();
        expect(interview.getCurrent().id).toEqual("nombreRepresentantePersonaJuridica");
        expect(interview.getCurrent().title).toEqual("Nombre completo, incluyendo apellidos, del representante 1 de la persona jurídica:");

        interview.previous();
        expect(interview.getCurrent().id).toEqual("personasQueFirmanPersonJuridica");

        interview.previous();
        expect(interview.getCurrent().id).toEqual("nombrePersonaJuridica");

        interview.previous();
        expect(interview.getCurrent().id).toEqual("actuaComo");

        interview.previous();
        expect(interview.getCurrent().id).toEqual("tipoPersona");
        expect(interview.getCurrent().title).toEqual("La persona arrendadora 1 (propietaria) es");

        interview.previous();
        expect(interview.getCurrent().id).toEqual("personasPropietarias");

        interview.previous();
        expect(interview.getCurrent().id).toEqual("name");
        expect(interview.isStart()).toEqual(true);
        expect(interview.isEnd()).toEqual(false);

        updateProgress();
        expect(progress.currentPosition).toEqual(1);
        expect(progress.total).toEqual(47);
        expect(progress.percentageOfCompletion).toEqual(2);

    });

    test("Change repeat value", () => {
        const interview = new GuidedInterview(repeatExample4);
        const current = interview.getCurrent() as Question;

        for (let i = 0; i < 4 ; i++) interview.next()

        expect(interview.getCurrent().id).toEqual("idpaubh");
        expect(interview.getCurrent().title).toEqual("2.2 - index 1");
        expect(interview.isEnd()).toEqual(true);

        for (let i = 0; i < 2 ; i++) interview.previous()

        expect(interview.getCurrent().id).toEqual("idjhxms");

        interview.getCurrentGuidedInterview()?.setValue(interview.getCurrent().id, 2)

        for (let i = 0; i < 2 ; i++) interview.next();

        expect(interview.getCurrent().id).toEqual("idpaubh");
        expect(interview.getCurrent().title).toEqual("2.2 - index 1");
        expect(interview.isEnd()).toEqual(false);

        interview.next()

        expect(interview.getCurrent().id).toEqual("ideamev");
        expect(interview.getCurrent().title).toEqual("2.1 - index 2");
        expect(interview.isEnd()).toEqual(false);

        interview.next()

        expect(interview.getCurrent().id).toEqual("idpaubh");
        expect(interview.getCurrent().title).toEqual("2.2 - index 2");
        expect(interview.isEnd()).toEqual(true);

        for (let i = 0; i < 4 ; i++) interview.previous();

        expect(interview.getCurrent().id).toEqual("idjhxms");

        interview.getCurrentGuidedInterview()?.setValue(interview.getCurrent().id, 1);

        for (let i = 0; i < 2 ; i++) interview.next();

        expect(interview.getCurrent().id).toEqual("idpaubh");
        expect(interview.getCurrent().title).toEqual("2.2 - index 1");
        expect(interview.isEnd()).toEqual(true);

        for (let i = 0; i < 2 ; i++) interview.previous();

        expect(interview.getCurrent().id).toEqual("idjhxms");

        interview.getCurrentGuidedInterview()?.setValue(interview.getCurrent().id, 3);

        for (let i = 0; i < 5 ; i++) interview.next();

        expect(interview.getCurrent().id).toEqual("ideamev");
        expect(interview.getCurrent().title).toEqual("2.1 - index 3");
        expect(interview.isEnd()).toEqual(false);

        interview.next();
        expect(interview.getCurrent().title).toEqual("2.2 - index 3");
        expect(interview.isEnd()).toEqual(true);


    });

    test("3 level nested", () => {
        const interview = new GuidedInterview(repeatExample5);
        const current = interview.getCurrent() as Question;

        expect(interview.getCurrent().id).toEqual("idxgsqa");
        expect(interview.isStart()).toEqual(true);

        interview.next();

        expect(interview.getCurrent().id).toEqual("idnoczv");

        interview.getCurrentGuidedInterview()?.setValue(interview.getCurrent().id, 2);

        for (let i = 0; i < 2 ; i++) interview.next();

        expect(interview.getCurrent().id).toEqual("idaubct");
        interview.getCurrentGuidedInterview()?.setValue(interview.getCurrent().id, 2);

        for (let i = 0; i < 2 ; i++) interview.next();

        expect(interview.getCurrent().id).toEqual("idszikt");
        expect(interview.getCurrent().title).toEqual("2.2.2 - index 1");
        expect(interview.isEnd()).toEqual(false);

        interview.next();

        expect(interview.getCurrent().id).toEqual("idgqylc");
        expect(interview.getCurrent().title).toEqual("2.2.1 - index 2");
        expect(interview.isEnd()).toEqual(false);

  
        for (let i = 0; i < 2 ; i++) interview.next();

        expect(interview.getCurrent().id).toEqual("idjvlnl");
        expect(interview.getCurrent().title).toEqual("2.1 - index 2");
        expect(interview.isEnd()).toEqual(false);

        interview.next();

        expect(interview.getCurrent().id).toEqual("idaubct");
        expect(interview.getCurrent().title).toEqual("2.2 - index 2");
        expect(interview.isEnd()).toEqual(false);

        for (let i = 0; i < 2 ; i++) interview.next();

        expect(interview.getCurrent().id).toEqual("idszikt");
        expect(interview.getCurrent().title).toEqual("2.2.2 - index 1");
        expect(interview.isEnd()).toEqual(true);


    });

});
