import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check } from "lucide-react";
import type { ServiceCategory } from "@/lib/services";
import { repairProcess } from "@/lib/services";
import { slugify } from "@/lib/utils";
import { site, whatsappLink } from "@/lib/site";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { SectionNav } from "@/components/site/section-nav";
import { Reveal, RevealItem } from "@/components/motion/reveal";
import { Parallax } from "@/components/motion/parallax";

export function ServiceDetail({ category }: { category: ServiceCategory }) {
  const navItems = category.items.map((it) => ({
    id: slugify(it.title),
    label: it.title,
  }));

  return (
    <>
      <Header />
      <main className="pt-14 md:pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="container-x">
            <Reveal>
              <Link
                href="/#hizmetler"
                className="inline-flex items-center gap-2 text-sm text-slate transition-colors hover:text-ink"
              >
                <ArrowLeft className="h-4 w-4" />
                Tüm hizmetler
              </Link>
              <h1 className="display-1 mt-6 font-display text-ink">
                {category.name}
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate md:text-xl">
                {category.summary}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappLink(
                    `Merhaba, ${category.name} hakkında bilgi almak istiyorum.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-ink px-6 py-3 text-center text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
                >
                  WhatsApp'tan sor
                </a>
                <a
                  href={site.phoneHref}
                  className="rounded-full border border-mist bg-white px-6 py-3 text-center text-sm font-medium text-ink transition-colors hover:border-ink"
                >
                  {site.phoneDisplay}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="mt-12">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[1.75rem] border border-mist bg-paper-2 md:aspect-[21/9]">
                <Parallax distance={30} className="absolute inset-0">
                  <Image
                    src={category.image}
                    alt={category.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 1120px"
                    className="scale-105 object-cover"
                  />
                </Parallax>
              </div>
            </Reveal>
          </div>
        </section>

        <SectionNav items={navItems} />

        {/* Hizmet maddeleri */}
        <div className="container-x divide-y divide-mist">
          {category.items.map((item) => (
            <section
              key={item.title}
              id={slugify(item.title)}
              className="scroll-mt-32 py-14 md:py-20"
            >
              <Reveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
                  {item.title}
                </h2>
                <div>
                  <p className="text-pretty text-lg leading-relaxed text-slate">
                    {item.description}
                  </p>
                  {item.points && (
                    <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                      {item.points.map((p) => (
                        <li key={p} className="flex gap-3 text-ink">
                          <Check className="mt-0.5 h-5 w-5 shrink-0 text-signal" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            </section>
          ))}
        </div>

        {/* Teknik servise özel: onarım süreci (gerçek sıra → numaralı) */}
        {category.slug === "teknik-servis" && (
          <section className="bg-ink py-24 text-paper md:py-32">
            <div className="container-x">
              <Reveal>
                <h2 className="display-2 font-display text-paper">
                  Cihazınızı bıraktığınızda ne oluyor?
                </h2>
                <p className="mt-4 max-w-xl text-lg text-white/70">
                  Süreç dört adımdan oluşur ve her adımda onayınız alınır.
                </p>
              </Reveal>
              <Reveal
                as="ul"
                stagger={0.1}
                className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4"
              >
                {repairProcess.map((step, i) => (
                  <RevealItem
                    as="li"
                    key={step.title}
                    className="bg-ink p-7"
                  >
                    <span className="font-display text-sm font-semibold text-white/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-semibold text-paper">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      {step.description}
                    </p>
                  </RevealItem>
                ))}
              </Reveal>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-24 md:py-28">
          <div className="container-x">
            <Reveal className="surface-card flex flex-col items-start gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-12">
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
                  Emin değil misiniz? Önce konuşalım.
                </h2>
                <p className="mt-2 text-slate">
                  {site.address.line}, {site.address.district} · Ücretsiz ön
                  değerlendirme.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Link
                  href="/#iletisim"
                  className="rounded-full bg-ink px-6 py-3 text-center text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
                >
                  İletişim formu
                </Link>
                <a
                  href={whatsappLink(
                    `Merhaba, ${category.name} için yardım istiyorum.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-mist bg-white px-6 py-3 text-center text-sm font-medium text-ink transition-colors hover:border-ink"
                >
                  WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
