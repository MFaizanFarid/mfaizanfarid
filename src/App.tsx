import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';
import { CustomCursor } from './components/CustomCursor';
import { ResumeModal } from './components/ResumeModal';
import { Toast } from './components/Toast';
import { ToastMessage } from './types';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Initialize theme from storage or default to dark mode for 2026 3D aesthetic
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      if (!saved) localStorage.setItem('theme', 'dark');
    }
  }, []);

  const addToast = (type: 'success' | 'error' | 'info', message: string) => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, type, message }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text)] selection:bg-violet-500/30 selection:text-violet-200 relative">
      {/* Interactive Custom Cursor for Desktop */}
      <CustomCursor />

      {/* Initial 3D Portfolio Loading Screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Floating Responsive Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact onNotify={addToast} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Floating Back To Top Button */}
      <BackToTop />

      {/* Printable / Downloadable CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Toast Notification Container */}
      <Toast toasts={toasts} onClose={removeToast} />
    </div>
  );
}
