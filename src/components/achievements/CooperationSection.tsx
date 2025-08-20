"use client";

import { motion } from "framer-motion";
import { useHeroTransition } from "../TransitionProvider";
import { useEffect } from "react";
import Link from "next/link";

export default function Cooperation() {
  const logo = [
    {
      src: "/logo-acs.png",
      alt: "acs",
    },
    {
      src: "/logo-iperindo.png",
      alt: "iperindo",
    },
    {
      src: "/logo-tjs.png",
      alt: "tjs",
    },
    {
      src: "/logo-apitindo.png",
      alt: "apitindo",
    },
    {
      src: "/logo-aisi.png",
      alt: "aisi",
    },
  ];

  const { startTransition, setStartTransition } = useHeroTransition();

  useEffect(() => {
    const t = setTimeout(() => setStartTransition(true), 1000);
    return () => clearTimeout(t);
  }, [setStartTransition]);

  // show "Welcome To" for 3s, then hide
  useEffect(() => {
    if (!startTransition) return;
  }, [startTransition]);

  return (
    <div
      id="cooperation"
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* background image */}
      {/* <div className="h-[50vh] bg-[url('/bg-cooperation.jpg')] bg-cover bg-center"></div> */}

      {/* gradient overlay bagian atas */}
      <div className="absolute top-0 inset-0 h-[20vh] bg-gradient-to-t from-[#d4a66a06] to-[#0A436A]"></div>
      {/* gradient putih transisi */}
      <div className="absolute top-[30vh] inset-0 h-[20vh] bg-gradient-to-t from-[#0A436A] to-transparent"></div>
      {/* white background di bawah */}
      <div className="absolute top-[50vh] inset-0 h-[100vh] bg-gradient-to-b from-[#0A436A] to-black"></div>
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

      <section className="w-full h-[40vh] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-cooperation.jpg')] bg-cover blur-xs bg-top" />
        <div className="absolute top-0 inset-0 h-[40vh] bg-gradient-to-b from-[#0A436A06] to-[#0A436A00]" />
        <div className="absolute top-0 inset-0 h-[40vh] bg-gradient-to-t from-[#0A436A] to-[#0A436A00]" />
        <div className="w-full relative flex flex-col justify-center items-center py-24 text-center text-white">
          <div className="flex flex-row w-full justify-center items-center gap-2">
            <Link href={"/"} className="text-xl 2xl:text-3xl">
              Home
            </Link>
            <p className="text-xl 2xl:text-3xl">/</p>
            <p className="text-xl 2xl:text-3xl text-[#ffffff75]">
              Achievements
            </p>
          </div>
          <h1 className="mt-4 text-4xl 2xl:text-6xl font-semibold">
           Our Achievements
          </h1>
          <p className="mt-4 text-lg 2xl:text-xl max-w-1/2">
            Highlights that reflect our growth and commitment.
          </p>
        </div>
      </section>

      {/* Content wrapper */}
      <div className="w-full relative z-10">
        <div className="container mx-auto px-4 lg:px-0 flex flex-col gap-10">
          {/* <div className="container flex flex-col items-center">
            <div className="text-sm text-white/80">
              Home / <span className="text-white">Achievement</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-medium text-white">
              Our Achievements
            </h2>
            <p className="text-lg md:text-xl text-white/80">
              Highlights that reflect our growth and commitment.
            </p>
          </div> */}

          {/* Cooperation Section */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-2">Cooperation</h3>
            <p className="text-gray-400 mb-6">
              Connecting with partners to strengthen maritime excellence.
            </p>

            {/* Classification Segment */}
            <div className="bg-blue-900/80 text-white rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold mb-2">
                Classification Segment
              </h4>
              <div className="bg-blue-800 rounded p-4">
                All INSA Members registered with BKI
              </div>
            </div>

            {/* Example cooperation card */}
            <div className="bg-blue-900/80 text-white rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold mb-2">
                Direktorat Jenderal Perhubungan Laut
              </h4>
              <p className="text-sm text-white/80">
                Cooperation Agreement between the Directorate General of Sea
                Transportation (Direktorat Jenderal Perhubungan Laut) and PT.
                Biro Klasifikasi Indonesia (Persero) concerning the
                Implementation of Surveying and Certification of
                Indonesian-flagged Ship No. B.04190 / HK.503 / KI-20
              </p>
            </div>

            {/* Commercial Segment */}
            <div className="bg-blue-900/80 text-white rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold mb-2">Commercial Segment</h4>
              <p className="text-sm text-white/80">
                Energy & Industry Sector: JICT, TPK KOJA, NPTC I, KEMSOS,
                MORATELINDO, SARULLA OPERATION LIMITED, STAR ENERGY KAKAP LTD,
                REKAYASA INDUSTRI, FUJI ELECTRIC, PERTAMINA EP, SOKORIA, SORIK
                MARAPI, KSO BKI SCI, PERTAMINA EP CEPU
              </p>
            </div>

            {/* Marine & Offshore */}
            <div className="bg-blue-900/80 text-white rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold mb-2">
                Marine & Offshore Sector
              </h4>
              <p className="text-sm text-white/80">
                PT. PHE, OSSES, Ministry of Marine and Fisheries, CONOCOPHILLIPS
                GRISSIK LTD, MEDCO E&P NATUNA LTD, PT. PGN LNG INDONESIA, PLN,
                SKK MIGAS, PT. PERTAMINA SHIPPING, BP BERAU, PT. MBSS, PT.
                PELNI, PT. ASDP INDONESIA FERRY, PT. RUKINDO, PT. PELAYARAN
                BAHETRA, ADHIGUNA, PERTAMINA MOR I MEDAN, SHIPPING COMPANY, OIL
                & GAS COMPANY, ENI MUARA BAKAU BV, INPEX CO, OIL & GAS COMPANY
              </p>
            </div>
          </div>

          {/* Member of Association */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6">
              Member of Association
            </h3>
            <div className="flex flex-wrap gap-8 items-center">
              {logo.map((a, i) => (
                <img src={a.src} alt={a.alt} key={i} className="h-16" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
