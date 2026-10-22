import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AI-Assisted Work Process Improvement | Daniel John Agustin",
  description: "Workflow analysis and practical process design based on hands-on lead processing experience.",
};

const reviewSteps = [
  ["01", "Incoming lead", "Receive the lead details."],
  ["02", "Review details", "Check the information needed to assess the request."],
  ["03", "Evaluate risk", "Look for issues that affect lead quality."],
  ["04", "Classify service", "Identify the service category and repair or installation need."],
  ["05", "Decide", "Submit or skip based on the review."],
];

export default function AIProcessImprovement() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="text-xl font-bold tracking-tight">DJA.</a>
          <a href="/#work" className="text-sm text-zinc-400 transition hover:text-white">← Back to Work</a>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">Case study · Workflow analysis</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">AI-Assisted Work Process Improvement</h1>
            <p className="mt-7 max-w-3xl text-xl leading-8 text-zinc-300">
              I analyzed a lead-review workflow from hands-on processing experience and mapped repeated checks into a practical sequence. The work shows how process analysis can make decision steps clearer and surface opportunities for AI assistance.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <a href="/projects/small-ice-cream-business" className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/30">
                <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">Built system · Screenshots</span>
                <h2 className="mt-3 text-xl font-medium">Small Ice Cream Business Order System →</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-400">See the actual order entry, sanitized daily queue, and inventory screens.</p>
              </a>
              <a href="#lead-review" className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/30">
                <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">Process example</span>
                <h2 className="mt-3 text-xl font-medium">AI-Assisted Work Process Improvement</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-400">A structured decision flow based on lead processing experience.</p>
              </a>
            </div>
          </div>
          <Image
            src="/projects/ai-process-improvement/ai-process-improvement-preview.png"
            alt="3D avatar at a desk, with an AI workflow connecting ideas to improved results"
            width={1536}
            height={1024}
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="h-auto w-full rounded-2xl border border-white/10"
          />
        </div>
      </section>

      <section id="lead-review" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">01 · Problem</p>
              <h2 className="mt-4 text-3xl font-semibold">Lead decisions depended on repeated manual review.</h2>
              <p className="mt-5 leading-7 text-zinc-400">
                In home-improvement lead processing, incoming opportunities needed review for service category, risk, and whether the job fit repair or installation work. When review criteria rely on individual experience, consistent evaluation is harder to maintain.
              </p>
              <p className="mt-5 text-sm leading-6 text-zinc-500">
                The analysis focused on making decision factors visible and turning repeated judgment calls into clear review checkpoints.
              </p>
              <figure className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50">
                <Image
                  src="/projects/ai-process-improvement/client-discovery.png"
                  alt="3D avatar discussing current process, pain points, goals, and opportunities with a client"
                  width={832}
                  height={467}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="h-auto w-full"
                />
                <figcaption className="px-4 py-3 text-sm text-zinc-500">Illustrative scene: clarify the process, pain points, goals, and opportunities.</figcaption>
              </figure>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">02 · Workflow mapped</p>
              <h2 className="mt-4 text-2xl font-semibold">A lead review, made visible</h2>
              <ol className="mt-7 space-y-3">
                {reviewSteps.map(([number, title, detail]) => (
                  <li key={number} className="flex gap-4 rounded-xl border border-white/10 bg-zinc-900/70 p-5">
                    <span className="text-sm text-zinc-600">{number}</span>
                    <div>
                      <h3 className="font-medium">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-zinc-400">{detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">03 · My approach</p>
            <h2 className="mt-4 text-3xl font-semibold">Document the reasoning before adding AI.</h2>
              <figure className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50">
                <Image
                  src="/projects/ai-process-improvement/workflow-analysis.png"
                  alt="3D avatar analyzing a workflow diagram from the current process through AI assistance to an improved workflow"
                  width={837}
                  height={459}
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="h-auto w-full"
                />
                <figcaption className="px-4 py-3 text-sm text-zinc-500">Map repeated checks and identify where assistance may help.</figcaption>
              </figure>
          </div>
          <div className="space-y-5 leading-7 text-zinc-400">
            <p>I broke the review into observable checkpoints: collect lead details, check risk, classify the service, determine job type, then decide whether to submit or skip.</p>
            <p>That structure clarifies where human judgment is needed and where AI assistance could help organize information or support repeatable checks.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">04 · Applied workflow thinking</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold">Operational needs translated into a working system.</h2>
          <p className="mt-5 max-w-3xl leading-7 text-zinc-400">
            In a separate project for a small ice cream business, I mapped day-to-day needs into a centralized system for order entry, fulfillment status, payment tracking, pickup, reseller pricing, dashboard visibility, and inventory.
          </p>
          <a href="/projects/small-ice-cream-business" className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200">
            View the system screenshots →
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">05 · Practical value</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-7">
                <h2 className="text-xl font-medium">A repeatable review structure</h2>
                <p className="mt-4 leading-7 text-zinc-400">The mapped steps make review factors visible from intake through the submit-or-skip decision, giving the process a clear sequence to follow.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-7">
                <h2 className="text-xl font-medium">A clear path to AI assistance</h2>
                <p className="mt-4 leading-7 text-zinc-400">Once the review steps are explicit, repeatable information checks can be considered for AI support while the decision remains easy to review.</p>
              </div>
            </div>
          </div>
          <figure className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50">
            <Image
              src="/projects/ai-process-improvement/solution-presentation.png"
              alt="3D avatar presenting an improved process and its intended benefits on a screen"
              width={832}
              height={459}
              sizes="(max-width: 768px) 100vw, 40vw"
              className="h-auto w-full"
            />
            <figcaption className="px-4 py-3 text-sm text-zinc-500">Illustrative scene: present a proposed process and its intended benefits.</figcaption>
          </figure>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Daniel John Agustin</span>
          <a href="/projects/small-ice-cream-business" className="transition hover:text-white">See the built order system →</a>
        </div>
      </footer>
    </main>
  );
}
