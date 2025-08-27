import ContactUsSection from "@/components/ContactUsSection";
import PageTransition from "@/components/page-transition";
import NewsSection from "./components/NewsSection";
import DigitalPlatform from "./components/DigitalPlatform";
import TabContent from "./components/TabContent";

export default function OurServices() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <PageTransition />

      <TabContent />
      <DigitalPlatform />

      <ContactUsSection />
      <NewsSection />
    </div>
  );
}
