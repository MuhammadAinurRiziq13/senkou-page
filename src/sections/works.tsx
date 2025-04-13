'use client';

import { useMemo, useState } from 'react';
import { WorkCard } from '@senkou/components/works';
import { WORKS } from '@senkou/constants/works';
import { ChevronRight } from 'lucide-react';
import { parseCategoryName } from '@senkou/utils/text';
import Link from 'next/link';

export default function Works() {
  const [filter, setFilter] = useState('all');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const categories = ['all', 'web-page', 'web-app'];

  const filteredProjects = useMemo(() => {
    return filter === 'all'
      ? WORKS
      : WORKS.filter(project => project.category === filter);
  }, [filter]);

  return (
    <section
      className="w-full py-24 md:py-36 overflow-hidden relative bg-gradient-to-b from-white via-orange-50 to-white"
      id="portfolio"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-8 w-16 h-16 border-2 border-orange-200 rounded-lg rotate-12 opacity-30"></div>
      <div className="absolute bottom-20 right-8 w-24 h-24 border-2 border-orange-300 rounded-full opacity-20"></div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-orange-400 rounded-full opacity-10"></div>

      {/* Main content container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header with enhanced typography */}
        <div className="mb-20">
          <div className="flex flex-col gap-8 md:gap-10 items-center text-center">
            <div className="inline-block px-4 py-1 bg-orange-100 text-orange-600 font-semibold rounded-full">
              Portofolio Works
            </div>
            <div className="w-full md:w-9/12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                Lihat Karya Terbaru
                <br />
                dari{' '}
                <span className="relative text-gray-900">
                  Senkou Studio
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-orange-200 opacity-40 rounded-full"></span>
                </span>
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-600 mt-6 max-w-3xl mx-auto">
                Kami membantu klien meningkatkan bisnis mereka dengan website
                profesional dan aplikasi berkualitas tinggi yang didesain dengan
                memperhatikan kebutuhan pengguna.
              </p>
            </div>

            <div className="w-full flex flex-wrap justify-center gap-3 mt-8">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 cursor-pointer rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === cat
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-200'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {parseCategoryName(cat)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid with animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 transition-all duration-500">
          {filteredProjects.map((project, index) => (
            <WorkCard
              key={project.id}
              project={project}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>

        {/* View all button with enhanced style */}
        <div className="mt-20 text-center">
          <Link
            href="/works"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-medium rounded-full transition-all duration-300 shadow-lg shadow-orange-200/50 hover:shadow-xl"
          >
            View All Projects
            <ChevronRight className="ml-2 w-5 h-5 group-hover:ml-3 transition-all" />
          </Link>
        </div>
      </div>
    </section>
  );
}
