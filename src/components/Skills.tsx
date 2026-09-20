import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Code2,
  Palette,
  Box,
  Server,
  Layers,
  Sparkles,
  Terminal,
  Cpu,
  Globe,
  Database,
  CheckCircle,
} from 'lucide-react';
import { skillsData, skillCategories } from '../data/skills';
import { SkillItem } from '../types';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredSkills =
    selectedCategory === 'All'
      ? skillsData
      : skillsData.filter((s) => s.category === selectedCategory);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-violet-600 dark:text-violet-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-400" />;
      case 'Box':
        return <Box className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-rose-600 dark:text-rose-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      default:
        return <CheckCircle className="w-5 h-5 text-violet-600 dark:text-violet-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-violet-600/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-700 dark:text-violet-400 border border-violet-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Modern Stack
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            A comprehensive overview of modern technologies, design suites, and tools I harness to engineer world-class experiences.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-violet-600 text-white shadow-[0_4px_15px_rgba(124,58,237,0.35)] scale-105'
                  : 'glass-panel text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              getSkillIcon={getSkillIcon}
            />
          ))}
        </motion.div>

        {/* Highlight Architecture Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl glass-panel-glow border border-violet-500/30 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-violet-500/20 text-violet-700 dark:text-violet-400 flex items-center justify-center shrink-0 shadow-sm">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">Modern Full-Stack</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-medium">React, TypeScript, PHP & MySQL</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 flex items-center justify-center shrink-0 shadow-sm">
              <Box className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">3D Web Experiences</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-medium">Three.js, WebGL & Motion Design</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/20 text-fuchsia-700 dark:text-fuchsia-400 flex items-center justify-center shrink-0 shadow-sm">
              <Palette className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">Visual Design & UI/UX</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-medium">Figma, Adobe CC & Design Systems</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const SkillCard: React.FC<{
  skill: SkillItem;
  index: number;
  getSkillIcon: (name: string) => React.ReactNode;
}> = ({ skill, index, getSkillIcon }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.02 }}
      className="glass-panel p-5 rounded-2xl border border-slate-200/80 dark:border-white/5 hover:border-violet-500/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-black/5 dark:bg-white/5 border border-slate-200/80 dark:border-white/5">
              {getSkillIcon(skill.icon)}
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                {skill.name}
              </h4>
              <span className="text-[11px] text-violet-700 dark:text-violet-400 font-semibold">
                {skill.category}
              </span>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200">
            {skill.level}%
          </span>
        </div>

        {skill.highlight && (
          <p className="text-xs text-slate-600 dark:text-slate-400 mb-3 font-medium">
            {skill.highlight}
          </p>
        )}
      </div>

      {/* Animated Progress Meter */}
      <div className="w-full bg-slate-200 dark:bg-white/5 rounded-full h-1.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.03 }}
          className="h-full rounded-full bg-gradient-to-r from-violet-600 to-cyan-500"
        />
      </div>
    </motion.div>
  );
};
