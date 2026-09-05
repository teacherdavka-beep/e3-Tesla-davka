import Image from "next/image";

export default function WideSection() {
  return (
    <section id="charging" className="relative flex h-[70vh] min-h-[480px] w-full items-end overflow-hidden">
      <Image
        src="/assets/wide-map.png"
        alt="Charging network coverage map"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start gap-6 px-6 pb-16 sm:px-8 lg:px-16">
        <p className="text-sm font-semibold tracking-[0.2em] text-white/80 uppercase">Charging</p>
        <h2 className="max-w-xl text-4xl font-medium tracking-tight text-white sm:text-5xl">
          Built for the long haul
        </h2>
        <p className="max-w-lg text-lg text-white/85">
          A charging network that grows with you — thousands of stations across the country, so the next one is
          never far.
        </p>
        <div className="mt-2 flex items-center gap-6">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-medium text-ink transition-colors hover:bg-white/90"
          >
            Find a station
          </a>
          <a href="#contact" className="inline-flex items-center gap-1 text-base font-medium text-white hover:text-white/70">
            Charging plans
            <Image src="/assets/chevron-right.svg" alt="" width={24} height={24} className="invert" />
          </a>
        </div>
      </div>
    </section>
  );
}
