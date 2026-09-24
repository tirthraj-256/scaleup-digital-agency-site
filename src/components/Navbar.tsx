import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Calculator } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { ScaleupLogo } from './ScaleupLogo';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  onOpenAuditModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, onOpenAuditModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = ['home', 'services', 'gallery', 'calculator', 'pricing', 'reviews', 'faq', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#gallery' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Packages', href: '#pricing' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];


  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? 'bg-[#0F2D23]/98 backdrop-blur-md border-b border-[#22C55E]/20 py-2.5 sm:py-3 shadow-lg shadow-black/40'
            : 'bg-gradient-to-b from-[#0F2D23]/90 via-[#0F2D23]/60 to-transparent backdrop-blur-[2px] py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              id="navbar-logo-link"
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
            >
              <ScaleupLogo size="md" />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white group-hover:text-[#86EFAC] transition-colors leading-tight">
                  {AGENCY_INFO.shortName}
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-widest uppercase font-bold text-[#86EFAC]/90">
                  Marketing
                </span>
              </div>
            </a>

            {/* Desktop & Tablet Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'text-[#22C55E] bg-[#22C55E]/15 shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* CTA & Actions */}
            <div className="hidden md:flex items-center gap-2.5">
              {/* Free Audit Button */}
              {onOpenAuditModal && (
                <button
                  type="button"
                  onClick={onOpenAuditModal}
                  id="navbar-audit-button"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-[#86EFAC] bg-[#22C55E]/10 hover:bg-[#22C55E]/20 border border-[#22C55E]/30 transition-all duration-200 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#22C55E] animate-pulse" />
                  <span>Free Audit</span>
                </button>
              )}

              <button
                onClick={() => onNavigate('contact')}
                id="navbar-cta-button"
                className="inline-flex items-center gap-1.5 px-4 py-2 lg:px-5 lg:py-2.5 rounded-xl text-xs lg:text-sm font-bold bg-[#22C55E] text-[#0F2D23] hover:bg-[#84CC16] transition-all duration-200 shadow-md shadow-[#22C55E]/25 hover:shadow-lg hover:shadow-[#84CC16]/30 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowUpRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 stroke-[2.5]" />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="lg:hidden p-2.5 rounded-xl text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#86EFAC]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="fixed inset-0 top-[54px] sm:top-[64px] z-40 lg:hidden bg-[#091C16] flex flex-col justify-between overflow-y-auto px-5 py-6 border-b border-[#22C55E]/20 shadow-2xl"
        >
          <div className="flex flex-col space-y-1.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#86EFAC] px-3 mb-1">
              Menu Navigation
            </span>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-xl text-base font-bold flex items-center justify-between transition-all cursor-pointer ${
                    isActive
                      ? 'text-[#22C55E] bg-[#22C55E]/15 border border-[#22C55E]/30'
                      : 'text-slate-100 hover:text-white hover:bg-white/10 border border-transparent'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive ? (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-pulse" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-slate-400 opacity-60" />
                  )}
                </a>
              );
            })}
          </div>

          <div className="pt-5 mt-4 border-t border-white/10 space-y-3 pb-safe">
            {onOpenAuditModal && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuditModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold bg-[#22C55E]/15 border border-[#22C55E]/40 text-[#86EFAC] hover:bg-[#22C55E]/25 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#22C55E]" />
                <span>Claim Free 15-Min Growth Audit</span>
              </button>
            )}

            <button
              onClick={() => {
                onNavigate('contact');
                setMobileMenuOpen(false);
              }}
              id="mobile-nav-cta-button"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-base font-extrabold bg-[#22C55E] text-[#0F2D23] hover:bg-[#84CC16] shadow-xl shadow-[#22C55E]/25 transition-all cursor-pointer"
            >
              <span>Get Started Now</span>
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </button>

            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold bg-[#0F2D23] text-white border border-[#22C55E]/40 hover:bg-[#133A2E] transition-all cursor-pointer"
            >
              <span>Chat on WhatsApp (+91 99099 92573)</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

