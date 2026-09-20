import React from 'react';
import { motion } from 'motion/react';
import { User, Code2, Palette, Sparkles, BookOpen, Laptop, Target, Award, Heart } from 'lucide-react';
import { About3DCard } from './About3DCard';

export const About: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: '3+', desc: 'Practical client & project engineering' },
    { label: 'Completed Projects', value: '40+', desc: 'From enterprise web apps to branding' },
    { label: 'Happy Clients', value: '25+', desc: 'Across freelance & commercial engagements' },
    { label: 'Code Quality', value: '100%', desc: 'Strict adherence to modern best practices' },
  ];

  const philosophies = [
    {
      icon: <Target className="w-5 h-5 text-violet-600 dark:text-violet-400" />,
      title: 'Performance First',
      desc: 'Obsessed with sub-second page loads, lightweight bundles, and fluid 60 FPS interactions.',
    },
    {
      icon: <Palette className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
      title: 'Visual Elegance',
      desc: 'Every layout respects typographic balance, mathematical padding grids, and harmonic contrast.',
    },
    {
      icon: <Heart className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
      title: 'Human-Centered',
      desc: 'Interfaces structured intuitively so non-technical users navigate effortlessly with high conversion.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-700 dark:text-violet-400 border border-violet-500/20 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            About M Faizan Farid
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            Bridging technical computer science rigor with high-fidelity digital craftsmanship.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20">
          
          {/* Left Column: Interactive 3D Card */}
          <div className="lg:col-span-5 flex justify-center">
            <About3DCard />
          </div>

          {/* Right Column: Bio Narrative & Education */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-white/10 shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Laptop className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                Crafting Where Code Meets Artistry
              </h3>
              
              <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  As an ambitious <strong>Computer Science undergraduate</strong> with a deep passion for visual arts, I operate at the intersection of rigorous algorithmic problem-solving and contemporary UI/UX design.
                </p>
                <p>
                  Over the past 3+ years, I have engineered full-scale web platforms ranging from car rental fleet systems and software distribution hubs to offline-first retail POS applications and real-time chat platforms.
                </p>
                <p>
                  Whether translating intricate client briefs into Figma design systems, modeling responsive 3D WebGL scenes, or structuring relational MySQL databases in PHP & TypeScript, I prioritize clarity, performance, and accessibility.
                </p>
              </div>

              {/* Education Snippet */}
              <div className="mt-6 pt-6 border-t border-slate-200/80 dark:border-white/10 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-700 dark:text-violet-400 shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    BS in Computer Science (2026 — Present)
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-medium">
                    Focused on Software Engineering, Database Systems, Web Technologies & Human-Computer Interaction.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Philosophies Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {philosophies.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-panel p-4 rounded-2xl border border-slate-200/90 dark:border-white/5 hover:border-violet-500/40 transition-all duration-200"
                >
                  <div className="p-2 w-fit rounded-lg bg-black/5 dark:bg-white/5 mb-3">
                    {item.icon}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-700 dark:text-slate-400 leading-normal font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Animated Statistics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-panel p-6 rounded-2xl text-center border border-slate-200/90 dark:border-white/10 hover:border-violet-500/40 shadow-sm transition-all"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-violet-700 dark:text-violet-400">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white mt-2">
                {stat.label}
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-medium">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
