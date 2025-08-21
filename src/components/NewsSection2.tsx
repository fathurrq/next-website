import Image from "next/image";
import Newsletter from "./Newsletter";
import NewsCard from "./NewsCard";

export function NewsDivider() {
  return <div className="w-full h-16 bg-[#00385A]"></div>;
}

export default function NewsSection2() {
  const news = [
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
    <section
      className="px-6 md:px-24 py-12 bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #00385A 0%, transparent 100%), url('/news-bg.jpg')",
        backgroundPosition: "center top",
      }}
    >
      <div className="flex flex-col md:flex-row items-center gap-6 bg-[#00385A] bg-opacity-25 border-2 border-white border-opacity-50 rounded py-4 px-6 mb-10 relative -top-6">
        <div className="pl-2 font-medium text-2xl md:text-4xl w-full md:w-1/3 text-center md:text-left">
          What are you looking for?
        </div>
        <input
          type="text"
          placeholder="Type something here"
          className="w-full bg-transparent outline-none px-2 border-b border-white text-lg md:text-3xl placeholder:text-lg md:placeholder:text-3xl"
        />
        <button className="w-full md:w-auto px-4 py-2 bg-[#0A436A] border border-white cursor-pointer rounded hover:bg-[#0A436A]/50">
          Search
        </button>
      </div>
      <h1 className="text-white text-5xl md:text-6xl font-bold mb-2">
        BKI Updates
      </h1>
      <h2 className="text-white text-2xl md:text-3xl font-medium mb-8">
        Top News
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {news.map((n, i) => (
          <NewsCard key={i} news={n} />
        ))}
      </div>
      <Newsletter />
      
    </section>
  );
}
