'use client';

import Hero from '@components/Hero';
import Navbar from '@components/Navbar';
import InfiniteMovingGallery from '@components/InfiniteMovingGallery';
import Benefits from '@components/Benefits';
import Services from '@components/Services';
import Works from '@components/Works';
import Pricings from '@components/Pricings';
import FAQ from '@components/FAQ';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 text-gray-900 flex flex-col items-center">
      <Navbar />
      <Hero />
      <div className="w-full mt-24">
        <InfiniteMovingGallery />
      </div>
      <Benefits />
      <Services />
      <Works />
      <Pricings />
      <FAQ />
      <Footer />
    </div>
  );
}
