import { Article } from "@/types/articles";
import Image from "next/image";

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
      <h1 className="text-white text-5xl md:text-7xl font-bold mb-2">
        Knowledge Hub
      </h1>
      <div className="text-white text-2xl md:text-4xl font-medium mb-8">
        Articles
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.data.map((article, i) => (
          <div
            key={i}
            className="bg-blue-900 bg-opacity-40 rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative h-96 ">
              <Image
                src={article.cover.formats.thumbnail.url}
                alt={article.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[rgba(10,67,106,0.6)] to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 px-4 pb-8 bg-gradient-to-t from-blue-900/70 to-transparent">
                <h3 className="font-semibold text-lg md:text-2xl mb-2">
                  {article.title}
                </h3>
                <div className="text-xs md:text-sm mb-2">
                  {article.description}
                </div>
                <a
                  href={"/articles/" + article.documentId}
                  className="inline-block text-base md:text-lg px-4 py-2 bg-[rgba(255,255,255,0.3)] hover:bg-white hover:text-black transition-colors duration-400 border border-white border-opacity-50"
                >
                  Read Article →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
