"use client"

import { useState, useEffect, useCallback } from "react"

type Task = {
    id: string,
    name: string,
    description: string | null,
    status: "DONE" | "TO_DO",
    isActive: boolean
}

export function ListTask() {

    const [tasks, setTasks] = useState<Task[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    const loadTask = useCallback(async () => {
        setLoading(true),
        setError("")

        try {
            const response = await fetch("/api/tasks", {
                cache: "no-store"
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || "No es posible cargar las tareas.")
            }

            setTasks(data.task ?? [])

        } catch (err) {
            err instanceof Error ? err.message : "Ocurrió un error al cargar las tareas."
        } finally {
            setLoading(false)
        }
    }, [])


    useEffect(() => {
        void loadTask()
    }, [loadTask])

    return (
        <>
            {tasks.map((task) => (
                <ul className="mt-5 space-y-3">
                    {task.status === "TO_DO" ? 
                    
                    <li className="flex items-start gap-4 rounded-xl border border-slate-200 p-4">
                        <input
                            type="checkbox"
                            aria-label="Marcar Practicar Next.js como completada"
                            className="mt-1 size-5 accent-red-600"
                        />

                        <div className="min-w-0 flex-1">
                            <h3 className="font-semibold">{task.name}</h3>
                            <p className="mt-1 text-sm text-slate-500">
                                {task.description}
                            </p>
                        </div>

                        <button
                            type="button"
                            aria-label="Eliminar Practicar Next.js"
                            className="px-2 text-xl text-red-600 hover:text-red-800"
                        >
                            ×
                        </button>
                    </li>

                    :

                    <li className="flex items-start gap-4 rounded-xl border border-slate-200 p-4">
                        <input
                            type="checkbox"
                            aria-label="Marcar Practicar Next.js como completada"
                            className="mt-1 size-5 accent-red-600"
                        />

                        <div className="min-w-0 flex-1">
                            <h3 className="font-semibold">{task.name}</h3>
                            <p className="mt-1 text-sm text-slate-500">
                                {task.description}
                            </p>
                        </div>

                        <button
                            type="button"
                            aria-label="Eliminar Practicar Next.js"
                            className="px-2 text-xl text-red-600 hover:text-red-800"
                        >
                            ×
                        </button>
                    </li>
                    
                }
                </ul>
            ))}
        </>
    )
}