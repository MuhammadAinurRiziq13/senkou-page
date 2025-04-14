import type { PricingPlan } from '@senkou/types/pricing';
import type { HTMLAttributes } from 'react';
import { ArrowRight, Check, Zap } from 'lucide-react';

export default function PricingCard({
  id,
  name,
  description,
  discount,
  icon: Icon,
  tags,
  period,
  priceNote,
  price,
  features,
  isHovered,
  isPopular,
  isBestValue,
  className,
  ...props
}: Readonly<
  PricingPlan & {
    isHovered?: boolean;
    isPopular?: boolean;
    isBestValue?: boolean;
  } & HTMLAttributes<HTMLDivElement>
>) {
  return (
    <div
      key={id}
      className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${
        isHovered && 'scale-[1.02] '
      } bg-white border border-gray-100`}
      {...props}
    >
      {/* Popular badge if applicable */}
      {isPopular && (
        <div className="absolute -top-4 inset-x-0 flex justify-center">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg shadow-orange-200/50">
            PALING POPULER
          </div>
        </div>
      )}

      {/* Card Header */}
      <div
        className={`p-8 min-h-72 bg-gradient-to-r ${className} text-white relative overflow-hidden`}
      >
        {/* Background decor */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/5 rounded-full transform -translate-x-12 translate-y-12"></div>

        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold flex items-center">
              <Icon className="w-5 h-5 mr-2" /> {name}
            </h3>
            {isPopular && (
              <span className="inline-block mt-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                {tags[0]}
              </span>
            )}
          </div>
        </div>

        <p className="text-sm text-white/90 mb-6 mt-2">{description}</p>

        <div className="flex items-baseline mt-4">
          <span className="text-3xl font-bold">
            {new Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
            }).format(Number(price) - Number(discount))}
          </span>
          {discount && (
            <span className="ml-2 text-md font-medium line-through text-gray-400">
              {new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
              }).format(Number(price))}
            </span>
          )}
          <span className="ml-1 text-xl font-medium">{period}</span>
        </div>
        <p className="text-sm text-white/80 mt-1">{priceNote}</p>
      </div>

      {/* Card Body */}
      <div className="p-8">
        <h4 className="text-base font-medium text-gray-700 mb-4">
          Fitur yang Didapatkan:
        </h4>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="mr-3 text-orange-500 w-5 h-5 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 space-y-4">
          <button className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-orange-200/50 hover:shadow-xl flex items-center justify-center">
            Konsultasi Gratis
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
          <button className="w-full px-6 py-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-medium rounded-xl transition-colors duration-300">
            Pesan Langsung{' '}
          </button>
        </div>
      </div>

      {/* Best Value indicator */}
      {isBestValue && (
        <div className="absolute top-8 right-8">
          <div className="bg-white rounded-full p-2 shadow-md">
            <Zap className="h-5 w-5 text-orange-500" />
          </div>
        </div>
      )}
    </div>
  );
}
