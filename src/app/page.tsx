
import HeroSection from '@/components/HeroSection';
import ServiceHighlight from '@/components/ServiceHighlight';
import StatSection from "@/components/StatsSection"
import NewsSection from '@/components/NewsSection';
import WhyTrustSection from "@/components/WhyTrustSection";
import WhyCrossfade from '@/components/WhySnap';
import ScrollController from '@/components/ScrollController';
import ArticleSection from '@/components/ArticleSection';
import NewsSection2 from '@/components/NewsSection2';
import OurServicesSection from "@/components/OurServicesSection";

export default function Home() {
  return (
    // <ScrollController>
    <main className="min-h-screen">
      <HeroSection />
        <OurServicesSection/>
      {/*<ServiceHighlight />*/}
      <WhyTrustSection/>
      <WhyCrossfade />
      <StatSection/>
      <ArticleSection />
      <div className='w-full h-16 bg-[#00385A]'></div>
      <NewsSection2 />
      {/* <NewsSection/> */}
      </main>
    // </ScrollController>
  );
}