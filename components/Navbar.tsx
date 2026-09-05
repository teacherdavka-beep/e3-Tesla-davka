"use client";

import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Vehicles", href: "#hero" },
  { label: "Energy", href: "#energy" },
  { label: "Charging", href: "#charging" },
  { label: "Discover", href: "#contact" },
  { label: "Shop", href: "#gallery" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-16">
        <a href="#hero" className="shrink-0" onClick={() => setOpen(false)}>
          <Image src="/assets/logo-wide.svg" alt="Logo" width={70} height={36} className="h-8 w-auto" priority />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="text-base transition-colors hover:text-accent">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border bg-white px-6 py-4 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base hover:bg-surface"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
