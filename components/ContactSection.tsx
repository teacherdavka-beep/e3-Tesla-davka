import Image from "next/image";
import ContactForm from "./ContactForm";

const CONTACT_CARDS = [
  {
    icon: "/assets/icon-mail.svg",
    title: "Email",
    description: "Write to us anytime",
    linkLabel: "hello@example.com",
    href: "mailto:hello@example.com",
  },
  {
    icon: "/assets/icon-call.svg",
    title: "Phone",
    description: "Call the team",
    linkLabel: "+1 (555) 000-0000",
    href: "tel:+15550000000",
  },
  {
    icon: "/assets/icon-tooltip.svg",
    title: "Chat",
    description: "Talk to support in real time",
    linkLabel: "Start a chat",
    href: "#contact",
  },
  {
    icon: "/assets/icon-location.svg",
    title: "Visit",
    description: "See it in person",
    linkLabel: "123 Sample St, Sydney NSW 2000 AU",
    href: "#",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="w-full px-6 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex max-w-2xl flex-col gap-4">
          <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">Contact</p>
          <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">Talk to us</h2>
          <p className="text-lg text-ink/70">A real person answers. No machines. No waiting rooms.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-6 rounded-2xl border border-border p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-surface">
                <Image src={card.icon} alt="" width={28} height={28} />
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-xl font-medium">{card.title}</p>
                  <p className="text-base text-ink/60">{card.description}</p>
                </div>
                <a href={card.href} className="text-base font-medium text-accent underline underline-offset-4">
                  {card.linkLabel}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
