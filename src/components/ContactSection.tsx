import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Clock,
  Building2,
  User,
  Sparkles,
} from 'lucide-react';
import { AGENCY_INFO, SERVICE_OPTIONS } from '../data/agencyData';
import { ContactFormData } from '../types';
import { WhatsAppIcon } from './WhatsAppIcon';



interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    service: 'Social Media Management',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  // Sync when preselectedService changes from service card click
  useEffect(() => {
    if (preselectedService && SERVICE_OPTIONS.includes(preselectedService)) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const TARGET_EMAIL = 'asha.ankoliya02@gmail.com';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Please provide your phone number';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Dispatch enquiry to asha.ankoliya02@gmail.com via FormSubmit AJAX endpoint
      await fetch(`https://formsubmit.co/ajax/${TARGET_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Scaleup Growth Enquiry from ${formData.name} - ${formData.service}`,
          name: formData.name,
          businessName: formData.businessName || 'N/A',
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          message: formData.message || 'No additional notes provided.',
          timestamp: new Date().toLocaleString(),
          _template: 'table',
          _captcha: 'false',
        }),
      });
    } catch (err) {
      console.warn('Form submission notification:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      businessName: '',
      phone: '',
      email: '',
      service: 'Social Media Management',
      message: '',
    });
  };

  // WhatsApp link customized with form data if submitted
  const customWhatsAppUrl = `https://wa.me/919909992573?text=${encodeURIComponent(
    `Hi Scaleup Marketing, I'd like to discuss ${formData.service} for my business (${formData.businessName || 'Business'}). Name: ${formData.name}.`
  )}`;

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 lg:py-32 bg-[#091C16] border-t border-white/5 overflow-hidden"
    >
      {/* Subtle background glow and texture */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <img
          src="/images/hero-marketing-growth.jpg"
          alt="Scaleup Marketing Digital Atmosphere"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#091C16] via-[#091C16]/80 to-[#091C16]" />
      </div>
      <div className="absolute top-1/3 left-5 sm:left-10 w-64 sm:w-96 h-64 sm:h-96 bg-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-[#84CC16]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14">
          {/* Left Column: Contact Information & Direct Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#86EFAC] text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>Start The Conversation</span>
              </div>

              <h2
                id="contact-heading"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
              >
                {AGENCY_INFO.contactHeading}
              </h2>

              <p className="mt-3 sm:mt-4 text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
                Whether you’re seeking to revamp your brand, scale customer acquisition through paid campaigns, or dominate local search, our team is ready to map out your growth blueprint.
              </p>
            </div>

            {/* Direct Channels Cards */}
            <div className="space-y-3 sm:space-y-4">
              {/* WhatsApp Clickable Link */}
              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-channel-whatsapp"
                className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-[#0F2D23] border border-[#25D366]/30 hover:border-[#25D366] hover:bg-[#133A2E] transition-all group shadow-md shadow-black/20"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                  <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-[#25D366]">
                    Fastest Response &bull; WhatsApp
                  </span>
                  <p className="text-sm sm:text-base font-bold text-white group-hover:text-[#25D366] transition-colors">
                    +91 99099 92573
                  </p>
                  <span className="text-[10px] sm:text-[11px] text-slate-400">Click to start direct WhatsApp chat</span>
                </div>
              </a>

              {/* Phone Clickable Link */}
              <a
                href={`tel:${AGENCY_INFO.phoneRaw}`}
                id="contact-channel-phone"
                className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-[#0F2D23] border border-white/10 hover:border-[#86EFAC]/40 hover:bg-[#133A2E] transition-all group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 text-[#86EFAC] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-slate-400">
                    Direct Phone Line
                  </span>
                  <p className="text-sm sm:text-base font-bold text-white group-hover:text-[#86EFAC] transition-colors">
                    {AGENCY_INFO.phone}
                  </p>
                  <span className="text-[10px] sm:text-[11px] text-slate-400">Monday &ndash; Saturday &bull; 9 AM to 7 PM IST</span>
                </div>
              </a>

              {/* Email Clickable Link */}
              <a
                href={`mailto:${AGENCY_INFO.email}`}
                id="contact-channel-email"
                className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-[#0F2D23] border border-white/10 hover:border-[#86EFAC]/40 hover:bg-[#133A2E] transition-all group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 text-[#86EFAC] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-slate-400">
                    Official Email
                  </span>
                  <p className="text-sm sm:text-base font-bold text-white group-hover:text-[#86EFAC] transition-colors truncate">
                    {AGENCY_INFO.email}
                  </p>
                  <span className="text-[10px] sm:text-[11px] text-slate-400">Proposals &amp; project inquiries</span>
                </div>
              </a>
            </div>

            {/* Turnaround Badge */}
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <Clock className="w-4 h-4 text-[#22C55E] shrink-0" />
              <span>Average response time within 2-4 business hours</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl glass-card p-5 sm:p-7 lg:p-9 border border-[#86EFAC]/20 shadow-2xl">
              {submitted ? (
                <div
                  id="form-success-state"
                  className="py-8 sm:py-10 px-2 sm:px-4 text-center flex flex-col items-center space-y-4 animate-in fade-in"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#22C55E]/20 border border-[#22C55E]/40 flex items-center justify-center text-[#22C55E] mb-1">
                    <CheckCircle2 className="w-8 h-8 sm:w-9 sm:h-9 stroke-[2.2]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                    Enquiry Sent Successfully!
                  </h3>
                  
                  <div className="w-full max-w-md p-3.5 sm:p-4 rounded-xl bg-black/30 border border-[#22C55E]/30 text-left space-y-2 text-xs text-slate-300">
                    <div className="flex justify-between pb-1.5 border-b border-white/10">
                      <span className="text-slate-400">Client Name:</span>
                      <span className="text-white font-medium">{formData.name}</span>
                    </div>
                    <div className="flex justify-between pb-1.5 border-b border-white/10">
                      <span className="text-slate-400">Selected Service:</span>
                      <span className="text-[#86EFAC] font-medium">{formData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Contact:</span>
                      <span className="text-white font-medium truncate ml-2">{formData.phone} • {formData.email}</span>
                    </div>
                  </div>

                  <p className="text-slate-300 max-w-md text-xs sm:text-sm leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>! Your requirements have been received. Our digital strategy team will review your enquiry and reach out within 2-4 business hours.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 w-full max-w-md">
                    <a
                      href={customWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-[#25D366] text-white font-bold text-xs sm:text-sm hover:bg-[#20bd5a] transition-all shadow-md shadow-[#25D366]/20"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </a>
                    <button
                      onClick={handleReset}
                      className="w-full py-3.5 px-5 rounded-xl bg-white/10 text-white font-medium text-xs sm:text-sm hover:bg-white/15 transition-all cursor-pointer"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (

                <form id="contact-enquiry-form" onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="border-b border-white/10 pb-3.5 sm:pb-4 mb-4 sm:mb-5">
                    <h3 className="text-lg sm:text-xl font-bold text-white">Send Us An Enquiry</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Tell us about your brand and what digital channels you want to accelerate.
                    </p>
                  </div>

                  {/* Name & Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label
                        htmlFor="form-name"
                        className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                      >
                        Your Name <span className="text-[#22C55E]">*</span>
                      </label>
                      <input
                        type="text"
                        id="form-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-black/35 border ${
                          errors.name ? 'border-red-500' : 'border-white/15 focus:border-[#22C55E]'
                        } text-white placeholder-slate-500 text-base sm:text-sm focus:outline-none transition-colors`}
                      />
                      {errors.name && (
                        <span className="text-[11px] text-red-400 mt-1 block">{errors.name}</span>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="form-business-name"
                        className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                      >
                        Business Name
                      </label>
                      <input
                        type="text"
                        id="form-business-name"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="e.g. Apex Retail or Startup Ltd."
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-black/35 border border-white/15 focus:border-[#22C55E] text-white placeholder-slate-500 text-base sm:text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label
                        htmlFor="form-phone"
                        className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                      >
                        Phone Number <span className="text-[#22C55E]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="form-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 99999 99999"
                        className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-black/35 border ${
                          errors.phone ? 'border-red-500' : 'border-white/15 focus:border-[#22C55E]'
                        } text-white placeholder-slate-500 text-base sm:text-sm focus:outline-none transition-colors`}
                      />
                      {errors.phone && (
                        <span className="text-[11px] text-red-400 mt-1 block">{errors.phone}</span>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="form-email"
                        className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                      >
                        Email Address <span className="text-[#22C55E]">*</span>
                      </label>
                      <input
                        type="email"
                        id="form-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-black/35 border ${
                          errors.email ? 'border-red-500' : 'border-white/15 focus:border-[#22C55E]'
                        } text-white placeholder-slate-500 text-base sm:text-sm focus:outline-none transition-colors`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-red-400 mt-1 block">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  {/* Service Interested In Dropdown */}
                  <div>
                    <label
                      htmlFor="form-service"
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="form-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#0F2D23] border border-white/15 focus:border-[#22C55E] text-white text-base sm:text-sm focus:outline-none transition-colors"
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#0F2D23] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="form-message"
                      className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
                    >
                      Your Message or Goals
                    </label>
                    <textarea
                      id="form-message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your current digital marketing challenges, timelines, or targets..."
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-black/35 border border-white/15 focus:border-[#22C55E] text-white placeholder-slate-500 text-base sm:text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      id="form-submit-button"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 sm:py-4 px-6 rounded-xl font-bold text-sm sm:text-base bg-[#22C55E] text-[#0F2D23] hover:bg-[#84CC16] disabled:opacity-75 transition-all duration-200 shadow-lg shadow-[#22C55E]/25 hover:shadow-xl hover:shadow-[#84CC16]/30 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Sending Enquiry...</span>
                      ) : (
                        <>
                          <span>Send Enquiry</span>
                          <Send className="w-4 h-4 stroke-[2.5]" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
