import { ServiceCard } from '@senkou/components/services';
import { SERVICES } from '@senkou/constants/services';

export default function Services() {
  return (
    <section
      className="w-full py-32 overflow-hidden relative bg-gray-900 text-white"
      id="services"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block px-4 py-1 bg-orange-100 text-orange-600 font-semibold rounded-full mb-3">
            Services
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/2">
              <h2 className="text-5xl font-bold leading-tight mb-6 text-white">
                Solusi kreatif untuk Anda
                <br />
                dari{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
                  Senkou Studio
                </span>
              </h2>
            </div>

            <div className="md:w-1/2">
              <p className="text-gray-300 leading-relaxed text-xl">
                <span className="font-semibold text-white">Senkou Studio</span>{' '}
                lebih dari sekadar penyedia jasa, kami adalah mitra digital
                Anda. Kami bekerja sama dengan Anda untuk memahami setiap detail
                kebutuhan bisnis Anda dan mewujudkannya dalam bentuk website
                yang sempurna.
              </p>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
