"use client";

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
  A technical meeting was held to discuss the latest requirements and procedures for ship certification, bringing together key stakeholders from the maritime industry.<br/><br/>
  The event featured presentations and panel discussions led by European Board Member Committee representatives, focusing on harmonizing certification standards and improving compliance processes.<br/><br/>
  Participants explored recent regulatory updates, shared best practices, and addressed challenges faced by ship operators in meeting international certification criteria.<br/><br/>
  The meeting provided valuable networking opportunities and fostered collaboration between local authorities and European board members to ensure safer and more efficient maritime operations.<br/><br/>
  Attendees left with actionable insights and a clearer understanding of the steps needed to achieve and maintain ship certification in accordance with European standards.<br/><br/>
`;

  const eventDateAndTime = {
    startDate: "18 August 2025",
    endDate: "20 August 2025",
    title: "New Research Vessel For Marine Science in SA",
    place: "Gedung Konser Balai Sarbini, Kota Jakarta Selatan, Indonesia",
    img: "/news2.png",
    link: "/events/news2",
  };
  return (
    <div
      id="articles"
      ref={articleRef}
      className="pb-12 w-full min-h-screen overflow-hidden bg-white"
    >
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

      <div className="relative w-full h-[400px] lg:h-[550px] px-4 md:px-24">
        <Image
          src="/thumbnail-article.jpg"
          alt="thumbnail-article"
          fill
          className="object-cover"
        />
        <div className="absolute top-0 inset-0 h-[400px] lg:h-[550px] bg-gradient-to-t from-[#0A0C67] to-[#0a446a00] backdrop-filter-[blur(10px)]"></div>
        <div className="relative container pt-8 flex flex-col gap-2 text-white h-full w-1/2 justify-center">
          {/* Breadcrumb */}
          <h3 className="text-[4vw] md:text-4xl font-medium mb-2">
            Events /{" "}
            <span className="text-white/50 truncate">Pegawai PT Ke...</span>
          </h3>
          {/* Title */}
          <h1 className="text-[4vw] md:text-6xl font-medium mb-4">
            Offshore Support Journal Asia 2025
          </h1>
          {/* Author & Date */}
          {/* <div className="flex flex-col md:flex-row items-start gap-4 text-white text-[3vw] md:text-[2.2vw] lg:text-[1.4vw] font-medium">
            <div className="flex justify-center items-center gap-2 font-medium">
              <Image src="/avatar.png" alt="Organizer" width={32} height={32} />
              <span>BKI Event Organizer</span>
            </div>
            <span className="ml-2 md:ml-0">18-20 August 2025</span>
          </div> */}
        </div>
      </div>

      <div className="relative mt-[-1.7rem] md:mt-[-3.4rem] lg:mt-[-5rem] w-full flex justify-center">
        <div className="container mx-auto px-4 lg:px-0 flex flex-col md:flex-row gap-8 text-white items-start justify-center">
          {/* Right column: Event Info, sticky on desktop, on top on mobile */}
          <div className="w-full md:w-auto order-1 md:order-2">
            <div className="md:sticky md:top-8 max-w-full lg:max-w-[650px] h-fit bg-white/10 rounded-md p-1 backdrop-filter-[blur(10px)] shadow-md text-white mx-2 md:mx-4 lg:mx-0">
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
          {/* Left column: Large Thumbnail and Description */}
          <div className="flex flex-col gap-6 w-full order-2 md:order-1">
            <div className="bg-white/10 p-2 rounded-md backdrop-filter-[blur(10px)]">
              <Image src="/thumbnail-article.jpg" alt="Large Thumbnail" width={1259} height={719} />
            </div>
            <p dangerouslySetInnerHTML={{ __html: eventDescription }} className="text-[4vw] md:text-[1.5vw] lg:text-[1.4vw] font-medium text-slate-800" />
          </div>
        </div>
      </div>

      {/* <div className="relative mt-[-20rem] md:mt-[-25rem] lg:mt-[-45rem] inset-0 w-full">
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
      </div> */}
    </div>
  );
}
