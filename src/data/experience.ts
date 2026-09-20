import { ExperienceItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    period: '2023 — Present',
    role: 'Lead Web Developer & UI Designer',
    organization: 'Freelance & Client Projects',
    location: 'Remote',
    type: 'work',
    description: 'Spearheading modern frontend engineering and UI/UX design for startups, academic organizations, and local business clients.',
    achievements: [
      'Delivered 25+ client websites with 100% on-time project completion rate',
      'Engineered responsive React and PHP portals with average load speeds under 1.2 seconds',
      'Designed bespoke design systems in Figma that reduced client revision rounds by 40%'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'PHP', 'MySQL', 'Figma', 'Three.js']
  },
  {
    id: 'exp-2',
    period: '2022 — Present',
    role: 'BS in Computer Science (Student)',
    organization: 'Department of Computer Science',
    location: 'University Campus',
    type: 'education',
    description: 'Pursuing a Bachelor of Science in Computer Science with a strong focus on software engineering, algorithms, database systems, and human-computer interaction.',
    achievements: [
      'Maintained top-tier academic standing with coursework in Data Structures, OOP, Web Engineering & Database Systems',
      'Developed the Campus University Portal case study and Point of Sale management system for capstone coursework',
      'Conducted peer mentoring workshops on modern frontend development with React and Git workflows'
    ],
    technologies: ['C++', 'Java', 'PHP', 'JavaScript', 'Database Architecture', 'Software Design Patterns']
  },
  {
    id: 'exp-3',
    period: '2021 — 2023',
    role: 'Junior Frontend Developer & Graphic Designer',
    organization: 'Digital Agency / Creative Studio',
    location: 'Hybrid',
    type: 'work',
    description: 'Created branding kits, vector graphics, responsive landing pages, and interactive marketing websites for commercial clients.',
    achievements: [
      'Authored brand identity kits and marketing assets for over 15 regional brands',
      'Converted complex Adobe XD and Figma wireframes into clean, accessible HTML/CSS/JS code',
      'Accelerated mobile responsiveness audits across legacy client websites'
    ],
    technologies: ['HTML5/CSS3', 'JavaScript', 'Bootstrap', 'Adobe Illustrator', 'Photoshop', 'Git']
  }
];
