'use client';

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/463601_Ha_Long_Bay_Vietnam_1920x1080.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#26476c]/80 via-[#26476c]/60 to-transparent" />
        
        {/* Animated overlay particles */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#ecb143] rounded-full animate-ping" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#df5c35] rounded-full animate-ping" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-[#12a39a] rounded-full animate-ping" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-[#ecb143] rounded-full animate-ping" style={{ animationDelay: '3s' }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight transform transition-all duration-700 hover:scale-105">
                Leading Maritime Classification
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed transform transition-all duration-700 delay-100">
                Excellence in Vessel Safety and Standards
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center transform transition-all duration-700 delay-200">
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

      {/* Scroll Indicator */}
      <div className="hidden md:block absolute bottom-8 right-8 z-20 animate-bounce hover:animate-pulse cursor-pointer">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;