"use client";
import {useRef} from "react";
import Image from "next/image";
import {motion, useScroll, useTransform} from "framer-motion";
import Link from "next/link";

const services = [
    {
        title: "Classification",
        description: "Setting safety and performance standards for every vessel.",
        icon: "/icon-service-classification.png",
        image: "/service-classification.jpg",
        href: "https://www.bki.co.id/halamanstatis-28.html",
    },
    {
        title: "Statutory",
        description: "Ensuring vessels comply with all regulatory requirements.",
        icon: "/icon-service-statutory.png",
        image: "/service-statutory.jpg",
        href: "https://www.bki.co.id/info_statutory-1.html",
    },
    {
        title: "Marine Services",
        description: "Supporting safe and efficient vessel operations.",
        icon: "/icon-service-marine-services.png",
        image: "/service-marine-services.jpg",
        href: "https://www.bki.co.id/halamanstatis-29.html",
    },
    {
        title: "Energy & Industry",
        description: "Delivering reliable solutions maritime and industrial needs.",
        icon: "/icon-service-energy-industry.png",
        image: "/service-energy-industry.jpg",
        href: "https://www.bki.co.id/halamanstatis-30.html",
    },
    {
        title: "BKI Academy",
        description: "Advancing skills for the maritime industry",
        icon: "/icon-service-bki-academy.png",
        image: "/service-bki-academy.jpg",
        href: "https://www.bki.academy/id",
        type: "_blank",
    },
];

export default function OurServicesSection() {
    const servicesRef = useRef<HTMLDivElement | null>(null);

    const {scrollYProgress} = useScroll({
        target: servicesRef,
        offset: ["start start", "end start"], // 0 at top, 1 at bottom of hero
    });

    // video moves slower upward
    const servicesSection = useTransform(scrollYProgress, [0, 1], [0, -120]);

    return (
        <div
            id={"our-services"}
            ref={servicesRef}
            className="relative w-full h-[100vh] text-white bg-black overflow-hidden mb-6"
        >
            {/* <div
                className="flex flex-col justify-center items-center bg-[linear-gradient(to_bottom,rgba(11,63,101,1),rgba(11,63,101,1)_30%,rgb(134,167,212))] py-32">
                <p className="text-5xl 2xl:text-8xl text-[rgba(255,255,255,0.65)] mb-16 22xl:mb-24">Our Services</p>
                <p className="text-lg md:text-2xl text-white font-medium w-2/5 text-center">
                    Step into a world where every vessel is guided by precision and trust. From design approvals to
                    on-board inspections, we ensure each ship meets the highest global standards.
                    <br/><br/>
                    Safeguarding lives, protecting the environment, and enhancing operational performance—our expertise
                    keeps Indonesia’s maritime industry moving forward.
                    <br/><br/>
                    Set sail with confidence, knowing your journey is backed by world-class classification and
                    certification.
                </p>
            </div> */}

            <div className="relative w-full">
                {/*Top Gradient Overlay*/}
                <div
                    className="absolute top-0 left-0 right-0
                  bg-[linear-gradient(to_bottom,rgb(11,63,101),rgba(11,63,101,0.75)_30%,rgba(11,63,101,0.5)_60%,transparent)] w-full h-[250px] z-1"
                />

                {/* Background image */}
                <Image
                    src="/services-bg.jpg"
                    alt="Background"
                    className="w-screen h-[100vh] object-cover z-0"
                    width={1920}
                    height={1080}
                />

                {/*<div className="absolute left-0 right-0 bottom-0 bg-black h-[120px]"/>*/}
            </div>

            <motion.div
                style={{y: servicesSection, willChange: "transform"}}
                className="absolute inset-0 h-[calc(100vh+240px)] bg-[linear-gradient(to_bottom,rgba(11,63,101,0.25),rgba(11,63,101,0.5)_20%,rgba(11,63,101,1)_75%,rgba(0,0,0,1)_90%)] flex flex-col justify-center items-center pt-5 pb-36 -mt-7 z-1"
            >
                <div className="flex flex-col gap-12 mb-20">
                    <h1 className="text-5xl md:text-8xl text-white text-center">
                        Our Services
                    </h1>
                    <p className="text-2xl md:text-4xl text-white text-center">
                        Discover maritime services built for safety, compliance, and
                        excellence.
                    </p>
                </div>
                <div
                    className="flex flex-wrap justify-center gap-x-[30px] gap-y-[60px] mx-[50px] 2xl:mx-[70px] pb-[100px] 2xl:pb-0">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.href}
                            target={"_blank"}
                            rel={"noopener noreferrer"}
                            className="w-full md:w-[calc(50%-30px)] 2xl:w-[calc(33.333%-30px)]
                 relative group py-[20px] px-[32px] rounded-[4px] overflow-hidden cursor-pointer h-[300px] 2xl:h-[350px]"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-[130%]"
                                style={{backgroundImage: `url(${service.image})`}}
                            />

                            {/*Backround Overlay*/}
                            <div
                                className="absolute left-0 bottom-0 right-0 h-1/2 bg-gradient-to-b from-transparent to-[rgb(11,63,101)]"/>

                            {/* Content */}
                            <div
                                className="relative z-10 flex flex-col justify-between gap-[15px] w-full h-full pb-[8px]">
                                <Image
                                    src={service.icon}
                                    alt={service.title}
                                    width={32}
                                    height={22}
                                />
                                <div className="flex flex-col gap-1">
                                    <p className="text-4xl 2xl:text-5xl text-white opacity-60 group-hover:opacity-100 mt-[15px] transition-opacity duration-1000">
                                        {service.title}
                                    </p>
                                    <p className="text-sm 2xl:text-[16px] text-white opacity-60 group-hover:opacity-100 transition-opacity duration-1000">
                                        {service.description}
                                    </p>
                                </div>
                            </div>

                            {/* Bottom line */}
                            <div
                                className="absolute bottom-0 left-[32px] right-[32px] h-[2px] bg-white opacity-30 z-10"/>
                            <div
                                className="absolute bottom-0 left-[32px] right-[32px] h-[2px] bg-white z-10
                   opacity-30 group-hover:opacity-100
                   transform scale-x-0 group-hover:scale-x-100
                   origin-right transition-all duration-1000 ease-out"
                            />
                        </Link>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
