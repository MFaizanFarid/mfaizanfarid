import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'godrive',
    title: 'GoDrive',
    subtitle: 'Car Rental & Fleet Management Web Platform',
    category: 'Web Development',
    description: 'A modern, high-conversion car rental and fleet booking web application with real-time availability checks, dynamic price tiering, and reservation tracking.',
    fullDescription: 'GoDrive is an end-to-end car rental platform engineered to modernize vehicle hire workflows. Built with seamless responsive layouts, interactive vehicle filtering by transmission, fuel type, and passenger capacity, alongside secure checkout confirmation.',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop',
    technologies: ['PHP', 'MySQL', 'Bootstrap 5', 'JavaScript', 'Stripe API', 'CSS3'],
    liveUrl: 'https://example.com/godrive',
    githubUrl: 'https://github.com/mfaizanfarid/godrive-car-rental',
    featured: true,
    problem: 'Traditional car rental platforms suffer from confusing multi-page reservation funnels, sluggish inventory updates, and poor mobile booking rates.',
    solution: 'Designed an intuitive single-screen vehicle discovery UI with instant faceted filtering, transparent pricing calculators, and a rapid 3-step checkout flow.',
    features: [
      'Interactive vehicle fleet catalog with instant filtering',
      'Real-time booking calendar with conflict prevention',
      'Integrated payment gateway with dynamic deposit calculation',
      'Admin fleet dashboard with vehicle status and mileage logs',
      'Automated invoice generation and SMS/Email notifications'
    ],
    challenges: 'Handling concurrent vehicle reservations during peak periods without race conditions while maintaining under 500ms server response times.',
    result: 'Achieved a 38% increase in mobile booking completions and reduced average reservation turnaround time to under 90 seconds.',
    stats: [
      { label: 'Booking Speed', value: '1.2s' },
      { label: 'Conversion Lift', value: '+38%' },
      { label: 'Fleet Handled', value: '150+ Cars' }
    ]
  },
  {
    id: 'softvault',
    title: 'SoftVault',
    subtitle: 'Verified Software Download & Distribution Hub',
    category: 'Web Development',
    description: 'A secure, virus-scanned software repository and catalog platform featuring categorized downloads, user ratings, changelogs, and fast CDN distribution.',
    fullDescription: 'SoftVault delivers a curated catalog for developers and creators to discover, inspect, and safely download desktop tools, open-source utilities, and productivity suites.',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1200&auto=format&fit=crop',
    technologies: ['PHP', 'MySQL', 'Tailwind CSS', 'JavaScript', 'AWS S3', 'REST API'],
    liveUrl: 'https://example.com/softvault',
    githubUrl: 'https://github.com/mfaizanfarid/softvault-platform',
    featured: true,
    problem: 'Free software distribution sites often contain intrusive advertising, deceptive download buttons, and unverifiable binaries.',
    solution: 'Engineered a clean, zero-bloat download platform with SHA-256 integrity verification, clean architecture, and verified license metadata.',
    features: [
      'Fast CDN mirrors with resume-supported binary downloads',
      'Checksum & SHA-256 verification display for every release',
      'Comprehensive version history and markdown changelogs',
      'Categorized search with tags and compatibility checkers',
      'Dark/Light UI mode with instant keyboard search (Ctrl+K)'
    ],
    challenges: 'Designing a robust rate-limiting and bandwidth-efficient storage pipeline to handle large installer downloads simultaneously.',
    result: 'Streamlined download experiences for over 85,000 monthly active users with zero security incidents and 99.9% uptime.',
    stats: [
      { label: 'Downloads Served', value: '250K+' },
      { label: 'Monthly Visitors', value: '85K+' },
      { label: 'Uptime', value: '99.9%' }
    ]
  },
  {
    id: 'shortlyx',
    title: 'ShortlyX',
    subtitle: 'High-Performance URL Shortener & Analytics',
    category: 'React',
    description: 'Fast, privacy-conscious URL shortening utility featuring custom alias generation, QR code export, geographic click analytics, and link protection.',
    fullDescription: 'ShortlyX transforms long URLs into clean, trackable links with sub-millisecond redirect speeds, detailed analytics on visitor referrers and devices, and password protection.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Redis', 'Chart.js'],
    liveUrl: 'https://example.com/shortlyx',
    githubUrl: 'https://github.com/mfaizanfarid/shortlyx-url-shortener',
    featured: true,
    problem: 'Marketers and developers need high-speed link shortening with transparent metrics without subscription paywalls or privacy degradation.',
    solution: 'Built a React single-page frontend connected to an ultra-fast in-memory caching backend with dynamic SVG QR code generation and real-time click telemetry.',
    features: [
      'Sub-millisecond link redirection engine',
      'Interactive geo-location and device distribution charts',
      'Custom vanity slugs and branded domain support',
      'Dynamic high-resolution SVG and PNG QR Code exporter',
      'Optional password protection and expiry timestamp'
    ],
    challenges: 'Optimizing client-side analytical charts to render tens of thousands of click events without dropping UI framerates.',
    result: 'Over 1.2M links generated with average redirect latency kept below 15ms globally.',
    stats: [
      { label: 'Redirect Speed', value: '<15ms' },
      { label: 'Total Links', value: '1.2M+' },
      { label: 'Active Daily Clicks', value: '45K+' }
    ]
  },
  {
    id: 'university-portal',
    title: 'University Portal',
    subtitle: 'Comprehensive Academic & Campus ERP System',
    category: 'Web Development',
    description: 'An integrated university management portal for students, professors, and administrative staff handling course registrations, grades, and fee payments.',
    fullDescription: 'The University Management Portal simplifies complex higher education administration. It provides role-based access for students to check GPA trends, download transcripts, and enroll in courses, while professors manage syllabi, attendance, and grading rubrics.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'Ajax', 'FPDF'],
    liveUrl: 'https://example.com/university-portal',
    githubUrl: 'https://github.com/mfaizanfarid/university-erp-portal',
    featured: false,
    problem: 'Disjointed legacy campus systems caused long physical queues for course enrollment, lost records, and delayed grade dissemination.',
    solution: 'Created a centralized web application with unified relational database schemas, automated prerequisite checking, and instant gradebook calculations.',
    features: [
      'Role-based authentication: Student, Faculty, Academic Dean, Admin',
      'Automated course registration with prerequisite validations',
      'Dynamic GPA & CGPA calculation engine with transcript PDF export',
      'Attendance tracking module with interactive percentage meters',
      'Digital notice board and assignment submission system'
    ],
    challenges: 'Enforcing strict transactional integrity across course enrollment to eliminate over-enrollment when thousands of students register at the same second.',
    result: 'Digitized academic operations for 12,000+ enrolled students, eliminating paper enrollment entirely.',
    stats: [
      { label: 'Campus Users', value: '12K+' },
      { label: 'Departments', value: '18' },
      { label: 'Queue Reduction', value: '95%' }
    ]
  },
  {
    id: 'shoppos-pro',
    title: 'ShopPOS Pro',
    subtitle: 'Cloud-Connected Retail Point of Sale & Inventory',
    category: 'React',
    description: 'An offline-first retail Point of Sale system featuring instant barcode scanning, receipt printing, inventory reorder alerts, and daily sales dashboards.',
    fullDescription: 'ShopPOS Pro is a modern point-of-sale solution optimized for retail boutiques and grocery outlets. Featuring an ultra-responsive keyboard-friendly interface, multi-tender transactions, and automatic offline fallback syncing.',
    image: 'https://images.unsplash.com/photo-1556742049-0a67e5572293?q=80&w=1200&auto=format&fit=crop',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'IndexedDB', 'Supabase', 'Web Bluetooth'],
    liveUrl: 'https://example.com/shoppos-pro',
    githubUrl: 'https://github.com/mfaizanfarid/shoppos-retail-pos',
    featured: true,
    problem: 'Retailers face lost sales and customer frustration when internet interruptions bring traditional cloud POS software to a dead halt.',
    solution: 'Implemented an offline-first architecture utilizing browser IndexedDB with seamless background synchronization once network connectivity restores.',
    features: [
      'Split-second keyboard shortcuts & barcode scanner integration',
      'Offline checkout capability with auto-sync conflict resolution',
      'Thermal receipt printer integration via Web Serial & Bluetooth',
      'Stock threshold alerts with automated purchase order drafts',
      'Daily profit/margin analytics and cash drawer reconciliation'
    ],
    challenges: 'Designing an intuitive touch and keyboard hybrid UX that cashiers can master in under 5 minutes without extensive training.',
    result: 'Reduced checkout transaction time by 42% and safeguarded store operations through 100% offline uptime.',
    stats: [
      { label: 'Transaction Time', value: '3.4s' },
      { label: 'Offline Resiliency', value: '100%' },
      { label: 'Inventory Items', value: '10K+' }
    ]
  },
  {
    id: 'chat-application',
    title: 'Real-time Social Chat',
    subtitle: 'Low-Latency Collaborative Messaging Suite',
    category: 'React',
    description: 'Modern messaging application with channels, direct messaging, typing indicators, rich media attachments, reaction emojis, and voice notes.',
    fullDescription: 'A sleek, real-time collaboration application engineered for modern developer communities. Includes thread conversations, markdown code snippet highlighting, encrypted direct messages, and voice note playback.',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1200&auto=format&fit=crop',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'WebSockets', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://example.com/chat-app',
    githubUrl: 'https://github.com/mfaizanfarid/realtime-chat-app',
    featured: false,
    problem: 'Generic chat apps are either heavy, bloated with slow search, or lack native syntax highlighting for technical collaboration.',
    solution: 'Architected a lightweight React UI powered by WebSockets with instant optimistic UI message dispatching and fuzzy message search.',
    features: [
      'Sub-50ms message delivery via resilient WebSocket channels',
      'Live typing indicators, online presence, and read receipts',
      'Code syntax highlighting with copy-to-clipboard functionality',
      'Voice memo audio waveform recorder and player',
      'Custom theme personalization with dark/light aesthetics'
    ],
    challenges: 'Maintaining smooth 60fps scrolling on chat feeds containing thousands of historical messages with media embeds.',
    result: 'Tested with 500 concurrent connections per room with zero dropped message frames.',
    stats: [
      { label: 'Latency', value: '<40ms' },
      { label: 'Max Rooms', value: 'Unlimited' },
      { label: 'Concurrent Users', value: '5K+' }
    ]
  },
  {
    id: 'hotel-website',
    title: 'Aura Luxury Hotel',
    subtitle: 'Boutique Hotel Booking Experience & Virtual Tour',
    category: 'UI/UX',
    description: 'A luxurious hospitality website featuring immersive room visualizers, interactive amenity showcases, seasonal package booking, and concierge chat.',
    fullDescription: 'Aura Luxury Hotel blends editorial aesthetics with friction-free hospitality reservation. Tailored with smooth scroll interactions, 3D room floorplan previews, and bespoke dining reservation schedules.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
    technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Figma', 'UI/UX', 'Three.js'],
    liveUrl: 'https://example.com/aura-hotel',
    githubUrl: 'https://github.com/mfaizanfarid/luxury-hotel-experience',
    featured: false,
    problem: 'Hospitality websites often look generic, fail to convey luxury atmosphere, and have clunky room selection calendars.',
    solution: 'Designed high-end editorial typography paired with interactive room comparison sliders, high-fidelity photo galleries, and clear pricing breakdowns.',
    features: [
      'Editorial luxury aesthetic with responsive high-res visual assets',
      'Interactive date range picker with seasonal rate calculators',
      'Room amenity comparison grid with 360 virtual room previews',
      'Dining and wellness spa package add-on bundle options',
      'Multilingual and multi-currency currency switcher'
    ],
    challenges: 'Balancing rich high-resolution photography and 3D visual assets while maintaining under 1.5s First Contentful Paint.',
    result: 'Delivered an award-winning design concept scoring 98 on Google Lighthouse performance and accessibility audits.',
    stats: [
      { label: 'Lighthouse Score', value: '98/100' },
      { label: 'Direct Inquiries', value: '+54%' },
      { label: 'Avg Session Time', value: '4m 12s' }
    ]
  },
  {
    id: 'gym-website',
    title: 'Apex Fitness & Gym',
    subtitle: 'Dynamic Fitness Club Portal & Class Scheduler',
    category: 'Design',
    description: 'High-energy fitness and athletic club website featuring live class timetables, trainer profiles, interactive membership calculators, and workout trackers.',
    fullDescription: 'Apex Fitness combines high-contrast athletic branding with practical class booking tools. Members can explore trainer credentials, filter classes by intensity and discipline (HIIT, Yoga, Strength), and purchase memberships seamlessly.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    technologies: ['React', 'Tailwind CSS', 'Figma', 'Photoshop', 'Illustrator', 'Motion'],
    liveUrl: 'https://example.com/apex-fitness',
    githubUrl: 'https://github.com/mfaizanfarid/apex-fitness-portal',
    featured: false,
    problem: 'Gym websites frequently have confusing static PDF schedules that are unreadable on mobile phones, causing low class attendance.',
    solution: 'Developed an interactive weekly class schedule with filterable tags, coach bios, and one-click spot booking.',
    features: [
      'Dynamic interactive weekly class timetable with live capacity indicators',
      'Trainer showcase with specialty badges and member testimonials',
      'Interactive membership tier comparison with monthly/annual toggle',
      'Integrated BMI and caloric expenditure interactive calculator',
      'Custom vector iconography and branded athletic marketing assets'
    ],
    challenges: 'Designing a visual language that feels energetic and motivating without descending into overwhelming dark-neon gaming tropes.',
    result: 'Over 650 gym members migrated to online class scheduling within the first 30 days of deployment.',
    stats: [
      { label: 'Class Booking', value: '+72%' },
      { label: 'Active Members', value: '650+' },
      { label: 'Mobile Traffic', value: '84%' }
    ]
  }
];
