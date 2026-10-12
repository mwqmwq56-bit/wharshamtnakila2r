import React from 'react';
import { MapPin, Navigation2, Check, Clock } from 'lucide-react';

const REGIONS = [
  {
    name: 'شمال المدينة والأحياء السكنية',
    neighborhoods: 'الياسمين، النرجس، الملقا، حطين، الصحافة، العقيق، الغدير',
    response: '15 - 25 دقيقة',
    units: '3 ورش متنقلة مناوبة'
  },
  {
    name: 'شرق ووسط المدينة',
    neighborhoods: 'اليرموك، الروضة، قرطبة، الحمراء، السليمانية، العليا، الملز',
    response: '20 - 25 دقيقة',
    units: '4 ورش متنقلة مناوبة'
  },
  {
    name: 'غرب وجنوب المدينة',
    neighborhoods: 'لبن، طويق، البديعة، الشفاء، نمار، السويدي، العزيزية',
    response: '20 - 30 دقيقة',
    units: '3 ورش متنقلة مناوبة'
  },
  {
    name: 'المحاور والطرق السريعة والدائرية',
    neighborhoods: 'الطريق الدائري الشمالي والشرقي، طريق الملك فهد، طريق المطار، طريق الخرج',
    response: '15 - 25 دقيقة',
    units: '2 سيارات إنقاذ سريع'
  }
];

const CAR_BRANDS = [
  'تويوتا', 'لكزس', 'هيونداي', 'كيا', 'فورد', 'جي إم سي', 'شيفروليه', 'نيسان', 'مازدا', 'هوندا', 'مرسيدس-بنز', 'بي إم دبليو', 'أودي', 'فولكس فاجن', 'ميتسوبيشي', 'إم جي', 'جيلي', 'هافال', 'شيري', 'شانجان'
];

export const CoverageAreas: React.FC = () => {
  return (
    <section id="coverage" className="py-20 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-amber-400 mb-2">نطاق التغطية والميدان</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-balance">
            تغطية شاملة لجميع الأحياء والمحاور الرئيسية
          </h2>
          <p className="mt-3 text-neutral-300 text-base">
            تنتشر سيارات الصيانة المتنقلة في نقاط ارتكاز استراتيجية لضمان سرعة الوصول إلى موقعك أو أمام منزلك بأقصر وقت ممكن.
          </p>
        </div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {REGIONS.map((region, idx) => (
            <div
              key={idx}
              className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-700 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{region.name}</h3>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-amber-400 bg-neutral-950 px-2.5 py-1 rounded-md border border-neutral-800 whitespace-nowrap">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="tabular-nums">{region.response}</span>
                </div>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                <span className="text-neutral-400 text-xs block mb-1">أبرز الأحياء المشمولة:</span>
                {region.neighborhoods}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-neutral-800 text-xs text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <Navigation2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{region.units}</span>
                </span>
                <span className="text-emerald-400 font-medium">خدمة نشطة الآن</span>
              </div>
            </div>
          ))}
        </div>

        {/* Supported Car Brands */}
        <div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-white">نخدم جميع أنواع وماركات السيارات</h3>
              <p className="text-neutral-400 text-xs mt-1">تتوفر برمجيات الفحص وقطع الغيار للسيارات اليابانية، الكورية، الأمريكية، الأوروبية والصينية</p>
            </div>
            <div className="text-xs text-amber-400 font-semibold flex items-center gap-1.5">
              <Check className="w-4 h-4" />
              <span>فنيون متخصصون لكل طراز</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {CAR_BRANDS.map((brand, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-300 text-xs font-medium"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
