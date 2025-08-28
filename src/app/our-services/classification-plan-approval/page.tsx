import Image from "next/image";
import ContactUsSection from "@/components/ContactUsSection";
import GlimpseSlider from "@/app/our-services/classification-plan-approval/components/GlimpseSlider";
import Hero from "@/components/Hero";
import FancyTitle from "@/components/FancyTitle";
import PageTransition from "@/components/page-transition";
import DigitalPlatform from "@/app/our-services/components/DigitalPlatform";
import {Anchor} from "lucide-react";

const technologyAdvancement = [
    "Lines Plan",
    "Loading Computer/Instrument",
    "Tank Capacity",
    "Tonnage Calculation",
    "Intact Stability (Preliminary/Final)",
    "Damage Control Plan & Booklet",
    "Damage Stability (Preliminary/Final)",
    "Tank Calibration",
    "Bottom Damage",
    "Sounding Table",
    "Grain Loading Stability",
    "Cross Curve",
    "Intact Stability in flooding condition (kapal Hatchcoverless)",
    "Freeboard Calculation",
    "Seakeeping Analysis (kapal Hatchcoverless)",
    "Draft Mark Arrange",
];

export default function ClassificationPage() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            <PageTransition/>

            {/* Hero Section */}
            <Hero
                routes={[
                    {text: "Home", href: "/"},
                    {
                        text: "Services",
                        href: "/our-services",
                    },
                    {text: "Classification Plan Approval"},
                ]}
                backgroundClass="bg-[url('/classification-bg.jpg')]"
                title={"Classification Plan Approval"}
                description={
                    "Comprehensive review and approval of ship plans to ensure compliance with international safety and classification standards."
                }
            />

            {/*Introduction Section*/}
            <section
                className="w-full 2xl:py-20 md:py-16 py-12 2xl:px-28 md:px-24 px-8 bg-white flex lg:flex-row flex-col justify-center items-center lg:gap-16 gap-8">
                <Image
                    src={"/our-services/plan-approval-introduction.jpg"}
                    alt={"Introduction"}
                    width={800}
                    height={570}
                    className="object-cover lg:h-[45vh] h-[300px] rounded-lg"
                />
                <div className="flex flex-col justify-center 2xl:gap-8 md:gap-6 gap-4">
                    <p className="2xl:text-6xl md:text-5xl text-4xl font-bold text-[#0A436A]">
                        Introduction
                    </p>
                    <div className="w-full flex flex-col justify-center items-center 2xl:gap-8 md:gap-4 gap-2">
                        <p className="2xl:text-3xl md:text-2xl text-xl text-[#0A436A]">
                            Improve your confidence in your ship performance and statutory
                            compliance with us.
                        </p>
                        <p className="2xl:text-3xl md:text-2xl text-xl text-[#0A436A]">
                            We offer a comprehensive range of approval services, covering both
                            classification and statutory documentation. Our mission is to
                            ensure the safety and sustainability of the global maritime
                            industry through our genuine commitment to contribution,
                            trustworthiness, and adherence to rules and regulations.
                        </p>
                    </div>
                </div>
            </section>

            {/*Slider Section*/}
            <GlimpseSlider/>

            {/*Service Section*/}

            <section
                className="w-full 2xl:py-20 md:py-16 py-12 2xl:px-28 md:px-24 px-8 bg-[#0A436A] text-white flex lg:flex-row-reverse flex-col justify-center items-center lg:gap-16 gap-8">
                <div className="flex flex-col justify-center 2xl:gap-12 md:gap-8 gap-4">
                    <p className="2xl:text-6xl md:text-5xl text-4xl font-bold text-white">
                        <FancyTitle title="Classification Service"/>
                    </p>
                    <div className="w-full flex flex-col justify-center items-center 2xl:gap-8 md:gap-4 gap-2">
                        <p className="2xl:text-2xl md:text-xl text-lg text-white">
                            Our expertise in approving Class Documentation consistently
                            exceeds client expectations. We apply comprehensive rules and
                            regulations to a wide range of classified ships, continuously
                            adapting and improving them through practical insights and
                            rigorous evaluation.
                        </p>
                        <p className="2xl:text-2xl md:text-xl text-lg text-white">
                            Our mission is to enhance the safety, quality, and reliability of
                            ships, contributing to the sustainable advancement of the maritime
                            industry.
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
            <section
                className="w-full 2xl:py-20 md:py-16 py-12 2xl:px-28 md:px-24 px-8 bg-white flex lg:flex-row flex-col justify-center items-center lg:gap-16 gap-8">
                <div className="flex flex-col justify-center 2xl:gap-12 md:gap-8 gap-4">
                    <p className="2xl:text-6xl md:text-5xl text-4xl font-bold text-[#0A436A]">
                        <FancyTitle title="Technology Advancement"/>
                    </p>
                    <div className="w-full flex flex-col justify-center items-center 2xl:gap-8 md:gap-4 gap-2">
                        <p className="2xl:text-2xl md:text-xl text-lg text-[#0A436A]">
                            As a leading Indonesian Classification Society, we offer far more
                            than compliance alone. Our goal is to ensure your designs meet the
                            highest standards of safety, quality, and reliability. We leverage
                            advanced engineering software such as{" "}
                            <span className="font-bold">
                {" "}
                                NAPA, Maxsurf, Ansys, and Poseidon
              </span>
                            . In addition, we have developed our own structural analysis
                            software, Dewaruci, which fully complies with relevant standards
                            and is designed to overcome real-world engineering challenges.
                        </p>
                        <p className="2xl:text-2xl md:text-xl text-lg text-[#0A436A]">
                            Our expert engineers are committed to consistently exceeding your
                            expectation services, providing owners and operators with
                            confidence in managing ships and offshore assets safely. We ensure
                            compliance with class documentation in accordance with our
                            advanced class regulations, which include, but are not limited to:
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

            <section
                className="w-full 2xl:py-20 md:py-16 py-12 lg:px-28 px-8
  grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 lg:gap-y-10 gap-y-7 lg:gap-x-6 gap-x-4
  bg-gradient-to-b from-white to-[#0A436A]"
            >
                {technologyAdvancement.map((item, i) => (
                    <div
                        key={i}
                        className="h-24 md:h-28 lg:h-24 flex items-center lg:gap-3 gap-1.5
                 lg:px-7 px-5 bg-[#0A436AC9]/70 rounded-xl border-2 border-[#0A436A]"
                    >
                        <div>
                            <Anchor className="text-white text-2xl"/>
                        </div>
                        <p className="font-bold lg:text-xl text-white">{item}</p>
                    </div>
                ))}
            </section>

            <DigitalPlatform/>

            <ContactUsSection/>
        </div>
    );
}
