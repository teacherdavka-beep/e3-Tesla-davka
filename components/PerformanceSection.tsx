import Image from "next/image";

const STATS = [
  { value: "3.1s", label: "Zero to 60 mph on Performance trim" },
  { value: "342 mi", label: "EPA-estimated range on a single charge" },
];

export default function PerformanceSection() {
  return (
    <section id="performance" className="w-full px-6 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col items-start gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">Performance</p>
            <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">The numbers speak for themselves</h2>
            <p className="max-w-md text-lg text-ink/70">
              Every Model 3 is tuned in-house — motors, battery, and software working as one system. We test
              relentlessly, then tune again.
            </p>
          </div>

          <div className="grid w-full grid-cols-2 gap-6 border-t border-border pt-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2">
                <p className="text-4xl font-medium tracking-tight sm:text-5xl">{stat.value}</p>
                <p className="text-base text-ink/70">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#gallery"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-base font-medium transition-colors hover:bg-surface"
            >
              Learn more
            </a>
            <a href="#charging" className="inline-flex items-center gap-1 text-base font-medium hover:text-accent">
              Explore
              <Image src="/assets/chevron-right.svg" alt="" width={24} height={24} />
            </a>
          </div>
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
          <Image src="/assets/performance.png" alt="Model 3 in motion" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
