import type { Benefit } from '@senkou/types/benefit';
import {
  Cpu,
  DollarSign,
  Headphones,
  Infinity,
  Rocket,
  Settings,
  Target,
  ThumbsUp,
  Zap,
} from 'lucide-react';

export const BENEFITS: Benefit[] = [
  {
    icon: Infinity,
    title: 'On-demand requests',
    description:
      'Kami sangat permisif dengan desain Anda ke website, dan kami akan mewujudkan keinginan Anda.',
  },
  {
    icon: Zap,
    title: 'Top-notch quality',
    description:
      'Hasil karya berkualitas tinggi dari tim senkou yang berdedikasi dan selalu siap membantu Anda.',
  },
  {
    icon: Cpu,
    title: 'Powered by modern tech',
    description:
      'Kami membangun setiap situs dengan teknologi modern, menggunakan dimanis, mudah dikelola, dan mobile-oriented.',
  },
  {
    icon: Rocket,
    title: 'Fast. Responsive. Reliable.',
    description:
      'Diawali pembaruan rutin terhadap project Anda dan hampiran desain Anda selesai dalam 2-3 hari.',
  },
  {
    icon: Target,
    title: 'Great value for money',
    description:
      'Dapatkan kekuatan fitur yang berdedikasi dengan biaya yang jauh lebih rendah dari lainnya.',
  },
  {
    icon: Settings,
    title: 'Customized for you',
    description:
      'Kami merancang dan membangun khusus untuk Anda, kami tidak pernah memulai dari tempat kecuali Anda menginginkannya.',
  },
  {
    icon: DollarSign,
    title: 'Creative paying',
    description:
      'Kami siap membantu Anda agar Anda membayar kecil, dan tidak membebani anggaran Anda saat Anda tidak menginginkannya.',
  },
  {
    icon: ThumbsUp,
    title: 'Positif testimonials',
    description:
      'Kami memiliki banyak testimoni positif dari klien yang puas dengan layanan kami membukikan komitmen kami terhadap kualitas dan kepuasan pelanggan.',
  },
  {
    icon: Headphones,
    title: 'High support',
    description:
      'Kami memberikan dukungan penuh terhadap Anda untuk memastikan Anda merasa nyaman dan percaya diri dengan hasil kami.',
  },
];
