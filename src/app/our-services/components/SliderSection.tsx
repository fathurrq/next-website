"use client";
import {AnimatePresence, motion, useReducedMotion, Variants} from "framer-motion";
import Link from "next/link";
import {RefObject, useEffect, useRef, useState} from "react";

interface Props {
    key: string;
    activeIndexParent: number;
    prevIndexParent: RefObject<number>;
}

// ----- Data slide lokal (edit sesuai kebutuhanmu) -----
type Slide = {
    image: string;
    title: string;
    headline: string;
    body: string;
};
const SLIDES: Slide[] = [
    {
        image: "/our-services/classification/slider-1.jpg",
        title: "Classification",
        headline: "Ensuring your vessels meet the highest safety and quality standards.",
        body:
            "We provide independent and reliable ship classification services to ensure your vessels comply with international safety, environmental, and quality standards. From design approval to construction survey and periodical inspections, our team helps secure your ship’s performance and seaworthiness.",
    },
    {
        image: "/our-services/classification/slider-2.jpg",
        title: "Survey & Audit",
        headline: "On-site surveys and audits with actionable insights.",
        body:
            "Comprehensive assessments aligned to class and flag requirements, helping you de-risk operations and maintain compliance.",
    },
    {
        image: "/our-services/classification/slider-3.jpg",
        title: "Digital Verification",
        headline: "Streamlined e-certification and rule checks.",
        body:
            "Integrate rule checks and e-cert flows into your technical workflows to accelerate reviews without compromising rigor.",
    },
    {
        image: "/our-services/classification/slider-4.jpg",
        title: "Lifecycle Assurance",
        headline: "End-to-end safety and performance assurance.",
        body:
            "From design review to operations, we partner across the vessel lifecycle to safeguard integrity and uptime.",
    },
];

const AUTOPLAY_MS = 5000;

