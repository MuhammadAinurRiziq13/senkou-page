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
  Layout,
  TrendingUp,
  ArrowUpRight,
} from 'lucide-react';

export default function LandingPageBlog() {
  return (
    <div className="flex flex-col items-center justify-center w-full text-gray-900 overflow-hidden bg-gradient-to-b from-white to-orange-50/20">
      {/* Stats Bar with modern 3D cards */}
      <section className="w-full max-w-5xl mx-auto px-4 mt-6 mb-24">
        <div className="bg-white rounded-2xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-8 border border-orange-100/50">
          {[
            {
              icon: <Award className="h-6 w-6 text-orange-500" />,
              value: '100+',
              label: 'Proyek Selesai',
            },
            {
              icon: <Star className="h-6 w-6 text-orange-500" />,
              value: '98%',
              label: 'Klien Puas',
            },
            {
              icon: <Clock className="h-6 w-6 text-orange-500" />,
              value: '5+',
              label: 'Tahun Pengalaman',
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 flex flex-col items-center group hover:bg-orange-50/50 rounded-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-4 rounded-2xl mb-4 group-hover:from-orange-200 group-hover:to-amber-200 transition-all duration-300 transform group-hover:scale-110">
                {stat.icon}
              </div>
              <p className="text-orange-600 font-bold text-4xl mb-1">
                {stat.value}
              </p>
              <p className="text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content with improved spacing */}
      <section className="w-full max-w-5xl mx-auto px-4">
        {/* Why Professional Website Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <span className="bg-gradient-to-r from-orange-100 to-amber-100 text-orange-600 rounded-full px-5 py-2 text-sm font-medium inline-flex items-center shadow-sm">
              <Star className="h-4 w-4 mr-2" /> KENAPA MEMILIH KAMI
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-6 mb-6">
              Mengapa Website Profesional Penting?
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-orange-400 to-amber-400 mx-auto rounded-full"></div>
            <p className="text-gray-700 mt-6 max-w-xl mx-auto text-lg">
              Website profesional bukan hanya sekadar kehadiran online, tetapi
              investasi yang menghasilkan kepercayaan dan pertumbuhan bisnis
              Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Zap className="h-10 w-10 text-orange-500" />,
                title: 'Kesan Pertama yang Memikat',
                desc: 'Buat pengunjung terkesan dari awal dan tingkatkan kredibilitas bisnis Anda dengan desain yang profesional dan modern.',
              },
              {
                icon: <Smartphone className="h-10 w-10 text-orange-500" />,
                title: 'Responsif di Semua Perangkat',
                desc: 'Tampilan optimal di semua ukuran layar untuk pengalaman pengguna terbaik, dari desktop hingga smartphone.',
              },
              {
                icon: <Search className="h-10 w-10 text-orange-500" />,
                title: 'Siap Bersaing di SEO',
                desc: 'Dioptimalkan untuk mesin pencari agar pelanggan mudah menemukan bisnis Anda secara online dengan peringkat yang lebih baik.',
              },
              {
                icon: <Shield className="h-10 w-10 text-orange-500" />,
                title: 'Dirancang untuk Konversi',
                desc: 'Desain strategis yang fokus pada tujuan bisnis dan meningkatkan tingkat konversi pengunjung menjadi pelanggan.',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:border-orange-200 transition-all duration-300 group hover:shadow-lg hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-4 rounded-2xl inline-block mb-6 group-hover:from-orange-200 group-hover:to-amber-200 transition-all duration-300 transform group-hover:rotate-6">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-2xl mb-4 group-hover:text-orange-600 transition-all duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {benefit.desc}
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <span className="text-orange-600 inline-flex items-center font-medium group-hover:font-semibold transition-all">
                    Pelajari lebih lanjut
                    <span className="ml-2 transition-transform duration-300 transform group-hover:translate-x-2">
                      <ChevronRight className="h-5 w-5" />
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section with modern glass morphism effect */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <span className="bg-gradient-to-r from-orange-100 to-amber-100 text-orange-600 rounded-full px-5 py-2 text-sm font-medium inline-flex items-center shadow-sm">
              <Layout className="h-4 w-4 mr-2" /> FITUR UNGGULAN
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-6 mb-6">
              Yang Kami Tawarkan Untuk Anda
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-orange-400 to-amber-400 mx-auto rounded-full"></div>
            <p className="text-gray-700 mt-6 max-w-xl mx-auto text-lg">
              Kami menyediakan berbagai fitur canggih untuk memastikan website
              Anda tidak hanya menarik, tetapi juga fungsional dan efektif.
            </p>
          </div>

          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-200/50 to-amber-100/50 rounded-3xl transform -rotate-3 scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-100/30 to-white/80 rounded-3xl transform rotate-1 scale-103"></div>

            <div className="relative bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-orange-100/50">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Desain Modern & Menarik',
                    desc: 'Tampilan website yang eye-catching dan sesuai dengan identitas brand Anda',
                    icon: <Star className="h-6 w-6 text-orange-500" />,
                  },
                  {
                    title: 'Kecepatan Loading Optimal',
                    desc: 'Website yang cepat untuk pengalaman pengguna terbaik & SEO yang lebih baik',
                    icon: <Zap className="h-6 w-6 text-orange-500" />,
                  },
                  {
                    title: 'Integrasi Media Sosial',
                    desc: 'Terhubung dengan platform sosial media untuk meningkatkan jangkauan',
                    icon: <Users className="h-6 w-6 text-orange-500" />,
                  },
                  {
                    title: 'Formulir Kontak Interaktif',
                    desc: 'Formulir yang mudah digunakan untuk memudahkan komunikasi dengan pelanggan',
                    icon: <Box className="h-6 w-6 text-orange-500" />,
                  },
                  {
                    title: 'Sistem Analitik Lengkap',
                    desc: 'Pantau dan analisa performa website untuk pengambilan keputusan',
                    icon: <TrendingUp className="h-6 w-6 text-orange-500" />,
                  },
                  {
                    title: 'Kode Bersih & Teroptimasi',
                    desc: 'Struktur kode yang rapi untuk performa dan pemeliharaan jangka panjang',
                    icon: <Code className="h-6 w-6 text-orange-500" />,
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start p-6 rounded-2xl hover:bg-orange-50/70 transition-all duration-300 hover:shadow-md group border border-orange-100/50 hover:border-orange-200/70"
                  >
                    <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-3 rounded-xl mr-5 flex-shrink-0 group-hover:from-orange-200 group-hover:to-amber-200 transition-all duration-300 transform group-hover:scale-110">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-3 group-hover:text-orange-600 transition-all duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-700 text-lg">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial card with subtle design */}
              <div className="mt-12 bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-2xl shadow-md border border-orange-100 hover:shadow-lg transition-all duration-300 transform hover:-rotate-1">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-3 rounded-full mr-4">
                    <CheckCircle className="h-6 w-6 text-orange-500" />
                  </div>
                  <p className="font-bold text-xl text-gray-900">
                    Yang Membedakan Kami
                  </p>
                </div>
                <p className="text-gray-700 italic border-l-4 border-orange-500 pl-6 py-3 text-lg">
                  &quot;Kami memahami bahwa setiap bisnis memiliki kebutuhan
                  yang unik. Oleh karena itu, kami menawarkan solusi yang dapat
                  disesuaikan dengan kebutuhan spesifik Anda.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section with modern layered design */}
        <div className="mb-20">
          <div className="relative">
            {/* Multiple background layers for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl transform rotate-2 scale-105 opacity-20 blur-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl transform -rotate-1 scale-103"></div>

            <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 text-white p-12 md:p-16 rounded-3xl shadow-lg overflow-hidden">
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <span className="inline-flex items-center py-1.5 px-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full text-sm mb-6">
                  <Award className="h-4 w-4 mr-2" />
                  Tingkatkan Bisnis Anda Sekarang
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                  Siap Membawa Bisnis Anda ke Level Berikutnya?
                </h2>
                <p className="mb-10 opacity-95 text-xl font-medium">
                  Jangan biarkan website Anda menjadi penghalang. Dengan
                  pengalaman bertahun-tahun di industri ini, kami telah membantu
                  banyak bisnis mencapai tujuan mereka.
                </p>
                <div className="flex flex-wrap gap-6 justify-center">
                  <Link
                    href={`https://wa.me/6281325205723?text=Halo%20Senkou%2C%20saya%20tertarik%20dengan%20layanan%20yang%20anda%20tawarkan`}
                    className="group relative bg-white hover:bg-orange-50 text-orange-600 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      Konsultasi Gratis
                      <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-orange-100/0 to-orange-100 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
                  </Link>
                </div>

                {/* Trust badges with improved visibility */}
                <div className="flex flex-wrap justify-center gap-6 mt-10">
                  {['Tanpa Kewajiban', 'Respon Cepat', 'Solusi Terbaik'].map(
                    (item, index) => (
                      <span
                        key={index}
                        className="flex items-center text-base bg-white/10 py-2 px-4 rounded-full hover:bg-white/20 transition-colors"
                      >
                        <CheckCircle className="h-4 w-4 mr-2 text-amber-200" />
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
