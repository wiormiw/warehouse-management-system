import { Client } from '@elastic/elasticsearch';
import { config } from './config.js';
if (!global.elastic) {
    global.elastic = new Client({
        cloud: {
            id: config.elasticCloud,
        },
        auth: {
            username: config.elasticUsername,
            password: config.elasticPassword,
        },
    });
}
export default global.elastic;
//# sourceMappingURL=database.js.map