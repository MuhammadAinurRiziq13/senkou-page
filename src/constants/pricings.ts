import { PricingPlan } from '@senkou/types/pricing';
import { Award, Star, Zap } from 'lucide-react';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Paket UMKM',
    tags: ['Pemula'],
    description:
      'Pilihan sempurna untuk UMKM yang ingin memulai dengan landing page sederhana namun profesional.',
    price: 200000,
    discount: 75000,
    period: '',
    priceNote: 'Berlaku selama 12 bulan',
    className: 'from-orange-400 to-orange-500',
    icon: Award,
    features: [
      'Satu halaman website',
      'Optimasi SEO dasar',
      'Gratis hosting dan domain',
      'Gratis SSL',
      'Gratis maintenance 1 bulan',
      'Pengerjaan kurang lebih 3 hari',
    ],
  },

  {
    id: 'standard',
    name: 'Paket Startup',
    tags: ['Nilai Terbaik'],
    description:
      'Pilihan ideal untuk startup yang membutuhkan landing page modern dengan fitur esensial untuk berkembang.',
    price: 300000,
    discount: 100000,
    period: '',
    priceNote: 'Berlaku selama 12 bulan',
    className: 'from-orange-500 to-orange-600',
    icon: Star,
    features: [
      'Tiga halaman website termasuk homepage',
      '2x revisi desain',
      'Form kontak & integrasi email',
      'Optimasi SEO dasar',
      'Gratis hosting dan domain',
      'Gratis SSL',
      'Gratis maintenance 3 bulan',
      'Pengerjaan kurang lebih 5 hari',
    ],
  },
  {
    id: 'growth',
    name: 'Paket Korporat',
    tags: ['Nilai Terbaik'],
    description:
      'Solusi premium untuk perusahaan yang ingin tampil profesional dengan fitur lengkap dan desain eksklusif.',
    price: 600000,
    discount: 100000,
    period: '',
    priceNote: 'Berlaku selama 12 bulan',
    className: 'from-orange-400 to-orange-500',
    icon: Zap,
    features: [
      'Tiga halaman lebih termasuk homepage',
      '3x revisi desain',
      'Form kontak & integrasi email',
      'Optimasi SEO lanjutan',
      'Gratis hosting dan domain',
      'Gratis SSL',
      'Gratis maintenance 6 bulan',
      'Pengerjaan kurang lebih 7 hari',
    ],
  },
];
