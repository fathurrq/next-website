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
          Biro Klasifikasi Indonesia (BKI) is the national classification society of Indonesia, established in 1964 to strengthen the country’s maritime independence. For more than six decades, BKI has been trusted for its independence, integrity, and expertise in safeguarding assets across the maritime, energy, infrastructure, and industrial sectors.
        </p>
        <p className="text-sm md:text-lg leading-relaxed">
          As a Classification Society, BKI develops and applies technical standards for the design, construction, and survey of ships and offshore structures. Vessels built and maintained in accordance with these standards are awarded a Classification Certificate, confirming compliance with recognized international safety and quality benchmarks.
        </p>
        <p className="text-sm md:text-lg leading-relaxed">
          BKI also carries out statutory survey and certification services on behalf of the Government of Indonesia and foreign flag states. These include Load Line, ISM Code, and ISPS Code certification, ensuring compliance with IMO conventions and global maritime regulations.
        </p>
        <p className="text-sm md:text-lg leading-relaxed">
          Over the years, BKI has evolved into a comprehensive TICCS service provider (Testing, Inspection, Certification, Classification, and Statutory), supporting industries through inspection, testing, consultancy, and certification services. Our solutions are designed to ensure safety, reliability, and sustainability across multiple sectors.
        </p>
        <p className="text-sm md:text-lg leading-relaxed">
          Headquartered in Jakarta with branch offices in major Indonesian ports and Singapore, BKI also maintains cooperative agreements with leading international classification societies, including mutual recognition and dual class arrangements. This network enables BKI to serve both domestic and global clients with confidence.
        </p>
        <p className="text-sm md:text-lg leading-relaxed">
          Through continuous investment in people, research, and digital innovation, BKI remains committed to delivering world-class services that support industry progress while reinforcing Indonesia’s maritime sovereignty.
        </p>

        {/* Button */}
        <DownloadButton />
      </div>
    </section>
  );
}
