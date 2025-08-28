import ContactUsSection from "@/components/ContactUsSection";
import DigitalPlatform from "../components/DigitalPlatform";
import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";

export default function Page() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <PageTransition />

      {/* Hero Section */}
      <Hero
        routes={[
          { text: "Home", href: "/" },
          {
            text: "Services",
            href: "/our-services",
          },
          { text: "Classification" },
        ]}
        backgroundClass="bg-[url('/classification-bg.jpg')]"
        title={"Floating Offshore"}
        description={
          "Learn about the process for classifying floating offshore structures."
        }
      />

      <DigitalPlatform />
      <ContactUsSection />
    </div>
  );
}
