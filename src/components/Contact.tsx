import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { Contact3DScene } from './Contact3DScene';

interface ContactProps {
  onNotify: (type: 'success' | 'error' | 'info', msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onNotify }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (
    !formData.name.trim() ||
    !formData.email.trim() ||
    !formData.message.trim()
  ) {
    onNotify(
      'error',
      'Please fill in all required fields before submitting.'
    );
    return;
  }

  setIsSubmitting(true);
  setIsSuccess(false);

  try {
    await emailjs.send(
      'service_c6ahrsp',
      'template_xhaxo9b',
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'Portfolio Inquiry',
        message: formData.message,
        to_email: 'mfaizanfarid786@gmail.com',
      },
      {
        publicKey: '9qe6esai-6RWuRWeU',
      }
    );

    setIsSubmitting(false);
    setIsSuccess(true);

    onNotify(
      'success',
      'Message sent successfully! I will respond within 24 hours.'
    );

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    setTimeout(() => {
      setIsSuccess(false);
    }, 4000);
  } catch (error) {
    console.error('Email sending failed:', error);

    setIsSubmitting(false);
    setIsSuccess(false);

    onNotify(
      'error',
      'Message could not be sent. Please try again.'
    );
  }
};

  const contactCards = [
    {
      icon: <Mail className="w-5 h-5 text-violet-600 dark:text-violet-400" />,
      label: 'Email Address',
      value: 'mfaizanfarid786@gmail.com',
      action: 'mailto:mfaizanfarid786@gmail.com',
    },
    {
      icon: <Phone className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
      label: 'Phone / WhatsApp',
      value: '+92 324 4304350',
      action: 'tel:+923244304350',
    },
    {
      icon: <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      label: 'Primary Location',
      value: 'Bahawalpur / Remote (Worldwide)',
      action: '#',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-violet-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-700 dark:text-violet-400 border border-violet-500/20 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Initiate Contact</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Collaborate
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            Have a project in mind, an internship opportunity, or seeking custom 3D web architecture? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Contact Info & 3D Interactive Object */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl glass-panel-glow border border-violet-500/30">
            <div>
              <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-2">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-6">
                Direct lines of communication. Always open to discussing new contracts, creative ideas, or engineering challenges.
              </p>

              {/* Direct Cards */}
              <div className="space-y-3 mb-6">
                {contactCards.map((card, idx) => (
                  <a
                    key={idx}
                    href={card.action}
                    target={card.action.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3 rounded-2xl glass-panel border border-slate-200/90 dark:border-white/5 hover:border-violet-500/40 transition-all group cursor-pointer"
                  >
                    <div className="p-2.5 rounded-xl bg-black/5 dark:bg-white/5 group-hover:scale-105 transition-transform">
                      {card.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                        {card.label}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-200 truncate group-hover:text-violet-700 dark:group-hover:text-violet-400 transition-colors">
                        {card.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Interactive 3D Canvas beside form */}
            <div className="mt-4 pt-4 border-t border-slate-200/80 dark:border-white/5 text-center">
              <Contact3DScene />
              <span className="text-[10px] font-mono text-slate-600 dark:text-slate-400 font-medium tracking-tight block mt-1">
                WebGL Ambient Geometry • 60 FPS
              </span>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-10 rounded-3xl glass-panel border border-slate-200/90 dark:border-white/10 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-bold text-slate-900 dark:text-slate-200 mb-2"
                  >
                    Your Full Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. M Faizan Farid"
                    className="w-full px-4 py-3 rounded-xl text-sm glass-panel border border-slate-300 dark:border-white/10 focus:outline-none focus:border-violet-500 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-bold text-slate-900 dark:text-slate-200 mb-2"
                  >
                    Your Email Address *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. mfaizanfarid786@gmail.com"
                    className="w-full px-4 py-3 rounded-xl text-sm glass-panel border border-slate-300 dark:border-white/10 focus:outline-none focus:border-violet-500 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-bold text-slate-900 dark:text-slate-200 mb-2"
                >
                  Subject *
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Web Development Inquiry / Project Brief"
                  className="w-full px-4 py-3 rounded-xl text-sm glass-panel border border-slate-300 dark:border-white/10 focus:outline-none focus:border-violet-500 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-bold text-slate-900 dark:text-slate-200 mb-2"
                >
                  Your Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project goals, timelines, and technical requirements..."
                  className="w-full px-4 py-3 rounded-xl text-sm glass-panel border border-slate-300 dark:border-white/10 focus:outline-none focus:border-violet-500 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl text-sm font-semibold bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-600/30 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-white" />
                      <span>Message Sent Successfully!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Direct Message</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-center">
                <span className="text-[11px] text-slate-600 dark:text-slate-400 flex items-center justify-center gap-1.5 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                  <span>Privacy guarantee: Your contact credentials are never shared or sold.</span>
                </span>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
