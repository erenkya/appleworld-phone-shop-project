"use client";
import Link from "next/link";
import Image from "next/image";

import { ImageSlider, type SliderImage } from "./image-slider";

import {
  Mail,
  MapPin,
  Phone,
  Smartphone,
  PenToolIcon as Tool,
  ShoppingBag,
  Instagram,
  Apple,
} from "lucide-react";

import { DiApple } from "react-icons/di";
import { Button } from "@/components/ui/button";

export default function Home() {
  const images: SliderImage[] = [
    {
      url: "/assets/iphone__kqge21l9n26q_og.png?height=650&width=950",
      alt: "Slide 1",
    },
    {
      url: "/assets/product_color_blueBlack_plus_PC.png?height=500&width=800",
      alt: "Slide 2",
    },
    {
      url: "/assets/apple-watch-series-6-ve-watch-se-turkiyede-satisa-cikti-1.jpg?height=500&width=800",
      alt: "Slide 3",
    },
    {
      url: "/assets/Apple-AirPods-hero-240909-lp.jpg.og.jpg?height=500&width=800",
      alt: "Slide 4",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <DiApple className="h-6 w-6 text-primary" />

            <span className="text-xl font-bold">Apple World</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#home"
              className="text-sm font-medium hover:text-primary"
            >
              Ana Sayfa
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium hover:text-primary"
            >
              Hizmetlerimiz
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary"
            >
              İletişim
            </Link>
          </nav>
          <Link href="#contact">
            <Button>Bize Ulaşın</Button>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section id="home" className="relative">
          <div className="container py-24 md:py-32">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Apple ve Android Dünyasının{" "}
                  <span className="text-primary">Güvenilir Adresi</span>
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Apple World olarak, en kaliteli Apple ürünleri ve Android
                  cihazları en uygun fiyatlarla sunuyoruz.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="#services">
                    <Button size="lg">Hizmetlerimiz</Button>
                  </Link>
                  <Link href="#contact">
                    <Button size="lg" variant="outline">
                      İletişime Geçin
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <ImageSlider images={images} />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-muted py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Hizmetlerimiz
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Tüm Apple ve Android ihtiyaçlarınız için tek adres
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <ShoppingBag className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">
                  Sıfır & İkinci El Alım Satım
                </h3>
                <p className="mt-2 text-muted-foreground">
                  En yeni Apple ürünleri ve kaliteli ikinci el cihazlar
                  garantili olarak mağazamızda sizleri bekliyor.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <Tool className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Tamir & Teknik Servis</h3>
                <p className="mt-2 text-muted-foreground">
                  Uzman ekibimiz ile iPhone, iPad ve diğer cihazlarınız için
                  hızlı ve güvenilir tamir hizmeti sunuyoruz.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Aksesuar Satışı</h3>
                <p className="mt-2 text-muted-foreground">
                  Orijinal ve kaliteli aksesuarlar ile cihazlarınızı koruyun ve
                  kişiselleştirin.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Neden Biz?
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Yıllardır sektörde edindiğimiz tecrübe ile fark yaratıyoruz
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/assets/master-is-ready-assemble-phone-fix-it-with-replacing-new-battery-screen-side-view.jpg"
                  alt="Apple ürünleri"
                  width={800}
                  height={800}
                  className="object-cover"
                  priority
                />
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold">Uzman Kadro</h3>
                  <p className="text-muted-foreground">
                    Apple sertifikalı teknisyenlerimiz ile en kaliteli hizmeti
                    sunuyoruz.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold">Güvenilir Hizmet</h3>
                  <p className="text-muted-foreground">
                    Tüm ürünlerimiz ve hizmetlerimiz garantilidir. Müşteri
                    memnuniyeti önceliğimizdir.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold">Uygun Fiyat</h3>
                  <p className="text-muted-foreground">
                    Kaliteli ürün ve hizmetleri en uygun fiyatlarla sunuyoruz.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold">Hakkımızda</h3>
                  <h3 className="text-l font-bold">
                    Teknoloji Tutkunları İçin En İyi Deneyim!
                  </h3>
                  <p className="text-muted-foreground">
                    Apple World olarak önceliğimiz,
                    <span className="font-bold">mutluluk veren </span>
                    teknoloji ürünleri ve aksesuarlarını en özgün şekilde
                    sizlere sunmak! Mağazalarımızın bulunduğu tüm lokasyonlarda
                    en iyi hizmeti vermeyi hedefliyor, özellikle Anadolu
                    pazarında Telekomünikasyon ürünleri ve aksesuarları
                    alanındaki ihtiyaçları doğru analiz ederek fark yaratıyoruz.
                    Rakiplerimizin aksine sadece düşük maliyetli ürün tedariğine
                    odaklanmıyor, kaliteyi ve müşteri memnuniyetini ön planda
                    tutuyoruz. Teknik destek hizmetlerimizle yalnızca satış
                    sürecinde değil, satış sonrasında da yanınızdayız! Ürün
                    kullanımıyla ilgili sunduğumuz eğitimler ve profesyonel
                    desteğimiz sayesinde Apple World, teknoloji severlerin ilk
                    tercihi olmayı sürdürüyor. Apple World ailesine katılın,
                    teknolojiyi en iyi hizmetle deneyimleyin!
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/assets/pexels-cytonn-955395.jpg"
                  alt="Apple ürünleri"
                  width={800}
                  height={800}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-muted py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                İletişim
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Sorularınız için bize ulaşın
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-3">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Adres</h3>
                    <p className="text-muted-foreground">
                      Kutulmuş mah. Ramazanoğlu cad. Pandora sok. İş Apartmanı
                      No:6/D Adana/Ziyapaşa
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Telefon</h3>
                    <a href="tel:+905526716191" className="text-foreground">
                      +90 552 671 61 91
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Instagram className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Instagram</h3>
                    <a
                      href="https://www.instagram.com/appleworldziyapasa?igsh=d29xazVmNnBoY3du"
                      className="text-foreground"
                    >
                      @appleworldziyapasa
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">E-posta</h3>
                    <a
                      href="mailto:appleworldziyapasa@gmail.com"
                      className="text-foreground"
                    >
                      appleworldziyapasa@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm h-full">
                <h3 className="text-xl font-bold mb-4">Mağazamız</h3>
                <div className="h-[400px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.8439502456765!2d35.320319376287115!3d36.99867157108883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15288ff06392dc21%3A0xb94e37fb6c294bd6!2sApple%20World!5e0!3m2!1str!2str!4v1709991245788!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            {/* <Smartphone className="h-5 w-5 text-primary" /> */}
            <DiApple className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Apple World</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Apple World. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary"
            ></Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary"
            ></Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
