import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServiceHighlight from '@/components/ServiceHighlight';
import StatSection from "@/components/StatsSection"
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServiceHighlight />
      <StatSection/>
    </main>
  );
}