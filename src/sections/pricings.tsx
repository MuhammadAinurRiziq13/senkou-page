'use client';

import { useState } from 'react';
import { PRICING_PLANS } from '@senkou/constants/pricings';
import PricingCard from '../components/pricings/pricing-card';

export default function Pricings() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  return (
    <section
      className="w-full py-12 md:py-24 overflow-hidden relative bg-white"
      id="pricing"
    >
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
              {/* <Star className="w-4 h-4 mr-2" /> */}
              Paket Landing Premium
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
          {PRICING_PLANS.map(plan => (
            <PricingCard
              key={plan.name}
              isHovered={hoveredPlan === plan.name}
              isPopular={plan.tags.includes('Paling Populer')}
              isBestValue={plan.tags.includes('Nilai Terbaik')}
              onMouseOver={() => setHoveredPlan(plan.name)}
              onMouseLeave={() => setHoveredPlan(null)}
              {...plan}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
