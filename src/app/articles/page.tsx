"use client"
import { useHeroTransition } from "@/components/TransitionProvider";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Articles() {
  const { startTransition, setStartTransition } = useHeroTransition();
  const articlesRef = useRef<HTMLDivElement | null>(null);

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
    <div id="articles" ref={articlesRef} className="pb-12 relative w-full min-h-screen overflow-hidden">
      
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

    {/* background image */}
    <div className=" h-[50vh] bg-[url('/bg-article.png')] bg-cover"></div>
    {/* linear orange gradient overlay */}
    <div className="absolute top-0 inset-0 h-[20vh] bg-gradient-to-t from-[#d4a66a06] to-[#d4a66a]"></div>
    {/* linear white gradient overlay */}
    <div className="absolute top-[30vh] inset-0 h-[20vh] bg-gradient-to-t from-[#ffffff] to-[#ffffff00]"></div>
    {/* white background */}
    <div className="absolute top-[50vh] inset-0 h-[100vh] bg-white"></div>

    <div className="mt-[-35rem] md:mt-[-20rem] w-full">
      {/* Articles */}
      <div className="container mx-auto px-4 lg:px-0 flex flex-col gap-2">
        {/* Title */}
        <h2 className="text-[5vw] md:text-[2.5vw] font-medium mb-8">Articles</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((a, i) => (
          <div
            key={i}
            className="bg-blue-900 bg-opacity-40 rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative h-96 ">
              <Image src={a.img} alt={a.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-[rgba(10,67,106,0.6)] to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 px-4 pb-8 bg-gradient-to-t from-blue-900/70 to-transparent">
                <h3 className="font-semibold text-lg md:text-2xl mb-2">{a.title}</h3>
                <div className="text-xs md:text-sm mb-2">{a.content}</div>
                <a
                  href={a.link}
                  className="inline-block text-base md:text-lg px-4 py-2 bg-[rgba(255,255,255,0.3)] hover:bg-white hover:text-black transition-colors duration-400 border border-white border-opacity-50"
                >
                  Read Article →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
    </div>
  )
}