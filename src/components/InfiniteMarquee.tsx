import React from 'react';
import { MARQUEE_ITEMS } from '../data/agencyData';

export const InfiniteMarquee: React.FC = () => {
  return (
    <div className="relative py-3.5 bg-gradient-to-r from-[#091C16] via-[#123A2E] to-[#091C16] border-y border-[#22C55E]/20 overflow-hidden select-none">
      <div className="flex w-max animate-marquee space-x-8">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-2 text-xs sm:text-sm font-bold tracking-wider text-slate-200 uppercase"
          >
            <span className="text-[#86EFAC]">{item}</span>
            <span className="text-white/20 px-2">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};