export default function SliderSection({
                                          key,
                                          activeIndexParent,
                                          prevIndexParent,
                                      }: Props) {
    const prefersReduced = useReducedMotion();
    const directionParentTab = activeIndexParent > prevIndexParent.current ? 1 : -1;

    // ----- STATE SLIDER INTERNAL -----
    const [slideIndex, setSlideIndex] = useState(0);
    const prevSlideRef = useRef(0);
    const dirSlide = slideIndex > prevSlideRef.current ? 1 : -1; // 1 forward, -1 back
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // autoplay
    useEffect(() => {
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(
            () => setSlideIndex((i) => (i + 1) % SLIDES.length),
            AUTOPLAY_MS
        );
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        }
    }, [slideIndex]);

    // simpan prev slide index
    useEffect(() => {
        prevSlideRef.current = slideIndex;
    }, [slideIndex]);

    // Animasi panel (dipakai buat transisi per TAB dari parent — tetap seperti punyamu)
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

    const slide = SLIDES[slideIndex];

    return (
        <section className="relative w-screen h-[90vh]">
            <div className="relative w-full h-full">
                <AnimatePresence initial={false} mode="wait" custom={directionParentTab}>
                    <motion.div
                        key={key}
                        custom={directionParentTab}
                        variants={pageVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="absolute inset-0 2xl:pb-52 2xl:pt-24 2xl:px-24 pb-36 pt-12 px-12 flex flex-col justify-between items-end"
                        role="tabpanel"
                        aria-live="polite"
                        id={`panel-${key}`}
                    >
                        {/* ===== Background image: cross-fade per SLIDE (di dalam panel/tab) ===== */}
                        <div className="absolute inset-0 z-0">
                            <AnimatePresence mode="wait" initial={false} custom={dirSlide}>
                                <motion.div
                                    key={slide.image}
                                    custom={dirSlide}
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{backgroundImage: `url(${slide.image})`}}
                                    initial={{
                                        opacity: 0,
                                        scale: prefersReduced ? 1 : 1.02,
                                        x: prefersReduced ? 0 : dirSlide > 0 ? 10 : -10,
                                    }}
                                    animate={{opacity: 1, scale: 1, x: 0}}
                                    exit={{
                                        opacity: 0,
                                        scale: prefersReduced ? 1 : 0.995,
                                        x: prefersReduced ? 0 : dirSlide > 0 ? -10 : 10,
                                    }}
                                    transition={{
                                        duration: prefersReduced ? 0.2 : 0.8,
                                        ease: "easeOut",
                                    }}
                                />
                            </AnimatePresence>
                        </div>

                        {/* Top and Bottom Overlay (tetap sama) */}
                        <div
                            className="absolute top-0 left-0 right-0 h-[30vh] bg-gradient-to-b from-[#000000] to-transparent z-0"/>
                        <div
                            className="absolute bottom-0 left-0 right-0 h-[50vh] bg-[linear-gradient(to_bottom,transparent_0%,#0A436A50_50%,#0A436A_90%)] z-0"/>

                        {/* ===== Content (layout as-is) ===== */}
                        <div
                            className="
                relative z-[1]
                w-full h-full
                flex flex-col
                gap-6 sm:gap-8 md:gap-10
                justify-between items-start xl:items-end
              "
                        >
                            {/* Title + indikator bulat */}
                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 1, ease: "easeOut", delay: 0.5}}
                                className="
                  w-full
                  flex items-center
                  flex-col xl:flex-row
                  gap-4 xl:gap-0
                  justify-between
                "
                            >
                                <p className="text-white font-bold text-2xl sm:text-3xl md:text-4xl xl:text-6xl text-center xl:text-left">
                                    {slide.title}
                                </p>

                                <div className="flex items-center gap-4 sm:gap-6 md:gap-8 xl:gap-14">
                                    {SLIDES.map((_, i) => {
                                        const isActive = i === slideIndex;
                                        return (
                                            <button
                                                key={i}
                                                onClick={() => setSlideIndex(i)}
                                                aria-label={`Go to slide ${i + 1}`}
                                                className={`
                          rounded-full transition cursor-pointer
                          ${isActive ? "bg-white" : "bg-white/20 hover:bg-white/40"}
                          w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 xl:w-8 xl:h-8
                        `}
                                            />
                                        );
                                    })}
                                </div>
                            </motion.div>

                            {/* Konten teks (animate per slide) */}
                            <AnimatePresence mode="wait" initial={false} custom={dirSlide}>
                                <motion.div
                                    key={`${slide.headline}-${slide.body}`}
                                    initial={{opacity: 0, x: 40, scale: 0.98}}
                                    animate={{opacity: 1, x: 0, scale: 1}}
                                    exit={{opacity: 0, x: -10, scale: 0.99}}
                                    transition={{
                                        duration: prefersReduced ? 0.2 : 1,
                                        ease: "easeOut",
                                        delay: prefersReduced ? 0 : 0.2
                                    }}
                                    className="
                    flex flex-col gap-4 sm:gap-6 md:gap-8
                    w-full xl:w-1/2
                  "
                                >
                                    <p className="text-white font-bold text-2xl sm:text-3xl md:text-4xl xl:text-6xl leading-tight">
                                        {slide.headline}
                                    </p>

                                    <p className="text-white text-base sm:text-lg md:text-xl xl:text-3xl leading-relaxed md:leading-8 opacity-90">
                                        {slide.body}
                                    </p>

                                    <motion.div
                                        initial={{opacity: 0, y: 15}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 1, ease: "easeOut", delay: 0.4}}
                                    >
                                        <Link
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                const el = document.getElementById("program");
                                                if (el) {
                                                    el.scrollIntoView({behavior: "smooth", block: "start"});
                                                    history.replaceState(null, "", "#program");
                                                }
                                            }}
                                            className="
                        inline-flex items-center justify-center
                        px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3
                        text-base sm:text-lg md:text-xl xl:text-3xl
                        font-light text-white
                        bg-white/10 backdrop-blur-md border border-white/20
                        hover:bg-white/20 transition-all duration-300
                        rounded-md
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60
                      "
                                        >
                                            Explore program
                                            <span className="ml-2 text-inherit">→</span>
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}