import { PricingPlan } from '@senkou/types/pricing';
import { Award, Star, Zap } from 'lucide-react';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Dasar',
    tags: ['Pemula'],
    description: 'Solusi terjangkau untuk kebutuhan landing page sederhana',
    price: 'Rp2.999K',
    period: '/tahun',
    priceNote: 'Berlaku selama 12 bulan',
    className: 'from-orange-400 to-orange-500',
    icon: Award,
    features: [
      'Landing page responsive',
      '1 halaman (single page)',
      '1x revisi desain',
      'Form kontak dasar',
      'SEO dasar',
      'Hosting shared 1 tahun',
      'Dukungan teknis 1 bulan',
    ],
  },
  {
    id: 'standard',
    name: 'Standar',
    tags: ['Paling Populer'],
    description:
      'Landing page berkualitas tinggi dengan fitur esensial untuk bisnis kecil',
    price: 'Rp5.999K',
    period: '/tahun',
    priceNote: 'Berlaku selama 12 bulan',
    className: 'from-orange-400 to-orange-500',
    icon: Star,
    features: [
      'Landing page responsive',
      '3 halaman termasuk homepage',
      '1x revisi desain',
      'Form kontak & integrasi email',
      'SEO dasar',
      'Hosting gratis 1 tahun',
      'Dukungan teknis 3 bulan',
    ],
  },
  {
    id: 'growth',
    name: 'Pengembangan',
    tags: ['Nilai Terbaik'],
    description:
      'Solusi lengkap untuk bisnis yang sedang berkembang dengan fitur premium',
    price: 'Rp12.499K',
    period: '/tahun',
    priceNote: 'Berlaku selama 12 bulan',
    className: 'from-orange-500 to-orange-600',
    icon: Zap,
    features: [
      'Landing page responsive premium',
      '5 halaman kustom',
      '3x revisi desain',
      'Form kontak & integrasi CRM',
      'Optimasi SEO lengkap',
      'Hosting premium 1 tahun',
      'Dukungan teknis 6 bulan',
    ],
  },
];
