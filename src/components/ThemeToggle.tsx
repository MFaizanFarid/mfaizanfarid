import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      if (!savedTheme && prefersDark) {
        localStorage.setItem('theme', 'dark');
      }
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);

    if (newDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      id="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      className={`relative flex items-center gap-2 p-1.5 rounded-full border transition-all duration-300 ${
        isDark
          ? 'bg-slate-900/80 border-violet-500/30 text-amber-300 hover:border-violet-500/60 shadow-[0_0_15px_rgba(139,92,246,0.2)]'
          : 'bg-white/80 border-slate-200 text-slate-700 hover:border-violet-400/50 shadow-sm'
      } ${className}`}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <div className="relative w-14 h-7 rounded-full px-1 flex items-center justify-between bg-black/10 dark:bg-black/30">
        <Sun className="w-3.5 h-3.5 text-amber-500 z-10" />
        <Moon className="w-3.5 h-3.5 text-violet-400 z-10" />
        <motion.div
          layout
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className={`absolute top-0.5 bottom-0.5 w-6 rounded-full flex items-center justify-center ${
            isDark
              ? 'left-[calc(100%-1.65rem)] bg-gradient-to-r from-violet-600 to-indigo-600 shadow-[0_0_10px_rgba(139,92,246,0.5)]'
              : 'left-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 shadow-sm'
          }`}
        >
          {isDark ? (
            <Moon className="w-3 h-3 text-white" />
          ) : (
            <Sun className="w-3 h-3 text-white" />
          )}
        </motion.div>
      </div>
    </button>
  );
};
