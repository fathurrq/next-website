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
      <div className="h-[40vh] relative text-xs md:text-xl 2xl:text-3xl">
        <Image src="/opportunities-hero-bg.jpg" alt="opportunities-hero-bg" fill className="object-cover" />
        <div className="absolute top-0 inset-0 h-[40vh] bg-gradient-to-t from-[#0A436A] to-[#00000050]"></div>
        <div className="relative h-full w-full flex flex-col justify-center items-center py-24 text-center text-white">
            <div className="flex flex-row w-full justify-center items-center gap-2">
            <Link href={"/"}>
                Home
            </Link>
            <p>/</p>
            <p className=" text-[#ffffff75]">
                Opportunities
            </p>
            </div>
            <h3 className="mt-4 text-xl md:text-3xl 2xl:text-6xl font-medium">
            Opportunities
            </h3>
            <p className="mt-4 max-w-1/2 font-light">
            Exploring potential to grow and create impact.
            </p>
        </div>
      </div>

      {/*  */}
      <div className="w-full mx-auto h-[20vh] bg-white text-black flex justify-around items-center gap-12 px-4 md:px-12">
        {/* Life With BKI */}
        <div className="w-full h-full flex justify-start items-center">
            <p className="font-montserrat text-xl md:text-3xl 2xl:text-6xl font-bold text-start">Life With BKI</p>
        </div>

        <div className="w-full h-full flex justify-center items-center">
            <p className="text-xs md:text-xl 2xl:text-3xl text-right">Growing together in a culture of integrity, innovation, and collaboration.</p>
        </div>
      </div>

      
    </div>

    )
}
