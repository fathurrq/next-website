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
        image: "/our-services/program/plan-approval.png",
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
        image: "/our-services/program/plan-approval.png",
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
        image: "/our-services/program/plan-approval.png",
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

            {/*Program Section*/}
            <section id="program"
                     className="w-full h-full 2xl:p-28 p-20 flex flex-col justify-center items-center bg-white gap-28">
                <div className="w-full flex justify-between items-center">
                    <p className="2xl:text-6xl text-4xl font-bold text-[#0A436A]">Program</p>
                    <p className="2xl:text-3xl text-xl text-end text-black w-2/5">Tailored programs to ensure safety and
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