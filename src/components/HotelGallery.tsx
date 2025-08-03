'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

interface HotelGalleryProps {
  images?: string[];
  className?: string;
}

const HotelGallery = ({ 
  images = [
    'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200&h=640&fit=crop',
    'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1200&h=640&fit=crop',
    'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1200&h=640&fit=crop',
    'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1200&h=640&fit=crop',
    'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1200&h=640&fit=crop'
  ],
  className = ''
}: HotelGalleryProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const dragThreshold = 50;

  // Handle mouse move for custom cursor
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  }, []);

  // Handle mouse enter/leave for cursor visibility
  const handleMouseEnter = () => setShowCursor(true);
  const handleMouseLeave = () => setShowCursor(false);

  // Handle drag start
  const handleDragStart = (clientX: number, clientY: number) => {
    setIsDragging(true);
    dragStartPos.current = { x: clientX, y: clientY };
    setDragStart({ x: clientX, y: clientY });
  };

  // Handle drag move
  const handleDragMove = (clientX: number, clientY: number) => {
    if (!isDragging) return;
    
    const deltaX = clientX - dragStartPos.current.x;
    const deltaY = clientY - dragStartPos.current.y;
    
    // Update cursor position during drag
    setCursorPos(prev => ({
      x: prev.x + deltaX,
      y: prev.y + deltaY
    }));
  };

  // Handle drag end
  const handleDragEnd = (clientX: number, clientY: number) => {
    if (!isDragging) return;
    
    const deltaX = clientX - dragStartPos.current.x;
    const deltaY = clientY - dragStartPos.current.y;
    
    // Determine swipe direction and threshold
    if (Math.abs(deltaX) > dragThreshold) {
      if (deltaX > 0) {
        // Swipe right - previous slide
        setCurrentSlide(prev => prev === 0 ? images.length - 1 : prev - 1);
      } else {
        // Swipe left - next slide
        setCurrentSlide(prev => (prev + 1) % images.length);
      }
    }
    
    setIsDragging(false);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX, e.clientY);
  };

  const handleMouseMoveCapture = (e: React.MouseEvent) => {
    handleDragMove(e.clientX, e.clientY);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    handleDragEnd(e.clientX, e.clientY);
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    handleDragStart(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    handleDragMove(touch.clientX, touch.clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touch = e.changedTouches[0];
    handleDragEnd(touch.clientX, touch.clientY);
  };

  // Dot click handler
  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  // Add mouse move listener
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // Prevent context menu on right click
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const preventContextMenu = (e: Event) => e.preventDefault();
    container.addEventListener('contextmenu', preventContextMenu);
    return () => container.removeEventListener('contextmenu', preventContextMenu);
  }, []);

  return (
    <div className={`hotel-gallery ${isDisabled ? 'is-disabled' : ''} ${className}`}>
      <div 
        ref={containerRef}
        className="hotel-gallery-list"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMoveCapture}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <ul ref={listRef} className="slider-list">
          {images.map((_, slideIndex) => (
            <li 
              key={slideIndex}
              className={`slider-item ${slideIndex === currentSlide ? 'is-visible' : ''}`}
            >
              {images.map((image, imageIndex) => (
                <div key={imageIndex} className="slider-child">
                  <div className="slider-child-inner">
                    <Image
                      src={image}
                      alt={`Gallery image ${imageIndex + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 1200px"
                      priority={slideIndex === currentSlide && imageIndex === 0}
                    />
                  </div>
                </div>
              ))}
            </li>
          ))}
        </ul>

        {/* Custom Cursor */}
        <div 
          className={`custom-cursor hidden lg:block ${showCursor ? 'visible' : ''}`}
          style={{
            transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`
          }}
        >
          <div className="cursor-body">
            <div className="cursor-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path 
                  d="M9 18l6-6-6-6" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Touch draggable area */}
        <div className="slider-draggable lg:hidden" />
      </div>

      {/* Dots Navigation */}
      <ul className="gallery-dots" aria-hidden="true">
        {images.map((_, index) => (
          <li 
            key={index}
            className={`gallery-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          >
            <svg width="4" height="4" viewBox="0 0 4 4" fill="currentColor">
              <circle cx="2" cy="2" r="2" />
            </svg>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelGallery;