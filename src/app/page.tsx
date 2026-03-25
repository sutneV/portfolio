import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import SelectedWorks from '@/components/sections/SelectedWorks';
import Philosophy from '@/components/sections/Philosophy';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black overflow-x-hidden">
      <Navigation />
      <Hero />
      <SelectedWorks />
      <Philosophy />
      <Footer />
    </main>
  );
}
