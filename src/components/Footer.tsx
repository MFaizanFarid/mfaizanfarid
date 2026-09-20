import React from 'react';
import { Github, MessageCircle, Facebook, Linkedin, Instagram, AtSign, ArrowUp, Heart, Sparkles, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  const services = [
    'Custom Web Applications (React, Vite)',
    'Interactive 3D WebGL (Three.js, Drei)',
    'UI/UX Prototyping & Design Systems',
    'Full-Stack PHP, MySQL & REST APIs',
    'Responsive Branding & Identity Systems',
  ];

  return (
    <footer className="relative border-t border-slate-200 dark:border-white/10 bg-slate-100/70 dark:bg-[#060810] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-200 dark:border-white/10">
          
          {/* Brand Info (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl p-[1px] bg-gradient-to-tr from-violet-600 to-cyan-400 flex items-center justify-center shadow-sm">
                <div className="w-full h-full bg-slate-950 rounded-xl flex items-center justify-center">
                  <span className="font-heading font-bold text-sm text-white">FF</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white">
                  M. Faizan Farid
                </h3>
                <p className="text-xs text-violet-700 dark:text-violet-400 font-mono font-semibold">
                  Web Developer & Designer
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed max-w-sm font-normal">
              Computer Science student and full-stack designer creating modern, responsive, and visually captivating digital experiences with clean code and interactive 3D web technologies.
            </p>

            <div className="flex items-center gap-3 pt-2">

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
                aria-label="GitHub"
                className="p-2.5 rounded-xl glass-panel text-slate-700 dark:text-slate-300 hover:text-white hover:bg-violet-600 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/m-faizan-farid-704264343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl glass-panel text-slate-700 dark:text-slate-300 hover:text-white hover:bg-violet-600 transition-colors"
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

              <a
                href="https://www.threads.com/@mfaizanfarid"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Threads Profile"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-violet-500/15 text-slate-700 dark:text-slate-300 hover:text-violet-700 dark:hover:text-violet-400 border border-slate-200 dark:border-white/5 transition-all" >
                <AtSign className="w-4 h-4" />
                </a>
            </div>
          </div>

          {/* Quick Links (Col 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Navigation Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-slate-700 dark:text-slate-400 hover:text-violet-700 dark:hover:text-violet-400 transition-colors flex items-center gap-1.5 font-medium cursor-pointer"
                  >
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenResume}
                  className="text-violet-700 dark:text-violet-400 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Curriculum Vitae (PDF)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Services (Col 4) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Core Expertise
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-400 font-medium">
              {services.map((srv, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-600 dark:bg-cyan-400" />
                  <span>{srv}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400 font-medium">
          <p>© 2026 M Faizan Farid. All Rights Reserved.</p>
          <div className="flex items-center gap-2">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>& Modern React 3D</span>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-violet-700 dark:hover:text-violet-400 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
