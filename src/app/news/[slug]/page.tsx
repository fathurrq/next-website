"use client"

import { useHeroTransition } from "@/components/TransitionProvider";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function News() {
  const { startTransition, setStartTransition } = useHeroTransition();
  const newsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setStartTransition(true), 1000);
    return () => clearTimeout(t);
  }, [setStartTransition]);

  // show "Welcome To" for 3s, then hide
  useEffect(() => {
    if (!startTransition) return;
  }, [startTransition]);

  const news = `
  Medan - Seorang pegawai PT Kelola Jasa Artha (PT Kejar), berinisial IRP, disebut turut terlibat dalam kasus penggelapan Rp8,6 miliar di Bank Mega yang menyeret Supervisor PT Bank Mega, Yenny (47), jadi terdakwa.<br/><br/>
  Keterlibatan IRP itu dicetuskan oleh Ketua Tim Penasihat Hukum (PH) terdakwa Yenny, yaitu Johannes M Turnip, saat diwawancarai awak media di Pengadilan Negeri (PN) Medan, pada Senin (17/2/25).<br/><br/>
  "Terkait saudara Irvan Rihza Pratama [IRP] itu adalah pegawai atau karyawan dari PT Kejar sampai saat ini yang kami ketahui statusnya masih saksi. Di dalam berita acara pemeriksaan (BAP) yang kami lihat dan kami baca bahwa saudara Irvan ini seharusnya sudah bisa dinaikkan statusnya," ucapnya.<br/><br/>
  Sebab, lanjut Johannes, sudah memenuhi dua alat bukti permulaan yang cukup untuk menetapkan IRP sebagai tersangka. IRP bersama sejumlah karyawan yang lainnya, menurut Johannes, turut membantu untuk memuluskan pengambilan uang tersebut.<br/><br/>
  "Ya, kami menduga juga ada turut perbantuan yang diberikan PT Kejar, sehingga bisa memuluskan langkah dari terdakwa atau klien kami," ujarnya.<br/><br/>
  Dalam kesempatan itu, Johannes mengatakan, kliennya tidak memiliki kekuasaan untuk menguasai uang yang menjadi kerugian Bank Mega dan diduga digelapkan sebesar Rp8,6 miliar.<br/><br/>
  "Terkait persidangan ini perlu kita ketahui bersama, yang pertama bahwa uang atau kerugian dari Bank Mega sendiri yang didakwakan, yaitu berada di bawah penguasaan PT Kejar tidak berada di bawah penguasaan terdakwa," katanya.<br/><br/>
  Kemudian, lanjut dia, peraturan Bank Indonesia dan peraturan Dewan Gubernur Bank Indonesia menjelaskan bahwa harus adanya kesepakatan antara bank dengan PT Kejar yang mempunyai izin dari Bank Indonesia.<br/><br/>
  "Itu harus ada perjanjian kerja sama secara tertulis. Jadi tidak boleh yang namanya surat perintah kerja, karena itu akhir dari perjanjian yang dibuat. Jadi, menurut kami ini adalah kesalahan yang fatal," ucapnya.<br/><br/>
  Pihaknya pun berharap kliennya bisa mendapatkan keadilan yang tepat dan sesuai porsi. Oleh karena itu, apa-apa yang didakwakan jaksa penuntut umum (JPU) terhadap kliennya harus dinyatakan tidak terbukti menurut hukum.<br/><br/>
  "Karena kami merasa bahwa kami tahu kami berhadapan dengan siapa. Menurut kami sekarang ini Pasal 374 KUHP terkait penggelapan dalam jabatan itu tidak tepat. Yang kedua terkait Pasal TPPU yang didakwakan terhadap klien kami juga kami rasa tidak tepat dan tidak terbukti," ujar Johannes.<br/><br/>
  Johannes juga mengatakan kasus ini harus menjadi perhatian publik, karena menyangkut keadilan warga negara. Ia pun mengaku siap membongkar kasus penggelapan ini sampai ke akar-akarnya.<br/><br/>
  "Sehingga kasus ini memang sangat menarik dan saya mohon untuk diatensi bersama. Karena ini cerita tentang keadilan yang memang harus diungkap kebenarannya secara terang benderang," tuturnya.<br/><br/>
  Untuk diketahui, persidangan akan dilanjutkan pada Jumat (21/2/25) dengan agenda pemeriksaan saksi lanjutan di Tempat Sidang Belawan Pengadilan Negeri (PN) Medan di Jalan Selebes, Kecamatan Medan Belawan.<br/><br/>
  "Kalau terkait permintaan jaksa harus sidang di Belawan kemarin alasan dari JPU katanya ada hambatan-hambatan, sehingga membuat terdakwa tidak bisa dihadirkan di PN Medan ini. Terkait apa hambatannya, jaksa tak memberitahukan," kata Johannes. (deddy/hm27)<br/><br/>
  `

  const keepUpdated = [
    {
      title: "New Research Vessel For Marine Science In SA",
      image: "/keep-update-1.png",
      link: "/articles/new-research-vessel-for-marine-science-in-sa",
    },
    {
      title: "New Research Vessel For Marine Science In SA",
      image: "/keep-update-2.png",
      link: "/articles/new-research-vessel-for-marine-science-in-sa",
    },
    {
      title: "New Research Vessel For Marine Science In SA",
      image: "/keep-update-3.png",
      link: "/articles/new-research-vessel-for-marine-science-in-sa",
    },
  ]
  return (
  <div id="news" ref={newsRef} className="pb-12 w-full min-h-screen flex flex-col items-center justify-center relative bg-white">
      {/* INTRO overlay (your multi-gradient) → fades out as before */}
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

      <div className="relative w-full h-[400px] lg:h-[550px]">
        <Image src="/thumbnail-article.jpg" alt="thumbnail-article" fill className="object-cover" />
        <div className="absolute top-0 inset-0 h-[400px] lg:h-[550px] bg-gradient-to-t from-[#0A0C67] to-[#0a446a00] backdrop-filter-[blur(10px)]"></div>

        <div className="relative container mx-auto px-4 pt-8 lg:px-0 flex flex-col gap-2 text-white h-full w-full justify-center">
          {/* Breadcrumb */}
          <h3 className=" text-[4vw] md:text-4xl font-medium mb-2">News / <span className="text-white/50 truncate">Pegawai PT Ke...</span></h3>
          {/* Title */}
          <h1 className="text-[4vw] md:text-[4.5vw] font-medium mb-4">Offshore Support Journal Asia 2025</h1>

          {/* Author & Date */}
          <div className="flex flex-col md:flex-row items-start gap-4 text-white text-[3vw] md:text-[2.2vw] lg:text-[1.4vw] font-medium">
            {/* Author */}
            <div className="flex justify-center items-center gap-2 font-medium">
              <Image src="/avatar.png" alt="Author" width={32} height={32} />
              <span>Redaktur Ferry Napitupulu</span>
            </div>
            {/* Date */}
            <span className="ml-2 md:ml-0">Senin, 17 February 2025 20:26</span>
          </div>
        </div>
      </div>

      <div className="relative mt-[-1.7rem] md:mt-[-3.4rem] lg:mt-[-5rem] w-full flex justify-center">
        <div className="container mx-auto px-4 lg:px-0 flex flex-col gap-2 text-white items-center">
          {/* Large Thumbnail */}
          <div className="bg-white/10 p-2 rounded-md backdrop-filter-[blur(10px)]">
            <Image src="/thumbnail-article.jpg" alt="Large Thumbnail" width={1259} height={719} />
          </div>

          {/* Article */}
          <div className="flex flex-col md:flex-row gap-8 p-4 items-start justify-center">
            {/* Article Text */}
            <div className="w-full md:w-[600px] lg:w-[700px]">
              <p dangerouslySetInnerHTML={{ __html: news }} className="text-[4vw] md:text-[1.5vw] lg:text-[1.4vw] font-medium text-slate-800" />
            </div>
            {/* Keep Updated */}
            <div className="sticky top-[105px] shadow-md rounded-md w-[350px] md:w-[450px] p-4 h-fit ">
              <h3 className="mb-4 text-[6vw] md:text-[2.8vw] lg:text-[2.5vw] font-bold text-slate-800">BKI Updates</h3>
              <div className="flex flex-col gap-8 overflow-y-auto">
                {keepUpdated.map((item, idx) => (
                  <div key={idx} className="relative w-[300px] md:w-[400px] h-[200px] bg-gradient-to-t from-[#0A0C67] to-[#0A436A]">
                    <Image src={item.image} alt={item.title} width={400} height={200} />
                    <span className="block p-4 w-full relative text-[4vw] md:text-[2vw] lg:text-[1.6vw] font-bold text-white bottom-[60px] md:bottom-[70px] lg:bottom-[100px]">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}