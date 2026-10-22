import type { ReactNode } from "react";
import type { Metadata } from "next";
import SystemGallery from "./SystemGallery";

export const metadata: Metadata = {
  title: "Small Ice Cream Business Order System | Daniel John Agustin",
  description: "A built order management system connecting order entry, inventory visibility, fulfillment tracking, and reseller sales.",
};

const screenshots = {
  orderTaking: {
    title: "Order Taking",
    image: "/projects/small-ice-cream-business/Order_Taking-Portfolio.png",
    description:
      "Flavor choices show current available stock while an order is being entered, alongside customer, seller, and payment fields.",
    width: 2532,
    height: 1758,
  },
  todaysOrders: {
    title: "Today’s Orders",
    image: "/projects/small-ice-cream-business/Orders-Portfolio-Sanitized.png",
    description:
      "The daily queue shows active orders, payment status, flavor quantities, and controls for marking items or orders done.",
    width: 2430,
    height: 1752,
  },
  inventory: {
    title: "Inventory",
    image: "/projects/small-ice-cream-business/Inventory-Portfolio.png",
    description:
      "Available stock is recorded by flavor and surfaced in the order entry screen.",
    width: 2434,
    height: 1624,
  },
  dashboard: {
    title: "Dashboard",
    image: "/projects/small-ice-cream-business/Dashboard-Portfolio.png",
    description:
      "The dashboard brings together daily revenue, orders, pints sold, payments, commission, and an order summary by flavor.",
    width: 2492,
    height: 1696,
  },
};

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">{children}</p>
  );
}

