import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServiceHighlight from '@/components/ServiceHighlight';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServiceHighlight />
    </main>
  );
}