import {motion} from "framer-motion";
import Image from "next/image";
import {Tab} from "@/app/our-services/page";

interface Props {
    tabs: Tab[];
    active: string;
    setActive: (key: string) => void;
}

export default function TabBar({tabs, active, setActive}: Props) {
    return (
        <div className="absolute bottom-0 left-0 right-0">
            <nav
                role="tablist"
                aria-label="Our Services Tabs"
            >
                <ul className="flex items-center justify-around">
                    {tabs.map((t, i) => {
                        const isActive = active === t.key;
                        return (
                            <li key={t.key}>
                                <button
                                    role="tab"
                                    aria-selected={isActive}
                                    aria-controls={`panel-${t.key}`}
                                    onClick={() => setActive(t.key)}
                                    className="flex flex-col items-center h-36 group relative w-80 select-none rounded-md text-center outline-none cursor-pointer py-7 gap-7"
                                >
                                    {/* icon */}
                                    <div className="flex items-center justify-center w-7 h-7">
                                        <Image
                                            src={t.icon}
                                            alt=""
                                            width={28}
                                            height={28}
                                            className={`w-7 h-7 object-center object-contain transition-opacity duration-300 ${
                                                isActive ? "opacity-100" : "opacity-50"
                                            } group-hover:opacity-80`}
                                        />
                                    </div>

                                    {/* label */}
                                    <div
                                        className={`text-xl 2xl:text-3xl tracking-wide transition-colors duration-300 ${
                                            isActive ? "text-white" : "text-white/60 group-hover:text-white/80"
                                        }`}
                                    >
                                        {t.label}
                                    </div>

                                    {/* underline indicator (animated) */}
                                    {isActive ? (
                                        <motion.div
                                            layoutId="tab-underline"
                                            className="h-[2px] rounded-full bg-white absolute bottom-0 left-0 right-0"
                                        />
                                    ) : null}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}
