"use client";
import CollapsibleTable from "./components/table";
import { StructureImageLightbox } from "./components/lightbox";
import Carousel from "./components/carousel";
import ImageScroll from "./components/image-scroll";
import AboutUs from "./components/about-us";
import BoardOfDirectors from "./components/board-of-directors";
import Hero from "@/components/Hero";
import PageTransition from "@/components/page-transition";

const timeline: {
  year: string;
  title: string;
  desc: string;
  yearNote?: string;
}[] = [
  {
    year: "1964",
    title: "Company Foundation",
    desc: "Biro Klasifikasi Indonesia (BKI) resmi berdiri sebagai satu-satunya biro klasifikasi nasional untuk kapal berbendera Indonesia.",
  },
  {
    year: "1964",
    title: "Company Foundation",
    desc: "Penugasan BKI diperkuat dengan Keputusan Menteri Perhubungan Laut No. Th. 1/17/2 yang mewajibkan kapal berbendera Indonesia memiliki sertifikat klas dari BKI.",
  },
  {
    year: "1964",
    yearNote: "(PP No. 28/1964)",
    title: "Company Foundation",
    desc: "Pemerintah menetapkan pembentukan BKI sebagai Perusahaan Negara untuk mengurangi ketergantungan pada biro klasifikasi asing, menyesuaikan standar teknis dengan kondisi pelayaran nasional, serta menghemat devisa dan mengembangkan keahlian insinyur perkapalan Indonesia.",
  },
  {
    year: "1977",
    yearNote: "(PP No. 1/1977)",
    title: "Company Foundation",
    desc: "Status perusahaan berubah dari Perusahaan Negara menjadi PT. Biro Klasifikasi Indonesia (Persero).",
  },
  {
    year: "1978",
    title: "Company Foundation",
    desc: "Akta pendirian PT. BKI dibuat di hadapan Notaris Imas Fatimah, SH (No. 57), dan disahkan oleh Menteri Kehakiman melalui SK No. YA5/345/1978 pada 7 November 1978.",
  },
  {
    year: "1982",
    title: "Company Foundation",
    desc: "BKI memulai diversifikasi usaha komersial di bidang maritim, industri, minyak, dan gas, mencakup layanan klasifikasi, sertifikasi, konsultasi teknik, pengujian material, pelatihan, dan pengawasan proyek.",
  },
];

const boardOfCommissioner = [
  {
    name: "Susyanto",
    position: "President Commissioner / Independent Commissioner",
    image: "/bod/bod-susyanto.png",
  },
  {
    name: "Rainoc",
    position: "Commissioner\n",
    image: "/bod/bod-rainoc.png",
  },
  {
    name: "Virgo Eresta Jaya",
    position: "Commissioner",
    image: "/bod/bod-virgo.png",
  },
  {
    name: "Subagiyo",
    position: "Commissioner",
    image: "/bod/bod-subagiyo.png",
  },
];

const boardOfDirectors = [
  {
    name: "Arisudono Soerono",
    position: "President Director",
    image: "/director/director1.jpg",
  },
  {
    name: "R Benny Susanto",
    position: "Director of Operation",
    image: "/director/director2.jpg",
  },
  {
    name: "Sinung Triwulandari",
    position: "Director of Finance, Aministration and Risk Mangement",
    image: "/director/director3.jpg",
  },
  {
    name: "​​​​​​​Andry Tanudjaja",
    position: "Director of Institutional Relations",
    image: "/director/director4.png",
  },
];

