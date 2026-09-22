import React, { useState } from 'react';
import {
  Share2,
  TrendingUp,
  Target,
  Users,
  Video,
  Palette,
  Search,
  Sparkles,
  ArrowRight,
  Check,
  Zap,
} from 'lucide-react';
import { SERVICES, AGENCY_INFO } from '../data/agencyData';
import { ServiceItem } from '../types';
import { ServiceModal } from './ServiceModal';

interface ServicesSectionProps {
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForContact,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Mapping icon names to Lucide icons
  const iconMap: Record<string, React.ElementType> = {
    Share2,
    TrendingUp,
    Target,
    Users,
    Video,
    Palette,
    Search,
    Sparkles,
  };

  return (
    <section
      id="services"
      className="relative py-20 lg:py-32 bg-[#091C16] border-t border-white/5"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#22C55E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#86EFAC] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
            <Zap className="w-3.5 h-3.5 text-[#22C55E]" />
            <span>Full-Spectrum Digital Services</span>
          </div>

          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            {AGENCY_INFO.servicesHeading}
          </h2>

          <p
            id="services-subheading"
            className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            {AGENCY_INFO.servicesSubheading}
          </p>
        </div>

        {/* 8 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon] || Sparkles;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group relative flex flex-col justify-between rounded-2xl bg-[#0F2D23]/90 border border-[#86EFAC]/15 hover:border-[#22C55E]/50 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#22C55E]/15"
              >
                {/* Top accent glow line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#22C55E]/0 to-transparent group-hover:via-[#22C55E] transition-all duration-500 z-20" />

                {/* Service Card Image Banner */}
                {service.imageUrl && (
                  <div className="relative w-full">
                    {/* Inner image container with overflow-hidden for hover zoom */}
                    <div className="relative h-40 w-full overflow-hidden bg-black/40">
                      <img
                        src={service.imageUrl}
                        alt={`${service.title} - Scaleup Marketing`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-95"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F2D23] via-[#0F2D23]/30 to-transparent" />

                      {/* Category pill */}
                      <div className="absolute top-3 right-3 z-10">
                        <span className="text-[11px] font-semibold text-white px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/20 shadow-sm">
                          {service.badge}
                        </span>
                      </div>
                    </div>

                    {/* Floating Icon - fully visible outside overflow-hidden boundary */}
                    <div className="absolute -bottom-5 left-5 z-20 w-11 h-11 rounded-xl bg-[#0F2D23] border border-[#22C55E]/40 p-0.5 shadow-lg shadow-black/50">
                      <div className="w-full h-full rounded-[10px] bg-[#22C55E]/20 flex items-center justify-center text-[#22C55E] group-hover:bg-[#22C55E] group-hover:text-[#0F2D23] transition-colors duration-200">
                        <IconComponent className="w-5 h-5 stroke-[2.2]" />
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-6 pt-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title & Short Description */}
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#86EFAC] transition-colors">
                      {service.title}
                    </h3>

                    <p className="mt-2.5 text-sm text-slate-300 leading-relaxed min-h-[58px]">
                      {service.shortDescription}
                    </p>

                    {/* Deliverables Bullet List */}
                    <div className="mt-4 pt-3.5 border-t border-white/10">
                      <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block mb-2">
                        Included Capabilities:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {service.deliverables.slice(0, 4).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#22C55E] shrink-0 mt-0.5" />
                            <span className="truncate">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Bottom: Learn More action */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedService(service)}
                      id={`learn-more-${service.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#86EFAC] hover:text-[#84CC16] transition-colors group-hover:translate-x-0.5 duration-200"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onSelectServiceForContact(service.title)}
                      className="text-[11px] font-semibold text-slate-400 hover:text-white transition-colors"
                    >
                      Enquire &rarr;
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectService={(serviceTitle) => {
          onSelectServiceForContact(serviceTitle);
        }}
      />
    </section>
  );
};
