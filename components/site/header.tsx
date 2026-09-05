"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { nav, site } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={false}
      animate={{
        height: scrolled ? 56 : 76,
        backgroundColor: scrolled ? "rgba(251,251,253,0.72)" : "rgba(251,251,253,0)",
        borderColor: scrolled ? "hsl(240 9% 90%)" : "hsl(240 9% 90% / 0)",
      }}
      transition={{ duration: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b",
        scrolled && "glass"
      )}
    >
      <div className="container-x flex h-full items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-baseline gap-2 font-display text-lg font-semibold tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          {site.name}
          <span className="text-[0.7rem] font-medium tracking-wide text-slate">
            {site.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#iletisim"
            className="hidden rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Randevu al
          </Link>
          <button
            type="button"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="absolute inset-x-0 top-full border-b border-mist bg-paper shadow-[0_24px_48px_-24px_rgba(10,10,11,0.25)] md:hidden"
          >
            <nav className="container-x flex flex-col py-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-mist/70 py-3.5 text-base font-medium text-ink last:border-0"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#iletisim"
                onClick={() => setOpen(false)}
                className="mt-4 rounded-full bg-ink px-4 py-3 text-center text-sm font-medium text-paper"
              >
                Randevu al
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
