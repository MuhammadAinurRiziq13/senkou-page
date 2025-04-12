'use client';

import { useState } from 'react';
import { ChevronDown, MessageCircle, Phone } from 'lucide-react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'Apa saja layanan yang ditawarkan oleh Senkou Studio?',
      answer:
        'Senkou Studio menawarkan berbagai layanan digital premium mulai dari pembuatan website profesional, pengembangan aplikasi mobile, desain UI/UX yang intuitif, branding digital yang menarik, hingga solusi e-commerce yang komprehensif. Semua layanan kami dirancang dengan memperhatikan kebutuhan bisnis dan pengguna akhir untuk memaksimalkan nilai dan ROI.',
    },
    {
      question:
        'Berapa lama waktu yang dibutuhkan untuk menyelesaikan sebuah proyek website?',
      answer:
        'Waktu pengerjaan proyek website bervariasi tergantung kompleksitas dan kebutuhan spesifik. Proyek sederhana bisa selesai dalam 2-4 minggu, sementara proyek yang lebih kompleks membutuhkan waktu 2-3 bulan. Kami selalu mendiskusikan timeline dengan klien di awal proyek dan menggunakan metodologi agile untuk memastikan pengembangan yang efisien dan transparan.',
    },
    {
      question: 'Bagaimana proses kerja sama dengan Senkou Studio?',
      answer:
        'Proses kerja sama dimulai dengan konsultasi awal untuk memahami kebutuhan bisnis Anda secara mendalam. Kemudian tim kami membuat proposal dan wireframe yang komprehensif, dilanjutkan dengan desain dan pengembangan iteratif. Setelah persetujuan, kami melakukan pengujian menyeluruh sebelum peluncuran. Kami juga menyediakan dukungan pasca-peluncuran dengan respons cepat dan solusi yang efektif.',
    },
    {
      question:
        'Apakah Senkou Studio menyediakan layanan pemeliharaan website?',
      answer:
        'Ya, kami menawarkan paket pemeliharaan website premium yang mencakup pembaruan keamanan berkala, optimasi performa berkelanjutan, backup otomatis, dan pembaruan konten sesuai kebutuhan. Kami memiliki beberapa paket yang dapat disesuaikan dengan skala dan kebutuhan bisnis Anda, sehingga website Anda selalu dalam kondisi optimal dan aman.',
    },
    {
      question: 'Berapa biaya untuk membuat website atau aplikasi?',
      answer:
        'Biaya proyek bergantung pada kompleksitas, fitur, dan kebutuhan spesifik. Kami menawarkan solusi dengan berbagai rentang harga untuk mengakomodasi bisnis kecil hingga perusahaan besar. Setiap proyek kami memiliki nilai unik dan ROI yang jelas. Hubungi kami untuk konsultasi dan penawaran yang disesuaikan dengan kebutuhan dan anggaran Anda.',
    },
    {
      question: 'Bagaimana cara menghubungi tim support Senkou Studio?',
      answer:
        'Anda dapat menghubungi tim support kami melalui berbagai channel: email support@senkoustudio.com, nomor telepon +6281234567890, atau melalui formulir kontak di website kami. Tim kami siap merespons dalam waktu 24 jam pada hari kerja. Untuk klien dengan paket premium, kami menyediakan dukungan prioritas dengan waktu respons yang lebih cepat.',
    },
    {
      question: 'Teknologi apa yang digunakan dalam pengembangan website?',
      answer:
        'Kami menggunakan teknologi modern dan terkini dalam pengembangan website, termasuk React, Next.js, dan Tailwind CSS untuk frontend, serta Node.js, Python, atau PHP untuk backend tergantung kebutuhan proyek. Untuk database, kami menggunakan MongoDB, PostgreSQL, atau MySQL. Semua teknologi yang kami pilih mempertimbangkan performa, skalabilitas, dan kemudahan pemeliharaan.',
    },
    {
      question: 'Apakah Senkou Studio bekerja dengan bisnis internasional?',
      answer:
        'Tentu! Kami memiliki pengalaman bekerja dengan klien dari berbagai negara dan berbagai zona waktu. Tim kami terbiasa berkolaborasi secara remote dan menggunakan alat manajemen proyek yang memastikan komunikasi yang lancar dan efektif meskipun terdapat perbedaan lokasi atau zona waktu.',
    },
  ];

  return (
    <section
      className="w-full py-12 md:py-24 overflow-hidden relative bg-white"
      id="faq"
    >
      {/* Enhanced decorative elements */}
      <div className="absolute top-20 left-8 w-16 h-16 border-2 border-orange-200 rounded-lg rotate-12 opacity-30 animate-bounce"></div>
      <div className="absolute bottom-20 right-8 w-24 h-24 border-2 border-orange-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-orange-400 rounded-full opacity-10 animate-ping"></div>

      {/* Floating particles */}
      <div className="hidden md:block absolute top-1/4 left-1/6 w-2 h-2 bg-orange-500 rounded-full opacity-50 animate-ping"></div>
      <div className="hidden md:block absolute top-2/3 right-1/6 w-3 h-3 bg-orange-400 rounded-full opacity-40 animate-ping"></div>
      <div className="hidden md:block absolute bottom-1/4 left-1/3 w-2 h-2 bg-orange-300 rounded-full opacity-60 animate-ping"></div>

      {/* Main content container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header with enhanced typography */}
        <div className="mb-16">
          <div className="flex flex-col gap-8 md:gap-10 items-center text-center">
            <div className="inline-flex items-center px-4 py-1 bg-orange-100 text-orange-600 font-semibold rounded-full">
              {/* <span className="mr-2">✨</span> */}
              <span>FAQ&apos;s</span>
              {/* <span className="ml-2">✨</span> */}
            </div>
            <div className="w-full md:w-9/12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent">
                Pertanyaan yang
                <br />
                Sering{' '}
                <span className="relative inline-block text-gray-900">
                  Ditanyakan
                  <span className="absolute -bottom-1 left-0 w-full h-3 bg-orange-200 opacity-40 rounded-full transform skew-x-2"></span>
                </span>
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-600 mt-6 max-w-3xl mx-auto">
                Temukan jawaban untuk pertanyaan umum tentang layanan digital
                Senkou Studio, proses kerja kami, dan bagaimana kami dapat
                membantu bisnis Anda berkembang.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section with enhanced animations */}
        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`mb-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-orange-100 border-l-4 border-l-orange-400`}
            >
              <button
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none group"
                onClick={() => toggleAccordion(index)}
              >
                <h3
                  className={`font-semibold text-xl ${activeIndex === index ? 'text-orange-500' : 'text-gray-800'} group-hover:text-orange-500 transition-colors duration-300`}
                >
                  {faq.question}
                </h3>
                <span
                  className={`${activeIndex === index ? 'bg-orange-500 text-white' : 'bg-orange-100 text-orange-500'} p-2 rounded-full flex-shrink-0 ml-4 transition-all duration-300 transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}
                >
                  <ChevronDown className="w-5 h-5" />
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-2 text-gray-600 border-t border-orange-100 bg-gradient-to-br from-white to-orange-50">
                  <p className="leading-relaxed">{faq.answer}</p>

                  {/* Helpful indicator */}
                  <div className="mt-4 flex items-center justify-end">
                    <p className="text-sm text-gray-500 mr-2">
                      Apakah jawaban ini membantu?
                    </p>
                    <div className="flex space-x-2">
                      <button className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200">
                        <svg
                          className="w-5 h-5 text-gray-400 hover:text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905v.714L7.5 9.5 4 6.5v10a2 2 0 002 2h3"
                          />
                        </svg>
                      </button>
                      <button className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200">
                        <svg
                          className="w-5 h-5 text-gray-400 hover:text-red-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905V15.5L15 12l3.5 3.5v-10a2 2 0 00-2-2h-3"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 max-w-2xl mx-auto">
            <div className="px-8 py-10 relative">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 bg-white opacity-10 rounded-full"></div>
              <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-16 h-16 bg-white opacity-10 rounded-full"></div>

              <h3 className="text-white text-2xl font-bold mb-4">
                Masih punya pertanyaan?
              </h3>
              <p className="text-white text-opacity-90 mb-6">
                Tim kami siap membantu Anda dengan solusi yang tepat untuk
                kebutuhan bisnis digital Anda
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="flex items-center justify-center px-6 py-3 rounded-full bg-white text-orange-500 font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-orange-50">
                  <Phone className="w-4 h-4 mr-2" />
                  Hubungi Kami
                </button>
                <button className="flex items-center justify-center px-6 py-3 rounded-full bg-orange-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-400 border-opacity-50 hover:bg-orange-700">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
