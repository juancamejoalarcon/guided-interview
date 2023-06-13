import { GuidedInterview } from '@/lib/GuidedInterview'

const repeatedIdentifiers = {
  "name": {
      "id": "name",
      "type": "text",
      "title": "What is your name?",
      "value": "",
      "required": true
  },
  "age": {
      "id": "name",
      "type": "text",
      "title": "How old are you?",
      "logic": {
          "showIf": "name.value === 'Juan'"
      }
  },
}
describe("Constructor errors", () => {
  test("Interview init param is null", () => {
    const t = () => { new GuidedInterview(null) };
    expect(t).toThrow("Interview init param is null");
  });
  test("Repetead identifiers", () => {
    const t = () => { new GuidedInterview(repeatedIdentifiers) };
    expect(t).toThrow("Duplicated id values: " + repeatedIdentifiers.name.id);
  });
});
