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
    { src: "/member.png", topTitle: "Why", subTitle: "The Global Trust Us", bottomRight: "Certified to International ISO Standards" },
    { src: "/office.svg", topTitle: "Why", subTitle: "The Global Trust Us", bottomRight: "International Recognition & Compliance" },
    { src: "/member.png", topTitle: "Why", subTitle: "The Global Trust Us", bottomRight: "Trusted by Global Clients" },
    { src: "/office.svg", topTitle: "Why", subTitle: "The Global Trust Us", bottomRight: "Decades of Experience" },
    { src: "/member.png", topTitle: "Why", subTitle: "The Global Trust Us", bottomRight: "Innovation & Excellence" },
    { src: "/member.png", topTitle: "Why", subTitle: "The Global Trust Us", bottomRight: "Innovation & Excellence" },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const p = useSpring(scrollYProgress, { stiffness: 220, damping: 32, mass: 0.35 });

  const [index, setIndex] = useState(0);

  // ✅ New intro text swap logic
  const { scrollYProgress: sectionEnter } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });
  const [showCenter, setShowCenter] = useState(true);
  const swappedOnceRef = useRef(false);

  useMotionValueEvent(sectionEnter, "change", (v) => {
    if (!swappedOnceRef.current && v >= 1) {
      setShowCenter(false);
      swappedOnceRef.current = true;
    }
  });

  // 🔹 Keep your snapping logic untouched
  const isLockedRef = useRef(false);
  const lastProgressRef = useRef(0);
  const TRANSITION_MS = 520;
  const EPS = 0.001;
  const canExitRef = useRef(false);

  if (index === slides.length - 1 && !canExitRef.current) {
    canExitRef.current = true;
  }

  useMotionValueEvent(p, "change", (v) => {
    const n = slides.length;
    if (n <= 1) return;
    if (isLockedRef.current) {
      lastProgressRef.current = v;
      return;
    }

    const curr = index;
    const prevV = lastProgressRef.current;
    lastProgressRef.current = v;
    const dir = v > prevV + EPS ? 1 : v < prevV - EPS ? -1 : 0;
    if (dir === 0) return;

    const progressPerSlide = 1 / (n - 1);
    const currentProgress = curr * progressPerSlide;
    const minProgressStep = progressPerSlide * 0.2;
    const maxProgressStep = progressPerSlide * 0.8;

    if (dir > 0 && curr < n - 1) {
      const nextSlideProgress = (curr + 1) * progressPerSlide;
      if (v >= currentProgress + minProgressStep && v <= nextSlideProgress + maxProgressStep) {
        isLockedRef.current = true;
        canExitRef.current = false;
        setIndex(curr + 1);
        setTimeout(() => {
          isLockedRef.current = false;
          if (curr + 1 === n - 1) {
            setTimeout(() => {
              canExitRef.current = true;
            }, 300);
          }
        }, TRANSITION_MS);
        return;
      }
    }

    if (dir > 0 && curr === n - 1 && canExitRef.current && v > currentProgress + minProgressStep) {
      return;
    }

    if (dir < 0 && curr > 0) {
      const prevSlideProgress = (curr - 1) * progressPerSlide;
      if (v <= currentProgress - minProgressStep && v >= prevSlideProgress - maxProgressStep) {
        isLockedRef.current = true;
        setIndex(curr - 1);
        setTimeout(() => { isLockedRef.current = false; }, TRANSITION_MS);
        return;
      }
    }
  });

  const sectionHeight = `${slides.length * 120}vh`;

  return (
    <section id="why-trust" ref={sectionRef} className="relative w-full snap-start" style={{ minHeight: sectionHeight }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        {/* Center intro text */}
        <AnimatePresence>
          {showCenter && (
            <motion.div
              key="centerText"
              className=" absolute top-[12vh] left-1/2 -translate-x-1/2 text-center text-white z-20"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h2 className="italic font-montserrat text-[12vw] md:text-[6vw] font-bold leading-none">Why</h2>
              <p className="text-[5vw] md:text-[2.5vw] font-medium mt-1">Global Client Trust Us</p>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence initial={false} mode="popLayout">
          <SlideView key={index} slide={slides[index]} hideText={showCenter} />
        </AnimatePresence>
      </div>
    </section>
  );
}

function SlideView({ slide, hideText }: { slide: Slide; hideText: boolean }) {
  return (
    <motion.div className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.45, ease: "easeInOut" }}>
      <motion.img
        src={slide.src}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.03, y: 0 }}
        animate={{ scale: 1.08, y: 6 }}
        exit={{ scale: 1.03, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        draggable={false}
      />
      <div className="absolute inset-0 bg-black/35" />

      {!hideText && (
        <>
          {/* Top-left text with fade-in */}
          <motion.div
            className="absolute top-[12vh] left-[6vw] right-[10vw] text-white"
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }} // longer fade-in
          >
            <h2 className="font-montserrat text-[13vw] md:text-[8vw] leading-none font-extrabold">
              {slide.topTitle ?? "Why"}
            </h2>
            <p className="mt-2 text-[6vw] md:text-[3vw] font-medium">{slide.subTitle ?? "The Global Trust Us"}</p>
          </motion.div>

          {/* Bottom-right text with fade-in */}
          <motion.div
            className="absolute bottom-[9vh] right-[6vw] left-[10vw] md:left-auto text-white text-right"
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 12, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="text-[8vw] md:text-[3.6vw] font-extrabold leading-[1.05]">
              {slide.bottomRight}
            </div>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}
