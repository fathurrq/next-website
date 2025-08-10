"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useHeroTransition } from "./TransitionProvider";


function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(`(max-width:${breakpoint - 1}px)`);
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener?.("change", update);
    return () => mql.removeEventListener?.("change", update);
  }, [breakpoint]);
  return isMobile;
}

/* -------------------- component -------------------- */
export default function SiteNavbar() {
  const { startTransition } = useHeroTransition();
  const overHero = true;
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  // Wrapper: fill hero while over it, then sticky after
  const wrapperClass = overHero ? "fixed inset-0 z-30" : "sticky top-0 z-30";

  // Text color / blend
  const textClass = overHero ? "mix-blend-difference text-white" : "text-black";

  return (
    <motion.nav className={wrapperClass}>
      <div className={overHero ? "h-screen w-full flex justify-center" : "w-full flex justify-center"}>
        <div className="w-[90%] md:w-[80%] py-3 md:py-4 relative">
          {/* transparent blur only */}
          <div className="absolute inset-0 bg-transparent pointer-events-none" />

          <div className="relative flex items-center justify-between  bg-black opacity-70 py-4 px-0 rounded-lg">
            {/* LOGO — mobile starts center-center, desktop starts top-center */}
            <motion.div
              layout
              className="relative h-10 w-[110px] md:h-12 md:w-[120px]"
              initial={
                isMobile
                  ? {
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    x: "-50%",
                    y: "-50%",
                  }
                  : {
                    position: "fixed",
                    top: "20px",
                    left: "50%",
                    x: "-50%",
                    y: 0,
                  }
              }
              animate={
                startTransition
                  ? { position: "relative", top: 0, left: 0, x: 0, y: 0, scale: 1 }
                  : {}
              }
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ willChange: "transform", transformOrigin: "left center" }}
            >
              {/* crossfade colored ↔ white based on hero/transition */}
              <motion.img
                src="/bki-2.png"
                alt="BKI Logo Color"
                className="absolute inset-0 h-full w-full object-contain"
                initial={{ opacity: 1, scale: 2, top: "20px" }}
                animate={{ opacity: !startTransition ? 1 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              <motion.img
                src="/bki-white.png"
                alt="BKI Logo White"
                className="absolute inset-0 h-full w-full object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: startTransition && overHero ? 1 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </motion.div>

            {/* DESKTOP MENU */}
            <motion.ul
              className={`hidden md:flex gap-8 text-sm tracking-wide transition-colors font-semibold duration-200 ${textClass}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: startTransition ? 1 : 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              <li><a href="#">About Us</a></li>
              <li><a href="#"> Services</a></li>
              <li><a href="#">Research</a></li>
              <li><a href="#">Publication</a></li>
              <li><a href="#">About Us</a></li>
            </motion.ul>

            {/* DESKTOP RIGHT */}
            <motion.div
              className={`hidden md:flex items-center gap-4 transition-colors duration-200 ${textClass}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: startTransition ? 1 : 0, paddingRight: "16px" }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              <a href="#" className="font-medium">Bahasa</a>
              <span className={`${overHero ? "opacity-90" : "opacity-60"}`}>English</span>
            </motion.div>

            {/* MOBILE HAMBURGER (shows only after transition) */}
            <motion.button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${textClass}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: startTransition ? 1 : 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              {/* simple hamburger icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="block">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </motion.button>
          </div>

          {/* MOBILE DRAWER */}
          <AnimatePresence>
            {open && (
              <>
                {/* backdrop */}
                <motion.div
                  className="fixed inset-0 bg-black/40 md:hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setOpen(false)}
                />
                {/* panel */}
                <motion.aside
                  className="fixed right-0 top-0 h-full w-72 bg-white md:hidden z-40 shadow-xl"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "tween", duration: 0.25 }}
                >
                  <div className="p-4 flex items-center justify-between border-b">
                    <span className="font-semibold">Menu</span>
                    <button
                      aria-label="Close menu"
                      className="p-2 rounded-md hover:bg-black/5"
                      onClick={() => setOpen(false)}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </button>
                  </div>
                  <nav className="p-4 space-y-3 text-[15px]">
                    <a className="block py-2" href="#">About Us</a>
                    <a className="block py-2" href="#">Our Services</a>
                    <a className="block py-2" href="#">Resources</a>
                    <a className="block py-2" href="#">Publication</a>
                    <a className="block py-2" href="#">Opportunity</a>
                    <a className="block py-2" href="#">Gallery</a>
                    <a className="block py-2" href="#">PPID</a>
                    <div className="h-px bg-black/10 my-2" />
                    <div className="flex items-center gap-3 text-sm">
                      <a className="font-medium" href="#">Bahasa</a>
                      <span className="opacity-60">English</span>
                    </div>
                  </nav>
                </motion.aside>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}
