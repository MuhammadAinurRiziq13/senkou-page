'use client';

import { useMemo, useState } from 'react';
import { WorkCard } from '@senkou/components/works';
import { WORKS } from '@senkou/constants/works';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const CATEGORIES = [
  { key: 'all', label: 'Semua' },
  { key: 'web-page', label: 'Halaman Website' },
  { key: 'web-app', label: 'Aplikasi Web' },
];

export default function Works() {
  const [filter, setFilter] = useState('all');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filteredProjects = useMemo(() => {
    return filter === 'all'
      ? WORKS
      : WORKS.filter(project => project.category === filter);
  }, [filter]);

  return (
    <section
      className="relative w-full py-24 overflow-hidden md:py-36 bg-gradient-to-b from-white via-orange-50 to-white"
      id="portfolio"
    >
      {/* Decorative elements */}
      <div className="absolute w-16 h-16 border-2 border-orange-200 rounded-lg top-20 left-8 rotate-12 opacity-30"></div>
      <div className="absolute w-24 h-24 border-2 border-orange-300 rounded-full bottom-20 right-8 opacity-20"></div>
      <div className="absolute w-8 h-8 bg-orange-400 rounded-full top-1/3 right-1/4 opacity-10"></div>

      {/* Main content container */}
      <div className="relative z-10 max-w-6xl px-4 mx-auto sm:px-6">
        {/* Header with enhanced typography */}
        <div className="mb-12">
          <div className="flex flex-col items-center gap-8 text-center md:gap-10">
            <div className="inline-block px-4 py-1 font-semibold text-orange-600 bg-orange-100 rounded-full">
              Portofolio Works
            </div>
            <div className="w-full md:w-9/12">
              <h2 className="mb-6 text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-6xl bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text">
                Lihat Karya Terbaru
                <br />
                dari{' '}
                <span className="relative text-gray-900">
                  Senkou Studio
                  <span className="absolute left-0 w-full h-2 bg-orange-200 rounded-full bottom-1 opacity-40"></span>
                </span>
              </h2>
              <p className="max-w-3xl mx-auto mt-6 text-lg leading-relaxed text-gray-600 md:text-xl">
                Kami membantu klien meningkatkan bisnis mereka dengan website
                profesional dan aplikasi berkualitas tinggi yang didesain dengan
                memperhatikan kebutuhan pengguna.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 px-3 py-2 font-semibold text-white bg-orange-100 rounded-full max-w-fit">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.key}
                  onClick={() => setFilter(cat.key)}
                  className={`px-5 py-2 cursor-pointer rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === cat.key
                      ? 'bg-orange-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {/* {parseCategoryName(cat)} */}
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid with animations */}
        <div className="grid grid-cols-1 gap-8 transition-all duration-500 sm:grid-cols-2 lg:grid-cols-3 md:gap-10">
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
            className="inline-flex items-center px-8 py-4 font-medium text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 shadow-orange-200/50 hover:shadow-xl"
          >
            View All Projects
            <ChevronRight className="w-5 h-5 ml-2 transition-all group-hover:ml-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
