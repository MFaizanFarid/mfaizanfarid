import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only apply on non-touch devices
    if ('ontouchstart' in window) return;
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -8;
    const rY = ((x - centerX) / centerX) * 8;

    setRotateX(rX);
    setRotateY(rY);
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.25,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div className="perspective-1000 h-full">
      <motion.div
        ref={cardRef}
        id={`project-card-${project.id}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="group relative flex flex-col h-full rounded-2xl glass-panel overflow-hidden border border-slate-200/90 dark:border-white/10 hover:border-violet-500/50 dark:hover:border-violet-500/50 transition-colors duration-300 shadow-md hover:shadow-2xl"
      >
        {/* Dynamic Light glare reflection */}
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-300 z-30"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.35) 0%, transparent 60%)`,
            opacity: glare.opacity,
          }}
        />

        {/* Card Image Container */}
        <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

          {/* Category Badge */}
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-black/60 text-violet-300 border border-violet-500/30">
              {project.category}
            </span>
          </div>

          {/* Quick Action Button */}
          <button
            onClick={() => onOpenDetails(project)}
            aria-label={`View details for ${project.title}`}
            className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-violet-600 text-white backdrop-blur border border-white/20 flex items-center justify-center transition-all duration-300 group/btn cursor-pointer"
          >
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between relative z-20">
          <div>
            <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white group-hover:text-violet-700 dark:group-hover:text-violet-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-violet-700 dark:text-cyan-400 font-semibold mt-0.5 mb-2.5">
              {project.subtitle}
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 line-clamp-2 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Technology Badges */}
          <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-white/5">
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 text-[11px] rounded-md bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-white/5 font-mono font-medium"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-0.5 text-[11px] rounded-md bg-violet-500/15 text-violet-700 dark:text-violet-300 font-mono font-semibold">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>

            {/* Buttons: Live Demo, GitHub, View Details */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => onOpenDetails(project)}
                className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold bg-violet-600 hover:bg-violet-700 text-white shadow-sm transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>View Details</span>
                <Sparkles className="w-3 h-3" />
              </button>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-slate-300 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-slate-300 transition-colors"
                  title="Live Demo"
                  aria-label="Live Demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-slate-300 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-800 dark:text-slate-300 transition-colors"
                  title="GitHub Source"
                  aria-label="GitHub Source"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
