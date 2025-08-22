import Image from "next/image";
import { Download } from "lucide-react";
import DownloadButton from "./download-button";

export default function AboutUs() {
  return (
    <section className="relative w-full h-auto md:h-screen flex items-center justify-center py-10 md:py-0">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/about-us-bg.png" // replace with your image path
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent/0 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-24 text-center text-white space-y-6 font-medium">
        <div className="flex justify-center">
          <Image
            src="/bki-utama.png"
            alt="BKI Utama Logo"
            width={384}
            height={300}
            className="w-32 h-20 md:w-96 md:h-64"
          />
        </div>

        <h2 className="text-3xl md:text-5xl font-bold">Get to Know Us</h2>
        <p className="text-sm md:text-lg leading-relaxed">
          Indonesian Classification Bureau (BKI) is the sole national
          classification society of Indonesia, established on July 1, 1964.
          Appointed by the Government of the Republic of Indonesia, BKI is
          responsible for providing classification services and statutory
          certification for Indonesian-flagged vessels.
        </p>
        <p className="text-sm md:text-lg leading-relaxed">
          With decades of experience, BKI continues to strengthen its role in
          supporting maritime safety, environmental protection, and industry
          standards. As a trusted partner, BKI is committed to delivering
          professional services that meet international regulations and the
          needs of stakeholders across the maritime sector.
        </p>
        <p className="text-sm md:text-lg leading-relaxed">
          Looking ahead, BKI is dedicated to innovation and digital
          transformation to enhance service efficiency and competitiveness. By
          expanding capabilities and collaborating with global partners, BKI
          ensures sustainable growth while contributing to the advancement of
          Indonesia’s maritime industry.
        </p>

        {/* Button */}
        <DownloadButton />
      </div>
    </section>
  );
}
