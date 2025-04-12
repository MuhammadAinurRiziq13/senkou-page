import Navbar from '@senkou/components/navbar';
import Hero from '@senkou/components/hero';
import InfiniteMovingGallery from '@senkou/components/infinite-moving-gallery';
import Benefits from '@senkou/components/benefits';
import Services from '@senkou/components/services';
import Works from '@senkou/components/works';
import Pricings from '@senkou/components/pricings';
import FAQ from '@senkou/components/faq';
import Footer from '@senkou/components/footer';

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
