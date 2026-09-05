"use client";

import { useState } from "react";
import { MapPin, Phone, Instagram, Mail } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { site, whatsappLink } from "@/lib/site";

const topics = [
  "Sıfır cihaz satın alma",
  "İkinci el cihaz",
  "Takas / değerleme",
  "Aksesuar",
  "Ekran / batarya değişimi",
  "Anakart onarımı",
  "Veri aktarımı / yazılım",
  "Diğer",
];

const contactRows = [
  {
    icon: MapPin,
    label: "Adres",
    value: `${site.address.line}, ${site.address.district}`,
    href: undefined as string | undefined,
  },
  { icon: Phone, label: "Telefon", value: site.phoneDisplay, href: site.phoneHref },
  {
    icon: Instagram,
    label: "Instagram",
    value: site.instagramHandle,
    href: site.instagramUrl,
  },
  { icon: Mail, label: "E-posta", value: site.email, href: site.emailHref },
];

export function Contact() {
  const [topic, setTopic] = useState(topics[0]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const composed = [
    `Konu: ${topic}`,
    name && `Ad: ${name}`,
    phone && `Telefon: ${phone}`,
    message && `Mesaj: ${message}`,
  ]
    .filter(Boolean)
    .join("\n");

  const mailHref = `mailto:${site.email}?subject=${encodeURIComponent(
    `Web sitesi — ${topic}`
  )}&body=${encodeURIComponent(composed)}`;

  return (
    <section id="iletisim" className="scroll-mt-24 bg-paper-2 py-24 md:py-32">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <h2 className="display-2 font-display text-ink">İletişim</h2>
          <p className="mt-4 text-lg text-slate">
            Formu doldurun, WhatsApp'ta hazır mesajla açılsın. Dilerseniz doğrudan
            arayın ya da mağazaya uğrayın.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="flex flex-col gap-8">
            <ul className="space-y-6">
              {contactRows.map((row) => (
                <li key={row.label} className="flex gap-4">
                  <span className="titanium-chip flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                    <row.icon className="h-5 w-5 text-ink" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-slate">{row.label}</p>
                    {row.href ? (
                      <a
                        href={row.href}
                        target={row.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-ink transition-colors hover:text-signal"
                      >
                        {row.value}
                      </a>
                    ) : (
                      <p className="text-pretty text-ink">{row.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-mist">
              <iframe
                title="Apple World mağaza konumu — Ziyapaşa, Adana"
                src={site.mapEmbedSrc}
                className="h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form
              className="surface-card p-6 md:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                window.open(whatsappLink(composed), "_blank", "noopener");
              }}
            >
              <div className="grid gap-5">
                <Field label="Konu">
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full rounded-xl border border-mist bg-white px-4 py-3 text-ink outline-none focus:border-signal"
                  >
                    {topics.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </Field>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Adınız">
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      autoComplete="name"
                      className="w-full rounded-xl border border-mist bg-white px-4 py-3 text-ink outline-none focus:border-signal"
                      placeholder="Ad Soyad"
                    />
                  </Field>
                  <Field label="Telefon">
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      inputMode="tel"
                      autoComplete="tel"
                      className="w-full rounded-xl border border-mist bg-white px-4 py-3 text-ink outline-none focus:border-signal"
                      placeholder="05xx xxx xx xx"
                    />
                  </Field>
                </div>

                <Field label="Mesajınız">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full resize-y rounded-xl border border-mist bg-white px-4 py-3 text-ink outline-none focus:border-signal"
                    placeholder="Cihaz modeli ve yaşadığınız durumu kısaca yazın."
                  />
                </Field>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="submit"
                    className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
                  >
                    WhatsApp'ta aç
                  </button>
                  <a
                    href={mailHref}
                    className="rounded-full border border-mist bg-white px-6 py-3 text-center text-sm font-medium text-ink transition-colors hover:border-ink"
                  >
                    E-posta ile gönder
                  </a>
                </div>
                <p className="text-xs text-slate">
                  Form gönderdiğinizde bilgiler yalnızca seçtiğiniz uygulamada
                  (WhatsApp veya e-posta) mesaj olarak hazırlanır; sitede
                  saklanmaz.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
      {children}
    </label>
  );
}
