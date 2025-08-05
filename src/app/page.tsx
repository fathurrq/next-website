import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServiceHighlight from '@/components/ServiceHighlight';
import OurGoals from '@/components/OurGoals';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServiceHighlight />
      <OurGoals />
    </main>
  );
}