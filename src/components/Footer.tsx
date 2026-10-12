import React from 'react';
import { Wrench, PhoneCall, MessageCircle, Clock, MapPin, ShieldCheck } from 'lucide-react';
import { WORKSHOP_PHONE_DISPLAY, createTelLink, createWhatsAppLink } from '../constants/contact';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 text-xs border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500">
                <Wrench className="w-4 h-4 stroke-[2.2]" />
              </div>
              <span className="font-display font-bold text-base text-white">الورشة المتنقلة</span>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed">
              خدمة ورشة ميكانيكا وكهرباء سيارات متنقلة متكاملة. نصلك أينما تعطلت في كافة الأحياء والطرق السريعة بأسرع وقت وبأعلى كفاءة.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>فريق الطوارئ مناوب 24/7 الآن</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white">الخدمات الأساسية</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">صيانة مكيف السيارة وفحص الفريون</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">تبديل واشتراك بطاريات مع الضمان</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">فحص كمبيوتر وكشف أعطال OBD</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">صيانة وتبديل زيوت أمام البيت</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">إصلاح سلف، دينامو، وكهرباء</a></li>
            </ul>
          </div>

          {/* Work Hours & Guarantees */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white">أوقات العمل والمصداقية</h4>
            <div className="space-y-2 text-neutral-300">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>على مدار 24 ساعة يومياً (طوال أيام الأسبوع والإجازات)</span>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>ضمان معتمد على القطع وشغل اليد مع فاتورة رسمية</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>خدمة تغطي كافة أحياء المدينة وضواحيها</span>
              </div>
            </div>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white">الاتصال والتواصل المباشر</h4>
            <p className="text-xs text-neutral-400">لطلب الورشة فوراً أو للاستفسار عن التكلفة:</p>
            <div className="space-y-2">
              <a
                href={createTelLink()}
                className="flex items-center gap-2.5 p-3 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-amber-500/50 text-white font-bold transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span dir="ltr" className="tabular-nums font-mono inline-block">{WORKSHOP_PHONE_DISPLAY}</span>
              </a>

              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/60 hover:border-emerald-500 text-emerald-400 font-bold transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>تواصل عبر الواتساب مباشرة</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500">
          <p>© {new Date().getFullYear()} الورشة المتنقلة لصيانة السيارات. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-4 text-xs">
            <span>سرعة · أمانة · ضمان</span>
            <span aria-hidden="true">·</span>
            <span>صيانة في موقعك بدون سطحة</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
