import prisma from '../config/database.js';
export async function createTypeService(name, categoryId) {
    return await prisma.type.create({
        data: {
            name: name,
            category: {
                connect: {
                    id: categoryId,
                }
            }
        },
    });
}
export async function detailTypeService(id) {
    return await prisma.type.findUnique({
        where: {
            id: id,
        },
    });
}
export async function updateTypeService(id, name, categoryId) {
    const updatedAt = new Date();
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
    });
}
export async function deleteTypeService(id) {
    return await prisma.type.delete({
        where: {
            id: id,
        },
    });
}
//# sourceMappingURL=type.js.map