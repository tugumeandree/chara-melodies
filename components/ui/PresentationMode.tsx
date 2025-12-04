'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Hymn, LyricSection } from '@/types';
import { ChevronLeft, ChevronRight, X, Maximize2, Play, Pause } from 'lucide-react';

interface PresentationModeProps {
  hymns: Hymn[];
  sessionName: string;
}

export function PresentationMode({ hymns, sessionName }: PresentationModeProps) {
  const [isPresenting, setIsPresenting] = useState(false);
  const [currentHymnIndex, setCurrentHymnIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [autoPlaySpeed, setAutoPlaySpeed] = useState(5); // seconds per slide
  const router = useRouter();

  // Generate slides from hymn lyrics
  const generateSlides = (hymn: Hymn): { title: string; lines: string[]; type: string }[] => {
    const slides: { title: string; lines: string[]; type: string }[] = [];
    
    // Title slide
    slides.push({
      title: `#${hymn.number} - ${hymn.title}`,
      lines: [hymn.language, hymn.category],
      type: 'title'
    });

    // Lyric slides
    hymn.lyrics.forEach((section) => {
      const sectionTitle = section.type === 'chorus'
        ? 'Chorus'
        : section.type === 'verse' && section.number
        ? `Verse ${section.number}`
        : section.type.charAt(0).toUpperCase() + section.type.slice(1);

      slides.push({
        title: sectionTitle,
        lines: section.lines,
        type: section.type
      });
    });

    return slides;
  };

  const allSlides = hymns.flatMap(hymn => generateSlides(hymn));
  const currentSlide = allSlides[currentSlideIndex];

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex(prev => {
      if (prev < allSlides.length - 1) {
        return prev + 1;
      }
      return prev;
    });
  }, [allSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex(prev => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  }, []);

  // Auto-play timer
  useEffect(() => {
    if (!isPresenting || !isAutoPlay) return;

    const timer = setInterval(() => {
      if (currentSlideIndex < allSlides.length - 1) {
        setCurrentSlideIndex(prev => prev + 1);
      } else {
        setIsAutoPlay(false); // Stop at the end
      }
    }, autoPlaySpeed * 1000);

    return () => clearInterval(timer);
  }, [isPresenting, isAutoPlay, currentSlideIndex, autoPlaySpeed, allSlides.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isPresenting) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        setIsAutoPlay(false); // Manual control pauses auto-play
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setIsAutoPlay(false);
        prevSlide();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        setIsPresenting(false);
      } else if (e.key === 'p' || e.key === 'P') {
        e.preventDefault();
        setIsAutoPlay(prev => !prev); // Toggle auto-play
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isPresenting, nextSlide, prevSlide]);

  const startPresentation = () => {
    setIsPresenting(true);
    setCurrentSlideIndex(0);
    setIsAutoPlay(false); // Start in manual mode
    // Try to go fullscreen
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(() => {
        // Fullscreen failed, continue anyway
      });
    }
  };

  const exitPresentation = () => {
    setIsPresenting(false);
    setIsAutoPlay(false);
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(prev => !prev);
  };

  if (!isPresenting) {
    return (
      <button
        onClick={startPresentation}
        className="btn-primary flex items-center gap-2"
        disabled={hymns.length === 0}
      >
        <Maximize2 className="w-5 h-5" />
        <span className="hidden sm:inline">Present Lyrics</span>
        <span className="sm:hidden">Present</span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black">
      {/* Slide Content */}
      <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12 lg:p-16">
        <div className="text-center max-w-6xl w-full">
          {/* Slide Title */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-primary-gold mb-8 sm:mb-12 lg:mb-16">
            {currentSlide?.title}
          </h2>

          {/* Slide Lines */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            {currentSlide?.lines.map((line, index) => (
              <p
                key={index}
                className={`text-white leading-relaxed ${
                  currentSlide.type === 'title'
                    ? 'text-2xl sm:text-3xl lg:text-4xl font-medium'
                    : 'text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif'
                }`}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Controls Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
        <div className="max-w-7xl mx-auto">
          {/* Auto-play controls row */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <button
              onClick={toggleAutoPlay}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                isAutoPlay
                  ? 'bg-primary-gold text-black hover:bg-primary-gold/90'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              aria-label={isAutoPlay ? 'Pause auto-play' : 'Start auto-play'}
            >
              {isAutoPlay ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span className="text-sm font-medium">Auto-playing</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  <span className="text-sm font-medium">Auto-play</span>
                </>
              )}
            </button>

            {/* Speed control */}
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
              <label htmlFor="speed" className="text-white text-sm">
                Speed:
              </label>
              <select
                id="speed"
                value={autoPlaySpeed}
                onChange={(e) => setAutoPlaySpeed(Number(e.target.value))}
                className="bg-transparent text-white text-sm border-none outline-none cursor-pointer"
              >
                <option value={3} className="bg-gray-800">3s</option>
                <option value={5} className="bg-gray-800">5s</option>
                <option value={7} className="bg-gray-800">7s</option>
                <option value={10} className="bg-gray-800">10s</option>
                <option value={15} className="bg-gray-800">15s</option>
              </select>
            </div>
          </div>

          {/* Main controls row */}
          <div className="flex items-center justify-between">
            {/* Left: Slide Counter */}
            <div className="text-white text-sm sm:text-base">
              <span className="font-medium">{currentSlideIndex + 1}</span>
              <span className="text-gray-400"> / {allSlides.length}</span>
            </div>

            {/* Center: Navigation */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={() => {
                  setIsAutoPlay(false);
                  prevSlide();
                }}
                disabled={currentSlideIndex === 0}
                className="p-2 sm:p-3 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>

              <div className="hidden sm:block text-white text-sm text-center">
                <div>Arrow keys • Spacebar • P (play/pause)</div>
              </div>

              <button
                onClick={() => {
                  setIsAutoPlay(false);
                  nextSlide();
                }}
                disabled={currentSlideIndex === allSlides.length - 1}
                className="p-2 sm:p-3 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
            </div>

            {/* Right: Exit */}
            <button
              onClick={exitPresentation}
              className="p-2 sm:p-3 rounded-lg bg-red-600/80 hover:bg-red-600 transition-colors"
              aria-label="Exit presentation"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Session Name */}
      <div className="absolute top-4 left-4 text-white/50 text-xs sm:text-sm">
        {sessionName}
      </div>
    </div>
  );
}
