import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import CtaSection from "@/components/CtaSection";
import FloatingCall from "@/components/FloatingCall";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ServiceArea from "@/components/ServiceArea";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <About />
        <Reviews />
        <Gallery />
        <HowItWorks />
        <ServiceArea />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
