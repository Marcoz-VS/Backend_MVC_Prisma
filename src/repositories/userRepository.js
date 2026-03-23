import prisma from "../lib/prisma.js";

export async function findAll() {
    return prisma.user.findMany();
}

export async function findById(id) {
    return prisma.user.findUnique({
        where: { id }
    })
}

export async function create(data) {
    return prisma.user.create({
        data
    })
}

export async function update(id, data) {
    return prisma.user.update({
        where: { id },
        data
    })
}

export async function remove(id) {
    return prisma.user.delete({
        where: { id }
    })
}