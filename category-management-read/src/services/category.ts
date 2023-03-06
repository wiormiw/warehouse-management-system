import elastic from '../config/database.js'
import { Category } from '../models/category.js'

export async function createCategoryService(id: string, name: string): Promise<Category> {
    return await elastic.index({
        index: "category",
        id: id,
        body: {
            "name": name,
        }
    })
}

export async function getCategoryService(): Promise<Category[]> {
    let data = await elastic.search({
        index: "category",
    })

    var newData: Category[] = [];

    for(let result of data.hits.hits){
        newData.push({id: result._id, name: result._source.name});
    }

    return newData
}

export async function updateCategoryService(id: string, name: string): Promise<Category> {
    return await elastic.update({
        index: "category",
        id: id,
        body: {
            doc: {
                "name": name
            }
        }
    })   
}

export async function deleteCategoryService(id: string): Promise<Category> {
    return await elastic.delete({
        index: "category",
        id: id
    })
}