import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {Tab} from "@/app/our-services/page";
import {classes} from "@/utils/string";

interface Props {
    tabs: Tab[];
    active: string;
    setActive: (key: string) => void;
}

export default function TabBar({tabs, active, setActive}: Props) {
    const onKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
        const currentIndex = tabs.findIndex(t => t.key === active);
        if (currentIndex < 0) return;
        if (e.key === "ArrowRight") setActive(tabs[(currentIndex + 1) % tabs.length].key);
        if (e.key === "ArrowLeft") setActive(tabs[(currentIndex - 1 + tabs.length) % tabs.length].key);
    };

    return (
        <div className="absolute bottom-0 left-0 right-0">
            <nav role="tablist" aria-label="Our Services Tabs">
                <ul onKeyDown={onKeyDown}
                    className="flex md:justify-around items-stretch gap-2 md:gap-0 px-4 md:px-0 overflow-x-auto 2xl:overflow-visible snap-x snap-mandatory md:snap-none scroll-px-4 whitespace-nowrap md:whitespace-normal [scrollbar-width:none] md:[scrollbar-width:auto]"
                    style={{msOverflowStyle: "none"}}>
                    {tabs.map((t) => {
                        const isActive = active === t.key;

                        const Base = t.href ?
                            ((props: React.ComponentProps<"a">) => (
                                <Link
                                    {...props}
                                    href={t.href ?? '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                />
                            ))
                            :
                            ((props: React.ComponentProps<"button">) => (
                                <button type="button" {...props} onClick={() => setActive(t.key)}/>
                            ));

                        return (
                            <li key={t.key} className="shrink-0 md:shrink md:grow snap-start md:snap-none">
                                <Base
                                    role="tab"
                                    aria-selected={isActive}
                                    aria-controls={`panel-${t.key}`}
                                    className="
                    relative group select-none cursor-pointer outline-none
                    flex flex-col items-center justify-between text-center
                    h-24 md:h-32 xl:h-36
                    w-[12.5rem] sm:w-[14rem] md:w-56 lg:w-72 2xl:w-80
                    px-4 py-4 md:py-7
                    rounded-md
                    focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black/20
                  "
                                >
                                    <div
                                        className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 xl:w-8 xl:h-8">
                                        <Image
                                            src={t.icon}
                                            alt=""
                                            width={32}
                                            height={32}
                                            className={classes(
                                                "object-contain object-center transition-all duration-500 h-6 md:h-7 xl:h-8 group-hover:scale-125",
                                                isActive ? "opacity-100" : "opacity-60 group-hover:opacity-80",
                                                t.key === "statutory" || t.key === "energy-industry" ? "!h-4.5 md:!h-5 xl:!h-6" : ""
                                            )}
                                        />
                                    </div>

                                    <div
                                        className={`tracking-wide transition-all duration-300 ${isActive ? "text-white" : "text-white/60 group-hover:text-white/80"} text-sm sm:text-base lg:text-xl 2xl:text-3xl group-hover:scale-110`}>
                                        {t.label}
                                    </div>

                                    {isActive ? (
                                        <motion.div
                                            layoutId="tab-underline"
                                            className="absolute bottom-0 left-0 right-0 h-px md:h-[2px] rounded-full bg-white"
                                        />
                                    ) : null}
                                </Base>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}
