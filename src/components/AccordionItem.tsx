import { useState, ReactNode } from "react";

export type AccordionItemProps = {
    title: string;
    children: ReactNode; // element
};

export default function AccordionItem({ title, children }: AccordionItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            {/* Header */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold text-[#0A436A] hover:bg-gray-50 transition"
            >
                <span>{title}</span>
                <span className="text-xl">{isOpen ? "−" : "+"}</span>
            </button>

            {/* Content */}
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[1000px]" : "max-h-0"
                    }`}
            >
                <div className="text-black bg-gray-200 text-sm leading-relaxed p-4">
                    {children}
                </div>
            </div>
        </div>
    );
}