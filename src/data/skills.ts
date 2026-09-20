import { SkillItem } from '../types';

export const skillsData: SkillItem[] = [
  // Frontend
  { name: 'React / Next.js', level: 92, icon: 'Code2', category: 'Frontend', highlight: 'Components & Hooks' },
  { name: 'JavaScript (ES6+)', level: 94, icon: 'FileCode2', category: 'Frontend', highlight: 'Async, DOM & APIs' },
  { name: 'TypeScript', level: 88, icon: 'ShieldCheck', category: 'Frontend', highlight: 'Type Systems' },
  { name: 'Tailwind CSS', level: 95, icon: 'Palette', category: 'Frontend', highlight: 'Utility First UI' },
  { name: 'HTML5 & Modern CSS3', level: 96, icon: 'Layout', category: 'Frontend', highlight: 'Semantic & Grid' },
  { name: 'Three.js / WebGL', level: 82, icon: 'Box', category: 'Frontend', highlight: '3D Scenes & Shaders' },
  { name: 'Vite & Build Tools', level: 90, icon: 'Zap', category: 'Frontend', highlight: 'Fast Bundling' },
  { name: 'Bootstrap', level: 90, icon: 'Columns', category: 'Frontend', highlight: 'Grid & Utility' },

  // Backend
  { name: 'PHP', level: 88, icon: 'Server', category: 'Backend', highlight: 'OOP & MVC Architecture' },
  { name: 'MySQL', level: 86, icon: 'Database', category: 'Backend', highlight: 'Relational DB Design' },
  { name: 'Supabase', level: 85, icon: 'Layers', category: 'Backend', highlight: 'PostgreSQL & Realtime' },
  { name: 'Node.js & Express', level: 84, icon: 'Terminal', category: 'Backend', highlight: 'RESTful API Services' },
  { name: 'REST APIs & WebSockets', level: 89, icon: 'Network', category: 'Backend', highlight: 'Realtime Data Flow' },

  // Design
  { name: 'Figma', level: 94, icon: 'PenTool', category: 'Design', highlight: 'Wireframes & UI Systems' },
  { name: 'UI / UX Design', level: 92, icon: 'Sparkles', category: 'Design', highlight: 'Human Centered UX' },
  { name: 'Adobe Photoshop', level: 89, icon: 'Image', category: 'Design', highlight: 'Photo Retouching & Assets' },
  { name: 'Adobe Illustrator', level: 87, icon: 'Feather', category: 'Design', highlight: 'Vector Art & Logos' },
  { name: 'Responsive Layouts', level: 96, icon: 'Smartphone', category: 'Design', highlight: 'Mobile First Precision' },

  // Tools & Workflow
  { name: 'Git & Version Control', level: 92, icon: 'GitBranch', category: 'Tools', highlight: 'Branching & Gitflow' },
  { name: 'GitHub', level: 93, icon: 'Github', category: 'Tools', highlight: 'CI/CD & Collaboration' },
  { name: 'VS Code & DevTools', level: 95, icon: 'Cpu', category: 'Tools', highlight: 'Profiling & Debugging' },
  { name: 'MS Office & Docs', level: 90, icon: 'FileSpreadsheet', category: 'Tools', highlight: 'Reports & Presentations' },
  { name: 'Postman', level: 88, icon: 'Radio', category: 'Tools', highlight: 'API Testing & Contracts' }
];

export const skillCategories = ['All', 'Frontend', 'Backend', 'Design', 'Tools'] as const;
