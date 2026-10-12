import React, { useState } from 'react';
import { PhoneCall, MessageCircle, AlertTriangle, BatteryCharging, Wrench, Cpu, Droplet, Zap, Key, Fuel, Navigation, Copy, Check } from 'lucide-react';
import { WORKSHOP_PHONE_DISPLAY, createTelLink, createWhatsAppLink } from '../constants/contact';

interface IssueOption {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  estimatedTime: string;
  equipment: string;
}

const COMMON_ISSUES: IssueOption[] = [
  {
    id: 'battery',
    name: 'بطارية منتهية أو السيارة لا تدق سلف',
    icon: BatteryCharging,
    estimatedTime: '20-25 دقيقة',
    equipment: 'جهاز فحص كفاءة + بطاريات أصلية بضمان وكابلات اشتراك صناعية'
  },
  {
    id: 'brakes',
    name: 'صيانة وتبديل فحمات الفرامل (الأقمشة)',
    icon: Wrench,
    estimatedTime: '20-30 دقيقة',
    equipment: 'أطقم فحمات أصلية، فحص سماكة الهوبات، وجكات رفع هيدروليكية آمنة'
  },
  {
    id: 'computer',
    name: 'فحص كمبيوتر وكشف لمبة المحرك (Check Engine)',
    icon: Cpu,
    estimatedTime: '20-30 دقيقة',
    equipment: 'أجهزة فحص متطورة وقراءة وبرمجة الحساسات في الموقع'
  },
  {
    id: 'oil',
    name: 'تبديل زيت وسيفون أمام المنزل',
    icon: Droplet,
    estimatedTime: 'حسب موعد اتصالك',
    equipment: 'زيوت أصلية معتمدة، فلاتر وكالة، ومعدات شفط وسحب نظيفة'
  },
  {
    id: 'electric',
    name: 'مشكلة كهرباء، سلف، أو دينامو شحن',
    icon: Zap,
    estimatedTime: '25-35 دقيقة',
    equipment: 'طاقم كهربائي متخصص مع أدوات قياس الفولت والدينامو'
  },
  {
    id: 'lockout',
    name: 'المفتاح داخل السيارة / فتح سيارة مقفلة',
    icon: Key,
    estimatedTime: '15-20 دقيقة',
    equipment: 'أدوات هوائية خاصة لفتح الأبواب بدون أي خدوش للبودي'
  },
  {
    id: 'fuel',
    name: 'انقطاع البنزين / تزويد وقود طوارئ',
    icon: Fuel,
    estimatedTime: '15-25 دقيقة',
    equipment: 'عبوات وقود آمنة حسب نوع البنزين (91 أو 95) مع قمع مخصص'
  },
  {
    id: 'other',
    name: 'عطل ميكانيكي آخر / توقف مفاجئ',
    icon: AlertTriangle,
    estimatedTime: '20-30 دقيقة',
    equipment: 'حقيبة عدة ميكانيكية شاملة وفحص فوري للموقع'
  }
];

