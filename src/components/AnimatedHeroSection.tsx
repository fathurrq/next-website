'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const AnimatedHeroSection = () => {
  const [animationStage, setAnimationStage] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  // Animation sequence
  useEffect(() => {
    const sequence = [
      { stage: 0, delay: 0 },     // Initial logo center
      { stage: 1, delay: 2000 },  // Start transition
      { stage: 2, delay: 3000 },  // Show navbar
      { stage: 3, delay: 3500 },  // Unblur video
      { stage: 4, delay: 4000 },  // Show title and tagline
    ];

    sequence.forEach(({ stage, delay }) => {
      setTimeout(() => {
        setAnimationStage(stage);
      }, delay);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
        setActiveMobileDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navigationItems = [
    {
      title: 'About Us',
      children: [
        { title: 'Company History', href: '/company-history' },
        { title: 'Vision & Mission', href: '#' },
        { title: 'Organization Structure', href: '#' },
        { title: 'Board of Directors', href: '#' }
      ]
    },
    {
      title: 'Our Services',
      children: [
        { title: 'Classification Services', href: '#' },
        { title: 'Statutory Services', href: '#' },
        { title: 'Consultancy Services', href: '#' },
        { title: 'Supervision Services', href: '#' }
      ]
    },
    {
      title: 'Resources',
      children: [
        { title: 'Technical Standards', href: '#' },
        { title: 'Guidelines', href: '#' },
        { title: 'Forms & Documents', href: '#' },
        { title: 'Downloads', href: '#' }
      ]
    },
    {
      title: 'Publication',
      children: [
        { title: 'Technical Journal', href: '#' },
        { title: 'Annual Report', href: '#' },
        { title: 'News & Updates', href: '#' },
        { title: 'Press Release', href: '#' }
      ]
    },
    {
      title: 'Opportunity',
      children: [
        { title: 'Career', href: '#' },
        { title: 'Internship', href: '#' },
        { title: 'Partnership', href: '#' },
        { title: 'Tender', href: '#' }
      ]
    },
    {
      title: 'Gallery',
      children: [
        { title: 'Photo Gallery', href: '#' },
        { title: 'Video Gallery', href: '#' },
        { title: 'Events', href: '#' },
        { title: 'Achievements', href: '#' }
      ]
    },
    {
      title: 'PPID',
      children: [
        { title: 'Information Services', href: '#' },
        { title: 'Public Information', href: '#' },
        { title: 'Complaint Services', href: '#' },
        { title: 'Regulations', href: '#' }
      ]
    }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveMobileDropdown(null);
  };

  const toggleMobileDropdown = (title: string) => {
    setActiveMobileDropdown(activeMobileDropdown === title ? null : title);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
            animationStage < 3 ? 'blur-md scale-110' : 'blur-none scale-100'
          }`}
        >
          <source src="/463601_Ha_Long_Bay_Vietnam_1920x1080.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Video Overlay */}
        <div className={`absolute inset-0 transition-all duration-1000 ${
          animationStage < 3 
            ? 'bg-gradient-to-r from-[#26476c]/90 via-[#26476c]/80 to-[#26476c]/90' 
            : 'bg-gradient-to-r from-[#26476c]/80 via-[#26476c]/60 to-transparent'
        }`} />
      </div>

      {/* Animated Logo - Center to Navbar */}
      <div className={`absolute z-20 transition-all duration-1000 ease-in-out ${
        animationStage === 0 
          ? 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-150' 
          : 'top-4 left-4 transform translate-x-0 translate-y-0 scale-100'
      }`}>
        <div className={`flex items-center space-x-3 transition-all duration-1000 ${
          animationStage === 0 ? 'opacity-100' : animationStage >= 2 ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="relative">
            <Image
              src="/bki-2.png"
              alt="BKI Logo"
              width={animationStage === 0 ? 120 : 40}
              height={animationStage === 0 ? 120 : 40}
              className="transition-all duration-1000"
            />
          </div>
          <div className={`transition-all duration-500 ${
            animationStage >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}>
            <h1 className="font-bold text-lg text-white hidden sm:block">
              PT. Biro Klasifikasi Indonesia
            </h1>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-10 transition-all duration-1000 ${
        animationStage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      } ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Space - Reserved for animated logo */}
            <div className="flex-shrink-0 w-64">
              {/* Space reserved for animated logo */}
            </div>

            {/* Navigation Menu */}
            <div className={`hidden lg:block transition-all duration-800 delay-200 ${
              animationStage >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}>
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
                          <Link
                            key={index}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#26476c] hover:text-white transition-colors duration-200"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className={`lg:hidden transition-all duration-800 delay-200 ${
              animationStage >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}>
              <button 
                onClick={toggleMobileMenu}
                className={`mobile-menu-button p-2 rounded-md transition-all duration-300 hover:scale-110 active:scale-95 ${
                  isScrolled ? 'text-[#26476c] hover:bg-[#26476c]/10' : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        isMobileMenuOpen 
          ? 'opacity-100 visible' 
          : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={toggleMobileMenu}
        />

        {/* Mobile Menu */}
        <div className={`mobile-menu absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Navigation Items */}
          <div className="flex-1 overflow-y-auto py-4 mt-16">
            <div className="px-4 space-y-2">
              {navigationItems.map((item, index) => (
                <div key={item.title} className="border-b border-gray-50 last:border-b-0">
                  <button
                    onClick={() => toggleMobileDropdown(item.title)}
                    className="w-full flex items-center justify-between p-4 text-left text-[#26476c] hover:bg-gray-50 rounded-lg transition-all duration-200 group"
                  >
                    <span className="font-medium">{item.title}</span>
                    <ChevronRight 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeMobileDropdown === item.title ? 'rotate-90' : ''
                      }`}
                    />
                  </button>

                  {/* Dropdown Items */}
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeMobileDropdown === item.title 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pl-4 pb-2 space-y-1">
                      {item.children.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          href={child.href}
                          className="block p-3 text-sm text-gray-600 hover:text-[#ecb143] hover:bg-[#ecb143]/5 rounded-md transition-all duration-200 transform hover:translate-x-1"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setActiveMobileDropdown(null);
                          }}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`space-y-6 transition-all duration-1000 ${
              animationStage >= 4 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <h1 className={`text-3xl md:text-5xl font-bold text-white leading-tight transform transition-all duration-1000 hover:scale-105 ${
                animationStage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}>
                Leading Maritime Classification
              </h1>
              <p className={`text-lg md:text-xl text-gray-200 leading-relaxed transform transition-all duration-1000 delay-300 ${
                animationStage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}>
                Excellence in Vessel Safety and Standards
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 pt-8 justify-center transform transition-all duration-1000 delay-500 ${
                animationStage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}>
                <button className={`bg-[#ecb143] hover:bg-[#ecb143]/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:-translate-y-1 active:scale-95 ${
                  animationStage >= 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                  Explore Our Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`hidden md:block absolute bottom-8 right-8 z-20 animate-bounce hover:animate-pulse cursor-pointer transition-all duration-1000 ${
        animationStage >= 4 ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default AnimatedHeroSection;