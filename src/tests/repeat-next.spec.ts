import { GuidedInterview, Question, Repeat } from "@/lib/GuidedInterview";
import * as repeatExample3 from "@/data/forms/repeat-example-3.json";


describe("Repeat Next & Previous", () => {

  test("1 level nested", () => {
    const interview = new GuidedInterview(repeatExample3);
    let current = interview.getCurrent() as Question;
    // 50
    for (let i = 0; i < 3 ; i++) interview.next()
    expect(interview.getCurrent().id).toEqual("nombreArrendador");

    interview.previous();
    expect(interview.getCurrent().id).toEqual("tipoPersona");

    interview.previous();
    expect(interview.getCurrent().id).toEqual("personasPropietarias");

    interview.previous();
    expect(interview.getCurrent().id).toEqual("name");

    for (let i = 0; i < 7 ; i++) interview.next();
    expect(interview.getCurrent().id).toEqual("tipoPersona");
  });

  test("2 level nested", () => {
    const interview = new GuidedInterview(repeatExample3);
    let current = interview.getCurrent() as Question;
    // 50
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

    for (let i = 0; i < 4 ; i++) interview.next()

    expect(interview.getCurrent().id).toEqual("tipoPersona");
    expect(interview.getCurrent().title).toEqual("La persona arrendadora 2 (propietaria) es");

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

    for (let i = 0; i < 5 ; i++) interview.next();

    expect(interview.getCurrent().id).toEqual("numeroDocAnterior");
    
    // go back to begining
    
    interview.previous();
    expect(interview.getCurrent().id).toEqual("tipoDocumento");

    for (let i = 0; i < 4 ; i++) interview.previous();

    expect(interview.getCurrent().id).toEqual("numeroDocAnterior");

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

  });

});
