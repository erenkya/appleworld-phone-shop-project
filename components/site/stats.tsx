import { stats } from "@/lib/services";
import { Reveal, RevealItem } from "@/components/motion/reveal";

export function Stats() {
  return (
    <section className="border-y border-mist bg-white py-16 md:py-20">
      <div className="container-x">
        <Reveal
          as="ul"
          stagger={0.08}
          className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4"
        >
          {stats.map((s) => (
            <RevealItem as="li" key={s.label} className="min-w-0">
              <p className="font-display text-3xl font-semibold leading-none tracking-tight text-ink md:text-4xl">
                {s.value}
              </p>
              <p className="mt-3 text-sm leading-snug text-slate">{s.label}</p>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
