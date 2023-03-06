export function formChecker(req, type) {
    let emptyField;
    const messageString = "One or more required input is empty!";
    if (!req.body) {
        return ({ message: "Form is empty! Please Check All Your Data First!" });
    }
    if (!Object.keys(req.body.category_id).length) {
        emptyField.push("Category Name");
    }
    if (!Object.keys(req.body.type_id).length) {
        emptyField.push("Type Name");
    }
    if (req.body.brand === "") {
        emptyField.push("Brand");
    }
    if (req.body.series === "") {
        emptyField.push("Series");
    }
    if (req.body.technical_parameter === "") {
        emptyField.push("Technical Parameter");
    }
    switch (type) {
        case "category":
            if (req.body.name === "") {
                emptyField.push("Category Name");
            }
            break;
        case "type":
            if (req.body.name === "") {
                emptyField.push("Type Name");
            }
            break;
        case "product":
            if (req.body.name === "") {
                emptyField.push("Product Name");
            }
            break;
    }
    if (emptyField) {
        return {
            message: messageString,
            emptyField: emptyField
        };
    }
}
//# sourceMappingURL=form-validator.js.map