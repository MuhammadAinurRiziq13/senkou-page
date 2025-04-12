'use client';

import { useCallback } from 'react';
import type { OurWork } from '@senkou/types/work';
import { parseCategoryName } from '@senkou/utils/text';
import { ArrowRight, ExternalLink, Eye } from 'lucide-react';
import Image from 'next/image';

interface WorkCardProps {
  project: OurWork;
  index: number;
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
}

export default function WorkCard({
  project,
  index,
  activeIndex,
  setActiveIndex,
}: WorkCardProps) {
  const handleMouseEnter = useCallback(
    () => setActiveIndex(index),
    [index, setActiveIndex]
  );
  const handleMouseLeave = useCallback(
    () => setActiveIndex(null),
    [setActiveIndex]
  );

  const openProject = useCallback(
    () => window.open(`/works/${project.id}`, '_blank'),
    [project.id]
  );
  const viewProject = useCallback(
    () => window.open(`/works/${project.id}`),
    [project.id]
  );

  return (
    <div
      className={`group bg-white rounded-2xl overflow-hidden transition-all duration-500 transform border border-gray-100 
        ${activeIndex === index ? '-translate-y-2' : 'hover:-translate-y-2'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={300}
          className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700 p-2 rounded-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex gap-3 mt-4">
              <button className="w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors">
                <Eye className="w-5 h-5" />
              </button>
              <button
                className="w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer"
                onClick={openProject}
              >
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between p-6 min-h-[180px]">
        <div>
          <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm">{project.description}</p>
        </div>
        <div className="mt-auto pt-6 flex justify-between items-center">
          <div className="flex flex-wrap gap-2">
            <span className="text-xs text-orange-500 px-3 py-1 rounded-full bg-orange-100 font-semibold">
              {parseCategoryName(project.category)}
            </span>
            <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {project.year}
            </span>
          </div>
          <button
            className="text-orange-500 flex items-center text-sm font-medium group-hover:text-orange-600 transition-colors cursor-pointer"
            onClick={viewProject}
          >
            Lihat
            <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}
