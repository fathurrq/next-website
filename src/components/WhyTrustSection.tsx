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

  // Add a tiny spring so it feels buttery and avoids jitter
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });

  /* ---------- Parallax mappings ---------- */
  // Background (slow)
  const bgY = useTransform(p, [0, 1], ["-6vh", "8vh"]);    // gentle vertical drift
  const bgScale = useTransform(p, [0, 1], [1.02, 1.08]);  // subtle push-in

  // Top strip (faster horizontal)
  // Start at 0%, end at -65% so it keeps moving while in view
  const stripX = useTransform(p, [0, 1], ["0%", "-65%"]);

  // Headline “Why” — slight rise + subtle scale
  const titleY = useTransform(p, [0, 1], ["0vh", "-6vh"]);
  const titleScale = useTransform(p, [0, 1], [1, 0.96]);
  const titleOpacity = useTransform(p, [0, 0.15, 0.85, 1], [0.7, 1, 1, 0.85]);

  // Tagline — a bit more rise; fade in/out across the section
  const subY = useTransform(p, [0, 1], ["1vh", "-8vh"]);
  const subOpacity = useTransform(p, [0, 0.15, 0.8, 1], [0, 1, 1, 0.6]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-[140vh] md:min-h-[160vh] overflow-hidden"
    >
      {/* Bottom full-screen background with slow parallax */}
      <motion.img
        src="/member.png"
        alt="Background"
        className="absolute bottom-0 left-0 w-full h-full object-cover"
        style={{ y: bgY, scale: bgScale }}
        aria-hidden
      />

      {/* Tinted overlay to keep foreground legible */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#0A436A]/70 via-[#0A436A]/30 to-transparent" />

      {/* Top strip (scroll-controlled, faster) */}
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

      {/* Center titles — parallax on Y/opacity/scale */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <motion.h2
          className="font-montserrat text-white text-[18vw] leading-none md:text-[10vw] drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)] will-change-transform"
          style={{ y: titleY, scale: titleScale, opacity: titleOpacity }}
        >
          Why
        </motion.h2>
        <motion.p
          className="mt-4 md:mt-6 text-white/95 text-[6.5vw] md:text-[3vw] will-change-transform"
          style={{ y: subY, opacity: subOpacity }}
        >
          Global Client Trust Us?
        </motion.p>
      </div>
    </section>
  );
}
