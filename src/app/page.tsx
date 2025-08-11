
import HeroSection from '@/components/HeroSection';
import ServiceHighlight from '@/components/ServiceHighlight';
import StatSection from "@/components/StatsSection"
import NewsSection from '@/components/NewsSection';
import ScrollController from '@/components/ScrollController';

export default function Home() {
  return (
    <ScrollController>
      <HeroSection />
      <ServiceHighlight />
      <StatSection />
      <NewsSection />
    </ScrollController>
  );
}