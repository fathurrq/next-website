"use client";
import {motion} from "framer-motion";
import Link from "next/link";

export default function ServicesSection() {
    return (
        <div
            className="
        relative z-[1]
        w-full h-full
        flex flex-col
        gap-6 sm:gap-8 md:gap-10
        /* mobile: start; desktop: end */
        justify-between items-start xl:items-end
      "
        >
            {/* Title + indikator bulat */}
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1, ease: "easeOut", delay: 0.5}}
                className="
          w-full
          flex items-center
          /* mobile: stack, desktop: row */
          flex-col xl:flex-row
          gap-4 xl:gap-0
          justify-between
        "
            >
                <p className="text-white font-bold
          text-2xl sm:text-3xl md:text-4xl xl:text-6xl
          text-center xl:text-left
        ">
                    Classification
                </p>

                <div className="flex items-center gap-4 sm:gap-6 md:gap-8 xl:gap-14">
                    {Array.from({length: 6}).map((_, i) => {
                        const isActive = i === 0;
                        return (
                            <div
                                key={i}
                                aria-hidden={!isActive}
                                className={`
                  rounded-full
                  ${isActive ? "bg-white" : "bg-white/20"}
                  w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 xl:w-8 xl:h-8
                `}
                            />
                        );
                    })}
                </div>
            </motion.div>

            {/* Konten teks */}
            <motion.div
                initial={{opacity: 0, x: 40, scale: 0.98}}
                animate={{opacity: 1, x: 0, scale: 1}}
                transition={{duration: 1, ease: "easeOut", delay: 1}}
                className="
          flex flex-col gap-4 sm:gap-6 md:gap-8
          /* mobile full width; desktop 1/2 */
          w-full xl:w-1/2
        "
            >
                <p className="text-white font-bold
          text-2xl sm:text-3xl md:text-4xl xl:text-6xl
          leading-tight
        ">
                    Ensuring your vessels meet the highest safety and quality standards.
                </p>

                <p className="text-white
          text-base sm:text-lg md:text-xl xl:text-3xl
          leading-relaxed md:leading-8
          opacity-90
        ">
                    We provide independent and reliable ship classification services to ensure your vessels
                    comply with international safety, environmental, and quality standards. From design approval
                    to construction survey and periodical inspections, our team helps secure your ship’s
                    performance and seaworthiness.
                </p>

                <motion.div
                    initial={{opacity: 0, y: 15}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1, ease: "easeOut", delay: 1.5}}
                >
                    <Link
                        href="/our-services/classification"
                        className="
              inline-flex items-center justify-center
              px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3
              text-base sm:text-lg md:text-xl xl:text-3xl
              font-light text-white
              bg-white/10 backdrop-blur-md border border-white/20
              hover:bg-white/20 transition-all duration-300
              rounded-md
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60
            "
                    >
                        Explore program
                        <span className="ml-2 text-inherit">→</span>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
}
