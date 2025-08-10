
import HeroSection from '@/components/HeroSection';
import ServiceHighlight from '@/components/ServiceHighlight';
import StatSection from "@/components/StatsSection"
import NewsSection from '@/components/NewsSection';
import WhyTrustSection from "@/components/WhyTrustSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServiceHighlight />
      <WhyTrustSection/>
      <StatSection/>
      <NewsSection/>
    </main>
  );
}