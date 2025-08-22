"use client";
import {motion} from "framer-motion";

export default function ServicesSection() {
    return (
        <div className="flex flex-col justify-between items-end z-1 w-full h-full gap-10">
            {/* Judul + indikator bulat */}
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1, ease: "easeOut", delay: 0.5}}
                className="flex justify-between items-center w-full"
            >
                <p className="text-4xl 2xl:text-6xl font-bold text-white">Classification</p>
                <div className="flex items-center 2xl:gap-14">
                    {Array.from({length: 6}).map((_, i) => {
                        const isActive = i === 0;
                        return (
                            <div
                                key={i}
                                className={`2xl:w-8 2xl:h-8 w-6 h-6 rounded-full ${
                                    isActive ? "bg-white" : "bg-white/20"
                                }`}
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
                className="flex flex-col justify-between w-1/2 gap-8"
            >
                <p className="text-4xl 2xl:text-6xl font-bold text-white">
                    Ensuring your vessels meet the highest safety and quality standards.
                </p>
                <p className="text-xl 2xl:text-3xl text-white">
                    We provide independent and reliable ship classification services to ensure your vessels
                    comply with international safety, environmental, and quality standards. From design
                    approval to construction survey and periodical inspections, our team helps secure your
                    ship’s performance and seaworthiness.
                </p>

                <motion.div
                    initial={{opacity: 0, y: 15}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1, ease: "easeOut", delay: 1.5}}
                >
                    <button
                        className="inline-flex items-center justify-center px-6 py-2 text-xl 2xl:text-3xl font-light text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                        Explore program
                        <span className="ml-2 text-xl 2xl:text-3xl">→</span>
                    </button>
                </motion.div>
            </motion.div>
        </div>
    );
}
