'use client'
import {AnimatePresence, motion, useReducedMotion, Variants} from "framer-motion";
import {useHeroTransition} from "@/components/TransitionProvider";
import {useCallback, useEffect, useRef, useState} from "react";
import Link from "next/link";
import TabBar from "@/app/our-services/components/TabBar";
import ServicesSection from "@/app/our-services/components/ServicesSection";

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
        </div>
    )
}