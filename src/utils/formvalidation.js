// папка утилс ->formvalidation
export const required = (value) => (value ? undefined : 'Required');
export const minLength = (min) => (value) =>
  value.length >= min ? undefined : `Length should be greater than ${min}`;
export const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export const minLoginLength = 3;
export const minPasswordLength = 3;
export const minTitleLength = 3;
export const minDescriptionLength = 5;
