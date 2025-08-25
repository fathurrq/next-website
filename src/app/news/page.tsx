import Image from "next/image";
import Pagination from "@/components/pagination";
import PageTransition from "@/components/page-transition";

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
      className="pb-12 relative w-full min-h-screen overflow-hidden bg-white"
    >
      <PageTransition />
      {/* background image */}
      <div className="h-[50vh] bg-[url('/bg-news.jpg')] bg-cover bg-center"></div>
      {/* linear orange gradient overlay */}
      <div className="absolute top-0 inset-0 h-[20vh] bg-gradient-to-t from-[#0A436A00] to-[#000000]"></div>
      {/* linear white gradient overlay */}
      <div className="absolute top-[30vh] inset-0 h-[20vh] bg-gradient-to-t from-[#ffffff] to-[#ffffff00]"></div>
      {/* white background */}
      {/* <div className="absolute top-[50vh] inset-0 h-[100vh] bg-white"></div> */}

      <div className="mt-[-35rem] md:mt-[-20rem] w-full relative">
        {/* Articles */}
        <div className="container mx-auto px-4 lg:px-0 flex flex-col gap-2">
          {/* Title */}
          <h2 className="text-[5vw] md:text-[2.5vw] font-medium mb-8 text-white">
            News
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((n, i) => (
              <div
                key={i}
                className="bg-white rounded-lg overflow-hidden shadow-lg text-black hover:-translate-y-1 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer"
              >
                <div className="relative h-48">
                  <Image
                    src={n.img}
                    alt={n.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm">{n.date}</p>
                  <h3 className="font-semibold text-lg mb-3">{n.title}</h3>
                  <div className="text-sm mb-4">{n.content}</div>
                  <a
                    href={"/news/news1"}
                    className="inline-block px-4 py-2 bg-[#0A436A] text-white font-medium text-lg rounded transition-colors duration-400 hover:bg-[#0A436A]/50"
                  >
                    Read News →
                  </a>
                </div>
              </div>
            ))}
          </div>
          {/* <Pagination
            totalPages={15}
            currentPage={1}
            onPageChange={(page) => console.log(page)}
          /> */}
        </div>
      </div>
    </div>
  );
}
