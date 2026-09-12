export default function AIVisuals() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="text-xl font-bold tracking-tight">
            DJA.
          </a>

          <a
            href="/#work"
            className="text-sm text-white/60 transition hover:text-white"
          >
            ← Back to Work
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-20">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-white/40">
          AI Creative • Visuals
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
          AI Visuals
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
          Exploring AI-generated imagery for product concepts, advertising,
          storytelling, branding, and creative visual experimentation.
        </p>

        {/* Featured Visual Placeholder */}
        <div className="mt-12 flex aspect-video items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
          <div className="text-center">
            <div className="mb-3 text-4xl">✦</div>
            <p className="text-sm text-white/40">
              Featured visual will be added here
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-y border-white/10">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/40">
              Overview
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              Turning ideas into visuals
            </h2>
          </div>

          <div className="space-y-5 leading-7 text-white/60">
            <p>
              This project explores how AI image generation can be used to
              transform ideas into visual concepts quickly and creatively.
            </p>

            <p>
              The workflow combines concept development, prompt engineering,
              visual direction, generation, selection, and refinement.
            </p>

            <p>
              The objective is to create visuals that communicate an idea,
              product, mood, or story rather than simply generating images
              without a clear purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Categories */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-white/40">
          Visual Work
        </p>

        <h2 className="mt-4 text-3xl font-semibold">
          Exploring different creative directions
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              number: "01",
              title: "Product Visuals",
              text: "Creating visual concepts for products, packaging, and promotional content.",
            },
            {
              number: "02",
              title: "Advertising Concepts",
              text: "Developing attention-grabbing visual ideas for marketing and social media.",
            },
            {
              number: "03",
              title: "Storytelling",
              text: "Using AI-generated imagery to explore characters, environments, and narrative ideas.",
            },
            {
              number: "04",
              title: "Brand Concepts",
              text: "Experimenting with visual directions that can support branding and identity.",
            },
            {
              number: "05",
              title: "Creative Experiments",
              text: "Testing different styles, compositions, lighting, moods, and visual concepts.",
            },
            {
              number: "06",
              title: "Social Content",
              text: "Creating visual assets that can be adapted for modern social media platforms.",
            },
          ].map((item) => (
            <div
              key={item.number}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
            >
              <p className="text-sm text-white/30">{item.number}</p>

              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-white/40">
            Creative Process
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            From idea to final visual
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Idea",
              "Prompt",
              "Generate",
              "Select",
              "Refine",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-xl border border-white/10 px-5 py-6"
              >
                <p className="text-sm text-white/30">
                  0{index + 1}
                </p>

                <p className="mt-4 font-medium text-white/80">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-white/40">
          Capabilities
        </p>

        <h2 className="mt-4 text-3xl font-semibold">
          What this project demonstrates
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "AI image generation",
            "Prompt engineering",
            "Visual direction",
            "Creative composition",
            "Product visualization",
            "Advertising concepts",
            "Brand exploration",
            "Visual storytelling",
            "Creative experimentation",
          ].map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-white/10 px-5 py-4 text-sm text-white/70"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* My Role */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-white/40">
              My Role
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              Creative direction + AI generation
            </h2>

            <p className="mt-6 leading-8 text-white/60">
              I develop the concept, define the visual direction, create and
              refine prompts, evaluate generated results, and select visuals
              that best communicate the intended idea.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-white/40">
            Coming Soon
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            Selected visual work
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-white/50">
            Actual AI-generated visuals, product concepts, advertising
            experiments, and creative work will be added here as the portfolio
            develops.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm text-white/30">
          <p>© 2026 Daniel John Agustin</p>

          <a href="/" className="transition hover:text-white">
            Back to home
          </a>
        </div>
      </footer>
    </main>
  );
}
