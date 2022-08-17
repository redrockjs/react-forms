// export function cardNumberFormatter(oldValue, newValue) {
//   // user is deleting so return without formatting
//   if (oldValue.length > newValue.length) {
//     return newValue;
//   }
//   return newValue
//     .replace(/\W/gi, '')
//     .replace(/(.{4})/g, '$1 ')
//     .substring(0, 19);
// }

export function cardNumberFormatter(value) {
    if (value.length > 18) {
        return value.slice(0, 19);
    }
    if (value[value.length - 1] === "-") {
        return value.slice(0, -1);
    }
    const formatted = value
        .replace(/[^\d]/g, "")
        .replace(/\W/gi, "")
        .replace(/(.{4})/g, "$1-");

    if (formatted.length > 19) {
        return formatted.slice(0, 19);
    }

    return formatted;
}

export function expirationDateFormatter(oldValue, newValue) {
    // user is deleting so return without formatting
    if (oldValue.length > newValue.length) {
        return newValue;
    }
    return newValue
        .replace(/\W/gi, '')
        .replace(/(.{2})/g, '$1/')
        .substring(0, 5);
}