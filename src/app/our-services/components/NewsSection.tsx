import NewsCard from "@/components/NewsCard";

type NewsItem = {
  id: string;
  date: string;
  title: string;
  content: string;
  img: string;
  link: string;
};

export default function NewsSection() {
    const news: NewsItem[] = [
      {
        id: "1",
        date: "08 Aug 2025 4:40 pm",
        title: "New Research Vessel For Marine Science in SA",
        content:
          "Research Vessel Encounter pulls in at O'Sullivan Beach boat ramp. A new coastal research vessel, RV Encounter, will support the investigations and training opportunities of Flinders",
        img: "/news1.jpg",
        link: "/news/news1",
      },
      {
        id: "2",
        date: "05 Aug 2025 1:10 pm",
        title: "Container Shipping Sees Record High Traffic",
        content:
          "Container shipping has experienced a significant surge in traffic, with ports reporting record volumes and increased demand for freight services.",
        img: "/news2.png",
        link: "/news/news1",
      },
      {
        id: "3",
        date: "05 Aug 2025 1:10 pm",
        title: "Container Shipping Sees Record High Traffic",
        content:
          "Container shipping has experienced a significant surge in traffic, with ports reporting record volumes and increased demand for freight services.",
        img: "/news3.jpg",
        link: "/news/news1",
      },
    ];
  return (
    <section className="w-full h-full 2xl:p-24 lg:p-16 p-8 !pt-0 flex flex-col justify-center items-center bg-white 2xl:gap-8 md:gap-7 gap-6">
      <div className="w-full flex flex-col 2xl:gap-6 md:gap-5 gap-4">
        <p className="2xl:text-6xl md:text-5xl text-4xl font-bold text-[#0A436A]">
          Keep Updated
        </p>
        <p className="2xl:text-5xl nd:text-4xl text-3xl text-[#0A436A]">
          Top News
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 md:gap-6 2xl:gap-7">
        {news.map((n, i) => (
          <NewsCard key={i} news={n} hasShadow={true}/>
        ))}
      </div>
    </section>
  );
}
