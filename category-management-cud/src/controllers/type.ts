import { Request, Response } from "express"
import { Type } from "../models/type.js"
import { createTypeService, updateTypeService, deleteTypeService, detailTypeService } from "../services/type.js"
import { basicErrorHandler } from "../utils/error-handler.js"
import amqp from 'amqplib'

let channel, connection

export async function connectToRabbitMQ() {
    const amqpServer = "amqp://guest:guest@localhost:5672";
    connection = await amqp.connect(amqpServer);
    channel = await connection.createChannel();
    await channel.assertQueue("type");
}

connectToRabbitMQ()

export async function createType(req: Request, res: Response): Promise<Response> {
    const { name, category_id } = req.body
    try {
        const result: Type = await createTypeService(name, category_id)
        if (result) {
            channel.sendToQueue(
                "type",
                Buffer.from(
                  JSON.stringify({
                    command: "create",
                    id: result.id,
                    name: result.name
                  })
                )
            )
            return res.status(201).json({
                message: "Success Created Type",
                result
            })
        }
    } catch (error) {
        let errorWithHandler = basicErrorHandler(error)
        if (errorWithHandler) {
            return res.status(400).json({message: errorWithHandler.message, error: errorWithHandler.error})
        }
    }
}

export async function createProduct(req: Request, res: Response): Promise<Response> {
    const { name, category_id } = req.body
    try {
        const result: Type = await createTypeService(name, category_id)
        if (result) {
            channel.sendToQueue(
                "type",
                Buffer.from(
                  JSON.stringify({
                    command: "create",
                    id: result.id,
                    name: result.name
                  })
                )
            )
            return res.status(201).json({
                message: "Success Created Type",
                result
            })
        }
    } catch (error) {
        let errorWithHandler = basicErrorHandler(error)
        if (errorWithHandler) {
            return res.status(400).json({message: errorWithHandler.message, error: errorWithHandler.error})
        }
    }
}

export async function detailType(req: Request, res: Response): Promise<Response> {
    const id = req.params.id
    try {
        const result: Type = await detailTypeService(id)
        return res.status(200).json(result)
    } catch (error) {
        let errorWithHandler = basicErrorHandler(error)
        if (errorWithHandler) {
            return res.status(400).json({message: errorWithHandler.message, error: errorWithHandler.error})
        }
    }
}

export async function updateType(req: Request, res: Response): Promise<Response> {
    const { name, category_id } = req.body
    const id = req.params.id
    try {
        const result: Type = await updateTypeService(id, name, category_id)
        if (result) {
            channel.sendToQueue(
                "type",
                Buffer.from(
                  JSON.stringify({
                    command: "update",
                    id: result.id,
                    name: result.name
                  })
                )
            )
            return res.status(201).json({
                message: "Success Updated Type",
                result
            })
        }
    } catch (error) {
        let errorWithHandler = basicErrorHandler(error)
        if (errorWithHandler) {
            return res.status(400).json({message: errorWithHandler.message, error: errorWithHandler.error})
        }
    }
}

export async function deleteType(req: Request, res: Response): Promise<Response> {
    const id = req.params.id
    try {
        const result: Type = await deleteTypeService(id)
        if (result) {
            channel.sendToQueue(
                "type",
                Buffer.from(
                  JSON.stringify({
                    command: "delete",
                    id: result.id,
                    name: result.name
                  })
                )
            )
            return res.status(201).json({
                message: "Success Deleted Type",
                result
            })
        }
    } catch (error) {
        let errorWithHandler = basicErrorHandler(error)
        if (errorWithHandler) {
            return res.status(400).json({message: errorWithHandler.message, error: errorWithHandler.error})
        }
    }
}