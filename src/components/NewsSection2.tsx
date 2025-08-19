import Image from "next/image";
import Newsletter from "./Newsletter";

export function NewsDivider() {
    return (
        <div className="w-full h-16 bg-[#00385A]"></div>
    )
}

export default function NewsSection2() {
  const news = [
    {
      date: "08 Aug 2025 4:40 pm",
      title: "New Research Vessel For Marine Science in SA",
      content: "Research Vessel Encounter pulls in at O'Sullivan Beach boat ramp. A new coastal research vessel, RV Encounter, will support the investigations and training opportunities of Flinders",
      img: "/news1.jpg",
      link: "#",
    },
    {
      date: "05 Aug 2025 1:10 pm",
      title: "Container Shipping Sees Record High Traffic",
      content: "Container shipping has experienced a significant surge in traffic, with ports reporting record volumes and increased demand for freight services.",
      img: "/news2.png",
      link: "#",
    },
    {
      date: "05 Aug 2025 1:10 pm",
      title: "Container Shipping Sees Record High Traffic",
      content: "Container shipping has experienced a significant surge in traffic, with ports reporting record volumes and increased demand for freight services.",
      img: "/news3.png",
      link: "#",
    },
  ];
  return (
    <section
      className="px-6 md:px-24 py-12 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #00385A 0%, transparent 100%), url('/news-bg.jpg')",
        backgroundPosition: "center top",
      }}
    >
      <div className="flex flex-col md:flex-row items-center gap-6 bg-[#00385A] bg-opacity-25 border-2 border-white border-opacity-50 rounded py-4 px-6 mb-10 relative -top-6">
        <div className="pl-2 font-medium text-2xl md:text-4xl w-full md:w-1/3 text-center md:text-left">
          We’ll help what you looking for
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
      <h1 className="text-white text-[12vw] md:text-[6vw] font-bold mb-2">Keep Updated</h1>
      <h2 className="text-white text-[5vw] md:text-[2.5vw] font-semibold mb-8">Top News</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {news.map((n, i) => (
          <div
            key={i}
            className="bg-white rounded-lg overflow-hidden shadow-lg text-black"
          >
            <div className="relative h-48">
              <Image src={n.img} alt={n.title} fill className="object-cover" />
            </div>
            <div className="p-4">
              <p className="text-sm">{n.date}</p>
              <h3 className="font-semibold text-lg mb-3">{n.title}</h3>
              <div className="text-sm mb-4">{n.content}</div>
            <a
                href={n.link}
                className="inline-block px-4 py-2 bg-[#0A436A] text-white font-medium text-lg rounded transition-colors duration-400 hover:bg-[#0A436A]/50"
            >
                Read News →
            </a>
            </div>
          </div>
        ))}
      </div>
      <Newsletter />
    </section>
  );
}
