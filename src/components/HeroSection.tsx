"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [startTransition, setStartTransition] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTransition(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ${startTransition ? "blur-0 scale-100" : "blur-md scale-105"
          }`}
        src="/463601_Ha_Long_Bay_Vietnam_1920x1080.mp4"
        autoPlay
        loop
        muted
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* NAVBAR CONTAINER */}
      <div className="absolute top-0 left-0 w-full px-8 py-6 z-30 flex items-center justify-between text-white">
        {/* LOGO WITH ANIMATION */}
        <motion.div
          layout
          initial={{
            top: "20px",
            left: "50%",
            x: "-50%",
            y: 0,
            position: "fixed",
          }}
          animate={
            startTransition
              ? {
                position: "relative",
                top: 0,
                left: 0,
                x: 0,
                y: 0,
              }
              : {}
          }
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="relative h-20 w-[160px]"
        >
          {/* Colored logo (initial) */}
          <motion.img
            src="/bki-2.png"
            alt="BKI Logo Color"
            className="absolute inset-0 object-contain h-full w-full"
            initial={{ opacity: 1 }}
            animate={{ opacity: startTransition ? 0 : 1 }}
            transition={{ duration: 1 }}
          />

          {/* White logo (after transition) */}
          <motion.img
            src="/bki-white.png"
            alt="BKI Logo White"
            className="absolute inset-0 object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: startTransition ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        </motion.div>




        {/* MENU ITEMS */}
        <motion.div
          className="hidden md:flex gap-10 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: startTransition ? 1 : 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </motion.div>
      </div>

      {/* TITLE & TAGLINE */}
      <AnimatePresence>
        {startTransition && (
          <motion.div
            className="absolute bottom-20 left-10 z-30 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <h1 className="text-5xl font-bold">Biro Klasifikasi Indonesia</h1>
            <p className="text-xl mt-4">Towards a Safer Maritime Future</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
