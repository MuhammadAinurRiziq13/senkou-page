import Navbar from '@senkou/components/navbar/navbar';
import InfiniteMovingGallery from '@senkou/components/infinite-moving-gallery';
import Hero from '@senkou/sections/hero';
import Benefits from '@senkou/sections/benefits';
import Services from '@senkou/sections/services';
import Works from '@senkou/sections/works';
import Pricings from '@senkou/sections/pricings';
import FAQ from '@senkou/sections/faqs';
import Footer from '@senkou/sections/footer';

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen overflow-hidden bg-gradient-to-b from-white to-orange-50 text-gray-900 flex flex-col items-center">
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
