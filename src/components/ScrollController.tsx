"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

interface ScrollControllerProps {
  children: React.ReactNode;
}

export default function ScrollController({ children }: ScrollControllerProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const containerRef = useRef<HTMLDivElement>(null);
  const totalSections = React.Children.count(children);

  const scrollToSection = useCallback((index: number, direction: 'up' | 'down' = 'down') => {
    if (index < 0 || index >= totalSections || isScrolling) return;
    
    setIsScrolling(true);
    setScrollDirection(direction);
    setCurrentSection(index);
    
    setTimeout(() => {
      setIsScrolling(false);
    }, 700);
  }, [totalSections, isScrolling]);

  const handleWheel = useCallback((e: WheelEvent) => {
    if (isScrolling) return;

    e.preventDefault();
    
    if (e.deltaY > 0 && currentSection < totalSections - 1) {
      scrollToSection(currentSection + 1, 'down');
    } else if (e.deltaY < 0 && currentSection > 0) {
      scrollToSection(currentSection - 1, 'up');
    }
  }, [currentSection, totalSections, isScrolling, scrollToSection]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (isScrolling) return;

    if (e.key === 'ArrowDown' && currentSection < totalSections - 1) {
      e.preventDefault();
      scrollToSection(currentSection + 1, 'down');
    } else if (e.key === 'ArrowUp' && currentSection > 0) {
      e.preventDefault();
      scrollToSection(currentSection - 1, 'up');
    }
  }, [currentSection, totalSections, isScrolling, scrollToSection]);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (isScrolling) return;
    
    const touchStartY = e.touches[0].clientY;
    const touchEndY = e.touches[0].clientY;
    
    const handleTouchMove = (moveEvent: TouchEvent) => {
      const currentY = moveEvent.touches[0].clientY;
      const diff = touchStartY - currentY;
      
      if (Math.abs(diff) > 50) {
        if (diff > 0 && currentSection < totalSections - 1) {
          scrollToSection(currentSection + 1, 'down');
        } else if (diff < 0 && currentSection > 0) {
          scrollToSection(currentSection - 1, 'up');
        }
        document.removeEventListener('touchmove', handleTouchMove);
      }
    };
    
    const handleTouchEnd = () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
    
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
  }, [currentSection, totalSections, isScrolling, scrollToSection]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('touchstart', handleTouchStart, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, [handleWheel, handleKeyDown, handleTouchStart]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white" ref={containerRef}>
      <motion.div
        key={currentSection}
        className="absolute inset-0 bg-white"
        initial={{ 
          y: scrollDirection === 'down' ? '100%' : '-100%'
        }}
        animate={{ 
          y: '0%'
        }}
        transition={{ 
          duration: 0.7, 
          ease: "easeInOut"
        }}
      >
        {React.Children.toArray(children)[currentSection]}
      </motion.div>
    </div>
  );
}