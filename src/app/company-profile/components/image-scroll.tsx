"use client";
import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Member = {
  name: string;
  position: string;
  image: string;
};

export default function CommissionerSection(props: {members: Member[]}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
   <div className="relative w-full group">
      {/* Left arrow */}
      <button
        onClick={scrollLeft}
        className="flex opacity-100 md:flex absolute left-2 top-1/2 -translate-y-1/2 bg-[#0A436A] text-white p-2 rounded-full shadow-md  group-hover:opacity-100 transition-opacity duration-300 z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="flex flex-row items-stretch gap-3 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth py-3 md:py-6 px-6"
      >
        {props.members.map((member, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 w-[250px] md:w-[380px] lg:w-[450px] h-[250px] md:h-[380px] lg:h-[450px] shadow-lg overflow-hidden rounded-md"
          >
            <Image
              src={`${member.image}`}
              alt={member.name}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 md:p-4 text-white">
              <p className="font-bold text-base md:text-xl lg:text-2xl">{member.name}</p>
              <p className="text-xs md:text-sm lg:text-lg">{member.position}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right arrow */}
      <button
        onClick={scrollRight}
        className="flex opacity-100 md:flex absolute right-2 top-1/2 -translate-y-1/2 bg-[#0A436A] text-white p-2 rounded-full shadow-md  group-hover:opacity-100 transition-opacity duration-300 z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
