'use client';

import { WORKS } from '@senkou/constants/works';
import { OurWork } from '@senkou/types/work';
import { motion } from 'framer-motion';

function Slider({ work }: { work: OurWork }) {
  return (
    <div className="w-96 bg-white border border-gray-200 rounded-lg flex flex-col justify-between gap-4 px-1 py-4 flex-shrink-0">
      <div className="">{/* Logo */}</div>
      <div className="flex gap-4">
        <img
          src={work.image || 'https://placehold.co/100'}
          alt="Project Thumbnail"
          className="w-12 h-12 object-cover rounded-lg"
        />
        <div>
          <h3 className="text-md font-medium text-black">{work.title}</h3>
          <p className="text-gray-500 text-sm">{work.description}</p>
        </div>
        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-neutral-200 p-2 mr-1">
          <img
            src={`https://flagsapi.com/${work.country.code}/flat/64.png`}
            alt={work.country.name}
            className="object-cover"
          />
        </div>
      </div>
      <span className="flex items-center justify-end mr-4 text-neutral-400 text-sm">
        <b className="ml-1">
          {(() => {
            const units = [
              { label: 'year', seconds: 31536000 },
              { label: 'month', seconds: 2592000 },
              { label: 'day', seconds: 86400 },
              { label: 'hour', seconds: 3600 },
              { label: 'minute', seconds: 60 },
            ];

            const diffSeconds = Math.floor(
              (new Date().getTime() - new Date(work.createdAt).getTime()) / 1000
            );

            if (diffSeconds < 60) return 'just now';

            for (const { label, seconds } of units) {
              const value = Math.floor(diffSeconds / seconds);
              if (value >= 1) {
                return `${value} ${label}${value !== 1 ? 's' : ''} ago`;
              }
            }

            return 'just now';
          })()}
        </b>
      </span>
    </div>
  );
}

export default function WorkSlider() {
  const duplicatedWorks = [...WORKS, ...WORKS];

  return (
    <section className="overflow-hidden py-6 space-y-6">
      {/* Baris 1 - Ke kiri */}
      <motion.div
        className="flex gap-8 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 30,
          ease: 'linear',
        }}
      >
        {duplicatedWorks.map((work, index) => (
          <Slider key={`top-${index}`} work={work} />
        ))}
      </motion.div>

      {/* Baris 2 - Ke kanan */}
      <motion.div
        className="flex gap-8 w-max"
        animate={{ x: ['-50%', '0%'] }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 40,
          ease: 'linear',
        }}
      >
        {duplicatedWorks.map((work, index) => (
          <Slider key={`bottom-${index}`} work={work} />
        ))}
      </motion.div>
    </section>
  );
}
