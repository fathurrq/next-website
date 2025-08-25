// components/WhyTrustSection.tsx
"use client";

import {useRef} from "react";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import Image from "next/image";

interface Props {
    images?: string[];
}

export default function WhyTrustSection({images}: Props) {
    const IMGS = images ?? ["/bki-marine.jpg", "/bki-marine2.jpg", "/bki-marine3.jpg", "/bki-marine4.jpg", "/bki-marine5.jpg"];
    const ref = useRef<HTMLDivElement>(null);

    // Track scroll progress for this section only
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end start"], // 0 at section bottom hits viewport bottom; 1 when top hits top
    });

    // Add a gentle spring for smoother, slower animation
    const p = useSpring(scrollYProgress, {stiffness: 80, damping: 30, mass: 0.6});

    // Top strip (slower horizontal movement)
    // Start at 0%, end at -35% for slower sliding
    const stripX = useTransform(p, [0, 1], ["0%", "-35%"]);

    return (
        <section
            ref={ref}
            className="hidden md:block relative w-full min-h-[35vh] md:min-h-[35vh] overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-[34vh] md:h-[38vh] overflow-hidden">
                <motion.div className="flex h-full w-[220%]" style={{x: stripX}}>
                    {/* Set A */}
                    <div className="flex h-full w-1/2">
                        {IMGS.map((src, i) => (
                            <div key={`A-${i}`} className="relative h-full w-1/4 flex-none">
                                <Image
                                    src={src}
                                    alt=""
                                    fill
                                    className="object-cover"
                                    aria-hidden
                                />
                            </div>
                        ))}
                    </div>
                    {/* Set B (for seamless loop look) */}
                    <div className="flex h-full w-1/2">
                        {IMGS.map((src, i) => (
                            <div key={`B-${i}`} className="relative h-full w-1/4 flex-none">
                                <Image
                                    src={src}
                                    alt=""
                                    fill
                                    className="object-cover"
                                    aria-hidden
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Soft fade at bottom of strip */}
                <div
                    className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-black/30 to-transparent pointer-events-none"/>
            </div>


        </section>
    );
}
