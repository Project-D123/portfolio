export default function AIVideoCreation() {
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
          AI Creative • Video
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
          AI Video Creation
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
          Creating cinematic, engaging video concepts using AI-powered
          generation, creative direction, editing, and storytelling.
        </p>

        {/* Media Placeholder */}
        <div className="mt-12 flex aspect-video items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
          <div className="text-center">
            <div className="mb-3 text-4xl">▶</div>
            <p className="text-sm text-white/40">
              Featured video will be added here
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
              Turning ideas into visual stories
            </h2>
          </div>

          <div className="space-y-5 text-white/60 leading-7">
            <p>
              This project explores how AI can be used as part of a practical
              creative workflow for producing video content.
            </p>

            <p>
              The process combines concept development, prompting, visual
              generation, scene planning, editing, and refinement to create
              content designed for modern digital platforms.
            </p>

            <p>
              The goal is not simply to generate AI footage, but to use AI as
              a creative tool while maintaining direction, consistency, and
              storytelling.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-white/40">
          Workflow
        </p>

        <h2 className="mt-4 text-3xl font-semibold">
          From concept to finished video
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              number: "01",
              title: "Concept",
              text: "Developing the idea, visual direction, audience, and purpose of the video.",
            },
            {
              number: "02",
              title: "Prompting",
              text: "Creating structured prompts to guide AI-generated visuals and scenes.",
            },
            {
              number: "03",
              title: "Generation",
              text: "Producing visual assets and video sequences using AI creative tools.",
            },
            {
              number: "04",
              title: "Editing",
              text: "Combining scenes, timing, transitions, text, sound, and other elements.",
            },
            {
              number: "05",
              title: "Refinement",
              text: "Reviewing the output and improving pacing, consistency, and presentation.",
            },
            {
              number: "06",
              title: "Final Output",
              text: "Preparing the finished video for social media, marketing, or portfolio use.",
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

      {/* Capabilities */}
      <section className="border-y border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-white/40">
            Capabilities
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            What this project demonstrates
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "AI-assisted video creation",
              "Creative prompting",
              "Visual storytelling",
              "Scene planning",
              "Video editing",
              "Content development",
              "Creative experimentation",
              "Social media content",
              "AI workflow development",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-white/10 px-5 py-4 text-sm text-white/70"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-white/40">
            My Role
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            Creative direction + AI workflow
          </h2>

          <p className="mt-6 leading-8 text-white/60">
            I handle the creative process from idea development through
            generation, editing, and refinement. The focus is on combining AI
            tools with practical creative decisions rather than relying on
            generated output alone.
          </p>
        </div>
      </section>

      {/* Future additions */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-white/40">
            Coming Soon
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            More work will be added
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-white/50">
            This section will eventually include selected AI-generated videos,
            short-form content, advertisements, creative experiments, and
            behind-the-scenes examples of the workflow.
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

