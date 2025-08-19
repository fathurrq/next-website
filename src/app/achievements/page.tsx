"use client"
import { useHeroTransition } from "@/components/TransitionProvider";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Cooperation from "@/components/achievements/CooperationSection";

export default function Achievements() {
  const { startTransition, setStartTransition } = useHeroTransition();
  const articleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setStartTransition(true), 1000);
    return () => clearTimeout(t);
  }, [setStartTransition]);

  // show "Welcome To" for 3s, then hide
  useEffect(() => {
    if (!startTransition) return;
  }, [startTransition]);

  const articles = [
    {
      title: "New Research Vessel For Marine Science In SA",
      content: "Research Vessel Encounter pulls in at O'Sullivan Beach boat ramp. A new coastal research vessel, RV Encounter, will support the investigations and training opportunities of Flinders",
      img: "/article1.jpg",
      link: "#",
    },
    {
      title: "Understanding ISO 45001: Safety Culture in Industrial Workplaces",
      content: "Research Vessel Encounter pulls in at O'Sullivan Beach boat ramp. A new coastal research vessel, RV Encounter, will support the investigations and training opportunities of Flinders",
      img: "/article2.jpg",
      link: "#",
    },
    {
      title: "The Role of T10 in the Renewable Energy Transition",
      content: "The T10 is a crucial component in the shift towards renewable energy sources, facilitating the integration of various technologies and improving overall efficiency.",
      img: "/article3.jpg",
      link: "#",
    },
    {
      title: "New Research Vessel For Marine Science In SA",
      content: "Research Vessel Encounter pulls in at O'Sullivan Beach boat ramp. A new coastal research vessel, RV Encounter, will support the investigations and training opportunities of Flinders",
      img: "/article1.jpg",
      link: "#",
    },
    {
      title: "Understanding ISO 45001: Safety Culture in Industrial Workplaces",
      content: "Research Vessel Encounter pulls in at O'Sullivan Beach boat ramp. A new coastal research vessel, RV Encounter, will support the investigations and training opportunities of Flinders",
      img: "/article2.jpg",
      link: "#",
    },
    {
      title: "The Role of T10 in the Renewable Energy Transition",
      content: "The T10 is a crucial component in the shift towards renewable energy sources, facilitating the integration of various technologies and improving overall efficiency.",
      img: "/article3.jpg",
      link: "#",
    },
    
  ]

  return (
    <div id="articles" ref={articleRef} className="pb-12 relative w-full min-h-screen overflow-hidden">
      
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
    <Cooperation/>
    </div>
  )
}