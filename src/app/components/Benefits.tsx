import {
  Cpu,
  Infinity,
  Zap,
  Rocket,
  Target,
  Settings,
  DollarSign,
  ThumbsUp,
  Headphones,
  ChevronRight,
} from 'lucide-react';

function Benefits() {
  const benefitItems = [
    {
      icon: Infinity,
      title: 'On-demand requests',
      description:
        'Kami sangat permisif dengan desain Anda ke website, dan kami akan mewujudkan keinginan Anda.',
    },
    {
      icon: Zap,
      title: 'Top-notch quality',
      description:
        'Hasil karya berkualitas tinggi dari tim senkou yang berdedikasi dan selalu siap membantu Anda.',
    },
    {
      icon: Cpu,
      title: 'Powered by modern tech',
      description:
        'Kami membangun setiap situs dengan teknologi modern, menggunakan dimanis, mudah dikelola, dan mobile-oriented.',
    },
    {
      icon: Rocket,
      title: 'Fast. Responsive. Reliable.',
      description:
        'Diawali pembaruan rutin terhadap project Anda dan hampiran desain Anda selesai dalam 2-3 hari.',
    },
    {
      icon: Target,
      title: 'Great value for money',
      description:
        'Dapatkan kekuatan fitur yang berdedikasi dengan biaya yang jauh lebih rendah dari lainnya.',
    },
    {
      icon: Settings,
      title: 'Customized for you',
      description:
        'Kami merancang dan membangun khusus untuk Anda, kami tidak pernah memulai dari tempat kecuali Anda menginginkannya.',
    },
    {
      icon: DollarSign,
      title: 'Creative paying',
      description:
        'Kami siap membantu Anda agar Anda membayar kecil, dan tidak membebani anggaran Anda saat Anda tidak menginginkannya.',
    },
    {
      icon: ThumbsUp,
      title: 'Positif testimonials',
      description:
        'Kami memiliki banyak testimoni positif dari klien yang puas dengan layanan kami membukikan komitmen kami terhadap kualitas dan kepuasan pelanggan.',
    },
    {
      icon: Headphones,
      title: 'High support',
      description:
        'Kami memberikan dukungan penuh terhadap Anda untuk memastikan Anda merasa nyaman dan percaya diri dengan hasil kami.',
    },
  ];

  return (
    <section className="w-full py-32 overflow-hidden relative bg-gradient-to-b from-white to-orange-50">
      {/* Modern background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-200 rounded-full filter blur-3xl opacity-10 transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-orange-300 rounded-full filter blur-3xl opacity-10 transform -translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute top-1/2 left-1/2 w-1/3 h-1/3 bg-orange-100 rounded-full filter blur-3xl opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Main content container */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header with enhanced typography */}
        <div className="mb-24">
          <div className="inline-block text-orange-600 font-semibold py-2 mb-6">
            BENEFITS
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/2">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Mengapa pilih
                <span className="relative inline-block ml-2 mr-2">
                  <span className="absolute inset-x-0 bottom-2 h-3 bg-orange-200 -z-10 transform -rotate-1"></span>
                  Jasa Pembuatan Website
                </span>
                di
                <span className="relative ml-2 text-orange-600">
                  Senkou Studio
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-orange-400"></span>
                </span>
              </h2>
            </div>

            <div className="md:w-1/2">
              <p className="text-xl leading-relaxed text-gray-700">
                Senkou Studio lebih dari sekadar penyedia jasa, kami adalah
                <span className="font-semibold"> mitra digital</span> Anda. Kami
                bekerja sama dengan Anda untuk memahami setiap detail kebutuhan
                bisnis Anda dan mewujudkannya dalam bentuk website yang
                sempurna.
              </p>
              <div className="mt-6 inline-flex items-center group cursor-pointer">
                <span className="text-orange-600 font-medium mr-2">
                  Konsultasi gratis
                </span>
                <ChevronRight
                  size={18}
                  className="text-orange-600 transition-transform group-hover:translate-x-1"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid with improved cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefitItems.map((benefit, index) => (
            <div
              key={index}
              className="benefit-item group p-8 rounded-2xl transition-all duration-300 bg-white hover:bg-gradient-to-br hover:from-white hover:to-orange-50 shadow-sm hover:shadow-xl border border-gray-100"
            >
              <div className="text-orange-500 mb-6 p-4 bg-orange-50 inline-flex items-center justify-center rounded-xl group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                <benefit.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-xl mb-4 flex items-center">
                <span className="text-orange-500 mr-2 font-medium">
                  {index + 1}.
                </span>
                <span>{benefit.title}</span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Optional animated dots pattern */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 hidden lg:block">
          <div className="grid grid-cols-3 gap-2">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-orange-200"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
