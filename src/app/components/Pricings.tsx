import { Check, Star, Zap, Award, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Pricings() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  // Updated for yearly landing page services
  const pricingPlans = [
    {
      id: 'standard',
      name: 'Standard',
      tag: 'Most Popular',
      description:
        'High-quality landing page with essential features for small businesses',
      price: 'Rp5.999K',
      period: '/tahun',
      priceNote: 'Berlaku selama 12 bulan',
      color: 'from-orange-400 to-orange-500',
      icon: Star,
      features: [
        'Landing page responsive',
        '3 halaman termasuk homepage',
        '1x revisi desain',
        'Form kontak & integrasi email',
        'SEO dasar',
        'Hosting gratis 1 tahun',
        'Support teknis 3 bulan',
      ],
    },
    {
      id: 'growth',
      name: 'Growth',
      tag: 'Best value',
      description:
        'Solusi lengkap untuk bisnis yang sedang berkembang dengan fitur premium',
      price: 'Rp12.499K',
      period: '/tahun',
      priceNote: 'Berlaku selama 12 bulan',
      color: 'from-orange-500 to-orange-600',
      icon: Zap,
      features: [
        'Landing page responsive premium',
        '5 halaman kustom',
        '3x revisi desain',
        'Form kontak & CRM integration',
        'SEO optimization lengkap',
        'Hosting premium 1 tahun',
        'Support teknis 6 bulan',
      ],
    },
    {
      id: 'basic',
      name: 'Basic',
      tag: 'Starter',
      description: 'Solusi terjangkau untuk kebutuhan landing page sederhana',
      price: 'Rp2.999K',
      period: '/tahun',
      priceNote: 'Berlaku selama 12 bulan',
      color: 'from-orange-400 to-orange-500',
      icon: Award,
      features: [
        'Landing page responsive',
        '1 halaman (single page)',
        '1x revisi desain',
        'Form kontak dasar',
        'SEO dasar',
        'Hosting shared 1 tahun',
        'Support teknis 1 bulan',
      ],
    },
  ];

  return (
    <section className="w-full py-24 md:py-36 overflow-hidden relative bg-gradient-to-b from-slate-50 via-orange-50 to-white">
      {/* Modern gradient background with animated elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-200 rounded-full filter blur-3xl opacity-20 transform translate-x-1/3 -translate-y-1/3 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-orange-300 rounded-full filter blur-3xl opacity-20 transform -translate-x-1/4 translate-y-1/4 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-1/3 h-1/3 bg-blue-100 rounded-full filter blur-3xl opacity-10 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1/4 h-1/4 bg-orange-100 rounded-full filter blur-3xl opacity-15 transform translate-x-1/4 translate-y-1/4 animate-pulse"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-8 w-16 h-16 border-2 border-orange-200 rounded-lg rotate-12 opacity-30"></div>
      <div className="absolute bottom-20 right-8 w-24 h-24 border-2 border-orange-300 rounded-full opacity-20"></div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-orange-400 rounded-full opacity-10"></div>

      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header with enhanced typography */}
        <div className="mb-20">
          <div className="flex flex-col gap-8 md:gap-10 items-center text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-600 font-semibold rounded-full">
              <Star className="w-4 h-4 mr-2" />
              PAKET LANDING PAGE PREMIUM
            </div>
            <div className="w-full md:w-9/12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                Paket <span className="text-orange-500">Landing Page</span> Apa
                yang Cocok untuk Bisnis Anda?
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-600 mt-6 max-w-3xl mx-auto">
                Konsultasikan pada kami website impian Anda. GRATIS! Dengan
                senang hati kami akan membantu Anda menciptakan landing page
                impian dengan paket yang tepat untuk keperluan bisnis Anda.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {pricingPlans.map(plan => (
            <div
              key={plan.id}
              className={`relative rounded-3xl overflow-hidden shadow-xl transition-all duration-500 ${
                hoveredPlan === plan.id
                  ? 'scale-105 shadow-2xl shadow-orange-200'
                  : 'shadow-lg shadow-orange-100/30'
              } bg-white border border-gray-100`}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Popular badge if applicable */}
              {plan.tag === 'Most Popular' && (
                <div className="absolute -top-4 inset-x-0 flex justify-center">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg shadow-orange-200/50">
                    PALING POPULER
                  </div>
                </div>
              )}

              {/* Card Header */}
              <div
                className={`p-8 bg-gradient-to-r ${plan.color} text-white relative overflow-hidden`}
              >
                {/* Background decor */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/5 rounded-full transform -translate-x-12 translate-y-12"></div>

                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold flex items-center">
                      <plan.icon className="w-5 h-5 mr-2" /> {plan.name}
                    </h3>
                    {plan.tag && plan.tag !== 'Most Popular' && (
                      <span className="inline-block mt-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                        {plan.tag}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-sm text-white/90 mb-6 mt-2">
                  {plan.description}
                </p>

                <div className="flex items-baseline mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="ml-1 text-xl font-medium">
                    {plan.period}
                  </span>
                </div>
                <p className="text-sm text-white/80 mt-1">{plan.priceNote}</p>
              </div>

              {/* Card Body */}
              <div className="p-8">
                <h4 className="text-base font-medium text-gray-700 mb-4">
                  Fitur yang Didapatkan:
                </h4>
                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-3 text-orange-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 space-y-4">
                  <button className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-orange-200/50 hover:shadow-xl flex items-center justify-center">
                    Konsultasi Gratis
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                  <button className="w-full px-6 py-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-medium rounded-xl transition-colors duration-300">
                    Pesan Langsung
                  </button>
                </div>
              </div>

              {/* Best Value indicator */}
              {plan.tag === 'Best value' && (
                <div className="absolute top-8 right-8">
                  <div className="bg-white rounded-full p-2 shadow-md">
                    <Zap className="h-5 w-5 text-orange-500" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        {/* <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-50 to-orange-50 p-8 rounded-2xl border border-orange-100 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Semua Paket Termasuk
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="p-4 bg-white rounded-xl shadow-sm">
                <Check className="h-5 w-5 text-orange-500 mx-auto mb-2" />
                <p className="text-sm font-medium">Domain .com Gratis</p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-sm">
                <Check className="h-5 w-5 text-orange-500 mx-auto mb-2" />
                <p className="text-sm font-medium">SSL Certificate</p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-sm">
                <Check className="h-5 w-5 text-orange-500 mx-auto mb-2" />
                <p className="text-sm font-medium">Google Analytics</p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-sm">
                <Check className="h-5 w-5 text-orange-500 mx-auto mb-2" />
                <p className="text-sm font-medium">Optimasi Mobile</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
