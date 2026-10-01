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
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-16">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
          AI • Process • Workflow
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
          AI & Process Improvement
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-8 text-zinc-300">
          Understand the process. Identify the problem. Improve the workflow. Find opportunities for AI and automation.
        </p>

        <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-500">
          I combine business and operations experience with AI tools to understand how work is actually done, identify problems and repetitive tasks, improve the workflow, and determine where AI or automation can provide practical value and measurable results.
        </p>

        {/* Positioning */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            ["Business First", "Start with the real workflow and business goal."],
            ["AI Assisted", "Use AI where it creates practical value."],
            ["Automation Ready", "Identify processes that can eventually be automated."],
          ].map(([title, description]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <h3 className="font-medium">{title}</h3>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                {description}
              </p>
            </div>
          ))}
        </div>
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
            <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-400">
  AI is most useful when it is applied to a process that is already
  understood. My approach is to start by learning how the work is actually
  done, identifying problems and repetitive tasks, then improving the workflow
  before looking for opportunities where AI, automation, or better systems can
  create practical value and measurable results.
</p>
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {[
              ["01", "Learn", "Understand the task, users, inputs, outputs, and business goal."],
              ["02", "Document", "Record how the process currently works and where information moves."],
              ["03", "Analyze", "Find repetitive work, bottlenecks, inconsistencies, and unnecessary steps."],
              ["04", "Improve with AI", "Explore practical ways AI can assist research, decisions, documentation, or execution."],
              ["05", "Identify Opportunities", "Determine what parts of the improved workflow could eventually be automated."],
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

      {/* Lead Review Case Study */}
      <section className="mx-auto max-w-6xl px-6 py-24">
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
              explored how structured rules, process documentation, and AI could
              help analyze incoming opportunities more consistently.
            </p>

            <p className="mt-5 leading-7 text-zinc-500">
              The goal is to turn an experience-based review process into a
              structured decision framework that can eventually support
              automation.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Process Analysis",
                "Decision Rules",
                "AI Assistance",
                "Risk Evaluation",
                "Workflow Design",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-4 py-2 text-xs text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-900 p-8 md:p-10">
            <p className="text-sm text-zinc-500">Workflow concept</p>

            <div className="mt-6 space-y-3">
              {[
                ["01", "Incoming Lead"],
                ["02", "Review Lead Details"],
                ["03", "Evaluate Risk"],
                ["04", "Identify Service Category"],
                ["05", "Determine Repair or Installation"],
                ["06", "Submit or Skip"],
              ].map(([number, step]) => (
                <div
                  key={step}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4"
                >
                  <span className="text-xs text-zinc-600">{number}</span>

                  <span className="text-sm text-zinc-300">{step}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm leading-6 text-zinc-500">
                The objective is not to blindly automate decisions. It is to
                structure the reasoning process, make repetitive analysis more
                consistent, and create a workflow that can later be improved
                with automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* From Process to Automation */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Process → System → Automation
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            The real opportunity is not just using AI.
            <br />
            It is improving the system around the work.
          </h2>

          <p className="mt-6 max-w-3xl leading-7 text-zinc-400">
            Once a workflow is understood and documented, it becomes easier to
            determine which parts require human judgment, which can be assisted
            by AI, and which repetitive tasks could eventually be automated.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Understand",
                description:
                  "Map the existing workflow, people, information, decisions, and constraints.",
              },
              {
                number: "02",
                title: "Improve",
                description:
                  "Remove unnecessary friction and use AI to improve research, documentation, analysis, or decision support.",
              },
              {
                number: "03",
                title: "Automate",
                description:
                  "Identify repeatable steps that can eventually be handled by software, workflows, or AI agents.",
              },
            ].map(({ number, title, description }) => (
              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-zinc-900/50 p-7"
              >
                <span className="text-sm text-zinc-600">{number}</span>

                <h3 className="mt-5 text-xl font-medium">{title}</h3>

                <p className="mt-4 text-sm leading-6 text-zinc-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Experience */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Business Experience
        </p>

        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
          Process thinking comes from real operations experience.
        </h2>

        <p className="mt-6 max-w-3xl leading-7 text-zinc-400">
          My approach to process improvement is grounded in hands-on experience
          with customer service, lead processing, inventory operations,
          administrative workflows, and business support.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-7">
            <h3 className="text-xl font-medium">Lead Processing</h3>

            <p className="mt-4 text-sm leading-6 text-zinc-500">
              Reviewing incoming leads, identifying service categories,
              matching opportunities with appropriate contractors, evaluating
              lead quality, and identifying problematic submissions.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-7">
            <h3 className="text-xl font-medium">Inventory Operations</h3>

            <p className="mt-4 text-sm leading-6 text-zinc-500">
              Experience with inventory reconciliation, purchase orders,
              receiving, SKU information, reporting, and structured operational
              data.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-7">
            <h3 className="text-xl font-medium">SOP & Workflow Thinking</h3>

            <p className="mt-4 text-sm leading-6 text-zinc-500">
              Understanding existing workflows, documenting processes,
              identifying inconsistencies, and looking for practical ways to
              improve productivity and repeatability.
            </p>
          </div>
        </div>
      </section>

      {/* Practical Application */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
            Practical Application
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
            Turning a business workflow into a useful system.
          </h2>

          <p className="mt-6 max-w-3xl leading-7 text-zinc-400">
  A practical example of this work comes from a previous client, a small ice
  cream business where I assisted with both customer-facing and operational
  improvements. This included developing product photo and video content for
  promotional campaigns, as well as helping create a simple digital system to
  improve order management and day-to-day efficiency.
</p>

          <a
            href="/projects/ice-mousse-pos"
            className="mt-8 inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition hover:bg-white hover:text-black"
          >
            View Business Workflow System →
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
              "SOP development thinking",
              "AI-assisted research",
              "AI-assisted workflow improvement",
              "Structured decision-making",
              "Lead review systems",
              "Business workflow systems",
              "Automation opportunity identification",
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