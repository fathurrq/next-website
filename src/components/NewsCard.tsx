import {News} from "@/types/news";
import Image from "next/image";
import Link from "next/link";
import {classes} from "@/utils/string";

interface Props {
    news: News;
    hasShadow?: boolean;
    rounded?: boolean;
}

export default function NewsCard({news, hasShadow, rounded}: Props) {
    return (
        <div className={
            classes("bg-white overflow-hidden text-black hover:-translate-y-1 transition duration-300 ease-in-out cursor-pointer", hasShadow ? "shadow-lg hover:shadow-lg" : "", rounded ? "rounded-lg" : "")
        }>
            <div className="relative h-48">
                <Image src={news.img} alt={news.title} fill className="object-cover"/>
            </div>
            <div className="p-4">
                <p className="text-sm">{news.date}</p>
                <h3 className="font-semibold text-lg mb-3">{news.title}</h3>
                <div className="text-sm mb-4">{news.content}</div>
                <Link
                    href={news.link}
                    className="inline-block px-4 py-2 bg-[#0A436A] text-white font-medium text-lg rounded transition-colors duration-400 hover:bg-[#0A436A]/50"
                >
                    Read News →
                </Link>
            </div>
        </div>
    );
}
