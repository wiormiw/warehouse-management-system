import elastic from '../config/database.js';
export async function createCategoryService(id, name) {
    return await elastic.index({
        index: "category",
        id: id,
        body: {
            "name": name,
        }
    });
}
export async function getCategoryService() {
    let data = await elastic.search({
        index: "category",
    });
    var newData = [];
    for (let result of data.hits.hits) {
        newData.push({ id: result._id, name: result._source.name });
    }
    return newData;
}
export async function updateCategoryService(id, name) {
    return await elastic.update({
        index: "category",
        id: id,
        body: {
            doc: {
                "name": name
            }
        }
    });
}
export async function deleteCategoryService(id) {
    return await elastic.delete({
        index: "category",
        id: id
    });
}
//# sourceMappingURL=category.js.map