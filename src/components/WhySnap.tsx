"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";

type Slide = {
  src: string;
  topTitle?: string;
  subTitle?: string;
  bottomRight?: string;
};

export default function WhyCrossfadeSteppedLocked() {
  const slides: Slide[] = [
    { src: "/member.png",  topTitle: "Why", subTitle: "The Global Trust Us", bottomRight: "Certified to International ISO Standards" },
    { src: "/office.svg",  topTitle: "Why", subTitle: "The Global Trust Us", bottomRight: "International Recognition & Compliance" },
    { src: "/member.png",  topTitle: "Why", subTitle: "The Global Trust Us", bottomRight: "Trusted by Global Clients" },
    { src: "/office.svg",  topTitle: "Why", subTitle: "The Global Trust Us", bottomRight: "Decades of Experience" },
    { src: "/member.png",  topTitle: "Why", subTitle: "The Global Trust Us", bottomRight: "Innovation & Excellence" },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll progress across the whole section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Slight smoothing; not too much or boundaries feel mushy
  const p = useSpring(scrollYProgress, { stiffness: 220, damping: 32, mass: 0.35 });

  const [index, setIndex] = useState(0);

  // ---- Lock so we never skip more than one slide ----
  const isLockedRef = useRef(false);
  const lastProgressRef = useRef(0);
  const TRANSITION_MS = 520; // match your crossfade (~0.45s) with a little padding
  const EPS = 0.001;         // tiny epsilon for numeric safety
  const canExitRef = useRef(false); // Track if we can exit to next section
  
  // Initialize canExitRef based on current index
  if (index === slides.length - 1 && !canExitRef.current) {
    // If we start on the last slide, allow exit immediately
    canExitRef.current = true;
  }

  useMotionValueEvent(p, "change", (v) => {
    const n = slides.length;
    if (n <= 1) return;

    // If we're mid-transition, ignore further progress changes
    if (isLockedRef.current) {
      lastProgressRef.current = v;
      return;
    }

    const curr = index;
    const prevV = lastProgressRef.current;
    lastProgressRef.current = v;

    // Determine direction of scroll (+ forward, - backward)
    const dir = v > prevV + EPS ? 1 : v < prevV - EPS ? -1 : 0;
    if (dir === 0) return;

    // More restrictive boundaries - require smaller progress jumps to advance
    // This prevents hard scrolling from jumping multiple slides
    const progressPerSlide = 1 / (n - 1);
    const currentProgress = curr * progressPerSlide;
    
    // Only advance if we've moved a reasonable amount but not too much
    const minProgressStep = progressPerSlide * 0.2; // 20% of a slide
    const maxProgressStep = progressPerSlide * 0.8; // 80% of a slide
    
    const progressDiff = Math.abs(v - currentProgress);
    
    // Forward direction
    if (dir > 0 && curr < n - 1) {
      const nextSlideProgress = (curr + 1) * progressPerSlide;
      // Only advance if we're past the midpoint but haven't jumped too far
      if (v >= currentProgress + minProgressStep && v <= nextSlideProgress + maxProgressStep) {
        isLockedRef.current = true;
        canExitRef.current = false; // Reset exit flag when transitioning
        setIndex(curr + 1);
        setTimeout(() => { 
          isLockedRef.current = false;
          // If we just reached the last slide, allow exit after a delay
          if (curr + 1 === n - 1) {
            setTimeout(() => {
              canExitRef.current = true;
            }, 300); // Additional delay before allowing exit
          }
        }, TRANSITION_MS);
        return;
      }
    }
    
    // Special case: if we're on the last slide and scrolling forward, allow scroll to propagate
    // This lets the user scroll to the next section after reaching the last image
    if (dir > 0 && curr === n - 1 && canExitRef.current && v > currentProgress + minProgressStep) {
      // Don't prevent scroll, let it continue to next section
      return;
    }
    
    // Backward direction
    if (dir < 0 && curr > 0) {
      const prevSlideProgress = (curr - 1) * progressPerSlide;
      // Only go back if we're before the midpoint but haven't jumped too far back
      if (v <= currentProgress - minProgressStep && v >= prevSlideProgress - maxProgressStep) {
        isLockedRef.current = true;
        setIndex(curr - 1);
        setTimeout(() => { isLockedRef.current = false; }, TRANSITION_MS);
        return;
      }
    }
  });

  // Give enough scroll distance to step through all slides
  const sectionHeight = `${slides.length * 120}vh`;

  return (
    <section
      ref={sectionRef}
      className="relative w-full snap-start"
      style={{ minHeight: sectionHeight }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        <AnimatePresence initial={false} mode="popLayout">
          <SlideView key={index} slide={slides[index]} />
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ------------ One visible slide (image + overlays) ------------ */

function SlideView({ slide }: { slide: Slide }) {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
    >
      {/* Background image with a subtle zoom-in */}
      <motion.img
        src={slide.src}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.03, y: 0 }}
        animate={{ scale: 1.08, y: 6 }}
        exit={{ scale: 1.03, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        draggable={false}
        aria-hidden
      />

      {/* Light darken for readability */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Top-left text */}
      <motion.div
        className="absolute top-[8vh] left-[6vw] right-[10vw] text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]"
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -12, opacity: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <h2 className="font-montserrat text-[13vw] md:text-[8vw] leading-none font-extrabold">
          {slide.topTitle ?? "Why"}{" "}
          <span className="align-text-top ml-2 text-[8vw] md:text-[4vw]">✅</span>
        </h2>
        <p className="mt-2 text-[6vw] md:text-[3vw] font-medium">
          {slide.subTitle ?? "The Global Trust Us"}
        </p>
      </motion.div>

      {/* Bottom-right text */}
      <motion.div
        className="absolute bottom-[9vh] right-[6vw] left-[10vw] md:left-auto text-white text-right"
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 12, opacity: 0 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.03 }}
      >
        <div className="text-[8vw] md:text-[3.6vw] font-extrabold leading-[1.05]">
          {slide.bottomRight}
        </div>
      </motion.div>
    </motion.div>
  );
}
