"use client";
import { useRef } from "react";
import Image from "next/image";

type Member = {
  name: string;
  position: string;
  image: string;
};

const boardOfCommissioner: Member[] = [
  { name: "John Doe", position: "Chairman", image: "john.png" },
  { name: "Jane Smith", position: "Vice Chair", image: "jane.png" },
  { name: "David Lee", position: "Member", image: "david.png" },
  { name: "Alice Brown", position: "Member", image: "alice.png" },
  // add more members...
];

export default function ImageScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // handle wheel scroll horizontally
  const onWheel = (e: React.WheelEvent) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      {/* Left arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#0A436A] text-white p-2 rounded-full shadow-md z-10"
      >
        ←
      </button>

      {/* Scroll container */}
      <div
        ref={scrollRef}
        onWheel={onWheel}
        className="flex flex-row items-center gap-3 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth py-3 md:py-6 px-8"
      >
        {boardOfCommissioner.map((member, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 w-[250px] md:w-[350px] lg:w-[450px] shadow-lg overflow-hidden rounded-md"
          >
            <Image
              src={`/bod/${member.image}`}
              alt={member.name}
              width={484}
              height={422}
              className="object-cover w-full h-[200px] md:h-[280px] lg:h-[320px]"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 p-2 rounded-sm text-white">
              <p className="font-bold text-base md:text-xl lg:text-2xl">{member.name}</p>
              <p className="text-xs md:text-sm lg:text-lg">{member.position}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#0A436A] text-white p-2 rounded-full shadow-md z-10"
      >
        →
      </button>
    </div>
  );
}
