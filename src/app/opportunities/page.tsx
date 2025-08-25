"use client"
import { useHeroTransition } from "@/components/TransitionProvider";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import LifeWithBKISection from "@/components/opportunities/LifeWithBKISectoin";
import  OurWorldSection from "@/components/opportunities/OurWorldSection";
import WhatDefineUsSection from "@/components/opportunities/WhatDefineUsSection";
import AvailableSection from "@/components/opportunities/AvailableSection";
import AssetAuctionSection from "@/components/opportunities/AssetAuctionSection";

export default function Opportunities() {
  const { startTransition, setStartTransition } = useHeroTransition();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setStartTransition(true), 1000);
    return () => clearTimeout(t);
  }, [setStartTransition]);

  // show "Welcome To" for 3s, then hide
  useEffect(() => {
    if (!startTransition) return;
  }, [startTransition]);

  return (
    <div id="opportunities" ref={ref} className="pb-12 relative w-full min-h-screen overflow-hidden">
      
      {/* INTRO overlay (your multi-gradient) → fades out as before */}
    <motion.div
      className="absolute inset-0 z-10 pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: startTransition ? 0 : 1 }}
      transition={{ duration: 0.8 }}
      style={{
        background: `
          linear-gradient(0deg, #0A436A 0%, rgba(10,67,106,0) 100%),
          linear-gradient(270deg, rgba(255,255,255,0) 0%, #FFF 100%),
          linear-gradient(0deg, #000 0%, rgba(0,0,0,0) 100%)
        `,
        backdropFilter: "blur(22px)",
        WebkitBackdropFilter: "blur(22px)",
      }}
    />

    {/* cooperation section */}
    <LifeWithBKISection/>

    {/* our world section */}
    <OurWorldSection/>

    {/* what define us section */}
    <WhatDefineUsSection/>

    {/* Available opportunities sections */}
    <AvailableSection/>

    {/* asset auction section */}
    <AssetAuctionSection/>
    </div>
  )
}