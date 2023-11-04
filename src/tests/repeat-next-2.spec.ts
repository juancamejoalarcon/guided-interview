import { GuidedInterview, Repeat } from "@/lib/GuidedInterview";
import * as poderEspecial from "@/data/forms/poder-especial.json";

describe("Repeat next when first question is a repeat question", () => {

  test("With value 1", () => {

    const interview = new GuidedInterview(poderEspecial);
    const current = interview.getCurrent() as Repeat;
    expect(current.type).toEqual("repeat");
    expect(current.id).toEqual("numero_poderdantes");
    interview.next()
    expect(interview.getCurrent().id).toEqual("poderdante");
    interview.next()
    expect(interview.getCurrent().id).toEqual("nombre_concluido_n");
    interview.previous();
    expect(interview.getCurrent().id).toEqual("poderdante");
    for (let i = 0; i < 6; i++) interview.next();
    expect(interview.getCurrent().id).toEqual("direccion_poderdante");
    interview.next()
    expect(interview.getCurrent().id).toEqual("numero_apoderados");
    interview.next();
    expect(interview.getCurrent().id).toEqual("nombre_apoderado");
    interview.next();
    expect(interview.getCurrent().id).toEqual("doc_apoderado");
    interview.previous();
    expect(interview.getCurrent().id).toEqual("nombre_apoderado");
    interview.previous();
    expect(interview.getCurrent().id).toEqual("numero_apoderados");
    interview.previous();
    expect(interview.getCurrent().id).toEqual("direccion_poderdante");
    for (let i = 0; i < 6; i++) interview.previous();
    expect(interview.getCurrent().id).toEqual("poderdante");

  });

  test("With value 2", () => {

    const interview = new GuidedInterview(poderEspecial);
    const current = interview.getCurrent() as Repeat;
    expect(current.type).toEqual("repeat");
    expect(current.id).toEqual("numero_poderdantes");
    interview.setValue(current.id, 2);
    interview.next();
    expect(interview.getCurrent().id).toEqual("poderdante");
    for (let i = 0; i < 6; i++) interview.next();
    expect(interview.getCurrent().id).toEqual("direccion_poderdante");
    interview.next();
    expect(interview.getCurrent().id).toEqual("poderdante");
    interview.next();
    expect(interview.getCurrent().id).toEqual("nombre_concluido_n");
    expect(interview.getCurrent().indexInsideRepeat).toEqual("2");
    interview.next();
    expect(interview.getCurrent().id).toEqual("nombre_poderdante");
    for (let i = 0; i < 4; i++) interview.next();
    expect(interview.getCurrent().id).toEqual("direccion_poderdante");
    expect(interview.getCurrent().indexInsideRepeat).toEqual("2");
    interview.next();
    expect(interview.getCurrent().id).toEqual("numero_apoderados");
    interview.previous();
    expect(interview.getCurrent().id).toEqual("direccion_poderdante");
    expect(interview.getCurrent().indexInsideRepeat).toEqual("2");
    for (let i = 0; i < 6; i++) interview.previous();
    expect(interview.getCurrent().id).toEqual("poderdante");
    expect(interview.getCurrent().indexInsideRepeat).toEqual("2");
    interview.previous();
    expect(interview.getCurrent().id).toEqual("direccion_poderdante");
    expect(interview.getCurrent().indexInsideRepeat).toEqual("1");

  });

  test("Change values inside repeat", () => {

    const interview = new GuidedInterview(poderEspecial);
    const current = interview.getCurrent() as Repeat;
    expect(current.type).toEqual("repeat");
    expect(current.id).toEqual("numero_poderdantes");
    interview.setValue(current.id, 2);
    interview.next();
    expect(interview.getCurrent().id).toEqual("poderdante");
    const value = 'una persona jurídica'
    interview.getCurrentGuidedInterview()?.setValue(interview.getCurrent().id, value)
    expect(interview.getCurrent().value).toEqual(value);
    expect(interview.getCurrent().indexInsideRepeat).toEqual("1");
    interview.next();
    expect(interview.getCurrent().id).toEqual("representante");
    interview.next();
    expect(interview.getCurrent().id).toEqual("doc_representante");
    interview.next();
    expect(interview.getCurrent().id).toEqual("dni_representante");
    for (let i = 0; i < 7; i++) interview.next();
    expect(interview.getCurrent().id).toEqual("poderdante");
    expect(interview.getCurrent().indexInsideRepeat).toEqual("2");
    expect(interview.getCurrent().value).toEqual("una persona física");
    interview.getCurrentGuidedInterview()?.setValue(interview.getCurrent().id, value);
    expect(interview.getCurrent().value).toEqual("una persona jurídica");

  });

  test("Go to next value after repeat, then return to last question inside repeat and then go again to next question after repeat", () => {

    
    const interview = new GuidedInterview(poderEspecial);
    const current = () => interview.getCurrent() as any;
    expect(current().type).toEqual("repeat");
    expect(current().id).toEqual("numero_poderdantes");

    for (let i = 0; i < 7; i++) interview.next();
    interview.next();

    expect(current().id).toEqual("numero_apoderados");

    interview.previous();

    expect(current().id).toEqual("direccion_poderdante");

    interview.next();

    expect(current().id).toEqual("numero_apoderados");

    interview.previous();

    expect(current().id).toEqual("direccion_poderdante");

    interview.previous();

    expect(current().id).toEqual("dni_poderdante");

    for (let i = 0; i < 6; i++) interview.previous();

    expect(current().id).toEqual("numero_poderdantes");

    interview.setValue(current().id, 2);

    for (let i = 0; i < 7; i++) interview.next();

    expect(current().id).toEqual("direccion_poderdante");

    interview.next();

    expect(current().id).toEqual("poderdante");
    expect(current().indexInsideRepeat).toEqual("2");

    interview.previous();

    expect(current().id).toEqual("direccion_poderdante");
    expect(current().indexInsideRepeat).toEqual("1");

    interview.next();

    expect(current().id).toEqual("poderdante");
    expect(current().indexInsideRepeat).toEqual("2");

    interview.next();

    expect(current().id).toEqual("nombre_concluido_n");
    expect(current().indexInsideRepeat).toEqual("2");

    for (let i = 0; i < 5; i++) interview.next();
    interview.next();

    expect(current().id).toEqual("numero_apoderados");

    interview.previous();

    expect(current().id).toEqual("direccion_poderdante");
    expect(current().indexInsideRepeat).toEqual("2");

    interview.next();

    expect(current().id).toEqual("numero_apoderados");

    for (let i = 0; i < 15; i++) interview.previous();

    expect(current().id).toEqual("numero_poderdantes");

    interview.setValue(current().id, 3);

    for (let i = 0; i < 8; i++) interview.next();

    expect(current().id).toEqual("poderdante");
    expect(current().indexInsideRepeat).toEqual("2");

    interview.previous();

    expect(current().id).toEqual("direccion_poderdante");
    expect(current().indexInsideRepeat).toEqual("1");

    interview.next();

    expect(current().id).toEqual("poderdante");
    expect(current().indexInsideRepeat).toEqual("2");

    for (let i = 0; i < 7; i++) interview.next();

    expect(current().id).toEqual("poderdante");
    expect(current().indexInsideRepeat).toEqual("3");

    interview.previous();

    expect(current().id).toEqual("direccion_poderdante");
    expect(current().indexInsideRepeat).toEqual("2");

    for (let i = 0; i < 8; i++) interview.next();

    expect(current().id).toEqual("numero_apoderados");


  });

});

