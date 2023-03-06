export function responseFormatter(statusCode, message, error, data, metadata) {
    let res;
    if (statusCode < 400) {
        return res.status(statusCode).json({
            "status_code": statusCode,
            "message": message,
            "error": null,
            "data": data,
            "metadata": metadata,
        });
    }
    return res.status(statusCode).json({
        "status_code": statusCode,
        "message": message,
        "error": error,
        "data": null,
        "metadata": null,
    });
}
//# sourceMappingURL=response_formatter.js.map