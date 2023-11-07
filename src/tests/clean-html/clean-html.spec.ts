import { getCleanHtml } from '@/lib/services/templating.service'
const fs = require('fs');

const dataPath = './src/tests/clean-html/data'
const folders = fs.readdirSync(dataPath);

describe("Clean HTML", () => {
    folders.forEach((element: string) => {
        test(element, () => {
            const before = fs.readFileSync(`${dataPath}/${element}/before.html`, "utf8");
            const after = fs.readFileSync(`${dataPath}/${element}/after.html`, "utf8");
            const cleanHTML = getCleanHtml(before)
            expect(cleanHTML).toBe(after);
        }); 
    });

});
