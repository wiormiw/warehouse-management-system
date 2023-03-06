import amqplib from 'amqplib';
let channel, connection;
export async function connect() {
    try {
        const amqpServer = 'amqp://localhost:5672';
        connection = await amqplib.connect(amqpServer);
        channel = await connection.createChannel();
        channel.assertQueue('category', {
            durable: false
        });
        channel.assertQueue('type', {
            durable: false
        });
        channel.assertQueue('product', {
            durable: false
        });
    }
    catch (error) {
        console.log(error);
    }
}
//# sourceMappingURL=message_broker.js.map