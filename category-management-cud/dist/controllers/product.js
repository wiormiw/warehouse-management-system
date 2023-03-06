import { createProductService, updateProductService, deleteProductService, detailProductService } from "../services/product.js";
import { basicErrorHandler } from "../utils/error-handler.js";
import amqp from 'amqplib';
let channel, connection;
export async function connectToRabbitMQ() {
    const amqpServer = "amqp://guest:guest@localhost:5672";
    connection = await amqp.connect(amqpServer);
    channel = await connection.createChannel();
    await channel.assertQueue("product");
}
connectToRabbitMQ();
export async function createProduct(req, res) {
    const { name, category_id, type_id, brand, series, technical_parameter } = req.body;
    try {
        const result = await createProductService(name, category_id, type_id, brand, series, technical_parameter);
        if (result) {
            channel.sendToQueue("product", Buffer.from(JSON.stringify({
                command: "create",
                id: result.id,
                name: result.name
            })));
            return res.status(201).json({
                message: "Success Created Product",
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
export async function detailProduct(req, res) {
    const id = req.params.id;
    try {
        const result = await detailProductService(id);
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
    const { name, category_id, type_id, brand, series, technical_parameter } = req.body;
    const id = req.params.id;
    try {
        const result = await updateProductService(id, name, category_id, type_id, brand.toUpperCase(), series.toUpperCase(), technical_parameter.toUpperCase());
        if (result) {
            channel.sendToQueue("product", Buffer.from(JSON.stringify({
                command: "update",
                id: result.id,
                name: result.name
            })));
            return res.status(201).json({
                message: "Success Updated Product",
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
export async function deleteProduct(req, res) {
    const id = req.params.id;
    try {
        const result = await deleteProductService(id);
        if (result) {
            channel.sendToQueue("product", Buffer.from(JSON.stringify({
                command: "delete",
                id: result.id,
                name: result.name
            })));
            return res.status(201).json({
                message: "Success Deleted Product",
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
//# sourceMappingURL=product.js.map