import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Eye, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  Layers, 
  TrendingUp, 
  MessageCircle,
  Maximize2
} from 'lucide-react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS, AGENCY_INFO } from '../data/agencyData';
import { GalleryItem, GalleryCategory } from '../types';

interface GallerySectionProps {
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onSelectServiceForContact,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('All');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalItem(null);
      }
    };
    if (activeModalItem) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeModalItem]);

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handleInquireFromModal = (item: GalleryItem) => {
    setActiveModalItem(null);
    onSelectServiceForContact(item.serviceTitle);
  };

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-[#091C16] border-t border-white/5 scroll-mt-20">
      {/* Background glow accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#22C55E]/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#84CC16]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#86EFAC] text-xs font-semibold tracking-wider uppercase shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-[#22C55E]" />
            Work &amp; Service Deliverables
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Real Campaigns.{' '}
            <span className="bg-gradient-to-r from-[#86EFAC] via-[#22C55E] to-[#84CC16] bg-clip-text text-transparent">
              Measurable Growth.
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Explore live creative campaigns, performance ad architectures, and visual identity systems crafted for ambitious brands across our core services.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-10 sm:mt-12 flex items-center justify-center gap-2 sm:gap-2.5 flex-wrap">
          {GALLERY_CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#22C55E] text-[#071912] shadow-lg shadow-[#22C55E]/25 font-bold scale-[1.02]'
                    : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group relative bg-[#0D261E] rounded-2xl overflow-hidden border border-white/10 hover:border-[#22C55E]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-[#22C55E]/10 flex flex-col cursor-pointer"
            >
              {/* Image Container with 16:10 aspect ratio */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D261E] via-transparent to-black/40" />

                {/* Category Badge (Top Left) */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-[#86EFAC] tracking-wide">
                    {item.badge}
                  </span>
                </div>

                {/* Metric Tag (Top Right) */}
                <div className="absolute top-3.5 right-3.5 z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#22C55E]/20 backdrop-blur-md border border-[#22C55E]/30 text-[11px] font-bold text-white shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                    {item.metric.split('•')[0].trim()}
                  </span>
                </div>

                {/* Hover Quick-View Hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px] pointer-events-none">
                  <div className="px-4 py-2 rounded-xl bg-[#22C55E] text-[#071912] font-bold text-xs flex items-center gap-2 shadow-xl shadow-[#22C55E]/30">
                    <Eye className="w-4 h-4" />
                    View Case Details
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-medium text-[#86EFAC]/80 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" />
                      {item.clientIndustry}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#86EFAC] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Deliverables snippet pills */}
                <div className="pt-2 border-t border-white/5 flex flex-wrap gap-1.5">
                  {item.deliverables.slice(0, 2).map((del, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] text-slate-300 font-medium"
                    >
                      {del}
                    </span>
                  ))}
                  {item.deliverables.length > 2 && (
                    <span className="px-1.5 py-0.5 rounded-md bg-white/5 text-[10px] text-slate-400 font-medium">
                      +{item.deliverables.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Bar */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0F2D23] via-[#143A2E] to-[#0F2D23] border border-[#22C55E]/20 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <TrendingUp className="w-5 h-5 text-[#22C55E]" />
              Need custom campaign assets or performance scaling?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Let&apos;s build a bespoke digital marketing framework tailored specifically to your industry and growth goals.
            </p>
          </div>

          <button
            onClick={() => onSelectServiceForContact('Paid Advertising')}
            className="shrink-0 px-6 py-3 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] text-[#071912] font-bold text-sm transition-all duration-200 shadow-lg shadow-[#22C55E]/25 hover:shadow-[#22C55E]/40 flex items-center gap-2 cursor-pointer"
          >
            Start Your Growth Campaign
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Lightbox / Case Detail Modal */}
      {activeModalItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#0B211A] border border-[#22C55E]/30 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/80 flex flex-col max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Showcase */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-black/50 overflow-hidden">
              <img
                src={activeModalItem.imageUrl}
                alt={activeModalItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B211A] via-transparent to-black/30" />

              {/* Badges on Modal Image */}
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between flex-wrap gap-2">
                <span className="px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/20 text-xs font-semibold text-[#86EFAC]">
                  {activeModalItem.badge}
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#22C55E]/30 backdrop-blur-md border border-[#22C55E]/50 text-xs font-bold text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                  {activeModalItem.metric}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#86EFAC] mb-1">
                  <span>{activeModalItem.category}</span>
                  <span>•</span>
                  <span>{activeModalItem.clientIndustry}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {activeModalItem.title}
                </h3>
              </div>

              {/* Metric Highlight Box */}
              <div className="p-4 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/25 flex items-center justify-between flex-wrap gap-4">
                <div className="space-y-0.5">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#86EFAC]">
                    Key Result &amp; Impact
                  </span>
                  <p className="text-lg sm:text-xl font-extrabold text-white">
                    {activeModalItem.metric}
                  </p>
                </div>
                <div className="text-xs text-slate-300 font-medium">
                  Service Vertical: <strong className="text-white">{activeModalItem.serviceTitle}</strong>
                </div>
              </div>

              {/* Strategy Description */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                  Execution &amp; Strategy Overview
                </h4>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {activeModalItem.description}
                </p>
              </div>

              {/* Deliverables Breakdown */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                  Key Scope Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalItem.deliverables.map((deliv, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-end gap-3">
                <a
                  href={`https://wa.me/919909992573?text=Hi%20Scaleup%20Marketing%2C%20I%20saw%20your%20case%20study%20"${encodeURIComponent(activeModalItem.title)}"%20and%20would%20like%20similar%20growth%20for%20my%20business.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#22C55E]" />
                  Chat on WhatsApp
                </a>

                <button
                  onClick={() => handleInquireFromModal(activeModalItem)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] text-[#071912] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#22C55E]/30 transition-all cursor-pointer"
                >
                  Inquire About This Service
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
