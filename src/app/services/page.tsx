import { Navbar } from '@senkou/components/navbar';
import { SERVICES } from '@senkou/constants/services';
import Footer from '@senkou/sections/footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  return (
    <main className="min-h-screen py-2 bg-white text-gray-800">
      <Navbar />

      <section className="flex flex-col justify-center items-center w-full max-w-7xl min-h-screen pt-24 md:pt-12 mx-auto">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="col-span-1 space-y-6 px-4">
            <h1 className="text-4xl md:text-5xl font-medium text-neutral-800">
              Layanan Profesional Unggulan Kami
            </h1>
            <p className="text-lg text-neutral-400">
              Kami hadirkan solusi terbaik yang dirancang khusus untuk kebutuhan
              Anda. Tim berpengalaman kami siap menghadirkan keunggulan dan
              inovasi dalam setiap langkah proyek Anda.
            </p>
            <div className="relative max-w-fit cursor-pointer overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 text-base font-medium rounded-full transform transition-all duration-300 hover:-translate-y-1 group">
              <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <span className="relative flex items-center justify-center gap-2">
                Jelajahi Layanan Kami
              </span>
            </div>
          </div>

          <div className="relative min-h-[500px] col-span-1 mx-4 block bg-gradient-to-b from-orange-500 to-orange-600 rounded-2xl">
            <Image
              src="/person.png"
              alt="Services"
              width={4200}
              height={2300}
              className="absolute bottom-0 left-0 w-full h-full object-cover object-center z-10 rounded-2xl"
              priority
            />
            <div className="absolute top-20 md:top-8 left-2 md:left-20 w-52 h-28 bg-white/50 backdrop-blur-sm rounded-lg flex flex-col justify-center p-3">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center">
                  <span className="text-xs text-white">✓</span>
                </div>
                <span className="text-xs font-semibold">Mau buat website?</span>
              </div>
              <p className="text-xs text-gray-800">
                Layanan desain dan pengembangan web profesional dapat membantu
                Anda menjawabnya.
              </p>
            </div>
            <div className="absolute top-72 md:top-24 right-4 w-48 h-24 bg-white/50 z-20 backdrop-blur-sm rounded-lg flex flex-col justify-center p-3">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center">
                  <span className="text-xs text-white">★</span>
                </div>
                <span className="text-xs font-semibold">Tim Profesional</span>
              </div>
              <p className="text-xs text-gray-800">
                Solusi terbaik dari para ahli berpengalaman di bidangnya
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center w-full max-w-7xl mt-24 mx-auto px-4">
        <span className="inline-block py-1 px-3 bg-orange-100 text-orange-600 font-semibold rounded-full text-sm mb-6">
          Misi Kami
        </span>

        <div className="container mx-auto max-w-xl text-center">
          <h1 className="text-2xl md:text-3xl font-medium mb-2 text-center text-neutral-800">
            Mewujudkan Impian Anda Melalui Layanan Terbaik
          </h1>
          <p className="text-sm text-neutral-400 mb-12 text-center">
            Kami berkomitmen untuk memberikan layanan terbaik yang dapat
            meningkatkan pengalaman Anda. Dengan pendekatan inovatif dan solusi
            yang disesuaikan, kami siap membantu Anda mencapai tujuan dengan
            efektif.
          </p>
        </div>

        <div className="flex flex-col max-w-4xl gap-16 mb-16">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col md:${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-start justify-center gap-8`}
            >
              <Image
                src={service.image.src!}
                alt={service.title}
                width={500}
                height={300}
                className="w-full max-w-sm rounded-lg object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                priority
              />
              <div className="flex flex-col items-start justify-between">
                <div>
                  <h2 className="text-xl font-medium text-neutral-800">
                    {service.title}
                  </h2>
                  <p className="text-sm text-neutral-400">
                    {service.description}
                  </p>
                </div>
                <button className="mt-4 px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition duration-300 cursor-pointer">
                  <Link href={`/services/${service.id}`}>
                    Pelajari Lebih Lanjut
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
