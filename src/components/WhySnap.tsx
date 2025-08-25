"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
      src: "/member.jpg",
      topTitle: "Why",
      subTitle: "Global Client Trust Us",
      bottomRight: "Certified to International ISO Standards",
      description:
        "Setting safety and performance standards for every vessel. Trusted by industry leaders for our rigorous certification process.",
    },
    {
      src: "/office-bki-1.jpg",
      topTitle: "Why",
      subTitle: "Global Client Trust Us",
      bottomRight: "International Recognition & Compliance",
      description:
        "Ensuring adherence to global standards and regulations. Our compliance record is recognized by authorities worldwide.",
    },
    {
      src: "/crew-1.jpg",
      topTitle: "Why",
      subTitle: "Global Client Trust Us",
      bottomRight: "Decades of Experience",
      description:
        "Leveraging years of expertise to deliver exceptional service. Our seasoned professionals guarantee reliable solutions.",
    },
  ];

  const [index, setIndex] = useState(0);

  // go to next slide
  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  // go to previous slide
  const prevSlide = useCallback(() => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // autoplay with reset on user interaction
  useEffect(() => {
    const timer = setInterval(nextSlide, 2500);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="why-trust" className="relative w-full h-screen snap-start">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        <AnimatePresence initial={false} mode="popLayout">
          <SlideView key={index} slide={slides[index]} hideText={false} />
        </AnimatePresence>

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 z-20 cursor-pointer"
        >
          <ChevronLeft size={32} />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 z-20 cursor-pointer"
        >
          <ChevronRight size={32} />
        </button>

        {/* Circle Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === index ? "bg-white" : "border border-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SlideView({ slide, hideText }: { slide: Slide; hideText: boolean }) {
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
      <div className="absolute inset-0 bg-black/10" />

      {/* Bottom gradient */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "120px",
          background: "linear-gradient(to bottom, transparent 0%, #D4A66A 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {!hideText && (
        <>
          {/* Top-left text */}
          <motion.div
            className="absolute top-[12vh] left-4 md:left-24 right-[10vw] text-white"
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="font-montserrat text-5xl md:text-9xl leading-none font-extrabold flex items-center gap-2">
              {slide.topTitle ?? "Why"}{" "}
              <Image
                src="/tick-only.png"
                alt="Tick"
                width={64}
                height={32}
                className="md:w-[96px] md:h-[96px] w-[32px] h-[32px]"
              />
            </div>
            <p className="mt-2 text-xl md:text-5xl font-medium">
              {slide.subTitle ?? "The Global Trust Us"}
            </p>
          </motion.div>

          {/* Bottom-right text */}
          <motion.div
            className="absolute bottom-[9vh] right-24 left-[10vw] md:left-auto text-white text-right"
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 12, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="text-2xl md:text-5xl font-extrabold leading-[1.05] md:w-[50vw] text-left ">
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
