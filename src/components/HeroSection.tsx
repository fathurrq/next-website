"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [startTransition, setStartTransition] = useState(false);

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
        src="/463601_Ha_Long_Bay_Vietnam_1920x1080.mp4"
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
              initial={{ opacity: 1 }}
              animate={{ opacity: startTransition ? 0 : 1 }}
              transition={{ duration: 1 }}
            />
            <motion.img
              src="/bki-white.png"
              alt="BKI Logo White"
              className="absolute inset-0 h-full w-full object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: startTransition ? 1 : 0 }}
              transition={{ duration: 1 }}
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
        {startTransition && (
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-center px-4"
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={{
              hidden: { opacity: 0, x: -1220 },
              show: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.9, ease: "easeOut", staggerChildren: 0.12 },
              },
            }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-semibold text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #FFFFFF 0%, #86A2B6 50%, #4B7592 100%)",
              }}
              variants={{ hidden: { opacity: 0, x: -80 }, show: { opacity: 1, x: 0 } }}
            >
              Your Global Partner
            </motion.h1>

            <motion.p
              className="mt-4 text-xl md:text-2xl text-transparent bg-clip-text"
              variants={{ hidden: { opacity: 0, x: -60 }, show: { opacity: 1, x: 0 } }}
            >
              Biro Klasifikasi Indonesia
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
