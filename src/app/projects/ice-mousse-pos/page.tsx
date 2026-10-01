import SystemGallery from "./SystemGallery";

const systemScreenshots = [
  {
    title: "Dashboard",
    image: "/projects/ice-mousse-pos/Dashboard-Portfolio.png",
  },
  {
    title: "Order Taking",
    image: "/projects/ice-mousse-pos/Order_Taking-Portfolio.png",
  },
  {
    title: "Orders",
    image: "/projects/ice-mousse-pos/Orders-Portfolio.png",
  },
  {
    title: "Inventory",
    image: "/projects/ice-mousse-pos/Inventory-Portfolio.png",
  },
];

export default function IceMoussePOS() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <nav className="border-b border-zinc-900 px-6 py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a
            href="/"
            className="text-sm font-semibold tracking-wider"
          >
            DJA<span className="text-zinc-600">.</span>
          </a>

          <a
            href="/#work"
            className="text-sm text-zinc-500 transition hover:text-white"
          >
            ← Back to Work
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-600">
            Business Workflow • Web App • Process Improvement
          </p>

          <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-7xl">
  Small Business Workflow System
</h1>

          <p className="mt-7 max-w-3xl text-xl leading-8 text-zinc-400">
  A practical digital system developed to help a small ice cream business
  organize orders, simplify day-to-day operations, and create a more efficient
  workflow.
</p>
        </div>
      </section>

      {/* Overview */}
      <section className="border-t border-zinc-900 px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
              The Challenge
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Turning a real business workflow into a simple digital system.
            </h2>
          </div>

          <div className="leading-8 text-zinc-400">
  <p>
    As the business grew, there was an opportunity to improve both how the
    products were presented to customers and how day-to-day orders were
    managed behind the scenes.
  </p>

  <p className="mt-5">
    I assisted with the customer-facing side through product photo and video
    content for promotional campaigns, while also helping identify ways to
    make the operational workflow more organized and efficient.
  </p>

  <p className="mt-5">
    This led to the idea of creating a simple digital system where orders
    could be recorded, tracked, updated, and managed from one place.
  </p>
</div>
        </div>
      </section>

      {/* Solution */}
      <section className="border-t border-zinc-900 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
            The Solution
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            A lightweight order management system.
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-zinc-400">
  The solution focused on keeping the workflow simple and practical. Instead
  of adding unnecessary complexity, the system was structured around the
  information the business actually needed to manage customer orders,
  reseller transactions, and daily operations.
</p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
  "Centralized customer orders",
  "Flavor and quantity tracking",
  "Order status management",
  "Pay-later order tracking",
  "Order updates and cancellation",
  "Pickup workflow",
  "Reseller pricing support",
  "Dashboard overview",
].map((feature) => (
              <div
                key={feature}
                className="rounded-xl border border-zinc-800 bg-zinc-950 p-5 text-zinc-300"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

{/* System Preview */}
<section className="border-t border-zinc-900 px-6 py-20">
  <div className="mx-auto max-w-5xl">
    <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
      System Preview
    </p>

    <h2 className="mt-4 text-3xl font-bold">
      A clearer view of the day-to-day workflow.
    </h2>

    <p className="mt-6 max-w-3xl leading-8 text-zinc-400">
      The system brings key business information into one place, giving the
      business a simple overview of orders and daily activity.
    </p>

    <SystemGallery screenshots={systemScreenshots} />

  </div>
</section>

      {/* Technology */}
      <section className="border-t border-zinc-900 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
            Technology
          </p>

          <h2 className="mt-4 text-3xl font-bold">
  Technology supporting a practical business workflow.
</h2>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Firebase",
              "Firestore",
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-zinc-700 px-5 py-2 text-sm text-zinc-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Role */}
      <section className="border-t border-zinc-900 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
            My Role
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            From business workflow to working application.
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-zinc-400">
  My role involved understanding the business workflow, identifying what
  information needed to be tracked, organizing the process into a clearer
  structure, and translating those requirements into a practical digital
  system. I also worked on the interface and functionality needed to make
  the system useful for day-to-day order management.
</p>
        </div>
      </section>

{/* Business Impact */}
<section className="border-t border-zinc-900 px-6 py-20">
  <div className="mx-auto max-w-5xl">
    <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
      Business Impact
    </p>

    <h2 className="mt-4 text-3xl font-bold">
      Making the workflow easier to manage.
    </h2>

    <p className="mt-6 max-w-3xl leading-8 text-zinc-400">
      The goal was not to build a complicated system, but to make the
      day-to-day workflow more organized and easier to manage. By bringing
      order information into one system, the business could have a clearer
      view of active orders, customer details, payment status, and fulfillment
      needs.
    </p>

    <div className="mt-10 grid gap-4 sm:grid-cols-3">
      {[
        "More organized order information",
        "Clearer day-to-day workflow",
        "Foundation for future automation",
      ].map((impact) => (
        <div
          key={impact}
          className="rounded-xl border border-zinc-800 bg-zinc-950 p-5 text-zinc-300"
        >
          {impact}
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Next Steps */}
      <section className="border-t border-zinc-900 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
            Next Steps
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            More capabilities can be added as the business grows.
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-zinc-400">
  As the business grows, the workflow can continue to evolve through better
  reporting, analytics, notifications, and automation opportunities. The
  approach is to first understand the process, identify where improvements
  create real value, and then introduce technology where it makes sense.
</p>
        </div>
      </section>

{/* Project Navigation */}
<section className="border-t border-zinc-900 px-6 py-16">
  <div className="mx-auto flex max-w-5xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <p className="text-sm text-zinc-500">
        Interested in the process behind the work?
      </p>

      <p className="mt-2 text-lg font-medium">
        Explore AI & Process Improvement →
      </p>
    </div>

    <a
      href="/ai-process-improvement"
      className="inline-flex w-fit rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition hover:bg-white hover:text-black"
    >
      View Process Work
    </a>
  </div>
</section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 px-6 py-8 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} Daniel John Agustin
      </footer>
    </main>
  );
}
