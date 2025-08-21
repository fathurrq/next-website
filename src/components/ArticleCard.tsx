import { Article } from "@/types/articles";
import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg text-black hover:-translate-y-1 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer">
      <div className="relative h-48">
        <Image src={article.cover.formats.medium.url} alt={article.title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <p className="text-sm">{article.publishedAt}</p>
        <h3 className="font-semibold text-lg mb-3">{article.title}</h3>
        <div className="text-sm mb-4">{article.description}</div>
        <Link
          href={"/articles/" + article.documentId}
          className="inline-block px-4 py-2 bg-[#0A436A] text-white font-medium text-lg rounded transition-colors duration-400 hover:bg-[#0A436A]/50"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
