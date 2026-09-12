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
            Web App • Automation
          </p>

          <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-7xl">
  Ice Cream POS — Small Business Sales System
</h1>

          <p className="mt-7 max-w-3xl text-xl leading-8 text-zinc-400">
            A practical web-based order management system designed to simplify
            reseller orders and make day-to-day operations easier.
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
              Managing reseller orders can become difficult when information is
              spread across conversations, notes, and manual calculations.
            </p>

            <p className="mt-5">
              The goal was to create a simple system where orders could be
              recorded, tracked, updated, and managed from one place.
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
  The system was designed around the actual workflow of a small ice cream
  business rather than forcing the business to adapt to unnecessary
  features.
</p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              "Customer management",
              "Flavor and quantity tracking",
              "Order status management",
              "Pay-later order tracking",
              "Order updates and cancellation",
              "Pickup workflow",
              "Reseller pricing",
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

      {/* Technology */}
      <section className="border-t border-zinc-900 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
            Technology
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Built with modern web technology.
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
            I worked on translating the business requirements into a practical
            web application, organizing the workflow, designing the interface,
            and implementing the functionality needed to manage orders.
          </p>
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
            The system can continue evolving with additional reporting,
            analytics, automation, notifications, and other features based on
            actual business needs.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 px-6 py-8 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} Daniel John Agustin
      </footer>
    </main>
  );
}
