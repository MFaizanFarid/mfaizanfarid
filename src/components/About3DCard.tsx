import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Code2, Palette, Sparkles, Cpu, Layers } from 'lucide-react';

export const About3DCard: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -12;
    const rotY = ((x - centerX) / centerX) * 12;

    setRotateX(rotX);
    setRotateY(rotY);

    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.35,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  const badges = [
    { name: 'React', icon: <Code2 className="w-3.5 h-3.5 text-cyan-400" />, pos: 'top-6 -left-4 sm:-left-6' },
    { name: 'JavaScript', icon: <Cpu className="w-3.5 h-3.5 text-amber-400" />, pos: 'top-28 -right-4 sm:-right-6' },
    { name: 'PHP & MySQL', icon: <Layers className="w-3.5 h-3.5 text-indigo-400" />, pos: 'bottom-20 -left-4 sm:-left-6' },
    { name: 'UI/UX Design', icon: <Palette className="w-3.5 h-3.5 text-purple-400" />, pos: 'bottom-6 -right-3 sm:-right-5' },
  ];

  return (
    <div className="relative w-full max-w-sm mx-auto perspective-1000 py-6 select-none">
      {/* 3D Tilted Card Element */}
      <motion.div
        ref={cardRef}
        id="about-profile-3d-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="relative rounded-3xl p-6 sm:p-7 glass-panel-glow overflow-hidden transition-shadow duration-300"
      >
        {/* Dynamic Glare effect */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-3xl"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.45) 0%, transparent 60%)`,
            opacity: glarePosition.opacity,
          }}
        />

        {/* Profile Image with frame & glow */}
        <div className="relative mb-6 rounded-2xl overflow-hidden aspect-square border border-white/10 shadow-2xl bg-gradient-to-b from-violet-900/30 to-slate-900/80">
          <img
            src="../faizanlogo.png"
            alt="M Faizan Farid - Web Developer and Designer"
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060814]/90 via-transparent to-transparent" />
          
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/90">
            <span className="font-mono bg-black/60 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Online & Ready
            </span>
            <span className="font-mono bg-violet-600/80 px-2.5 py-1 rounded-full backdrop-blur">
              BS CS '26
            </span>
          </div>
        </div>

        {/* Info Content */}
        <div className="text-center relative z-10">
          <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
            M Faizan Farid
          </h3>
          <p className="text-xs uppercase tracking-wider text-violet-600 dark:text-violet-400 font-semibold mt-1">
            Computer Science Student & Full-Stack Designer
          </p>

          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-around text-center">
            <div>
              <div className="text-lg font-bold font-heading text-slate-900 dark:text-white">3+</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">Years Exp.</div>
            </div>
            <div className="h-7 w-[1px] bg-slate-200 dark:bg-white/10" />
            <div>
              <div className="text-lg font-bold font-heading text-slate-900 dark:text-white">40+</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">Projects</div>
            </div>
            <div className="h-7 w-[1px] bg-slate-200 dark:bg-white/10" />
            <div>
              <div className="text-lg font-bold font-heading text-slate-900 dark:text-white">25+</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">Clients</div>
            </div>
          </div>
        </div>

        {/* Floating Badges */}
        {badges.map((badge, idx) => (
          <motion.div
            key={badge.name}
            initial={{ y: 0 }}
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 3 + idx * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: idx * 0.4,
            }}
            className={`absolute ${badge.pos} z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-md border border-white/20 bg-white/90 dark:bg-[#121626]/90 text-slate-800 dark:text-slate-100 hover:scale-105 transition-transform`}
          >
            {badge.icon}
            <span>{badge.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
