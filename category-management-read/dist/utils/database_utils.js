import elastic from '../config/database.js';
export function indexExist(indexName) {
    let isIndexExist = false;
    const checkIndex = elastic.indices.exist({
        index: indexName,
    });
    if (checkIndex) {
        isIndexExist = true;
    }
    return isIndexExist;
}
//# sourceMappingURL=database_utils.js.map