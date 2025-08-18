"use client"
import {useEffect, useRef} from "react";
import {useHeroTransition} from "@/components/TransitionProvider";
import {motion} from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function CompanyProfile() {
    const companyProfileRef = useRef<HTMLDivElement | null>(null);
    const {startTransition, setStartTransition} = useHeroTransition();

    useEffect(() => {
        const t = setTimeout(() => setStartTransition(true), 1000);
        return () => clearTimeout(t);
    }, [setStartTransition]);

    // show "Welcome To" for 3s, then hide
    useEffect(() => {
        if (!startTransition) return;
    }, [startTransition]);

    return (
        <div id="articles" ref={companyProfileRef} className="pb-12 relative w-full min-h-screen overflow-hidden">
            <motion.div
                className="absolute inset-0 z-10 pointer-events-none"
                initial={{opacity: 1}}
                animate={{opacity: startTransition ? 0 : 1}}
                transition={{duration: 0.8}}
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

            {/* Hero Section */}
            <section
                className="w-full h-[40vh] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/company-profile-bg.png')] bg-cover blur-xs bg-top"/>
                <div className="absolute top-0 inset-0 h-[40vh] bg-gradient-to-b from-[#0A436A06] to-[#0A436A00]"/>
                <div className="absolute top-0 inset-0 h-[40vh] bg-gradient-to-t from-[#0A436A] to-[#0A436A00]"/>
                <div
                    className="w-full relative flex flex-col justify-center items-center container py-24 text-center text-white">
                    <div className="flex flex-row w-full justify-center items-center gap-2">
                        <Link href={'/'} className="text-xl xl:text-3xl">
                            Home
                        </Link>
                        <p className="text-xl xl:text-3xl">
                            /
                        </p>
                        <p className="text-xl xl:text-3xl text-[#ffffff75]">
                            Company Profile
                        </p>
                    </div>
                    <h1 className="mt-4 text-4xl xl:text-6xl font-semibold">
                        Anchored in Trust, Driven by Innovation
                    </h1>
                    <p className="mt-4 text-lg xl:text-xl max-w-1/2">
                        Building stronger maritime capabilities with technical
                        standard-setting excellence.
                    </p>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="w-full px-6 py-16 grid md:grid-cols-2 gap-10 bg-white">
                <div className="relative bg-[#0A436A] text-white p-6 rounded-lg shadow-lg h-[50vh]">
                    <h2 className="text-4xl xl:text-6xl font-bold">
                        Integrity <span className="text-[#ffffff50]">is our</span> compass,
                        quality <span className="text-[#ffffff50]">is our</span> anchor
                    </h2>
                    <div
                        className="bg-[#ffffff50] absolute bottom-[28px] left-[24px] right-[24px] flex justify-between items-center w-auto py-[10px] px-3">
                        <Image src={'/left-arrow.png'} alt={"Left Arrow"} width={16} height={16}/>
                        <div className="flex justify-center items-center gap-1">
                            <p className="xl:text-2xl font-semibold text-white">Our Culture</p>
                            <p className="xl:text-2xl font-semibold text-white">1<span
                                className="text-[#ffffff50]">/8</span></p>
                        </div>
                        <Image src={'/right-arrow.png'} alt={"Right Arrow"} width={16} height={16}/>
                    </div>
                    <Image src={'/quotation-mark.png'} alt={'Quotation Mark'} width={147} height={115}
                           className="absolute bottom-[10vh] right-[19px]"/>
                </div>
                <div className="flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-[#0A436A]">Our Vision</h3>
                        <ul className="list-disc list-inside text-[#0A436A] space-y-2">
                            <li>World class integrated assurance group, empowering the nation by building trust</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mt-8 mb-4 text-[#0A436A]">Our Mission</h3>
                        <ul className="list-disc list-inside text-[#0A436A] space-y-2">
                            <li>Providing comprehensive and trusted services by strengthening capacity and capabilities
                                related to human resources, technology and innovation through synergy and business
                                integration.
                            </li>
                            <li>Providing added value to stakeholders through quality standardization, increasing
                                efficiency, safety and security.
                            </li>
                            <li>Building networks and strengthening reputation in Asia Pacific.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* History Section */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12">Our History</h2>

                    {/* Timeline */}
                    <div className="relative border-l border-gray-300 pl-8 space-y-10">
                        {[
                            {year: "1964", title: "Company Foundation", desc: "Company was founded…"},
                            {year: "1980", title: "Expansion", desc: "Extended global operations…"},
                            {year: "2000", title: "Modernization", desc: "Adopted new innovations…"},
                        ].map((item, idx) => (
                            <div key={idx} className="relative">
                                <div
                                    className="absolute -left-4 w-8 h-8 bg-blue-600 rounded-full border-4 border-white"/>
                                <h3 className="text-xl font-semibold">{item.year}</h3>
                                <p className="text-gray-600 font-medium">{item.title}</p>
                                <p className="text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Committees */}
            <section className="container mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold mb-12">Technical Committee</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {Array.from({length: 4}).map((_, i) => (
                        <div
                            key={i}
                            className="bg-white shadow rounded-lg overflow-hidden text-center"
                        >
                            <img src="/person.jpg" alt="member" className="w-full h-48 object-cover"/>
                            <div className="p-4">
                                <h3 className="font-bold">Ahmad Johnny Depp</h3>
                                <p className="text-sm text-gray-500">Position</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Governance */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12">Board Governance</h2>

                    <h3 className="text-2xl font-semibold mb-6">Board of Commissioners</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        {Array.from({length: 4}).map((_, i) => (
                            <div
                                key={i}
                                className="bg-white shadow rounded-lg overflow-hidden text-center"
                            >
                                <img src="/person.jpg" alt="commissioner" className="w-full h-48 object-cover"/>
                                <div className="p-4">
                                    <h3 className="font-bold">Ahmad Johnny Depp</h3>
                                    <p className="text-sm text-gray-500">President</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-2xl font-semibold mb-6">Board of Directors</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {Array.from({length: 4}).map((_, i) => (
                            <div
                                key={i}
                                className="bg-white shadow rounded-lg overflow-hidden text-center"
                            >
                                <img src="/person.jpg" alt="director" className="w-full h-48 object-cover"/>
                                <div className="p-4">
                                    <h3 className="font-bold">Ahmad Johnny Depp</h3>
                                    <p className="text-sm text-gray-500">Director</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Structure */}
            <section className="bg-blue-900 text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-12">Structure</h2>
                    <img
                        src="/structure.png"
                        alt="Organization Structure"
                        className="mx-auto max-w-full"
                    />
                </div>
            </section>
        </div>
    );
}