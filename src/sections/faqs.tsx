'use client';

import { useState } from 'react';
import { FAQs } from '@senkou/constants/faqs';
import { FAQ, FAQCTA } from '@senkou/components/faqs';

export default function FAQS() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="w-full py-12 md:py-24 overflow-hidden relative bg-white"
      id="faq"
    >
      {/* Enhanced decorative elements */}
      <div className="absolute top-20 left-8 w-16 h-16 border-2 border-orange-200 rounded-lg rotate-12 opacity-30 animate-bounce"></div>
      <div className="absolute bottom-20 right-8 w-24 h-24 border-2 border-orange-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-orange-400 rounded-full opacity-10 animate-ping"></div>

      {/* Floating particles */}
      <div className="hidden md:block absolute top-1/4 left-1/6 w-2 h-2 bg-orange-500 rounded-full opacity-50 animate-ping"></div>
      <div className="hidden md:block absolute top-2/3 right-1/6 w-3 h-3 bg-orange-400 rounded-full opacity-40 animate-ping"></div>
      <div className="hidden md:block absolute bottom-1/4 left-1/3 w-2 h-2 bg-orange-300 rounded-full opacity-60 animate-ping"></div>

      {/* Main content container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header with enhanced typography */}
        <div className="mb-16">
          <div className="flex flex-col gap-8 md:gap-10 items-center text-center">
            <div className="inline-flex items-center px-4 py-1 bg-orange-100 text-orange-600 font-semibold rounded-full">
              {/* <span className="mr-2">✨</span> */}
              <span>FAQ&apos;s</span>
              {/* <span className="ml-2">✨</span> */}
            </div>
            <div className="w-full md:w-9/12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent">
                Pertanyaan yang
                <br />
                Sering{' '}
                <span className="relative inline-block text-gray-900">
                  Ditanyakan
                  <span className="absolute -bottom-1 left-0 w-full h-3 bg-orange-200 opacity-40 rounded-full transform skew-x-2"></span>
                </span>
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-600 mt-6 max-w-3xl mx-auto">
                Temukan jawaban untuk pertanyaan umum tentang layanan digital
                Senkou Studio, proses kerja kami, dan bagaimana kami dapat
                membantu bisnis Anda berkembang.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          {FAQs.map((faq, index) => (
            <FAQ
              key={index}
              index={index}
              active={activeIndex === index}
              onClick={() => toggleAccordion(index)}
              {...faq}
            />
          ))}
        </div>

        <FAQCTA />
      </div>
    </section>
  );
}
