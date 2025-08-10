"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useHeroTransition } from "./TransitionProvider";

/* ---------- helpers ---------- */
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

/* ---------- menu data ---------- */
const NAV = [
  {
    label: "Home",
    href: "#"

  },
  {
    label: "Services", href: "#",
    submenu: [
      { label: "Classification", href: "#" },
      { label: "Statutory", href: "#" },
      { label: "Marine Services", href: "#" },
      { label: "Energy & Industry", href: "#" },
      { label: "BKI Academy", href: "#" },
    ],
  },
  {
    label: "Research", href: "#",
    submenu: [
      { label: "Research & Development", href: "#" },
      { label: "Technical Journal", href: "#" },
    ],
  },
  {
    label: "Publication", href: "#",
    submenu: [
      { label: "News", href: "#" },
      { label: "Event", href: "#" },
      { label: "Article", href: "#" },
      { label: "Annual Report", href: "#" },
    ]

  },
  {
    label: "About Us", href: "#",
    submenu: [
      { label: "Company Profile", href: "#" },
      { label: "Achievement", href: "#" },
      { label: "Opportunity", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "ESGRC", href: "#" },
    ],
  },
];

/* -------------------- component -------------------- */
export default function SiteNavbar() {
  const { startTransition } = useHeroTransition();
  const overHero = true; // wire your over-hero logic if needed
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  // desktop dropdown state
  const [hovered, setHovered] = useState<number | null>(null);
  const closeTimer = useRef<number | null>(null);

  const wrapperClass = overHero ? "fixed inset-0 z-30" : "sticky top-0 z-30";
  const textClass = overHero ? "mix-blend-difference text-white" : "text-black";

  const handleEnter = (i: number) => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setHovered(i);
  };
  const handleLeaveSoon = () => {
    closeTimer.current = window.setTimeout(() => setHovered(null), 90) as unknown as number;
  };

  return (
    <motion.nav className={wrapperClass}>
      <div className={overHero ? "h-screen w-full flex justify-center" : "w-full flex justify-center"}>
        <div className="w-[90%] md:w-[80%] py-3 md:py-4 relative">
          <div className="absolute inset-0 bg-transparent pointer-events-none" />

          {/* ===== layered navbar bar ===== */}
          <div className="relative rounded-xl py-4 px-0">
            {/* background layer only (animates in) */}
            <motion.div
              className="absolute inset-0 rounded-xl backdrop-blur-md"
              initial={{ opacity: 0, scaleY: 0.92, transformOrigin: "top" }}
              animate={{
                opacity: startTransition ? 1 : 0,
                scaleY: startTransition ? 1 : 0.92,
              }}
              transition={{ delay: 0.8, duration: 0.6, ease: "easeInOut" }}
              style={{ backgroundColor: "rgba(0,0,0,0.70)" }} // bg-black/70
            />

            {/* foreground content stays visible from first paint */}
            <div className="relative z-10 flex items-center justify-between">
              {/* LOGO */}
              <motion.div
                layout
                className="relative h-10 w-[110px] md:h-12 md:w-[120px]"
                initial={
                  isMobile
                    ? { position: "fixed", top: "50%", left: "50%", x: "-50%", y: "-50%" }
                    : { position: "fixed", top: "20px", left: "50%", x: "-50%", y: 0 }
                }
                animate={startTransition ? { position: "relative", top: 0, left: 0, x: 0, y: 0, scale: 1 } : {}}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{ willChange: "transform", transformOrigin: "left center" }}
              >
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

              {/* DESKTOP MENU + DROPDOWNS */}
              <motion.ul
                className={`hidden md:flex gap-8 text-sm tracking-wide transition-colors font-semibold duration-200 ${textClass}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: startTransition ? 1 : 0 }}
                transition={{ delay: 1.0, duration: 0.8 }}
              >
                {NAV.map((item, i) => {
                  const hasSub = !!item.submenu?.length;
                  return (
                    <li
                      key={item.label}
                      className="relative group"
                      onMouseEnter={() => handleEnter(i)}
                      onMouseLeave={handleLeaveSoon}
                    >
                      <a
                        href={item.href}
                        className="relative text-lg inline-flex items-center gap-1 px-1 py-2 transition-colors group-hover:!text-white/30"
                        onFocus={() => handleEnter(i)}
                        onBlur={handleLeaveSoon}
                      >
                        {item.label}
                        {/* white bottom indicator */}
                        <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-4 h-[2px] w-full rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>

                      {hasSub && (
                        <AnimatePresence>
                          {hovered === i && (
                            <motion.div
                              initial={{ opacity: 0, y: 8, scale: 0.98 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 8, scale: 0.98 }}
                              transition={{ duration: 0.16, ease: "easeOut" }}
                              className="absolute left-0 top-full z-[60] mt-7"
                              onMouseEnter={() => handleEnter(i)}
                              onMouseLeave={handleLeaveSoon}
                            >
                              <div
                                className="w-80 rounded-2xl shadow-2xl overflow-hidden border border-white/10 backdrop-blur-md p-4 py-0"
                                style={{
                                  background:
                                    "linear-gradient(180deg, rgba(12,38,58,0.88) 0%, rgba(10,67,106,0.82) 100%)",
                                }}
                              >
                                <ul className="py-3">
                                  {item.submenu!.map((sub, si) => (
                                    <li key={sub.label}>
                                      <a
                                        href={sub.href}
                                        className={`
                                          font-normal
                                          block py-3 text-[16px] 
                                          text-white 
                                          border-b border-white/30
                                          hover:text-white/30 hover:border-white
                                          transition-colors duration-150
                                        `}
                                      >
                                        {sub.label}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}

                    </li>
                  );
                })}
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

              {/* MOBILE HAMBURGER */}
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
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </motion.button>
            </div>
          </div>
          {/* ===== /layered navbar bar ===== */}

          {/* MOBILE DRAWER */}
          <AnimatePresence>
            {open && (
              <>
                <motion.div
                  className="fixed inset-0 bg-black/40 md:hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setOpen(false)}
                />
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
                    {NAV.map((item) => (
                      <a key={item.label} className="block py-2" href={item.href}>
                        {item.label}
                      </a>
                    ))}
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
