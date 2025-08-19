import HeroSection from "@/components/HeroSection";
import ServiceHighlight from "@/components/ServiceHighlight";
import StatSection from "@/components/StatsSection";
import NewsSection from "@/components/NewsSection";
import WhyTrustSection from "@/components/WhyTrustSection";
import WhyCrossfade from "@/components/WhySnap";
import ScrollController from "@/components/ScrollController";
import ArticleSection from "@/components/ArticleSection";
import NewsSection2, { NewsDivider } from "@/components/NewsSection2";
import OurServicesSection from "@/components/OurServicesSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <OurServicesSection />
      <WhyTrustSection />
      <WhyCrossfade />
      <ArticleSection />
      <NewsDivider />
      <NewsSection2 />
    </main>
  );
}
