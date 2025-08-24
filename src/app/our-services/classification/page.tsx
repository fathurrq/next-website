'use client';
import {motion} from "framer-motion";
import {useEffect} from "react";
import {useHeroTransition} from "@/components/TransitionProvider";
import Link from "next/link";
import Image from "next/image";
import ContactUsSection from "@/components/ContactUsSection";
import GlimpseSlider from "@/app/our-services/classification/components/GlimpseSlider";

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
    const {startTransition, setStartTransition} = useHeroTransition();
    useEffect(() => {
        const t = setTimeout(() => setStartTransition(true), 1000);
        return () => clearTimeout(t);
    }, [setStartTransition]);

    useEffect(() => {
        if (!startTransition) return;
    }, [startTransition]);
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            <motion.div
                className="absolute inset-0 z-10 pointer-events-none"
                initial={{opacity: 1}}
                animate={{opacity: startTransition ? 0 : 1}}
                transition={{duration: 0.8}}
                style={{
                    background: `
          linear-gradient(0deg, #0A436A 0%, rgba(10,67,106,0) 100%),
          linear-gradient(270deg, rgba(255,255,255,0) 0%, #FFF 100%),
          linear-gradient(0deg, #000 0%, rgba(0,0,0,0) 100%)
        `,
                    backdropFilter: "blur(22px)",
                    WebkitBackdropFilter: "blur(22px)",
                }}
            />

            {/* Hero Section */}
            <section
                className="w-full h-[40vh] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/classification-bg.jpg')] bg-cover blur-xs bg-center"/>
                <div className="absolute top-0 inset-0 h-[40vh] bg-gradient-to-b from-[#0A436A06] to-[#0A436A00]"/>
                <div className="absolute top-0 inset-0 h-[40vh] bg-gradient-to-t from-[#0A436A] to-[#0A436A00]"/>
                <div
                    className="w-full relative flex flex-col justify-center items-center py-24 2xl:pt-40 text-center text-white">
                    <div className="flex flex-row w-full justify-center items-center gap-2">
                        <Link href={'/'} className="md:text-xl 2xl:text-3xl">
                            Home
                        </Link>
                        <span className="md:text-xl 2xl:text-3xl">
                            /
                        </span>
                        <Link href={'/our-services'} className="md:text-xl 2xl:text-3xl">
                            Services
                        </Link>
                        <span className="md:text-xl 2xl:text-3xl">
                            /
                        </span>
                        <span className="md:text-xl 2xl:text-3xl text-[#ffffff75]">
                            Classification Plan Approval
                        </span>
                    </div>
                    <span className="mt-4 text-2xl md:text-4xl 2xl:text-[64px] font-semibold">
                        Classification Plan Approval
                    </span>
                    <span className="mt-4 text-md md:text-lg 2xl:text-[32px] max-w-3/5">
                        Comprehensive review and approval of ship plans to ensure compliance with international safety and classification standards.
                    </span>
                </div>
            </section>

            {/*Introduction Section*/}
            <section
                className="w-full 2xl:py-20 md:py-16 py-12 2xl:px-28 md:px-24 px-20 bg-white flex flex-col justify-center items-center 2xl:gap-12 md:gap-8 gap-4">
                <p className="2xl:text-6xl md:text-5xl text-4xl font-bold text-[#0A436A]">Introduction</p>
                <div className="w-full flex flex-col justify-center items-center 2xl:gap-8 md:gap-4 gap-2">
                    <p className="2xl:text-3xl md:text-2xl text-xl text-[#0A436A] text-center">
                        Improve your confidence
                        in your ship performance and statutory compliance with us.
                    </p>
                    <p className="2xl:text-3xl md:text-2xl text-xl text-[#0A436A] text-center">
                        We offer a comprehensive
                        range of approval services, covering both classification and statutory documentation. Our
                        mission is to ensure the safety and sustainability of the global maritime industry through our
                        genuine commitment to contribution, trustworthiness, and adherence to rules and regulations.
                    </p>
                </div>
            </section>

            {/*Slider Section*/}
            <GlimpseSlider/>

            {/*Service Section*/}
            <section
                className="w-full 2xl:p-28 md:p-24 p-20 bg-[#0A436A] flex flex-col justify-center items-center 2xl:gap-10 md:gap-6 gap-3">
                <p className="2xl:text-6xl md:text-5xl text-4xl font-bold text-white text-center">Classification
                    Service</p>
                <div className="w-full flex flex-col justify-center items-center 2xl:gap-8 md:gap-4 gap-2">
                    <p className="2xl:text-3xl md:text-2xl text-xl text-white text-center">
                        Our expertise in approving Class Documentation consistently exceeds client expectations. We
                        apply comprehensive rules and regulations to a wide range of classified ships, continuously
                        adapting and improving them through practical insights and rigorous evaluation. Our mission is
                        to enhance the safety, quality, and reliability of ships, contributing to the sustainable
                        advancement of the maritime industry.
                    </p>
                </div>
            </section>

            {/*Technology Section*/}
            <section
                className="w-full 2xl:py-20 md:py-16 py-12 2xl:px-28 md:px-24 px-20 bg-white flex flex-col justify-center items-center 2xl:gap-12 md:gap-8 gap-4">
                <p className="2xl:text-6xl md:text-5xl text-4xl font-bold text-[#0A436A] text-center">
                    Technology Advancement
                </p>
                <div className="w-full flex flex-col justify-center items-center 2xl:gap-8 md:gap-4 gap-2">
                    <p className="2xl:text-3xl md:text-2xl text-xl text-[#0A436A] text-center">
                        As a leading Indonesian Classification Society, we offer far more than compliance alone. Our
                        goal is to ensure your designs meet the highest standards of safety, quality, and reliability.
                        We leverage advanced engineering software such as <span className="font-bold"> NAPA, Maxsurf, Ansys, and Poseidon</span>.
                        In addition, we have developed our own structural analysis software, Dewaruci, which fully
                        complies with relevant standards and is designed to overcome real-world engineering challenges.
                    </p>
                    <p className="2xl:text-3xl md:text-2xl text-xl text-[#0A436A] text-center">
                        Our expert engineers are committed to consistently exceeding your expectation services,
                        providing owners and operators with confidence in managing ships and offshore assets safely. We
                        ensure compliance with class documentation in accordance with our advanced class regulations,
                        which include, but are not limited to:
                    </p>
                </div>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 2xl:gap-y-14 md:gap-y-12 gap-y-10 2xl:py-16 md:py-12 py-8">
                    {technologyAdvancement.map((item, index) => (
                        <div key={index} className="flex flex-row items-center 2xl:gap-6 md:gap-5 gap-4">
                            <Image src={'/icons/anchor.png'} alt={"Anchor icon"} width={32} height={35}/>
                            <p className="font-bold 2xl:text-3xl md:text-2xl text-xl text-[#0A436A]">{item}</p>
                        </div>
                    ))}
                </div>
            </section>

            <ContactUsSection/>
        </div>
    )
}