import React, { useState, useEffect } from 'react';
import { PhoneCall, MessageCircle, X, ChevronUp } from 'lucide-react';
import { WORKSHOP_PHONE_DISPLAY, createTelLink, createWhatsAppLink } from '../constants/contact';

export const FloatingContactButtons: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ======================================================== */}
      {/* DESKTOP FLOATING ACTION BUTTONS (Left side in RTL layout) */}
      {/* ======================================================== */}
      <div className="hidden sm:flex fixed bottom-6 left-6 z-50 flex-col items-start gap-3 pointer-events-none">
        
        {/* Scroll to top button (if scrolled) */}
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="العودة لأعلى الصفحة"
            className="pointer-events-auto p-2.5 rounded-full bg-neutral-900/90 text-neutral-300 hover:text-white border border-neutral-700/80 shadow-lg hover:bg-neutral-800 transition-all duration-200"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating Call Button */}
        <a
          href={createTelLink()}
          className="pointer-events-auto group flex items-center gap-3 px-4 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold shadow-xl shadow-amber-500/30 transition-all duration-200 active:scale-95"
          title="اتصال هاتفي مباشر"
        >
          <div className="relative flex items-center justify-center">
            <span className="absolute -inset-1 rounded-full bg-amber-400/50 animate-ping opacity-75" />
            <PhoneCall className="w-5 h-5 relative z-10 stroke-[2.5]" />
          </div>
          <div className="flex flex-col text-right">
            <span className="text-xs leading-none font-bold">اتصال طوارئ مباشر</span>
            <span dir="ltr" className="text-[11px] font-mono leading-tight tracking-wider mt-0.5 tabular-nums inline-block text-right">
              {WORKSHOP_PHONE_DISPLAY}
            </span>
          </div>
        </a>

        {/* Floating WhatsApp Button */}
        <a
          href={createWhatsAppLink("السلام عليكم، أرغب بطلب الورشة المتنقلة لصيانة سيارتي الآن.")}
          target="_blank"
          rel="noreferrer"
          className="pointer-events-auto group flex items-center gap-3 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold shadow-xl shadow-emerald-500/25 transition-all duration-200 active:scale-95"
          title="محادثة واتساب فورية"
        >
          <div className="relative flex items-center justify-center">
            <MessageCircle className="w-5 h-5 fill-current" />
          </div>
          <div className="flex flex-col text-right">
            <span className="text-xs leading-none font-bold">محادثة واتساب فورية</span>
            <span className="text-[10px] text-emerald-100 leading-tight mt-0.5">
              متاحون 24 ساعة للرد
            </span>
          </div>
        </a>
      </div>

      {/* ======================================================== */}
      {/* MOBILE STICKY BOTTOM BAR (Ergonomic thumb dock under 15% cap) */}
      {/* ======================================================== */}
      <aside aria-label="أزرار التواصل السريع" className="sm:hidden fixed bottom-0 inset-x-0 z-50 p-2.5 bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800 shadow-[0_-10px_25px_rgba(0,0,0,0.5)]">
        <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
          {/* Call button */}
          <a
            href={createTelLink()}
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-amber-500 active:bg-amber-400 text-neutral-950 font-extrabold text-sm shadow-md shadow-amber-500/20 active:scale-[0.98] transition-transform"
          >
            <PhoneCall className="w-4 h-4 stroke-[2.5] shrink-0" />
            <span className="truncate">اتصال مباشر</span>
          </a>

          {/* WhatsApp button */}
          <a
            href={createWhatsAppLink("السلام عليكم، أرغب بطلب الورشة المتنقلة لصيانة سيارتي الآن.")}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#25D366] active:bg-[#20ba59] text-white font-extrabold text-sm shadow-md shadow-emerald-600/20 active:scale-[0.98] transition-transform"
          >
            <MessageCircle className="w-4 h-4 fill-current shrink-0" />
            <span className="truncate">واتساب فوري</span>
          </a>
        </div>
      </aside>
    </>
  );
};
