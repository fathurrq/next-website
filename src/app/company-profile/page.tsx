"use client"
import {useEffect, useRef} from "react";
import {useHeroTransition} from "@/components/TransitionProvider";
import {motion} from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const timeline: {
    year: string
    title: string
    desc: string
    yearNote?: string
}[] = [
    {
        year: "1964",
        title: "Company Foundation",
        desc: "Biro Klasifikasi Indonesia (BKI) resmi berdiri sebagai satu-satunya biro klasifikasi nasional untuk kapal berbendera Indonesia."
    },
    {
        year: "1964",
        title: "Company Foundation",
        desc: "Penugasan BKI diperkuat dengan Keputusan Menteri Perhubungan Laut No. Th. 1/17/2 yang mewajibkan kapal berbendera Indonesia memiliki sertifikat klas dari BKI."
    },
    {
        year: "1964",
        yearNote: "(PP No. 28/1964)",
        title: "Company Foundation",
        desc: "Pemerintah menetapkan pembentukan BKI sebagai Perusahaan Negara untuk mengurangi ketergantungan pada biro klasifikasi asing, menyesuaikan standar teknis dengan kondisi pelayaran nasional, serta menghemat devisa dan mengembangkan keahlian insinyur perkapalan Indonesia."
    },
    {
        year: "1977",
        yearNote: "(PP No. 1/1977)",
        title: "Company Foundation",
        desc: "Status perusahaan berubah dari Perusahaan Negara menjadi PT. Biro Klasifikasi Indonesia (Persero)."
    },
    {
        year: "1978",
        title: "Company Foundation",
        desc: "Akta pendirian PT. BKI dibuat di hadapan Notaris Imas Fatimah, SH (No. 57), dan disahkan oleh Menteri Kehakiman melalui SK No. YA5/345/1978 pada 7 November 1978."
    },
    {
        year: "1982",
        title: "Company Foundation",
        desc: "BKI memulai diversifikasi usaha komersial di bidang maritim, industri, minyak, dan gas, mencakup layanan klasifikasi, sertifikasi, konsultasi teknik, pengujian material, pelatihan, dan pengawasan proyek."
    },
];

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
            <section className="bg-gradient-to-b from-[#0A436A] to-[#000] py-16">
                <div className="flex flex-col gap-7 px-10">
                    <h2 className="text-3xl xl:text-6xl font-bold">Our History</h2>
                    <p className="xl:text-2xl">
                        Biro Klasifikasi Indonesia (BKI) berdiri pada 1 Juli 1964 sebagai
                        satu-satunya biro klasifikasi nasional untuk kapal berbendera Indonesia. Didirikan untuk
                        mengurangi ketergantungan pada biro asing, BKI memastikan standar yang sesuai dengan kondisi
                        pelayaran Indonesia sekaligus menghemat devisa dan mengembangkan keahlian lokal. Seiring
                        perkembangan, BKI bertransformasi menjadi PT (Persero) pada 1977 dan memperluas layanan ke
                        berbagai sektor maritim, industri, serta minyak dan gas.
                    </p>
                </div>
                <div className="flex flex-col pl-10 py-3">
                    <div className="flex flex-row items-center gap-4">
                        <p className="text-lg xl:text-2xl font-bold text-[#FFFFFF50]">The Faces of Innovation</p>
                        <div className="bg-gradient-to-r from-[#FFFFFF50] to-[#FFFFFF00] h-[1px] w-2/3"/>
                    </div>
                    <div className="flex flex-row items-center gap-3 xl:gap-6 overflow-x-scroll w-max-content pt-3">
                        {Array.from({length: 4}).map((_, i) => (
                            <div
                                key={i}
                                className="shadow overflow-hidden relative"
                            >
                                <Image src="/faces-of-innovation/1.png" alt="member"
                                       width={484} height={422}
                                       className="object-cover rounded-xs"/>
                                <div
                                    className="p-2 absolute bottom-4 left-4 right-4 bg-[#00000075] flex flex-col rounded-sm">
                                    <p className="font-semibold text-[#FFFFFF60] xl:text-[20px] text-xs">2024 - 2025</p>
                                    <p className="font-bold xl:text-3xl">Ahmad Johnny Depp</p>
                                    <p className="text-sm xl:text-2xl">Position</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="py-20 xl:py-40 w-full px-8 xl:px-32">
                    {/* Timeline */}
                    <div className="flex w-full flex-col items-start">
                        {timeline.map((item, idx) => (
                            <div key={`timeline-${idx + 1}`} className="group flex gap-x-6">
                                <div className="relative">
                                    {idx + 1 !== timeline.length && <div
                                        className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-[#FFFFFF30]"></div>}
                                    <span
                                        className="relative z-10 grid h-3 w-3 place-items-center rounded-full bg-slate-200 text-slate-800"></span>
                                </div>
                                <div
                                    className="-translate-y-2/5 mb-12 pb-8 bg-[#00000060] rounded-sm px-3 xl:px-6 py-4 xl:py-8 flex flex-col">
                                    <div className="flex flex-row items-end gap-1">
                                        <p className="text-[#FFFFFF60] xl:text-[20px] text-xs">{item.year}</p>
                                        <p className="text-[#FFFFFF60] text-[9px]">{item.yearNote}</p>
                                    </div>
                                    <p className="font-bold xl:text-3xl text-xl">{item.title}</p>
                                    <p className="xl:text-2xl text-lg">{item.desc}</p>
                                </div>
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