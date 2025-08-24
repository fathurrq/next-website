"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    text: (
      <>
        Working at <b>BKI</b> has given me opportunities to grow while contributing to national maritime progress.
      </>
    ),
  },
  {
    id: 2,
    text: (
      <>
        Innovation <span className="text-white/30">drives our</span> <br />
        growth, teamwork <span className="text-white/30">fuels our</span> success
      </>
    ),
  },
  {
    id: 3,
    text: (
      <>
        Customer <span className="text-white/30">is our</span> <br />
        focus, excellence <span className="text-white/30">is our</span> standard
      </>
    ),
  },
];

export default function CultureCarousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative bg-[#F15A25] text-white p-6 md:p-10 rounded-lg shadow-lg h-[50vh] md:h-[60vh] overflow-hidden w-1/2">
      {/* Slide animation */}
      <AnimatePresence mode="wait">
        <motion.h2
          key={slides[index].id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-medium text-white"
        >
          {slides[index].text}
        </motion.h2>
      </AnimatePresence>

      {/* Bottom navigation */}
      <div className="bg-white/30 absolute bottom-[20px] left-[16px] right-[16px] flex justify-between items-center py-2 px-4 rounded">
        <button onClick={prevSlide}>
          <Image
            src="/left-arrow.png"
            alt="Left Arrow"
            width={32}
            height={30}
            className="w-4 md:w-6 lg:w-8 h-4 md:h-6 lg:h-8 cursor-pointer"
          />
        </button>
        <div className="flex items-center gap-2 md:gap-4">
          <p className="text-sm md:text-lg lg:text-xl font-semibold">Voices from Our People</p>
          <p className="text-sm md:text-lg lg:text-xl font-semibold">
            {index + 1}
            <span className="text-white/50">/{slides.length}</span>
          </p>
        </div>
        <button onClick={nextSlide}>
          <Image
            src="/right-arrow.png"
            alt="Right Arrow"
            width={32}
            height={30}
            className="w-4 md:w-6 lg:w-8 h-4 md:h-6 lg:h-8 cursor-pointer"
          />
        </button>
      </div>

      {/* Quotation mark */}
      <Image
        src="/quotation-mark.png"
        alt="Quotation Mark"
        width={245}
        height={192}
        className="absolute bottom-[10vh] right-[10px] w-[100px] md:w-[150px] lg:w-[200px] opacity-40"
      />
    </div>
  );
}
