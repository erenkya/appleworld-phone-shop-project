import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Apple World — Ziyapaşa · Adana | Satış, Aksesuar, Teknik Servis",
    template: "%s | Apple World Ziyapaşa",
  },
  description:
    "Adana Ziyapaşa'da sıfır ve ikinci el iPhone, iPad, Apple Watch satışı; premium aksesuar; mikroskobik anakart onarımı, ekran ve batarya değişimi; veri aktarımı ve yazılım desteği.",
  keywords: [
    "Apple World Adana",
    "Ziyapaşa telefon",
    "iPhone tamir Adana",
    "ikinci el iPhone Adana",
    "ekran değişimi",
    "anakart onarımı",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    title: "Apple World — Ziyapaşa · Adana",
    description:
      "Sıfır ve ikinci el cihaz satışı, premium aksesuar ve profesyonel teknik servis.",
    url: site.url,
    siteName: "Apple World Ziyapaşa",
  },
  alternates: { canonical: site.url },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ElectronicsStore",
  name: "Apple World Ziyapaşa",
  image: `${site.url}/assets/iphone__kqge21l9n26q_og.png`,
  "@id": site.url,
  url: site.url,
  telephone: site.phoneE164,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kurtuluş mah. Ramazanoğlu cad. Pandora sok. İş Apartmanı No:6/D",
    addressLocality: "Seyhan",
    addressRegion: "Adana",
    addressCountry: "TR",
  },
  geo: { "@type": "GeoCoordinates", latitude: 36.99867, longitude: 35.32032 },
  sameAs: [site.instagramUrl],
  priceRange: "₺₺",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${sora.variable} ${manrope.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
