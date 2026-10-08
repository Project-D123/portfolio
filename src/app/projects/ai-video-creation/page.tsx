const videoSamples = [
  {
    file: "finished-video-sample-04.mp4",
    title: "A Taste of Tradition",
    description: "A story where the Ube flavor is passed down from Lola Leony to her grandchildren, making it more than a flavor—it becomes a tradition of love, family, and memories.",
  },
  {
    file: "finished-video-sample-05.mp4",
    title: "From Imagination to Obsession",
    description: "A creative story where an idea begins in the imagination and comes to life as the real product—turning a vision into something customers can see, enjoy, and experience.",
  },
  {
    file: "finished-video-sample-02.mp4",
    title: "A Flavor for Every Personality",
    description: "A playful flavor campaign where each creation gets its own personality—from the favorite and best seller to the tropical delight and Lola Leony's secret—inviting customers to discover the flavor that becomes their own.",
  },
  {
    file: "finished-video-sample-01.mp4",
    title: "A Little Joy in Every Spoonful",
    description: "A story about how something as simple as a spoonful can change a moment. A tired, sad child reaches for just one bite, but as the sweetness takes over, his sadness turns into joy—until he's dancing, smiling, and unknowingly finishes the entire pint.",
  },
  {
    file: "finished-video-sample-03.mp4",
    title: "For the Woman Who Was Always There",
    description: "A heartfelt Mother's Day story told through a simple message to Mom—a reflection on the person who stayed through the hardest moments, gave strength when it was needed most, and was sometimes taken for granted. It ends with a simple reminder: behind every strong person is a mother who was there all along.",
    poster: "/projects/ai-video-creation/finished-video-sample-05-poster.jpg",
  },
];

export default function AIVideoCreation() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="text-xl font-bold tracking-tight">DJA.</a>
          <a href="/#work" className="text-sm text-zinc-400 transition hover:text-white">← Back to Work</a>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 pb-12 pt-16">
        <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">Project · AI video</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">AI-assisted product video storytelling.</h1>
        <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-300">
          Five finished video pieces for a small ice cream business are presented below. They combine AI-assisted visual elements with editing to tell product-focused stories.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20" aria-labelledby="video-samples">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Completed work · Five samples</p>
          <h2 id="video-samples" className="mt-3 text-3xl font-semibold">Finished video samples</h2>
          <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
            Each caption briefly describes the subject and visual approach of the finished piece.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {videoSamples.map((sample) => {
            return (
              <figure key={sample.file} className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
                <h3 className="mb-3 px-5 pt-4 text-base font-bold text-white">{sample.title}</h3>
                <div className="aspect-[4/5] bg-black">
                  <video
                    aria-label={`${sample.title} video`}
                    className="h-full w-full object-contain"
                    controls
                    playsInline
                    preload="metadata"
                    poster={"poster" in sample ? sample.poster : undefined}
                  >
                    <source src={`/projects/ai-video-creation/${sample.file}`} type="video/mp4" />
                    Your browser does not support embedded video. You can open the video file directly.
                  </video>
                </div>
                <figcaption className="border-t border-white/10 px-5 py-4">
                  <p className="text-sm leading-6 text-zinc-400">{sample.description}</p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">What the work demonstrates</p>
            <h2 className="mt-4 text-3xl font-semibold">Marketing shaped around the product and its story.</h2>
          </div>
          <div className="space-y-5 leading-7 text-zinc-400">
            <p>I was involved with the business from the beginning and supported its marketing efforts, including creating video campaigns that helped it reach local customers.</p>
            <p>The five videos above are genuine finished examples of that work, bringing AI-assisted visuals and editing together to present the client’s product.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">My role</p>
            <h2 className="mt-4 text-3xl font-semibold">Creative direction, AI-assisted visuals, and editing</h2>
          </div>
          <div className="space-y-5 leading-7 text-zinc-400">
            <p>I developed and created the video content, shaping product-focused visual stories and editing the pieces into finished campaigns for the business.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Daniel John Agustin</span>
          <a href="/projects/ai-visuals" className="transition hover:text-white">Next: AI Visuals →</a>
        </div>
      </footer>
    </main>
  );
}
