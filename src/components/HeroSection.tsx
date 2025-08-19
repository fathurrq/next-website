"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useHeroTransition } from "./TransitionProvider";
import dynamic from "next/dynamic";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// Dynamically import to avoid SSR issues
// const LottiePlayer = dynamic(() => import("@lottiefiles/react-lottie-player").then(m => m.Player), { ssr: false });

export default function HeroSection() {
  const { startTransition, setStartTransition } = useHeroTransition();
  const [showIntroText, setShowIntroText] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"], // 0 at top, 1 at bottom of hero
  });
  
  // video moves slower upward
  const videoY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  
  // blue wash rises / strengthens as you start scrolling
  const washY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const washOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
  
  // headline subtle lift
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  
  // dark overlay eases a bit as you reach bottom of hero
  const darkOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.6, 0]);
  
  // trigger main transition after 1s
  useEffect(() => {
    const t = setTimeout(() => setStartTransition(true), 1000);
    return () => clearTimeout(t);
  }, [setStartTransition]);

  // show "Welcome To" for 3s, then hide
  useEffect(() => {
    if (!startTransition) return;
    setShowIntroText(true);
    const t = setTimeout(() => setShowIntroText(false), 3000);
    return () => clearTimeout(t);
  }, [startTransition]);

  return (
    <div id="hero" ref={heroRef} className="relative w-full h-screen overflow-hidden">
    {/* Background video (wrapped so we can translate it) */}
    <motion.div className="absolute inset-0" style={{ y: videoY, willChange: "transform" }}>
      <video
        className={`w-full h-full object-cover transition-all duration-1000 ${
          startTransition ? "blur-0 scale-100" : "blur-md scale-105"
        }`}
        src="/hero-video.mp4"
        autoPlay
        loop
        muted
      />
    </motion.div>
  
    {/* INTRO overlay (your multi-gradient) → fades out as before */}
    <motion.div
      className="absolute inset-0 z-10 pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: startTransition ? 0 : 1 }}
      transition={{ duration: 0.8 }}
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
  
    {/* AFTER transition: single dark gradient over whole hero (parallax-softened) */}
    <motion.div
      className="absolute inset-0 z-20 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: startTransition ? 1 : 0 }}
      transition={{ duration: 1 }}
      style={{
        /* eslint-disable @typescript-eslint/no-explicit-any */
        opacity: darkOpacity as any,
        background: "linear-gradient(0deg, #000 17.98%, rgba(0,0,0,0.30) 100%)",
      }}
    />
  
    {/* Blue parallax wash that appears while scrolling (pic 1 vibe) */}
    <motion.div
      className="absolute inset-x-0 bottom-0 z-20 pointer-events-none h-[55vh]"
      style={{
        // y: washY,
        // opacity: washOpacity,
        background:
          "linear-gradient(0deg, rgba(10,67,106,0.95) 0%, rgba(10,67,106,0.6) 60%, rgba(10,67,106,0) 100%)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        willChange: "transform, opacity",
      }}
    />
  
    {/* Title flow */}
    <AnimatePresence>
      {startTransition && showIntroText && (
        <motion.div
          key="intro-welcome"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-center px-4"
          initial={{ opacity: 0, x: -1200 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut" } }}
          exit={{ opacity: 0, transition: { duration: 0.35 } }}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }}
            exit={{ opacity: 0 }}
            style={{ y: titleY, willChange: "transform" }}
          >
            <div
              className="text-3xl xl:text-8xl font-montserrat text-transparent bg-clip-text tracking-tight"
              style={{
                backgroundImage:
                  "linear-gradient(91deg, #FFF 6.98%, #DBE4E9 11.7%, #C7D4DD 21.72%, #8DA8BA 37.06%, #86A2B6 43.54%, #7D9BB0 51.8%, #6B8DA5 60.65%, #5C829C 70.08%, #4B7592 80.7%, #346484 90.13%, #0A436A 107.52%, #0A436A 115.49%, #0A436A 129.05%)",
              }}
            >
              Your Global Partner
            </div>
            <div className="text-white/70 mt-2 md:text-3xl">In</div>
            <div className="text-white text-sm md:text-4xl">TICCS (Testing, Inspection, Certification, Classification and Statutory)</div>
          </motion.div>
  
          {/* Lottie (kept as-is) */}
          <motion.div
            key="radar-lottie"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-[550px] h-[150px] overflow-hidden [clip-path:ellipse(50%_100%_at_50%_100%)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.15 } }}
            exit={{ opacity: 0, y: 10, transition: { duration: 0.25 } }}
          >
            <DotLottieReact autoplay loop src="/fv_assets.lottie" style={{ width: 550, height: 300 }} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  </div>
  
  );
}
