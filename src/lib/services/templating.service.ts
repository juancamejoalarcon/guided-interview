import * as nunjucks from "nunjucks";

export const makeTemplate = (interviewData: any, template: string, options: { cleanHtml: boolean} = { cleanHtml: false }) => {
  const data = transformInterviewData(interviewData);
  nunjucks.configure({ autoescape: true });
  let stringToRender = template
  if (options?.cleanHtml) {
    stringToRender = getCleanHtml(template)
  }
  const result = nunjucks.renderString(template, data)
  return result;
};

const transformInterviewData = (interviewData: any) => {
  const transformedData: any = {};
  Object.entries(interviewData).forEach(([key, value]) => {
    if (isOfTypeRepeat(value)) {
      const content = Object.values((value as any).content)
      transformedData[key] = content
        .filter((item: any) => !item?.hidden)
        .map((item: any) => transformInterviewData(item.questions));
      return;
    }

    if (isOfTypeMultiSelect(value)) {
      transformedData[key] = (value as any).values;
      return
    }

    transformedData[key] = (value as any).value;
  });
  return transformedData;
}

const isOfTypeRepeat = (value: any) => {
  return Boolean(value.content);
}

const isOfTypeMultiSelect = (value: any) => {
  return Boolean(value.values);
}

export const getCleanHtml = (text: string) => {

  const removeMarks = (text: string): string => {
    let cleanText = text.replace(/<mark(.*?)>/gm, "")
    cleanText = cleanText.replace(/<\/mark>/gm, "")
    return cleanText
  }

  const removeParagraphConditions = (text: string): string => {
    let cleanText = text.replace(/<p class="paragraph-condition"[^>]*>({%[\s\S]*?%})\s*?<\/p>/gm, "$1")
    cleanText = cleanText.replace(/<(?:p|div)[^>]*>({% (?:if|elseif|else)(?:[^%}]|\n)*? %})[\s]*?<\/(?:p|div)>/gm, "$1")
    cleanText = cleanText.replace(/<(?:p|div)[^>]*>({% (?:endif|endfor) %})[^<]*<\/(?:p|div)>/gm, "$1")
    cleanText = cleanText.replace(/<(?:p|div)[^>]*>({% for[\s\S]*?%})[^<]*<\/(?:p|div)>/gm, "$1")
    // cleanText = cleanText.replace(/<p><mark>({% for[\s\S]*?%})<\/mark><\/p>/gm, "$1")
    // cleanText = cleanText.replace(/<div><mark>{% if \((.*?)\) %}<\/mark><\/div>/gm, "$1")
    // cleanText = cleanText.replace(/<div>{% elseif \((.*?)\) %}<\/mark><\/div>/gm, "$1")
    return cleanText
  }

  const removeDirtInsideLogic = (text: string): string => {
    // replace whitespaces &nbsp; with ' '
    let cleanText = text.replace(/(?<={%.*?)(&nbsp;)(?=.*?%})/gm, " ")
    // replace comparison &gt; with '>'
    cleanText = cleanText.replace(/(?<={%.*?)(&gt;)(?=.*?%})/gm, ">")
    // replace comparison &lt; with '<'
    cleanText = cleanText.replace(/(?<={%.*?)(&lt;)(?=.*?%})/gm, "<")
    return cleanText
  }

  let clean = removeMarks(text)
  clean = removeParagraphConditions(clean)
  clean = removeDirtInsideLogic(clean)
  return clean

}
