import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Parallax } from "@/components/motion/parallax";

const pillars = [
  {
    title: "Doğru analiz, doğru çözüm",
    body: "Anadolu pazarındaki ihtiyacı yakından tanıyoruz. Sadece en ucuz ürünü değil, kullanım ömrü boyunca sizi memnun edecek olanı öneriyoruz.",
  },
  {
    title: "Satış bittiğinde iş bitmiyor",
    body: "Kurulum, veri aktarımı ve kullanım eğitimi satışın parçası. Bir sorun çıktığında aynı kapıya geri dönüyorsunuz.",
  },
  {
    title: "Şeffaf fiyat ve garanti",
    body: "Parça kalitesi, işlem süresi ve garanti kapsamı işleme başlamadan önce yazılı olarak konuşuluyor.",
  },
];

export function About() {
  return (
    <section id="hakkimizda" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <Reveal>
          <h2 className="display-2 font-display text-ink">
            Teknoloji tutkunları için, teknolojiyi bilen bir ekip
          </h2>
          <div className="mt-6 space-y-4 text-pretty text-lg leading-relaxed text-slate">
            <p>
              Apple World olarak önceliğimiz, mutluluk veren teknoloji ürünlerini
              ve aksesuarlarını en özgün şekilde sizlere sunmak. Telekomünikasyon
              ürünleri ve aksesuarları alanındaki ihtiyaçları doğru okuyarak fark
              yaratıyoruz.
            </p>
            <p>
              Rakiplerimizin aksine yalnızca düşük maliyetli tedariğe
              odaklanmıyor; kaliteyi ve müşteri memnuniyetini ön planda tutuyoruz.
              Teknik destek hizmetlerimizle yalnızca satışta değil, satıştan sonra
              da yanınızdayız.
            </p>
          </div>

          <dl className="mt-10 space-y-6">
            {pillars.map((p) => (
              <div key={p.title} className="border-l-2 border-signal/60 pl-5">
                <dt className="font-display text-lg font-semibold text-ink">
                  {p.title}
                </dt>
                <dd className="mt-1.5 text-slate">{p.body}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-mist">
            <Parallax distance={40} className="absolute inset-0">
              <Image
                src="/assets/master-is-ready-assemble-phone-fix-it-with-replacing-new-battery-screen-side-view.jpg"
                alt="Teknisyen yeni batarya ve ekranla telefonu birleştiriyor"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="scale-110 object-cover"
              />
            </Parallax>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
