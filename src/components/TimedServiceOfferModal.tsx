import React, { useState, useEffect } from 'react';
import {
  X,
  Sparkles,
  Share2,
  Target,
  Users,
  Video,
  Palette,
  Search,
  CheckCircle2,
  ArrowRight,
  Send,
  Phone,
  User,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface TimedServiceOfferModalProps {
  forceOpen?: boolean;
  onClose?: () => void;
}

export const TimedServiceOfferModal: React.FC<TimedServiceOfferModalProps> = ({
  forceOpen = false,
  onClose,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Social Media Management',
    'Paid Advertising',
  ]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // 10-Second Auto-Trigger
  useEffect(() => {
    if (forceOpen) {
      setIsOpen(true);
      return;
    }

    const hasSeenPopup = sessionStorage.getItem('scaleup_timed_popup_seen');
    if (hasSeenPopup) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem('scaleup_timed_popup_seen', 'true');
    }, 10000); // Exactly 10 seconds

    return () => clearTimeout(timer);
  }, [forceOpen]);

  // Lock body scroll when modal is active
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

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  const toggleService = (srvTitle: string) => {
    if (selectedServices.includes(srvTitle)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== srvTitle));
      }
    } else {
      setSelectedServices([...selectedServices, srvTitle]);
    }
  };

  const servicesList = [
    {
      id: 'smm',
      title: 'Social Media Management',
      subtitle: 'Daily reels, posts, feed styling & engagement',
      icon: <Share2 className="w-4 h-4" />,
      badge: 'Organic',
    },
    {
      id: 'ads',
      title: 'Paid Advertising',
      subtitle: 'Meta & Google Ads with 4.2x+ target ROAS',
      icon: <Target className="w-4 h-4" />,
      badge: 'High ROI',
    },
    {
      id: 'leadgen',
      title: 'Lead Gen & WhatsApp Funnels',
      subtitle: 'High-intent inquiries straight to your phone',
      icon: <Users className="w-4 h-4" />,
      badge: 'Pipeline',
    },
    {
      id: 'video',
      title: 'Short-Form Video & Reels',
      subtitle: 'Studio-grade editing with viral hook architecture',
      icon: <Video className="w-4 h-4" />,
      badge: 'Retention',
    },
    {
      id: 'branding',
      title: 'Brand Identity & Graphics',
      subtitle: 'Distinctive logos, typography & social creatives',
      icon: <Palette className="w-4 h-4" />,
      badge: 'Design',
    },
    {
      id: 'seo',
      title: 'SEO & Google Ranking',
      subtitle: 'Rank #1 on local maps and organic search',
      icon: <Search className="w-4 h-4" />,
      badge: 'Search',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }
    if (!phone.trim()) {
      setError('Please enter your phone or WhatsApp number');
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      await fetch('https://formsubmit.co/ajax/asha.ankoliya02@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `🔥 POPUP LEAD: ${name} interested in ${selectedServices.join(', ')}`,
          name,
          phone,
          services: selectedServices.join(', '),
          source: '10-Second Auto Growth Offer Modal',
          timestamp: new Date().toLocaleString(),
        }),
      });
    } catch (err) {
      console.warn('Popup lead submission notice:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const customWhatsAppUrl = `https://wa.me/919909992573?text=${encodeURIComponent(
    `Hi Scaleup Marketing, I'm ${name || 'a business owner'} and I'm interested in scaling my brand with: ${selectedServices.join(
      ', '
    )}. Please share strategy and pricing.`
  )}`;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-[#091C16] border-2 border-[#22C55E]/40 rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-7 md:p-8 z-10 overflow-hidden my-auto max-h-[94vh] flex flex-col justify-between animate-fadeIn">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#22C55E]/20 rounded-bl-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#84CC16]/10 rounded-tr-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="overflow-y-auto pr-1 no-scrollbar space-y-4 sm:space-y-5">
            {/* Header with Urgency Pill */}
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#22C55E]/20 border border-[#22C55E]/40 text-[#86EFAC] text-[11px] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#22C55E] animate-pulse" />
                  <span>Exclusive Strategy Session</span>
                </div>
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[10px] font-semibold">
                  <Clock className="w-3 h-3 text-amber-400" />
                  <span>3 Slots Left This Week</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Ready to Accelerate Your Brand Growth?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Select the digital capabilities your business needs, and our senior strategists will build a customized roadmap.
              </p>
            </div>

            {/* Service Selection Grid */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                Select Services Needed:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                {servicesList.map((srv) => {
                  const isChecked = selectedServices.includes(srv.title);
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => toggleService(srv.title)}
                      className={`p-3 rounded-xl text-left flex items-start justify-between gap-2.5 transition-all duration-200 cursor-pointer ${
                        isChecked
                          ? 'bg-[#143B2F] border-2 border-[#22C55E] text-white shadow-md shadow-[#22C55E]/15'
                          : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        <div
                          className={`p-1.5 rounded-lg mt-0.5 shrink-0 ${
                            isChecked
                              ? 'bg-[#22C55E] text-[#0F2D23]'
                              : 'bg-white/10 text-[#86EFAC]'
                          }`}
                        >
                          {srv.icon}
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold leading-tight">
                            {srv.title}
                          </div>
                          <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 leading-snug">
                            {srv.subtitle}
                          </div>
                        </div>
                      </div>

                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          isChecked
                            ? 'bg-[#22C55E] text-[#0F2D23]'
                            : 'border border-slate-500'
                        }`}
                      >
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Contact Inputs */}
            <form onSubmit={handleSubmit} className="space-y-3 pt-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Vikram Patel"
                      className="w-full bg-black/40 border border-white/15 focus:border-[#22C55E] rounded-xl pl-9 pr-3 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    WhatsApp / Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 99099 92573"
                      className="w-full bg-black/40 border border-white/15 focus:border-[#22C55E] rounded-xl pl-9 pr-3 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {error && <p className="text-xs text-rose-400 font-medium">{error}</p>}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm bg-[#22C55E] text-[#0F2D23] hover:bg-[#84CC16] transition-all shadow-lg shadow-[#22C55E]/25 hover:-translate-y-0.5 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Get Free Proposal &amp; Roadmap</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </>
                  )}
                </button>

                <a
                  href={customWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-all cursor-pointer"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <p className="text-[11px] text-center text-slate-400 pt-1">
                🔒 100% Free Consultation • No Spam • Confidential Strategy Teardown
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation View */
          <div className="text-center py-8 space-y-5 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-white">
                Request Received!
              </h3>
              <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto leading-relaxed">
                Thank you <strong className="text-white">{name}</strong>! Our growth strategist is reviewing your selected services ({selectedServices.join(', ')}) and will reach out to you within 2 hours.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-left text-xs space-y-1 text-slate-300 max-w-md mx-auto">
              <div className="flex items-center gap-2 text-[#86EFAC] font-semibold mb-1">
                <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                <span>Fast-Track Connection:</span>
              </div>
              <p>For immediate response, you can start the WhatsApp conversation directly below:</p>
            </div>

            <div className="pt-2 max-w-md mx-auto space-y-2.5">
              <a
                href={customWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm bg-[#22C55E] text-[#0F2D23] hover:bg-[#84CC16] transition-all shadow-lg shadow-[#22C55E]/30 cursor-pointer"
              >
                <span>Continue on WhatsApp Now</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <button
                type="button"
                onClick={handleClose}
                className="w-full py-2.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Back to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
