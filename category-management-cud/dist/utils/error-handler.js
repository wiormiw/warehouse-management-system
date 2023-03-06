export function basicErrorHandler(error) {
    let message;
    if (!error.message) {
        message = "Couldn't determine the error";
    }
    message = error.message;
    const data = {
        message: message,
        error: error
    };
    return data;
}
//# sourceMappingURL=error-handler.js.map