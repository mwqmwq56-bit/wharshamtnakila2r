import React from 'react';
import { PhoneCall, Wrench } from 'lucide-react';
import { WORKSHOP_PHONE_DISPLAY, createTelLink } from '../constants/contact';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a href="#hero" className="flex items-center gap-3 text-white group whitespace-nowrap shrink-0">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-neutral-950 transition-all duration-200">
            <Wrench className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl font-bold tracking-tight text-white">الورشة المتنقلة</span>
            <span className="text-[11px] text-amber-400 font-medium">صيانة فورية أمام منزلك وفي الطريق</span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
          <a href="#services" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            الخدمات
          </a>
          <a href="#quick-dispatch" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            طلب فوري
          </a>
          <a href="#how-it-works" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            طريقة العمل
          </a>
          <a href="#coverage" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            مناطق التغطية
          </a>
          <a href="#pricing" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            الأسعار التقديرية
          </a>
          <a href="#faq" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            الأسئلة الشائعة
          </a>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={createTelLink()}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-sm transition-all duration-200 shadow-sm shadow-amber-500/20 whitespace-nowrap shrink-0 active:scale-[0.98]"
          >
            <PhoneCall className="w-4 h-4" />
            <span dir="ltr" className="tabular-nums font-mono font-bold tracking-wider inline-block">{WORKSHOP_PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>
    </header>
  );
};
