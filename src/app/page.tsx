export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute left-1/2 top-[-300px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />
        <div className="absolute right-[-200px] top-[35%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="text-sm font-semibold tracking-wider">
          DJA<span className="text-zinc-600">.</span>
        </div>

        <div className="hidden gap-8 text-sm text-zinc-400 sm:flex">
          <a href="#work" className="transition hover:text-white">
            Work
          </a>
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#skills" className="transition hover:text-white">
            Skills
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex min-h-[calc(100vh-80px)] items-center px-6">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-zinc-600" />
              <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">
                AI • Video • Creative • Systems
              </span>
            </div>

            <h1 className="text-6xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-8xl lg:text-9xl">
              Daniel
              <br />
              <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
                John Agustin
              </span>
            </h1>
            <p className="mt-4 text-xl font-medium text-zinc-300 md:text-2xl">
  AI Video & Content Creator
</p>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
              I create AI-assisted videos, visual content, and social media concepts designed for engagement, promotion, and brand awareness — backed by real-world business and operations experience.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#work"
                className="rounded-full bg-white px-8 py-3.5 text-center text-sm font-semibold text-black transition hover:scale-105 hover:bg-zinc-200"
              >
                Explore My Work
              </a>

              <a
                href="#contact"
                className="rounded-full border border-zinc-800 px-8 py-3.5 text-center text-sm font-semibold text-white transition hover:border-zinc-500"
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-y-3 text-xs uppercase tracking-[0.15em] text-zinc-600 sm:flex sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2">
  <span>AI Content</span>
  <span className="hidden sm:inline">•</span>
  <span>Video</span>
  <span className="hidden sm:inline">•</span>
  <span>Automation</span>
  <span className="hidden sm:inline">•</span>
  <span>Web Apps</span>
</div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="relative z-10 border-t border-zinc-900 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Selected Work"
            title="Things I&apos;ve Built"
            description="A selection of creative projects, practical tools, and digital solutions."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <ProjectCard
              number="01"
              category="AI • VIDEO"
              title="AI Video Creation"
              description="AI-assisted video concepts, visual storytelling, advertisements, and short-form creative content."
              href="/projects/ai-video-creation"
            />

            <ProjectCard
              number="02"
              category="AI • VISUALS"
              title="AI Visuals"
              description="AI-generated images, product concepts, characters, environments, and visual assets."
              href="/projects/ai-visuals"
            />

            <ProjectCard
              number="03"
              category="WEB APP • AUTOMATION"
              title="Ice Cream POS"
              description="A practical web-based order management system created for a real small-business workflow."
              href="/projects/ice-mousse-pos"
            />

            <ProjectCard
              number="04"
              category="AI • AUTOMATION"
              title="AI & Automation"
              description="Workflow ideas, SOP systems, productivity improvements, and practical AI-assisted solutions."
              href="/projects/ai-process-improvement"
            />
          </div>
        </div>
      </section>

      {/* About */}
<section id="about" className="relative z-10 border-t border-zinc-900 px-6 py-28">
  <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
    <div>
      <SectionHeading
        eyebrow="About Me"
        title="Business experience meets AI and creative technology."
      />
    </div>

    <div className="text-lg leading-8 text-zinc-400">
      <p>
        My professional background spans customer service, operations,
        administration, inventory management, HR support, travel services,
        and lead processing.
      </p>

      <p className="mt-6">
        I&apos;m now combining that experience with AI-assisted video
        creation, visual content, social media concepts, process improvement,
        and practical web-based solutions.
      </p>

      <p className="mt-6">
        I enjoy learning new tools, experimenting with AI, and turning ideas
        into useful content or working digital solutions.
      </p>

      <p className="mt-6 text-zinc-300">
        My approach is simple:
        <br />
        <span className="text-white">
          Learn → Document → Analyze → Improve with AI → Identify Opportunities
        </span>
      </p>
    </div>
  </div>
</section>

      {/* Skills */}

<section id="skills" className="relative z-10 border-t border-zinc-900 px-6 py-28">
  <div className="mx-auto max-w-7xl">
    <SectionHeading
      eyebrow="Capabilities"
      title="What I Can Do"
    />

```
<div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800 sm:grid-cols-2 lg:grid-cols-3">
  {[
    "AI Video & Content Creation",
    "Video Editing",
    "Social Media Content",
    "AI Visual Creation",
    "Creative Prompting",
    "Product & Ad Concepts",
    "Process Analysis",
    "Workflow Documentation",
    "SOP Development",
    "AI-Assisted Process Improvement",
    "Business & Operations Support",
    "Web & Digital Solutions",
  ].map((skill) => (
    <div
      key={skill}
      className="bg-black p-6 text-sm text-zinc-300 transition hover:bg-zinc-950 hover:text-white"
    >
      {skill}
    </div>
  ))}
</div>
```

  </div>
</section>


      {/* Contact */}
      <section id="contact" className="relative z-10 border-t border-zinc-900 px-6 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-600">
            Contact
          </p>

          <h2 className="mt-5 text-5xl font-bold tracking-tight sm:text-7xl">
            Let&apos;s build something.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
            Open to remote opportunities, freelance projects, and
            collaborations involving AI, creative technology, automation, and
            business solutions.
          </p>

          <a
            href="mailto:your-email@example.com"
            className="mt-10 inline-block rounded-full bg-white px-9 py-4 text-sm font-semibold text-black transition hover:scale-105 hover:bg-zinc-200"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-900 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-xs text-zinc-600 sm:flex-row">
          <span>© {new Date().getFullYear()} Daniel John Agustin</span>
          <span>AI • Creative • Automation</span>
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.35em] text-zinc-600">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-xl text-zinc-500">{description}</p>
      )}
    </div>
  );
}

function ProjectCard({
  number,
  category,
  title,
  description,
  href,
}: {
  number: string;
  category: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a
  href={href}
  className="group relative block min-h-[330px] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-8 transition duration-500 hover:-translate-y-1 hover:border-zinc-600"
>
      <div className="absolute right-8 top-7 text-sm text-zinc-700 transition group-hover:text-zinc-400">
        {number}
      </div>

      <div className="flex h-full flex-col justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
            {category}
          </p>

          <h3 className="mt-6 text-3xl font-semibold tracking-tight">
            {title}
          </h3>

          <p className="mt-4 max-w-md leading-7 text-zinc-500">
            {description}
          </p>
        </div>

        <div className="mt-10 flex items-center gap-3 text-sm text-zinc-500 transition group-hover:text-white">
          <span>View project</span>
          <span className="transition group-hover:translate-x-2">→</span>
        </div>
      </div>
    </a>
  );
}