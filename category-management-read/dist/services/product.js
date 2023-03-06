import elastic from '../config/database.js';
export async function createProductService(id, name) {
    return await elastic.index({
        index: "product",
        id: id,
        body: {
            "name": name,
        }
    });
}
export async function getProductService() {
    let data = await elastic.search({
        index: "product",
    });
    var newData = [];
    for (let result of data.hits.hits) {
        newData.push({ id: result._id, name: result._source.name });
    }
    return newData;
}
export async function updateProductService(id, name) {
    return await elastic.update({
        index: "product",
        id: id,
        body: {
            doc: {
                "name": name
            }
        }
    });
}
export async function deleteProductService(id) {
    return await elastic.delete({
        index: "product",
        id: id
    });
}
//# sourceMappingURL=product.js.map