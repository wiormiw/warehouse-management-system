import elastic from '../config/database.js'
import { Product } from '../models/product.js'

export async function createProductService(id: string, name: string): Promise<Product> {
    return await elastic.index({
        index: "product",
        id: id,
        body: {
            "name": name,
        }
    })
}

export async function getProductService(): Promise<Product[]> {
    let data = await elastic.search({
        index: "product",
    })

    var newData: Product[] = [];

    for(let result of data.hits.hits){
        newData.push({id: result._id, name: result._source.name});
    }

    return newData
}

export async function updateProductService(id: string, name: string): Promise<Product> {
    return await elastic.update({
        index: "product",
        id: id,
        body: {
            doc: {
                "name": name
            }
        }
    })   
}

export async function deleteProductService(id: string): Promise<Product> {
    return await elastic.delete({
        index: "product",
        id: id
    })
}