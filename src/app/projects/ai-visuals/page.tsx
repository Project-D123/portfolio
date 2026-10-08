export default function AIVisuals() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="text-xl font-bold tracking-tight">DJA.</a>
          <a href="/#work" className="text-sm text-zinc-400 transition hover:text-white">← Back to Work</a>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-16">
        <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">Project · AI visuals</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">AI-assisted visual concept development.</h1>
        <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-300">
          I use a brief-led process to develop visual concepts for products, advertising, and storytelling. This page outlines the creative approach; selected original image samples will be added here.
        </p>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Problem / intent</p>
            <h2 className="mt-4 text-3xl font-semibold">Start with the idea the image needs to communicate.</h2>
          </div>
          <div className="space-y-5 leading-7 text-zinc-400">
            <p>A useful visual starts with what the viewer should understand, feel, or notice. The brief sets the purpose before image generation begins.</p>
            <p>Visual direction guides prompt development, and generated options are reviewed against the original idea before a final selection is made.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Creative approach</p>
        <h2 className="mt-4 text-3xl font-semibold">A repeatable path from brief to selected visual</h2>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {["Define the idea", "Set visual direction", "Write the prompt", "Generate options", "Select and refine"].map((step, index) => (
            <li key={step} className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
              <span className="text-sm text-zinc-600">0{index + 1}</span>
              <p className="mt-5 font-medium text-zinc-200">{step}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 max-w-3xl text-sm leading-6 text-zinc-500">The process connects each visual choice to the original brief and intended audience.</p>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">My role</p>
            <h2 className="mt-4 text-3xl font-semibold">Concept, direction, and refinement</h2>
          </div>
          <div className="space-y-5 leading-7 text-zinc-400">
            <p>My role is to develop the concept, set visual direction, write and refine prompts, and select images that fit the intended idea.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Daniel John Agustin</span>
          <a href="/projects/ai-process-improvement" className="transition hover:text-white">Next: Process Improvement →</a>
        </div>
      </footer>
    </main>
  );
}
