import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, FileText, ArrowRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavLink {
  name: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  navLinks: NavLink[];
  activeSection: string;
  onClose: () => void;
  onOpenResume: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  navLinks,
  activeSection,
  onClose,
  onOpenResume,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLinkClick = (href: string) => {
    onClose();
    const element = document.querySelector(href);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex justify-end">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Sliding Side Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative w-[80%] max-w-sm h-full bg-white/95 dark:bg-[#090b14]/95 backdrop-blur-xl border-l border-slate-200 dark:border-white/10 p-6 flex flex-col justify-between shadow-2xl z-10 text-slate-900 dark:text-white"
          >
            <div>
              {/* Header with Close and Theme Toggle */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-cyan-400 p-[1px] flex items-center justify-center shadow-sm">
                    <div className="w-full h-full bg-slate-950 rounded-lg flex items-center justify-center">
                      <span className="font-heading font-bold text-xs text-white">FF</span>
                    </div>
                  </div>
                  <span className="font-heading font-bold text-sm tracking-tight text-slate-900 dark:text-white">
                    M Faizan Farid
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <button
                    onClick={onClose}
                    aria-label="Close mobile menu"
                    className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="mt-8 flex flex-col gap-2">
                {navLinks.map((link, idx) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <motion.button
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => handleLinkClick(link.href)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-all ${
                        isActive
                          ? 'bg-violet-500/15 text-violet-700 dark:text-violet-300 font-semibold border border-violet-500/30'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className={`w-4 h-4 transition-transform ${isActive ? 'translate-x-1 text-violet-600 dark:text-violet-400' : 'opacity-40'}`} />
                    </motion.button>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-slate-200 dark:border-white/10 space-y-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenResume();
                }}
                className="w-full py-3 px-4 rounded-xl text-sm font-semibold bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 flex items-center justify-center gap-2 transition-all"
              >
                <FileText className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                <span>Download CV</span>
              </button>

              <button
                onClick={() => handleLinkClick('#contact')}
                className="w-full py-3 px-4 rounded-xl text-sm font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/30 flex items-center justify-center gap-2"
              >
                <span>Hire Me / Contact</span>
              </button>

              <p className="text-center text-[11px] text-slate-500 dark:text-slate-400 pt-2 font-mono">
                © 2026 M Faizan Farid
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
