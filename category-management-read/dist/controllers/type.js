import { createTypeService, updateTypeService, deleteTypeService, getTypeService } from "../services/type.js";
import { basicErrorHandler } from "../utils/error_handler.js";
export async function createType(req, res) {
    const { id, name } = req.body;
    try {
        const result = await createTypeService(id, name);
        return res.status(200).json(result);
    }
    catch (error) {
        let errorWithHandler = basicErrorHandler(error);
        if (errorWithHandler) {
            return res.status(400).json({ message: errorWithHandler.message, error: errorWithHandler.error });
        }
    }
}
export async function getType(_req, res) {
    try {
        const result = await getTypeService();
        return res.status(200).json(result);
    }
    catch (error) {
        let errorWithHandler = basicErrorHandler(error);
        if (errorWithHandler) {
            return res.status(400).json({ message: errorWithHandler.message, error: errorWithHandler.error });
        }
    }
}
export async function updateType(req, res) {
    const { id, name } = req.body;
    try {
        const result = await updateTypeService(id, name);
        return res.status(200).json(result);
    }
    catch (error) {
        let errorWithHandler = basicErrorHandler(error);
        if (errorWithHandler) {
            return res.status(400).json({ message: errorWithHandler.message, error: errorWithHandler.error });
        }
    }
}
export async function deleteType(req, res) {
    const { id } = req.body;
    try {
        const result = await deleteTypeService(id);
        return res.status(200).json(result);
    }
    catch (error) {
        let errorWithHandler = basicErrorHandler(error);
        if (errorWithHandler) {
            return res.status(400).json({ message: errorWithHandler.message, error: errorWithHandler.error });
        }
    }
}
//# sourceMappingURL=type.js.map