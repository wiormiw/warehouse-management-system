import amqplib, { Channel, Connection } from 'amqplib'

let channel: Channel, connection: Connection


export async function connect() {
    try {
      const amqpServer = 'amqp://localhost:5672'
      connection = await amqplib.connect(amqpServer)
      channel = await connection.createChannel()
  
      channel.assertQueue('category', {
        durable: false
      });

      channel.assertQueue('type', {
        durable: false
      });

      channel.assertQueue('product', {
        durable: false
      });
    } catch (error) {
      console.log(error)
    }
}