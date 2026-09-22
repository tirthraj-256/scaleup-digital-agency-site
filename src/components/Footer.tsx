import React from 'react';
import {
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';
import { AGENCY_INFO, SERVICES } from '../data/agencyData';
import { ScaleupLogo } from './ScaleupLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectServiceForContact }) => {
  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Why Us', id: 'why-us' },
    { name: 'Process', id: 'process' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <footer id="main-footer" className="bg-[#091C16] border-t border-[#86EFAC]/10 pt-16 pb-12 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <ScaleupLogo size="md" />
              <div>
                <span className="text-xl font-bold tracking-tight text-white">
                  {AGENCY_INFO.shortName}
                </span>
                <span className="block text-[10px] tracking-wider uppercase font-semibold text-[#86EFAC]">
                  Marketing
                </span>
              </div>
            </div>

            <p className="text-base text-slate-200 font-medium italic">
              &ldquo;{AGENCY_INFO.tagline}&rdquo;
            </p>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              We empower ambitious businesses with high-converting marketing frameworks, data-backed advertising, and memorable brand design.
            </p>

            {/* Social Icons (No fake URLs per prompt instruction) */}
            <div className="pt-2 flex items-center gap-3">
              <span
                id="social-instagram"
                title="Instagram (Scaleup Marketing)"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#22C55E]/20 border border-white/10 hover:border-[#22C55E]/40 flex items-center justify-center text-slate-300 hover:text-[#22C55E] transition-colors cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
              </span>
              <span
                id="social-facebook"
                title="Facebook (Scaleup Marketing)"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#22C55E]/20 border border-white/10 hover:border-[#22C55E]/40 flex items-center justify-center text-slate-300 hover:text-[#22C55E] transition-colors cursor-pointer"
              >
                <Facebook className="w-4 h-4" />
              </span>
              <span
                id="social-linkedin"
                title="LinkedIn (Scaleup Marketing)"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#22C55E]/20 border border-white/10 hover:border-[#22C55E]/40 flex items-center justify-center text-slate-300 hover:text-[#22C55E] transition-colors cursor-pointer"
              >
                <Linkedin className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="hover:text-[#22C55E] transition-colors text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => {
                      onNavigate('services');
                      onSelectServiceForContact(srv.title);
                    }}
                    className="text-slate-400 hover:text-[#86EFAC] transition-colors text-left"
                  >
                    {srv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${AGENCY_INFO.phoneRaw}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-[#22C55E] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span>{AGENCY_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${AGENCY_INFO.email}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-[#22C55E] transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span className="text-xs sm:text-sm">{AGENCY_INFO.email}</span>
              </a>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-white/5 hover:bg-[#22C55E] hover:text-[#0F2D23] border border-white/10 transition-all text-white"
                >
                  <span>Book A Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p id="footer-copyright">{AGENCY_INFO.copyright}</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Premium Digital Growth Agency</span>
            <span>&bull;</span>
            <span>Performance &amp; Brand Systems</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
