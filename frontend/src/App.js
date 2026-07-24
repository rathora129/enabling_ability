import "@/App.css";
import { Toaster } from "@/components/ui/sonner";
import { useLenis } from "@/hooks/useLenis";
import { Preloader } from "@/components/site/Preloader";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustMarquee } from "@/components/site/TrustMarquee";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { HowItWorks } from "@/components/site/HowItWorks";
import { ServiceAreas } from "@/components/site/ServiceAreas";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { CTASection } from "@/components/site/CTASection";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { MobileCTA } from "@/components/site/MobileCTA";

function App() {
  useLenis();

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased">
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <TrustMarquee />
        <About />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <ServiceAreas />
        <BeforeAfter />
        <Gallery />
        <Testimonials />
        <FAQ />
        <CTASection />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
      <MobileCTA />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
