import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';

const REVIEWS = [
  {
    name: 'م. عبدالله الشمري',
    car: 'تاهو 2021',
    location: 'حي النرجس (أمام المنزل)',
    date: 'منذ يومين',
    service: 'تبديل بطارية وفحص دينامو',
    review: 'توقفت السيارة فجأة في بايكة البيت والدوام كان على وشك يبدأ. تواصلت معهم واتساب، وصل الفني خلال 20 دقيقة بالضبط ومعه بطارية أصلية مع الضمان، ركبها وفحص الشحن وطلعت لدوامي بدون تأخير. خدمة ممتازة جداً.'
  },
  {
    name: 'سلطان القحطاني',
    car: 'مازدا CX-9',
    location: 'طريق المطار السريع',
    date: 'منذ أسبوع',
    service: 'عطل مفاجئ في السلف والكهرباء',
    review: 'انطفأت السيارة فجأة ورفضت التشغيل على الخط السريع. اتصلت برقم الطوارئ وجاء الفني بورشة مجهزة، فحص كهرباء السيارة واكتشف ارتخاء كيبل الدينامو وفيوز محترق، صلحها في الموقع وتحركت بأمان.'
  },
  {
    name: 'فهد العتيبي',
    car: 'لكزس ES350',
    location: 'حي اليرموك',
    date: 'منذ أسبوعين',
    service: 'فحص كمبيوتر وكشف لمبة المكينة',
    review: 'ولعت لمبة المكينة فجأة وكنت متخوف من القيادة للصناعية. الفني جاء للبيت مع جهاز كمبيوتر فحص متقدم وطلع لي الكود الخاص بحساس الهواء، قام بتنظيفه وإعادة البرمجة والحمد لله انحلت المشكلة بربع التكلفة المتوقعة.'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-amber-400 mb-2">تجارب واقعية للعملاء</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-balance">
            ثقة مئات السائقين والعائلات يومياً
          </h2>
          <p className="mt-3 text-neutral-300 text-base">
            آراء وتجارب حقيقية لعملاء تمت خدمتهم أمام منازلهم وفي أصعب مواقف الطرق السريعة.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-neutral-500">{review.date}</span>
                </div>

                <p className="text-neutral-200 text-sm leading-relaxed mb-6">
                  "{review.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/80">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white">{review.name}</div>
                    <div className="text-xs text-neutral-400 mt-0.5">
                      {review.car} <span aria-hidden="true">·</span> {review.location}
                    </div>
                  </div>
                  <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-2 text-[11px] text-amber-400/90 font-medium">
                  الخدمة: {review.service}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
