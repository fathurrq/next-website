"use client";

import Link from "next/link";
import Image from "next/image";

export default function  LifeWithBKISection() {
  return (
    <div
      id="life-with-bki"
      className="relative w-full min-h-[60vh] overflow-hidden"
    >
      {/* Hero Wrapper */}
      <div className="h-[40vh] relative">
        <Image src="/opportunities-hero-bg.jpg" alt="opportunities-hero-bg" fill className="object-cover" />
        <div className="absolute top-0 inset-0 h-[40vh] bg-gradient-to-t from-[#0A436A] to-[#00000050]"></div>
        <div className="relative h-full w-full flex flex-col justify-center items-center py-24 text-center text-white">
            <div className="flex flex-row w-full justify-center items-center gap-2">
            <Link href={"/"} className="text-xl 2xl:text-3xl">
                Home
            </Link>
            <p className="text-xl 2xl:text-3xl">/</p>
            <p className="text-xl 2xl:text-3xl text-[#ffffff75]">
                Opportunities
            </p>
            </div>
            <h1 className="mt-4 text-4xl 2xl:text-6xl font-semibold">
            Opportunities
            </h1>
            <p className="mt-4 text-lg 2xl:text-xl max-w-1/2">
            Exploring potential to grow and create impact.
            </p>
        </div>
      </div>

      {/*  */}
      <div className="w-full mx-auto h-[20vh] bg-white text-black flex justify-around items-center gap-12 px-12">
        {/* Life With BKI */}
        <div className="w-full h-full flex justify-start items-center">
            <p className="font-montserrat text-4xl font-bold text-start">Life With BKI</p>
        </div>

        <div className="w-full h-full flex justify-center items-center">
            <p className="text-xl text-right">Growing together in a culture of integrity, innovation, and collaboration.</p>
        </div>
      </div>

      
    </div>

    )
}
