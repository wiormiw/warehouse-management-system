import { Request, Response } from "express"
import { Type } from "../models/type.js"
import { createTypeService, updateTypeService, deleteTypeService, getTypeService } from "../services/type.js"
import { basicErrorHandler } from "../utils/error_handler.js"

export async function createType(req: Request, res: Response): Promise<Response> {
    const { id, name } = req.body
    try {
        const result: Type = await createTypeService(id, name)
        return res.status(200).json(result)
    } catch (error) {
        let errorWithHandler = basicErrorHandler(error)
        if (errorWithHandler) {
            return res.status(400).json({message: errorWithHandler.message, error: errorWithHandler.error})
        }
    }
}

export async function getType(_req: Request, res: Response): Promise<Response> {
    try {
        const result = await getTypeService()
        return res.status(200).json(result)
    } catch (error) {
        let errorWithHandler = basicErrorHandler(error)
        if (errorWithHandler) {
            return res.status(400).json({message: errorWithHandler.message, error: errorWithHandler.error})
        }
    }
}


export async function updateType(req: Request, res: Response): Promise<Response> {
    const { id, name } = req.body
    try {
        const result: Type = await updateTypeService(id, name)
        return res.status(200).json(result)
    } catch (error) {
        let errorWithHandler = basicErrorHandler(error)
        if (errorWithHandler) {
            return res.status(400).json({message: errorWithHandler.message, error: errorWithHandler.error})
        }
    }
}

export async function deleteType(req: Request, res: Response): Promise<Response> {
    const { id } = req.body
    try {
        const result: Type = await deleteTypeService(id)
        return res.status(200).json(result)
    } catch (error) {
        let errorWithHandler = basicErrorHandler(error)
        if (errorWithHandler) {
            return res.status(400).json({message: errorWithHandler.message, error: errorWithHandler.error})
        }
    }
}