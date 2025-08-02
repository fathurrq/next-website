'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      title: 'About Us',
      children: [
        'Company History',
        'Vision & Mission',
        'Organization Structure',
        'Board of Directors'
      ]
    },
    {
      title: 'Our Services',
      children: [
        'Classification Services',
        'Statutory Services',
        'Consultancy Services',
        'Supervision Services'
      ]
    },
    {
      title: 'Resources',
      children: [
        'Technical Standards',
        'Guidelines',
        'Forms & Documents',
        'Downloads'
      ]
    },
    {
      title: 'Publication',
      children: [
        'Technical Journal',
        'Annual Report',
        'News & Updates',
        'Press Release'
      ]
    },
    {
      title: 'Opportunity',
      children: [
        'Career',
        'Internship',
        'Partnership',
        'Tender'
      ]
    },
    {
      title: 'Gallery',
      children: [
        'Photo Gallery',
        'Video Gallery',
        'Events',
        'Achievements'
      ]
    },
    {
      title: 'PPID',
      children: [
        'Information Services',
        'Public Information',
        'Complaint Services',
        'Regulations'
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#26476c] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BKI</span>
              </div>
              <div className="hidden sm:block">
                <h1 className={`font-bold text-lg transition-colors duration-300 ${
                  isScrolled ? 'text-[#26476c]' : 'text-white'
                }`}>
                  PT. Biro Klasifikasi Indonesia
                </h1>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <div
                  key={item.title}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center space-x-1 ${
                    isScrolled 
                      ? 'text-[#26476c] hover:text-[#ecb143]' 
                      : 'text-white hover:text-[#ecb143]'
                  }`}>
                    <span>{item.title}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {/* Dropdown Menu */}
                  <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 transition-all duration-300 ${
                    activeDropdown === item.title 
                      ? 'opacity-100 visible transform translate-y-0' 
                      : 'opacity-0 invisible transform -translate-y-2'
                  }`}>
                    <div className="py-2">
                      {item.children.map((child, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#26476c] hover:text-white transition-colors duration-200"
                        >
                          {child}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button className={`p-2 rounded-md transition-colors duration-300 ${
              isScrolled ? 'text-[#26476c]' : 'text-white'
            }`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;