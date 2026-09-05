"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Parallax } from "@/components/motion/parallax";
import { whatsappLink } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const seq: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.09, delayChildren: 0.05 } },
  };
  const rise: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.7, ease: EASE } },
  };

  return (
    <section className="relative overflow-hidden pt-32 md:pt-40">
      {/* arka plan halesi — parallax */}
      <Parallax
        distance={reduce ? 0 : 70}
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center"
      >
        <div className="h-[520px] w-[820px] max-w-[120vw] rounded-full bg-[radial-gradient(closest-side,rgba(0,102,255,0.10),transparent)] blur-2xl" />
      </Parallax>

      <div className="container-x">
        <motion.div
          variants={seq}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={rise}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-mist bg-white px-3.5 py-1.5 text-sm text-slate"
          >
            <span className="titanium-chip inline-block h-2 w-2 rounded-full" />
            Ziyapaşa, Adana · Apple World
          </motion.p>

          <motion.h1
            variants={rise}
            className="display-1 font-display font-semibold text-ink"
          >
            Yeni cihaz. Değerinde takas.
            <br className="hidden sm:block" /> Kusursuz onarım.
          </motion.h1>

          <motion.p
            variants={rise}
            className="mx-auto mt-6 text-pretty text-lg leading-relaxed text-slate md:text-xl"
          >
            Sıfır ve garantili ikinci el iPhone, iPad, Apple Watch; premium aksesuar
            ve mikroskop altında teknik servis. Satıştan sonra da yanınızdayız.
          </motion.p>

          <motion.div
            variants={rise}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              href="#hizmetler"
              className="w-full rounded-full bg-ink px-6 py-3 text-center text-sm font-medium text-paper transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              Hizmetleri keşfet
            </Link>
            <a
              href={whatsappLink(
                "Merhaba, Apple World'e web sitesi üzerinden ulaşıyorum. Bir sorum olacaktı."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border border-mist bg-white px-6 py-3 text-center text-sm font-medium text-ink transition-colors hover:border-ink sm:w-auto"
            >
              WhatsApp'tan yaz
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={rise}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.4 }}
          className="relative mx-auto mt-14 max-w-4xl md:mt-20"
        >
          <Parallax distance={reduce ? 0 : 36}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.75rem] border border-mist bg-paper-2 shadow-[0_40px_120px_-40px_rgba(10,10,11,0.35)]">
              <Image
                src="/assets/iphone__kqge21l9n26q_og.png"
                alt="iPhone ailesi"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 900px"
                className="object-cover"
              />
            </div>
          </Parallax>
        </motion.div>
      </div>
    </section>
  );
}