export default function CompanyProfile() {

  return (
    <div
      id="company-profile"
      className="relative min-h-screen overflow-hidden"
    >
      <PageTransition />

      <Hero
        routes={[{ text: "Home", href: "/" }, { text: "Company Profile" }]}
        backgroundClass="bg-[url('/company-profile-bg.png')] bg-top"
        title={"Anchored in Trust, Driven by Innovation"}
        description={
          " Building strong partnerships and pioneering solutions to meet theevolving needs of maritime stakeholders."
        }
      />

      {/* about us */}
      {/* AboutUs is part of introduction section above */}
      <AboutUs />

      {/* Vision & Mission */}
      <section
        id="vision-mission-culture"
        className="w-full px-6 2xl:px-[105px] py-16 grid md:grid-cols-2 gap-12 bg-white"
      >
        <Carousel />
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-2xl 2xl:text-[64px] font-bold mb-4 text-[#0A436A]">
              Our Vision
            </h3>
            <ul className="2xl:text-2xl font-semibold list-disc list-inside text-[#0A436A] space-y-2">
              <li>
                To be a global and world class Indonesian integrated assurance
                group that is innovative, trusted and value creating to
                stakeholders
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl 2xl:text-[64px] font-bold mt-8 mb-4 text-[#0A436A]">
              Our Mission
            </h3>
            <ul className="2xl:text-xl font-semibold list-disc list-inside text-[#0A436A] space-y-4 text-justify">
              <li>
                Providing added value to stakeholders through assuring
                compliance to quality standard as well as increasing efficiency,
                safety, and security;
              </li>
              <li>
                Providing comprehensive and trusted services by strengthening
                capacity and capabilities related to human resources,
                technology, and innovation through synergy and business
                integration;
              </li>
              <li>
                Expanding networks and strengthening reputation at the global
                level in order to support the vision of Golden Indonesia 2045.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section
        id="history"
        className="bg-gradient-to-b from-[#0A436A] to-[#000] pt-16 2xl:pt-[135px] text-white"
      >
        <div className="flex flex-col gap-7 px-10 2xl:px-[105px]">
          <h2 className="text-3xl 2xl:text-[64px] font-bold text-white">
            Our History
          </h2>
          <p className="2xl:text-2xl">
            <span className="font-bold">Biro Klasifikasi Indonesia (BKI)</span>{" "}
            berdiri pada 1 Juli 1964 sebagai satu-satunya biro klasifikasi
            nasional untuk kapal berbendera Indonesia. Didirikan untuk
            mengurangi ketergantungan pada biro asing, BKI memastikan standar
            yang sesuai dengan kondisi pelayaran Indonesia sekaligus menghemat
            devisa dan mengembangkan keahlian lokal. Seiring perkembangan, BKI
            bertransformasi menjadi PT (Persero) pada 1977 dan memperluas
            layanan ke berbagai sektor maritim, industri, serta minyak dan gas.
          </p>
        </div>
        <div className="flex flex-col pl-10 2xl:pl-[105px] py-3 2xl:py-[21px]">
          <div className="flex flex-row items-center gap-4">
            <p className="text-lg 2xl:text-2xl font-bold text-[#FFFFFF75]">
              The Faces of Innovation
            </p>
            <div className="bg-gradient-to-r from-[#FFFFFF75] to-[#FFFFFF00] h-[1px] w-2/3 2xl:w-5/6" />
          </div>
          <ImageScroll members={boardOfCommissioner} />
        </div>

        <div className="pt-28 2xl:pt-40 w-full px-6 md:px-24 2xl:px-[196px]">
          {/* Timeline */}
          <div className="flex w-full flex-col items-start">
            {timeline.map((item, idx) => (
              <div
                key={`timeline-${idx + 1}`}
                className="group flex gap-x-6 2xl:gap-x-[90px] grow text-white"
              >
                <div className="relative">
                  {idx + 1 !== timeline.length && (
                    <div className="absolute left-1/2 top-0 h-full w-0.5 2xl:w-[5px] -translate-x-1/2 bg-[#FFFFFF30]"></div>
                  )}
                  <span className="relative z-10 grid h-3 w-3 2xl:h-[32px] 2xl:w-[32px] place-items-center rounded-full bg-slate-200"></span>
                </div>
                <div className="-translate-y-2/5 mb-12 pb-8 bg-[#00000060] rounded-sm px-3 2xl:px-6 py-4 2xl:py-8 flex flex-col 2xl:gap-y-[18px]">
                  <div className="flex flex-row items-end gap-1 2xl:gap-3">
                    <p className="text-[#FFFFFF60] 2xl:text-[32px] text-[16px]">
                      {item.year}
                    </p>
                    <p className="text-[#FFFFFF60] 2xl:text-2xl text-xs 2xl:mb-2">
                      {item.yearNote}
                    </p>
                  </div>
                  <p className="font-bold 2xl:text-3xl text-xl">{item.title}</p>
                  <p className="2xl:text-2xl text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="bg-gradient-to-r from-[#FFFFFF50] to-[#FFFFFF00] h-[1px] w-6/7" />
        </div>
      </section>

      {/* Board Governance */}
      <section className="bg-white py-16 flex flex-col items-center justify-center pb-36">
        <span className="text-4xl 2xl:text-[64px] font-medium mb-6 -tracking-tight text-black">
          Board Governance
        </span>
        <span className="text-xl 2xl:text-[32px] mb-12 2xl:mb-[102px] text-center max-w-2/3 text-black">
          Our distinguished board members provide strategic oversight,
          governance excellence, and visionary leadership to guide our
          company&apos;s continued growth and success
        </span>

        <div className="flex flex-col gap-5 w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full px-6 md:px-18 2xl:px-[105px] mb-5 gap-2 md:gap-0">
            <p className="text-4xl 2xl:text-5xl font-bold text-black md:flex-1/2">
              Board of Commissioners
            </p>
            <p className="md:text-2xl 2xl:text-[32px] text-black md:flex-1/2 md:text-end">
              Independent oversight and strategic guidance from industry leaders
              and subject matter experts
            </p>
          </div>
          <div className="pl-18">
            <div id="boc">
              <BoardOfDirectors members={boardOfCommissioner.slice(0, 2)} />
            </div>
          </div>

          <div className="flex flex-row justify-center items-center my-14">
            <div className="bg-gradient-to-r from-[#00000050] to-[#00000000] h-[1px] w-[89%]" />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full px-6 md:px-18 2xl:px-[105px] mb-5 gap-2 md:gap-0">
            <p className="text-4xl 2xl:text-5xl font-bold text-black md:flex-1/2">
              Board of Directors
            </p>
            <p className="md:text-2xl 2xl:text-[32px] text-black md:flex-1/2 md:text-end">
              Executive leadership team responsible for day-to-day operations
              and strategic implementation
            </p>
          </div>
          <div id="bod" className="pl-18">
            <BoardOfDirectors members={boardOfDirectors.slice(0, 2)} />
          </div>
        </div>
      </section>

      {/* Committees */}
      <section
        id="technical-committee"
        className="px-6 py-16 md:py-16 bg-black flex flex-col items-center justify-center text-white"
      >
        <span className="text-4xl 2xl:text-[64px] font-medium mb-6 -tracking-tight text-center text-white">
          Technical Committee
        </span>
        <div className="text-xl 2xl:text-[32px] mb-12 2xl:mb-[102px] text-center md:max-w-2/3 text-white">
          Our world-class technical experts who drive innovation and ensure the
          highest standards of technology implementation across all our projects
        </div>
        {/* <div className="flex flex-row items-center gap-3 2xl:gap-6 overflow-x-auto w-max pl-18">
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
                                <p className="font-semibold text-[#FFFFFF60] 2xl:text-[20px] text-xs">2024 - 2025</p>
                                <p className="font-bold 2xl:text-3xl">Ahmad Johnny Depp</p>
                                <p className="text-sm 2xl:text-2xl">Position</p>
                            </div>
                        </div>
                    ))}
                </div> */}
        <div className="w-full px-6 md:px-24">
          <CollapsibleTable />
        </div>
      </section>

      {/* Structure */}
      <section
        id="organization-structure"
        className="bg-gradient-to-b from-[#0A436A] to-[#000000] py-16 flex flex-col items-center justify-center relative overflow-hidden"
      >
        {/* Top structure: opacity dari 100% → 0% ke bawah */}
        <div
          className="absolute top-0 right-0 left-0 w-full h-2/5
                  bg-[url('/structure-top.png')] bg-top
                  [mask-image:linear-gradient(to_bottom,black,transparent)]
                  [mask-repeat:no-repeat] [mask-size:100%_100%]
                  [webkit-mask-image:linear-gradient(to_bottom,black,transparent)]
                  [webkit-mask-repeat:no-repeat] [webkit-mask-size:100%_100%]"
        />

        {/* Bottom structure: opacity dari 100% → 0% ke atas */}
        <div
          className="absolute bottom-0 right-0 left-0 w-full h-2/5
                  bg-[url('/structure-bottom.png')] bg-bottom
                  [mask-image:linear-gradient(to_top,black,transparent)]
                  [mask-repeat:no-repeat] [mask-size:100%_100%]
                  [webkit-mask-image:linear-gradient(to_top,black,transparent)]
                  [webkit-mask-repeat:no-repeat] [webkit-mask-size:100%_100%]"
        />

        <span className="text-4xl 2xl:text-[64px] font-medium mb-6 -tracking-tight text-white">
          Structure
        </span>
        <span className="text-xl 2xl:text-[32px] mb-24 text-center max-w-2/3 text-white 2xl:mb-36">
          Organization Structure of PT Biro Klasifikasi Indonesia (Persero)
        </span>
        <StructureImageLightbox />
      </section>
    </div>
  );
}
