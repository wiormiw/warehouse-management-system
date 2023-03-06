import prisma from '../config/database.js'
import { Product } from '../models/product.js'

export async function createProductService(name: string, categoryId: string, typeId: string, brand: string, series: string, technicalParameter: string): Promise<Product> {
    return await prisma.product.create({
        data: {
            name: name,
            category: {
                connect: {
                    id: categoryId,
                }
            },
            type: {
                connect: {
                    id: typeId,
                }
            },
            brand: brand,
            series: series,
            technicalParameter: technicalParameter,
        },
    })
}

export async function detailProductService(id: string): Promise<Product> {
    return await prisma.product.findUnique({
        where: {
          id: id,
        },
    })
}

export async function updateProductService(id: string, name: string, categoryId: string, typeId: string, brand: string, series: string, technicalParameter: string): Promise<Product> {
    const updatedAt: Date = new Date()
    
    return await prisma.product.update({
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
          type: {
            connect: {
                id: typeId,
            },
          },
          brand: brand,
          series: series,
          technicalParameter: technicalParameter,
          updatedAt: updatedAt,
        },
    })
}

export async function deleteProductService(id: string): Promise<Product> {
    return await prisma.product.delete({
        where: {
          id: id,
        },
    })
}