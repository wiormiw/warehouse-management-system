// import amqp from "amqplib"
// import { config } from "../config/config.js";
export {};
// const CONFIG = config.rabbitMQ
// export function publisher(EXCHANGE, ROUTING, PAYLOAD, cb) {
//   try {
//     producer = amqp.connect(CONFIG.RBMQ.SERVER);
//     producer.then(function(conn) {
//       return conn.createConfirmChannel().then(function(ch) {
//         ch.assertExchange(EXCHANGE, 'topic', {
//           durable: true,
//           autoDelete: false
//         });
//           ch.publish(EXCHANGE, ROUTING, content = new Buffer(PAYLOAD), options = {contentType: "text/plain"}, function(err, ok) {
//               if (err != null) {
//                   console.error("Error: failed to send message\n" + err);
//                   cb(err);
//               } else {
//                 // console.log('<<OK topic>>', ok); // TODO: log!
//                 conn.close();
//                 cb(null);
//               }
//           });
//       });
//   }).then(null, function(err) {
//       console.error(err);
//       cb(err);
//   });
//   } catch (error) {
//     console.error('<<<<<< In try catch callback error => >>>>>> ', error);
//     cb(error);
//   }
// }
//# sourceMappingURL=producer.js.map