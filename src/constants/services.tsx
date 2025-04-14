import { LandingPageBlog } from '@senkou/components/blogs/services';
import type { Service } from '@senkou/types/service';

export const SERVICES: Service[] = [
  {
    id: 'web-page',
    title: 'Desain dan Pengembangan Halaman Web Professional',
    description:
      'Kami membuat halaman web yang menarik, responsif, dan mudah diakses di semua perangkat digital, disesuaikan dengan kebutuhan bisnis Anda',
    image: {
      src: '/services.png',
      alt: 'Web Professional',
      width: 800,
      height: 600,
    },
    category: 'web-page',
    extra: <LandingPageBlog />,
  },

  {
    id: 'web-app',
    title: 'Desain dan Pengembangan Aplikasi Web Kustom',
    description:
      'Kami menciptakan aplikasi web yang aman, efisien dan sesuai dengan kebutuhan bisnis Anda. Membantu Anda meningkatkan efisiensi operasional',
    image: {
      src: '/services.png',
      alt: 'Web Application',
      width: 800,
      height: 600,
    },
    category: 'web-app',
  },
];
