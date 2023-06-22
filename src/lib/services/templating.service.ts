import nunjucks from "nunjucks";

export const makeTemplate = (interviewData: any, template: string) => {
  const data = transformInterviewData(interviewData);
  nunjucks.configure({ autoescape: true });
  const result = nunjucks.renderString(template, data)
  return result;
};

const transformInterviewData = (interviewData: any) => {
  const transformedData: any = {};
  Object.entries(interviewData).forEach(([key, value]) => {
    if (isOfTypeRepeat(value)) {
      const content = Object.values((value as any).content)
      transformedData[key] = content.map((item: any) => {
        if (!item.hidden) return transformInterviewData(item.questions);
      });
      return;
    }
    transformedData[key] = (value as any).value;
  });
  return transformedData;
}

const isOfTypeRepeat = (value: any) => {
  return Boolean(value.content);
}
