// components/WhyTrustSection.tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function WhyTrustSection() {
  const IMGS = ["/bki-marine.svg", "/bki-marine2.svg", "/bki-marine3.svg", "/bki-marine4.svg", "/bki-marine5.svg"];
  const ref = useRef<HTMLDivElement>(null);

  // Track scroll progress for this section only
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // 0 at section bottom hits viewport bottom; 1 when top hits top
  });

  // Add a gentle spring for smoother, slower animation
  const p = useSpring(scrollYProgress, { stiffness: 80, damping: 30, mass: 0.6 });

  // Top strip (slower horizontal movement)
  // Start at 0%, end at -35% for slower sliding
  const stripX = useTransform(p, [0, 1], ["0%", "-35%"]);

  return (
    <section
      ref={ref}
      className="hidden md:block relative w-full min-h-[35vh] md:min-h-[35vh] overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-[34vh] md:h-[38vh] overflow-hidden">
        <motion.div className="flex h-full w-[220%]" style={{ x: stripX }}>
          {/* Set A */}
          <div className="flex h-full w-1/2">
            {IMGS.map((src, i) => (
              <img
                key={`A-${i}`}
                src={src}
                alt=""
                className="h-full w-1/4 flex-none object-cover"
                aria-hidden
              />
            ))}
          </div>
          {/* Set B (for seamless loop look) */}
          <div className="flex h-full w-1/2">
            {IMGS.map((src, i) => (
              <img
                key={`B-${i}`}
                src={src}
                alt=""
                className="h-full w-1/4 flex-none object-cover"
                aria-hidden
              />
            ))}
          </div>
        </motion.div>

        {/* Soft fade at bottom of strip */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />
      </div>

     
    </section>
  );
}
