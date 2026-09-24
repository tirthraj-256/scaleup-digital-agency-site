import React, { useState, useEffect } from 'react';
import { Phone, X } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.68C7.02 10.88 7.89 12.04 8.01 12.2C8.13 12.37 9.72 14.82 12.16 15.87C14.19 16.75 14.6 16.57 15.04 16.53C15.48 16.49 16.46 15.95 16.66 15.38C16.86 14.81 16.86 14.32 16.8 14.22C16.74 14.12 16.58 14.06 16.34 13.94C16.1 13.82 14.92 13.24 14.7 13.16C14.48 13.08 14.32 13.04 14.16 13.28C14 13.53 13.54 14.06 13.4 14.22C13.26 14.39 13.12 14.41 12.88 14.29C12.64 14.16 11.86 13.91 10.94 13.09C10.22 12.45 9.73 11.66 9.59 11.42C9.45 11.18 9.58 11.04 9.7 10.92C9.81 10.81 9.94 10.63 10.06 10.49C10.18 10.35 10.22 10.25 10.3 10.09C10.38 9.92 10.34 9.78 10.28 9.66C10.22 9.54 9.74 8.35 9.54 7.87C9.34 7.4 9.14 7.46 8.99 7.45C8.85 7.45 8.69 7.33 8.53 7.33Z" />
  </svg>
);

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="floating-contact-container"
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col sm:flex-row items-end sm:items-center gap-2.5 sm:gap-3 transition-all duration-700 ease-out transform pb-safe ${
        isLoaded
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : 'translate-y-24 opacity-0 pointer-events-none'
      }`}
    >
      {/* Quick message preview balloon */}
      {showTooltip && (
        <div
          id="whatsapp-bubble"
          className={`hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#091C16]/95 border border-[#22C55E]/40 text-xs text-white shadow-2xl backdrop-blur-md transition-all duration-500 ease-out delay-300 ${
            isLoaded ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 translate-x-4'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
          <span>Chat with Scaleup on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white ml-1 p-0.5 cursor-pointer"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Buttons Group */}
      <div className="flex items-center gap-2 sm:gap-2.5">
        {/* 1. Direct Phone Call Button */}
        <a
          href={`tel:${AGENCY_INFO.phoneRaw}`}
          id="floating-call-btn"
          className="relative group w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#133A2E] hover:bg-[#1B4D3E] text-[#86EFAC] hover:text-white border-2 border-[#22C55E]/40 flex items-center justify-center shadow-xl shadow-black/50 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none cursor-pointer"
          aria-label={`Call Scaleup Marketing at ${AGENCY_INFO.phone}`}
          title={`Call Scaleup Marketing: ${AGENCY_INFO.phone}`}
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
        </a>

        {/* 2. Official WhatsApp Button */}
        <a
          href={AGENCY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          className="relative group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none cursor-pointer"
          aria-label="Contact Scaleup Marketing on WhatsApp"
          title="Chat with Scaleup Marketing on WhatsApp"
        >
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-pulse pointer-events-none" />
          <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 fill-current relative z-10" />
        </a>
      </div>
    </div>
  );
};

