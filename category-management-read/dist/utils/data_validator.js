export function dataCapitalize(input) {
    if (input !== input.charAt(0).toUpperCase()) {
        input = input.charAt(0).toUpperCase();
    }
    else if (input === input.toUpperCase()) {
        input.substring(1, (input.length) - 1).toLowerCase();
    }
    return input;
}
//# sourceMappingURL=data_validator.js.map