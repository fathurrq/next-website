"use client";
import {useEffect, useRef, useState} from "react";
import {AnimatePresence, motion, useScroll, useTransform} from "framer-motion";
import {useHeroTransition} from "./TransitionProvider";
import {DotLottieReact} from '@lottiefiles/dotlottie-react';
// Dynamically import to avoid SSR issues
// const LottiePlayer = dynamic(() => import("@lottiefiles/react-lottie-player").then(m => m.Player), { ssr: false });

export default function HeroSection() {
    const {startTransition, setStartTransition} = useHeroTransition();
    const [showIntroText, setShowIntroText] = useState(false);
    const heroRef = useRef<HTMLDivElement | null>(null);

    const {scrollYProgress} = useScroll({
        target: heroRef,
        offset: ["start start", "end start"], // 0 at top, 1 at bottom of hero
    });

    // video moves slower upward
    const videoY = useTransform(scrollYProgress, [0, 1], [0, 240]);

    // blue wash rises / strengthens as you start scrolling
    const washY = useTransform(scrollYProgress, [0, 1], [40, -40]);
    const washOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

    // headline subtle lift
    const titleY = useTransform(scrollYProgress, [0, 1], [0, -40]);

    // dark overlay eases a bit as you reach bottom of hero
    const darkOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.6, 0]);

    // trigger main transition after 1s
    useEffect(() => {
        const t = setTimeout(() => setStartTransition(true), 50);
        return () => clearTimeout(t);
    }, [setStartTransition]);

    // show "Welcome To" for 3s, then hide
    useEffect(() => {
        if (!startTransition) return;
        setShowIntroText(true);
        const t = setTimeout(() => setShowIntroText(false), 2000);
        return () => clearTimeout(t);
    }, [startTransition]);

    return (
        <div id="hero" ref={heroRef} className="relative w-full h-screen">
            {/* Background video (wrapped so we can translate it) */}
            <motion.div className="absolute inset-0" style={{y: videoY, willChange: "transform"}}>
                <video
                    className={`w-full h-full object-cover transition-all duration-1000 blur-0 scale-100`}
                    src="/hero-banner-bki.mp4"
                    autoPlay
                    loop
                    muted
                />
            </motion.div>

            {/* INTRO overlay (your multi-gradient) → fades out as before */}
            {/* <motion.div
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
            /> */}

            {/* AFTER transition: single dark gradient over whole hero (parallax-softened) */}
            <motion.div
                className="absolute inset-0 z-20 pointer-events-none"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
                style={{
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    opacity: darkOpacity,
                    background: "linear-gradient(0deg, #000 5%, rgba(0,0,0,0.30) 100%)",
                    // background: 'red'
                }}
            />

            {/* Blue parallax wash that appears while scrolling (pic 1 vibe) */}
            <motion.div
                className="absolute inset-x-0 bottom-0 z-20 pointer-events-none h-[10vh]"
                style={{
                    // y: washY,
                    // opacity: washOpacity,
                    background:
                        "linear-gradient(0deg, rgba(10,67,106,0.95) 0%, rgba(10,67,106,0.80) 5%, rgba(10,67,106,0.65) 10%,  rgba(10,67,106,0) 100%)",
                    // backdropFilter: "blur(8px)",
                    // WebkitBackdropFilter: "blur(8px)",
                    willChange: "transform, opacity",
                }}
            />

            {/* Title flow */}
            <AnimatePresence>
                {startTransition && showIntroText && (
                    <motion.div
                        key="intro-welcome"
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-center px-4"
                        initial={{opacity: 0, x: -1200}}
                        animate={{opacity: 1, x: 0, transition: {duration: 1.5, ease: "easeOut"}}}
                        exit={{opacity: 0, transition: {duration: 0.35}}}
                    >
                        <h1 className="text-5xl md:text-6xl font-semibold text-white">Welcome To</h1>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {startTransition && !showIntroText && (
                    <>
                        <motion.div
                            key="main-hero-text"
                            className="absolute left-1/2 w-full top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-center px-4 text-white"
                            initial={{opacity: 0}}
                            animate={{opacity: 1, transition: {duration: 0.8, ease: "easeOut"}}}
                            exit={{opacity: 0}}
                            style={{y: titleY, willChange: "transform"}}
                        >
                            <div
                                className="jost-font font-medium text-5xl md:text-8xl text-transparent bg-clip-text tracking-tight"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(90deg, #0A346A -40.69%, #94BFD9 46.94%, #FFF 100%)",
                                        textShadow: "0 4px 34px #000"
                                }}
                            >
                                Your Global Partner
                            </div>
                            <div className="text-white/70 mt-2 md:text-3xl">In</div>
                            <div className="text-white text-sm md:text-2xl">TICCS (Testing, Inspection, Certification,
                                Classification and Statutory)
                            </div>
                        </motion.div>

                        {/* Lottie (kept as-is) */}
                        {/* <motion.div
                            key="radar-lottie"
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-[550px] h-[150px] [clip-path:ellipse(50%_100%_at_50%_100%)]"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0, transition: {duration: 0.6, ease: "easeOut", delay: 0.15}}}
                            exit={{opacity: 0, y: 10, transition: {duration: 0.25}}}
                        >
                            <DotLottieReact autoplay loop src="/fv_assets.lottie" style={{width: 550, height: 300}}/>
                        </motion.div> */}
                    </>
                )}
            </AnimatePresence>
        </div>

    );
}
