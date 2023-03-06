import prisma from '../config/database.js';
export async function createCategoryService(name) {
    let data = await prisma.category.create({
        data: {
            name,
        },
    });
    console.log(data);
    return data;
}
export async function detailCategoryService(id) {
    return await prisma.category.findUnique({
        where: {
            id: id,
        },
    });
}
export async function updateCategoryService(id, name) {
    const updatedAt = new Date();
    return await prisma.category.update({
        where: {
            id: id,
        },
        data: {
            name: name,
            updatedAt: updatedAt,
        },
    });
}
export async function deleteCategoryService(id) {
    return await prisma.category.delete({
        where: {
            id: id,
        },
    });
}
//# sourceMappingURL=category.js.map