import { Interview } from './Interview.class'

import * as duplicatedIdParams1 from "@/test-data/duplicated-id-params-1.json";
import * as duplicatedIdParams2 from "@/test-data/duplicated-id-params-2.json";
import * as duplicatedIdParams3 from "@/test-data/duplicated-id-params-3.json";

import * as invalidFormatInIdNames1 from "@/test-data/invalid-format-in-id-names-1.json";

import * as happyPath from "@/test-data/happy-path.json";

describe("Interview.class", () => {
    describe("Create intance of Class", () => {

        test("Errors", () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const interviewInstanceWithUndefinedParamInit = () => { new Interview(undefined as any) };
            expect(interviewInstanceWithUndefinedParamInit).toThrow("Interview params are null or undefined");
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const interviewInstanceWithNullParamInit = () => { new Interview(null as any) };
            expect(interviewInstanceWithNullParamInit).toThrow("Interview params are null or undefined");

            const interviewInstanceWithDuplicatedIdsParams = () => { new Interview(duplicatedIdParams1) };
            expect(interviewInstanceWithDuplicatedIdsParams).toThrow("ID REPEATED: name");

            const interviewInstanceWithDuplicatedIdsParams2 = () => { new Interview(duplicatedIdParams2) };
            expect(interviewInstanceWithDuplicatedIdsParams2).toThrow("ID REPEATED: nombreRepresentantePersonaJuridica");

            const interviewInstanceWithDuplicatedIdsParams3 = () => { new Interview(duplicatedIdParams3) };
            expect(interviewInstanceWithDuplicatedIdsParams3).toThrow("ID REPEATED: nombreDelFamiliar");

            const interviewInstanceWithInvalidFormatInIdNames1 = () => { new Interview(invalidFormatInIdNames1) };
            expect(interviewInstanceWithInvalidFormatInIdNames1).toThrow("ID 'train-case' is not in camel case or snake case");
        })

        test.only("Happy path", () => {
            const interview = new Interview(happyPath)
        })

    });
});