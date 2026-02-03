import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import ValueProps from '@/components/landing/value-props';
import Services from '@/components/landing/services';
import Faq from '@/components/landing/faq';
import Contact from '@/components/landing/contact';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <ValueProps />
        <Services />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
