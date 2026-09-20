import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    shortDesc: 'Build modern, responsive, and scalable web applications with clean, production-ready code.',
    fullDesc: 'End-to-end full-stack web engineering using React, TypeScript, PHP, and modern frameworks. Focusing on blazingly fast load times, modular component design, clean APIs, and secure database architecture.',
    iconName: 'Code',
    deliverables: [
      'Single Page Applications (SPAs) & Portals',
      'API Integrations & Custom Backend Logic',
      'Database Modeling & Secure Storage',
      'SEO Architecture & Core Web Vitals Optimization'
    ],
    gradient: 'from-violet-500/20 to-purple-500/20'
  },
  {
    id: 'web-design',
    title: 'Web Design & UI/UX',
    shortDesc: 'Create intuitive, engaging interfaces with strong visual hierarchy, typography, and UX strategy.',
    fullDesc: 'User-centered design tailored to guide visitors through friction-free user journeys. From wireframing in Figma to interactive prototypes, design token systems, and design-to-code implementation.',
    iconName: 'Layout',
    deliverables: [
      'Interactive High-Fidelity Figma Prototypes',
      'Design Systems, Colors & Typography Tokens',
      'UX Flow Audits & Information Architecture',
      'Micro-Interactions & Animation Storyboarding'
    ],
    gradient: 'from-cyan-500/20 to-blue-500/20'
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design & Branding',
    shortDesc: 'Create professional visual identities, logos, marketing graphics, and custom digital vector assets.',
    fullDesc: 'Distilling brand essence into memorable visual identities. Utilizing Adobe Illustrator and Photoshop to produce high-impact vector artwork, brand guidelines, social media collateral, and marketing graphics.',
    iconName: 'Palette',
    deliverables: [
      'Brand Identity, Logo Marks & Guidelines',
      'Vector Illustrations & Custom Icon Sets',
      'Marketing Collateral & Social Media Banners',
      'Print Media, Business Cards & Brochures'
    ],
    gradient: 'from-fuchsia-500/20 to-pink-500/20'
  },
  {
    id: 'responsive-design',
    title: 'Responsive & Adaptive Design',
    shortDesc: 'Create websites that adapt effortlessly across all screen sizes, from mobile phones to 4K displays.',
    fullDesc: 'Every breakpoint is thoughtfully calibrated. Employing mobile-first responsive design, fluid typography, touch-friendly interactions (minimum 44px targets), and dynamic layout reflows.',
    iconName: 'Smartphone',
    deliverables: [
      'Mobile-First Layouts & Touch-Optimized UX',
      'Adaptive Breakpoint Tuning (320px to 4K+)',
      'Cross-Browser & Multi-Device QA Testing',
      'High-DPI / Retina Screen Asset Optimization'
    ],
    gradient: 'from-emerald-500/20 to-teal-500/20'
  },
  {
    id: 'website-maintenance',
    title: 'Website Maintenance & Speed',
    shortDesc: 'Improve, update, optimize, and maintain existing websites for security, stability, and speed.',
    fullDesc: 'Continuous web care and optimization. Upgrading dependencies, fixing bugs, auditing security vulnerabilities, and speeding up PageSpeed scores with asset compression and caching strategies.',
    iconName: 'Wrench',
    deliverables: [
      'Performance Auditing & Core Web Vitals Tuning',
      'Security Patching, SSL & Dependency Updates',
      'Bug Remediation & Legacy Code Modernization',
      'Continuous Cloud Backup & Uptime Monitoring'
    ],
    gradient: 'from-amber-500/20 to-orange-500/20'
  }
];
