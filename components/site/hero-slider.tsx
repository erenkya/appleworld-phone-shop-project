"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface HeroSlide {
  id: string;
  image: string;
  alt: string;
  badge: string;
  title: string;
  description: string;
  href: string;
  bgDark?: boolean;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "crimson",
    image: "/assets/iphone-crimson.webp",
    alt: "Yeni Nesil iPhone Crimson Titanyum",
    badge: "Yeni Seri",
    title: "iPhone Crimson Titanyum",
    description: "Özel renk seçenekleri ve sıfır / garantili cihaz güvencesi",
    href: "/hizmetler/satis",
    bgDark: false,
  },
  {
    id: "duo",
    image: "/assets/iphone-duo.jpg",
    alt: "Katlanabilir iPhone Duo & iOS Deneyimi",
    badge: "İnovasyon",
    title: "Katlanabilir Ekran & iOS Arayüzü",
    description: "Geleceğin ekran formu, kesintisiz uygulama ve veri deneyimi",
    href: "/hizmetler/yazilim",
    bgDark: false,
  },
  {
    id: "accessories",
    image: "/assets/apple-accessories.jpg",
    alt: "Apple MagSafe ve Koruma Aksesuarları",
    badge: "Orijinal Aksesuar",
    title: "MagSafe & Üst Düzey Koruma",
    description: "Orijinal kılıflar, cüzdan ve hızlı kablosuz şarj sistemleri",
    href: "/hizmetler/aksesuar",
    bgDark: true,
  },
  {
    id: "lineup",
    image: "/assets/iphone__kqge21l9n26q_og.png",
    alt: "iPhone Ailesi Modelleri",
    badge: "Geniş Seçenek",
    title: "Tüm iPhone Modelleri",
    description: "İhtiyacınıza uygun sıfır ve 50+ nokta testli ikinci el modeller",
    href: "/hizmetler/satis",
    bgDark: false,
  },
];

const AUTOPLAY_INTERVAL = 5500;

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reduce = useReducedMotion();

  const currentSlide = HERO_SLIDES[currentIndex];

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      goToNext();
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [goToNext, isPaused]);

  return (
    <div
      className="group/slider relative aspect-[16/10] w-full overflow-hidden rounded-[1.75rem] border border-mist bg-paper-2 shadow-[0_40px_120px_-40px_rgba(10,10,11,0.35)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Öne Çıkan Ürün ve Hizmetler"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          goToPrev();
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          goToNext();
        }
      }}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: reduce ? 1 : 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: reduce ? 1 : 1.01 }}
          transition={{ duration: reduce ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "absolute inset-0 flex items-center justify-center transition-colors duration-500",
            currentSlide.bgDark ? "bg-black" : "bg-paper-2"
          )}
        >
          <Image
            src={currentSlide.image}
            alt={currentSlide.alt}
            fill
            priority={currentIndex === 0}
            sizes="(max-width: 768px) 100vw, 900px"
            className={cn(
              "object-cover transition-transform duration-700 ease-out",
              currentSlide.bgDark && "object-contain"
            )}
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradyan gölgelendirme (metin ve kontrollerin okunabilirliği için) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />

      {/* Sol alt rozet ve bilgi kutusu */}
      <div className="absolute bottom-4 left-4 right-20 z-10 sm:bottom-6 sm:left-6 sm:right-28">
        <Link
          href={currentSlide.href}
          className="group/pill inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3.5 py-2 text-xs text-white backdrop-blur-md transition-colors hover:bg-black/60 sm:text-sm"
        >
          <span className="titanium-chip inline-block h-2 w-2 shrink-0 rounded-full" />
          <span className="font-semibold text-white/90">
            {currentSlide.badge}
          </span>
          <span className="text-white/40">·</span>
          <span className="truncate font-medium text-white/95">
            {currentSlide.title}
          </span>
          <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-white/70 transition-transform group-hover/pill:translate-x-0.5 group-hover/pill:-translate-y-0.5" />
        </Link>
      </div>

      {/* Gezinme okları (desktop ve mobil) */}
      <div className="absolute inset-y-0 left-3 z-10 flex items-center">
        <button
          onClick={goToPrev}
          aria-label="Önceki görsel"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/75 text-ink shadow-sm backdrop-blur-md transition-all hover:scale-105 hover:bg-white sm:opacity-0 sm:group-hover/slider:opacity-100"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      </div>

      <div className="absolute inset-y-0 right-3 z-10 flex items-center">
        <button
          onClick={goToNext}
          aria-label="Sonraki görsel"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/75 text-ink shadow-sm backdrop-blur-md transition-all hover:scale-105 hover:bg-white sm:opacity-0 sm:group-hover/slider:opacity-100"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Sağ alt gösterge noktaları */}
      <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 sm:bottom-6 sm:right-6">
        {HERO_SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(idx)}
            aria-label={`${idx + 1}. görsele git: ${slide.title}`}
            className={cn(
              "h-2 rounded-full transition-all duration-300 focus:outline-none",
              currentIndex === idx
                ? "w-6 bg-white shadow-sm"
                : "w-2 bg-white/45 hover:bg-white/75"
            )}
          />
        ))}
      </div>
    </div>
  );
}
