'use client'
import {AnimatePresence, motion, useReducedMotion, Variants} from "framer-motion";
import {useHeroTransition} from "@/components/TransitionProvider";
import {useCallback, useEffect, useRef, useState} from "react";
import Link from "next/link";
import TabBar from "@/app/our-services/components/TabBar";
import ServicesSection from "@/app/our-services/components/ServicesSection";
import WhyTrustSection from "@/components/WhyTrustSection";
import ServiceCard from "@/components/ServiceCard";
import ContactUsSection from "@/components/ContactUsSection";
import NewsCard from "@/components/NewsCard";

export type Tab = {
    key: string;
    label: string;
    icon: string;
};
const tabs: Tab[] = [
    {key: "classification", label: "Classification", icon: "/icon-service-classification.png"},
    {key: "statutory", label: "Statutory", icon: "/icon-service-statutory.png"},
    {key: "marine-services", label: "Marine Services", icon: "/icon-service-marine-services.png"},
    {key: "energy-industry", label: "Energy & Industry", icon: "/icon-service-energy-industry.png"},
    {key: "bki-academy", label: "BKI Academy", icon: "/icon-service-bki-academy.png"},
];

type ProgramItem = {
    title: string;
    image: string;
};
const programItems: ProgramItem[] = [
    {
        title: "Plan Approval",
        image: "/our-services/program/plan-approval.png",
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

type NewsItem = {
    id: string;
    date: string;
    title: string;
    content: string;
    img: string;
    link: string;
};
const news: NewsItem[] = [
    {
        id: "1",
        date: "08 Aug 2025 4:40 pm",
        title: "New Research Vessel For Marine Science in SA",
        content:
            "Research Vessel Encounter pulls in at O'Sullivan Beach boat ramp. A new coastal research vessel, RV Encounter, will support the investigations and training opportunities of Flinders",
        img: "/news1.jpg",
        link: "/news/news1",
    },
    {
        id: "2",
        date: "05 Aug 2025 1:10 pm",
        title: "Container Shipping Sees Record High Traffic",
        content:
            "Container shipping has experienced a significant surge in traffic, with ports reporting record volumes and increased demand for freight services.",
        img: "/news2.png",
        link: "/news/news1",
    },
    {
        id: "3",
        date: "05 Aug 2025 1:10 pm",
        title: "Container Shipping Sees Record High Traffic",
        content:
            "Container shipping has experienced a significant surge in traffic, with ports reporting record volumes and increased demand for freight services.",
        img: "/news3.jpg",
        link: "/news/news1",
    },
];

export default function OurServices() {
    const {startTransition, setStartTransition} = useHeroTransition();
    const [active, setActive] = useState(tabs[0].key);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const applyHash = () => {
            const raw = window.location.hash.replace(/^#/, "");
            const key = decodeURIComponent(raw || "");
            const idx = tabs.findIndex(t => t.key === key);
            if (idx >= 0) setActive(tabs[idx].key);
        };

        applyHash(); // initial
        window.addEventListener("hashchange", applyHash);
        return () => window.removeEventListener("hashchange", applyHash);
    }, []);

    useEffect(() => {
        if (active) {
            const index = tabs.findIndex(tab => tab.key === active);
            setActiveIndex(index);
        }
    }, [active]);

    useEffect(() => {
        const t = setTimeout(() => setStartTransition(true), 1000);
        return () => clearTimeout(t);
    }, [setStartTransition]);

    useEffect(() => {
        if (!startTransition) return;
    }, [startTransition]);

    const prevIndex = useRef(0)
    const prefersReduced = useReducedMotion()

    const direction = activeIndex > prevIndex.current ? 1 : -1 // 1 = forward (slide L), -1 = back (slide R)

    const pageVariants: Variants = {
        enter: (dir: number) => ({
            x: prefersReduced ? 0 : dir > 0 ? 40 : -40,
            opacity: 0,
            scale: prefersReduced ? 1 : 0.98,
            transition: {duration: prefersReduced ? 0.1 : 0.2, ease: "easeOut"},
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {duration: prefersReduced ? 0.2 : 0.4, ease: "easeOut"},
        },
        exit: (dir: number) => ({
            x: prefersReduced ? 0 : dir > 0 ? -40 : 40,
            opacity: 0,
            scale: prefersReduced ? 1 : 0.98,
            transition: {duration: prefersReduced ? 0.1 : 0.28, ease: "easeIn"},
        }),
    };

    const setActiveWithHash = useCallback((key: string) => {
        prevIndex.current = activeIndex;          // keep your direction logic
        setActive(key);
        if (typeof window !== "undefined") {
            // don't jump the page, just replace the hash
            window.history.replaceState(null, "", `#${encodeURIComponent(key)}`);
        }
    }, [activeIndex]);

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
                className="w-full h-[55vh] relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-[url('/our-services-bg.jpg')] bg-cover blur-sm bg-[position:center_30%]"/>
                <div className="absolute top-0 inset-0 bg-gradient-to-b from-[#0A436A06] to-[#0A436A00]"/>
                <div className="absolute top-0 inset-0 bg-gradient-to-t from-[#0A436A] to-[#0A436A00]"/>
                <div className="absolute inset-0 bg-[linear-gradient(to_top,black_0%,#0A436A_25%,transparent_50%)]"/>
                <div
                    className="w-full relative flex flex-col justify-center items-center py-24 2xl:pt-40 text-center text-white">
                    <div className="flex flex-row w-full justify-center items-center gap-2">
                        <Link href={'/'} className="md:text-xl 2xl:text-3xl font-medium">
                            Home
                        </Link>
                        <span className="md:text-xl 2xl:text-3xl font-medium">
                            /
                        </span>
                        <span className="md:text-xl 2xl:text-3xl text-[#ffffff75] font-medium">
                            Services
                        </span>
                    </div>
                    <span className="mt-6 text-2xl md:text-4xl 2xl:text-[64px] font-medium">
                        Our Services
                    </span>
                    <span className="mt-9 text-md md:text-lg 2xl:text-[32px] max-w-3/5">
                        Discover maritime services built for safety, compliance, and excellence.
                    </span>
                </div>

                {/*Tab Section*/}
                <TabBar tabs={tabs} active={active} setActive={setActiveWithHash}/>
            </section>

            {/*Tab Content Section*/}
            <section className="relative w-screen h-[85vh]">
                <div className="relative w-full h-full">
                    <AnimatePresence initial={false} mode="wait" custom={direction}>
                        <motion.div
                            key={tabs[activeIndex].key}
                            custom={direction}
                            variants={pageVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="absolute inset-0 2xl:pb-52 2xl:pt-24 2xl:px-24 pb-36 pt-12 px-12 flex flex-col justify-between items-end"
                            role="tabpanel"
                            aria-live="polite"
                            id={`panel-${tabs[activeIndex].key}`}
                        >
                            {/*Background image*/}
                            <div
                                className="absolute inset-0 bg-[url('/our-services/classification/slider-1.jpg')] bg-cover bg-center z-0"/>
                            {/*Top and Bottom Overlay*/}
                            <div
                                className="absolute top-0 left-0 right-0 h-[30vh] bg-gradient-to-b from-[#000000] to-transparent z-0"/>
                            <div
                                className="absolute bottom-0 left-0 right-0 h-[50vh] bg-[linear-gradient(to_bottom,transparent_0%,#0A436A50_50%,#0A436A_90%)] z-0"/>
                            {/*Content*/}
                            <ServicesSection/>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            <WhyTrustSection/>

            {/*Program Section*/}
            <section className="w-full h-full 2xl:p-28 p-20 flex flex-col justify-center items-center bg-white gap-28">
                <div className="w-full flex justify-between items-center">
                    <p className="2xl:text-6xl text-4xl font-bold text-[#0A436A]">Program</p>
                    <p className="2xl:text-3xl text-xl text-end text-black w-2/5">Tailored programs to ensure safety and
                        compliance from
                        design to operation.</p>
                </div>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-x-3 md:gap-x-5 2xl:gap-x-8 gap-y-8 md:gap-y-12 2xl:gap-y-16">
                    {programItems.map((item, index) => (
                        <ServiceCard href={'#'} image={item.image} title={item.title} key={index} isProgramPage/>
                    ))}
                </div>
            </section>

            <ContactUsSection/>

            {/*News Section*/}
            <section
                className="w-full h-full 2xl:p-28 p-20 flex flex-col justify-center items-center bg-white 2xl:gap-8 md:gap-7 gap-6">
                <div className="w-full flex flex-col 2xl:gap-6 md:gap-5 gap-4">
                    <p className="2xl:text-6xl md:text-5xl text-4xl font-bold text-[#0A436A]">Keep Updated</p>
                    <p className="2xl:text-5xl nd:text-4xl text-3xl text-[#0A436A]">Top News</p>
                </div>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 md:gap-6 2xl:gap-7">
                    {news.map((n, i) => (
                        <NewsCard key={i} news={n}/>
                    ))}
                </div>
            </section>
        </div>
    )
}