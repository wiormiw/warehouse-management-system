import { json } from "body-parser"
import { Request, Response } from "express"
import { Category } from "../models/category.js"
import { createCategoryService, updateCategoryService, deleteCategoryService, getCategoryService } from "../services/category.js"
import { basicErrorHandler } from "../utils/error_handler.js"

export async function createCategory(req: Request, res: Response): Promise<Response> {
    const { id, name } = req.body
    try {
        const result: Category = await createCategoryService(id, name)
        return res.status(200).json(result)
    } catch (error) {
        let errorWithHandler = basicErrorHandler(error)
        if (errorWithHandler) {
            return res.status(400).json({message: errorWithHandler.message, error: errorWithHandler.error})
        }
    }
}

export async function getCategory(_req: Request, res: Response): Promise<Response> {
    try {
        const result = await getCategoryService()
        return res.status(200).json(result)
    } catch (error) {
        let errorWithHandler = basicErrorHandler(error)
        if (errorWithHandler) {
            return res.status(400).json({message: errorWithHandler.message, error: errorWithHandler.error})
        }
    }
}


export async function updateCategory(req: Request, res: Response): Promise<Response> {
    const { id, name } = req.body
    try {
        const result: Category = await updateCategoryService(id, name)
        return res.status(200).json(result)
    } catch (error) {
        let errorWithHandler = basicErrorHandler(error)
        if (errorWithHandler) {
            return res.status(400).json({message: errorWithHandler.message, error: errorWithHandler.error})
        }
    }
}

export async function deleteCategory(req: Request, res: Response): Promise<Response> {
    const { id } = req.body
    try {
        const result: Category = await deleteCategoryService(id)
        return res.status(200).json(result)
    } catch (error) {
        let errorWithHandler = basicErrorHandler(error)
        if (errorWithHandler) {
            return res.status(400).json({message: errorWithHandler.message, error: errorWithHandler.error})
        }
    }
}