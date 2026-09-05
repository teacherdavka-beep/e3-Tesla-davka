import Image from "next/image";
import BookingButton from "./BookingButton";

export default function Hero() {
  return (
    <section id="hero" className="relative flex h-[88vh] min-h-[560px] w-full items-center justify-center overflow-hidden">
      <Image
        src="/assets/hero.png"
        alt="Model 3 on the open road"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center text-white">
        <p className="text-sm font-semibold tracking-[0.2em] text-white/80 uppercase">Electric. Effortless.</p>
        <h1 className="text-5xl font-medium tracking-tight sm:text-6xl lg:text-7xl">Model 3</h1>
        <p className="text-lg text-white/90 sm:text-xl">1.99% APR available for a limited time</p>
        <div className="mt-2 flex flex-col gap-4 sm:flex-row">
          <BookingButton className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-base font-medium text-ink transition-colors hover:bg-white/90">
            Order Now
          </BookingButton>
          <a
            href="#performance"
            className="inline-flex items-center justify-center rounded-full border border-white/60 px-7 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
