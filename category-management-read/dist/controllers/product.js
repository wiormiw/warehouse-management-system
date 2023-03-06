import { createProductService, updateProductService, deleteProductService, getProductService } from "../services/product.js";
import { basicErrorHandler } from "../utils/error_handler.js";
export async function createProduct(req, res) {
    const { id, name } = req.body;
    try {
        const result = await createProductService(id, name);
        return res.status(200).json(result);
    }
    catch (error) {
        let errorWithHandler = basicErrorHandler(error);
        if (errorWithHandler) {
            return res.status(400).json({ message: errorWithHandler.message, error: errorWithHandler.error });
        }
    }
}
export async function getProduct(_req, res) {
    try {
        const result = await getProductService();
        return res.status(200).json(result);
    }
    catch (error) {
        let errorWithHandler = basicErrorHandler(error);
        if (errorWithHandler) {
            return res.status(400).json({ message: errorWithHandler.message, error: errorWithHandler.error });
        }
    }
}
export async function updateProduct(req, res) {
    const { id, name } = req.body;
    try {
        const result = await updateProductService(id, name);
        return res.status(200).json(result);
    }
    catch (error) {
        let errorWithHandler = basicErrorHandler(error);
        if (errorWithHandler) {
            return res.status(400).json({ message: errorWithHandler.message, error: errorWithHandler.error });
        }
    }
}
export async function deleteProduct(req, res) {
    const { id } = req.body;
    try {
        const result = await deleteProductService(id);
        return res.status(200).json(result);
    }
    catch (error) {
        let errorWithHandler = basicErrorHandler(error);
        if (errorWithHandler) {
            return res.status(400).json({ message: errorWithHandler.message, error: errorWithHandler.error });
        }
    }
}
//# sourceMappingURL=product.js.map