'use client';

import { BENEFITS } from '@senkou/constants/benefits';
import { ChevronRight } from 'lucide-react';

export default function Benefits() {
  return (
    <section
      className="relative w-full py-32 overflow-hidden bg-gradient-to-b from-white to-orange-50"
      id="benefits"
    >
      {/* Main content container */}
      <div className="relative z-10 max-w-6xl px-6 mx-auto">
        {/* Header with enhanced typography */}
        <div className="mb-24">
          <span className="inline-block px-3 py-1 mb-6 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full">
            Benefits
          </span>

          <div className="flex flex-col items-start gap-12 md:flex-row">
            <div className="md:w-1/2">
              <h2 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
                Mengapa pilih
                <span className="relative inline-block">
                  {/* <span className="absolute inset-x-0 h-3 transform bg-orange-200 bottom-2 -z-10 -rotate-1"></span> */}
                  Jasa Pembuatan Website
                </span>
                di
                <span className="relative px-2 mx-3 text-white">
                  Senkou Studio
                  <span className="absolute left-0 w-full bg-[#ff7513] h-18 -bottom-1 z-[-1] -rotate-2"></span>
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
                className="inline-flex items-center mt-6 cursor-pointer group"
                onClick={() => {
                  window.open('https://wa.me/+6281325205723', '_blank');
                }}
              >
                <span className="mr-2 font-medium text-orange-600">
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
              <h3 className="flex items-center mb-4 text-xl font-bold">
                <span>{benefit.title}</span>
              </h3>
              <p className="leading-relaxed text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Optional animated dots pattern */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 hidden lg:block z-[-1]">
          <div className="grid grid-cols-3 gap-2">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-orange-200 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
