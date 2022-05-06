export const capitalizeStrings = (str) => `${str[0].toUpperCase()}${str.slice(1)}`;

export const roundWithTwoDecimals = (number) => `${((Math.round(number * 100))/100).toFixed(2)}`