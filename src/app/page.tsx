
import HeroSection from '@/components/HeroSection';
import ServiceHighlight from '@/components/ServiceHighlight';
import StatSection from "@/components/StatsSection"
import NewsSection from '@/components/NewsSection';
import WhyTrustSection from "@/components/WhyTrustSection";
import WhyCrossfade from '@/components/WhySnap';
import ScrollController from '@/components/ScrollController';

export default function Home() {
  return (
    // <ScrollController>
    <main className="min-h-screen">
      <HeroSection />
      <ServiceHighlight />
      <WhyTrustSection/>
      <WhyCrossfade />
      <StatSection/>
      {/* <NewsSection/> */}
      </main>
    // </ScrollController>
  );
}