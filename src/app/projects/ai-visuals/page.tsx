import Image from "next/image";

const storyboards = [
  {
    title: "A Taste of Tradition",
    version: "Approved storyboard · V6",
    file: "storyboard-a-taste-of-tradition-v6.png",
    width: 3200,
    height: 2470,
    description:
      "Ube is passed down through generations as a tradition of family and memories.",
  },
  {
    title: "From Imagination to Obsession",
    version: "Approved storyboard · V2",
    file: "storyboard-from-imagination-to-obsession-v2.png",
    width: 3000,
    height: 2900,
    description:
      "An idea moves from imagination into a real product customers can see and enjoy.",
  },
  {
    title: "A Flavor for Every Personality",
    version: "Approved storyboard · V2",
    file: "storyboard-a-flavor-for-every-personality-v2.png",
    width: 3000,
    height: 2780,
    description:
      "A playful flavor campaign gives each creation its own personality.",
  },
  {
    title: "A Little Joy in Every Spoonful",
    version: "Approved storyboard · V3",
    file: "selected-frames-contact-sheet-v3.png",
    width: 1250,
    height: 1114,
    description:
      "A spoonful of ice cream turns a child’s sad moment into playful joy.",
  },
  {
    title: "For the Woman Who Was Always There",
    version: "Approved storyboard · V2",
    file: "for-every-mother-storyboard-v2.png",
    width: 729,
    height: 2157,
    description:
      "A message first read as rejection reveals love and appreciation for mothers.",
  },
];

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
          I use a brief-led process to develop visual concepts for products, advertising, and storytelling. Selected concepts can then move into finished creative pieces, such as campaign videos.
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
            <p>Storyboards map the narrative first. Visual direction then guides prompt development, and generated options are reviewed against the original idea before a final selection is made.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Creative approach</p>
        <h2 className="mt-4 text-3xl font-semibold">A repeatable path from brief to selected visual</h2>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {["Define the idea", "Storyboard the narrative", "Set visual direction", "Generate visual options", "Select and refine"].map((step, index) => (
            <li key={step} className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
              <span className="text-sm text-zinc-600">0{index + 1}</span>
              <p className="mt-5 font-medium text-zinc-200">{step}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 max-w-3xl text-sm leading-6 text-zinc-500">The process connects each visual choice to the original brief and intended audience.</p>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Selected storyboards</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold">Plan the story before producing the visuals.</h2>
          <p className="mt-4 max-w-3xl leading-7 text-zinc-400">
            These approved storyboards establish each campaign’s narrative and key moments. Visual development follows the plan, then continues into video production and finished content.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {storyboards.map((storyboard) => (
              <figure key={storyboard.file} className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
                <div className="bg-black">
                  <Image
                    src={`/storyboards/${storyboard.file}`}
                    alt={`${storyboard.title} ${storyboard.version.toLowerCase()}`}
                    width={storyboard.width}
                    height={storyboard.height}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="border-t border-white/10 px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">{storyboard.version}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{storyboard.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{storyboard.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">My role</p>
            <h2 className="mt-4 text-3xl font-semibold">Concept, direction, and refinement</h2>
          </div>
          <div className="space-y-5 leading-7 text-zinc-400">
            <p>Depending on the project, I can work from client-provided photos or video footage, AI-generated visuals, or a combination of both. For live client footage, I can edit the material in CapCut and shape it into finished content; I can also create AI-assisted visuals and incorporate them into a creative piece.</p>
            <p>My role can include shaping the concept, editing the selected footage or visuals, and assembling the final content to fit the project brief.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Daniel John Agustin</span>
          <a href="/projects/ai-video-creation" className="transition hover:text-white">Continue to video production and finished content →</a>
        </div>
      </footer>
    </main>
  );
}
