import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Terminal } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState<number>(0);
  const [isDone, setIsDone] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 600);
          }, 200);
          return 100;
        }
        // Smooth incremental loading speed
        const increment = Math.floor(Math.random() * 15) + 8;
        return Math.min(100, prev + increment);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#06070a] text-white select-none overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute w-96 h-96 rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
          <div className="absolute w-80 h-80 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none -translate-y-20 translate-x-20" />

          <div className="relative flex flex-col items-center max-w-sm w-full px-6 text-center z-10">
            {/* Animated Logo Monogram */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative mb-6"
            >
              <div className="relative w-20 h-20 rounded-2xl p-[1px] bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 shadow-[0_0_35px_rgba(139,92,246,0.35)] flex items-center justify-center">
                <div className="w-full h-full bg-[#0d101a] rounded-2xl flex items-center justify-center">
                  <span className="font-heading text-2xl font-bold tracking-wider bg-gradient-to-r from-violet-300 via-indigo-200 to-cyan-300 bg-clip-text text-transparent">
                    FF
                  </span>
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-1 rounded-2xl border border-violet-500/20 pointer-events-none"
              />
            </motion.div>

            {/* Name & Title */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-heading font-bold tracking-tight text-white mb-1"
            >
              M Faizan Farid
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xs uppercase tracking-widest text-violet-400 font-semibold mb-6 flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Web Developer & Designer</span>
            </motion.p>

            {/* Progress Bar Container */}
            <div className="w-full bg-slate-800/80 rounded-full h-2 p-0.5 border border-slate-700/50 backdrop-blur mb-3">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>

            {/* Status & percentage */}
            <div className="flex items-center justify-between w-full text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-violet-400 animate-spin" />
                Initializing Experience...
              </span>
              <span className="text-violet-300 font-semibold">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
