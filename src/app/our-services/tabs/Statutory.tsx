import {Fragment, RefObject} from "react";
import WhyTrustSection from "@/components/WhyTrustSection";
import SliderSection from "@/app/our-services/components/SliderSection";
import ServiceCard from "@/components/ServiceCard";
import FancyTitle from "@/components/FancyTitle";
import Image from "next/image";
import {motion} from "framer-motion";

type ProgramItem = {
    title: string;
    image: string;
    href?: string;
};
const programItems: ProgramItem[] = [
    {
        title: "ISM Register",
        image: "/our-services/program/plan-approval.jpg",
    },
    {
        title: "ISPS Register",
        image: "/our-services/program/floating-offshore.png",
    },
    {
        title: "Flag States Regulations",
        image: "/our-services/program/class-suspend.jpg",
    },
    {
        title: "Statutory Information",
        image: "/our-services/program/class-suspend.jpg",
    },
    {
        title: "IMO Meeting",
        image: "/our-services/program/plan-approval.jpg",
    },
    {
        title: "Load Line",
        image: "/classification-plan-approval.jpg",
    },
    {
        title: "Ballast Water Management",
        image: "/our-services/program/floating-offshore.png",
    },
    {
        title: "Energy Efficiency for Ships",
        image: "/our-services/program/floating-offshore.png",
    },
    {
        title: "Maritime Labour Convention",
        image: "/our-services/program/floating-offshore.png",
    },
    {
        title: "Port State Control",
        image: "/our-services/program/floating-offshore.png",
    },
    {
        title: "Ship Detention",
        image: "/our-services/program/floating-offshore.png",
    },
    {
        title: "Authorization",
        image: "/our-services/program/floating-offshore.png",
    },
];

interface Props {
    keyContent: string;
    activeIndex: number;
    prevIndex: RefObject<number>;
}

