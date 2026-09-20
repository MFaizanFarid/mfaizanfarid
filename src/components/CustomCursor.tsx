import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Disable on touch devices
    const isTouch =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // Detect hover over interactive elements or text links
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) {
        setIsHovered(false);
        return;
      }
      const interactive = target.closest(
        'button, a, input, textarea, select, [role="button"], .cursor-pointer'
      );
      setIsHovered(!!interactive);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Outer Follower Ring - Centered exactly via -translate-x-1/2 -translate-y-1/2 */}
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none border transition-colors duration-150"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovered ? 1.5 : 1,
          borderColor: isHovered ? 'rgba(6, 182, 212, 0.9)' : 'rgba(139, 92, 246, 0.5)',
          backgroundColor: isHovered ? 'rgba(139, 92, 246, 0.15)' : 'rgba(139, 92, 246, 0.04)',
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 400,
          mass: 0.15,
        }}
      />

      {/* Center Precision Dot - Centered exactly via -translate-x-1/2 -translate-y-1/2 */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400 dark:bg-cyan-400 shadow-[0_0_6px_rgba(167,139,250,0.9)] pointer-events-none"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovered ? 0.5 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 800,
        }}
      />
    </div>
  );
};
