'use client';

import { useState } from 'react';
import { 
  Ship, 
  Database, 
  FileText, 
  BookOpen, 
  Shield, 
  Settings 
} from 'lucide-react';

const ServiceHighlight = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Ship,
      title: 'Class Register',
      description: "Vessel's Under BKI Class",
      color: '#26476c',
      accentColor: '#ecb143'
    },
    {
      icon: Database,
      title: 'BKI Armada',
      description: 'Information for Owner or Operator Vessel Under BKI Class',
      color: '#26476c',
      accentColor: '#df5c35'
    },
    {
      icon: FileText,
      title: 'Rules, Regulation and Guidelines',
      description: 'Rules, Regulation & Guidelines',
      color: '#26476c',
      accentColor: '#12a39a'
    },
    {
      icon: BookOpen,
      title: 'Technical Journal',
      description: 'Technical Journal BKI',
      color: '#26476c',
      accentColor: '#ecb143'
    },
    {
      icon: Shield,
      title: 'Certificate Verification',
      description: 'Verification Certificate Validity',
      color: '#26476c',
      accentColor: '#df5c35'
    },
    {
      icon: Settings,
      title: 'Material and Component',
      description: 'Material and Component',
      color: '#26476c',
      accentColor: '#12a39a'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#26476c] mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive maritime classification and certification services 
            ensuring safety, compliance, and excellence in the Indonesian maritime industry
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ecb143] to-[#df5c35] mx-auto mt-8 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden ${
                  hoveredCard === index ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Gradient */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ 
                    background: `linear-gradient(135deg, ${service.color} 0%, ${service.accentColor} 100%)` 
                  }}
                />

                {/* Card Content */}
                <div className="relative p-8">
                  {/* Icon */}
                  <div className="mb-6">
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                      style={{ backgroundColor: service.color }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#26476c] mb-4 group-hover:text-[#ecb143] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Action Button */}
                  <button className="inline-flex items-center text-[#26476c] font-semibold group-hover:text-[#ecb143] transition-colors duration-300">
                    Learn More
                    <svg 
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Hover Effect Border */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ backgroundColor: service.accentColor }}
                />

                {/* Click Ripple Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-active:opacity-30 transform -translate-x-full group-active:translate-x-full transition-all duration-700" />
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-[#26476c] to-[#ecb143] hover:from-[#ecb143] hover:to-[#26476c] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-xl">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlight;