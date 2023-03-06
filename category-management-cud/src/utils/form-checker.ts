export function formChecker(data: any) {
    let emptyField: string[] = []
    let isEmptyField = false
    const messageString: string = "One or more required input is empty!"
    if (!data) {
        isEmptyField = true
        emptyField.push("All Form Empty")
        return ({ message: "Form is empty! Please Check All Your Data First!", empty_field: emptyField, error: "Fill Required Data!" })
    }
    if (data.name === "") {
        isEmptyField = true
        emptyField.push("Name Field")
    }
    if (data.brand === "") {
        isEmptyField = true
        emptyField.push("Brand")
    }
    if (data.series === "") {
        isEmptyField = true
        emptyField.push("Series")
    }
    if (data.technical_parameter === "") {
        isEmptyField = true
        emptyField.push("Technical Parameter")
    }
    if (!isEmptyField) {
        return 0
    }
    return {
        message: messageString,
        emptyField: emptyField,
        error: "Fill Required Data!"
    }
}