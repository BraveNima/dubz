export const maxLengthFunc = (value: number) => {
  return {
    value,
    message: `The number of digits must not exceed ${value} digits.`,
  };
};
export const minLengthFunc = (value: number) => {
  return {
    value,
    message: `The number of digits must not be less than ${value} digits`,
  };
};
