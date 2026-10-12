import React, { useState } from 'react';
import { PhoneCall, MessageCircle, Clock, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';
import { WORKSHOP_PHONE_DISPLAY, createTelLink, createWhatsAppLink } from '../constants/contact';
import heroImg from '../assets/images/hero_mobile_mechanic_1791732386174.jpg';

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  const heroWhatsAppMsg = "السلام عليكم، أحتاج ورشة متنقلة لصيانة سيارتي في موقعي الآن.";

  return (
    <section id="hero" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-neutral-800">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-48 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-7">
            {/* Clean unboxed kicker */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-amber-400">
              <span className="flex h-2 w-2 rounded-full bg-amber-400" />
              <span>خدمة متنقلة متكاملة</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>نصلك أينما كنت خلال 20-30 دقيقة</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>24/7 على مدار الساعة</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.25] text-balance">
              ورشة متنقلة لصيانة وإصلاح السيارات{' '}
              <span className="text-amber-400 block mt-2">أمام منزلك أو في موقعك</span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
              وداعاً لانتظار السطحات وضياع الوقت في الصناعية. سيارة صيانة مجهزة بالكامل مع أمهر الفنيين تصلك أينما تعطلت في الحي أو على الطريق السريع لإصلاح العطل فوراً بأعلى معايير الأمان وبضمان معتمد.
            </p>

            {/* Direct Contact CTAs - NO other booking methods */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={createTelLink()}
                className="flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-base transition-all duration-200 shadow-lg shadow-amber-500/25 active:scale-[0.98] whitespace-nowrap"
              >
                <PhoneCall className="w-5 h-5 stroke-[2.5]" />
                <span className="flex items-center gap-2">
                  <span>اتصال هاتفي مباشر</span>
                  <span dir="ltr" className="font-mono font-bold tracking-wider inline-block">
                    {WORKSHOP_PHONE_DISPLAY}
                  </span>
                </span>
              </a>

              <a
                href={createWhatsAppLink(heroWhatsAppMsg)}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base transition-all duration-200 shadow-lg shadow-emerald-600/25 active:scale-[0.98] whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>محادثة واتساب فورية</span>
              </a>
            </div>

            {/* Trust points */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-neutral-800/80">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-neutral-400">سرعة الوصول</div>
                  <div className="text-sm font-semibold text-white tabular-nums">20 - 30 دقيقة</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-neutral-400">ضمان معتمد</div>
                  <div className="text-sm font-semibold text-white">على القطع والعمل</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-neutral-400">التغطية</div>
                  <div className="text-sm font-semibold text-white">كافة الأحياء والطرق</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-neutral-400">المعدات</div>
                  <div className="text-sm font-semibold text-white">ورشة كاملة متنقلة</div>
                </div>
              </div>
            </div>

          </div>

          {/* Visual Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl">
              {!imgError ? (
                <img
                  src={heroImg}
                  alt="ورشة سيارات متنقلة مجهزة أمام فيلا سكنية"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-[380px] sm:h-[460px] object-cover"
                />
              ) : (
                <div className="w-full h-[400px] flex items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-800 text-neutral-400 p-8 text-center">
                  <div className="space-y-3">
                    <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                    <div className="text-lg font-bold text-white">ورشة صيانة متنقلة متكاملة</div>
                    <div className="text-sm text-neutral-400">نصلك أمام باب المنزل فوراً</div>
                  </div>
                </div>
              )}

              {/* Status overlay label */}
              <div className="absolute bottom-4 right-4 left-4 p-4 rounded-xl bg-neutral-950/85 backdrop-blur-md border border-neutral-700/60 flex items-center justify-between">
                <div>
                  <div className="text-xs text-neutral-400">حالة الورش الميدانية</div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    جاهزون للانطلاق فور اتصالك
                  </div>
                </div>
                <div className="text-left">
                  <span className="text-xs text-neutral-400 block">متوسط سرعة الإجابة</span>
                  <span className="text-sm font-bold text-amber-400 tabular-nums">خلال ثوانٍ</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
