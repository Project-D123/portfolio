import Image from "next/image";

type Screenshot = {
  title: string;
  image: string;
  description: string;
  width: number;
  height: number;
};

export default function SystemGallery({
  screenshots,
}: {
  screenshots: Screenshot[];
}) {
  return (
    <div className={`grid gap-5 ${screenshots.length === 1 ? "md:grid-cols-1" : "md:grid-cols-2"}`}>
      {screenshots.map((screenshot) => (
        <figure
          key={screenshot.image}
          className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900"
        >
          <Image
            src={screenshot.image}
            alt={`${screenshot.title} screen from the small ice cream business order system`}
            width={screenshot.width}
            height={screenshot.height}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="block h-auto w-full"
          />
          <figcaption className="border-t border-white/10 px-5 py-4">
            <span className="block font-medium text-white">{screenshot.title}</span>
            <span className="mt-1 block text-sm leading-6 text-zinc-400">
              {screenshot.description}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
