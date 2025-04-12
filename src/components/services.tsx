'use client';

import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Services() {
  return (
    <section
      className="w-full py-32 overflow-hidden relative bg-gray-900 text-white"
      id="services"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-1 bg-orange-100 text-orange-600 font-semibold rounded-full mb-3">
            Services
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/2">
              <h2 className="text-5xl font-bold leading-tight mb-6 text-white">
                Solusi kreatif untuk Anda
                <br />
                dari{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
                  Senkou Studio
                </span>
              </h2>
            </div>

            <div className="md:w-1/2">
              <p className="text-gray-300 leading-relaxed text-xl">
                <span className="font-semibold text-white">Senkou Studio</span>{' '}
                lebih dari sekadar penyedia jasa, kami adalah mitra digital
                Anda. Kami bekerja sama dengan Anda untuk memahami setiap detail
                kebutuhan bisnis Anda dan mewujudkannya dalam bentuk website
                yang sempurna.
              </p>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="relative rounded-xl overflow-hidden group transition-all duration-500 hover:shadow-xl border border-gray-800 hover:scale-105">
            <Image
              src="/services.png"
              alt="Web Professional"
              width={800}
              height={600}
              priority
              className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                Desain dan Pengembangan Halaman
                <br />
                Web Professional
              </h3>
              <p className="text-gray-300 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                Kami membuat halaman web yang menarik, responsif, dan mudah
                diakses di semua perangkat digital, disesuaikan dengan kebutuhan
                bisnis Anda
              </p>
              <div
                className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-200"
                onClick={() => {
                  window.location.href = '/services';
                }}
              >
                <span className="text-orange-400 font-medium flex items-center gap-2 cursor-pointer hover:gap-3 transition-all duration-300">
                  Pelajari lebih lanjut <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-xl overflow-hidden group transition-all duration-500 hover:shadow-xl border border-gray-800 hover:scale-105">
            <Image
              src="/services.png"
              alt="Web Application"
              width={800}
              height={600}
              priority
              className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                Desain dan Pengembangan Aplikasi Web
                <br />
                Kustom
              </h3>
              <p className="text-gray-300 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                Kami menciptakan aplikasi web yang aman, efisien dan sesuai
                dengan kebutuhan bisnis Anda. Membantu Anda meningkatkan
                efisiensi operasional
              </p>
              <div
                className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-200"
                onClick={() => {
                  window.location.href = '/services';
                }}
              >
                <span className="text-orange-400 font-medium flex items-center gap-2 cursor-pointer hover:gap-3 transition-all duration-300">
                  Pelajari lebih lanjut <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