export default function StatutoryTabContent({
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

            <WhyTrustSection/>

            <section
                className="w-full h-full 2xl:p-28 lg:p-20 p-8 flex flex-col justify-center items-center bg-[#E2E7F0] gap-8 2xl:gap-24">
                <div className="w-full flex lg:flex-row flex-col justify-center items-center gap-3 lg:gap-6">
                    <div className="flex flex-col gap-3 lg:gap-6 flex-[1]">
                        <p className="lg:text-4xl text-2xl font-semibold text-[#0A436A]">
                            A Partnership in Global Maritime Compliance
                        </p>
                        <p className="lg:text-xl text-base text-[#0A436A]">
                            In the complex world of international shipping, maintaining compliance is the foundation of
                            safe, efficient, and lawful operation. As a trusted <span className="font-bold">Recognized Organization (RO)</span> ,
                            Biro
                            Klasifikasi Indonesia (BKI) is authorized by Flag Administrations to perform essential
                            statutory surveys and issue certifications on their behalf. Our core mission is to act as a
                            steadfast guardian of maritime standards, ensuring that vessels comply with the most
                            stringent international conventions and national regulations to safeguard life, property,
                            and the marine environment.
                        </p>
                    </div>
                    <div className="w-full flex-[1] [perspective:1000px]">
                        <motion.div
                            className="[transform-style:preserve-3d] inline-block"
                            initial={{rotateY: 15, opacity: 0, scale: 0.75}}
                            whileInView={{rotateY: -15, opacity: 1, scale: 1}}
                            viewport={{once: true, amount: 0.6}}
                            transition={{type: "spring", stiffness: 120, damping: 18, mass: 0.6}}
                        >
                            <Image
                                src="/our-services/classification/slider-1.jpg"
                                alt="partnership"
                                width={600}
                                height={400}
                                priority={false}
                                className="object-cover rounded-lg shadow-lg will-change-transform"
                            />
                        </motion.div>
                    </div>
                </div>
                <div className="w-full flex lg:flex-row flex-col justify-center items-center gap-3 lg:gap-6">
                    <div className="w-full flex-[1] [perspective:1000px]">
                        <motion.div
                            className="[transform-style:preserve-3d] inline-block"
                            initial={{rotateY: -15, opacity: 0, scale: 0.95}}
                            whileInView={{rotateY: 15, opacity: 1, scale: 1}}
                            viewport={{once: true, amount: 0.6}}
                            transition={{type: "spring", stiffness: 120, damping: 18, mass: 0.6}}
                        >
                            <Image
                                src="/our-services/classification/slider-1.jpg"
                                alt="partnership"
                                width={600}
                                height={400}
                                priority={false}
                                className="object-cover rounded-lg shadow-lg will-change-transform"
                            />
                        </motion.div>
                    </div>
                    <div className="flex flex-col gap-3 lg:gap-6 flex-[1]">
                        <p className="lg:text-4xl text-2xl font-semibold text-[#0A436A]">
                            Our Authority as a Recognized Organization
                        </p>
                        <div className="flex flex-col gap-2">
                            <p className="lg:text-xl text-base text-[#0A436A]">
                                A Flag State is ultimately responsible for ensuring the vessels registered under its
                                flag
                                meet international standards. To achieve this on a global scale, Flag States delegate
                                the
                                authority to conduct technical surveys and issue certificates to competent organizations
                                like BKI. This delegation is a testament to our proven expertise and integrity.
                            </p>
                            <p className="lg:text-xl text-base text-[#0A436A]">
                                BKI&#39;s authority is formally granted by the Flag States of <span
                                className="font-bold">Indonesia</span> and <span className="font-bold">Mongolia</span>,
                                with
                                all
                                work conducted in full accordance with the IMO&#39;s RO Code and resolutions A.739(18)
                                and
                                A.789(19). Our extensive network of over 18 branch offices allows our qualified
                                surveyors
                                and auditors to provide reliable, expert services to shipowners wherever they operate.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="w-full h-full 2xl:p-28 lg:p-20 p-8 flex flex-col justify-center items-center bg-[#0A436A] gap-8 2xl:gap-12">
                <p className="lg:text-5xl text-3xl font-bold text-white text-center">
                    A Comprehensive Scope of Statutory Certification
                </p>
                <p className="lg:text-xl text-base font-medium text-white text-center">
                    Our statutory services are comprehensive, addressing every critical aspect of vessel operation
                    through a suite of surveys, audits, and certifications. Our global team of experienced marine
                    engineers, naval architects, and master mariners provides on-the-ground verification for key
                    international conventions.
                </p>

                <div className="flex flex-col gap-1">
                    <div className="lg:w-1/2 w-full border-t border-white border-opacity-20 lg:py-3 py-1.5">
                        <div className="flex gap-3">
                            <p className="lg:text-2xl text-lg font-semibold text-white">
                                01
                            </p>
                            <div className="flex flex-col gap-2">
                                <p className="lg:text-2xl text-lg font-semibold text-white">
                                    Vessel Safety and Integrity
                                </p>
                                <p className="lg:text-xl text-base text-white">
                                    At the core of our work is the safety of the vessel and its crew. We conduct
                                    rigorous
                                    surveys under <span className="font-bold">SOLAS</span> (Safety of Life at Sea)
                                    covering
                                    everything from hull construction and
                                    machinery to fire protection and life-saving appliances. We also ensure stability
                                    and
                                    prevent overloading through certification for the <span className="font-bold">International Convention on Load Lines
                            (ICLL)</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full border-t border-white border-opacity-20 lg:py-3 py-1.5 self-end">
                        <div className="flex gap-3">
                            <p className="lg:text-2xl text-lg font-semibold text-white">
                                02
                            </p>
                            <div className="flex flex-col gap-2">
                                <p className="lg:text-2xl text-lg font-semibold text-white">
                                    Environmental Stewardship
                                </p>
                                <p className="lg:text-xl text-base text-white">
                                    We are deeply committed to protecting the marine environment. Our services under
                                    <span className="font-bold">MARPOL</span> help prevent pollution from oil,
                                    chemicals, sewage, and air emissions. This
                                    includes critical modern regulations such as the verification of <span
                                    className="font-bold">Ballast Water
                                    Management</span> systems to stop the spread of invasive species and certification
                                    for
                                    <span className="font-bold">Energy Efficiency</span> measures (EEXI/CII) to support
                                    the industry&#39;s decarbonization
                                    journey.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full border-t border-white border-opacity-20 lg:py-3 py-1.5">
                        <div className="flex gap-3">
                            <p className="lg:text-2xl text-lg font-semibold text-white">
                                03
                            </p>
                            <div className="flex flex-col gap-2">
                                <p className="lg:text-2xl text-lg font-semibold text-white">
                                    The Human Element and Security
                                </p>
                                <p className="lg:text-xl text-base text-white">
                                    A safe ship is operated by a secure and well-supported crew. We conduct audits to
                                    ensure seafarers&#39; working and living conditions meet the standards of the <span
                                    className="font-bold">Maritime
                                    Labour Convention (MLC, 2006)</span>.
                                    Furthermore, we certify the vital management systems
                                    that underpin operational excellence through the <span className="font-bold">ISM Code</span> (for
                                    safety management)
                                    and the <span className="font-bold">ISPS Code</span> (for security management).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*Program Section*/}
            <section
                id="program"
                className="w-full h-full 2xl:px-24 2xl:py-18 md:px-24 md:py-6 py-8 px-8 flex flex-col justify-center items-center bg-white gap-14"
            >
                <div className="w-full flex md:flex-row flex-col justify-between items-center gap-5 md:gap-0">
                    <p className="2xl:text-6xl text-4xl font-bold text-[#0A436A] w-full">
                        <FancyTitle title="Explore Our Statutory Services & Resources"/>
                    </p>
                    <p className="2xl:text-2xl text-xl lg:text-end text-black w-full md:w-4/5 text-justify">
                        Navigate through our detailed services and resources to find the specific information you need
                        to maintain compliance and operational excellence.
                    </p>
                </div>
                <div
                    className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-x-3 md:gap-x-5 2xl:gap-x-8 gap-y-8 md:gap-y-12 2xl:gap-y-16">
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

            <section
                className="w-full relative h-full 2xl:p-28 lg:p-20 p-8 flex flex-col justify-center items-center gap-8 2xl:gap-12 overflow-hidden"
            >
                {/* Background Parallax */}
                <div
                    className="absolute inset-0 bg-[url('/our-services/statutory/commitment.JPG')] bg-cover bg-center bg-fixed blur-[2px] -z-10"
                />

                {/* Overlay optional biar teks lebih kontras */}
                <div className="absolute inset-0 bg-black/40 -z-10"/>

                {/* Content */}
                <p className="2xl:text-4xl text-2xl font-bold text-white text-center drop-shadow-lg">
                    A Commitment to Quality and Performance
                </p>
                <p className="2xl:text-2xl text-xl text-white w-full md:w-4/5 text-center drop-shadow-lg">
                    BKI&#39;s dedication to high standards is reflected in the strong performance of our classed and
                    certified fleet. Recent statistics from the Tokyo MOU Port State Control regime show a consistently
                    positive trend, demonstrating our effectiveness in helping clients maintain quality and reduce
                    detention risks.
                </p>
            </section>

        </Fragment>
    );
}
