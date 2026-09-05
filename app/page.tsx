import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PerformanceSection from "@/components/PerformanceSection";
import ProductSlider, { SliderCard } from "@/components/ProductSlider";
import WideSection from "@/components/WideSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BookingButton from "@/components/BookingButton";

const GALLERY_CARDS: SliderCard[] = [
  { id: "g1", image: "/assets/product-1.png", alt: "Model 3 on a desert highway", title: "On the open road", subtitle: "Desert highway, full charge." },
  { id: "g2", image: "/assets/product-2.png", alt: "Two Model 3s side by side in the mountains", title: "Side by side", subtitle: "Two colors, one lineup." },
  { id: "g3", image: "/assets/product-3.png", alt: "Model S studio shot", title: "Studio finish", subtitle: "Every angle, considered." },
  { id: "g4", image: "/assets/product-4.png", alt: "Model 3 in a showroom", title: "City lights", subtitle: "Showroom-ready, day or night." },
  { id: "g5", image: "/assets/product-5.png", alt: "Widebody Model 3", title: "Track-ready", subtitle: "Widebody, tuned for the apex." },
  { id: "g6", image: "/assets/product-6.png", alt: "Model Y parked in a garage", title: "Around town", subtitle: "Compact enough for anywhere." },
];

const ENERGY_CARDS: SliderCard[] = [
  { id: "e1", image: "/assets/gear-1.png", alt: "Solar Roof on a house", title: "Solar Roof", subtitle: "Generate clean energy without changing your roofline.", cta: "Learn more" },
  { id: "e2", image: "/assets/gear-2.png", alt: "Powerwall units mounted on a wall", title: "Powerwall", subtitle: "Store solar energy for use anytime, day or night.", cta: "Learn more" },
  { id: "e3", image: "/assets/gear-3.png", alt: "Megapack installation in the desert", title: "Megapack", subtitle: "Utility-scale storage for a renewable grid.", cta: "Learn more" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <PerformanceSection />
        <ProductSlider
          id="gallery"
          tagline="Shop"
          heading="Every angle, every finish"
          description="A closer look at Model 3 on the road, in the studio, and everywhere between."
          cards={GALLERY_CARDS}
          headerCta={
            <BookingButton className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-base font-medium transition-colors hover:bg-surface">
              Book a test drive
            </BookingButton>
          }
        />
        <WideSection />
        <ProductSlider
          id="energy"
          tagline="Energy"
          heading="Power beyond the car"
          description="Solar and energy storage for home, business, and grid scale."
          cards={ENERGY_CARDS}
          headerCta={
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-base font-medium transition-colors hover:bg-surface"
            >
              View all
            </a>
          }
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
