export const generateRandomId = (): string => {
  return "id-" + (Math.random() + 1).toString(36).substring(7);
};
