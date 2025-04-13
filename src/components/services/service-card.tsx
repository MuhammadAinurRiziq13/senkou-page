import { Service } from '@senkou/types/service';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ServiceCard({
  id,
  title,
  description,
  image,
}: Service) {
  return (
    <div className="relative rounded-xl overflow-hidden group transition-all duration-500 hover:shadow-xl border border-gray-800 hover:scale-105">
      <Image
        src={image.src!}
        alt={image.alt!}
        width={800}
        height={600}
        priority
        className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8 flex flex-col justify-end">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
          {description}
        </p>
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-200">
          <Link href={`/services/${id}`}>
            <span className="text-orange-400 font-medium flex items-center gap-2 cursor-pointer hover:gap-3 transition-all duration-300">
              Pelajari lebih lanjut <ChevronRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
