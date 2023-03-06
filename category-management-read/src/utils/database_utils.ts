import elastic from '../config/database.js'

export function indexExist(indexName: string): boolean {
    let isIndexExist: boolean = false
    
    const checkIndex = elastic.indices.exist({
        index: indexName,
    })

    if (checkIndex) {
        isIndexExist = true
    }

    return isIndexExist
}