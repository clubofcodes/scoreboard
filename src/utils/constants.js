export const COLORS = {
    mainBg: '#363942',
    text: 'black',
    borderColor: 'red',
    primary: 'rebeccapurple',
};

/**
 * to verify the argument value/string is true-boolean, null, undefined, empty or length is 0 then true else false.
 * @param {any} checkValue variable is argument of various types passed into isEmpty function.
 * @returns boolean value.
 */
export const isEmpty = (checkValue) => {
    if (checkValue === false) return !checkValue;
    if (checkValue === true) return !checkValue;
    return (checkValue === null ||
        checkValue === "undefined" ||
        checkValue === "null" ||
        checkValue === undefined ||
        checkValue === "" ||
        checkValue.length === 0 ||
        Object.keys(checkValue).length === 0)
};