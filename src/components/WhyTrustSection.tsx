// components/WhyTrustSection.tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function WhyTrustSection() {
  const IMGS = ["/bki-marine.svg", "/bki-marine2.svg", "/bki-marine3.svg", "/bki-marine4.svg", "/bki-marine5.svg"];
  const ref = useRef<HTMLDivElement>(null);

  // Track scroll progress for this section only
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-[140vh] md:min-h-[160vh] overflow-hidden"
    >
      {/* Bottom full-screen image */}
      <img
        src="/office.svg"
        alt="Background"
        className="absolute bottom-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#0A436A]/70 via-[#0A436A]/30 to-transparent" />

      {/* Top strip (scroll controlled) */}
      <div className="absolute top-0 left-0 w-full h-[34vh] md:h-[38vh] overflow-hidden">
        <motion.div className="flex h-full w-[200%]" style={{ x }}>
          {/* Set A */}
          <div className="flex h-full w-1/2">
            {IMGS.map((src, i) => (
              <img
                key={`A-${i}`}
                src={src}
                alt={`Marine ${i + 1}`}
                className="h-full w-1/4 flex-none object-cover"
              />
            ))}
          </div>
          {/* Set B */}
          <div className="flex h-full w-1/2">
            {IMGS.map((src, i) => (
              <img
                key={`B-${i}`}
                src={src}
                alt={`Marine dup ${i + 1}`}
                className="h-full w-1/4 flex-none object-cover"
              />
            ))}
          </div>
        </motion.div>

        {/* Gradient fade at bottom of strip */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />
      </div>

      {/* Center titles — centered to the entire section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <h2 className="font-montserrat text-white text-[18vw] leading-none md:text-[10vw] drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
          Why
        </h2>
        <p className="mt-4 md:mt-6 text-white/95 text-[6.5vw] md:text-[3vw]">
          Global Client Trust Us?
        </p>
      </div>
    </section>
  );
}
