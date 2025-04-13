import type { OurWork } from '@senkou/types/work';
import { QuizAppBlog } from '@senkou/components/blogs/works';

export const WORKS: OurWork[] = [
  {
    id: 'quiz-app',
    title: 'Quiz App',
    description: 'Sebuah aplikasi untuk mengerjakan sebuah quiz',
    image: '/services.png',
    category: 'web-app',
    country: {
      name: 'Indonesia',
      code: 'ID',
    },
    createdAt: new Date(2025, 0, 1),
    blog: <QuizAppBlog />,
  },
  {
    id: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    description: 'Platform belanja online dengan UX terbaik',
    image: '/services.png',
    category: 'web-app',
    country: {
      name: 'Indonesia',
      code: 'ID',
    },
    createdAt: new Date(2024, 0, 1),
  },
  {
    id: 'company-profile',
    title: 'Company Profile',
    description: 'Website resmi untuk perusahaan teknologi',
    image: '/services.png',
    category: 'web-page',
    country: {
      name: 'Indonesia',
      code: 'ID',
    },
    createdAt: new Date(2023, 0, 1),
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Website portofolio untuk desainer grafis',
    image: '/services.png',
    category: 'web-page',
    country: {
      name: 'Indonesia',
      code: 'ID',
    },
    createdAt: new Date(2024, 0, 1),
  },
  {
    id: 'learning-management-system',
    title: 'Learning Management System',
    description: 'Aplikasi untuk mengelola pembelajaran online',
    image: '/services.png',
    category: 'web-app',
    country: {
      name: 'Indonesia',
      code: 'ID',
    },
    createdAt: new Date(2024, 0, 1),
  },
  {
    id: 'restaurant-booking',
    title: 'Restaurant Booking',
    description: 'Sistem pemesanan untuk restoran premium',
    image: '/services.png',
    category: 'web-app',
    country: {
      name: 'Indonesia',
      code: 'ID',
    },
    createdAt: new Date(2023, 0, 1),
  },
];
