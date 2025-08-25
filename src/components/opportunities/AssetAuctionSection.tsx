"use client"

import Image from "next/image";
import Link from "next/link";

export default function AssetAuctionSection() {
    interface Auction {
        date: string;
        title: string;
        href: string;
    }

    const auctions: Auction[] = [
        {
            date: "11 Jun 2025 - Closed",
            title: "Office Equipment | Jakarta",
            href: "/download/office-equipment",
        },
        {
            date: "25 Sept 2025 - Open",
            title: "Patrol Boat | Surabaya",
            href: "/download/patrol-boat-surabaya",
        },
        {
            date: "5 Oct 2025 - Open",
            title: "Patrol Boat | Jakarta",
            href: "/download/patrol-boat-jakarta",
        },
        {
            date: "11 Jun 2025 - Closed",
            title: "Office Equipment | Jakarta",
            href: "/download/office-equipment",
        },
        {
            date: "25 Sept 2025 - Open",
            title: "Patrol Boat | Surabaya",
            href: "/download/patrol-boat-surabaya",
        },
        {
            date: "5 Oct 2025 - Open",
            title: "Patrol Boat | Jakarta",
            href: "/download/patrol-boat-jakarta",
        },
    ];

    function AuctionCard({ date, title, href }: Auction) {
        return (
            <div className="flex justify-between items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-md px-4 py-3">
                <div className="pr-2">
                    <p className="text-xs text-gray-300">{date}</p>
                    <h4 className="text-sm md:text-lg font-semibold">{title}</h4>
                </div>
                <Link
                    href={href}
                    className="text-xs md:text-sm px-3 py-2 bg-white/20 hover:bg-white/30 rounded-md transition"
                >
                    Download
                </Link>
            </div>
        );
    }

    return (
        <div
            id="our-world"
            className="relative w-full h-auto"
        >
            <div className="absolute inset-0 -z-10">
                <Image src="/asset-auction-bg.jpg" alt="asset-auction-bg" fill className="object-cover" />
            </div>

            <div className="absolute top-0 inset-0 bg-gradient-to-b to-[#00000000] from-[#000000]"></div>
            <div className="absolute bottom-0 inset-0 bg-gradient-to-t to-[#0A436A00] from-[#0A436A]"></div>

            <div className="relative w-full h-auto top-0 inset-0 flex flex-col gap-10 md:gap-36 p-8 md:p-16 2xl:p-24 
            font-montserrat justify-around items-center md:items-start">
                <h3 className="text-2xl md:text-4xl 2xl:text-6xl font-bold">Asset Auction</h3>

                <div className="w-full flex justify-between flex-col md:flex-row items-center md:items-start">
                    {/* Kiri - Judul & List Auction */}
                    <div className="flex-1 flex flex-col justify-center">
                        <div className="flex flex-col gap-4 max-w-md max-h-64 2xl:max-h-72 overflow-scroll">
                            {auctions.map((item, index) => (
                                <AuctionCard key={index} {...item} />
                            ))}
                        </div>
                    </div>

                    {/* Kanan - Deskripsi */}
                    <div className="flex-1 flex flex-col justify-center items-center md:items-end mt-8 md:mt-0 md:ml-12 max-w-lg 
                    text-center md:text-start">
                        <h3 className="text-xl md:text-3xl 2xl:text-5xl font-bold mb-4">
                            Transparent auction of BKI’s non-operational assets.
                        </h3>
                        <p className="text-xs md:text-base text-gray-200 mb-6">
                            We provide equal opportunities for the public and partners to
                            participate in our asset auction process, ensuring fairness,
                            transparency, and accountability.
                        </p>
                        <Link
                            href="/auction-contact"
                            className="px-5 py-3 bg-white/20 hover:bg-white/30 rounded-md text-white font-medium text-xs md:text-base transition"
                        >
                            Auction Contact →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}