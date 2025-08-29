"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, OctagonAlert } from "lucide-react";

// Define the type for a single disclaimer item
interface DisclaimerItem {
  question: string;
  answer: string;
}

// Define the props for the DisclaimerSection component
interface DisclaimerSectionProps {
  sectionTitle: string;
  sectionSubtitle: string;
  disclaimers: DisclaimerItem[];
  icon: React.ReactNode;
}

const DisclaimerSection: React.FC<DisclaimerSectionProps> = ({
  sectionTitle,
  sectionSubtitle,
  disclaimers,
  icon
}) => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleDisclaimer = (index: number) => {
    setOpenIndices((prevIndices) => {
      if (prevIndices.includes(index)) {
        // If the item is already open, remove it from the array
        return prevIndices.filter((i) => i !== index);
      } else {
        // If the item is closed, add it to the array
        return [...prevIndices, index];
      }
    });
  };
  return (
    <section className="py-12 px-6 sm:px-6 md:px-24 bg-gray-50 text-black">
      <div className=" mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Column - Titles */}
        <div className="w-full md:w-1/3 flex flex-col justify-start">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
            {sectionSubtitle}
          </h3>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-bki-blue leading-tight">
            {sectionTitle}
          </h2>
        </div>

        {/* Right Column - Collapsible Items */}
        <div className="w-full md:w-2/3 space-y-4">
          {disclaimers.map((item, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div key={index} className="border-b border-gray-200">
                <button
                  className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
                  onClick={() => toggleDisclaimer(index)}
                >
                  <div className="flex items-center text-lg font-bold text-bki-orange">
                    <span className="mr-4 text-bki-orange">
                      {icon}
                    </span>
                    {item.question}
                  </div>
                  <span className="text-gray-500 transition-transform duration-300">
                    {isOpen ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-base text-black pl-8">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
