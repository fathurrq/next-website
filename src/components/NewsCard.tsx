import { News } from "@/types/news";
import Image from "next/image";
import Link from "next/link";

export default function NewsCard({ news }: { news: News }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg text-black hover:-translate-y-1 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer">
      <div className="relative h-48">
        <Image src={news.img} alt={news.title} fill className="object-cover" />
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
