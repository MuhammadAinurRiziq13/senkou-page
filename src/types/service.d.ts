export type ServiceCategory = 'web-app' | 'web-page';

export interface Service {
  id: string;
  title: string;
  description: string;
  image: React.ImgHTMLAttributes<HTMLImageElement>;
  category: ServiceCategory;
  price?: number;
}
