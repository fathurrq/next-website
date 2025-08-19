"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";

type Slide = {
  src: string;
  topTitle?: string;
  subTitle?: string;
  bottomRight?: string;
  description?: string;
};

export default function WhyCrossfadeSteppedLocked() {
  const slides: Slide[] = [
    {
      src: "/member.png",
      topTitle: "Why",
      subTitle: "Global Client Trust Us",
      bottomRight: "Certified to International ISO Standards",
      description:
        "Setting safety and performance standards for every vessel. Trusted by industry leaders for our rigorous certification process.",
    },
    {
      src: "/office-bki-1.png",
      topTitle: "Why",
      subTitle: "Global Client Trust Us",
      bottomRight: "International Recognition & Compliance",
      description:
        "Ensuring adherence to global standards and regulations. Our compliance record is recognized by authorities worldwide.",
    },
    {
      src: "/crew-1.png",
      topTitle: "Why",
      subTitle: "Global Client Trust Us",
      bottomRight: "Decades of Experience",
      description:
        "Leveraging years of expertise to deliver exceptional service. Our seasoned professionals guarantee reliable solutions.",
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const p = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 32,
    mass: 0.35,
  });

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
      if (
        v >= currentProgress + minProgressStep &&
        v <= nextSlideProgress + maxProgressStep
      ) {
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

    if (
      dir > 0 &&
      curr === n - 1 &&
      canExitRef.current &&
      v > currentProgress + minProgressStep
    ) {
      return;
    }

    if (dir < 0 && curr > 0) {
      const prevSlideProgress = (curr - 1) * progressPerSlide;
      if (
        v <= currentProgress - minProgressStep &&
        v >= prevSlideProgress - maxProgressStep
      ) {
        isLockedRef.current = true;
        setIndex(curr - 1);
        setTimeout(() => {
          isLockedRef.current = false;
        }, TRANSITION_MS);
        return;
      }
    }
  });

  const sectionHeight = `${slides.length * 120}vh`;

  return (
    <section
      id="why-trust"
      ref={sectionRef}
      className="relative w-full snap-start"
      style={{ minHeight: sectionHeight }}
    >
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
              <h2 className="italic font-montserrat text-[12vw] md:text-[6vw] font-bold leading-none">
                Why
              </h2>
              <p className="text-[5vw] md:text-[2.5vw] font-medium mt-1">
                Global Client Trust Us
              </p>
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
  const isLastSlide = slide.bottomRight === "Decades of Experience";
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
    >
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
      {/* Add bottom gradient only for last slide */}
      {isLastSlide && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "120px",
            background:
              "linear-gradient(to bottom, transparent 0%, #D4A66A 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
      )}

      {!hideText && (
        <>
          {/* Top-left text with fade-in */}
          <motion.div
            className="absolute top-[12vh] left-4 md:left-24 right-[10vw] text-white"
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }} // longer fade-in
          >
            <div className="font-montserrat text-5xl md:text-9xl leading-none font-extrabold flex">
              {slide.topTitle ?? "Why"}{" "}
              <Image
                src="/tick-only.png"
                alt="Tick"
                width={128}
                height={32}
                sizes="(max-width: 768px) 64px, 64px"
              />
            </div>
            <p className="mt-2 text-xl md:text-5xl font-medium">
              {slide.subTitle ?? "The Global Trust Us"}
            </p>
          </motion.div>

          {/* Bottom-right text with fade-in */}
          <motion.div
            className="absolute bottom-[9vh] right-[1vw] left-[10vw] md:left-auto text-white text-right"
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 12, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="text-2xl md:text-5xl font-extrabold leading-[1.05] md:w-[50vw] text-left">
              {slide.bottomRight}
              <div className="text-sm font-normal mt-2 md:text-xl">
                {slide.description}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}
