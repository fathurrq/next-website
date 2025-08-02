'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Placeholder images - in production, these would be actual maritime/vessel images
  const slides = [
    {
      image: 'https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Leading Maritime Classification',
      subtitle: 'Excellence in Vessel Safety and Standards'
    },
    {
      image: 'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Trusted by Indonesian Maritime Industry',
      subtitle: 'Ensuring Safety and Compliance Since 1964'
    },
    {
      image: 'https://images.pexels.com/photos/2144326/pexels-photo-2144326.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      title: 'Innovation in Maritime Technology',
      subtitle: 'Advanced Solutions for Modern Shipping'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlideAuto();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlideAuto = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 200);
  };
  const nextSlide = () => {
    setIsTransitioning(true);
    setIsAutoPlaying(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 200);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setIsAutoPlaying(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 200);
  };

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    setIsTransitioning(true);
    setIsAutoPlaying(false);
    setTimeout(() => {
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 200);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
            index === currentSlide 
              ? `opacity-100 scale-100 rotate-0 ${isTransitioning ? 'animate-pulse' : ''}` 
              : index === (currentSlide - 1 + slides.length) % slides.length
              ? 'opacity-0 scale-95 -rotate-1 -translate-x-full'
              : index === (currentSlide + 1) % slides.length
              ? 'opacity-0 scale-95 rotate-1 translate-x-full'
              : 'opacity-0 scale-110 rotate-2'
          }`}
          style={{
            filter: index === currentSlide ? 'brightness(1) contrast(1.1)' : 'brightness(0.7) contrast(0.9)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className={`absolute inset-0 bg-gradient-to-r from-[#26476c]/80 via-[#26476c]/60 to-transparent transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-70'
          }`} />
          
          {/* Animated overlay particles */}
          <div className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-20' : 'opacity-0'
          }`}>
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#ecb143] rounded-full animate-ping" style={{ animationDelay: '0s' }} />
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#df5c35] rounded-full animate-ping" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-[#12a39a] rounded-full animate-ping" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-[#ecb143] rounded-full animate-ping" style={{ animationDelay: '3s' }} />
          </div>
        </div>
      ))}

      {/* Transition overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r from-[#26476c] via-transparent to-[#26476c] transition-opacity duration-300 pointer-events-none ${
        isTransitioning ? 'opacity-30' : 'opacity-0'
      }`} />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className={`space-y-6 transition-all duration-700 transform ${
              isTransitioning 
                ? 'opacity-0 translate-y-8 scale-95' 
                : 'opacity-100 translate-y-0 scale-100 animate-fade-in'
            }`}>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight transform transition-all duration-700 hover:scale-105">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed transform transition-all duration-700 delay-100">
                {slides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-8 transform transition-all duration-700 delay-200">
                <button className="bg-[#ecb143] hover:bg-[#ecb143]/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:-translate-y-1 active:scale-95">
                  Explore Our Services
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-[#26476c] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 active:scale-95">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-x-1 active:scale-95 group"
        disabled={isTransitioning}
      >
        <ChevronLeft className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-0.5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:translate-x-1 active:scale-95 group"
        disabled={isTransitioning}
      >
        <ChevronRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-0.5" />
      </button>

      {/* Auto-play toggle */}
      <button
        onClick={toggleAutoPlay}
        className="absolute right-4 bottom-20 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {isAutoPlaying ? (
          <Pause className="w-5 h-5" />
        ) : (
          <Play className="w-5 h-5" />
        )}
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`w-3 h-3 rounded-full transition-all duration-500 transform hover:scale-125 ${
              index === currentSlide 
                ? 'bg-[#ecb143] scale-125 shadow-lg shadow-[#ecb143]/50' 
                : 'bg-white/50 hover:bg-white/75 hover:scale-110'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 animate-bounce hover:animate-pulse cursor-pointer">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-1 bg-white/20">
        <div 
          className="h-full bg-gradient-to-r from-[#ecb143] to-[#df5c35] transition-all duration-300 ease-linear"
          style={{ 
            width: isAutoPlaying ? '100%' : '0%',
            animation: isAutoPlaying ? 'progress 5s linear infinite' : 'none'
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;