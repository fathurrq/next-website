import { Article } from "@/types/articles";
import Image from "next/image";
import ArticleCard from "./ArticleCard";
import ArticleCardModern from "./ArticleCardModern";

export default async function ArticleSection() {
  const data = (await fetch(
    process.env.STRAPI_API_URL +
      "/articles?populate=cover&pagination[page]=1&pagination[pageSize]=3"
  ).then((response) => response.json())) as { data: Article[] };

  return (
    <section
      className="px-4 py-6 md:px-24 md:py-12 bg-cover text-white relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, #D4A66A 0%, transparent 50%), url('/article-bg.jpg')`,
        backgroundPosition: "top",
      }}
    >
      {/* Bottom gradient overlay for smooth transition to NewsSection2 */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "100px",
          pointerEvents: "none",
          background:
            "linear-gradient(to bottom, transparent 0%, #00385A 100%)",
          zIndex: 1,
        }}
      />
      <h1 className="text-white text-5xl md:text-6xl font-bold mb-2">
        Knowledge Hub
      </h1>
      <div className="text-white text-2xl md:text-3xl font-medium mb-8">
        Articles
      </div>

      <div className="grid relative z-10 grid-cols-1 md:grid-cols-3 gap-6">
        {data?.data?.map((article, i) => (
          <ArticleCardModern key={i} article={article} />
        ))}
      </div>
    </section>
  );
}
