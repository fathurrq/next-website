import { Article } from "@/types/articles";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
export default function ArticleCard({ article }: { article: Article }) {
  return (
    <div className="bg-bki-blue border-white border-1 text-white rounded-lg overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer">
      <div className="relative h-48">
        <Image
          src={article.cover.formats.medium.url}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 flex gap-4 flex-col md:h-48">
        <p className="text-sm">
          {format(article.publishedAt, "dd MMM yyyy, HH:mm a")}
        </p>
        <h3 className="font-semibold text-xl mb-3">{article.title}</h3>
        <div className="text-sm mb-4">{article.description.slice(0, 125)} ...</div>
      </div>
      <div className="relative bottom-0 p-4">
        <Link
          href={"/news/" + "news1"}
          className="inline-block text-base md:text-lg px-4 py-2 bg-[rgba(255,255,255,0.3)] hover:bg-white hover:text-black transition-colors duration-400 border border-white border-opacity-50"
        >
          Read Article →
        </Link>
      </div>
    </div>
  );
}
