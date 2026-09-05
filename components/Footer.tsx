import Image from "next/image";

const FOOTER_LINKS = ["Privacy", "Terms", "Careers", "Support"];

export default function Footer() {
  return (
    <footer className="w-full border-t border-border px-6 py-12 sm:px-8 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <Image src="/assets/logo-wide.svg" alt="Logo" width={70} height={36} className="h-7 w-auto" />

        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <a key={link} href="#" className="text-sm text-ink/70 hover:text-ink">
              {link}
            </a>
          ))}
        </nav>

        <p className="text-sm text-ink/60">© {new Date().getFullYear()} Model 3. All rights reserved.</p>
      </div>
    </footer>
  );
}
