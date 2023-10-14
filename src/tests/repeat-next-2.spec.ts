import { GuidedInterview, Repeat } from "@/lib/GuidedInterview";
import * as poderEspecial from "@/data/forms/poder-especial.json";

describe("Repeat next when first question is a repeat question", () => {
  test("Navigate", () => {
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
});

