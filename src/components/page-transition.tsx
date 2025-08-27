"use client";

import { useEffect } from "react";
import { useHeroTransition } from "./TransitionProvider";
import { motion } from "framer-motion";

export default function PageTransition(){
    const { startTransition, setStartTransition } = useHeroTransition();
     
      useEffect(() => {
        const t = setTimeout(() => setStartTransition(true), 500);
        return () => clearTimeout(t);
      }, [setStartTransition]);
    
      // show "Welcome To" for 3s, then hide
      useEffect(() => {
        if (!startTransition) return;
      }, [startTransition]);

    return (
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
    )
}