import React from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectService: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onSelectService,
}) => {
  if (!service) return null;

  const handleBookService = () => {
    onSelectService(service.title);
    onClose();
  };

  return (
    <div
      id="service-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="service-modal-content"
        className="relative w-full max-w-2xl bg-[#0F2D23] border border-[#22C55E]/30 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow effect behind modal */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#22C55E]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Optional Image Preview */}
        {service.imageUrl && (
          <div className="relative -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 h-48 sm:h-56 overflow-hidden rounded-t-2xl border-b border-[#22C55E]/20 bg-black/50">
            <img
              src={service.imageUrl}
              alt={service.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2D23] via-[#0F2D23]/50 to-transparent" />
          </div>
        )}

        {/* Close Button */}
        <button
          onClick={onClose}
          id="service-modal-close-btn"
          className="absolute top-5 right-5 z-20 p-2 rounded-lg text-slate-300 bg-black/50 backdrop-blur-md border border-white/10 hover:text-white hover:bg-black/75 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 rounded-full bg-[#22C55E]/15 text-[#86EFAC] text-xs font-semibold tracking-wider uppercase border border-[#22C55E]/30">
            {service.badge}
          </span>
          <span className="text-xs text-slate-400 font-medium">
            Key Benefit: <strong className="text-[#84CC16] font-semibold">{service.highlightMetric}</strong>
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          {service.title}
        </h3>

        <p className="mt-3 text-slate-300 text-base leading-relaxed">
          {service.shortDescription}
        </p>

        {/* Full Overview Description */}
        <div className="my-6 p-4 rounded-xl bg-black/25 border border-white/10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#86EFAC] mb-2">
            <Sparkles className="w-4 h-4 text-[#22C55E]" />
            <span>Strategic Scope</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {service.fullOverview}
          </p>
        </div>

        {/* Deliverables Checklist */}
        <div className="space-y-3 mb-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Included Deliverables &amp; Capabilities
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.04] border border-white/5 text-xs sm:text-sm text-slate-200"
              >
                <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-5 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
            <span>Transparent KPIs &amp; regular reporting</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleBookService}
              id="service-modal-select-btn"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold bg-[#22C55E] text-[#0F2D23] hover:bg-[#84CC16] transition-all shadow-md shadow-[#22C55E]/20"
            >
              <span>Enquire for this Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
