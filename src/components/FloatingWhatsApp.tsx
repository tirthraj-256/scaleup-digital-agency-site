import React, { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Smooth ease-out entrance slide up from the bottom when page finishes loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="floating-whatsapp-container"
      className={`fixed bottom-6 right-6 z-40 flex items-end gap-2.5 transition-all duration-700 ease-out transform ${
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
          <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-ping" />
          <span>Chat with Scaleup on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white ml-1 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating CTA Button */}
      <a
        href={AGENCY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="relative group w-14 h-14 rounded-full bg-[#22C55E] hover:bg-[#84CC16] text-[#0F2D23] flex items-center justify-center shadow-2xl shadow-[#22C55E]/40 hover:shadow-[#84CC16]/50 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
        aria-label="Contact Scaleup Digital Marketing Agency on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-[#22C55E]/30 animate-pulse pointer-events-none" />
        <MessageSquare className="w-7 h-7 fill-current stroke-[1.8]" />
      </a>
    </div>
  );
};
