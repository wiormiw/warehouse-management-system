import { createCategoryService, updateCategoryService, deleteCategoryService, detailCategoryService } from "../services/category.js";
import { basicErrorHandler } from "../utils/error-handler.js";
import amqp from 'amqplib';
let channel, connection;
export async function connectToRabbitMQ() {
    const amqpServer = "amqp://guest:guest@localhost:5672";
    connection = await amqp.connect(amqpServer);
    channel = await connection.createChannel();
    await channel.assertQueue("category");
}
connectToRabbitMQ();
export async function createCategory(req, res) {
    const { name } = req.body;
    try {
        const result = await createCategoryService(name);
        if (result) {
            channel.sendToQueue("category", Buffer.from(JSON.stringify({
                command: "create",
                id: result.id,
                name: result.name
            })));
            return res.status(201).json({
                message: "Success Created Category",
                result
            });
        }
    }
    catch (error) {
        let errorWithHandler = basicErrorHandler(error);
        if (errorWithHandler) {
            return res.status(400).json({ message: errorWithHandler.message, error: errorWithHandler.error });
        }
    }
}
export async function detailCategory(req, res) {
    const id = req.params.id;
    try {
        const result = await detailCategoryService(id);
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
    const { name } = req.body;
    const id = req.params.id;
    try {
        const result = await updateCategoryService(id, name);
        if (result) {
            channel.sendToQueue("category", Buffer.from(JSON.stringify({
                command: "update",
                id: result.id,
                name: result.name
            })));
            return res.status(201).json({
                message: "Success Update Category",
                result
            });
        }
    }
    catch (error) {
        let errorWithHandler = basicErrorHandler(error);
        if (errorWithHandler) {
            return res.status(400).json({ message: errorWithHandler.message, error: errorWithHandler.error });
        }
    }
}
export async function deleteCategory(req, res) {
    const id = req.params.id;
    try {
        const result = await deleteCategoryService(id);
        if (result) {
            channel.sendToQueue("category", Buffer.from(JSON.stringify({
                command: "delete",
                id: result.id,
                name: result.name
            })));
            return res.status(201).json({
                message: "Success Delete Category",
                result
            });
        }
    }
    catch (error) {
        let errorWithHandler = basicErrorHandler(error);
        if (errorWithHandler) {
            return res.status(400).json({ message: errorWithHandler.message, error: errorWithHandler.error });
        }
    }
}
//# sourceMappingURL=category.js.map