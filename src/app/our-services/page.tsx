'use client'
import {motion} from "framer-motion";
import {useHeroTransition} from "@/components/TransitionProvider";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import TabBar from "@/app/our-services/components/TabBar";
import ContactUsSection from "@/components/ContactUsSection";
import NewsCard from "@/components/NewsCard";
import Hero from "@/components/Hero";
import ClassificationTabContent from "@/app/our-services/tabs/Classification";

export type Tab = {
    key: string;
    label: string;
    icon: string;
    content: React.ReactNode;
    href?: string;
};

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
    const prevIndex = useRef(0);
    const {startTransition, setStartTransition} = useHeroTransition();
    const [activeIndex, setActiveIndex] = useState(0);

    const tabs: Tab[] = useMemo(() => [
        {
            key: "classification",
            label: "Classification",
            icon: "/icon-service-classification.png",
            content: <ClassificationTabContent key={'classification'} activeIndex={activeIndex} prevIndex={prevIndex}/>,
        },
        {
            key: "statutory",
            label: "Statutory",
            icon: "/icon-service-statutory.png",
            content: <ClassificationTabContent key={'classification'} activeIndex={activeIndex} prevIndex={prevIndex}/>,
        },
        {
            key: "marine-services",
            label: "Marine Services",
            icon: "/icon-service-marine-services.png",
            content: <ClassificationTabContent key={'classification'} activeIndex={activeIndex} prevIndex={prevIndex}/>,
        },
        {
            key: "energy-industry",
            label: "Energy & Industry",
            icon: "/icon-service-energy-industry.png",
            content: <ClassificationTabContent key={'classification'} activeIndex={activeIndex} prevIndex={prevIndex}/>,
        },
        {
            key: "bki-academy",
            label: "BKI Academy",
            icon: "/icon-service-bki-academy.png",
            content: <ClassificationTabContent key={'classification'} activeIndex={activeIndex} prevIndex={prevIndex}/>,
            href: "https://www.bki.academy/id",
        },
    ], [activeIndex]);

    const [active, setActive] = useState(tabs[0].key);

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
    }, [tabs]);

    useEffect(() => {
        if (active) {
            const index = tabs.findIndex(tab => tab.key === active);
            setActiveIndex(index);
        }
    }, [active, tabs]);

    useEffect(() => {
        const t = setTimeout(() => setStartTransition(true), 1000);
        return () => clearTimeout(t);
    }, [setStartTransition]);

    useEffect(() => {
        if (!startTransition) return;
    }, [startTransition]);

    useEffect(() => {
        if (typeof window === "undefined") return;
        if (window.location.hash === "#program") {
            const el = document.getElementById("program");
            if (el) {
                // delay to ensure layout is ready
                setTimeout(() => {
                    el.scrollIntoView({behavior: "smooth", block: "start"});
                }, 0);
            }
        }
    }, []);

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
            <Hero
                routes={[{text: 'Home', href: '/'}, {text: 'Services'}]}
                backgroundClass="bg-[url('/our-services-bg.jpg')]"
                title={'Our Services'}
                description={'Discover maritime services built for safety, compliance, and excellence.'}
                innerComponent={<TabBar tabs={tabs} active={active} setActive={setActiveWithHash}/>}
            />

            {/*Tab Content Section*/}
            {tabs[activeIndex].content}

            <ContactUsSection/>

            {/*News Section*/}
            <section
                className="w-full h-full 2xl:p-24 p-20 !pt-0 flex flex-col justify-center items-center bg-white 2xl:gap-8 md:gap-7 gap-6">
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