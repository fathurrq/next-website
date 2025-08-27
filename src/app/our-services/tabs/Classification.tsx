import { Fragment, RefObject } from "react";
import WhyTrustSection from "@/components/WhyTrustSection";
import SliderSection from "@/app/our-services/components/SliderSection";
import ServiceCard from "@/components/ServiceCard";
import FancyTitle from "@/components/FancyTitle";

type ProgramItem = {
  title: string;
  image: string;
  href?: string;
};
const programItems: ProgramItem[] = [
  {
    title: "Ship Register",
    image: "/our-services/program/plan-approval.jpg",
    href: "/our-services/classification-plan-approval",
  },
  {
    title: "Floating Offshore",
    image: "/our-services/program/floating-offshore.png",
  },
  {
    title: "Class Suspend / Withdrawn",
    image: "/our-services/program/class-suspend.jpg",
  },
  {
    title: "Class Maintenance Certificate",
    image: "/our-services/program/class-suspend.jpg",
  },
  {
    title: "Material and Component",
    image: "/our-services/program/plan-approval.jpg",
    href: "/our-services/classification-plan-approval",
  },
  {
    title: "Plan Approval",
    image: "/our-services/program/floating-offshore.png",
    href: "/our-services/classification-plan-approval",
  },
  {
    title: "Ship Recycling",
    image: "/our-services/program/floating-offshore.png",
  },
];

interface Props {
  keyContent: string;
  activeIndex: number;
  prevIndex: RefObject<number>;
}

export default function ClassificationTabContent({
  keyContent: key,
  activeIndex,
  prevIndex,
}: Props) {
  return (
    <Fragment>
      <SliderSection
        keyContent={key}
        activeIndexParent={activeIndex}
        prevIndexParent={prevIndex}
      />

      <WhyTrustSection />

      <section
        id={"video-section"}
        className="w-full h-full 2xl:p-28 lg:p-20 p-8 flex 2xl:flex-row flex-col justify-center items-center bg-[#E2E7F0] gap-8 2xl:gap-12"
      >
        <video
          className="2xl:w-1/2 w-full h-full object-cover rounded-lg"
          src="/hero-banner-bki.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className="flex flex-col gap-8 2xl:gap-12">
          <p className="2xl:text-5xl text-3xl font-bold text-[#0A436A]">
            Welcome to the heart of Biro Klasifikasi Indonesia (BKI)
          </p>
          <p className="2xl:text-2xl text-lg text-black text-justify">
            For over half a century, we have been the vanguard of maritime
            safety in Indonesia and a respected name on the global stage. Our
            Classification services provide a comprehensive suite of technical
            assessments and certifications designed to ensure your vessels are
            safe, reliable, and compliant with all regulations.
            <br />
            <br />
            By partnering with BKI, you are not just meeting requirements; you
            are investing in operational excellence, risk mitigation, and the
            long-term value of your maritime assets.
          </p>
        </div>
      </section>

      {/*Program Section*/}
      <section
        id="program"
        className="w-full h-full 2xl:px-24 2xl:py-18 md:px-24 md:py-6 py-8 px-8 flex flex-col justify-center items-center bg-white gap-14"
      >
        <div className="w-full flex md:flex-row flex-col justify-between items-center gap-5 md:gap-0">
          <p className="2xl:text-6xl text-4xl font-bold text-[#0A436A] w-full">
            {/* <span className="inline-block">Classification</span>&nbsp;<span className="font-medium inline-block">Services</span> */}
            <FancyTitle title="Classification Services"/>
          </p>
          <p className="2xl:text-2xl text-xl lg:text-end text-black w-full md:w-4/5 text-justify">
            Explore how our expertise can empower your fleet to sail with
            certainty.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-x-3 md:gap-x-5 2xl:gap-x-8 gap-y-8 md:gap-y-12 2xl:gap-y-16">
          {programItems.map((item, index) => (
            <ServiceCard
              href={item.href ?? "#"}
              image={item.image}
              title={item.title}
              key={index}
              isProgramPage
            />
          ))}
        </div>
      </section>
    </Fragment>
  );
}
