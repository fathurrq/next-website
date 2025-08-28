import React from "react";
import Image from "next/image";
// Define the type for a single card item
interface CardItem {
  title: string;
  content: string;
  imageSrc: string;
 
}

// Define the props for the reusable component
interface ThreeItemSectionProps {
  mainTitle: string;
  subTitle: string;
  cards: CardItem[];
   col?: number;
}

const ThreeItemSection: React.FC<ThreeItemSectionProps> = ({
  mainTitle,
  subTitle,
  cards,
  col=3
}) => {
  return (
    <section className="py-12 px-4 sm:px-6 md:px-24 bg-gray-50">
      {/* Header Section */}
      <div className="text-center md:text-left mb-10 md:mb-16 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="2xl:text-6xl md:text-5xl text-4xl font-bold text-bki-blue">
          {mainTitle}
        </div>
        <p className="text-3xl text-black md:w-auto max-w-2xl mx-auto md:mx-0">
          {subTitle}
        </p>
      </div>

      {/* Cards Grid */}
      <div className={`grid grid-cols-1 md:grid-cols-${col} gap-8`}>
        {cards.map((item, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden group"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  fill
                  src={item.imageSrc}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-bki-blue mb-2">
                {item.title}
              </h3>
              <p className="text-black text-sm">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThreeItemSection;
