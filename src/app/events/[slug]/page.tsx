"use client"

import { useHeroTransition } from "@/components/TransitionProvider";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

export default function Event() {
  const { startTransition, setStartTransition } = useHeroTransition();
  const articleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setStartTransition(true), 1000);
    return () => clearTimeout(t);
  }, [setStartTransition]);

  // show "Welcome To" for 3s, then hide
  useEffect(() => {
    if (!startTransition) return;
  }, [startTransition]);

  const eventDescription = `
  Medan - Seorang pegawai PT Kelola Jasa Artha (PT Kejar), berinisial IRP, disebut turut terlibat dalam kasus penggelapan Rp8,6 miliar di Bank Mega yang menyeret Supervisor PT Bank Mega, Yenny (47), jadi terdakwa.

Keterlibatan IRP itu dicetuskan oleh Ketua Tim Penasihat Hukum (PH) terdakwa Yenny, yaitu Johannes M Turnip, saat diwawancarai awak media di Pengadilan Negeri (PN) Medan, pada Senin (17/2/25).

"Terkait saudara Irvan Rihza Pratama [IRP] itu adalah pegawai atau karyawan dari PT Kejar sampai saat ini yang kami ketahui statusnya masih saksi. Di dalam berita acara pemeriksaan (BAP) yang kami lihat dan kami baca bahwa saudara Irvan ini seharusnya sudah bisa dinaikkan statusnya," ucapnya.

Sebab, lanjut Johannes, sudah memenuhi dua alat bukti permulaan yang cukup untuk menetapkan IRP sebagai tersangka. IRP bersama sejumlah karyawan yang lainnya, menurut Johannes, turut membantu untuk memuluskan pengambilan uang tersebut.

"Ya, kami menduga juga ada turut perbantuan yang diberikan PT Kejar, sehingga bisa memuluskan langkah dari terdakwa atau klien kami," ujarnya.

Dalam kesempatan itu, Johannes mengatakan, kliennya tidak memiliki kekuasaan untuk menguasai uang yang menjadi kerugian Bank Mega dan diduga digelapkan sebesar Rp8,6 miliar.

"Terkait persidangan ini perlu kita ketahui bersama, yang pertama bahwa uang atau kerugian dari Bank Mega sendiri yang didakwakan, yaitu berada di bawah penguasaan PT Kejar tidak berada di bawah penguasaan terdakwa," katanya.

Kemudian, lanjut dia, peraturan Bank Indonesia dan peraturan Dewan Gubernur Bank Indonesia menjelaskan bahwa harus adanya kesepakatan antara bank dengan PT Kejar yang mempunyai izin dari Bank Indonesia.

"Itu harus ada perjanjian kerja sama secara tertulis. Jadi tidak boleh yang namanya surat perintah kerja, karena itu akhir dari perjanjian yang dibuat. Jadi, menurut kami ini adalah kesalahan yang fatal," ucapnya.

Pihaknya pun berharap kliennya bisa mendapatkan keadilan yang tepat dan sesuai porsi. Oleh karena itu, apa-apa yang didakwakan jaksa penuntut umum (JPU) terhadap kliennya harus dinyatakan tidak terbukti menurut hukum.

"Karena kami merasa bahwa kami tahu kami berhadapan dengan siapa. Menurut kami sekarang ini Pasal 374 KUHP terkait penggelapan dalam jabatan itu tidak tepat. Yang kedua terkait Pasal TPPU yang didakwakan terhadap klien kami juga kami rasa tidak tepat dan tidak terbukti," ujar Johannes.

Johannes juga mengatakan kasus ini harus menjadi perhatian publik, karena menyangkut keadilan warga negara. Ia pun mengaku siap membongkar kasus penggelapan ini sampai ke akar-akarnya.

"Sehingga kasus ini memang sangat menarik dan saya mohon untuk diatensi bersama. Karena ini cerita tentang keadilan yang memang harus diungkap kebenarannya secara terang benderang," tuturnya.

Untuk diketahui, persidangan akan dilanjutkan pada Jumat (21/2/25) dengan agenda pemeriksaan saksi lanjutan di Tempat Sidang Belawan Pengadilan Negeri (PN) Medan di Jalan Selebes, Kecamatan Medan Belawan.

"Kalau terkait permintaan jaksa harus sidang di Belawan kemarin alasan dari JPU katanya ada hambatan-hambatan, sehingga membuat terdakwa tidak bisa dihadirkan di PN Medan ini. Terkait apa hambatannya, jaksa tak memberitahukan," kata Johannes. (deddy/hm27)
  `

  const eventDateAndTime = {
    startDate: "18 August 2025",
    endDate: "20 August 2025",
    title: "New Research Vessel For Marine Science in SA",
    place: "Gedung Konser Balai Sarbini, Kota Jakarta Selatan, Indonesia",
    img: "/news2.png",
    link: "/events/news2",
  }
  return (
    <div id="articles" ref={articleRef} className="pb-12 w-full min-h-screen overflow-hidden bg-white">
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: startTransition ? 0 : 1 }}
        transition={{ duration: 0.8 }}
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

      <div className="h-[50vh] lg:h-[100vh] bg-[url('/thumbnail-article.jpg')] bg-cover"></div>

      <div className="absolute top-0 inset-0 lg:h-[550px] bg-gradient-to-t from-[#0A0C67] to-[#0a446a00] backdrop-filter-[blur(10px)] "></div>
      <div className="absolute top-[550px] inset-0 h-[100vh] bg-white"></div>

      <div className="relative mt-[-20rem] md:mt-[-25rem] lg:mt-[-45rem] inset-0 w-full">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-4">
          <div className=" px-4 lg:px-0 flex flex-col gap-2">
            <h3 className="text-white text-[5vw] md:text-[2.5vw] font-medium mb-2">Events / <span className="text-white/50 truncate">Pegawai PT Ke...</span></h3>
            <h1 className="text-[5vw] md:text-[3vw] font-medium mb-4">Offshore Support Journal Asia 2025</h1>

            <div className="bg-white/10 p-4 rounded-md backdrop-filter-[blur(10px)]">
              <Image src="/thumbnail-article.jpg" alt="Large Thumbnail" width={1259} height={719} />
            </div>

            <div className="mt-[3rem] md:mt-0 flex flex-col md:flex-row gap-8 p-4">
              <div className="w-full lg:w-[700px]">
                <p dangerouslySetInnerHTML={{ __html: eventDescription }} className="text-[4vw] md:text-[1.9vw] lg:text-[1.4vw] font-medium text-slate-800" />
              </div>
            </div>
          </div>

          <div className="max-w-full lg:max-w-[650px] h-fit bg-white/10 rounded-md p-1 backdrop-filter-[blur(10px)] shadow-md text-white mx-2 md:mx-4 lg:mx-0">
            <div className="h-full py-8 px-4 bg-gradient-to-t from-[#0A436A70] to-[#00000070] rounded-md flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-[3vw] md:text-[1.7vw] lg:text-[1vw] font-medium">Time</span>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[3vw] md:text-[1.8vw] lg:text-[1.4vw] font-medium">{eventDateAndTime.startDate} - {eventDateAndTime.endDate}</p>
                <p className="text-[3vw] md:text-[1.8vw] lg:text-[1.4vw] font-medium">08:00 - 17:00</p>
              </div>

              <div className="h-0.5 bg-white/20 my-4" />

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-[3vw] md:text-[1.7vw] lg:text-[1vw] font-medium">Location</span>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-[3vw] md:text-[1.8vw] lg:text-[1.4vw] font-medium">{eventDateAndTime.place}</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}