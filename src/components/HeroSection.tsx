"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [startTransition, setStartTransition] = useState(false);
  const [showIntroText, setShowIntroText] = useState(false);

  useEffect(() => {
    if (!startTransition) return;
    setShowIntroText(true); // show "Welcome To"
    const t = setTimeout(() => setShowIntroText(false), 3000);
    // 500ms hold + ~350ms fade out
    return () => clearTimeout(t);
  }, [startTransition]);
  useEffect(() => {
    const t = setTimeout(() => setStartTransition(true), 1000); // intro length
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${startTransition ? "blur-0 scale-100" : "blur-md scale-105"
          }`}
        src="/hero-video.mp4"
        autoPlay
        loop
        muted
      />

      {/* INTRO overlays (white left + blue bottom) -> fade OUT */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: startTransition ? 0 : 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a3b62]/70 via-transparent to-transparent" />
        {/* optional soft vignette */}
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* POST-TRANSITION overlay (darken bottom 50%) -> fade IN */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-transparent z-20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: startTransition ? 1 : 0 }}
        transition={{ duration: 1 }}
      />

      {/* STICKY NAVBAR */}
      <motion.div
        className="sticky top-0 w-full z-30 backdrop-blur-sm flex justify-center"
      >
        {/* Inner navbar container with 80% width */}
        <div className="w-[80%] flex items-center justify-between py-4 text-white relative">
          {/* Logo */}
          <motion.div
            layout
            className="relative h-12 w-[120px]"
            initial={{ position: "fixed", top: "20px", left: "50%", x: "-50%", y: 0 }}
            animate={startTransition ? { position: "relative", top: 0, left: 0, x: 0, y: 0 } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <motion.img
              src="/bki-2.png"
              alt="BKI Logo Color"
              className="absolute inset-0 h-full w-full object-contain"
              initial={{ opacity: 1, scale: 2, top: "20px" }}
              animate={{
                opacity: startTransition ? 0 : 1,
                scale: startTransition ? 1 : 2,
                top: "0px"
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* White logo (after transition) — normal size */}
            <motion.img
              src="/bki-white.png"
              alt="BKI Logo White"
              className="absolute inset-0 h-full w-full object-contain"
              initial={{ opacity: 0, scale: 1, top: "20px" }}
              animate={{ opacity: startTransition ? 1 : 0, scale: 1, top: "0px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Menu */}
          <motion.ul
            className="hidden md:flex gap-8 text-sm tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: startTransition ? 1 : 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Publication</a></li>
            <li><a href="#">Opportunity</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">PPID</a></li>
          </motion.ul>

          {/* Right-side actions */}
          <motion.div
            className="hidden md:flex items-center gap-4 opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: startTransition ? 1 : 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            <a href="#" className="font-medium">Bahasa</a>
            <span className="opacity-60">English</span>
          </motion.div>

          {/* Partial-width border */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-px bg-white/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: startTransition ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </motion.div>


      {/* Title & tagline */}
      {/* Title & Tagline with exact Figma gradient */}
      <AnimatePresence>
        {startTransition && showIntroText && (
          <motion.div
            key="intro-welcome"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-center px-4"
            initial={{ opacity: 0, x: -1200 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }}
            exit={{ opacity: 0, transition: { duration: 0.35 } }}
          >
            <h1 className="text-5xl md:text-6xl font-semibold text-white">Welcome To</h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* B) Title + Tagline — fade IN (no slide), with your Figma gradient */}
      <AnimatePresence>
        {startTransition && !showIntroText && (
          <motion.div
            key="main-hero-text"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }}
            exit={{ opacity: 0 }}
          >
            <h1
              className="text-5xl md:text-6xl font-semibold text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #FFFFFF 0%, #346484 100%)",
              }}
            >
              Your Global Partner
            </h1>
            <p className="text-white opacity-60">In</p>
            <p
              className="text-xl md:text-2xl"
            >
              Testing, Inspection and Certification
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
