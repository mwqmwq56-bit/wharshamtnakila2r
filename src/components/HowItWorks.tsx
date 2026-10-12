import React from 'react';
import { PhoneForwarded, Truck, CheckCircle2, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';
import { createTelLink, createWhatsAppLink } from '../constants/contact';

const STEPS = [
  {
    step: '01',
    title: 'تواصل فوري واتساب أو اتصال',
    desc: 'شارك موقعك ونوع العطل في ثوانٍ. فريقنا جاهز 24 ساعة للرد المباشر بدون ردود آلية معقدة.',
    icon: PhoneForwarded,
    highlight: 'رد خلال ثوانٍ'
  },
  {
    step: '02',
    title: 'انطلاق سيارة ورشة مجهزة إليك',
    desc: 'يتحرك فني معتمد في سيارة خدمة متكاملة تحتوي على أجهزة الفحص، قطع الغيار، وكمبروسرات الهواء.',
    icon: Truck,
    highlight: 'وصول خلال 20 - 30 دقيقة'
  },
  {
    step: '03',
    title: 'الصيانة في موقعك مع الضمان',
    desc: 'يتم فحص السيارة وإصلاح العطل أمام عينيك بكل شفافية مع تسليمك فاتورة وضمان رسمي على القطع والعمل.',
    icon: CheckCircle2,
    highlight: 'ضمان كتابي معتمد'
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-neutral-900/40 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold text-amber-400 mb-2">بساطة وسرعة الإجراءات</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-balance">
            كيف تعمل الورشة المتنقلة؟ ٣ خطوات بسيطة
          </h2>
          <p className="mt-3 text-neutral-300 text-sm sm:text-base">
            لا داعي لقطر السيارة أو انتظار الدور في كراجات التصليح. نحن نأتي إليك ونوفر عليك الوقت والجهد
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-neutral-950 border border-neutral-800 rounded-2xl p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-amber-400/80">{item.step}</span>
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-neutral-300 leading-relaxed mb-6">{item.desc}</p>
                </div>

                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                  <span className="text-neutral-400">الميزة الأساسية</span>
                  <span className="font-semibold text-amber-400">{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Promises Banner */}
        <div className="bg-gradient-to-r from-amber-500/10 via-neutral-900 to-emerald-500/10 border border-neutral-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-right">
            <h4 className="text-xl font-bold text-white">هل تواجه حالة طوارئ على الطريق الآن؟</h4>
            <p className="text-neutral-300 text-sm">فرقنا المتنقلة موزعة استراتيجياً لسرعة الوصول لأي موقع في المدينة</p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href={createTelLink()}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-sm transition-colors whitespace-nowrap"
            >
              اتصال بالطوارئ فوراً
            </a>
            <a
              href={createWhatsAppLink("أحتاج مساعدة طارئة على الطريق الآن")}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors whitespace-nowrap"
            >
              واتساب سريع
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
