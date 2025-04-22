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
      className="relative w-full py-12 overflow-hidden bg-white md:py-24"
      id="faq"
    >
      {/* Enhanced decorative elements */}
      <div className="absolute w-16 h-16 border-2 border-orange-200 rounded-lg top-20 left-8 rotate-12 opacity-30 animate-bounce"></div>
      <div className="absolute w-24 h-24 border-2 border-orange-300 rounded-full bottom-20 right-8 opacity-20 animate-pulse"></div>
      <div className="absolute w-8 h-8 bg-orange-400 rounded-full top-1/3 right-1/4 opacity-10 animate-ping"></div>

      {/* Floating particles */}
      <div className="absolute hidden w-2 h-2 bg-orange-500 rounded-full opacity-50 md:block top-1/4 left-1/6 animate-ping"></div>
      <div className="absolute hidden w-3 h-3 bg-orange-400 rounded-full md:block top-2/3 right-1/6 opacity-40 animate-ping"></div>
      <div className="absolute hidden w-2 h-2 bg-orange-300 rounded-full md:block bottom-1/4 left-1/3 opacity-60 animate-ping"></div>

      {/* Main content container */}
      <div className="relative z-10 max-w-6xl px-4 mx-auto sm:px-6">
        {/* Header with enhanced typography */}
        <div className="mb-16">
          <div className="flex flex-col items-center gap-8 text-center md:gap-10">
            <div className="inline-flex items-center px-4 py-1 font-semibold text-orange-600 bg-orange-100 rounded-full">
              {/* <span className="mr-2">✨</span> */}
              <span>FAQ&apos;s</span>
              {/* <span className="ml-2">✨</span> */}
            </div>
            <div className="w-full md:w-9/12">
              <h2 className="mb-6 text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-6xl bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text">
                Pertanyaan yang
                <br />
                Sering{' '}
                <span className="relative inline-block text-gray-900">
                  Ditanyakan
                  <span className="absolute left-0 w-full h-3 transform bg-orange-200 rounded-full -bottom-1 opacity-40 skew-x-2"></span>
                </span>
              </h2>
              <p className="max-w-3xl mx-auto mt-6 text-lg leading-relaxed text-gray-600 md:text-xl">
                Temukan jawaban untuk pertanyaan umum tentang layanan digital
                Senkou Studio, proses kerja kami, dan bagaimana kami dapat
                membantu bisnis Anda berkembang.
              </p>
            </div>
          </div>
        </div>

        <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
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
