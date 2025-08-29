"use client"

export default function AwardSection() {

    const logo = [
        {
            src: "/logo-acs.png",
            alt: "acs"
        },
        {
            src: "/logo-iperindo.png",
            alt: "iperindo"
        },
        {
            src: "/logo-tjs.png",
            alt: "tjs"
        },
        {
            src: "/logo-apitindo.png",
            alt: "apitindo"
        },
        {
            src: "/logo-aisi.png",
            alt: "aisi"
        },
    ]

    return (
        <div id="awards" className="relative w-full min-h-screen overflow-hidden">
            {/* background image */}
            <div className="h-[50vh] bg-gradient-to-b from-black to-[#A98049]"></div>

            {/* gradient overlay bagian atas */}
            {/* <div className="absolute top-0 inset-0 h-[20vh] bg-gradient-to-t from-[#d4a66a06] to-[#0A436A]"></div> */}
            {/* gradient putih transisi */}
            <div className="absolute top-[30vh] inset-0 h-[20vh] bg-gradient-to-t from-[#A98049] to-transparent"></div>
            {/* white background di bawah */}
            <div className="absolute top-[50vh] inset-0 h-full bg-gradient-to-b from-[#A98049] to-black"></div>

            {/* Content wrapper */}
            <div className="mt-[-30rem] md:mt-[-20rem] w-full relative z-10">
                <div className="container mx-auto px-4 lg:px-0 flex flex-col gap-10">

                    {/* Awards Section */}
                    <div className="mt-64 text-white">
                        <div className="container flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-6">
                            <h3 className="text-2xl md:text-4xl 2xl:text-6xl font-bold text-center md:text-left">Award & Recognition</h3>
                            <p className="font-light text-sm md:text-base 2xl:text-3xl text-center md:text-end">Achievements that define our commitment and quality.</p>
                        </div>

                        <p className="text-white/80 text-sm md:text-base 2xl:text-3xl font-semibold mt-4 mb-2">LEGISLATION RELATING TO BKI FOR CLASSIFICATION & STATUTORIA ACTIVITIES</p>
                        <div className="h-[1px] bg-gradient-to-r from-white to-transparent w-full mb-6"></div>

                        {/* Activities */}
                        <div className="bg-black/60 text-white rounded-[6px] p-3 md:p-6 mb-6 text-sm md:text-base 2xl:text-3xl">
                            <span className="text-white/60 font-montserrat">1995, April 6</span>
                            <h4 className="font-semibold mb-2">Decision of Directorate General of Sea Transportation No. PY.68/1/3-95</h4>
                            <div className="text-xs md:text-sm 2xl:text-2xl">
                             <span className="font-semibold">Regarding</span> <span className="italic">&quot;Issue of authority to BKI to implement Ship Safety inspection and Pollution Prevention to Indonesian Flag Cargoes Vessel with Gross Tonnage (GT) of 500 or more classified with BKI&quot;</span>
                            </div>
                        </div>
                        
                        <div className="bg-black/60 text-white rounded-[6px] p-3 md:p-6 mb-6 text-sm md:text-base 2xl:text-3xl">
                            <span className="text-white/60 font-montserrat">1995, April 6</span>
                            <h4 className="font-semibold mb-2">Decision of Directorate General of Sea Transportation No. PY.68/1/3-95</h4>
                            <div className="text-xs md:text-sm 2xl:text-2xl">
                             <span className="font-semibold">Regarding</span> <span className="italic">&quot;Issue of authority to BKI to implement Ship Safety inspection and Pollution Prevention to Indonesian Flag Cargoes Vessel with Gross Tonnage (GT) of 500 or more classified with BKI&quot;</span>
                            </div>
                        </div>

                        <p className="text-white/80 text-sm md:text-base 2xl:text-3xl font-semibold mt-4 mb-2">LEGISLATION RELATING TO BKI FOR CLASSIFICATION & STATUTORIA ACTIVITIES</p>
                        <div className="h-[1px] bg-gradient-to-r from-white to-transparent w-full mb-6"></div>

                        {/* Activities */}
                        <div className="bg-black/60 text-white rounded-[6px] p-3 md:p-6 mb-6 text-sm md:text-base 2xl:text-3xl">
                            <span className="text-white/60 font-montserrat">1995, April 6</span>
                            <h4 className="font-semibold mb-2">Decision of Directorate General of Sea Transportation No. PY.68/1/3-95</h4>
                            <div className="text-xs md:text-sm 2xl:text-2xl">
                             <span className="font-semibold">Regarding</span> <span className="italic">&quot;Issue of authority to BKI to implement Ship Safety inspection and Pollution Prevention to Indonesian Flag Cargoes Vessel with Gross Tonnage (GT) of 500 or more classified with BKI&quot;</span>
                            </div>
                        </div>
                        
                        <div className="bg-black/60 text-white rounded-[6px] p-3 md:p-6 mb-6 text-sm md:text-base 2xl:text-3xl">
                            <span className="text-white/60 font-montserrat">1995, April 6</span>
                            <h4 className="font-semibold mb-2">Decision of Directorate General of Sea Transportation No. PY.68/1/3-95</h4>
                            <div className="text-xs md:text-sm 2xl:text-2xl">
                             <span className="font-semibold">Regarding</span> <span className="italic">&quot;Issue of authority to BKI to implement Ship Safety inspection and Pollution Prevention to Indonesian Flag Cargoes Vessel with Gross Tonnage (GT) of 500 or more classified with BKI&quot;</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}