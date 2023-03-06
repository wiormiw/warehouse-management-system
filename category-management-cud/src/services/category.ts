import prisma from '../config/database.js'
import { Category } from '../models/category.js'

export async function createCategoryService(name: string): Promise<Category> {
    let data = await prisma.category.create({
        data: {
            name,
        },
    })

    console.log(data)

    return data
}

export async function detailCategoryService(id: string): Promise<Category> {
    return await prisma.category.findUnique({
        where: {
          id: id,
        },
    })
}

export async function updateCategoryService(id: string, name: string): Promise<Category> {
    const updatedAt: Date = new Date()
    
    return await prisma.category.update({
        where: {
          id: id,
        },
        data: {
          name: name,
          updatedAt: updatedAt,
        },
    })
}

export async function deleteCategoryService(id: string): Promise<Category> {
    return await prisma.category.delete({
        where: {
          id: id,
        },
    })
}