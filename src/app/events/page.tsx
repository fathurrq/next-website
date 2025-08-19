"use client";
import { useHeroTransition } from "@/components/TransitionProvider";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Events() {
  const { startTransition, setStartTransition } = useHeroTransition();
  const eventsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setStartTransition(true), 1000);
    return () => clearTimeout(t);
  }, [setStartTransition]);

  // show "Welcome To" for 3s, then hide
  useEffect(() => {
    if (!startTransition) return;
  }, [startTransition]);

  const events = [
    {
      startDate: "18 August 2025",
      endDate: "20 August 2025",
      title: "New Research Vessel For Marine Science in SA",
      place: "Gedung Konser Balai Sarbini, Kota Jakarta Selatan, Indonesia",
      img: "/news1.jpg",
      link: "/events/news1",
    },
    {
      startDate: "18 August 2025",
      endDate: "20 August 2025",
      title: "New Research Vessel For Marine Science in SA",
      place: "Gedung Konser Balai Sarbini, Kota Jakarta Selatan, Indonesia",
      img: "/news2.png",
      link: "/events/news2",
    },
    {
      startDate: "18 August 2025",
      endDate: "20 August 2025",
      title: "New Research Vessel For Marine Science in SA",
      place: "Gedung Konser Balai Sarbini, Kota Jakarta Selatan, Indonesia",
      img: "/news3.png",
      link: "/events/news3",
    },
    {
      startDate: "18 August 2025",
      endDate: "20 August 2025",
      title: "New Research Vessel For Marine Science in SA",
      place: "Gedung Konser Balai Sarbini, Kota Jakarta Selatan, Indonesia",
      img: "/news1.jpg",
      link: "/events/news1",
    },
    {
      startDate: "18 August 2025",
      endDate: "20 August 2025",
      title: "New Research Vessel For Marine Science in SA",
      place: "Gedung Konser Balai Sarbini, Kota Jakarta Selatan, Indonesia",
      img: "/news2.png",
      link: "/events/news2",
    },
    {
      startDate: "18 August 2025",
      endDate: "20 August 2025",
      title: "New Research Vessel For Marine Science in SA",
      place: "Gedung Konser Balai Sarbini, Kota Jakarta Selatan, Indonesia",
      img: "/news3.png",
      link: "/events/news3",
    },
    {
      startDate: "18 August 2025",
      endDate: "20 August 2025",
      title: "New Research Vessel For Marine Science in SA",
      place: "Gedung Konser Balai Sarbini, Kota Jakarta Selatan, Indonesia",
      img: "/news1.jpg",
      link: "/events/news1",
    },
    {
      startDate: "18 August 2025",
      endDate: "20 August 2025",
      title: "New Research Vessel For Marine Science in SA",
      place: "Gedung Konser Balai Sarbini, Kota Jakarta Selatan, Indonesia",
      img: "/news2.png",
      link: "/events/news2",
    },
    {
      startDate: "18 August 2025",
      endDate: "20 August 2025",
      title: "New Research Vessel For Marine Science in SA",
      place: "Gedung Konser Balai Sarbini, Kota Jakarta Selatan, Indonesia",
      img: "/news3.png",
      link: "/events/news3",
    },
    
  ];

  return (
    <div
      id="events"
      ref={eventsRef}
      className="pb-12 relative w-full min-h-screen overflow-hidden bg-white"
    >
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
      <div className=" h-[50vh] bg-[url('/bg-events.png')] bg-cover"></div>
      {/* linear orange gradient overlay */}
      <div className="absolute top-0 inset-0 h-[20vh] bg-gradient-to-t from-[#0A436A00] to-[#000000]"></div>
      {/* linear white gradient overlay */}
      <div className="absolute top-[30vh] inset-0 h-[20vh] bg-gradient-to-t from-[#ffffff] to-[#ffffff00]"></div>
      {/* white background */}
      {/* <div className="absolute top-[50vh] inset-0 h-[100vh] bg-white"></div> */}

      <div className="mt-[-35rem] md:mt-[-20rem] w-full relative">
        {/* Articles */}
        <div className="container mx-auto px-4 lg:px-0 flex flex-col gap-2">
          {/* Title */}
          <h2 className="text-[5vw] md:text-[2.5vw] font-medium mb-8">
            Events
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((n, i) => (
              <div
                key={i}
                className="bg-white rounded-lg overflow-hidden shadow-lg text-black"
              >
                <div className="relative h-48">
                  <Image
                    src={n.img}
                    alt={n.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-slate-800">
                  <p className="text-sm mb-2">{n.startDate} - {n.endDate}</p>
                  <h3 className="font-semibold text-lg mb-3">{n.title}</h3>
                  <div className="text-sm mb-4">{n.place}</div>
                  <a
                    href={n.link}
                    className="flex justify-center items-center px-4 py-2 bg-[#0A436A] text-white font-medium text-lg rounded transition-colors duration-400 hover:bg-[#0A436A]/50"
                  >
                    View Event →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
