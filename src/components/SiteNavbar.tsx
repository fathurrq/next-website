"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useHeroTransition } from "./TransitionProvider";

function useOverHero() {
  const [overHero, setOverHero] = useState(true);
  const rafRef = useRef<number | null>(null);
  useEffect(() => {
    const calc = () => {
      const hero = document.getElementById("hero");
      if (!hero) return setOverHero(false);
      const heroH = hero.offsetHeight || window.innerHeight;
      setOverHero(window.scrollY < heroH - 1);
    };
    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        calc();
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      });
    };
    calc();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", calc);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", calc);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);
  return overHero;
}

export default function SiteNavbar() {
  const { startTransition } = useHeroTransition();
  const overHero = useOverHero();

  // Logo: colored before transition; after transition -> white over hero, colored after hero
  const logoSrc =
    !startTransition ? "/bki-2.png" : overHero ? "/bki-white.png" : "/bki-2.png";

  // Wrapper classes: fill the hero (full screen) BEFORE/WHILE over hero, then sticky after
  const wrapperClass = overHero
    ? "fixed inset-0 z-30"           // fills the hero viewport
    : "sticky top-0 z-30";           // behaves like normal sticky bar

  return (
    <motion.nav className={wrapperClass}>
      {/* When over hero, make the container full screen and keep it transparent */}
      <div className={overHero ? "h-screen w-full flex justify-center" : "w-full flex justify-center"}>
        {/* Inner 80% bar anchored to the top */}
        <div className="w-[80%] py-4 relative">
          {/* transparent blur only; no background color */}
          <div className="absolute inset-0 backdrop-blur-sm bg-transparent pointer-events-none" />

          <div className="relative flex items-center justify-between">
            {/* LOGO (keeps your intro move) */}
            <motion.div
              layout
              className="relative h-12 w-[120px]"
              initial={{ position: "fixed", top: "20px", left: "50%", x: "-50%", y: 0 }}
              animate={
                startTransition
                  ? { position: "relative", top: 0, left: 0, x: 0, y: 0 }
                  : {}
              }
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <img
                src={logoSrc}
                alt="BKI Logo"
                className="absolute inset-0 h-full w-full object-contain transition-opacity duration-300"
              />
            </motion.div>

            {/* MENU — blend over hero, solid color off hero */}
            <motion.ul
              className={`hidden md:flex gap-8 text-sm tracking-wide transition-colors duration-200 ${
                overHero ? "mix-blend-difference text-white" : "text-black"
              }`}
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

            {/* RIGHT — same rule */}
            <motion.div
              className={`hidden md:flex items-center gap-4 transition-colors duration-200 ${
                overHero ? "mix-blend-difference text-white" : "text-black"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: startTransition ? 1 : 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              <a href="#" className="font-medium">Bahasa</a>
              <span className={`${overHero ? "opacity-90" : "opacity-60"}`}>English</span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
