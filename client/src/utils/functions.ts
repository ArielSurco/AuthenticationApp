type ClassNameValue = string | boolean | undefined | null;

export const concatClassnames = (...classNames: ClassNameValue[]) => classNames.filter((cn) => !!cn).join(' ');
