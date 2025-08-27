import Image from "next/image";
import Pagination from "@/components/pagination";
import PageTransition from "@/components/page-transition";
import HeroPublication from "@/components/HeroPublication";
import PublicationContainer from "@/components/publication-container";
import NewsCard from "@/components/NewsCard";

export default function News() {
  const news = [
    {
      date: "08 Aug 2025 4:40 pm",
      title: "New Research Vessel For Marine Science in SA",
      content:
        "Research Vessel Encounter pulls in at O'Sullivan Beach boat ramp. A new coastal research vessel, RV Encounter, will support the investigations and training opportunities of Flinders",
      img: "/news1.jpg",
      link: "/news/news1",
    },
    {
      date: "05 Aug 2025 1:10 pm",
      title: "Container Shipping Sees Record High Traffic",
      content:
        "Container shipping has experienced a significant surge in traffic, with ports reporting record volumes and increased demand for freight services.",
      img: "/news2.png",
      link: "/news2",
    },
    {
      date: "05 Aug 2025 1:10 pm",
      title: "Container Shipping Sees Record High Traffic",
      content:
        "Container shipping has experienced a significant surge in traffic, with ports reporting record volumes and increased demand for freight services.",
      img: "/news3.jpg",
      link: "/news3",
    },
    {
      date: "08 Aug 2025 4:40 pm",
      title: "New Research Vessel For Marine Science in SA",
      content:
        "Research Vessel Encounter pulls in at O'Sullivan Beach boat ramp. A new coastal research vessel, RV Encounter, will support the investigations and training opportunities of Flinders",
      img: "/news1.jpg",
      link: "/news1",
    },
    {
      date: "05 Aug 2025 1:10 pm",
      title: "Container Shipping Sees Record High Traffic",
      content:
        "Container shipping has experienced a significant surge in traffic, with ports reporting record volumes and increased demand for freight services.",
      img: "/news2.png",
      link: "/news2",
    },
    {
      date: "05 Aug 2025 1:10 pm",
      title: "Container Shipping Sees Record High Traffic",
      content:
        "Container shipping has experienced a significant surge in traffic, with ports reporting record volumes and increased demand for freight services.",
      img: "/news3.jpg",
      link: "/news3",
    },
    {
      date: "08 Aug 2025 4:40 pm",
      title: "New Research Vessel For Marine Science in SA",
      content:
        "Research Vessel Encounter pulls in at O'Sullivan Beach boat ramp. A new coastal research vessel, RV Encounter, will support the investigations and training opportunities of Flinders",
      img: "/news1.jpg",
      link: "/news1",
    },
    {
      date: "05 Aug 2025 1:10 pm",
      title: "Container Shipping Sees Record High Traffic",
      content:
        "Container shipping has experienced a significant surge in traffic, with ports reporting record volumes and increased demand for freight services.",
      img: "/news2.png",
      link: "/news2",
    },
    {
      date: "05 Aug 2025 1:10 pm",
      title: "Container Shipping Sees Record High Traffic",
      content:
        "Container shipping has experienced a significant surge in traffic, with ports reporting record volumes and increased demand for freight services.",
      img: "/news3.jpg",
      link: "/news3",
    },
  ];

  return (
    <div
      id="news"
      className="relative w-full overflow-hidden bg-white"
    >
      <PageTransition />
      <HeroPublication
        backgroundClass="bg-[url('/bg-news.jpg')] bg-center"
        title={"News"}
      />
      <PublicationContainer>
        {news.map((item, index) => (
          <NewsCard key={index} news={{...item, id: crypto.randomUUID()}} hasShadow={true}  rounded={true}/>
        ))}
      </PublicationContainer>
    </div>
  );
}
