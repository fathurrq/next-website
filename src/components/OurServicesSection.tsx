'use client';
import {useRef, useState} from "react";
import {AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform} from "framer-motion";
import Image from "next/image";

const services = [
    {
        title: "Classification",
        description: "Setting safety and performance standards for every vessel.",
        icon: "/icon-service-classification.png",
        image: "/service-classification.png",
    },
    {
        title: "Statutory",
        description: "Ensuring vessels comply with all regulatory requirements.",
        icon: "/icon-service-statutory.png",
        image: "/service-statutory.png",
    },
    {
        title: "Marine Services",
        description: "Supporting safe and efficient vessel operations.",
        icon: "/icon-service-marine-services.png",
        image: "/service-marine-services.png",
    },
    {
        title: "Energy & Industry",
        description: "Delivering reliable solutions maritime and industrial needs.",
        icon: "/icon-service-energy-industry.png",
        image: "/service-energy-industry.png",
    },
    {
        title: "BKI Academy",
        description: "Advancing skills for the maritime industry",
        icon: "/icon-service-bki-academy.png",
        image: "/service-bki-academy.png",
    },
];

export default function OurServicesSection() {
    const servicesRef = useRef<HTMLDivElement | null>(null);
    const [showOurServicesTitle, setShowOurServicesTitle] = useState(false);
    const [showServicesDescription, setShowServicesDescription] = useState(false);
    const [showOurServicesBottomTitle, setShowOurServicesBottomTitle] = useState(false);

    const {scrollYProgress} = useScroll({
        target: servicesRef,
    });

    const topGradientY = useTransform(scrollYProgress, [0, 1], [0, -120]);
    const topGradientOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 0, 0]);
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // ================= SHOW OUR SERVICES TITLE AND DESCRIPTION =======================
        if (latest >= 0.01 && !showOurServicesTitle) {
            setShowOurServicesTitle(true);
        }

        if (latest >= 0.25 && latest <= 0.3 && !showServicesDescription) {
            setShowServicesDescription(true);
        } else if (latest >= 0.3 && showServicesDescription) {
            setShowServicesDescription(false);
        }

        if (latest >= 0.75 && !showOurServicesBottomTitle) {
            setShowOurServicesBottomTitle(true);
        }
        // ================= END SHOW OUR SERVICES TITLE AND DESCRIPTION =======================
    });

    return (
        <div id={'our-services'} ref={servicesRef} className="relative w-full">
            <motion.div
                className="absolute inset-x-0 top-0 z-20 pointer-events-none h-[100vh]"
                style={{
                    y: topGradientY,
                    opacity: topGradientOpacity,
                    background:
                        "linear-gradient(0deg, rgba(10,67,106,0) 0%, rgba(10,67,106,0.6) 60%, rgba(10,67,106,0.95) 100%)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    willChange: "transform, opacity",
                }}
            />
            <AnimatePresence>
                {showOurServicesTitle && (
                    <motion.div
                        key="our-services-title"
                        className="absolute left-1/2 top-1/6 -translate-x-1/2 -translate-y-1/2 z-30 text-center px-4"
                        initial={{ opacity: 0, y: 1000 }}
                        animate={{opacity: 1, y: 0, transition: {duration: 1.5, ease: "easeOut"}}}
                        exit={{ opacity: 0, transition: { duration: 0.35 } }}
                    >
                        <h1 className="text-6xl md:text-8xl text-white">Our Services</h1>
                    </motion.div>
                )}
                {showServicesDescription && (
                    <motion.div
                        key="our-services-description"
                        className="absolute left-0 top-1/5 z-30 text-center px-4 flex items-center justify-center"
                        initial={{ opacity: 0, y: 1000 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } }}
                        exit={{ opacity: 0, transition: { duration: 0.35 } }}
                    >
                        <p className="text-2xl md:text-[32px] text-white font-medium w-2/3">
                            Step into a world where every vessel is guided by precision and trust. From design approvals to on-board inspections, we ensure each ship meets the highest global standards.
                            <br /><br />
                            Safeguarding lives, protecting the environment, and enhancing operational performance—our expertise keeps Indonesia’s maritime industry moving forward.
                            <br/><br/>
                            Set sail with confidence, knowing your journey is backed by world-class classification and certification.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className={'w-full h-[100vh] bg-[#86A7D4]'}></div>
            <motion.img src="/services-bg.png" alt="Background" className="w-full h-full object-cover" />
            <div className={'w-full h-[100vh] bg-black'}></div>
            <div
                className="absolute inset-x-0 top-[175vh] z-20 pointer-events-none h-[100vh] w-full flex items-center justify-center"
                style={{
                    background:
                        "linear-gradient(0deg,rgba(0, 0, 0, 1) 0%, rgba(10, 67, 106, 1) 83%, rgba(0, 0, 0, 0) 100%)",
                    willChange: "transform, opacity",
                }}
            >
                <AnimatePresence>
                    {showOurServicesBottomTitle && (
                        <motion.div
                            key="our-services-title-bottom"
                            className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 z-30 text-center px-4"
                            initial={{ opacity: 0, y: -1000 }}
                            animate={{opacity: 1, y: 0, transition: {duration: 1.5, ease: "easeOut"}}}
                            exit={{ opacity: 0, transition: { duration: 0.35 } }}
                        >
                            <h1 className="text-6xl md:text-8xl text-[rgba(255,255,255,0.5)]">Our Services</h1>
                        </motion.div>
                    )}
                    {showOurServicesBottomTitle && (
                        <motion.div
                            key="our-services-description-bottom"
                            className="absolute left-0 top-2/5 z-30 text-center px-4 flex items-center justify-center w-full"
                            initial={{ opacity: 0 }}
                            animate={{opacity: 1, transition: {duration: 1.5, ease: "easeOut"}}}
                            exit={{ opacity: 0, transition: { duration: 0.35 } }}
                        >
                            <p className="text-3xl md:text-[40px] text-[rgba(255,255,255,0.5)]">Discover maritime services built for safety, compliance, and excellence.</p>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div
                    className={'grid grid-cols-1 md:grid-cols-3 gap-x-[30px] gap-y-[60px] mt-[50vh] mx-[50px] md:mx-[70px]'}>
                    {services.map((service, index) => (
                        <div key={index} className={`py-[20px] px-[32px] rounded-[4px] relative group`}>
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={550}
                                height={198}
                                className={'w-full h-full object-cover absolute inset-0 z-0 rounded-[4px] opacity-50 group-hover:opacity-100 transition-opacity duration-500'}
                            />
                            <div className={'flex flex-col gap-[15px] z-1'}>
                                <Image src={service.icon} alt={service.title} width={32} height={22}/>
                                <p className={'text-4xl md:text-5xl text-white mt-[15px]'}>{service.title}</p>
                                <p className={'text-sm md:text-[16px] text-white'}>{service.description}</p>
                            </div>
                            <div className={'absolute bottom-0 left-[32px] right-[32px] h-[1px] bg-white opacity-30 z-0'} />
                            {/*<div className={'absolute bottom-0 left-[32px] right-[32px] h-[1px] bg-white opacity-80 z-1'} />*/}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}