import { Navbar } from '@senkou/components/navbar';
import { WorkCard, WorkSlider } from '@senkou/components/works';
import { WORKS } from '@senkou/constants/works';
import { Star } from 'lucide-react';

export default function Works() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="w-full max-w-2xl mx-auto min-h-[70vh] overflow-hidden pt-24 flex flex-col items-center justify-center p-4 md:p-0">
        <h1 className="text-4xl font-medium text-center mb-8 text-gray-800">
          Transformasi Visi Menjadi Karya,
          <br />
          Portofolio yang menginspirasi dan solusi yang menggerakkan bisnis Anda
        </h1>
        <p className="max-w-md text-center text-gray-600 mb-12 text-sm">
          Jelajahi koleksi mahakarya kami yang menunjukkan keahlian,
          kreativitas, dan inovasi terbaik dalam setiap proyek. Temukan
          inspirasi melalui perjalanan visual kami.
        </p>

        <div className="grid grid-cols-3 w-full max-w-lg mx-auto bg-neutral-100 rounded-lg p-4 gap-4 text-center">
          <div className="flex flex-col items-center justify-between h-full">
            <h2 className="text-3xl font-semibold text-gray-800">10+</h2>
            <p className="text-sm text-neutral-400 tracking-tight">
              Proyek selesai
            </p>
          </div>
          <div className="flex flex-col items-center justify-between h-full border-s border-gray-300">
            <h2 className="text-3xl font-semibold text-gray-800">5+</h2>
            <p className="text-sm text-neutral-400 tracking-tight">
              Klien puas
            </p>
          </div>
          <div className="flex flex-col items-center justify-between h-full border-s border-gray-300">
            <h2 className="flex text-3xl font-semibold text-orange-400">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </h2>
            <p className="text-sm text-neutral-400 tracking-tight">
              Rating kami
            </p>
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden relative bg-gradient-to-b from-white via-orange-50 to-white p-4 md:p-0">
        <div>
          <WorkSlider />

          <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto pt-24">
            <div className="inline-block px-4 py-1 mb-3 bg-orange-100 text-orange-600 font-semibold rounded-full">
              Portofolio Works
            </div>
            <h1 className="text-4xl font-medium text-center mb-8 text-gray-800">
              Hasil Karya Kami,
              <br />
              Anda dapat menjadi bagian dari perjalanan kami
            </h1>
            <p className="max-w-md text-center text-gray-600 mb-12 text-sm">
              Bentuk rasa kepercayaan Anda melalui portofolio kami yang beragam.
              Setiap proyek menceritakan kisah unik tentang bagaimana kami
              membantu klien mencapai tujuan bisnis mereka. Dari desain yang
              menawan hingga implementasi teknologi yang canggih, kami
              berkomitmen untuk memberikan hasil terbaik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto px-4 py-8 mb-16 gap-4 md:gap-16 mt-12">
            {WORKS.map((project, index) => (
              <WorkCard
                key={project.id}
                index={index}
                project={project}
                className={`${index % 2 === 0 && 'md:translate-y-12 hover:translate-y-8'} text-gray-800 transition-all duration-300 ease-in-out`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
