'use client';

import { useState, useEffect } from 'react';
import { ChevronRight, ArrowRight, Eye, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function Works() {
  const projects = [
    {
      id: 'quiz-app',
      title: 'Quiz App',
      description: 'Sebuah aplikasi untuk mengerjakan sebuah quiz',
      image: '/services.png',
      category: 'Web App',
      year: '2023',
    },
    {
      id: 'e-commerce-platform',
      title: 'E-Commerce Platform',
      description: 'Platform belanja online dengan UX terbaik',
      image: '/services.png',
      category: 'Web App',
      year: '2024',
    },
    {
      id: 'company-profile',
      title: 'Company Profile',
      description: 'Website resmi untuk perusahaan teknologi',
      image: '/services.png',
      category: 'Web Page',
      year: '2023',
    },
    {
      id: 'portfolio-website',
      title: 'Portfolio Website',
      description: 'Website portofolio untuk desainer grafis',
      image: '/services.png',
      category: 'Web Page',
      year: '2024',
    },
    {
      id: 'learning-management-system',
      title: 'Learning Management System',
      description: 'Aplikasi untuk mengelola pembelajaran online',
      image: '/services.png',
      category: 'Web App',
      year: '2024',
    },
    {
      id: 'restaurant-booking',
      title: 'Restaurant Booking',
      description: 'Sistem pemesanan untuk restoran premium',
      image: '/services.png',
      category: 'Web App',
      year: '2023',
    },
  ];

  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web Page', 'Web App'];
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Filter projects based on selected category
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project => project.category === filter)
      );
    }

    // Animation on load
    setIsVisible(true);
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
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid with animations */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white rounded-2xl overflow-hidden  transition-all duration-500 transform border border-gray-100 
                ${
                  activeIndex === index
                    ? '-translate-y-2'
                    : 'hover:-translate-y-2'
                }
                  `}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
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
                        onClick={() =>
                          window.open(`/works/${project.id}`, '_blank')
                        }
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
                  {/* Tagging */}
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-medium bg-orange-500 px-3 py-1 rounded-full text-white">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {project.year}
                    </span>
                  </div>

                  <button
                    className="text-orange-500 flex items-center text-sm font-medium group-hover:text-orange-600 transition-colors cursor-pointer"
                    onClick={() => {
                      window.open(`/works/${project.id}`);
                    }}
                  >
                    Lihat
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all button with enhanced style */}
        <div className="mt-20 text-center">
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-medium rounded-full transition-all duration-300 shadow-lg shadow-orange-200/50 hover:shadow-xl"
          >
            View All Projects
            <ChevronRight className="ml-2 w-5 h-5 group-hover:ml-3 transition-all" />
          </a>
        </div>
      </div>
    </section>
  );
}
