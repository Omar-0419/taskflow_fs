import { ListTask } from "./components/ListTask";


export default function Home() {


  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Encabezado */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Task<span className="text-red-600">Flow</span>
          </h1>

          <p className="hidden text-sm text-slate-500 sm:block">
            Organiza tus tareas, cumple tus objetivos
          </p>
        </div>
      </header>

      {/* Contenido principal */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Mis tareas
          </h2>

          <p className="mt-2 text-slate-500">
            Gestiona tus tareas de forma simple y eficiente.
          </p>

          {/* Formulario visual: todavía no tiene lógica */}
          <form className="mt-7 rounded-xl border border-red-100">
            <div className="border-b border-red-100 bg-red-50 px-5 py-4">
              <h3 className="font-semibold">
                <span className="mr-2 text-red-600">＋</span>
                Agregar nueva tarea
              </h3>
            </div>

            <div className="space-y-5 p-5">
              <div>
                <label
                  htmlFor="task-name"
                  className="mb-2 block text-sm font-medium"
                >
                  Nombre de la tarea
                  <span className="ml-1 text-red-600">*</span>
                </label>

                <input
                  id="task-name"
                  name="name"
                  type="text"
                  placeholder="Ej. Estudiar Next.js"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />
              </div>

              <div>
                <label
                  htmlFor="task-description"
                  className="mb-2 block text-sm font-medium"
                >
                  Descripción
                  <span className="ml-1 text-slate-400">
                    (opcional)
                  </span>
                </label>

                <textarea
                  id="task-description"
                  name="description"
                  rows={3}
                  placeholder="¿Qué necesitas hacer?"
                  className="w-full resize-y rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
                />
              </div>

              <button
                type="button"
                className="rounded-lg bg-red-600 px-5 py-3 font-medium text-white transition hover:bg-red-700 cursor-pointer"
              >
                + Agregar tarea
              </button>
            </div>
          </form>

          {/* Filtros visuales */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white cursor-pointer"
            >
              Todas
            </button>

            <button
              type="button"
              className="rounded-full border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50 cursor-pointer"
            >
              Pendientes
            </button>

            <button
              type="button"
              className="rounded-full border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50 cursor-pointer"
            >
              Completadas
            </button>
          </div>

          {/* Tareas de ejemplo: luego vendrán de tu estado */}
          <ListTask/>
        </div>
      </section>
    </main>
  );
}
