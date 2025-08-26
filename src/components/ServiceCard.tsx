import Image from "next/image";
import Link from "next/link";
import {useMemo} from "react";
import {classes} from "@/utils/string";

interface Props {
    href: string;
    image: string;
    icon?: string;
    title: string;
    description?: string;
    isProgramPage?: boolean;
    target?: string;
}

export default function ServiceCard({href, image, icon, title, description, isProgramPage, target}: Props) {
    const parentClasses = useMemo(() => {
        if (isProgramPage) {
            return 'w-[calc(100vw-160px)] md:w-[calc(50vw-100px)] 2xl:w-[calc(33.333vw-100px)]';
        }
        return 'w-full md:w-[calc(50%-30px)] 2xl:w-[calc(33.333%-30px)]';
    }, [isProgramPage]);
    return (
        <Link
            href={href}
            target={target ? target : "_self"}
            // rel={"noopener noreferrer"}
            className={classes("relative shadow-lg shadow-black/50 group py-[20px] px-[32px] rounded-[4px] overflow-hidden cursor-pointer h-[250px] 2xl:h-[300px]", parentClasses)}
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-[130%]"
                style={{backgroundImage: `url(${image})`}}
            />

            {/*Backround Overlay*/}
            <div
                className="absolute left-0 bottom-0 right-0 h-1/2 bg-gradient-to-b from-transparent to-[rgb(11,63,101)]"/>

            {/* Content */}
            <div
                className="relative z-10 flex flex-col justify-between gap-[15px] w-full h-full pb-[8px]">
                {icon ? <Image
                    src={icon}
                    alt={title}
                    width={32}
                    height={22}
                /> : <div/>}
                <div className="flex flex-col gap-1">
                    <p className="text-4xl 2xl:text-5xl text-white group-hover:opacity-100 mt-[15px] transition-opacity duration-1000">
                        {title}
                    </p>
                    {!!description &&
                        <p className="text-sm 2xl:text-[16px] text-white group-hover:opacity-100 transition-opacity duration-1000">
                            {description}
                        </p>}
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
    )
}