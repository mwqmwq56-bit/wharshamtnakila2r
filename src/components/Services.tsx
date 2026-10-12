import React, { useState } from 'react';
import { BatteryCharging, Cpu, Droplet, Zap, Wrench, Wind, MessageCircle, PhoneCall } from 'lucide-react';
import { createTelLink, createWhatsAppLink } from '../constants/contact';

import batteryImg from '../assets/images/service_battery_test_1791732398671.jpg';
import diagImg from '../assets/images/service_car_diagnostics_1791732419084.jpg';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image?: string;
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'battery-service',
    number: '01',
    title: 'فحص وتبديل بطاريات السيارات مع الضمان',
    description: 'توصيل وتركيب بطاريات أصلية معتمدة لجميع موديلات السيارات أمام منزلك، مع فحص كفاءة الدينامو ونظام الشحن مجاناً.',
    image: batteryImg,
    icon: BatteryCharging,
    features: [
      'بطاريات أصلية بضمان رسمي يبدأ من سنة',
      'فحص إلكتروني دقيق لجهد البطارية وعمرها الافتراضي',
      'فحص دينامو الشحن وتهريب الكهرباء',
      'توصيل واشتراك سيارات فوري ومحمي من الالتماس'
    ]
  },
  {
    id: 'diagnostic-service',
    number: '02',
    title: 'فحص كمبيوتر وبرمجة كشف الأعطال',
    description: 'أجهزة فحص إلكترونية محمولة ومتطورة لقراءة رموز الأعطال (OBD-II)، كشف أسباب ظهور لمبة المحرك، وبرمجة الحساسات.',
    image: diagImg,
    icon: Cpu,
    features: [
      'كشف دقيق على المحرك، القير، ونظام ABS والوسائد',
      'مسح لمبات التحذير وإعادة ضبط الحساسات',
      'تقرير فني مفصل ومباشر لحالة السيارة',
      'برمجة الثروتل وحساسات المحرك'
    ]
  },
  {
    id: 'oil-filter-service',
    number: '03',
    title: 'تبديل الزيوت والفلاتر أمام باب المنزل',
    description: 'صيانة دورية مريحة دون الحاجة لمغادرة بيتك. نوفر أجود أنواع الزيوت التخليقية الموصى بها وفلاتر الوكالة الأصلية.',
    icon: Droplet,
    features: [
      'زيوت تخليقية كاملة ونصف تخليقية معتمدة',
      'فلاتر زيت وهواء ومكيف أصلية',
      'سحب وشفط الزيت بأجهزة صديقة للبيئة بدون تلويث المكان',
      'فحص مجاني لمستوى سوائل الفرامل والمبرد ومساحات الزجاج'
    ]
  },
  {
    id: 'electrical-service',
    number: '04',
    title: 'صيانة كهرباء السيارات، السلف والدينامو',
    description: 'معالجة انقطاع الكهرباء المفاجئ، أعطال تشغيل السلف، تلف الدينامو، الفيوزات، وكافة التوصيلات الكهربائية.',
    icon: Zap,
    features: [
      'تشخيص سريع لعطل السلف وصوت النقر عند التشغيل',
      'إصلاح وتبديل الدينامو والشواحن الميدانية',
      'فحص علبة الفيوزات وتغيير التالف منها',
      'فحص الإضاءة والأنظمة الكهربائية المساندة'
    ]
  },
  {
    id: 'brakes-mechanical',
    number: '05',
    title: 'ميكانيكا خفيفة وصيانة أقمشة الفرامل',
    description: 'تبديل فحمات الفرامل وصيانة الهوبات وشد الجلنط والتأكد من منظومة التوقف للأمان التام.',
    icon: Wrench,
    features: [
      'تبديل أقمشة وفرامل أصلية في الموقع',
      'فحص سماكة الهوبات وخراطيش الزيت',
      'إصلاح خراطيم التبريد والسيور الظاهرة',
      'فحص كراسي الماكينة والمساعدات'
    ]
  },
  {
    id: 'ac-service',
    number: '06',
    title: 'صيانة مكيف السيارة وفحص تسريب الفريون',
    description: 'كشف تسريب غاز التكييف وتعبئة فريون أصلي مع فحص أداء الكمبروسر وتنظيف فلتر المكيف في موقعك.',
    icon: Wind,
    features: [
      'كشف تسريب الفريون بالأجهزة الإلكترونية',
      'تعبئة غاز فريون أصلي (R134a و R1234yf)',
      'فحص ضغط كمبروسر المكيف ومراوح التبريد',
      'تبديل وتنظيف فلتر مكيف المقصورة'
    ]
  }
];

export const Services: React.FC = () => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setFailedImages(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="services" className="py-20 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-amber-400 mb-2">خدمات الورشة المتنقلة</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-balance leading-tight">
            حلول متكاملة لصيانة وإصلاح سيارتك أينما توقفت
          </h2>
          <p className="mt-3 text-neutral-300 text-base leading-relaxed">
            جميع الخدمات تقدم بواسطة سيارات صيانة متخصصة وفنيين محترفين مجهزين بقطع الغيار والعدد الدقيقة لإنهاء الصيانة في موقعك فوراً.
          </p>
        </div>

        {/* Featured Visual Grid (Top 2 marquee services with high-res photos) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {SERVICES.slice(0, 2).map((service) => {
            const hasFailed = failedImages[service.id];
            const whatsAppMsg = `السلام عليكم، أرغب بطلب ورشة متنقلة لخدمة: ${service.title}`;

            return (
              <div
                key={service.id}
                className="group flex flex-col bg-neutral-900/70 border border-neutral-800 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all duration-200"
              >
                {/* Image slot */}
                <div className="relative h-60 bg-neutral-950 overflow-hidden">
                  {service.image && !hasFailed ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(service.id)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-neutral-900 text-amber-400">
                      <service.icon className="w-12 h-12" />
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-neutral-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-neutral-700 text-xs font-mono font-bold text-amber-400">
                    {service.number}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-300 mb-4 leading-relaxed flex-1">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6 border-t border-neutral-800/80 pt-4 text-xs text-neutral-300">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Direct Contact for this service */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-neutral-800">
                    <a
                      href={createWhatsAppLink(whatsAppMsg)}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold text-xs transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>طلب واتساب</span>
                    </a>

                    <a
                      href={createTelLink()}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-xs border border-neutral-700 transition-colors"
                    >
                      <PhoneCall className="w-4 h-4 text-amber-400" />
                      <span>اتصال فوري</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Services Grid (4 remaining specialized services) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.slice(2).map((service) => {
            const Icon = service.icon;
            const whatsAppMsg = `السلام عليكم، أرغب بطلب ورشة متنقلة لخدمة: ${service.title}`;

            return (
              <div
                key={service.id}
                className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-neutral-500">{service.number}</span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-xs text-neutral-300 leading-relaxed mb-4">{service.description}</p>

                  <ul className="space-y-1.5 mb-6 text-xs text-neutral-400">
                    {service.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-neutral-500 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-4 border-t border-neutral-800/80">
                  <a
                    href={createWhatsAppLink(whatsAppMsg)}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold text-xs transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>واتساب</span>
                  </a>

                  <a
                    href={createTelLink()}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-xs border border-neutral-700 transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                    <span>اتصال</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

