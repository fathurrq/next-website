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
            <div className="absolute top-[50vh] inset-0 h-[100vh] bg-gradient-to-b from-[#A98049] to-black"></div>

            {/* Content wrapper */}
            <div className="mt-[-30rem] md:mt-[-20rem] w-full relative z-10">
                <div className="container mx-auto px-4 lg:px-0 flex flex-col gap-10">

                    {/* Awards Section */}
                    <div className="mt-10">
                        <div className="flex justify-between">
                            <h3 className="text-4xl font-semibold mb-2">Award & Recognition</h3>
                            <p className="text-gray-400 mb-6">Achievements that define our commitment and quality.</p>
                        </div>

                        {/* Classification Segment */}
                        <div className="bg-blue-900/80 text-white rounded-lg p-6 mb-6">
                            <h4 className="text-lg font-semibold mb-2">Classification Segment</h4>
                            <div className="bg-blue-800 rounded p-4">
                                All INSA Members registered with BKI
                            </div>
                        </div>

                        {/* Example cooperation card */}
                        <div className="bg-blue-900/80 text-white rounded-lg p-6 mb-6">
                            <h4 className="text-lg font-semibold mb-2">Direktorat Jenderal Perhubungan Laut</h4>
                            <p className="text-sm text-white/80">
                                Cooperation Agreement between the Directorate General of Sea Transportation (Direktorat Jenderal Perhubungan Laut)
                                and PT. Biro Klasifikasi Indonesia (Persero) concerning the Implementation of Surveying and Certification of
                                Indonesian-flagged Ship No. B.04190 / HK.503 / KI-20
                            </p>
                        </div>

                        {/* Commercial Segment */}
                        <div className="bg-blue-900/80 text-white rounded-lg p-6 mb-6">
                            <h4 className="text-lg font-semibold mb-2">Commercial Segment</h4>
                            <p className="text-sm text-white/80">
                                Energy & Industry Sector: JICT, TPK KOJA, NPTC I, KEMSOS, MORATELINDO, SARULLA OPERATION LIMITED,
                                STAR ENERGY KAKAP LTD, REKAYASA INDUSTRI, FUJI ELECTRIC, PERTAMINA EP, SOKORIA, SORIK MARAPI,
                                KSO BKI SCI, PERTAMINA EP CEPU
                            </p>
                        </div>

                        {/* Marine & Offshore */}
                        <div className="bg-blue-900/80 text-white rounded-lg p-6 mb-6">
                            <h4 className="text-lg font-semibold mb-2">Marine & Offshore Sector</h4>
                            <p className="text-sm text-white/80">
                                PT. PHE, OSSES, Ministry of Marine and Fisheries, CONOCOPHILLIPS GRISSIK LTD, MEDCO E&P NATUNA LTD,
                                PT. PGN LNG INDONESIA, PLN, SKK MIGAS, PT. PERTAMINA SHIPPING, BP BERAU, PT. MBSS, PT. PELNI,
                                PT. ASDP INDONESIA FERRY, PT. RUKINDO, PT. PELAYARAN BAHETRA, ADHIGUNA, PERTAMINA MOR I MEDAN,
                                SHIPPING COMPANY, OIL & GAS COMPANY, ENI MUARA BAKAU BV, INPEX CO, OIL & GAS COMPANY
                            </p>
                        </div>
                    </div>

                    {/* Member of Association */}
                    <div className="mt-12">
                        <h3 className="text-2xl font-semibold mb-6">Member of Association</h3>
                        <div className="flex flex-wrap gap-8 items-center">
                            {logo.map((a, i) => (
                                <img src={a.src} alt={a.alt} key={i} className="h-16" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}