export const QuickContactHelper: React.FC = () => {
  const [selectedIssue, setSelectedIssue] = useState<IssueOption>(COMMON_ISSUES[0]);
  const [carType, setCarType] = useState('');
  const [locationName, setLocationName] = useState('');
  const [copied, setCopied] = useState(false);

  const generateMessage = () => {
    let msg = `السلام عليكم، أرغب بطلب ورشة متنقلة في موقعي فوراً.\n`;
    msg += `🔧 نوع المشكلة: ${selectedIssue.name}\n`;
    if (carType.trim()) {
      msg += `🚗 نوع وموديل السيارة: ${carType.trim()}\n`;
    }
    if (locationName.trim()) {
      msg += `📍 الحي أو الموقع: ${locationName.trim()}\n`;
    }
    msg += `يرجى إرسال أقرب فني متنقل مجهز. شكراً.`;
    return msg;
  };

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(WORKSHOP_PHONE_DISPLAY);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="quick-dispatch" className="py-16 bg-neutral-900/60 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-semibold text-amber-400 mb-2">تواصل مباشر وسريع</div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white text-balance">
            حدد عطل سيارتك وتواصل معنا فوراً
          </h2>
          <p className="mt-3 text-neutral-300 text-sm sm:text-base">
            اختر نوع العطل لتجهيز المعدات اللازمة وانقر للتواصل عبر الواتساب أو الاتصال الهاتفي مباشرة بدون انتظار
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Issue Selector Grid */}
          <div className="lg:col-span-7 bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span>١. ما هو العطل الذي تواجهه؟</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {COMMON_ISSUES.map((issue) => {
                const Icon = issue.icon;
                const isSelected = selectedIssue.id === issue.id;
                return (
                  <button
                    key={issue.id}
                    type="button"
                    onClick={() => setSelectedIssue(issue)}
                    className={`flex items-start gap-3 p-3.5 rounded-xl border text-right transition-all duration-150 ${
                      isSelected
                        ? 'border-amber-500 bg-amber-500/10 text-white shadow-sm'
                        : 'border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 text-neutral-300'
                    }`}
                  >
                    <div className={`p-2 rounded-lg shrink-0 ${isSelected ? 'bg-amber-500 text-neutral-950' : 'bg-neutral-800 text-neutral-400'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{issue.name}</div>
                      <div className="text-xs text-neutral-400 mt-0.5">وصول مقدر: {issue.estimatedTime}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            <h3 className="text-lg font-bold text-white mb-3">
              <span>٢. تفاصيل إضافية سريعة (اختياري لتجهيز القطع)</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                  نوع وموديل السيارة
                </label>
                <input
                  type="text"
                  placeholder="مثال: كامري 2020، تاهو 2018..."
                  value={carType}
                  onChange={(e) => setCarType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                  الحي أو الموقع التقريبي
                </label>
                <input
                  type="text"
                  placeholder="مثال: حي الياسمين، مخرج 5، أمام البيت..."
                  value={locationName}
                  onChange={(e) => setLocationName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Action Dispatch Summary Card */}
          <div className="lg:col-span-5 bg-neutral-950 border border-amber-500/30 rounded-2xl p-6 sm:p-8 space-y-6">
            <div>
              <div className="text-xs font-medium text-amber-400 mb-1">ملخص طلب الصيانة الميدانية</div>
              <h3 className="text-xl font-bold text-white">{selectedIssue.name}</h3>
            </div>

            <div className="bg-neutral-900/90 rounded-xl p-4 border border-neutral-800 space-y-3 text-sm">
              <div className="flex items-center justify-between text-neutral-300">
                <span className="text-neutral-400 text-xs">وقت الوصول المتوقع:</span>
                <span className="font-bold text-amber-400 tabular-nums">{selectedIssue.estimatedTime}</span>
              </div>
              <div className="border-t border-neutral-800 pt-2">
                <span className="text-neutral-400 text-xs block mb-1">المعدات المجهزة في سيارة الورشة:</span>
                <span className="text-neutral-200 text-xs leading-relaxed">{selectedIssue.equipment}</span>
              </div>
              <div className="border-t border-neutral-800 pt-2 flex items-center justify-between text-neutral-300">
                <span className="text-neutral-400 text-xs">طريقة التواصل:</span>
                <span className="text-emerald-400 text-xs font-semibold">واتساب أو اتصال مباشر فقط</span>
              </div>
            </div>

            {/* Direct Instant Action Buttons */}
            <div className="space-y-3">
              <a
                href={createWhatsAppLink(generateMessage())}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base transition-all duration-200 shadow-md shadow-emerald-600/30 active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>إرسال تفاصيل العطل عبر الواتساب</span>
              </a>

              <a
                href={createTelLink()}
                className="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-base transition-all duration-200 shadow-md shadow-amber-500/20 active:scale-[0.98]"
              >
                <PhoneCall className="w-5 h-5 stroke-[2.5]" />
                <span className="flex items-center gap-2">
                  <span>اتصال هاتفي مباشر</span>
                  <span dir="ltr" className="font-mono font-bold tracking-wider inline-block">
                    {WORKSHOP_PHONE_DISPLAY}
                  </span>
                </span>
              </a>

              <button
                type="button"
                onClick={copyPhoneNumber}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs font-medium border border-neutral-800 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">تم نسخ رقم الورشة بنجاح!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-neutral-400" />
                    <span className="flex items-center gap-1.5">
                      <span>نسخ رقم الهاتف:</span>
                      <span dir="ltr" className="font-mono font-bold inline-block">{WORKSHOP_PHONE_DISPLAY}</span>
                    </span>
                  </>
                )}
              </button>
            </div>

            <p className="text-[12px] text-neutral-400 text-center leading-relaxed">
              * متاحون 24 ساعة طوال أيام الأسبوع بما في ذلك الإجازات وعطلات نهاية الأسبوع.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
