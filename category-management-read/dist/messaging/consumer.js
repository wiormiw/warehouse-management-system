import amqp from 'amqplib';
import { createCategoryService, deleteCategoryService, updateCategoryService } from '../services/category.js';
import { createProductService, deleteProductService, updateProductService } from '../services/product.js';
import { createTypeService, deleteTypeService, updateTypeService } from '../services/type.js';
let channel, connection;
export async function connectQueueCategoryManagement() {
    try {
        connection = await amqp.connect("amqp://localhost:5672");
        channel = await connection.createChannel();
        await channel.assertQueue("category");
        await channel.assertQueue("type");
        await channel.assertQueue("product");
        channel.consume("category", data => {
            const newData = JSON.parse(data.content);
            channel.ack(data);
            switch (newData.command) {
                case "create":
                    createCategoryService(newData.id, newData.name);
                    break;
                case "update":
                    updateCategoryService(newData.id, newData.name);
                    break;
                case "delete":
                    deleteCategoryService(newData.id);
                    break;
                default:
                    break;
            }
        });
        channel.consume("type", data => {
            const newData = JSON.parse(data.content);
            channel.ack(data);
            switch (newData.command) {
                case "create":
                    createTypeService(newData.id, newData.name);
                    break;
                case "update":
                    updateTypeService(newData.id, newData.name);
                    break;
                case "delete":
                    deleteTypeService(newData.id);
                    break;
                default:
                    break;
            }
        });
        channel.consume("product", data => {
            const newData = JSON.parse(data.content);
            channel.ack(data);
            switch (newData.command) {
                case "create":
                    createProductService(newData.id, newData.name);
                    break;
                case "update":
                    updateProductService(newData.id, newData.name);
                    break;
                case "delete":
                    deleteProductService(newData.id);
                    break;
                default:
                    break;
            }
        });
    }
    catch (error) {
        console.log(error);
    }
}
//# sourceMappingURL=consumer.js.map