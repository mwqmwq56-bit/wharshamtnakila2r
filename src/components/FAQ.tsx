import React, { useState } from 'react';
import { ChevronDown, MessageCircle, PhoneCall } from 'lucide-react';
import { createTelLink, createWhatsAppLink } from '../constants/contact';

const FAQS = [
  {
    q: 'هل تقدمون خدمة الصيانة فعلاً أمام باب المنزل أو في مواقف العمل؟',
    a: 'نعم بالتأكيد! سيارات الورشة المتنقلة مجهزة بمصادر طاقة مستقلة ومعدات فحص متطورة تسمح لنا بإجراء عمليات فحص وتغيير البطاريات، فحص وبرمجة الكمبيوتر، صيانة الفرامل، وتغيير الزيوت مباشرة أمام منزلك أو في مواقف عملك دون الحاجة لنقل السيارة.'
  },
  {
    q: 'كم يستغرق وصول فني الورشة المتنقلة بعد اتصالي؟',
    a: 'في المتوسط، يستغرق وصول سيارة الورشة بين 15 إلى 30 دقيقة حسب حركة السير وحيك السكني، وذلك لأن سياراتنا موزعة في نقاط جغرافية استراتيجية عبر أنحاء المدينة لضمان أسرع استجابة.'
  },
  {
    q: 'هل البطاريات وقطع الغيار التي تركبونها أصلية ومضمونة؟',
    a: 'نعم، جميع البطاريات التي نوفرها جديدة كلياً وتاريخ إنتاجها حديث ومن وكلاء معتمدين، ونقدم عليها ضماناً رسمياً يبدأ من 12 إلى 24 شهراً مع فاتورة إلكترونية تضمن حقك بالكامل.'
  },
  {
    q: 'كيف يتم تحديد السعر وهل تفاجئني رسوم غير متفق عليها؟',
    a: 'نحن نتبع سياسة الشفافية التامة؛ عند تواصلك معنا عبر الهاتف أو الواتساب، نسألك عن نوع العطل وطراز السيارة ونوضح لك التكلفة بدقة قبل انطلاق الفني. لن يتم تطبيق أي رسوم إضافية دون موافقتك المسبقة.'
  },
  {
    q: 'ماذا لو تبين أن عطل السيارة كبير جداً ويستوجب فك ماكينة أو قير كامل؟',
    a: 'يقوم الفني بفحص السيارة وإعطائك تشخيصاً دقيقاً وتقرير كمبيوتر شامل. إذا تطلب العطل تدخلاً في ورشة متخصصة، يمكننا التنسيق لتوفير سطحة هيدروليك آمنة لنقل سيارتك إلى الورشة المعتمدة التي تختارها.'
  },
  {
    q: 'ما هي طرق الدفع المتوفرة عند وصول الفني؟',
    a: 'يحمل جميع فنيينا أجهزة دفع إلكتروني (POS) متنقلة تدعم بطاقات مدى، فيزا، ماستركارد، Apple Pay، بالإضافة لإمكانية الدفع نقداً أو عبر التحويل البنكي الفوري.'
  }
];

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-neutral-900/40 border-b border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="text-xs font-semibold text-amber-400 mb-2">إجابات واضحة</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-balance">
            الأسئلة الشائعة حول خدمات الورشة المتنقلة
          </h2>
          <p className="mt-3 text-neutral-300 text-sm sm:text-base">
            كل ما يهمك معرفته حول خدماتنا الميدانية وطرق تقديم الخدمة
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5 mb-12">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-5 text-right flex items-center justify-between gap-4 font-bold text-white hover:text-amber-400 transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-400' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/80 bg-neutral-900/30">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact fallback */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 text-center space-y-4">
          <h3 className="text-base font-bold text-white">لديك سؤال آخر أو مشكلة غير معتادة؟</h3>
          <p className="text-xs text-neutral-400">تحدث مع الفني المناوب مباشرة وسيقدم لك المشورة الفنية الفورية</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={createWhatsAppLink("السلام عليكم، لدي استفسار فني بخصوص سيارتي.")}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>استفسار واتساب</span>
            </a>
            <a
              href={createTelLink()}
              className="px-5 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-amber-400 border border-neutral-800 font-semibold text-xs transition-colors flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>مكالمة هاتفية</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
