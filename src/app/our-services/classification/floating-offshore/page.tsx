import ContactUsSection from "@/components/ContactUsSection";
import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";
import DigitalPlatform from "../../components/DigitalPlatform";
import Image from "next/image";
import ThreeItemSection from "../../components/ThreeItemSection";
import FancyTitle from "@/components/FancyTitle";
import FeatureSection from "../../components/FeatureSection";

const logisticsData = [
  {
    title: "Floating Production & Storage",
    content:
      "Optimized sea-based logistics with real-time tracking and seamless coordination.",
    imageSrc: "/our-services/program/floating-offshore.png",
  },
  {
    title: "Drilling & Exploration",
    content:
      "Fast, secure air logistics powered by intelligent routing and cloud integration.",
    imageSrc: "/our-services/program/floating-offshore.png",
  },
  {
    title: "Support & Infrastructure",
    content:
      "Reliable land-based delivery with smart scheduling and route optimization tools.",
    imageSrc: "/our-services/program/floating-offshore.png",
  },
];

const serviceFeatures = [
  {
    title: "Technical & Commercial Proposals",
    content:
      "We develop detailed proposals for classification and survey services, outlining the technical scope and commercial terms to ensure full alignment with your project requirements.",
    icon: "FileText" as const,
    highlighted: true, // This card will be highlighted
  },
  {
    title: "Client Consultation & Partnership",
    content:
      "We engage in proactive meetings with clients, owners, and operators to discuss technical specifications, project timelines, and regulatory compliance, ensuring a collaborative approach to every project.",
    icon: "Handshake" as const,
  },
  {
    title: "Survey Coordination & Execution",
    content:
      "As the central coordinator for all offshore surveys, our division manages the entire process. This includes detailed survey briefings, real-time monitoring of survey implementation, and meticulous verification of all survey reports.",
    icon: "FileArchive" as const,
  },
  {
    title: "Certification & Compliance",
    content:
      "We issue all necessary classification certificates, including temporary and permanent documentation (e.g., Document of Compliance - DOC), and manage the registration of all BKI-classed offshore assets.",
    icon: "FileCheck2" as const,
  },
];

