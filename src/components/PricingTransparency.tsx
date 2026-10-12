import React from 'react';
import { Check, ShieldAlert, CreditCard, Banknote, PhoneCall, MessageCircle } from 'lucide-react';
import { createTelLink, createWhatsAppLink } from '../constants/contact';

const PRICING_LIST = [
  {
    service: 'صيانة وتبديل فحمات الفرامل (الأقمشة)',
    startingPrice: '90',
    details: 'يشمل الفك والتركيب في موقعك، فحص سماكة الهوبات، وتنسيم وضبط دورة زيت الفرامل.',
    badge: 'سلامة وأمان'
  },
  {
    service: 'اشتراك وشحن بطارية طوارئ',
    startingPrice: '70',
    details: 'يشمل الوصول للموقع، استخدام كابلات اشتراك آمنة معزولة، وفحص سلامة الدينامو.',
    badge: 'طوارئ سريعة'
  },
  {
    service: 'فحص كمبيوتر السيارة (OBD-II)',
    startingPrice: '100',
    details: 'قراءة شاملة لجميع الحساسات وكمبيوتر المحرك والقير مع تقرير فني ومسح الأخطاء المؤقتة.',
    badge: 'فحص إلكتروني'
  },
  {
    service: 'تبديل بطارية سيارة جديدة بضمان',
    startingPrice: '250',
    details: 'السعر يشمل بطارية أصلية معتمدة، الفك والتركيب في موقعك، وبرمجة السيارة وضمان سنة فأكثر.',
    badge: 'شامل البطارية والضمان'
  },
  {
    service: 'صيانة دورية: زيت وسيفون أمام المنزل',
    startingPrice: '120',
    details: 'حسب نوع الزيت وعدد العلب، مع فلتر زيت وكالة أصلي وفحص مجاني لسوائل المحرك.',
    badge: 'خدمة منزلية مريحة'
  },
  {
    service: 'فتح سيارة مقفلة طوارئ',
    startingPrice: '80',
    details: 'فتح قفل الباب بأجهزة ومخاد هوائية متخصصة بدون أي كسر أو خدوش لطلاء السيارة أو الجلد.',
    badge: 'إنقاذ فوري'
  }
];

export const PricingTransparency: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-neutral-900/60 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs font-semibold text-amber-400 mb-2">شفافية وأمانة تامة</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-balance">
            أسعار تقديرية واضحة بدون مفاجآت
          </h2>
          <p className="mt-3 text-neutral-300 text-sm sm:text-base">
            يتم الاتفاق معك على تكلفة الخدمة بدقة عبر الواتساب أو المكالمة قبل تحرك الفني أو البدء بأي خطوة إصلاح.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PRICING_LIST.map((item, idx) => (
            <div
              key={idx}
              className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-medium text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                    {item.badge}
                  </span>
                  <div className="text-left">
                    <span className="text-xs text-neutral-400">يبدأ من</span>
                    <div className="text-xl font-extrabold text-white font-mono tabular-nums">
                      {item.startingPrice} <span className="text-xs font-sans text-amber-400">ريال</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-2">{item.service}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed mb-6">{item.details}</p>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center gap-2">
                <a
                  href={createWhatsAppLink(`السلام عليكم، استفسار بخصوص خدمة: ${item.service}`)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold text-xs transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>تأكيد السعر واتساب</span>
                </a>
                <a
                  href={createTelLink()}
                  className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-amber-400 border border-neutral-800 transition-colors"
                  title="اتصال هاتفي"
                >
                  <PhoneCall className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Payment & Security banner */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">
          <div className="flex items-center gap-3">
            <CreditCard className="w-6 h-6 text-amber-400 shrink-0" />
            <div>
              <div className="font-bold text-white">طرق الدفع المتوفرة في الموقع</div>
              <div className="text-xs text-neutral-400">مدى، فيزا، ماستركارد، Apple Pay، تحويل بنكي، ودفع نقدي</div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-neutral-400 border-t sm:border-t-0 sm:border-r border-neutral-800 pt-4 sm:pt-0 sm:pr-6">
            <div className="flex items-center gap-2 text-neutral-300">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>فاتورة إلكترونية معتمدة</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-300">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>لا توجد رسوم خفية</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
