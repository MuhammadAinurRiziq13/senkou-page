import Link from 'next/link';
import {
  CheckCircle,
  Zap,
  Shield,
  Award,
  Users,
  ChevronRight,
  Star,
  Smartphone,
  Search,
  Code,
  Box,
  Clock,
  TrendingUp,
  ArrowUpRight,
} from 'lucide-react';

export default function LandingPageBlog() {
  return (
    <div className="flex flex-col items-center justify-center w-full overflow-hidden text-gray-900 bg-gradient-to-b from-white to-orange-50/20">
      {/* Stats Bar with modern 3D cards */}
      <section className="w-full max-w-5xl px-4 mx-auto mt-6 mb-24">
        <div className="grid grid-cols-1 gap-8 p-6 bg-white border rounded-2xl md:grid-cols-3 border-orange-100/50">
          {[
            {
              icon: <Award className="w-6 h-6 text-orange-500" />,
              value: '100+',
              label: 'Proyek Selesai',
            },
            {
              icon: <Star className="w-6 h-6 text-orange-500" />,
              value: '98%',
              label: 'Klien Puas',
            },
            {
              icon: <Clock className="w-6 h-6 text-orange-500" />,
              value: '5+',
              label: 'Tahun Pengalaman',
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 text-center transition-all duration-300 group hover:bg-orange-50/50 rounded-xl hover:-translate-y-1"
            >
              <div className="p-4 mb-4 transition-all duration-300 transform bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl group-hover:from-orange-200 group-hover:to-amber-200 group-hover:scale-110">
                {stat.icon}
              </div>
              <p className="mb-1 text-4xl font-bold text-orange-600">
                {stat.value}
              </p>
              <p className="text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content with improved spacing */}
      <section className="w-full max-w-5xl px-4 mx-auto">
        {/* Why Professional Website Section */}
        <div className="mb-32">
          <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto">
            <div className="inline-block px-4 py-1 mb-3 font-semibold text-orange-600 bg-orange-100 rounded-full">
              Portofolio Works
            </div>
            <h1 className="mb-8 text-4xl font-medium text-center text-gray-800">
              Mengapa Memiliki Web Profesional Itu Penting?
            </h1>
            <p className="max-w-md mb-12 text-sm text-center text-gray-600">
              Website profesional adalah wajah bisnis di dunia digital. Tidak
              hanya meningkatkan kredibilitas, website juga memperluas jangkauan
              pasar, membangun kepercayaan pelanggan, dan memberikan keunggulan
              kompetitif dengan ketersediaan 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                icon: <Zap className="w-10 h-10 text-orange-500" />,
                title: 'Kesan Pertama yang Memikat',
                desc: 'Buat pengunjung terkesan dari awal dan tingkatkan kredibilitas bisnis Anda dengan desain yang profesional dan modern.',
              },
              {
                icon: <Smartphone className="w-10 h-10 text-orange-500" />,
                title: 'Responsif di Semua Perangkat',
                desc: 'Tampilan optimal di semua ukuran layar untuk pengalaman pengguna terbaik, dari desktop hingga smartphone.',
              },
              {
                icon: <Search className="w-10 h-10 text-orange-500" />,
                title: 'Siap Bersaing di SEO',
                desc: 'Dioptimalkan untuk mesin pencari agar pelanggan mudah menemukan bisnis Anda secara online dengan peringkat yang lebih baik.',
              },
              {
                icon: <Shield className="w-10 h-10 text-orange-500" />,
                title: 'Dirancang untuk Konversi',
                desc: 'Desain strategis yang fokus pada tujuan bisnis dan meningkatkan tingkat konversi pengunjung menjadi pelanggan.',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="p-6 transition-all duration-300 bg-white border border-gray-100  rounded-2xl hover:shadow-sm hover:-translate-y-0.5"
              >
                <div className="inline-block p-3 mb-6 bg-orange-100 rounded-xl group-hover:scale-110">
                  {benefit.icon}
                </div>
                <h3 className="mb-4 text-xl font-medium text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  {benefit.desc}
                </p>
                <div className="pt-4 mt-6 border-t border-gray-100 cursor-pointer">
                  <span className="inline-flex items-center text-sm font-medium text-orange-500">
                    Pelajari lebih lanjut
                    <span className="ml-2 transition-transform duration-300 transform hover:translate-x-1">
                      <ChevronRight className="w-5 h-5" />
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section with modern glass morphism effect */}
        <div className="mb-32">
          <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto mb-12">
            <div className="inline-block px-4 py-1 mb-3 font-semibold text-orange-600 bg-orange-100 rounded-full">
              What We Offer
            </div>
            <h1 className="mb-6 text-3xl font-medium text-center text-gray-800">
              Fitur Unggulan Yang Kami Tawarkan
            </h1>
            <p className="max-w-md text-center text-gray-600">
              Kami menawarkan berbagai fitur yang dirancang untuk meningkatkan
              pengalaman pengguna dan membantu bisnis Anda tumbuh. Dari desain
              responsif hingga sistem analitik, kami memiliki semua yang Anda
              butuhkan untuk sukses di dunia digital.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                {
                  title: 'Desain Modern & Menarik',
                  desc: 'Tampilan website yang eye-catching dan sesuai dengan identitas brand Anda',
                  icon: <Star className="w-6 h-6 text-orange-500" />,
                },
                {
                  title: 'Kecepatan Loading Optimal',
                  desc: 'Website yang cepat untuk pengalaman pengguna terbaik & SEO yang lebih baik',
                  icon: <Zap className="w-6 h-6 text-orange-500" />,
                },
                {
                  title: 'Integrasi Media Sosial',
                  desc: 'Terhubung dengan platform sosial media untuk meningkatkan jangkauan',
                  icon: <Users className="w-6 h-6 text-orange-500" />,
                },
                {
                  title: 'Formulir Kontak Interaktif',
                  desc: 'Formulir yang mudah digunakan untuk memudahkan komunikasi dengan pelanggan',
                  icon: <Box className="w-6 h-6 text-orange-500" />,
                },
                {
                  title: 'Sistem Analitik Lengkap',
                  desc: 'Pantau dan analisa performa website untuk pengambilan keputusan',
                  icon: <TrendingUp className="w-6 h-6 text-orange-500" />,
                },
                {
                  title: 'Kode Bersih & Teroptimasi',
                  desc: 'Struktur kode yang rapi untuk performa dan pemeliharaan jangka panjang',
                  icon: <Code className="w-6 h-6 text-orange-500" />,
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 border border-gray-100 rounded-lg hover:bg-orange-50"
                >
                  <div className="flex-shrink-0 p-2 mr-4 bg-orange-100 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="mb-2 font-bold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative p-8 mt-12 overflow-hidden border-[.5px] border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl">
              <div className="absolute text-orange-200 -top-4 -left-4 opacity-30">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179z" />
                </svg>
              </div>
              <div className="relative z-10">
                <p className="text-xl italic font-medium leading-relaxed text-gray-700">
                  &quot;Kami memahami bahwa setiap bisnis memiliki kebutuhan
                  yang unik. Oleh karena itu, kami menawarkan solusi yang dapat
                  disesuaikan dengan kebutuhan spesifik Anda.&quot;
                </p>
                <div className="flex items-center mt-6">
                  <div className="w-10 h-1 bg-orange-300 rounded"></div>
                  <p className="ml-3 text-sm font-semibold text-orange-600">
                    Tim Senkou Digital
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="relative">
            {/* Multiple background layers for depth */}
            <div className="absolute inset-0 transform top-4 bg-amber-500 rounded-3xl -rotate-1 scale-103"></div>

            <div className="relative p-12 overflow-hidden text-white shadow-lg bg-gradient-to-br from-orange-500 to-orange-600 md:p-16 rounded-3xl">
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <span className="inline-flex items-center py-1.5 px-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full text-sm mb-6">
                  Tingkatkan Bisnis Anda Sekarang
                </span>
                <h2 className="mb-8 text-xl font-bold leading-tight md:text-4xl">
                  Siap Membawa Bisnis Anda ke Level Berikutnya?
                </h2>
                <p className="mb-10 font-medium text-md opacity-95">
                  Jangan biarkan website Anda menjadi penghalang. Dengan
                  pengalaman bertahun-tahun di industri ini, kami telah membantu
                  banyak bisnis mencapai tujuan mereka.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <Link
                    href={`https://wa.me/6281325205723?text=Halo%20Senkou%2C%20saya%20tertarik%20dengan%20layanan%20pembuatan%20Web%20App`}
                    className="relative flex items-center justify-center gap-2 px-8 py-4 overflow-hidden font-medium text-orange-600 transition-all duration-300 bg-white shadow-lg group hover:bg-orange-50 rounded-xl hover:shadow-xl"
                  >
                    <span className="relative z-10 flex items-center">
                      Konsultasi Gratis
                      <ArrowUpRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                    <span className="absolute inset-0 transition-transform duration-500 origin-left transform scale-x-0 bg-gradient-to-r from-orange-100/0 to-orange-100 group-hover:scale-x-100"></span>
                  </Link>
                </div>

                {/* Trust badges with improved visibility */}
                <div className="flex flex-wrap justify-center gap-6 mt-10">
                  {[
                    'Dokumentasi Lengkap',
                    'Tim Berpengalaman',
                    'Pemeliharaan Jangka Panjang',
                  ].map((item, index) => (
                    <span
                      key={index}
                      className="flex items-center px-4 py-2 text-base transition-colors rounded-full bg-white/10 hover:bg-white/20"
                    >
                      <CheckCircle className="w-4 h-4 mr-2 text-amber-200" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
