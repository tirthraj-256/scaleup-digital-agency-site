import React, { useState } from 'react';
import {
  HelpCircle,
  ChevronDown,
  MessageSquare,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { FAQ_ITEMS, AGENCY_INFO } from '../data/agencyData';
import { FaqItem } from '../types';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Paid Ads & ROI', 'Social & Content', 'Process & Reporting'];

  const filteredFaqs =
    selectedCategory === 'All'
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((f) => f.category === selectedCategory);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative py-16 sm:py-20 lg:py-28 bg-[#091C16] border-t border-white/5 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 sm:w-[600px] h-80 sm:h-[400px] bg-[#22C55E]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#86EFAC] text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#22C55E]" />
            <span>Got Questions? We Have Answers</span>
          </div>

          <h2
            id="faq-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#86EFAC] via-[#22C55E] to-[#84CC16]">
              Questions
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-300">
            Everything you need to know about our growth frameworks, pricing models, creative execution, and onboarding.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-[#22C55E] text-[#0F2D23] shadow-md shadow-[#22C55E]/25 font-bold'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq: FaqItem) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`glass-card rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? 'border-[#22C55E]/40 bg-[#143B2F]/80 shadow-lg shadow-[#22C55E]/10'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white pr-2 flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#22C55E] shrink-0" />
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#22C55E] text-[#0F2D23]' : 'bg-white/10 text-slate-300'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions WhatsApp Card */}
        <div className="mt-10 sm:mt-12 text-center p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">Have a specific question about your brand?</h4>
              <p className="text-xs text-slate-400">Chat directly with our growth strategist on WhatsApp</p>
            </div>
          </div>

          <a
            href={AGENCY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#22C55E] text-[#0F2D23] hover:bg-[#84CC16] transition-all duration-200 shrink-0 cursor-pointer shadow-md shadow-[#22C55E]/20"
          >
            <span>Ask On WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </section>
  );
};
