import prisma from '../config/database.js'
import { Type } from '../models/type.js'

export async function createTypeService(name: string, categoryId: string): Promise<Type> {
    return await prisma.type.create({
        data: {
            name: name,
            category: {
                connect: {
                    id: categoryId,
                }
            }
        },
    })
}

export async function detailTypeService(id: string): Promise<Type> {
    return await prisma.type.findUnique({
        where: {
          id: id,
        },
    })
}

export async function updateTypeService(id: string, name: string, categoryId: string): Promise<Type> {
    const updatedAt: Date = new Date()

    return await prisma.type.update({
        where: {
          id: id,
        },
        data: {
          name: name,
          category: {
            connect: {
                id: categoryId,
            },
          },
          updatedAt: updatedAt,
        },
    })
}

export async function deleteTypeService(id: string): Promise<Type> {
    return await prisma.type.delete({
        where: {
          id: id,
        },
    })
}