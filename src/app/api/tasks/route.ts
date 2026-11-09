import { NextResponse } from "next/server"

import { prisma } from "@/lib/prisma"

import z from "zod"


export async function GET() {
    try {
        const task = await prisma.tasks.findMany({
            where: {
                isActive: true
            },

            orderBy: {
                createAt: "desc"
            },

            select: {
                id: true,
                name: true,
                description: true,
                status: true,
                isActive: true,
                createAt: true
            }
        })

        return NextResponse.json({ task }, { status: 200 })

    } catch (error) {
        console.error("Error al consultar tareas", error);

        return NextResponse.json({ message: "Error al obtener tareas" }, { status: 500 })
    }
}

const createTaskSchema = z.object({
    name: z.string().trim().min(5).max(20),
    description: z.string().trim().min(10).max(100),
    // status: z.enum(["DONE", "TO_DO"])
})

export async function POST(request: Request) {
    try {
        const body: unknown = await request.json()
        const validation = createTaskSchema.safeParse(body)

        if (!validation.success) {
            return NextResponse.json({
                message: "Datos inválidos",
                errors: validation.error.flatten()
            },
                { status: 400 }
            )
        }

        const data = validation.data

        const task = await prisma.tasks.create({
            data: {
                name: data.name,
                description: data.description,
            }
        })

        return NextResponse.json({ task }, { status: 201 })

    } catch (error) {

        if (error instanceof SyntaxError){
            return NextResponse.json(
                { message: "El JSON enviado no es válido" },
                { status: 401 }
            )
        }

        console.error("Error al crear tarea:", error)

        return NextResponse.json(
            { message: "Error interno al crear tarea" },
            { status: 500 }
        )

    }
} 