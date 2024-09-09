import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Services } from "@/sections/Services";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Rights } from "@/sections/Rights";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Services />
      <Testimonials />
      <CallToAction />
      <Footer />
      <Rights />
    </>
  );
}
