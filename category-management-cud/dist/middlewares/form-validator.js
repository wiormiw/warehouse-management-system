import { formChecker } from "../utils/form-checker.js";
export function validateForm(req, res, next) {
    const result = formChecker(req.body);
    if (result) {
        return res.status(400).json({
            message: result.message,
            empty_field: result.emptyField,
            error: result.error
        });
    }
    next();
}
//# sourceMappingURL=form-validator.js.map