import Link from "next/link";
import Image from "next/image";

export default function DigitalPlatform() {
  return (
    <section
      id={"digital-platform"}
      className="w-full h-full 2xl:px-28 lg:px-20 px-8 2xl:pt-12 pt-8 2xl:pb-52 pb-56 flex flex-col justify-center items-center bg-[#E2E7F0] gap-10 2xl:gap-14"
    >
      <div className="w-full lg:w-2/3 flex flex-col lg:gap-4 gap-3">
        <p className="2xl:text-6xl lg:text-4xl text-2xl font-bold text-[#0A436A] text-center">
          Access Our Digital Platforms
        </p>
        <p className="2xl:text-3xl lg:text-xl text-lg text-black text-center">
          Connect with <span className="text-[#0A436A] font-bold">myBKI</span>{" "}
          for online services or explore
          <span className="text-[#0A436A] font-bold">&nbsp;BKI Armada</span> for
          fleet management solutions.
        </p>
      </div>
      <div className="w-full flex flex-col xl:flex-row-reverse items-center xl:gap-6 gap-52">
        <Link
          href={"https://armada.bki.co.id"}
          rel="noopener noreferrer"
          target="_blank"
          className="w-full xl:w-1/2 h-[400px] cursor-pointer flex flex-col justify-end relative bg-[url('/bki-armada.jpg')] bg-cover bg-bottom rounded-lg"
        >
          <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-[#E2E7F0] h-1/3" />
          <div className="flex flex-col justify-center items-center xl:pt-4 pt-3 xl:pb-8 pb-6 xl:gap-6 gap-4 bg-white rounded-lg border-2 border-[#0A436A]/30 absolute right-[20px] left-[20px] lg:right-[80px] lg:left-[80px] -bottom-1/3 px-8">
            <Image
              src={"/bki-armada-logo.png"}
              alt={"BKI Armada"}
              width={110}
              height={102}
              className="object-contain h-[102px]"
            />
            <p className="xl:text-2xl text-lg text-black text-center">
              We provide independent and reliable ship classification services
              to ensure your vessels comply with international safety.
            </p>
            <div className="xl:text-2xl text-lg text-[#0A436A]/75 text-center hover:text-[#0A436A] transition-colors duration-500 border-b-2 border-[#0A436A]/75 hover:border-[#0A436A]">
              Visit BKI Armada
            </div>
          </div>
        </Link>
        <Link
          href={"https://my.bki.co.id/user/login"}
          rel="noopener noreferrer"
          target="_blank"
          className="w-full xl:w-1/2 h-[400px] cursor-pointer flex flex-col justify-end relative bg-[url('/my-bki.jpg')] bg-cover bg-bottom rounded-lg"
        >
          <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-[#E2E7F0] h-1/3" />
          <div className="flex flex-col justify-center items-center xl:pt-4 pt-3 xl:pb-8 pb-6 xl:gap-6 gap-4 bg-white rounded-lg border-2 border-[#0A436A]/30 absolute right-[20px] left-[20px] lg:right-[80px] lg:left-[80px] -bottom-1/3 px-8">
            <Image
              src={"/my-bki-logo.png"}
              alt={"myBKI"}
              width={342}
              height={102}
              className="object-contain h-[102px]"
            />
            <p className="xl:text-2xl text-lg text-black text-center">
              We provide independent and reliable ship classification services
              to ensure your vessels comply with international safety.
            </p>
            <div className="xl:text-2xl text-lg text-[#0A436A]/75 text-center hover:text-[#0A436A] transition-colors duration-500 border-b-2 border-[#0A436A]/75 hover:border-[#0A436A]">
              Visit myBKI
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
