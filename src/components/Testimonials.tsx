import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Relaxed auto-advance (7 seconds)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-slate-50/70 dark:bg-black/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-700 dark:text-violet-400 border border-violet-500/20 mb-3">
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Client Testimonials
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            Real feedback from startup founders, product directors, and university project stakeholders.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative min-h-[320px] sm:min-h-[280px] rounded-3xl glass-panel p-8 sm:p-12 border border-slate-200/90 dark:border-white/10 shadow-xl flex flex-col justify-between">
            {/* Ambient Watermark Quote Icon */}
            <Quote className="absolute top-6 right-8 w-20 h-20 text-violet-500/10 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 flex flex-col justify-between h-full"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                    <span className="text-xs font-mono font-semibold text-slate-600 dark:text-slate-400 ml-2">
                      5.0 Verified Review
                    </span>
                  </div>

                  {/* Testimonial Quote */}
                  <blockquote className="text-base sm:text-xl text-slate-800 dark:text-slate-100 font-medium leading-relaxed italic mb-8">
                    "{current.content}"
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-200/80 dark:border-white/10">
                  <div className="flex items-center gap-4">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-violet-500/40 shadow-md"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                        {current.name}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                        {current.role} • <span className="text-violet-700 dark:text-violet-400 font-semibold">{current.company}</span>
                      </p>
                    </div>
                  </div>

                  {/* Project Tag */}
                  <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300">
                    {current.project}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? 'w-8 bg-violet-600'
                      : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="p-3 rounded-full glass-panel hover:border-violet-500/50 text-slate-800 dark:text-slate-300 hover:text-white hover:bg-violet-600 transition-all duration-200 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="p-3 rounded-full glass-panel hover:border-violet-500/50 text-slate-800 dark:text-slate-300 hover:text-white hover:bg-violet-600 transition-all duration-200 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
