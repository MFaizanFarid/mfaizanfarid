import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { ToastMessage } from '../types';

interface ToastProps {
  toasts: ToastMessage[];
  onClose: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toasts, onClose }) => {
  return (
    <div
      id="toast-container"
      className="fixed bottom-6 left-6 z-50 flex flex-col gap-3 max-w-sm w-[calc(100%-3rem)] pointer-events-none"
    >
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onClose={() => onClose(toast.id)} />
        ))}
      </AnimatePresence>
    </div>
  );
};

const ToastItem: React.FC<{ toast: ToastMessage; onClose: () => void }> = ({ toast, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4500);
    return () => clearTimeout(timer);
  }, [onClose]);

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />,
    info: <Info className="w-5 h-5 text-cyan-400 shrink-0" />
  };

  const borderColors = {
    success: 'border-emerald-500/30 dark:border-emerald-500/40',
    error: 'border-rose-500/30 dark:border-rose-500/40',
    info: 'border-cyan-500/30 dark:border-cyan-500/40'
  };

  const progressColors = {
    success: 'bg-emerald-500',
    error: 'bg-rose-500',
    info: 'bg-cyan-500'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, y: 10 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`pointer-events-auto relative overflow-hidden rounded-xl border p-4 shadow-xl backdrop-blur-xl bg-white/90 dark:bg-[#0f1422]/90 ${borderColors[toast.type]}`}
    >
      <div className="flex items-start gap-3">
        {icons[toast.type]}
        <div className="flex-1 text-sm font-medium text-slate-800 dark:text-slate-100">
          {toast.message}
        </div>
        <button
          onClick={onClose}
          aria-label="Close notification"
          className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Progress Bar Indicator */}
      <motion.div
        initial={{ width: '100%' }}
        animate={{ width: '0%' }}
        transition={{ duration: 4.5, ease: 'linear' }}
        className={`absolute bottom-0 left-0 h-[3px] ${progressColors[toast.type]}`}
      />
    </motion.div>
  );
};
