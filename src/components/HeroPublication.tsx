import Link from "next/link";
import { classes } from "@/utils/string";

interface Props {
  backgroundClass: string;
  title: string;
  innerComponent?: React.ReactNode;
}

export default function HeroPublication(props: Props) {
  const { backgroundClass, title, innerComponent } = props;
  return (
    <section
      className={classes(
        "w-full relative overflow-hidden ",
        innerComponent ? "h-[25vh]" : "md:h-[50vh]"
      )}
    >
      <div
        className={classes(
          "absolute inset-0 bg-cover bg-center",
          backgroundClass
        )}
      />
      <div
        className={classes(
          "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#FFFFFF] to-[#FFFFFF00]",
          innerComponent ? "h-[20vh]" : "h-[15vh]"
        )}
      />
      <div className="w-full relative flex flex-col justify-center items-start px-6 md:px-24 py-24 2xl:pt-40 text-center text-white text-shadow-lg text-shadow-black/30">
        <p className="mt-4 text-4xl md:text-4xl 2xl:text-[64px] font-semibold">
          {title}
        </p>
      </div>

      {innerComponent}
    </section>
  );
}
