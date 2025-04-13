import type { LucideIcon } from 'lucide-react';

export interface PricingPlan {
  id: string;
  name: string;
  tags: string[];
  description: string;
  price: string | number;
  period: string;
  priceNote: string;
  className?: string;
  icon: LucideIcon;
  features: string[];
}
