"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useHeroTransition } from "./TransitionProvider";
import Link from "next/link";

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

// NEW: compact mode for smaller laptops (<= 1120px)
function useCompact(breakpoint = 1120) {
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(`(max-width:${breakpoint}px)`);
    const update = () => setCompact(mql.matches);
    update();
    mql.addEventListener?.("change", update);
    return () => mql.removeEventListener?.("change", update);
  }, [breakpoint]);
  return compact;
}

/* ---------- menu data ---------- */
const NAV = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "#",
    submenu: [
      { label: "Classification", href: "#" },
      { label: "Statutory", href: "#" },
      { label: "Marine Services", href: "#" },
      { label: "Energy & Industry", href: "#" },
      { label: "BKI Academy", href: "#" },
    ],
  },
  {
    label: "Research",
    href: "#",
    submenu: [
      { label: "Research & Development", href: "#" },
      { label: "Technical Journal", href: "#" },
    ],
  },
  {
    label: "Publication",
    href: "#",
    submenu: [
      { label: "News", href: "/news" },
      { label: "Event", href: "/events" },
      { label: "Article", href: "/articles" },
      { label: "Annual Report", href: "" },
    ],
  },
  {
    label: "About Us",
    href: "#",
    submenu: [
      { label: "Company Profile", href: "/company-profile" },
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
  const overHero = true;
  const isMobile = useIsMobile();
  const isCompact = useCompact(1120); // <= 1120px → compact layout
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // desktop dropdown state
  const [hovered, setHovered] = useState<number | null>(null);
  // mobile menu helpers
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null); // which top-level item is expanded
  const [mobileLangOpen, setMobileLangOpen] = useState(false);

  // lock body scroll while open + close on Escape
  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeTimer = useRef<number | null>(null);

  // Track whether area under logo is dark → choose white vs color logo
  const logoRef = useRef<HTMLDivElement | null>(null);
  const [useWhiteLogo, setUseWhiteLogo] = useState<boolean>(true);

  useEffect(() => {
    let rafId = 0 as unknown as number;
    const updateLogoTheme = () => {
      // Default to white while over hero area
      let isDark = false;
      const heroEl = document.getElementById("hero");
      const logoEl = logoRef.current;
      if (heroEl && logoEl) {
        const heroRect = heroEl.getBoundingClientRect();
        const logoRect = logoEl.getBoundingClientRect();
        const logoCenterY = logoRect.top + logoRect.height / 2;
        // If logo vertical center is within hero bounds, consider background dark
        if (logoCenterY >= heroRect.top && logoCenterY <= heroRect.bottom) {
          isDark = true;
        }
      }
      // setUseWhiteLogo?(isDark);
    };

    const onScrollOrResize = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        updateLogoTheme();
        rafId = 0 as unknown as number;
      }) as unknown as number;
    };

    updateLogoTheme();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  const wrapperClass = overHero
    ? "fixed top-0 left-0 w-full z-[99]"
    : "sticky top-0 w-full z-[99]";
  const textClass = overHero ? "mix-blend-difference text-white" : "text-black";

  const handleEnter = (i: number) => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setHovered(i);
  };
  const handleLeaveSoon = () => {
    closeTimer.current = window.setTimeout(
      () => setHovered(null),
      90
    ) as unknown as number;
  };
  return (
    <motion.nav className={`${wrapperClass} pointer-events-none`}>
      <div className="w-full flex justify-center">
        <div
          className={`w-full px-4 md:px-24 py-3 md:py-4 relative pointer-events-auto`}
        >
          {/* <div className="absolute inset-0 bg-transparent pointer-events-none" /> */}

          {/* ===== layered navbar bar ===== */}
          <div
            className={`relative rounded-xl ${
              isCompact ? "py-3" : "py-4"
            } px-0`}
          >
            {/* background layer only (animates in) */}
            <motion.div
              className={`absolute inset-0 rounded-xl ${isScrolled && 'bg-black/50 backdrop-blur-md'}`}
              initial={{ opacity: 0, scaleY: 0.92, transformOrigin: "top" }}
              animate={{
                opacity: startTransition ? 1 : 0,
                scaleY: startTransition ? 1 : 0.92,
              }}
              transition={{ delay: 0.8, duration: 0.6, ease: "easeInOut" }}
              // style={{ backgroundColor: "rgba(0,0,0,0.70)" }}
            />

            {/* foreground content */}
            <div className="relative z-10 flex items-center justify-between">
              {/* LOGO */}
              <motion.div
                layout
                className={`relative h-10 w-[110px]`}
                ref={logoRef}
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
                    ? {
                        position: "relative",
                        top: 0,
                        left: 0,
                        x: 0,
                        y: 0,
                        scale: 1,
                      }
                    : {}
                }
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{
                  willChange: "transform",
                  transformOrigin: "left center",
                }}
              >
                <motion.img
                  src="/bki-2.png"
                  alt="BKI Logo Color"
                  className="absolute inset-0 h-full w-full object-contain"
                  initial={{ opacity: 1, scale: 2, top: "20px" }}
                  animate={{
                    opacity: !startTransition || !useWhiteLogo ? 1 : 0,
                    scale: startTransition ? 1 : 2,
                    top: startTransition ? "0px" : "20px",
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
                <motion.img
                  src="/bki-white.png"
                  alt="BKI Logo White"
                  className="absolute inset-0 h-full w-full object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: startTransition && useWhiteLogo ? 1 : 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </motion.div>

              {/* DESKTOP MENU + DROPDOWNS */}
              <motion.ul
                className={`hidden md:flex ${isCompact ? "gap-5" : "gap-8"} ${
                  isCompact ? "text-[15px]" : "text-sm"
                } tracking-wide transition-colors font-semibold duration-200 ${textClass}`}
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
                      <Link
                        href={item.href}
                        className={`relative inline-flex items-center gap-1 px-1 ${
                          isCompact ? "py-1.5" : "py-2"
                        } transition-colors group-hover:${
                          useWhiteLogo ? "!text-white/30" : "!text-[#0A436A]"
                        }`}
                        onFocus={() => handleEnter(i)}
                        onBlur={handleLeaveSoon}
                      >
                        {item.label}
                        <span
                          className={`pointer-events-none absolute left-1/2 -translate-x-1/2 ${
                            isCompact ? "-bottom-3" : "-bottom-4"
                          } h-[2px] w-full rounded-full ${
                            useWhiteLogo ? "bg-white" : "bg-[#0A436A]"
                          } opacity-0 group-hover:opacity-100 transition-opacity`}
                        />
                      </Link>

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
                                  borderRadius: "10px",
                                  background:
                                    "linear-gradient(0deg, rgba(10, 67, 106, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%)",
                                  backdropFilter: "blur(35px)",
                                }}
                              >
                                <ul className="py-3">
                                  {item.submenu!.map((sub, si) => (
                                    <li key={sub.label}>
                                      <Link
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
                                      </Link>
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
              <div className="flex ">
                <motion.div
                  className={`hidden md:flex items-center ${
                    isCompact ? "gap-3" : "gap-4"
                  } transition-colors duration-200 ${textClass}`}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: startTransition ? 1 : 0,
                    paddingRight: isCompact ? 12 : 16,
                  }}
                  transition={{ delay: 1.0, duration: 0.8 }}
                >
                  <a
                    href={"#"}
                    className={`relative inline-flex items-center gap-1 px-1 ${
                      isCompact ? "py-1.5" : "py-2"
                    } transition-colors group-hover:${
                      useWhiteLogo ? "!text-white/30" : "!text-[#0A436A]"
                    }`}
                    onFocus={() => handleEnter(NAV.length + 1)}
                    onBlur={handleLeaveSoon}
                  >
                    PPID
                    <span
                      className={`pointer-events-none absolute left-1/2 -translate-x-1/2 ${
                        isCompact ? "-bottom-3" : "-bottom-4"
                      } h-[2px] w-full rounded-full ${
                        useWhiteLogo ? "bg-white" : "bg-[#0A436A]"
                      } opacity-0 group-hover:opacity-100 transition-opacity`}
                    />
                  </a>
                </motion.div>
                <motion.div
                  className={`hidden md:flex items-center ${
                    isCompact ? "gap-3" : "gap-4"
                  } transition-colors duration-200 ${textClass}`}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: startTransition ? 1 : 0,
                    paddingRight: isCompact ? 12 : 16,
                  }}
                  transition={{ delay: 1.0, duration: 0.8 }}
                >
                  {/* Language (globe) dropdown */}
                  <div
                    className="relative group"
                    onMouseEnter={() => handleEnter(-1)}
                    onMouseLeave={handleLeaveSoon}
                  >
                    <div className="flex items-center">
                      <a
                        href="#"
                        className={`relative inline-flex items-center gap-2 px-1 ${
                          isCompact ? "py-1.5" : "py-2"
                        } transition-colors group-hover:${
                          useWhiteLogo ? "!text-white/30" : "!text-[#0A436A]"
                        }`}
                      >
                        <img
                          src="/indo.svg"
                          alt="Bahasa"
                          className="inline-block h-5 w-5"
                        />
                      </a>
                      {/* <img src="/english.svg" alt="English" className="h-6 w-6 ml-2" /> */}
                    </div>

                    <AnimatePresence>
                      {hovered === -1 && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.16, ease: "easeOut" }}
                          className="absolute right-0 top-full z-[60] mt-7"
                          onMouseEnter={() => handleEnter(-1)}
                          onMouseLeave={handleLeaveSoon}
                        >
                          <div
                            className="w-64 rounded-2xl shadow-2xl overflow-hidden border border-white/10 backdrop-blur-md p-4 py-0"
                            style={{
                              borderRadius: "10px",
                              background:
                                "linear-gradient(0deg, rgba(10, 67, 106, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%)",
                              backdropFilter: "blur(35px)",
                            }}
                          >
                            <ul className="py-3">
                              <li>
                                <a
                                  href="#"
                                  className="flex items-center gap-3 font-normal py-3 text-[16px] text-white hover:text-white/30 transition-colors duration-150"
                                >
                                  <img
                                    src="/indo.svg"
                                    alt="Bahasa"
                                    className="h-4 w-6"
                                  />
                                  <span>Bahasa</span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="flex items-center gap-3 font-normal py-3 text-[16px] text-white border-b border-white/30 hover:text-white/30 hover:border-white transition-colors duration-150"
                                >
                                  <img
                                    src="/english.svg"
                                    alt="English"
                                    className="h-4 w-6"
                                  />
                                  <span>English</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>

              {/* MOBILE HAMBURGER */}
              <motion.button
                type="button"
                aria-label="Open menu"
                onClick={() => setMobileOpen(true)}
                className={`md:hidden p-2 pr-4 rounded-lg transition-colors duration-200 ${textClass}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: startTransition ? 1 : 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 6h18M3 12h18M3 18h18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
          {/* ===== /layered navbar bar ===== */}

          {/* MOBILE DRAWER */}
          {/* ===== MOBILE FULLSCREEN MENU ===== */}
          <AnimatePresence>
            {mobileOpen && (
              <>
                {/* Dim/gradient background */}
                <motion.div
                  className="fixed inset-0 z-[98] backdrop-blur-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    background: `
            radial-gradient(120% 80% at 50% 0%, rgba(10,67,106,0.85) 0%, rgba(10,67,106,0.65) 35%, rgba(10,67,106,0.42) 55%, rgba(0,0,0,0.75) 100%),
            linear-gradient(180deg, rgba(0,0,0,0.4), rgba(0,0,0,0.7))
          `,
                  }}
                />

                {/* Panel content */}
                <motion.div
                  role="dialog"
                  aria-modal="true"
                  className="fixed inset-0 z-[99] flex flex-col"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Top bar: logo + close */}
                  <div className="flex items-center justify-between px-5 py-4">
                    <img src="/bki-white.png" alt="BKI" className="h-8" />
                    <button
                      aria-label="Close menu"
                      onClick={() => setMobileOpen(false)}
                      className="p-2 pr-0 rounded-lg text-white/90 active:scale-95 transition"
                      style={{ WebkitTapHighlightColor: "transparent" }}
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M6 6l12 12M18 6L6 18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Menu list (scrollable) */}
                  <motion.nav
                    className="flex-1 overflow-y-auto px-5 pt-4 pb-10"
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={{
                      hidden: {
                        transition: {
                          staggerChildren: 0.02,
                          staggerDirection: -1,
                        },
                      },
                      show: { transition: { staggerChildren: 0.05 } },
                    }}
                  >
                    {NAV.map((item, i) => {
                      const hasSub = !!item.submenu?.length;
                      const isOpen = expanded === i;

                      return (
                        <motion.div
                          key={item.label}
                          className="mb-2"
                          variants={{
                            hidden: { opacity: 0, y: 8 },
                            show: {
                              opacity: 1,
                              y: 0,
                              transition: { ease: "easeOut", duration: 0.22 },
                            },
                          }}
                        >
                          {/* Top-level row */}
                          <button
                            className="w-full flex items-center justify-between py-3.5 border-b border-white/20 text-white text-2xl font-semibold"
                            onClick={() =>
                              hasSub
                                ? setExpanded(isOpen ? null : i)
                                : setMobileOpen(false)
                            }
                          >
                            <span>{item.label}</span>
                            {hasSub ? (
                              <motion.span
                                initial={false}
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ type: "tween", duration: 0.2 }}
                                className="inline-block"
                              >
                                <svg
                                  width="22"
                                  height="22"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M7 10l5 5 5-5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                  />
                                </svg>
                              </motion.span>
                            ) : (
                              <span />
                            )}
                          </button>

                          {/* Submenu (accordion) */}
                          {hasSub && (
                            <AnimatePresence initial={false}>
                              {isOpen && (
                                <motion.ul
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{
                                    duration: 0.22,
                                    ease: "easeInOut",
                                  }}
                                  className="overflow-hidden"
                                >
                                  {item.submenu!.map((sub) => (
                                    <li key={sub.label}>
                                      <a
                                        href={sub.href}
                                        className="block pl-1 pr-1 py-3 text-white/90 text-[17px] border-b border-white/15 active:scale-[.99] transition"
                                        onClick={() => setMobileOpen(false)}
                                      >
                                        {sub.label}
                                      </a>
                                    </li>
                                  ))}
                                </motion.ul>
                              )}
                            </AnimatePresence>
                          )}
                        </motion.div>
                      );
                    })}
                  </motion.nav>

                  {/* Footer actions */}
                  <div className="px-5 pb-6 pt-3 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      {/* Language globe with submenu */}
                      <div className="relative">
                        <button
                          className="flex items-center gap-2 text-white/90 px-2 py-2 active:scale-[.99] transition"
                          onClick={() => setMobileLangOpen((v) => !v)}
                          aria-haspopup="true"
                          aria-expanded={mobileLangOpen}
                        >
                          <span
                            aria-hidden
                            className="inline-block h-5 w-5"
                            style={{
                              backgroundColor: useWhiteLogo
                                ? "#ffffff"
                                : "#0A436A",
                              WebkitMaskImage: "url(/globe.svg)",
                              maskImage: "url(/globe.svg)",
                              WebkitMaskRepeat: "no-repeat",
                              maskRepeat: "no-repeat",
                              WebkitMaskPosition: "center",
                              maskPosition: "center",
                              WebkitMaskSize: "contain",
                              maskSize: "contain",
                            }}
                          />
                          <img
                            src="/english.svg"
                            alt="English"
                            className="h-4 w-6"
                          />
                        </button>
                        <AnimatePresence>
                          {mobileLangOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 8, scale: 0.98 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 8, scale: 0.98 }}
                              transition={{ duration: 0.16, ease: "easeOut" }}
                              className="absolute left-0 bottom-full mb-3 z-[100]"
                            >
                              <div
                                className="w-64 rounded-2xl shadow-2xl overflow-hidden border border-white/10 backdrop-blur-md p-4 py-0"
                                style={{
                                  borderRadius: "10px",
                                  background:
                                    "linear-gradient(0deg, rgba(10, 67, 106, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%)",
                                  backdropFilter: "blur(35px)",
                                }}
                              >
                                <ul className="py-3">
                                  <li>
                                    <button
                                      className="w-full text-left flex items-center gap-3 font-normal py-3 text-[16px] text-white border-b border-white/30 hover:text-white/30 hover:border-white transition-colors duration-150"
                                      onClick={() => setMobileLangOpen(false)}
                                    >
                                      <span className="text-lg" aria-hidden>
                                        🇬🇧
                                      </span>
                                      <span>English</span>
                                    </button>
                                  </li>
                                  <li>
                                    <button
                                      className="w-full text-left flex items-center gap-3 font-normal py-3 text-[16px] text-white hover:text-white/30 transition-colors duration-150"
                                      onClick={() => setMobileLangOpen(false)}
                                    >
                                      <span className="text-lg" aria-hidden>
                                        🇮🇩
                                      </span>
                                      <span>Bahasa</span>
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="flex items-center gap-3 text-white/80">
                        <a
                          href="#"
                          aria-label="Facebook"
                          className="p-2 hover:text-white transition"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M..." />
                          </svg>
                        </a>
                        <a
                          href="#"
                          aria-label="Instagram"
                          className="p-2 hover:text-white transition"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M..." />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}
