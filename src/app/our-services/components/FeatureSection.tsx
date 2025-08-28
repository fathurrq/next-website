import React from "react";
import {
  FileText,
  Handshake,
  Tally1,
  FileCheck2,
  FileArchive,
  CalendarX,
  ShieldAlert,
  AlertCircle,
  ClipboardCheck,
  Wrench,
  Mail,
  ClipboardX,
  Banknote,
  Ship,
  AlertTriangle,
} from "lucide-react";

// Define the type for a single feature item
interface FeatureItem {
  title: string;
  content: string;
  icon: keyof typeof icons;
  highlighted?: boolean;
}

// Define the props for the FeatureSection component
interface FeatureSectionProps {
  mainTitle: string;
  subTitle: string;
  features: FeatureItem[];
  col?: 1 | 2 | 3 | 4 | 5 | 6;
  theme?: "blue" | "orange"
  description: string;
}

const icons = {
  FileText: FileText,
  Handshake: Handshake,
  FileArchive: FileArchive,
  FileCheck2: FileCheck2,
  CalendarX: CalendarX,
  ShieldAlert: ShieldAlert,
  AlertCircle: AlertCircle,
  ClipboardCheck: ClipboardCheck,
  Wrench: Wrench,
  Mail: Mail,
  ClipboardX: ClipboardX,
  AlertTriangle: AlertTriangle,
  Ship: Ship,
  Banknote: Banknote
};

const FeatureSection: React.FC<FeatureSectionProps> = ({
  mainTitle,
  subTitle,
  description,
  features,
  col=4,
  theme="blue"
}) => {
  const gridCols = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
};

const backgroundColor = {
  blue: "bg-white",
  orange: "bg-bki-blue"
}
const textColor = {
  blue: "text-bki-blue",
  orange: "text-white"
}

const hoverColor = {
  blue: "hover:bg-[#0A436A]",
  orange: "hover:bg-[#e25b25]"
}

const iconHoverColor = {
  blue: "group-hover:text-blue-200",
  orange: "group-hover:text-white"
}
  return (
    <section className={`py-12 px-4 sm:px-6 md:px-24 ${backgroundColor[theme]} text-black`}>
      <div className="mx-auto text-center mb-10 md:mb-16 flex items-center flex-col">
        {/* <h3 className="text-sm font-semibold text-black uppercase tracking-wider">
          {subTitle}
        </h3> */}
        <h2 className={`mt-2 text-3xl leading-8 font-extrabold tracking-tight ${textColor[theme]} sm:text-4xl`}>
          {mainTitle}
        </h2>
        <p className={`mt-4 text-lg w-full text-center ${textColor[theme]}`}>
            {description}
        </p>
      </div>

      <div className={`mx-auto grid grid-cols-1 ${gridCols[col]} gap-6`}>
        {features.map((feature, index) => {
          const IconComponent = icons[feature.icon];
          return (
            <div
              key={index}
              // Highlighted edit: Use hover classes for the background and text color
              className={`p-8 rounded-lg shadow-lg bg-gray-50 text-gray-800 transition-colors duration-300 ${hoverColor[theme]} group`}
            >
              <div
                // Highlighted edit: Use hover classes for the icon color
                className={`mb-4 text-gray-400 transition-colors duration-300 ${iconHoverColor[theme]}`}
              >
                {IconComponent && <IconComponent size={48} />}
              </div>
              <h4
                // Highlighted edit: Use hover classes for the title color
                className="text-xl font-bold mb-2 text-[#0A436A] hover:text-white transition-colors duration-300 group-hover:text-white"
              >
                {feature.title}
              </h4>
              <p
                // Highlighted edit: Use hover classes for the content color
                className="text-base text-black transition-colors duration-300 group-hover:text-white"
              >
                {feature.content}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureSection;
