import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, FileText, Send, MessageCircle, Facebook, Instagram, Github, Linkedin, Sparkles, Code } from 'lucide-react';
import { Hero3DScene } from './Hero3DScene';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  // Animated rotating titles that change every 2.8 seconds
  const rotatingTitles = [
    'Web Developer',
    'UI/UX Designer',
    'Computer Science Student',
    '3D Web Enthusiast',
    'Graphic Designer',
    'Full-Stack Creator',
  ];

  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % rotatingTitles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [rotatingTitles.length]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden"
    >
      {/* Background Animated Ambient Blobs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-violet-600/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typography & Rotating Title & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-800 dark:text-emerald-400 border border-emerald-500/30 mb-6 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
              <span>Available for Projects & Internships</span>
            </div>

            {/* Introduction Lead */}
            <p className="text-sm sm:text-base font-bold text-violet-700 dark:text-violet-400 tracking-wider uppercase font-mono mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              <span>Hi, I'm</span>
            </p>

            {/* Main Name Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.08] mb-4">
              M Faizan <span className="text-violet-700 dark:text-violet-400">Farid</span>
            </h1>

            {/* Dynamic Rotating Words Banner: words show for few seconds, then other words show */}
            <div className="h-10 sm:h-12 flex items-center gap-2 mb-6 overflow-hidden">
              <span className="text-lg sm:text-2xl font-heading font-bold text-slate-800 dark:text-slate-200">
                I am a
              </span>
              <div className="relative inline-block">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={titleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="inline-block text-lg sm:text-2xl lg:text-3xl font-heading font-extrabold text-violet-700 dark:text-cyan-400 underline decoration-violet-500/40 decoration-wavy decoration-1 underline-offset-4"
                  >
                    {rotatingTitles[titleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-xl leading-relaxed mb-8 font-normal">
              I build modern, responsive, and visually engaging digital experiences with clean code, creative design, and modern 3D web technologies.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-600/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-900 dark:text-white border border-slate-300 dark:border-white/10 hover:border-violet-500 transition-all duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                <span>Download CV</span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-800 dark:text-slate-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links & Trust Markers */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-white/10 w-full max-w-md">
              <span className="text-xs uppercase tracking-wider text-slate-700 dark:text-slate-400 font-mono font-bold">Connect:</span>

              <a
                href="https://wa.me/923244304350"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-violet-500/15 text-slate-700 dark:text-slate-300 hover:text-violet-700 dark:hover:text-violet-400 border border-slate-200 dark:border-white/5 transition-all" >
                <MessageCircle className="w-4 h-4" />
              </a>
              
              <a
                href="https://github.com/mfaizanfarid"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-violet-500/15 text-slate-700 dark:text-slate-300 hover:text-violet-700 dark:hover:text-violet-400 border border-slate-200 dark:border-white/5 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/m-faizan-farid-704264343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-violet-500/15 text-slate-700 dark:text-slate-300 hover:text-violet-700 dark:hover:text-violet-400 border border-slate-200 dark:border-white/5 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://www.facebook.com/share/1BNLYgbn1w/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-violet-500/15 text-slate-700 dark:text-slate-300 hover:text-violet-700 dark:hover:text-violet-400 border border-slate-200 dark:border-white/5 transition-all" >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href="https://www.instagram.com/mfaizanfarid/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-violet-500/15 text-slate-700 dark:text-slate-300 hover:text-violet-700 dark:hover:text-violet-400 border border-slate-200 dark:border-white/5 transition-all" >
                <Instagram className="w-4 h-4" />
              </a>


            </div>
          </motion.div>

          {/* Right Column: Interactive 3D Workstation Experience */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="w-full relative">
              <Hero3DScene />
              <div className="text-center text-[11px] text-slate-600 dark:text-slate-400 font-mono tracking-tight mt-1 flex items-center justify-center gap-1.5 font-medium">
                <Code className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                <span>Interactive 3D Workspace • Move cursor to orbit</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
