"use client";

import Image from "next/image";
import { useRef } from "react";

export type SliderCard = {
  id: string;
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  cta?: string;
};

type ProductSliderProps = {
  id: string;
  tagline: string;
  heading: string;
  description: string;
  cards: SliderCard[];
  headerCta?: React.ReactNode;
};

export default function ProductSlider({ id, tagline, heading, description, cards, headerCta }: ProductSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section id={id} className="w-full px-6 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 lg:mb-20 lg:flex-row lg:items-end">
          <div className="flex max-w-xl flex-col gap-4">
            <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">{tagline}</p>
            <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">{heading}</h2>
            <p className="text-lg text-ink/70">{description}</p>
          </div>
          {headerCta}
        </div>

        <div ref={trackRef} className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth lg:gap-8">
          {cards.map((card) => (
            <article
              key={card.id}
              className="flex w-[75vw] shrink-0 snap-start flex-col gap-4 sm:w-[320px] lg:w-[360px]"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-surface">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 320px, 75vw"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg font-medium">{card.title}</p>
                <p className="text-base text-ink/60">{card.subtitle}</p>
              </div>
              {card.cta && (
                <button
                  type="button"
                  className="mt-1 self-start rounded-full border border-border px-5 py-2 text-sm font-medium transition-colors hover:bg-surface"
                >
                  {card.cta}
                </button>
              )}
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-end gap-3">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scroll(-1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white transition-colors hover:bg-surface"
          >
            <Image src="/assets/arrow-back.svg" alt="" width={24} height={24} />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scroll(1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white transition-colors hover:bg-surface"
          >
            <Image src="/assets/arrow-forward.svg" alt="" width={24} height={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
