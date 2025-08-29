"use client";

import { motion } from "framer-motion";
import { useHeroTransition } from "../TransitionProvider";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Hero from "../Hero";

export default function Cooperation() {
  const [selectedImage, setSelectedImage] = useState("");
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
  const classificationData = [
    {
      title: "Direktorat Jenderal Perhubungan Laut",
      content: `Cooperation Agreement between the Directorate General of Sea Transportation (Direktorat Jenderal Perhubungan Laut)
    and PT. Biro Klasifikasi Indonesia (Persero) concerning the Implementation of Surveying and Certification of Indonesian-flagged Ship
    No. B.04190 / HK.503 / KI-20`,
      images: logo,
    },
    {
      title: "Direktorat Jenderal Perhubungan Laut",
      content: `Cooperation Agreement between the Directorate General of Sea Transportation (Direktorat Jenderal Perhubungan Laut)
    and PT. Biro Klasifikasi Indonesia (Persero) concerning the Implementation of Surveying and Certification of Indonesian-flagged Ship
    No. B.04190 / HK.503 / KI-20`,
      images: logo,
    },
  ];
  const commercialData = [
    {
      title: "Direktorat Jenderal Perhubungan Laut",
      content: `Cooperation Agreement between the Directorate General of Sea Transportation (Direktorat Jenderal Perhubungan Laut)
    and PT. Biro Klasifikasi Indonesia (Persero) concerning the Implementation of Surveying and Certification of Indonesian-flagged Ship
    No. B.04190 / HK.503 / KI-20`,
      images: logo,
    },
    {
      title: "Direktorat Jenderal Perhubungan Laut",
      content: `Cooperation Agreement between the Directorate General of Sea Transportation (Direktorat Jenderal Perhubungan Laut)
    and PT. Biro Klasifikasi Indonesia (Persero) concerning the Implementation of Surveying and Certification of Indonesian-flagged Ship
    No. B.04190 / HK.503 / KI-20`,
      images: logo,
    },
  ];

  return (
    <div
      id="cooperation"
      className="relative w-full min-h-screen overflow-hidden"
    >
      <Hero
        routes={[{ text: "Home", href: "/" }, { text: "Achievements" }]}
        backgroundClass="bg-[url('/bg-cooperation.jpg')] bg-top"
        title={"Our Achievements"}
        description={
          "Highlights that reflect our growth and commitment."
        }
      />

      {/* Content wrapper */}
      <div className="w-full relative z-10" style={{
        background: "linear-gradient(180deg, #0A436A 0%, #000 50%)",
        }}>
        <div className="container mx-auto px-4 lg:px-0 flex flex-col gap-10">
          {/* Cooperation Section */}
          <div className="mt-10 flex flex-col gap-2">
            <div className="container flex flex-col md:flex-row md:justify-between md:items-center gap-2">
              <h3 className="text-2xl md:text-4xl 2xl:text-6xl font-semibold mb-2 md:mb-0 text-center md:text-left">
                Cooperation
              </h3>
              <p className="text-sm md:text-base 2xl:text-3xl text-white text-center md:text-end">
                Connecting with partners to strengthen maritime excellence.
              </p>
            </div>

            {/* Classification Segment */}
            <div className="container flex flex-col text-base md:text-2xl font-bold">
              <h4 className="font-semibold text-lg md:text-xl 2xl:text-3xl text-white/70 mb-2">
                CLASSIFICATION SEGMENT
              </h4>
              <div className="h-[1px] bg-gradient-to-r from-white to-transparent w-full md:w-3/4 mb-6"></div>

              {classificationData.map((item, index) => (
                <div
                  key={index}
                  className="bg-black/60 rounded-md p-4 md:p-6 mb-6 text-white"
                >
                  {/* Header */}
                  <div className="flex flex-col items-start gap-2">
                    <div className="flex gap-3 items-center">
                      <Image
                        height={67}
                        width={67}
                        src={"/logo-kemenhub.png"}
                        alt={"logo-kemenhub"}
                        className="w-8 h-8 md:w-10 md:h-10 2xl:w-16 2xl:h-16"
                      />
                      <h5 className="text-base md:text-lg 2xl:text-3xl font-bold">
                        {item.title}
                      </h5>
                    </div>
                    <p className="font-normal text-xs md:text-sm 2xl:text-2xl mt-2 md:mt-0 leading-relaxed">
                      {item.content}
                    </p>
                  </div>

                  {/* Images / Thumbnails */}
                  {item.images && item.images.length > 0 && (
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3 mt-3">
                      {item.images.map((img, i) => (
                        <Image
                          height={120}
                          width={120}
                          key={i}
                          src={img.src}
                          alt={img.alt}
                          className="w-16 h-16 md:w-20 md:h-20 2xl:w-28 2xl:h-28 object-cover rounded-md cursor-pointer hover:scale-105 transition-transform"
                          onClick={() => setSelectedImage(img.src)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Commercial Segment */}
            <div className="container flex flex-col text-base md:text-2xl font-bold">
              <h4 className="font-semibold text-lg md:text-xl 2xl:text-3xl text-white/70 mb-2">
                COMMERCIAL SEGMENT
              </h4>
              <div className="h-[1px] bg-gradient-to-r from-white to-transparent w-full md:w-3/4 mb-6"></div>

              {commercialData.map((item, index) => (
                <div
                  key={index}
                  className="bg-black/60 rounded-md p-4 md:p-6 mb-6 text-white"
                >
                  {/* Header */}
                  <div className="flex flex-col items-start gap-2">
                    <div className="flex gap-3 items-center">
                      <Image
                        height={67}
                        width={67}
                        src={"/logo-kemenhub.png"}
                        alt={"logo-kemenhub"}
                        className="w-8 h-8 md:w-10 md:h-10 2xl:w-16 2xl:h-16"
                      />
                      <h5 className="text-base md:text-lg 2xl:text-3xl font-bold">
                        {item.title}
                      </h5>
                    </div>
                    <p className="font-normal text-xs md:text-sm 2xl:text-2xl mt-2 md:mt-0 leading-relaxed">
                      {item.content}
                    </p>
                  </div>

                  {/* Images / Thumbnails */}
                  {item.images && item.images.length > 0 && (
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3 mt-3">
                      {item.images.map((img, i) => (
                        <Image
                          height={120}
                          width={120}
                          key={i}
                          src={img.src}
                          alt={img.alt}
                          className="w-16 h-16 md:w-20 md:h-20 2xl:w-28 2xl:h-28 object-cover rounded-md cursor-pointer hover:scale-105 transition-transform"
                          onClick={() => setSelectedImage(img.src)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Member of Association */}
          <div className="mt-12 container">
            <h3 className="text-lg md:text-2xl font-semibold mb-6 text-center md:text-left">
              Member of Association
            </h3>
            <div className="flex flex-wrap justify-center md:justify-between gap-4">
              {logo.map((a, i) => (
                <Image
                  width={500}
                  height={163}
                  src={a.src}
                  alt={a.alt}
                  key={i}
                  className="w-auto h-12 md:h-20 2xl:h-40"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Modal Popup */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative">
            <Image
              width={500}
              height={500}
              src={selectedImage}
              alt="expanded"
              className="w-auto h-1/2 rounded-lg shadow-lg text-center"
            />
            <button
              className="absolute cursor-pointer -top-4 -right-4 bg-white text-black rounded-full px-2 py-1 font-bold shadow hover:bg-gray-200"
              onClick={() => setSelectedImage("")}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
