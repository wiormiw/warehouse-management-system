import elastic from '../config/database.js'
import { Type } from '../models/type.js'

export async function createTypeService(id: string, name: string): Promise<Type> {
    return await elastic.index({
        index: "type",
        id: id,
        body: {
            "name": name,
        }
    })
}

export async function getTypeService(): Promise<Type[]> {
    let data = await elastic.search({
        index: "type",
    })

    var newData: Type[] = [];

    for(let result of data.hits.hits){
        newData.push({id: result._id, name: result._source.name, category_id: result._source.category_id, category_name: result._source.category_name});
    }

    return newData
}

export async function updateTypeService(id: string, name: string): Promise<Type> {
    return await elastic.update({
        index: "type",
        id: id,
        body: {
            doc: {
                "name": name
            }
        }
    })   
}

export async function deleteTypeService(id: string): Promise<Type> {
    return await elastic.delete({
        index: "type",
        id: id
    })
}