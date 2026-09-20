import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { experienceData } from '../data/experience';

export const Experience: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'work' | 'education'>('all');

  const filteredData =
    activeFilter === 'all'
      ? experienceData
      : experienceData.filter((item) => item.type === activeFilter);

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-700 dark:text-violet-400 border border-violet-500/20 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Timeline & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experience & Education
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            Demonstrated track record of delivering end-to-end software solutions and ongoing academic advancement.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {(['all', 'work', 'education'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold capitalize transition-all duration-200 cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                    : 'glass-panel text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {filter === 'all' ? 'Full History' : filter === 'work' ? 'Work Experience' : 'Education'}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Path */}
        <div className="relative">
          {/* Vertical central neon guideline */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-violet-600 via-indigo-500 to-transparent" />

          <div className="space-y-12">
            {filteredData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node Pin */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-900 border-2 border-violet-500 items-center justify-center z-10 shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                    {item.type === 'education' ? (
                      <GraduationCap className="w-4 h-4 text-cyan-400" />
                    ) : (
                      <Briefcase className="w-4 h-4 text-violet-400" />
                    )}
                  </div>

                  {/* Content Card (Half Width) */}
                  <div className="w-full md:w-1/2">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`p-6 sm:p-7 rounded-3xl glass-panel border border-slate-200/90 dark:border-white/10 hover:border-violet-500/50 hover:shadow-xl transition-all ${
                        isEven ? 'md:text-right' : 'md:text-left'
                      }`}
                    >
                      {/* Period Badge & Location */}
                      <div
                        className={`flex flex-wrap items-center gap-2 mb-3 ${
                          isEven ? 'md:justify-end' : 'md:justify-start'
                        }`}
                      >
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-violet-500/10 text-violet-700 dark:text-violet-300 border border-violet-500/20">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>

                        <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-400">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>

                      {/* Title & Organization */}
                      <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
                        {item.role}
                      </h3>
                      <div className="text-sm font-semibold text-violet-700 dark:text-cyan-400 mb-4 flex items-center gap-1.5 justify-start md:inline-flex">
                        {item.type === 'education' ? (
                          <GraduationCap className="w-4 h-4" />
                        ) : (
                          <Briefcase className="w-4 h-4" />
                        )}
                        <span>{item.organization}</span>
                      </div>

                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4 font-normal">
                        {item.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-1.5 mb-4 text-xs text-slate-700 dark:text-slate-300 font-medium">
                        {item.achievements.map((ach, i) => (
                          <div
                            key={i}
                            className={`flex items-start gap-2 ${
                              isEven ? 'md:flex-row-reverse md:text-right' : 'text-left'
                            }`}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technology Chips */}
                      <div
                        className={`flex flex-wrap gap-1.5 ${
                          isEven ? 'md:justify-end' : 'md:justify-start'
                        }`}
                      >
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 text-[11px] font-mono rounded-md bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
