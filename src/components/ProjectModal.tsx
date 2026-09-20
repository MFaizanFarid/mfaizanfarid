import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle2, AlertTriangle, Trophy, Zap } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        id="project-detail-modal"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#0b0e18] border border-slate-200 dark:border-violet-500/30 text-slate-900 dark:text-white shadow-2xl no-scrollbar"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close case study"
            className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/60 hover:bg-violet-600 text-white border border-white/20 backdrop-blur transition-all duration-200"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Banner Image */}
          <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-slate-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-violet-600/90 text-white backdrop-blur border border-violet-400/30 mb-2">
                  {project.category}
                </span>
                <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white tracking-tight">
                  {project.title}
                </h2>
                <p className="text-sm sm:text-base text-violet-200 font-medium mt-1">
                  {project.subtitle}
                </p>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-violet-600 hover:bg-violet-500 text-white shadow-lg transition-all"
                  >
                    <span>Live Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur transition-all"
                  >
                    <span>GitHub Code</span>
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Quick Stats Grid */}
            {project.stats && (
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                {project.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-xl sm:text-2xl font-bold font-heading text-cyan-600 dark:text-cyan-400">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Overview */}
            <div>
              <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                Project Overview
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {project.fullDescription}
              </p>
            </div>

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-rose-50 dark:bg-rose-500/5 border border-rose-200 dark:border-rose-500/20">
                <h4 className="text-sm font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  The Problem
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-500/5 border border-emerald-200 dark:border-emerald-500/20">
                <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  The Solution
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features List */}
            <div>
              <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white mb-3">
                Key Features & Engineering Deliverables
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-sm text-slate-800 dark:text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-violet-600 dark:text-violet-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-3">
                Technology Stack & Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-violet-50 dark:bg-violet-600/20 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-500/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges & Result */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-gradient-to-r dark:from-violet-950/40 dark:to-indigo-950/40 border border-slate-200 dark:border-violet-500/20">
              <h4 className="text-sm font-bold uppercase tracking-wider text-violet-700 dark:text-violet-400 mb-1 flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                Technical Challenges & Measurable Results
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mt-2">
                <strong>Challenge:</strong> {project.challenges}
              </p>
              <p className="text-sm text-cyan-700 dark:text-cyan-300 leading-relaxed mt-2">
                <strong>Result:</strong> {project.result}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