const milestones = [
  { year: 2011, description: "Established dedicated offshore working group." },
  { year: 2013, description: "Formalized Oil & Gas Unit." },
  {
    year: 2014,
    description: "Restructured into comprehensive Offshore Division.",
  },
];

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
      <section className="w-full 2xl:py-20 md:py-16 py-12 2xl:px-28 md:px-24 px-8 bg-white flex lg:flex-row flex-col justify-center items-center lg:gap-16 gap-8">
        <Image
          src={"/our-services/program/floating-offshore.png"}
          alt={"Introduction"}
          width={800}
          height={570}
          className="object-cover lg:h-[45vh] h-[300px] rounded-lg"
        />
        <div className="flex flex-col justify-center 2xl:gap-8 md:gap-6 gap-4">
          <p className="2xl:text-6xl md:text-5xl text-4xl font-bold text-[#0A436A]">
            Floating Offshore
          </p>
          <div className="w-full flex flex-col justify-center items-center 2xl:gap-8 md:gap-4 gap-2">
            <p className="2xl:text-3xl md:text-2xl text-xl text-[#0A436A] text-justify">
              At Biro Klasifikasi Indonesia (BKI), we provide world-class
              classification services for the entire spectrum of floating
              offshore assets. Our dedicated Offshore Division is the center of
              excellence for ensuring the safety, integrity, and compliance of
              the complex facilities that drive the global oil and gas industry.
            </p>
          </div>
        </div>
      </section>

      <ThreeItemSection
        mainTitle="Our expertise"
        subTitle="Our expertise covers all major types of floating and offshore structures, including:"
        cards={logisticsData}
      />

      <section className="w-full 2xl:py-20 md:py-16 py-12 2xl:px-28 md:px-24 px-8 bg-[#0A436A] text-white flex lg:flex-row flex-col justify-center items-center lg:gap-16 gap-8">
        <div className="flex flex-col justify-center 2xl:gap-12 md:gap-8 gap-4 w-full">
          <p className="2xl:text-6xl md:text-5xl text-4xl font-bold text-white">
            <FancyTitle title="Our Evolution:" />
            <br />
            <span className="2xl:text-3xl md:text-2xl text-xl font-semibold text-white">
              A Commitment to the Offshore Sector
            </span>
          </p>
          <div className="w-full flex flex-col justify-center items-center 2xl:gap-8 md:gap-4 gap-2">
            <p className="2xl:text-2xl md:text-xl text-lg text-white">
              BKI&apos;s commitment to the offshore industry is built on a
              foundation of responsiveness and strategic growth. We evolve in
              response to increasing client demand and stakeholder requests for
              specialized services.
            </p>
            <p className="2xl:text-2xl md:text-xl text-lg text-white">
              This progression reflects our dedication to developing deep
              expertise and providing focused support for this critical sector.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start md:pl-12 text-white">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="flex flex-row items-start relative mb-12 last:mb-0"
            >
              {/* Vertical Line and Circle */}
              <div className="relative">
                {/* Circle Indicator */}
                <div className="flex items-center justify-center w-24 h-24 rounded-full bg-bki-orange text-white text-lg md:text-2xl font-bold">
                  {milestone.year}
                </div>
                {/* Vertical Line */}
                {/* {index < milestones.length - 1 && (
                  <div className="absolute left-1/2 top-24 bottom-0 w-0.5 bg-blue-300 transform -translate-x-1/2"></div>
                )} */}
              </div>

              {/* Milestone Content */}
              <div className="ml-6 flex-1">
                <p className="text-lg md:text-2xl">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FeatureSection
        mainTitle="Core Services & Client Engagement"
        description="The BKI Offshore Division is your partner through every stage of an asset's lifecycle. Our scope of services is designed to be comprehensive, transparent, and client-focused."
        subTitle="Why Choose Us"
        features={serviceFeatures}
      />

      <section className="w-full 2xl:py-20 md:py-16 py-12 2xl:px-28 md:px-24 px-8 bg-[#0A436A] text-white flex lg:flex-row-reverse flex-col justify-center items-center lg:gap-16 gap-8">
        <div className="flex flex-col justify-center 2xl:gap-12 md:gap-8 gap-4">
          <p className="2xl:text-6xl md:text-5xl text-4xl font-bold text-white">
            <FancyTitle title="Technology-Driven Solutions" />
          </p>
          <div className="w-full flex flex-col justify-center items-center 2xl:gap-8 md:gap-4 gap-2">
            <p className="2xl:text-2xl md:text-xl text-lg text-white">
              To support our rigorous engineering reviews and complex analyses, the BKI Offshore Division utilizes a suite of advanced technical software. This includes both proprietary, in-house developed applications and licensed, industry-leading software for structural analysis, hydrodynamics, and risk assessment. This technological capability ensures our reviews are accurate, efficient, and at the forefront of industry practice
            </p>
          </div>
        </div>
        <Image
          src={"/our-services/plan-approval-introduction.jpg"}
          alt={"Introduction"}
          width={800}
          height={570}
          className="object-cover lg:h-[65vh] h-[450px] rounded-lg"
        />
      </section>

      {/*Technology Section*/}
      <section className="w-full 2xl:py-20 md:py-16 py-12 2xl:px-28 md:px-24 px-8 bg-white flex lg:flex-row flex-col justify-center items-center lg:gap-16 gap-8">
        <div className="flex flex-col justify-center 2xl:gap-12 md:gap-8 gap-4">
          <p className="2xl:text-5xl md:text-4xl text-3xl font-bold text-[#0A436A]">
            <FancyTitle title="Proven Experience and Global Collaboration" />
          </p>
          <div className="w-full flex flex-col justify-center items-center 2xl:gap-8 md:gap-4 gap-2">
            <p className="2xl:text-2xl md:text-xl text-lg text-[#0A436A]">
             BKI has an extensive track record in the classification of a diverse range of floating facilities, from newbuilds to complex conversion projects. Our experience encompasses both single-class and dual-class arrangements, demonstrating our capability to work seamlessly alongside other leading international classification societies such as ABS, LR, NK, DNV, and KR.
            </p>
            <p className="2xl:text-2xl md:text-xl text-lg text-[#0A436A]">
              Our technical expertise is recognized on a global scale. A prime example of our collaborative strength is BKI&apos;s participation in a consortium with ABS for the Front End Engineering Design (FEED) phase of the major INPEX Masela project. This involvement underscores our position as a trusted partner for even the most demanding and technologically advanced offshore projects operating in Indonesia and beyond.
            </p>
          </div>
        </div>
        <Image
          src={"/our-services/plan-approval-introduction.jpg"}
          alt={"Introduction"}
          width={800}
          height={570}
          className="object-cover lg:h-[65vh] h-[450px] rounded-lg"
        />
      </section>

      <DigitalPlatform />
      <ContactUsSection />
    </div>
  );
}
