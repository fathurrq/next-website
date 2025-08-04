'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ChevronRight } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveMobileDropdown(null);
  };

  const toggleMobileDropdown = (title: string) => {
    setActiveMobileDropdown(activeMobileDropdown === title ? null : title);
  };

  return (
    <>
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
          <div className="flex-1 overflow-y-auto py-4">
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
                        <a
                          key={childIndex}
                          href="#"
                          className="block p-3 text-sm text-gray-600 hover:text-[#ecb143] hover:bg-[#ecb143]/5 rounded-md transition-all duration-200 transform hover:translate-x-1"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setActiveMobileDropdown(null);
                          }}
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

          {/* Footer */}
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-2">
                Leading Maritime Classification
              </p>
              <div className="flex justify-center space-x-4">
                <div className="w-2 h-2 bg-[#ecb143] rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-[#df5c35] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="w-2 h-2 bg-[#12a39a] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;