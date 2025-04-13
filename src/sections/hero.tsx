'use client';

import { ArrowRight, Code, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { memo, ReactNode } from 'react';

const WHATSAPP_URL =
  'https://wa.me/6281325205723?text=Halo%20Senkou%20Studio,%20saya%20ingin%20konsultasi%20tentang%20website.';

const BackgroundElements = memo(() => (
  <>
    <div className="absolute top-0 -right-20 w-72 h-72 bg-orange-300 rounded-full blur-3xl opacity-30"></div>
    <div className="absolute -top-20 -left-20 w-64 h-64 bg-red-300 rounded-full blur-3xl opacity-20"></div>
    <div className="absolute top-10 right-10 animate-pulse">
      <Sparkles className="text-orange-400 w-8 h-8 opacity-70" />
    </div>
    <div className="absolute bottom-10 left-20 animate-bounce">
      <Code className="text-red-400 w-6 h-6 opacity-60" />
    </div>
  </>
));

BackgroundElements.displayName = 'BackgroundElements';

interface ButtonProps {
  href: string;
  children: ReactNode;
}

const PrimaryButton = ({ href, children }: ButtonProps) => (
  <a
    href={href}
    className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 text-base font-medium rounded-full transform transition-all duration-300 hover:-translate-y-1 group"
  >
    <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
    <span className="relative flex items-center justify-center gap-2">
      {children}
    </span>
  </a>
);

const SecondaryButton = ({ href, children }: ButtonProps) => (
  <Link
    href={href}
    className="bg-white text-gray-800 font-semibold border border-gray-200 hover:border-orange-300 px-8 py-4 rounded-full text-base transition-all duration-300 hover:-translate-y-1 inline-block"
  >
    {children}
  </Link>
);

export default function Hero() {
  return (
    <section className="relative w-full max-w-5xl text-center mt-32 px-4 pt-8">
      <BackgroundElements />

      <div className="relative">
        <span className="inline-block py-1 px-3 bg-orange-100 text-orange-600 font-semibold rounded-full text-sm mb-6">
          Website Development Agency
        </span>
        <h2 className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-700">
          Bingung Mau Bikin Website?
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500">
            Kami Bantu Sampai Jadi
          </span>
        </h2>
        <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
          Jangan khawatir, di Senkou Studio siap menemani perjalanan digital
          Anda. Dari konsep awal hingga website yang siap meluncur, kami ada di
          setiap langkah.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <PrimaryButton href={WHATSAPP_URL}>
            Pesan Sekarang
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </PrimaryButton>
          <SecondaryButton href="/works">Lihat Portfolio</SecondaryButton>
        </div>
      </div>
    </section>
  );
}
