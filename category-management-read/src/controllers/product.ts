import { Request, Response } from "express"
import { Product } from "../models/product.js"
import { createProductService, updateProductService, deleteProductService, getProductService } from "../services/product.js"
import { basicErrorHandler } from "../utils/error_handler.js"

export async function createProduct(req: Request, res: Response): Promise<Response> {
    const { id, name } = req.body
    try {
        const result: Product = await createProductService(id, name)
        return res.status(200).json(result)
    } catch (error) {
        let errorWithHandler = basicErrorHandler(error)
        if (errorWithHandler) {
            return res.status(400).json({message: errorWithHandler.message, error: errorWithHandler.error})
        }
    }
}

export async function getProduct(_req: Request, res: Response): Promise<Response> {
    try {
        const result = await getProductService()
        return res.status(200).json(result)
    } catch (error) {
        let errorWithHandler = basicErrorHandler(error)
        if (errorWithHandler) {
            return res.status(400).json({message: errorWithHandler.message, error: errorWithHandler.error})
        }
    }
}


export async function updateProduct(req: Request, res: Response): Promise<Response> {
    const { id, name } = req.body
    try {
        const result: Product = await updateProductService(id, name)
        return res.status(200).json(result)
    } catch (error) {
        let errorWithHandler = basicErrorHandler(error)
        if (errorWithHandler) {
            return res.status(400).json({message: errorWithHandler.message, error: errorWithHandler.error})
        }
    }
}

export async function deleteProduct(req: Request, res: Response): Promise<Response> {
    const { id } = req.body
    try {
        const result: Product = await deleteProductService(id)
        return res.status(200).json(result)
    } catch (error) {
        let errorWithHandler = basicErrorHandler(error)
        if (errorWithHandler) {
            return res.status(400).json({message: errorWithHandler.message, error: errorWithHandler.error})
        }
    }
}