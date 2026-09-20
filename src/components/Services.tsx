import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Code, Layout, Palette, Smartphone, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/services';
import { ServiceItem } from '../types';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-50/70 dark:bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-700 dark:text-violet-400 border border-violet-500/20 mb-3">
            <span>What I Offer</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Specialized Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            High-caliber design and technical engineering tailored to turn visionary concepts into polished, revenue-generating digital products.
          </p>
        </div>

        {/* Services Grid (3D Glass Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
};

const ServiceCard: React.FC<{ service: ServiceItem; index: number }> = ({ service, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-6 h-6 text-violet-600 dark:text-violet-400" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-fuchsia-600 dark:text-fuchsia-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
      default:
        return <Code className="w-6 h-6 text-violet-600 dark:text-violet-400" />;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if ('ontouchstart' in window) return;
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotX = ((y - centerY) / centerY) * -6;
    const rotY = ((x - centerX) / centerX) * 6;
    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="perspective-1000 h-full">
      <motion.div
        ref={cardRef}
        id={`service-card-${service.id}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08, duration: 0.5 }}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
        }}
        className="group relative h-full flex flex-col justify-between p-7 rounded-3xl glass-panel border border-slate-200/90 dark:border-white/10 hover:border-violet-500/50 hover:shadow-2xl transition-all duration-300 overflow-hidden"
      >
        {/* Subtle hover gradient glow inside */}
        <div
          className={`absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br ${service.gradient} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
        />

        <div className="relative z-10">
          {/* Animated Icon Box */}
          <div className="w-14 h-14 rounded-2xl bg-black/5 dark:bg-white/5 border border-slate-200/90 dark:border-white/10 flex items-center justify-center mb-6 group-hover:-translate-y-1.5 transition-transform duration-300 shadow-sm">
            {getIcon(service.iconName)}
          </div>

          <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-2 group-hover:text-violet-700 dark:group-hover:text-violet-400 transition-colors">
            {service.title}
          </h3>

          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6 font-normal">
            {service.shortDesc}
          </p>

          {/* Key Deliverables */}
          <div className="space-y-2 pt-4 border-t border-slate-200/80 dark:border-white/5">
            {service.deliverables.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Link to Contact */}
        <div className="mt-6 pt-4 relative z-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-700 dark:text-violet-400 group-hover:translate-x-1 transition-transform"
          >
            <span>Inquire for service</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};
