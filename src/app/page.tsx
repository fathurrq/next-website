
import HeroSection from '@/components/HeroSection';
import ServiceHighlight from '@/components/ServiceHighlight';
import StatSection from "@/components/StatsSection"
import NewsSection from '@/components/NewsSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServiceHighlight />
      <StatSection/>
      <NewsSection/>
    </main>
  );
}