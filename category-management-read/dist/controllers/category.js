import { createCategoryService, updateCategoryService, deleteCategoryService, getCategoryService } from "../services/category.js";
import { basicErrorHandler } from "../utils/error_handler.js";
export async function createCategory(req, res) {
    const { id, name } = req.body;
    try {
        const result = await createCategoryService(id, name);
        return res.status(200).json(result);
    }
    catch (error) {
        let errorWithHandler = basicErrorHandler(error);
        if (errorWithHandler) {
            return res.status(400).json({ message: errorWithHandler.message, error: errorWithHandler.error });
        }
    }
}
export async function getCategory(_req, res) {
    try {
        const result = await getCategoryService();
        return res.status(200).json(result);
    }
    catch (error) {
        let errorWithHandler = basicErrorHandler(error);
        if (errorWithHandler) {
            return res.status(400).json({ message: errorWithHandler.message, error: errorWithHandler.error });
        }
    }
}
export async function updateCategory(req, res) {
    const { id, name } = req.body;
    try {
        const result = await updateCategoryService(id, name);
        return res.status(200).json(result);
    }
    catch (error) {
        let errorWithHandler = basicErrorHandler(error);
        if (errorWithHandler) {
            return res.status(400).json({ message: errorWithHandler.message, error: errorWithHandler.error });
        }
    }
}
export async function deleteCategory(req, res) {
    const { id } = req.body;
    try {
        const result = await deleteCategoryService(id);
        return res.status(200).json(result);
    }
    catch (error) {
        let errorWithHandler = basicErrorHandler(error);
        if (errorWithHandler) {
            return res.status(400).json({ message: errorWithHandler.message, error: errorWithHandler.error });
        }
    }
}
//# sourceMappingURL=category.js.map