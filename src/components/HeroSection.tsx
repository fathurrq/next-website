"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useHeroTransition } from "./TransitionProvider";
import dynamic from "next/dynamic";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// Dynamically import to avoid SSR issues
// const LottiePlayer = dynamic(() => import("@lottiefiles/react-lottie-player").then(m => m.Player), { ssr: false });

export default function HeroSection() {
  const { startTransition, setStartTransition } = useHeroTransition();
  const [showIntroText, setShowIntroText] = useState(false);

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
    <div id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${startTransition ? "blur-0 scale-100" : "blur-md scale-105"}`}
        src="/hero-video.mp4"
        autoPlay loop muted
      />

      {/* INTRO overlays -> fade OUT (includes darken + white-left + blue-bottom + vignette) */}
      <motion.div
  className="absolute inset-0 z-10 pointer-events-none"
  initial={{ opacity: 1 }}
  animate={{ opacity: startTransition ? 0 : 1 }}
  transition={{ duration: 0.8 }}
  style={{
    background: `
      linear-gradient(0deg, #0A436A 0%, rgba(10, 67, 106, 0) 100%),
      linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #FFF 100%),
      linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0) 100%)
    `,
    backdropFilter: "blur(22px)",
    WebkitBackdropFilter: "blur(22px)", // Safari
    willChange: "opacity, filter",
  }}
/>

      {/* AFTER transition: darken top & bottom */}
      <motion.div
  className="absolute inset-0 z-20 pointer-events-none"
  initial={{ opacity: 0 }}
  animate={{ opacity: startTransition ? 1 : 0 }}
  transition={{ duration: 1 }}
  style={{
    background:
      "linear-gradient(0deg, #000 17.98%, rgba(0, 0, 0, 0.30) 100%)"
  }}
/>

      {/* Title flow (unchanged, your two-step sequence) */}
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
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }}
              exit={{ opacity: 0 }}
            >
              {/* Title with bevel/gloss effect */}
              <h1
                className="text-5xl md:text-6xl font-montserrat text-transparent bg-clip-text tracking-tight"
                style={{
                  backgroundImage: `linear-gradient(91deg, #FFF 6.98%, #DBE4E9 11.7%, #C7D4DD 21.72%, #8DA8BA 37.06%, #86A2B6 43.54%, #7D9BB0 51.8%, #6B8DA5 60.65%, #5C829C 70.08%, #4B7592 80.7%, #346484 90.13%, #0A436A 107.52%, #0A436A 115.49%, #0A436A 129.05%)`
                  ,
                }}
              >
                Your Global Partner
              </h1>
              <p className="text-white/70 mt-2">In</p>
              <p className="text-xl md:text-2xl">Testing, Inspection and Certification</p>
            </motion.div>

            {/* Lottie appears only when main text is visible */}
            <motion.div
              key="radar-lottie"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-[550px] h-[150px] overflow-hidden [clip-path:ellipse(50%_100%_at_50%_100%)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.15 } }}
              exit={{ opacity: 0, y: 10, transition: { duration: 0.25 } }}
            >
              <DotLottieReact
                autoplay
                loop
                src="/fv_assets.lottie"
                style={{ width: 550, height: 300 }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>


    </div>
  );
}
