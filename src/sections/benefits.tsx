'use client';

import { BENEFITS } from '@senkou/constants/benefits';
import { ChevronRight } from 'lucide-react';

export default function Benefits() {
  return (
    <section
      className="w-full py-32 overflow-hidden relative bg-gradient-to-b from-white to-orange-50"
      id="benefits"
    >
      {/* Main content container */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header with enhanced typography */}
        <div className="mb-24">
          <span className="inline-block py-1 px-3 bg-orange-100 text-orange-600 font-semibold rounded-full text-sm mb-6">
            Benefits
          </span>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/2">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Mengapa pilih
                <span className="relative inline-block">
                  {/* <span className="absolute inset-x-0 bottom-2 h-3 bg-orange-200 -z-10 transform -rotate-1"></span> */}
                  Jasa Pembuatan Website
                </span>
                di
                <span className="relative ml-2 text-orange-600">
                  Senkou Studio
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-orange-400"></span>
                </span>
              </h2>
            </div>

            <div className="md:w-1/2">
              <p className="text-xl leading-relaxed text-gray-700">
                Senkou Studio lebih dari sekadar penyedia jasa, kami adalah
                <span className="font-semibold"> mitra digital</span> Anda. Kami
                bekerja sama dengan Anda untuk memahami setiap detail kebutuhan
                bisnis Anda dan mewujudkannya dalam bentuk website yang
                sempurna.
              </p>
              <div
                className="mt-6 inline-flex items-center group cursor-pointer"
                onClick={() => {
                  window.open('https://wa.me/+6281325205723', '_blank');
                }}
              >
                <span className="text-orange-600 font-medium mr-2">
                  Konsultasi gratis
                </span>
                <ChevronRight
                  size={18}
                  className="text-orange-600 transition-transform group-hover:translate-x-1"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid with improved cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, index) => (
            <div
              key={index}
              className="benefit-item group p-8 rounded-2xl transition-all duration-300 bg-white border-[1px] border-gray-100 hover:transform hover:scale-[1.03]"
            >
              <div className="text-orange-500 mb-6 p-4 bg-orange-50 inline-flex items-center justify-center rounded-xl transition-all duration-500 group-hover:scale-[1.1]">
                <benefit.icon
                  size={32}
                  strokeWidth={1.5}
                  className="group-hover:scale-[1.2] transition-all duration-700"
                />
              </div>
              <h3 className="font-bold text-xl mb-4 flex items-center">
                <span>{benefit.title}</span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Optional animated dots pattern */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 hidden lg:block z-[-1]">
          <div className="grid grid-cols-3 gap-2">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-orange-200"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
