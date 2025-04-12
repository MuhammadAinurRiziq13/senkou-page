export type WorkCategory =
  | 'web-app'
  | 'web-page'
  | 'mobile-app'
  | 'desktop-app'
  | 'other';

export interface OurWork {
  id: string;
  title: string;
  description: string;
  image: string;
  category: WorkCategory;
  year: number;
}
