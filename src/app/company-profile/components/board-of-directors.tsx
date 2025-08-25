import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Member = {
  name: string;
  position: string;
  image: string;
};

export default function BoardOfDirectors(props: { members: Member[] }) {
  return (
    <div className="flex justify-center w-full group">
      <div className="flex flex-row items-stretch gap-3 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth py-3 md:py-6 px-6">
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
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 md:p-4 text-white min-h-32 flex flex-col justify-center items-center">
              <p className="font-bold text-base md:text-xl lg:text-2xl text-center">
              {member.name}
              </p>
              <p className="text-xs md:text-sm lg:text-lg text-center">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
