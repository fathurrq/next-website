import PageTransition from "@/components/page-transition";
import {Fragment} from "react";
import Link from "next/link";

interface RouteItem {
    text: string;
    href?: string;
}

const routes: RouteItem[] = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'Services',
        href: '/our-services'
    },
    {
        text: 'Classification',
        href: '/our-services/classification'
    },
    {
        text: 'Ship Register',
    },
]

export default function ShipRegisterPage() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            <PageTransition/>

            <section
                className="w-full relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-[url('/our-services/classification/slider-1.jpg')] bg-cover bg-center"/>
                <div
                    className="absolute inset-0 bg-gradient-to-b from-[#0A436A]/60 to-black/60"/>
                <div
                    className="w-full relative flex flex-col justify-center items-center py-24 2xl:pt-40 text-center text-white text-shadow-lg text-shadow-black/30 gap-y-7 lg:gap-y-14 px-4">
                    <div className="flex flex-row lg:w-full w-1/2 justify-center items-center gap-2 flex-wrap">
                        {routes.map((route, index) => (
                            <Fragment key={route.text + '-' + index}>
                                {index > 0 && (
                                    <span className="md:text-xl 2xl:text-3xl">
                                    /
                                </span>
                                )}
                                {route.href ? (
                                    <Link href={route.href} className="md:text-xl 2xl:text-3xl">
                                        {route.text}
                                    </Link>
                                ) : (
                                    <span className="md:text-xl 2xl:text-3xl text-[#ffffff75]">
                                    {route.text}
                                </span>
                                )}
                            </Fragment>
                        ))}
                    </div>
                    <div
                        className="flex flex-col items-center lg:gap-y-3 gap-y-2 lg:p-8 p-6 rounded-lg overflow-hidden border-2 border-[#E8E8E866]/40 lg:w-1/2 w-full relative">
                        <div className="absolute inset-0 bg-black/50 blur-xl z-0"/>
                        <p className="lg:text-5xl text-2xl font-bold text-white text-center z-1">
                            Register of Ships
                        </p>
                        <p className="lg:text-2xl text-lg text-white text-center z-1">
                            We provide independent and reliable ship classification services to ensure your vessels
                            comply with international safety, environmental, and quality standards. From design approval
                            to const
                        </p>
                        <div className="flex flex-col gap-y-1 w-full z-1">
                            <p className="lg:text-2xl text-lg text-white text-left">
                                Ship Name
                            </p>
                            <input
                                className="lg:px-6 px-3 lg:py-2 py-1 rounded-lg border border-white/40 bg-black/50 text-white lg:text-2xl text-lg"/>
                        </div>
                        <div className="flex lg:flex-row flex-col gap-x-10 w-full z-1">
                            <div className="flex flex-col gap-y-1 w-full z-1">
                                <p className="lg:text-2xl text-lg text-white text-left">
                                    Register No
                                </p>
                                <input
                                    className="lg:px-6 px-3 lg:py-2 py-1 rounded-lg border border-white/40 bg-black/50 text-white lg:text-2xl text-lg"/>
                            </div>
                            <div className="flex flex-col gap-y-1 w-full z-1">
                                <p className="lg:text-2xl text-lg text-white text-left">
                                    IMO No.
                                </p>
                                <input
                                    className="lg:px-6 px-3 lg:py-2 py-1 rounded-lg border border-white/40 bg-black/50 text-white lg:text-2xl text-lg"/>
                            </div>
                        </div>
                        <div className="flex lg:flex-row flex-col gap-x-10 w-full z-1">
                            <div className="flex flex-col gap-y-1 w-full z-1">
                                <p className="lg:text-2xl text-lg text-white text-left">
                                    Min GT
                                </p>
                                <input
                                    className="lg:px-6 px-3 lg:py-2 py-1 rounded-lg border border-white/40 bg-black/50 text-white lg:text-2xl text-lg"/>
                            </div>
                            <div className="flex flex-col gap-y-1 w-full z-1">
                                <p className="lg:text-2xl text-lg text-white text-left">
                                    Max GT
                                </p>
                                <input
                                    className="lg:px-6 px-3 lg:py-2 py-1 rounded-lg border border-white/40 bg-black/50 text-white lg:text-2xl text-lg"/>
                            </div>
                        </div>
                        <button
                            className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm lg:text-xl font-light text-white bg-[#0A436A] backdrop-blur-md border border-white/50 hover:bg-[#0A436A]/80 transition-all duration-300 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 w-full mt-2"
                        >
                            Search
                            <span className="ml-2">→</span>
                        </button>
                    </div>
                </div>
            </section>

            <section className="w-full flex flex-col lg:py-20 py-10 lg:px-24 px-4 lg:gap-y-8 gap-y-4 bg-[#E2E7F0]">
                <p className="lg:text-6xl text-3xl text-[#0A436A] font-bold">Result</p>
                <div className="w-full flex flex-col lg:gap-y-8 gap-y-4">
                    {new Array(10).fill(0).map((_, index) => (
                        <article
                            key={index}
                            className="rounded-xl border border-slate-200 bg-white shadow-sm"
                        >
                            <div
                                className="flex flex-col gap-4 p-4 md:p-5 lg:flex-row lg:items-start lg:justify-between">
                                {/* Left */}
                                <div className="min-w-0 flex-1">
                                    {/* Title + Register No + IMO No. + GT */}
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-3 lg:flex-row flex-col">
                                            <h2 className="text-lg md:text-xl font-bold text-slate-900">Speed Boat
                                                GT11X</h2>
                                            <Badge>Register No: <span className="ml-1">31873193</span></Badge>
                                        </div>
                                        <div className="flex lg:flex-row flex-col gap-2 shrink-0 self-start">
                                            <Pill><span className="mr-1 opacity-70">IMO:</span> 69753922</Pill>
                                            <Pill>GT1212</Pill>
                                        </div>
                                    </div>

                                    {/* Meta rows (FLEX) */}
                                    <div
                                        className="mt-3 flex flex-wrap gap-y-3 border-t border-b border-[#C8C8C8] py-4">
                                        <MetaItem label="Flag" value="Indonesia"/>
                                        <MetaItem label="Type of Ship" value="Speed Boat"/>
                                        <MetaItem label="Status Compliance"
                                                  value={<span className="text-emerald-600">Active</span>}/>
                                        <MetaItem label="Status Class"
                                                  value={<span className="text-emerald-600">Active</span>}/>
                                    </div>

                                    {/* Details */}
                                    <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                                        <span className="font-semibold">Details: </span>
                                        We provide independent and reliable ship classification services to ensure your
                                        vessels comply with international safety, environmental, and quality standards.
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="flex items-center justify-end gap-2 lg:gap-4">
                    <div className="flex items-center gap-1 text-slate-700">
                        <button className="px-2 py-1 rounded-md hover:bg-slate-100">&lt;</button>
                        {[1, 2, 3, 4, 5].map((n) => (
                            <button
                                key={n}
                                className={`h-8 w-8 rounded-md text-sm font-medium ${
                                    n === 1
                                        ? "bg-slate-900 text-white"
                                        : "hover:bg-slate-100 text-slate-800"
                                }`}
                            >
                                {n}
                            </button>
                        ))}
                        <button className="px-2 py-1 rounded-md hover:bg-slate-100">&gt;</button>
                    </div>
                    <div className="flex items-center gap-2">
                        <select className="rounded-md border border-slate-300 bg-white px-2 py-1 text-sm text-black">
                            <option>10 / page</option>
                            <option>20 / page</option>
                            <option>50 / page</option>
                        </select>
                    </div>
                </div>
            </section>
        </div>
    );
}


function Pill({children}: { children: React.ReactNode }) {
    return (
        <span
            className="inline-flex items-center rounded-md border border-slate-300/70 px-3 py-1 text-sm font-semibold shadow-sm bg-white text-slate-800">
      {children}
    </span>
    );
}

function Badge({children}: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center rounded-lg bg-slate-900 text-white px-2.5 py-1 text-xs font-semibold">
      {children}
    </span>
    );
}

function MetaItem({label, value}: { label: string; value: React.ReactNode }) {
    return (
        <div className="flex flex-col basis-1/2 md:basis-1/3 xl:basis-1/4 pr-4">
            <p className="text-slate-500 text-sm"> {label} </p>
            <p className="font-medium text-slate-800 mt-0.5"> {value} </p>
        </div>
    );
}