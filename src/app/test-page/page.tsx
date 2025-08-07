'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import TestNavigation from './TestNavigation';

// Mathematical easing functions for smooth animations
const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

const easeOutCubic = (t: number): number => {
  return 1 - Math.pow(1 - t, 3);
};

const linear = (t: number): number => {
  return t;
};

// Interpolation function for smooth value transitions
const lerp = (start: number, end: number, progress: number): number => {
  return start + (end - start) * progress;
};

const TestPage = () => {
  const [animationPhase, setAnimationPhase] = useState(0);
  const [logoPosition, setLogoPosition] = useState({ x: 50, y: 53 });
  const [logoScale, setLogoScale] = useState(1);
  const [logoOpacity, setLogoOpacity] = useState(1);
  const [backgroundOpacity, setBackgroundOpacity] = useState(1);
  const [lineOpacity, setLineOpacity] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [textPhase, setTextPhase] = useState(0); // 0: hidden, 1: "Welcome to", 2: final content
  const [welcomeOpacity, setWelcomeOpacity] = useState(0);
  const [finalTextOpacity, setFinalTextOpacity] = useState(0);
  const [finalLine1Opacity, setFinalLine1Opacity] = useState(0);
  const [finalLine2Opacity, setFinalLine2Opacity] = useState(0);
  const [finalLine3Opacity, setFinalLine3Opacity] = useState(0);
  const [sectionsVisible, setSectionsVisible] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const animationRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  // Animation timeline constants (in milliseconds)
  const TIMELINE = {
    LOGO_ANIMATION: 2500,      // 2.5s for logo movement
    LINE_FADE: 800,            // 0.8s for line fade-in
    NAVBAR_SLIDE: 1000,        // 1s for navbar slide-in
    WELCOME_FADE_IN: 500,      // 0.5s for welcome text fade
    WELCOME_DISPLAY: 1000,     // 1s holding welcome text
    WELCOME_FADE_OUT: 500,     // 0.5s for welcome text fade
    FINAL_TEXT_STAGGER: 300,   // 0.3s stagger between final lines
    FINAL_FADE: 600            // 0.6s for final text fade
  };

  // We don't need to calculate initial position - logo should be static centered
  const getInitialLogoPosition = useCallback(() => {
    return { x: 0, y: 53 }; // x=0 because we'll use CSS to center
  }, []);

  // Main animation controller
  const animate = useCallback((timestamp: number) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const elapsed = timestamp - startTimeRef.current;

    // Phase 1: Logo animation (0 - 2.5s)
    if (elapsed < TIMELINE.LOGO_ANIMATION) {
      const progress = easeInOutCubic(elapsed / TIMELINE.LOGO_ANIMATION);
      
      // Logo movement: from center (50%) to left position (105px)
      const finalX = 105;
      const progressMultiplier = easeInOutCubic(progress);
      
      // Calculate the exact percentage for 105px from left
      const endPercentage = (finalX / window.innerWidth) * 100;
      const currentPercentage = lerp(50, endPercentage, progressMultiplier);
      
      // Calculate scale (157px to 56px height)
      const startScale = 157 / 157; // 1.0
      const endScale = 56 / 157;    // ~0.357
      const currentScale = lerp(startScale, endScale, progress);
      
      // Update logo state
      setLogoPosition({ x: currentPercentage, y: 53 });
      setLogoScale(currentScale);
      
      // Fade background
      setBackgroundOpacity(1 - progress);
      
    } 
    // Phase 2: Line and navbar animation (2.5s - 4.3s)
    else if (elapsed < TIMELINE.LOGO_ANIMATION + TIMELINE.LINE_FADE) {
      const lineProgress = easeOutCubic((elapsed - TIMELINE.LOGO_ANIMATION) / TIMELINE.LINE_FADE);
      setLineOpacity(lineProgress);
      setNavbarVisible(true);
      
    } 
    // Phase 3: Welcome text animation (4.3s - 6.3s)
    else if (elapsed < TIMELINE.LOGO_ANIMATION + TIMELINE.LINE_FADE + TIMELINE.WELCOME_FADE_IN) {
      const welcomeProgress = linear((elapsed - TIMELINE.LOGO_ANIMATION - TIMELINE.LINE_FADE) / TIMELINE.WELCOME_FADE_IN);
      setWelcomeOpacity(welcomeProgress);
      setTextPhase(1);
      
    } 
    // Phase 4: Hold welcome text (6.3s - 7.3s)
    else if (elapsed < TIMELINE.LOGO_ANIMATION + TIMELINE.LINE_FADE + TIMELINE.WELCOME_FADE_IN + TIMELINE.WELCOME_DISPLAY) {
      setWelcomeOpacity(1);
      
    } 
    // Phase 5: Fade out welcome text (7.3s - 7.8s)
    else if (elapsed < TIMELINE.LOGO_ANIMATION + TIMELINE.LINE_FADE + TIMELINE.WELCOME_FADE_IN + TIMELINE.WELCOME_DISPLAY + TIMELINE.WELCOME_FADE_OUT) {
      const fadeOutProgress = linear((elapsed - TIMELINE.LOGO_ANIMATION - TIMELINE.LINE_FADE - TIMELINE.WELCOME_FADE_IN - TIMELINE.WELCOME_DISPLAY) / TIMELINE.WELCOME_FADE_OUT);
      setWelcomeOpacity(1 - fadeOutProgress);
      
    } 
    // Phase 6: Final text staggered animation (7.8s+)
    else if (elapsed < TIMELINE.LOGO_ANIMATION + TIMELINE.LINE_FADE + TIMELINE.WELCOME_FADE_IN + TIMELINE.WELCOME_DISPLAY + TIMELINE.WELCOME_FADE_OUT + TIMELINE.FINAL_TEXT_STAGGER) {
      setTextPhase(2);
      const finalProgress = easeOutCubic((elapsed - TIMELINE.LOGO_ANIMATION - TIMELINE.LINE_FADE - TIMELINE.WELCOME_FADE_IN - TIMELINE.WELCOME_DISPLAY - TIMELINE.WELCOME_FADE_OUT) / TIMELINE.FINAL_TEXT_STAGGER);
      setFinalLine1Opacity(finalProgress);
      
    } 
    else if (elapsed < TIMELINE.LOGO_ANIMATION + TIMELINE.LINE_FADE + TIMELINE.WELCOME_FADE_IN + TIMELINE.WELCOME_DISPLAY + TIMELINE.WELCOME_FADE_OUT + TIMELINE.FINAL_TEXT_STAGGER * 2) {
      const finalProgress = easeOutCubic((elapsed - TIMELINE.LOGO_ANIMATION - TIMELINE.LINE_FADE - TIMELINE.WELCOME_FADE_IN - TIMELINE.WELCOME_DISPLAY - TIMELINE.WELCOME_FADE_OUT - TIMELINE.FINAL_TEXT_STAGGER) / TIMELINE.FINAL_TEXT_STAGGER);
      setFinalLine1Opacity(1);
      setFinalLine2Opacity(finalProgress);
      
    } 
    else if (elapsed < TIMELINE.LOGO_ANIMATION + TIMELINE.LINE_FADE + TIMELINE.WELCOME_FADE_IN + TIMELINE.WELCOME_DISPLAY + TIMELINE.WELCOME_FADE_OUT + TIMELINE.FINAL_TEXT_STAGGER * 3) {
      const finalProgress = easeOutCubic((elapsed - TIMELINE.LOGO_ANIMATION - TIMELINE.LINE_FADE - TIMELINE.WELCOME_FADE_IN - TIMELINE.WELCOME_DISPLAY - TIMELINE.WELCOME_FADE_OUT - TIMELINE.FINAL_TEXT_STAGGER * 2) / TIMELINE.FINAL_TEXT_STAGGER);
      setFinalLine1Opacity(1);
      setFinalLine2Opacity(1);
      setFinalLine3Opacity(finalProgress);
      
    } 
    else {
      // Animation complete - start video and show sections
      setFinalLine1Opacity(1);
      setFinalLine2Opacity(1);
      setFinalLine3Opacity(1);
      setSectionsVisible(true);
      
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          console.log('Video autoplay failed:', error);
        });
      }
      
      // Stop animation loop
      cancelAnimationFrame(animationRef.current);
      return;
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [getInitialLogoPosition]);

  // Initialize animation and pause video
  useEffect(() => {
    startTimeRef.current = 0;
    animationRef.current = requestAnimationFrame(animate);
    
    // Pause video initially
    if (videoRef.current) {
      videoRef.current.pause();
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  // Handle window resize for responsive logo positioning
  useEffect(() => {
    const handleResize = () => {
      if (animationPhase === 0) { // Only adjust during initial positioning
        const initialPos = getInitialLogoPosition();
        setLogoPosition(initialPos);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [animationPhase, getInitialLogoPosition]);

  return (
    <div className="relative overflow-hidden">
      
      {/* Scrollable Container for All Sections */}
      <div 
        ref={containerRef}
        className="w-full h-[300vh] overflow-y-auto snap-y snap-mandatory"
        style={{ 
          scrollSnapType: 'y mandatory'
        }}
      >

      {/* Section 1 - Hero with Animation */}
      <section className="relative h-screen w-full overflow-hidden" style={{ scrollSnapAlign: 'start' }}>
        
        {/* Animated Background Gradient */}
        <div 
          className="fixed inset-0 z-10 transition-all duration-100"
          style={{
            background: 'linear-gradient(to bottom, #ffffff, #0A436A)',
            filter: 'blur(44px)',
            opacity: backgroundOpacity
          }}
        />
        
        {/* Video Background */}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          style={{ opacity: 1 }}
        >
          <source src="/463601_Ha_Long_Bay_Vietnam_1920x1080.mp4" type="video/mp4" />
        </video>
        
        {/* Logo */}
        <div
          ref={logoRef}
          className="fixed z-40 transition-all duration-75"
          style={{
            left: `${logoPosition.x}%`,
            top: `${logoPosition.y}px`,
            transform: `translateX(-50%) scale(${logoScale})`,
            height: '157px',
            width: 'auto',
            opacity: logoOpacity
          }}
        >
          <img 
            src="/bki-2.png" 
            alt="BKI Logo" 
            className="w-full h-full object-contain"
            style={{
              filter: logoScale < 0.5 ? 'brightness(0) invert(1)' : 'brightness(1)',
              transition: 'filter 0.3s ease'
            }}
          />
        </div>

        {/* Navigation (same line as logo) */}
        <div 
          className="fixed z-50 transition-all duration-1000"
          style={{
            top: '53px',
            left: '250px', // Position after logo area
            right: '105px',
            opacity: navbarVisible ? 1 : 0,
            transform: navbarVisible ? 'translateX(0)' : 'translateX(-100%)'
          }}
        >
          <TestNavigation isVisible={navbarVisible} />
        </div>

        {/* Line below logo and navbar */}
        <div
          className="fixed z-30 transition-all duration-1000"
          style={{
            left: '105px',
            right: '105px',
            top: '135px', // 53px (top) + 82px (margin-top) = 135px
            height: '2px',
            backgroundColor: '#ffffff',
            opacity: lineOpacity
          }}
        />

        {/* Welcome Text (part of Section 1) */}
        {textPhase === 1 && (
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <h1 
              className="text-center font-bold"
              style={{
                fontSize: '96px',
                color: '#ffffff',
                opacity: welcomeOpacity,
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                transition: 'opacity 0.5s ease'
              }}
            >
              Welcome to
            </h1>
          </div>
        )}

        {/* Final Text Content (part of Section 1) */}
        {textPhase === 2 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none space-y-8 mt-20">
            <h1 
              className="text-center font-bold"
              style={{
                fontSize: '96px',
                background: 'linear-gradient(to right, #ffffff, #0A436A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                opacity: finalLine1Opacity,
                transition: 'opacity 0.6s ease',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              Your Global Partner
            </h1>
            
            <p 
              className="text-center"
              style={{
                fontSize: '32px',
                color: '#ffffff',
                opacity: finalLine2Opacity,
                transition: 'opacity 0.6s ease',
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
              }}
            >
              in
            </p>
            
            <h2 
              className="text-center font-bold max-w-4xl px-4"
              style={{
                fontSize: '48px',
                color: '#ffffff',
                opacity: finalLine3Opacity,
                transition: 'opacity 0.6s ease',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                lineHeight: '1.2'
              }}
            >
              Testing, Inspection and certification
            </h2>
          </div>
        )}

        {/* Scroll prompt (shows after animation) */}
        {sectionsVisible && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20">
            <p className="text-sm text-center">Scroll to explore more</p>
            <svg className="w-6 h-6 mx-auto mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        )}

      </section>

      {/* Section 2 - Blue Gradient with White Text */}
      <section className="relative h-screen w-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center" style={{ scrollSnapAlign: 'start' }}>
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Blue Gradient Section</h2>
          <p className="text-lg mb-8">
            This is Section 2 with distinctive blue gradient background. 
            This section demonstrates scroll-based parallax navigation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Feature 1</h3>
              <p>This is temporary content for the blue gradient section</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Feature 2</h3>
              <p>White text on blue gradient background</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Feature 3</h3>
              <p>Mock content for demonstration</p>
            </div>
          </div>
          <div className="mt-12 animate-bounce">
            <p className="text-sm">Continue scrolling to Section 3</p>
            <svg className="w-6 h-6 mx-auto mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Section 3 - Full Image Background */}
      <section className="relative h-screen w-full overflow-hidden" style={{ scrollSnapAlign: 'start' }}>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/ship-tanker.jpg')",
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6">Ship Image Background</h2>
            <p className="text-lg mb-8">
              This is Section 3 with ship-tanker.jpg background and parallax effect.
              This section demonstrates scroll-based parallax with fixed background attachment.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
              Explore More
            </button>
            <div className="mt-8">
              <p className="text-sm">You've reached the end of the test page</p>
              <p className="text-xs mt-2 opacity-75">Scroll back up to see all sections</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default TestPage;