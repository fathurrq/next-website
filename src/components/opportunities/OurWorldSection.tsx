"use client"

import Image from "next/image";

export default function  OurWorldSection() {

    return (
    <div
      id="our-world"
      className="relative w-full h-screen overflow-hidden"
    >
        <Image src="/our-world-bg.jpg" alt="our-world-bg" fill className="object-cover" />
        <div className="relative top-0 inset-0 h-[50vh] bg-gradient-to-t from-[#0A436A00] to-[#0A436A]"></div>
        <div className="relative bottom-0 inset-0 h-[50vh] bg-gradient-to-b from-[#00000000] to-[#000000]"></div>
        
        <div className="w-full h-full absolute bottom-0 inset-0 flex justify-end items-center">
            <div className="flex-1/2">
                
            </div>
            <div className="flex-1/2 h-full w-full flex  flex-col">
                <div className="flex-1/2 flex justify-center items-center"></div>
                <div className="flex-1/2 flex justify-center items-center">
                    <div className="p-4 text-white flex flex-col gap-5">
                        <h3 className="flex-1/2 font-montserrat text-4xl font-bold">Our World</h3>
                        <p className="text-xl">At BKI, we believe in building a professional yet supportive work environment, where every individual is empowered to contribute, grow, and innovate for the maritime industry.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}