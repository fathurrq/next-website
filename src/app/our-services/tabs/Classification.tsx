import {Fragment, RefObject} from "react";
import WhyTrustSection from "@/components/WhyTrustSection";
import SliderSection from "@/app/our-services/components/SliderSection";
import ServiceCard from "@/components/ServiceCard";

type ProgramItem = {
    title: string;
    image: string;
    href?: string;
};
const programItems: ProgramItem[] = [
    {
        title: "Plan Approval",
        image: "/our-services/program/plan-approval.jpg",
        href: "/our-services/classification-plan-approval",
    },
    {
        title: "Floating Offshore",
        image: "/our-services/program/floating-offshore.png",
    },
    {
        title: "Class Suspend",
        image: "/our-services/program/class-suspend.jpg",
    },
    {
        title: "Class Suspend",
        image: "/our-services/program/class-suspend.jpg",
    },
    {
        title: "Plan Approval",
        image: "/our-services/program/plan-approval.jpg",
        href: "/our-services/classification-plan-approval",
    },
    {
        title: "Floating Offshore",
        image: "/our-services/program/floating-offshore.png",
    },
    {
        title: "Floating Offshore",
        image: "/our-services/program/floating-offshore.png",
    },
    {
        title: "Plan Approval",
        image: "/our-services/program/plan-approval.jpg",
        href: "/our-services/classification-plan-approval",
    },
];

interface Props {
    key: string;
    activeIndex: number;
    prevIndex: RefObject<number>;
}

export default function ClassificationTabContent({key, activeIndex, prevIndex}: Props) {
    return (
        <Fragment>
            <SliderSection key={key} activeIndexParent={activeIndex} prevIndexParent={prevIndex}/>

            <WhyTrustSection/>

            <section
                id={'video-section'}
                className="w-full h-full 2xl:p-28 lg:p-20 p-8 flex 2xl:flex-row flex-col justify-center items-center bg-[#E2E7F0] gap-8 2xl:gap-12">
                <video
                    className="2xl:w-1/2 w-full h-full object-cover rounded-lg"
                    src="/hero-banner-bki.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="flex flex-col gap-8 2xl:gap-12">
                    <p className="2xl:text-5xl text-3xl font-bold text-[#0A436A]">
                        Ensuring your vessels meet the highest safety and quality standards.
                    </p>
                    <p className="2xl:text-2xl text-lg text-black">
                        We provide independent and reliable ship classification services to ensure your vessels comply
                        with international safety, environmental, and quality standards. From design approval to
                        construction survey and periodical inspections, our team helps secure your ship’s performance
                        and seaworthiness. We provide independent and reliable ship classification services to ensure
                        your vessels comply with international safety, environmental, and quality standards. From design
                        approval to construction survey and periodical inspections, our team helps secure your ship’s
                        performance and seaworthiness.
                    </p>
                </div>
            </section>

            {/*Program Section*/}
            <section id="program"
                     className="w-full h-full 2xl:p-28 lg:p-20 p-8 flex flex-col justify-center items-center bg-white gap-28">
                <div className="w-full flex md:flex-row flex-col justify-between items-center gap-5 md:gap-0">
                    <p className="2xl:text-6xl text-4xl font-bold text-[#0A436A] w-full">Program</p>
                    <p className="2xl:text-3xl text-xl lg:text-end text-black w-full md:w-2/5">Tailored programs to
                        ensure safety
                        and
                        compliance from
                        design to operation.</p>
                </div>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-x-3 md:gap-x-5 2xl:gap-x-8 gap-y-8 md:gap-y-12 2xl:gap-y-16">
                    {programItems.map((item, index) => (
                        <ServiceCard href={item.href ?? '#'} image={item.image} title={item.title} key={index}
                                     isProgramPage/>
                    ))}
                </div>
            </section>
        </Fragment>
    );
}