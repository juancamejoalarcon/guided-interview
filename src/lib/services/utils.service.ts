import Str from '@supercharge/strings'

export const isCamelCase = (str: string): boolean => {
    return Str(str).isCamel()
}
  
export const isSnakeCase = (str: string): boolean => {
    const snakeCaseRegex = /^([a-z0-9]{1,})(_[a-z0-9]{1,})*$/;
    return snakeCaseRegex.test(str);
}