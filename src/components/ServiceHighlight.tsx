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
      accentColor: '#ecb143',
      image: 'https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Database,
      title: 'BKI Armada',
      description: 'Information for Owner or Operator Vessel Under BKI Class',
      color: '#26476c',
      accentColor: '#df5c35',
      image: 'https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: FileText,
      title: 'Rules, Regulation and Guidelines',
      description: 'Rules, Regulation & Guidelines',
      color: '#26476c',
      accentColor: '#12a39a',
      image: 'https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: BookOpen,
      title: 'Technical Journal',
      description: 'Technical Journal BKI',
      color: '#26476c',
      accentColor: '#ecb143',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Shield,
      title: 'Certificate Verification',
      description: 'Verification Certificate Validity',
      color: '#26476c',
      accentColor: '#df5c35',
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Settings,
      title: 'Material and Component',
      description: 'Material and Component',
      color: '#26476c',
      accentColor: '#12a39a',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800'
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
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-3 cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-out group-hover:scale-110 group-hover:blur-sm group-hover:opacity-30"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  
                  {/* Animated Background Pattern on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <div 
                      className="absolute inset-0"
                      style={{ 
                        background: `radial-gradient(circle at 30% 70%, ${service.accentColor}20 0%, transparent 50%), radial-gradient(circle at 70% 30%, ${service.color}15 0%, transparent 50%)` 
                      }}
                    />
                    
                    {/* Floating particles */}
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: service.accentColor, animationDelay: '0s' }} />
                    <div className="absolute top-1/3 right-1/3 w-1 h-1 rounded-full animate-ping" style={{ backgroundColor: service.color, animationDelay: '1s' }} />
                    <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: service.accentColor, animationDelay: '2s' }} />
                  </div>
                </div>

                {/* Background Gradient */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/95 group-hover:from-white/85 group-hover:via-white/80 group-hover:to-white/85 transition-all duration-500 ease-out"
                />

                {/* Card Content */}
                <div className="relative p-8">
                  {/* Icon */}
                  <div className="mb-6">
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 ease-out group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-2xl"
                      style={{ backgroundColor: service.color }}
                    >
                      <IconComponent className="w-8 h-8 text-white transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-12" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#26476c] mb-4 transition-all duration-300 ease-out group-hover:text-[#ecb143] group-hover:tracking-wide">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-6 transition-all duration-300 ease-out group-hover:text-gray-900 font-medium">
                    {service.description}
                  </p>

                  {/* Action Button */}
                  <button className="inline-flex items-center text-[#26476c] font-semibold transition-all duration-300 ease-out group-hover:text-[#ecb143]">
                    Learn More
                    <svg 
                      className="w-4 h-4 ml-2 transition-all duration-300 ease-out group-hover:translate-x-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Click Ripple Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-active:opacity-40 transform -translate-x-full group-active:translate-x-full transition-all duration-500 ease-out" />
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-[#26476c] hover:bg-[#ecb143] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-xl">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlight;
