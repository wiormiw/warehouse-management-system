import prisma from '../config/database.js';
export async function createProductService(name, categoryId, typeId, brand, series, technicalParameter) {
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
    });
}
export async function detailProductService(id) {
    return await prisma.product.findUnique({
        where: {
            id: id,
        },
    });
}
export async function updateProductService(id, name, categoryId, typeId, brand, series, technicalParameter) {
    const updatedAt = new Date();
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
    });
}
export async function deleteProductService(id) {
    return await prisma.product.delete({
        where: {
            id: id,
        },
    });
}
//# sourceMappingURL=product.js.map