'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu, X, ChevronRight, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // ⬅️ Kontrol mounting

  const menuItems = ['Benefits', 'Services', 'Portfolio', 'Pricing', 'FAQ'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      setShowMenu(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timeout = setTimeout(() => setShowMenu(false), 300);
      document.body.style.overflow = '';
      return () => clearTimeout(timeout);
    }
  }, [mobileMenuOpen]);

  const handleMenuItemClick = (item: string) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(item.toLowerCase());
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 max-w-screen transition-all duration-300 border-b border-gray-100 ${
        isScrolled && 'bg-white/90 backdrop-blur-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" width={40} height={40} alt="logo" />
          <h1 className="text-xl font-bold text-gray-900">
            <span className="bg-clip-text text-orange-600">Senkou</span>{' '}
            <span>Studio</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          {menuItems.map(item => (
            <li
              key={item}
              className="relative group cursor-pointer"
              onClick={() => handleMenuItemClick(item)}
            >
              <span className="hover:text-orange-500 transition-colors">
                {item}
              </span>
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full group-hover:left-0 transition-all duration-300" />
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
            onClick={() => {
              window.location.href =
                'https://wa.me/6281325205723?text=Halo%20Senkou%20Studio,%20saya%20ingin%20konsultasi%20tentang%20website.';
            }}
          >
            <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative flex items-center gap-2">
              Order Now
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 relative z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div
          className={`w-screen h-screen md:hidden fixed z-[999] top-0 left-0 bg-white/95 backdrop-blur-md flex items-center justify-center transition-all duration-300 ease-in-out transform ${
            mobileMenuOpen
              ? 'opacity-100 pointer-events-auto translate-y-0'
              : 'opacity-0 pointer-events-none translate-y-[-10px]'
          }`}
        >
          {/* Close Button */}
          <div
            className="absolute top-4 right-4 cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="w-8 h-8 text-gray-700" />
          </div>

          {/* Menu Items */}
          <ul
            className={`flex flex-col text-gray-800 font-medium text-center gap-6 transition-all duration-300 transform ${
              mobileMenuOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-2'
            }`}
          >
            {menuItems.map(item => (
              <li
                key={item}
                className="px-4 py-2 hover:text-orange-500 transition-colors cursor-pointer text-xl font-semibold"
                onClick={() => handleMenuItemClick(item)}
              >
                {item}
              </li>
            ))}

            <li className="px-4 py-3 mt-4">
              <button
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-medium shadow-md flex items-center justify-center gap-2"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.location.href =
                    'https://wa.me/6281325205723?text=Halo%20Senkou%20Studio,%20saya%20ingin%20konsultasi%20tentang%20website.';
                }}
              >
                Order Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
