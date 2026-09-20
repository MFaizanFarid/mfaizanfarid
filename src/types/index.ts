export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Web Development' | 'React' | 'PHP' | 'UI/UX' | 'Design';
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  problem: string;
  solution: string;
  features: string[];
  challenges: string;
  result: string;
  stats?: { label: string; value: string }[];
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  icon: string;
  category: 'Frontend' | 'Backend' | 'Design' | 'Tools';
  highlight?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  gradient: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  type: 'work' | 'education' | 'leadership';
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  project: string;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}
