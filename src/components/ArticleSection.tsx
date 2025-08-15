import Image from "next/image";

const articles = [
  {
    title: "New Research Vessel For Marine Science In SA",
    content: "Research Vessel Encounter pulls in at O'Sullivan Beach boat ramp. A new coastal research vessel, RV Encounter, will support the investigations and training opportunities of Flinders",
    img: "/article1.jpg",
    link: "#",
  },
  {
    title: "Understanding ISO 45001: Safety Culture in Industrial Workplaces",
    content: "Research Vessel Encounter pulls in at O'Sullivan Beach boat ramp. A new coastal research vessel, RV Encounter, will support the investigations and training opportunities of Flinders",
    img: "/article2.jpg",
    link: "#",
  },
  {
    title: "The Role of T10 in the Renewable Energy Transition",
    content: "The T10 is a crucial component in the shift towards renewable energy sources, facilitating the integration of various technologies and improving overall efficiency.",
    img: "/article3.jpg",
    link: "#",
  },
];

export default function ArticleSection() {
  return (
    <section
      className="px-4 py-6 md:px-24 md:py-12 bg-cover text-white relative"
      style={{
        backgroundImage: `linear-gradient(to bottom, #D4A66A 0%, transparent 50%), url('/article-bg.jpg')`,
        backgroundPosition: "top"
      }}
    >
      {/* Bottom gradient overlay for smooth transition to NewsSection2 */}
      <div style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '100px',
        pointerEvents: 'none',
        background: 'linear-gradient(to bottom, transparent 0%, #00385A 100%)',
        zIndex: 1
      }} />
      <h1 className="text-[12vw] md:text-[6vw]  font-bold mb-2">Stay Curious</h1>
      <h2 className="text-[5vw] md:text-[2.5vw] font-medium mb-8">Articles</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((a, i) => (
          <div
            key={i}
            className="bg-blue-900 bg-opacity-40 rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative h-96 ">
              <Image src={a.img} alt={a.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-[rgba(10,67,106,0.6)] to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 px-4 pb-8 bg-gradient-to-t from-blue-900/70 to-transparent">
                <h3 className="font-semibold text-lg md:text-2xl mb-2">{a.title}</h3>
                <div className="text-xs md:text-sm mb-2">{a.content}</div>
                <a
                  href={a.link}
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
