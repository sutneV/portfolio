import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import SelectedWorks from '@/components/sections/SelectedWorks';
import Skills from '@/components/sections/Skills';
import Philosophy from '@/components/sections/Philosophy';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <Hero />
      <SelectedWorks />
      <Skills />
      <Philosophy />
      <Footer />
    </main>
  );
}
