import ContactUsSection from "@/components/ContactUsSection";
import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";
import DigitalPlatform from "../../components/DigitalPlatform";
import DisclaimerSection from "../../components/Disclaimer";
import { OctagonAlert } from "lucide-react";
import Image from "next/image";
import FeatureSection from "../../components/FeatureSection";
export default function Page() {
  const reinstall = [
    {
      question: "Following Suspension",
      answer:
        "To lift a suspension, the vessel's owner must complete all overdue surveys, rectify all outstanding recommendations and deficiencies, and have the corrective actions verified by a BKI surveyor. Upon satisfactory completion, class will be reinstated, and the vessel's certificates will be revalidated.",
    },
    {
      question: "Following Withdrawal",
      answer:
        "Reinstatement of class after withdrawal is not automatic. The vessel must undergo a comprehensive set of surveys, equivalent to a vessel applying for BKI class for the first time, to ensure it fully complies with all applicable BKI Rules.",
    },
    {
      question: "For further clarification",
      answer:
        "on our policies, vessel owners and operators are encouraged to maintain open communication with their local BKI office.",
    },
  ];

  const classSuspend = [
  {
    title: "Overdue Surveys",
    content:
      "When an Annual, Intermediate, Special, or other required survey becomes overdue by more than three (3) months, unless the vessel is under attendance by a BKI surveyor for the completion of the survey.",
    icon: "CalendarX" as const,
    highlighted: true,
  },
  {
    title: "Unrepaired Damages",
    content:
      "When defects, damages, or structural failures are discovered that affect the vessel's seaworthiness, and corrective actions are not arranged to the satisfaction of the attending surveyor.",
    icon: "ShieldAlert" as const,
  },
  {
    title: "Failure to Report",
    content:
      "When an owner fails to inform BKI of damages or incidents that could reasonably be expected to impact the vessel's classification status.",
    icon: "AlertCircle" as const,
  },
  {
    title: "Non-Compliance with Recommendations",
    content:
      "When a recommendation or Condition of Class issued by a surveyor is not rectified within the specified timeframe.",
    icon: "ClipboardCheck" as const,
  },
  {
    title: "Unauthorized Modifications",
    content:
      "When significant repairs, alterations, or conversions affecting the vessel's structure or machinery are carried out without prior consultation and approval from BKI.",
    icon: "Wrench" as const,
  },
];

const classWithdraw = [
  {
    title: "At the Owner's Request",
    content: "Upon receiving a formal written request from the vessel's owner.",
    icon: "Mail" as const,
    highlighted: true,
  },
  {
    title: "Failure to Remedy Suspension",
    content:
      "When the conditions that led to a class suspension are not rectified within a six (6) month period. This period may be extended at BKI's discretion for vessels in lay-up, under repair, or awaiting an accident investigation report.",
    icon: "ClipboardX" as const,
  },
  {
    title: "Immediate Withdrawal for Critical Breaches",
    content:
      "BKI reserves the right to withdraw class with immediate effect if a vessel leaves port without completing critical recommendations or repairs that were explicitly required for maintaining its seaworthiness.",
    icon: "AlertTriangle" as const,
  },
  {
    title: "Vessel is Declared a Total Loss",
    content:
      "When a vessel is declared a Constructive Total Loss (CTL), is lost at sea, or is confirmed to be proceeding to a scrapyard for demolition or recycling.",
    icon: "Ship" as const,
  },
  {
    title: "Non-Payment of Fees",
    content:
      "When fees for services rendered remain unpaid for an extended period, leading to a fundamental breach of the classification agreement.",
    icon: "Banknote" as const,
  },
];
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
        title={"Class Suspend/Withdrawal"}
        description={
          "Learn about the process for suspending or withdrawing a vessel's classification."
        }
      />
      <section className="w-full 2xl:py-20 md:py-16 py-12 2xl:px-28 md:px-24 px-8 bg-white flex lg:flex-row flex-col justify-center items-center lg:gap-16 gap-8">
        <Image
          src={"/why-trust-slider-2.jpg"}
          alt={"Introduction"}
          width={800}
          height={570}
          className="object-cover lg:h-[45vh] h-[300px] rounded-lg"
        />
        <div className="flex flex-col justify-center 2xl:gap-8 md:gap-6 gap-4">
          <p className="2xl:text-6xl md:text-5xl text-4xl font-bold text-[#0A436A]">
            Class Suspension and Withdrawal
          </p>
          <div className="w-full flex flex-col justify-center items-center 2xl:gap-8 md:gap-4 gap-2">
            <p className="2xl:text-3xl md:text-2xl text-xl text-[#0A436A] text-justify">
              Maintaining a valid classification status with Biro Klasifikasi
              Indonesia (BKI) is a shared responsibility that confirms a
              vessel&apos;s compliance with established technical standards for
              safety and structural integrity. The class status is contingent
              upon the vessel&apos;s adherence to BKI Rules and undergoing periodic
              surveys. In cases where these conditions are not met, BKI may be
              required to suspend or withdraw the vessel&apos;s class. This policy
              outlines the conditions under which a vessel&apos;s classification
              status may change.
            </p>
          </div>
        </div>
      </section>
      <FeatureSection
        mainTitle="Class Suspension"
        subTitle="Why Choose Us"
        features={classSuspend}
        description="Class suspension is a temporary measure indicating that the vessel is not in compliance with BKI Rules. During suspension, all classification certificates are rendered invalid. The vessel's information will be updated accordingly in the BKI Register of Ships. BKI will suspend a vessel's class under the following circumstances:"
        col={5}
      />
      <FeatureSection
        mainTitle="Class Withdrawal"
        subTitle="Why Choose Us"
        features={classWithdraw}
        description="Class withdrawal is the formal and permanent cancellation of a vessel's classification with BKI. A withdrawn vessel is no longer certified by BKI and is removed from the BKI Register of Ships. Classification will be withdrawn under the following circumstances:"
        col={5}
        theme="orange"
      />
      <DisclaimerSection
        sectionSubtitle="Important"
        sectionTitle="Reinstatement of Class"
        disclaimers={reinstall}
        icon={<OctagonAlert size={20} />}
      />
      

      <DigitalPlatform />
      <ContactUsSection />
    </div>
  );
}
