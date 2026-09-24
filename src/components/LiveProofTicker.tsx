import React, { useState, useEffect } from 'react';
import { TrendingUp, X, Sparkles } from 'lucide-react';
import { LIVE_NOTIFICATIONS } from '../data/agencyData';

export const LiveProofTicker: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % LIVE_NOTIFICATIONS.length);
        setIsVisible(true);
      }, 500);
    }, 7000);

    return () => clearInterval(interval);
  }, [isDismissed]);

  if (isDismissed) return null;

  const currentNotification = LIVE_NOTIFICATIONS[currentIndex];

  return (
    <aside
      aria-label="Recent client achievement"
      className="fixed bottom-20 left-4 sm:bottom-6 sm:left-6 z-40 max-w-xs sm:max-w-sm hidden sm:block transition-all duration-500 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.96)',
      }}
    >
      <div className="glass-card rounded-xl p-3 sm:p-3.5 border border-[#22C55E]/30 bg-[#0F2D23]/95 backdrop-blur-xl shadow-2xl shadow-black/50 flex items-start gap-3 relative group">
        <div className="w-8 h-8 rounded-lg bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center shrink-0 mt-0.5">
          <TrendingUp className="w-4 h-4" />
        </div>

        <div className="flex-1 pr-4">
          <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-medium mb-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-ping" />
            <span className="text-[#86EFAC] font-semibold">{currentNotification.tag}</span>
            <span>•</span>
            <span>{currentNotification.time}</span>
          </div>

          <h4 className="text-xs font-bold text-white leading-tight mb-1">
            {currentNotification.business}
          </h4>

          <p className="text-[11px] text-slate-300 leading-snug">
            {currentNotification.achievement}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsDismissed(true)}
          className="absolute top-2 right-2 text-slate-500 hover:text-slate-300 p-1 transition-colors cursor-pointer"
          aria-label="Dismiss notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
