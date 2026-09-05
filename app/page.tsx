import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { Stats } from "@/components/site/stats";
import { ServiceOverview } from "@/components/site/service-overview";
import { About } from "@/components/site/about";
import { Contact } from "@/components/site/contact";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <ServiceOverview />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
