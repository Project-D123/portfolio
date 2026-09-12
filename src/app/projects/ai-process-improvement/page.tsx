export default function AIProcessImprovement() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="text-xl font-bold tracking-tight">
            DJA.
          </a>

          <div className="hidden gap-8 text-sm text-zinc-400 md:flex">
            <a href="/#work" className="transition hover:text-white">
              Work
            </a>
            <a href="/#about" className="transition hover:text-white">
              About
            </a>
            <a href="/#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="/#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Back */}
      <div className="mx-auto max-w-6xl px-6 pt-8">
        <a
          href="/#work"
          className="text-sm text-zinc-500 transition hover:text-white"
        >
          ← Back to Work
        </a>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
          AI • Process • Workflow
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
          AI & Process Improvement
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-8 text-zinc-400">
          Understanding the process first. Using AI to make it better.
        </p>

        <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-500">
          I combine business and operations experience with AI tools to
          understand workflows, document processes, identify opportunities for
          improvement, and explore where AI or automation can create better
          results.
        </p>
      </section>

      {/* Approach */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            My Approach
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Don&apos;t automate a bad process.
            <br />
            Understand it first.
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-400">
            My approach starts with understanding how a process actually works.
            Once the workflow is clear, I can identify repetitive tasks,
            bottlenecks, inconsistencies, and opportunities where AI can help.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {[
              ["01", "Learn", "Understand the task and business goal."],
              ["02", "Document", "Record how the process currently works."],
              ["03", "Analyze", "Find bottlenecks and repetitive work."],
              ["04", "Improve with AI", "Explore practical AI-assisted solutions."],
              [
                "05",
                "Identify Opportunities",
                "Determine what could eventually be automated.",
              ],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6"
              >
                <span className="text-sm text-zinc-600">{number}</span>

                <h3 className="mt-6 text-lg font-medium">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Review */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Case Study
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              AI-Assisted Lead Review
            </h2>

            <p className="mt-6 leading-7 text-zinc-400">
              Based on my experience processing home-improvement leads, I
              explored how structured rules and AI could help analyze incoming
              leads more consistently.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-900 p-8">
            <p className="text-sm text-zinc-500">Workflow concept</p>

            <div className="mt-6 space-y-4">
              {[
                "Incoming Lead",
                "Review Lead Details",
                "Evaluate Risk",
                "Identify Service Category",
                "Determine Repair or Installation",
                "Submit or Skip",
              ].map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4"
                >
                  <span className="text-xs text-zinc-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm text-zinc-300">{step}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-6 text-zinc-500">
              The goal is not to replace human judgment, but to structure the
              decision-making process and make repetitive analysis more
              consistent.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Business Experience
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Process thinking comes from real operations experience.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-7">
              <h3 className="text-xl font-medium">Lead Processing</h3>

              <p className="mt-4 text-sm leading-6 text-zinc-500">
                Reviewing incoming leads, identifying service categories,
                matching opportunities with appropriate contractors, and
                identifying problematic leads.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-7">
              <h3 className="text-xl font-medium">Inventory Operations</h3>

              <p className="mt-4 text-sm leading-6 text-zinc-500">
                Experience with inventory reconciliation, purchase orders,
                receiving, SKU information, reporting, and structured
                operational data.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-7">
              <h3 className="text-xl font-medium">SOP & Workflow Thinking</h3>

              <p className="mt-4 text-sm leading-6 text-zinc-500">
                Understanding existing workflows, documenting processes, and
                looking for practical ways to improve consistency and
                productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ice Mousse connection */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Practical Application
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Turning a business workflow into a useful system.
          </h2>

          <p className="mt-6 max-w-3xl leading-7 text-zinc-400">
            The Ice Mousse POS project is another example of this mindset:
            understand the workflow, identify what information needs to move
            through the business, then build a system around it.
          </p>

          <a
            href="/projects/ice-mousse-pos"
            className="mt-8 inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition hover:bg-white hover:text-black"
          >
            View Ice Mousse POS →
          </a>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Capabilities
          </p>

          <div className="mt-8 grid gap-x-12 gap-y-5 md:grid-cols-2">
            {[
              "Process analysis",
              "Workflow documentation",
              "SOP thinking",
              "AI-assisted research",
              "AI-assisted workflow improvement",
              "Structured decision-making",
              "Lead review systems",
              "Business workflow systems",
              "Identifying automation opportunities",
              "Continuous process improvement",
            ].map((item) => (
              <div
                key={item}
                className="border-b border-white/10 py-4 text-zinc-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
          <span>© 2026 Daniel John Agustin</span>

          <a href="/" className="transition hover:text-white">
            Back to Portfolio
          </a>
        </div>
      </footer>
    </main>
  );
}
