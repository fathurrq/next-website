"use client";
import {AnimatePresence, motion, useReducedMotion, Variants} from "framer-motion";
import Link from "next/link";
import {RefObject, useEffect, useRef, useState} from "react";

interface Props {
    key: string;
    activeIndexParent: number;
    prevIndexParent: RefObject<number>;
}

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
    const directionParentTab =
        activeIndexParent > prevIndexParent.current ? 1 : -1;

    const [slideIndex, setSlideIndex] = useState(0);
    const prevSlideRef = useRef(0);
    const dirSlide = slideIndex > prevSlideRef.current ? 1 : -1;
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

    useEffect(() => {
        prevSlideRef.current = slideIndex;
    }, [slideIndex]);

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

    const nextSlide = () =>
        setSlideIndex((i) => (i + 1) % SLIDES.length);
    const prevSlide = () =>
        setSlideIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);

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
                        {/* Background */}
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

                        {/* Overlay */}
                        <div
                            className="absolute top-0 left-0 right-0 h-[30vh] bg-gradient-to-b from-black to-transparent z-0"/>
                        <div
                            className="absolute bottom-0 left-0 right-0 h-[50vh] bg-[linear-gradient(to_bottom,transparent_0%,#0A436A50_50%,#0A436A_90%)] z-0"/>

                        {/* === Arrow navigation on image === */}
                        <button
                            onClick={prevSlide}
                            aria-label="Previous slide"
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl p-2 transition cursor-pointer"
                        >
                            ‹
                        </button>
                        <button
                            onClick={nextSlide}
                            aria-label="Next slide"
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl p-2 transition cursor-pointer"
                        >
                            ›
                        </button>

                        {/* Content */}
                        <div
                            className="relative z-[1] w-full h-full flex flex-col gap-6 sm:gap-8 md:gap-10 justify-between items-start xl:items-end">
                            {/* title + dots */}
                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 1, ease: "easeOut", delay: 0.5}}
                                className="w-full flex flex-col xl:flex-row gap-4 xl:gap-0 justify-between items-center"
                            >
                                <p className="text-white font-bold text-2xl sm:text-3xl md:text-4xl xl:text-6xl text-center xl:text-left">
                                    {slide.title}
                                </p>

                                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 xl:gap-5">
                                    {SLIDES.map((_, i) => {
                                        const isActive = i === slideIndex;
                                        return (
                                            <button
                                                key={i}
                                                onClick={() => setSlideIndex(i)}
                                                aria-label={`Go to slide ${i + 1}`}
                                                className={`
                          rounded-full transition-colors duration-300 cursor-pointer
                          ${isActive ? "bg-white" : "bg-white/20 hover:bg-white/40"}
                          w-2 h-2 md:w-2.5 md:h-2.5 xl:w-3 xl:h-3
                        `}
                                            />
                                        );
                                    })}
                                </div>
                            </motion.div>

                            {/* content text */}
                            <AnimatePresence mode="wait" initial={false} custom={dirSlide}>
                                <motion.div
                                    key={`${slide.headline}-${slide.body}`}
                                    initial={{opacity: 0, x: 40, scale: 0.98}}
                                    animate={{opacity: 1, x: 0, scale: 1}}
                                    exit={{opacity: 0, x: -10, scale: 0.99}}
                                    transition={{
                                        duration: prefersReduced ? 0.2 : 1,
                                        ease: "easeOut",
                                        delay: prefersReduced ? 0 : 0.2,
                                    }}
                                    className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full xl:w-1/2"
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
                                            className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-base sm:text-lg md:text-xl xl:text-3xl font-light text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                                        >
                                            Explore program
                                            <span className="ml-2">→</span>
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
