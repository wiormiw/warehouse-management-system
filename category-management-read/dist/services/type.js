import elastic from '../config/database.js';
export async function createTypeService(id, name) {
    return await elastic.index({
        index: "type",
        id: id,
        body: {
            "name": name,
        }
    });
}
export async function getTypeService() {
    let data = await elastic.search({
        index: "type",
    });
    var newData = [];
    for (let result of data.hits.hits) {
        newData.push({ id: result._id, name: result._source.name, category_id: result._source.category_id, category_name: result._source.category_name });
    }
    return newData;
}
export async function updateTypeService(id, name) {
    return await elastic.update({
        index: "type",
        id: id,
        body: {
            doc: {
                "name": name
            }
        }
    });
}
export async function deleteTypeService(id) {
    return await elastic.delete({
        index: "type",
        id: id
    });
}
//# sourceMappingURL=type.js.map