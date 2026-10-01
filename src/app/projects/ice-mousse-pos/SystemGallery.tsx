"use client";

import { useEffect } from "react";
import { animate } from "animejs";

type Screenshot = {
  title: string;
  image: string;
};

type SystemGalleryProps = {
  screenshots: Screenshot[];
};

export default function SystemGallery({
  screenshots,
}: SystemGalleryProps) {

  useEffect(() => {
  const cards = document.querySelectorAll<HTMLElement>(
    "[data-carousel-card]"
  );

  if (cards.length === 0) return;

  let currentIndex = 0;

  cards.forEach((card, index) => {
    card.style.opacity = index === 0 ? "1" : "0";
  });

  const interval = setInterval(() => {
    const currentCard = cards[currentIndex];
    const nextIndex = (currentIndex + 1) % cards.length;
    const nextCard = cards[nextIndex];

    animate(currentCard, {
      opacity: 0,
      duration: 1000,
      ease: "inOutQuad",
    });

    animate(nextCard, {
      opacity: 1,
      duration: 1000,
      ease: "inOutQuad",
    });

    currentIndex = nextIndex;
  }, 3000);

  return () => clearInterval(interval);
}, []);

  return (
    <div className="mt-12">
      <div
  data-carousel
  className="relative h-[420px]"
>
        {screenshots.map((screenshot, index) => {
          

          return (
            <div
  key={screenshot.image}
  data-carousel-card
data-layout
              className="absolute left-1/2 top-0 w-full -translate-x-1/2 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-2xl"
              
            >
              <img
                src={screenshot.image}
                alt={screenshot.title}
                className="block w-full"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}