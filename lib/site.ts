export const site = {
  name: "Apple World",
  fullName: "Apple World Ziyapaşa",
  url: "https://appleworldziyapasa.com",
  tagline: "Ziyapaşa · Adana",

  phoneDisplay: "+90 552 671 61 91",
  phoneE164: "+905526716191",
  phoneHref: "tel:+905526716191",

  email: "appleworldziyapasa@gmail.com",
  emailHref: "mailto:appleworldziyapasa@gmail.com",

  whatsappNumber: "905526716191",
  instagramHandle: "@appleworldziyapasa",
  instagramUrl: "https://www.instagram.com/appleworldziyapasa",

  address: {
    line: "Kurtuluş mah. Ramazanoğlu cad. Pandora sok. İş Apartmanı No:6/D",
    district: "Seyhan / Adana",
  },
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.8439502456765!2d35.320319376287115!3d36.99867157108883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15288ff06392dc21%3A0xb94e37fb6c294bd6!2sApple%20World!5e0!3m2!1str!2str!4v1709991245788!5m2!1str!2str",
  mapLink: "https://maps.app.goo.gl/",
} as const;

export const nav = [
  { label: "Satış & Takas", href: "/hizmetler/satis" },
  { label: "Aksesuar", href: "/hizmetler/aksesuar" },
  { label: "Teknik Servis", href: "/hizmetler/teknik-servis" },
  { label: "Yazılım & Veri", href: "/hizmetler/yazilim" },
] as const;

/** Formu WhatsApp'a yönlendiren hazır mesaj bağlantısı üretir. */
export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
