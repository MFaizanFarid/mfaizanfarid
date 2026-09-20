import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Printer, GraduationCap, Briefcase, Code, FileText, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadCV = () => {
    // Generate a standalone, styled, printable HTML resume file
    const resumeHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>M_Faizan_Farid_Resume</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      line-height: 1.6;
      color: #1e293b;
      background: #ffffff;
      max-width: 820px;
      margin: 40px auto;
      padding: 0 32px 48px;
    }
    header {
      border-bottom: 2px solid #7c3aed;
      padding-bottom: 20px;
      margin-bottom: 24px;
    }
    h1 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 32px;
      color: #0f172a;
      letter-spacing: -0.5px;
    }
    .role {
      font-size: 16px;
      font-weight: 600;
      color: #6d28d9;
      margin-top: 4px;
    }
    .contact-row {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin-top: 12px;
      font-size: 13px;
      color: #475569;
    }
    .section-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 15px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      color: #6d28d9;
      margin-top: 28px;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 6px;
    }
    p { font-size: 14px; color: #334155; margin-bottom: 10px; }
    .card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 14px 18px;
      margin-bottom: 14px;
    }
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-weight: 700;
      font-size: 15px;
      color: #0f172a;
    }
    .card-sub {
      font-size: 13px;
      color: #64748b;
      margin-bottom: 6px;
    }
    ul {
      margin-left: 20px;
      margin-top: 6px;
      font-size: 13.5px;
      color: #334155;
    }
    li { margin-bottom: 4px; }
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }
    .skill-box {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 10px 14px;
      font-size: 13px;
    }
    .skill-box strong { color: #0f172a; display: block; margin-bottom: 2px; }
    @media print {
      body { margin: 0; padding: 16px; }
      .no-print { display: none; }
    }
  </style>
</head>
<body>
  <header>
    <h1>M. Faizan Farid</h1>
    <div class="role">Web Developer • UI/UX Designer • Computer Science Student</div>
    <div class="contact-row">
      <span>📧 faizan.farid.dev@gmail.com</span>
      <span>🌐 portfolio: mfaizanfarid.dev</span>
      <span>🔗 github.com/mfaizanfarid</span>
      <span>💼 linkedin.com/in/mfaizanfarid</span>
      <span>📍 Worldwide (Remote / On-site)</span>
    </div>
  </header>

  <div class="section-title">Executive Profile</div>
  <p>Detail-oriented Computer Science undergraduate and accomplished Full-Stack Web Developer & Designer with 3+ years of practical project delivery experience. Proven record delivering responsive web portals, 3D interactive graphics, and secure relational database architectures. Passionate about marrying algorithmic rigor with refined human-centered UI/UX design.</p>

  <div class="section-title">Education</div>
  <div class="card">
    <div class="card-header">
      <span>Bachelor of Science in Computer Science (BS CS)</span>
      <span style="color: #6d28d9; font-size: 13px;">2022 — Present (Graduation: 2026)</span>
    </div>
    <div class="card-sub">Department of Computer Science</div>
    <p style="margin-bottom: 0;">Key Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Web Engineering, Software Architecture, Human-Computer Interaction.</p>
  </div>

  <div class="section-title">Work & Project Experience</div>
  <div class="card">
    <div class="card-header">
      <span>Lead Web Developer & UI Designer</span>
      <span style="color: #059669; font-size: 13px;">2023 — Present</span>
    </div>
    <div class="card-sub">Freelance & Client Engagements • Remote</div>
    <ul>
      <li>Architected and shipped GoDrive, SoftVault, ShortlyX, and ShopPOS Pro handling 100K+ monthly requests.</li>
      <li>Engineered interactive 3D WebGL user interfaces using Three.js and modern React frameworks.</li>
      <li>Built responsive, accessible layouts with under 1.5s First Contentful Paint.</li>
    </ul>
  </div>

  <div class="card">
    <div class="card-header">
      <span>Junior Frontend Developer & Graphic Designer</span>
      <span style="color: #64748b; font-size: 13px;">2021 — 2023</span>
    </div>
    <div class="card-sub">Creative Digital Studio • Hybrid</div>
    <ul>
      <li>Designed brand identity kits and custom vector illustrations in Adobe Illustrator.</li>
      <li>Translated client wireframes from Figma into modern responsive HTML, CSS, and JavaScript.</li>
    </ul>
  </div>

  <div class="section-title">Technical Competencies</div>
  <div class="skills-grid">
    <div class="skill-box">
      <strong>Languages:</strong>
      <span>JavaScript, TypeScript, PHP, SQL, C++, HTML5/CSS3</span>
    </div>
    <div class="skill-box">
      <strong>Frameworks:</strong>
      <span>React, Vite, Next.js, Tailwind CSS, Bootstrap</span>
    </div>
    <div class="skill-box">
      <strong>3D & Graphic Design:</strong>
      <span>Three.js, WebGL, Figma, Adobe Photoshop, Adobe Illustrator</span>
    </div>
    <div class="skill-box">
      <strong>Databases & Tools:</strong>
      <span>MySQL, Supabase, Git, GitHub, Node.js, Postman</span>
    </div>
  </div>
</body>
</html>`;

    const blob = new Blob([resumeHTML], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'M_Faizan_Farid_Resume.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const handleDownloadTXT = () => {
    const resumeTXT = `=====================================================
M. FAIZAN FARID — CURRICULUM VITAE
Web Developer • UI/UX Designer • Computer Science Student
=====================================================

CONTACT INFORMATION:
- Email: faizan.farid.dev@gmail.com
- GitHub: https://github.com/mfaizanfarid
- LinkedIn: https://linkedin.com/in/mfaizanfarid
- Location: Available Worldwide (Remote / On-site)

EXECUTIVE PROFILE:
Detail-oriented Computer Science undergraduate and accomplished Full-Stack 
Web Developer & Designer with 3+ years of practical project delivery 
experience. Proven record delivering responsive web portals, 3D interactive 
graphics, and secure relational database architectures.

EDUCATION:
- Bachelor of Science in Computer Science (BS CS)
  Department of Computer Science (2022 — Present, Grad: 2026)
  Key Coursework: Data Structures & Algorithms, OOP, Database Systems, 
  Web Engineering, Software Architecture, Human-Computer Interaction.

EXPERIENCE:
- Lead Web Developer & UI Designer | Freelance (2023 — Present)
  * Architected and shipped GoDrive, SoftVault, ShortlyX, and ShopPOS Pro
  * Built interactive 3D WebGL user interfaces using Three.js and React
  * Engineered responsive, accessible layouts with under 1.5s FCP

- Junior Frontend Developer & Graphic Designer | Digital Studio (2021 — 2023)
  * Designed brand identity kits and custom vector illustrations in Illustrator
  * Translated client wireframes from Figma into modern HTML/CSS/JS

TECHNICAL COMPETENCIES:
- Languages: JavaScript, TypeScript, PHP, SQL, C++, HTML5/CSS3
- Frameworks: React, Vite, Next.js, Tailwind CSS, Bootstrap
- 3D & Design: Three.js, WebGL, Figma, Photoshop, Illustrator
- Databases & Tools: MySQL, Supabase, Git, GitHub, Node.js, Postman
=====================================================`;

    const blob = new Blob([resumeTXT], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'M_Faizan_Farid_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  return (
    <AnimatePresence>
      <div
        id="resume-modal-overlay"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#0d111d] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white shadow-2xl p-6 sm:p-10 no-scrollbar"
        >
          {/* Header Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 dark:border-white/10 pb-6 mb-6 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-violet-600 dark:text-violet-400 font-bold">
                Curriculum Vitae
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold mt-1 text-slate-900 dark:text-white">
                M. Faizan Farid
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Web Developer • UI/UX Designer • Computer Science Student
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-violet-600 hover:bg-violet-500 text-white shadow-md hover:shadow-lg transition-all"
                title="Download Resume HTML / Printable Document"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>

              <button
                onClick={handleDownloadTXT}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-700 dark:text-slate-200 transition-colors"
                title="Download Plain Text Format"
              >
                <FileText className="w-4 h-4" />
                <span>TXT</span>
              </button>

              <button
                onClick={handlePrint}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-700 dark:text-slate-200 transition-colors"
                title="Print or Save as PDF"
              >
                <Printer className="w-4 h-4" />
                <span>Print</span>
              </button>

              <button
                onClick={onClose}
                aria-label="Close CV preview"
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors ml-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Download prompt banner */}
          <div className="mb-6 p-3.5 rounded-2xl bg-violet-50 dark:bg-violet-950/30 border border-violet-200 dark:border-violet-500/20 flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-violet-800 dark:text-violet-300">
              <CheckCircle2 className="w-4 h-4 text-violet-600 dark:text-violet-400 shrink-0" />
              <span>
                Ready to save? Click <strong>Download CV</strong> to save a complete offline copy to your device.
              </span>
            </div>
          </div>

          {/* CV Body */}
          <div className="space-y-6 text-sm">
            {/* Summary */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-violet-700 dark:text-violet-400 mb-2">
                Executive Profile
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                Detail-oriented Computer Science undergraduate and accomplished Full-Stack Web Developer & Designer with 3+ years of practical project delivery experience. Proven record delivering responsive web portals, 3D interactive graphics, and secure relational database architectures. Passionate about marrying algorithmic rigor with refined human-centered UI/UX design.
              </p>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-violet-700 dark:text-violet-400 mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Academic Background
              </h3>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">
                      Bachelor of Science in Computer Science (BS CS)
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Department of Computer Science • Expected Graduation: 2026
                    </p>
                  </div>
                  <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-violet-500/10 text-violet-700 dark:text-violet-400">
                    2022 — Present
                  </span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 mt-2">
                  Key Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Web Engineering, Software Architecture, Human-Computer Interaction.
                </p>
              </div>
            </div>

            {/* Work & Project Experience */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-violet-700 dark:text-violet-400 mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Professional Experience
              </h3>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">
                        Lead Web Developer & UI Designer
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Freelance & Client Engagements • Remote
                      </p>
                    </div>
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-400">
                      2023 — Present
                    </span>
                  </div>
                  <ul className="mt-2 space-y-1 text-xs text-slate-700 dark:text-slate-300 list-disc list-inside">
                    <li>Developed GoDrive, SoftVault, ShortlyX, and ShopPOS Pro handling 100K+ monthly requests.</li>
                    <li>Built interactive 3D WebGL user interfaces using Three.js and modern React frameworks.</li>
                    <li>Engineered responsive, accessible layouts with under 1.5s First Contentful Paint.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">
                        Junior Frontend Developer & Graphic Designer
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Creative Digital Studio • Hybrid
                      </p>
                    </div>
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-slate-300">
                      2021 — 2023
                    </span>
                  </div>
                  <ul className="mt-2 space-y-1 text-xs text-slate-700 dark:text-slate-300 list-disc list-inside">
                    <li>Designed brand identity kits and custom vector illustrations in Adobe Illustrator.</li>
                    <li>Translated client wireframes from Figma into modern responsive HTML, CSS, and JavaScript.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Core Competencies */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-violet-700 dark:text-violet-400 mb-3 flex items-center gap-2">
                <Code className="w-4 h-4" />
                Technical Competencies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                  <div className="font-bold text-slate-900 dark:text-slate-200 mb-1">Languages</div>
                  <div className="text-slate-600 dark:text-slate-400 font-mono">JavaScript, TypeScript, PHP, SQL, C++, HTML5/CSS3</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                  <div className="font-bold text-slate-900 dark:text-slate-200 mb-1">Frameworks</div>
                  <div className="text-slate-600 dark:text-slate-400 font-mono">React, Vite, Next.js, Tailwind CSS, Bootstrap</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                  <div className="font-bold text-slate-900 dark:text-slate-200 mb-1">3D & Graphic</div>
                  <div className="text-slate-600 dark:text-slate-400 font-mono">Three.js, WebGL, Figma, Photoshop, Illustrator</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                  <div className="font-bold text-slate-900 dark:text-slate-200 mb-1">Tools & DB</div>
                  <div className="text-slate-600 dark:text-slate-400 font-mono">MySQL, Supabase, Git, GitHub, Node.js, Postman</div>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between text-xs text-slate-600 dark:text-slate-400">
              <span>Location: Available Worldwide (Remote)</span>
              <span>Portfolio: mfaizanfarid.dev</span>
              <span>Available for Full-time, Internship & Freelance</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
