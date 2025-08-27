import { Article } from "@/types/articles";
import Image from "next/image";
import Link from "next/link";

export default function ArticleCardModern({ article }: { article: Article }) {
  return (
    <div className="bg-blue-900 bg-opacity-40 rounded-lg overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer text-white">
      <div className="relative h-96 ">
        <Image
          src={article.cover.formats.medium.url}
          alt={article.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[rgba(10,67,106,0.6)] to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 px-4 pb-8 bg-gradient-to-t from-blue-900/70 to-transparent">
          <h3 className="font-semibold text-lg md:text-2xl mb-2">
            {article.title}
          </h3>
          <div className="text-xs md:text-sm mb-2">{article.description}</div>
          <Link
            href={"/news/" + "news1"}
            className="inline-block text-base md:text-lg px-4 py-2 bg-[rgba(255,255,255,0.3)] hover:bg-white hover:text-black transition-colors duration-400 border border-white border-opacity-50"
          >
            Read Article →
          </Link>
        </div>
      </div>
    </div>
  );
}
