"use client"

import Image from "next/image";
import Link from "next/link";

export default function AvailableSection() {

    return (
        <div
            id="available-opportunities"
            className="relative w-full h-auto"
        >
            <Image src="/available-opportunities-bg.jpg" alt="available-opportunities-bg" fill className="object-cover" />
            <div className="relative top-0 inset-0 h-[35vh] bg-[#0A436A]"></div>
            <div className="relative top-0 inset-0 h-[35vh] bg-gradient-to-t from-[#0A436A00] to-[#0A436A]"></div>
            <div className="relative bottom-0 inset-0 h-[30vh] bg-gradient-to-b from-[#00000000] to-[#000000]"></div>

            <div className="w-full h-full absolute top-0 inset-0 flex flex-col gap-20 2xl:gap-30">
                {/* Bagian Heading Tengah */}
                <div className="pt-24 px-6 md:px-16 text-white flex flex-col items-center gap-4 md:gap-7 2xl:gap-9">
                    <h3 className="font-montserrat text-3xl 2xl:text-6xl font-medium text-center">
                        Available Opportunities
                    </h3>
                    <p className="text-xl 2xl:text-3xl font-light text-center max-w-3xl">
                        Check our current opportunities and submit your application.
                    </p>
                </div>

                {/* Bagian Procurement Commitment */}
                <div className="w-full h-full flex flex-col md:flex-row justify-between p-6 md:p-16 text-white">
                    {/* Kiri Atas */}
                    <div className="md:self-start">
                        <h3 className="font-montserrat text-2xl md:text-4xl font-bold">
                            Our Procurement Commitment
                        </h3>
                    </div>

                    {/* Kanan Bawah */}
                    <div className="md:self-end md:max-w-lg text-sm md:text-base font-light">
                        <p className="mb-4">
                            We ensure every procurement activity is conducted with integrity, transparency,
                            and accountability, supporting efficiency and compliance with international maritime standards.
                        </p>
                        <Link
                            href="/vendor-manual"
                            className="inline-block bg-white/10 hover:bg-white/20 border border-white/50 px-4 py-2 text-white font-normal text-sm md:text-base transition"
                        >
                            Download Vendor Manual →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}