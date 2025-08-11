
import HeroSection from '@/components/HeroSection';
import ServiceHighlight from '@/components/ServiceHighlight';
import StatSection from "@/components/StatsSection"
import NewsSection from '@/components/NewsSection';
import WhyTrustSection from "@/components/WhyTrustSection";
import WhyCrossfade from '@/components/WhySnap';


export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServiceHighlight />
      {/* <WhyTrustSection/> */}
      <WhyCrossfade />
      <StatSection/>
      <NewsSection/>
    </main>
  );
}