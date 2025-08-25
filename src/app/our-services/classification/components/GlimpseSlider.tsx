'use client';

import {useCallback, useEffect, useRef, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';

type Slide = {
    image: string;      // path di /public
    description: string;
};

const SLIDES: Slide[] = [
    {
        image: '/our-services/classification/slider-1.jpg',
        description:
            'Reviewing, assessing, and approving class and statutory documentation to ensure compliance with applicable rules and regulations.',
    },
    {
        image: '/our-services/classification/slider-2.jpg',
        description:
            'Continuously collaborating and coordinating with our internal management and external associate members to develop solutions that enhance safety, quality, and sustainability in the real-world engineering challenges.',
    },
    {
        image: '/our-services/classification/slider-3.jpg',
        description:
            'Verifying the minimum freeboard values of ships in accordance with the applicable standards, followed by issuing instructions for Plimsoll Mark installation.',
    },
    {
        image: '/our-services/classification/slider-4.jpg',
        description:
            'Reviewing and adapting frequently to our Standard Operating Procedure to meet the demands of document approvals through effective, efficient, and precise work processes.',
    },
    {
        image: '/our-services/classification/slider-5.jpg',
        description:
            'Supporting the company’s business vision through our best implementation strategies within our department.',
    },
];

const AUTOPLAY_MS = 5000;

export default function GlimpseSlider() {
    const [index, setIndex] = useState(0);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const goTo = useCallback((i: number) => {
        const total = SLIDES.length;
        setIndex(((i % total) + total) % total);
    }, []);

    const next = useCallback(() => goTo(index + 1), [index, goTo]);

    // autoplay
    useEffect(() => {
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(next, AUTOPLAY_MS);
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current)
        };
    }, [index, next]);

    const slide = SLIDES[index];

    return (
        <section className="h-[85vh] relative">
            {/* Background image (cross-fade + subtle ken-burns) */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={slide.image}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{backgroundImage: `url(${slide.image})`}}
                        initial={{opacity: 0, scale: 1.02}}
                        animate={{opacity: 1, scale: 1}}
                        exit={{opacity: 0, scale: 0.98}}
                        transition={{duration: 0.8, ease: 'easeOut'}}
                    />
                </AnimatePresence>
            </div>

            {/* Top and Bottom Overlay */}
            <div className="absolute top-0 left-0 right-0 h-[30vh] bg-gradient-to-b from-[#000000] to-transparent z-0"/>
            <div
                className="absolute bottom-0 left-0 right-0 h-[50vh] bg-[linear-gradient(to_bottom,transparent_0%,#0A436A50_50%,#0A436A_90%)] z-0"/>

            {/* Content */}
            <div className="w-full h-full 2xl:p-24 md:p-16 p-12 flex flex-col justify-between items-center">
                <p className="text-white text-4xl md:text-5xl 2xl:text-6xl font-semibold text-center z-1">
                    Glimpse of Our Work
                </p>

                <div className="flex flex-col justify-center items-center 2xl:gap-20 md:gap-16 gap-12 z-1">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={slide.description}
                            className="text-white text-4xl md:text-5xl 2xl:text-6xl font-semibold text-center"
                            initial={{y: 24, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            exit={{y: -12, opacity: 0}}
                            transition={{duration: 0.55, ease: 'easeOut'}}
                        >
                            {slide.description}
                        </motion.p>
                    </AnimatePresence>

                    {/* Dots */}
                    <div className="flex items-center 2xl:gap-14 md:gap-10 gap-8">
                        {SLIDES.map((_, i) => {
                            const isActive = i === index;
                            return (
                                <button
                                    key={i}
                                    onClick={() => goTo(i)}
                                    aria-label={`Go to slide ${i + 1}`}
                                    className={`2xl:w-8 2xl:h-8 w-6 h-6 rounded-full transition cursor-pointer ${
                                        isActive ? 'bg-white' : 'bg-white/20 hover:bg-white/40'
                                    }`}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