export default function SmallIceCreamBusinessOrderSystem() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="border-b border-zinc-900 px-6 py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="text-sm font-semibold tracking-wider">
            DJA<span className="text-zinc-600">.</span>
          </a>
          <a href="/#work" className="text-sm text-zinc-500 transition hover:text-white">
            ← Back to Work
          </a>
        </div>
      </nav>

      <section className="px-6 pb-16 pt-20">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>Case study · Business automation · Web application</SectionLabel>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
            Small Ice Cream Business Order System
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-8 text-zinc-300">
            The small ice cream business needed a clearer way to record orders, check flavor availability,
            follow fulfillment, and monitor reseller sales. I built a system around
            its operating needs, connecting order entry, inventory, fulfillment, and dashboard workflows.
          </p>
          <p className="mt-5 max-w-3xl text-sm leading-6 text-zinc-500">
            Explore the Order Taking, Today’s Orders, and Inventory screens below. The dashboard workflow and its operational purpose are described separately.
          </p>
        </div>
      </section>

      <section className="border-y border-zinc-900 bg-zinc-950 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>From business problems to built solutions</SectionLabel>
          <div className="mt-7 divide-y divide-white/10 border-y border-white/10">
            {[
              ["Orders hard to track through completion", "Order Taking + Today’s Orders"],
              ["Flavor stock checked separately from order entry", "Inventory + live availability in Order Taking"],
              ["Reseller pint sales and commissions hard to monitor", "Dashboard metrics + monthly view"],
              ["Daily flavor quantities needed for packing", "Today’s Orders summary by flavor"],
            ].map(([problem, solution]) => (
              <div key={problem} className="grid gap-2 py-5 sm:grid-cols-[1fr_1fr] sm:gap-8">
                <p className="text-sm leading-6 text-zinc-400">{problem}</p>
                <p className="text-sm font-medium leading-6 text-white">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>01 · Order tracking and fulfillment</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold">Record the order, then see what still needs doing.</h2>
          </div>
          <div className="space-y-5 leading-7 text-zinc-400">
            <p>
              <strong className="font-medium text-zinc-200">Problem.</strong> The business
              lacked an efficient way to record orders, follow their status, and identify
              which ones were complete.
            </p>
            <p>
              <strong className="font-medium text-zinc-200">What I built.</strong> Order
              Taking provides structured customer and flavor entry. Today’s Orders gives
              the business a focused daily queue, including active orders, payment status,
              item quantities, and completion controls.
            </p>
            <p>
              <strong className="font-medium text-zinc-200">Why it matters.</strong> Order
              entry and fulfillment are connected in one workflow, making it easier to
              review what has been recorded and what still needs to be prepared or marked done.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-5xl">
          <SystemGallery screenshots={[screenshots.orderTaking, screenshots.todaysOrders]} />
        </div>
      </section>

      <section className="border-y border-zinc-900 bg-zinc-950 px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>02 · Inventory and order availability</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold">Show stock where the order is entered.</h2>
          </div>
          <div className="space-y-5 leading-7 text-zinc-400">
            <p>
              <strong className="font-medium text-zinc-200">Problem.</strong> Staff counted
              inventory manually each day. Orders could be accepted for a flavor even when
              the remaining stock was not enough.
            </p>
            <p>
              <strong className="font-medium text-zinc-200">What I built.</strong> The
              Inventory section tracks available quantity by flavor. I connected that
              information to the Order Taking interface, where available stock is visible
              while the seller selects flavors for an order.
            </p>
            <p>
              <strong className="font-medium text-zinc-200">Why it matters.</strong> This
              makes stock information part of the ordering decision instead of leaving it
              in a separate inventory screen, helping staff check flavor availability while
              they enter an order.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-5xl">
          <SystemGallery screenshots={[screenshots.inventory, screenshots.orderTaking]} />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>03 · Reseller sales and daily planning</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold">A dashboard shaped around decisions the business needed to make.</h2>
          </div>
          <div className="space-y-5 leading-7 text-zinc-400">
            <p>
              <strong className="font-medium text-zinc-200">Problem.</strong> The business
              had difficulty monitoring reseller pint sales, making commission calculation
              harder. It also needed a quick view of what flavors to prepare for daily orders.
            </p>
            <p>
              <strong className="font-medium text-zinc-200">What I built.</strong> The
              Dashboard brings together pints sold, commission, revenue, current orders,
              and daily order quantities by flavor. A monthly version of the relevant
              metrics is available from the dashboard view.
            </p>
            <p>
              <strong className="font-medium text-zinc-200">Why it matters.</strong> The
              dashboard presents operational and reseller information the business needs
              to review. Its flavor breakdown also supports packing by showing what the
              day’s orders call for.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-5xl">
          <SystemGallery screenshots={[screenshots.dashboard]} />
        </div>
      </section>

      <section className="border-y border-zinc-900 bg-zinc-950 px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-6">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Reports · In development</p>
          <p className="text-sm leading-6 text-zinc-400">A requested reporting section for generating summaries from system data.</p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <SectionLabel>My role</SectionLabel>
              <h2 className="mt-4 text-3xl font-bold">From operating needs to connected features.</h2>
            </div>
            <div className="space-y-5 leading-7 text-zinc-400">
              <p>
                I analyzed the order, stock, fulfillment, and reseller-tracking needs and
                built the Order Taking, Today’s Orders, Inventory, and Dashboard workflows
                described in this case study. A key design choice was connecting inventory visibility to
                order entry so staff could see flavor availability at the point of sale.
              </p>
              <p className="text-sm text-zinc-500">
                The system is built with Next.js, React, TypeScript, Tailwind CSS, Firebase,
                and Firestore.
              </p>
            </div>
          </div>

          <div className="mt-14 border-t border-zinc-900 pt-12">
            <SectionLabel>Practical value shown by the system</SectionLabel>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold">Connected views give the business a clearer way to operate.</h2>
            <p className="mt-5 max-w-3xl leading-7 text-zinc-400">
              Order Taking connects flavor availability with the daily fulfillment queue, while
              Inventory records stock by flavor. The dashboard brings together reseller sales,
              pints sold, revenue, commission, current orders, and monthly views to support
              day-to-day review and planning.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-900 px-6 py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-zinc-500">See the process behind the system.</p>
          <p className="mt-2 text-lg font-medium">AI-Assisted Lead Review →</p>
          </div>
          <a href="/projects/ai-process-improvement" className="inline-flex w-fit rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition hover:bg-white hover:text-black">
            View Process Work
          </a>
        </div>
      </section>

      <footer className="border-t border-zinc-900 px-6 py-8 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} Daniel John Agustin
      </footer>
    </main>
  );
}
