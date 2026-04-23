"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navigation, profile } from "@/lib/portfolio-data";

import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#hero" className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground">
          {profile.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-muted transition hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="#contact" className="button-secondary hidden sm:inline-flex">
            Contact Me
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line/60 bg-surface/70 text-foreground transition hover:border-accent/40 hover:text-accent md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line/60 bg-background/95 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted transition hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
