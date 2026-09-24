import React, { useState, useEffect } from 'react';
import {
  X,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Send,
  Building,
  Globe,
  Phone,
  Mail,
  User,
  ShieldCheck,
} from 'lucide-react';
import { AuditFormData } from '../types';

interface FreeAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FreeAuditModal: React.FC<FreeAuditModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<AuditFormData>({
    name: '',
    businessName: '',
    websiteOrHandle: '',
    phone: '',
    email: '',
    primaryGoal: 'Scale E-Commerce ROAS',
    monthlyBudget: '₹25,000 – ₹50,000',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof AuditFormData, string>>>({});

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof AuditFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleNextStep = () => {
    if (step === 1) {
      const stepErrors: Partial<Record<keyof AuditFormData, string>> = {};
      if (!formData.businessName.trim()) stepErrors.businessName = 'Please enter your business name';
      if (!formData.websiteOrHandle.trim()) stepErrors.websiteOrHandle = 'Please enter your website or IG handle';
      if (Object.keys(stepErrors).length > 0) {
        setErrors(stepErrors);
        return;
      }
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const finalErrors: Partial<Record<keyof AuditFormData, string>> = {};
    if (!formData.name.trim()) finalErrors.name = 'Please enter your full name';
    if (!formData.phone.trim()) finalErrors.phone = 'Please provide your phone or WhatsApp number';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      finalErrors.email = 'Please provide a valid email';
    }

    if (Object.keys(finalErrors).length > 0) {
      setErrors(finalErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch('https://formsubmit.co/ajax/asha.ankoliya02@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `FREE 15-MIN AUDIT REQUEST: ${formData.businessName} (${formData.name})`,
          businessName: formData.businessName,
          websiteOrHandle: formData.websiteOrHandle,
          primaryGoal: formData.primaryGoal,
          monthlyBudget: formData.monthlyBudget,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          timestamp: new Date().toLocaleString(),
        }),
      });
    } catch (err) {
      console.warn('Audit form submission notice:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const customWhatsAppUrl = `https://wa.me/919909992573?text=${encodeURIComponent(
    `Hi Scaleup Marketing, I requested a Free 15-Min Growth Audit for my brand: ${formData.businessName} (${formData.websiteOrHandle}). Primary goal: ${formData.primaryGoal}. My name is ${formData.name}.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-[#0F2D23] border border-[#22C55E]/40 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 overflow-hidden my-auto animate-fadeIn">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#22C55E]/20 rounded-bl-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#86EFAC] text-[11px] font-semibold tracking-wider uppercase mb-2.5">
                <Sparkles className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>100% Free • No Obligation</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Claim Your Free 15-Min Digital Audit
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                We&apos;ll analyze your ads, social feed, and competitors to give you 3 actionable growth recommendations.
              </p>
            </div>

            {/* Progress Stepper */}
            <div className="flex items-center gap-2 mb-6">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                    s <= step ? 'bg-[#22C55E]' : 'bg-white/10'
                  }`}
                />
              ))}
            </div>

            {/* Step 1: Business Info */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Business / Brand Name *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="e.g. Aura Aesthetics or Luxe Living"
                      className="w-full bg-black/40 border border-white/15 focus:border-[#22C55E] rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none"
                    />
                  </div>
                  {errors.businessName && (
                    <p className="text-xs text-rose-400 mt-1">{errors.businessName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Website or Instagram Handle *
                  </label>
                  <div className="relative">
                    <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="websiteOrHandle"
                      value={formData.websiteOrHandle}
                      onChange={handleChange}
                      placeholder="e.g. @yourbrand or yourwebsite.com"
                      className="w-full bg-black/40 border border-white/15 focus:border-[#22C55E] rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none"
                    />
                  </div>
                  {errors.websiteOrHandle && (
                    <p className="text-xs text-rose-400 mt-1">{errors.websiteOrHandle}</p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleNextStep}
                  className="w-full mt-2 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm bg-[#22C55E] text-[#0F2D23] hover:bg-[#84CC16] transition-all cursor-pointer shadow-lg shadow-[#22C55E]/20"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Step 2: Goal & Budget */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Primary Growth Objective *
                  </label>
                  <select
                    name="primaryGoal"
                    value={formData.primaryGoal}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/15 focus:border-[#22C55E] rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                  >
                    <option value="Scale E-Commerce ROAS" className="bg-[#0F2D23]">Scale E-Commerce ROAS & Sales</option>
                    <option value="Generate High-Intent Leads" className="bg-[#0F2D23]">Generate High-Intent Qualified Leads</option>
                    <option value="Grow Social Following & Viral Reels" className="bg-[#0F2D23]">Grow Social Following & Viral Reels</option>
                    <option value="Dominate Google Search (SEO & PPC)" className="bg-[#0F2D23]">Dominate Google Search (SEO & PPC)</option>
                    <option value="Complete Brand Identity & Redesign" className="bg-[#0F2D23]">Complete Brand Identity & Redesign</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Estimated Monthly Ad Budget
                  </label>
                  <select
                    name="monthlyBudget"
                    value={formData.monthlyBudget}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/15 focus:border-[#22C55E] rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                  >
                    <option value="Under ₹25,000" className="bg-[#0F2D23]">Under ₹25,000 / month</option>
                    <option value="₹25,000 – ₹50,000" className="bg-[#0F2D23]">₹25,000 – ₹50,000 / month</option>
                    <option value="₹50,000 – ₹1,50,000" className="bg-[#0F2D23]">₹50,000 – ₹1,50,000 / month</option>
                    <option value="₹1,50,000+" className="bg-[#0F2D23]">₹1,50,000+ / month</option>
                  </select>
                </div>

                <div className="flex gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 py-3 px-4 rounded-xl text-xs font-semibold bg-white/10 text-white hover:bg-white/15 cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs bg-[#22C55E] text-[#0F2D23] hover:bg-[#84CC16] transition-all cursor-pointer"
                  >
                    <span>Almost Done</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact Details & Submit */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Priya Sharma"
                      className="w-full bg-black/40 border border-white/15 focus:border-[#22C55E] rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none"
                    />
                  </div>
                  {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    WhatsApp / Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-black/40 border border-white/15 focus:border-[#22C55E] rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none"
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-rose-400 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. priya@yourcompany.com"
                      className="w-full bg-black/40 border border-white/15 focus:border-[#22C55E] rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none"
                    />
                  </div>
                  {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
                </div>

                <div className="flex gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="py-3 px-4 rounded-xl text-xs font-semibold bg-white/10 text-white hover:bg-white/15 cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm bg-[#22C55E] text-[#0F2D23] hover:bg-[#84CC16] transition-all cursor-pointer shadow-lg shadow-[#22C55E]/30"
                  >
                    {isSubmitting ? (
                      <span>Analyzing...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Get My Free Audit</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6 space-y-5 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Audit Request Received!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-sm mx-auto leading-relaxed">
                Thank you <strong className="text-white">{formData.name}</strong>. Our senior growth strategist is reviewing <span className="text-[#86EFAC] font-semibold">{formData.businessName}</span> and preparing your 3 custom growth recommendations.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-left text-xs space-y-1.5 text-slate-300">
              <div className="flex items-center gap-2 text-[#86EFAC] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                <span>Next Steps:</span>
              </div>
              <p>• We will send your PDF Audit via email within 24 hours.</p>
              <p>• Fast-track review is available via WhatsApp below:</p>
            </div>

            <div className="space-y-2.5 pt-2">
              <a
                href={customWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm bg-[#22C55E] text-[#0F2D23] hover:bg-[#84CC16] transition-all shadow-lg shadow-[#22C55E]/30 cursor-pointer"
              >
                <span>Fast-Track Audit on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
