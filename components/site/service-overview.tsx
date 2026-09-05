import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/services";
import { Reveal, RevealItem } from "@/components/motion/reveal";

export function ServiceOverview() {
  return (
    <section id="hizmetler" className="scroll-mt-24 bg-paper-2 py-24 md:py-32">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <h2 className="display-2 font-display text-ink">
            Dört alanda tam kapsam
          </h2>
          <p className="mt-4 text-lg text-slate">
            Bir cihazın satın alınmasından yıllar sonraki onarımına kadar her
            aşama için tek adres. Her başlığın altında ne yaptığımızı ayrıntısıyla
            anlattık.
          </p>
        </Reveal>

        <Reveal
          as="ul"
          stagger={0.09}
          className="mt-14 grid gap-5 sm:grid-cols-2"
        >
          {services.map((s) => (
            <RevealItem as="li" key={s.slug}>
              <Link
                href={`/hizmetler/${s.slug}`}
                className="surface-card group flex h-full flex-col overflow-hidden"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-paper-2">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 560px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {s.name}
                    </h3>
                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-slate transition-colors group-hover:text-signal" />
                  </div>
                  <p className="mt-3 text-pretty text-slate">{s.short}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.items.slice(0, 3).map((it) => (
                      <li
                        key={it.title}
                        className="rounded-full border border-mist bg-white px-3 py-1 text-xs text-slate"
                      >
                        {it.title}
                      </li>
                    ))}
                    {s.items.length > 3 && (
                      <li className="rounded-full border border-mist bg-white px-3 py-1 text-xs text-slate">
                        +{s.items.length - 3}
                      </li>
                    )}
                  </ul>
                </div>
              </Link>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
