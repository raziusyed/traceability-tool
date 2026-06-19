const metrics = [
  { label: 'Events Traced', value: '12.8k', tone: 'bg-emerald-100 text-emerald-800' },
  { label: 'Active Graphs', value: '24', tone: 'bg-sky-100 text-sky-800' },
  { label: 'Signals Queued', value: '318', tone: 'bg-amber-100 text-amber-800' },
]

function App() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-12">
        <nav className="mb-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-lg bg-emerald-400 text-lg font-black text-zinc-950">
              T
            </div>
            <span className="text-lg font-semibold tracking-wide">TraceGraph</span>
          </div>
          <a
            href="https://vite.dev"
            className="rounded-md border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-emerald-300 hover:text-emerald-200"
          >
            Vite Docs
          </a>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Vite + React + Tailwind
            </p>
            <h1 className="max-w-3xl text-5xl font-bold leading-tight text-white sm:text-6xl">
              A clean starting point for your next single-page app.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Edit <code className="rounded bg-zinc-800 px-2 py-1 text-emerald-200">src/App.jsx</code> and watch Vite refresh instantly.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://react.dev"
                className="rounded-md bg-emerald-400 px-5 py-3 font-semibold text-zinc-950 transition hover:bg-emerald-300"
              >
                React Docs
              </a>
              <a
                href="https://tailwindcss.com"
                className="rounded-md bg-zinc-800 px-5 py-3 font-semibold text-zinc-100 transition hover:bg-zinc-700"
              >
                Tailwind Docs
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-900/80 p-6 shadow-2xl shadow-black/30">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Project Pulse</h2>
              <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-sm font-medium text-emerald-200">
                Live
              </span>
            </div>
            <div className="grid gap-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="flex items-center justify-between rounded-md border border-zinc-800 bg-zinc-950 p-4"
                >
                  <span className="text-zinc-300">{metric.label}</span>
                  <span className={`rounded-md px-3 py-1 text-sm font-bold ${metric.tone}`}>
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
