import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { WhyUs } from '@/components/sections/WhyUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { Schedule } from '@/components/sections/Schedule';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp';

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full">
        <Hero />
        <Services />
        <WhyUs />
        <Testimonials />
        <Schedule />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
