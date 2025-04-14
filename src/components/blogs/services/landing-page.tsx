import Link from 'next/link';

export default function LandingPageBlog() {
  return (
    <div className="flex flex-col items-center justify-center pb-2 text-neutral-800">
      <section className="py-3 w-full max-w-2xl mx-auto overflow-hidden">
        <div className="mb-8">
          <h1 className="text-2xl font-medium text-neutral-800 mb-3">
            Tingkatkan Bisnis Anda dengan Website Profesional
          </h1>
          <p className="text-neutral-600 mb-4">
            Website adalah wajah digital bisnis Anda. Dengan desain dan
            pengembangan profesional, kami bantu Anda menciptakan platform
            online yang menarik, cepat, dan siap meningkatkan konversi.
          </p>
          <p className="text-neutral-600 mb-4">
            Di era digital ini, memiliki website yang profesional bukan lagi
            pilihan, melainkan kebutuhan. Website yang dirancang dengan baik
            dapat menjadi alat pemasaran yang kuat, membantu Anda menjangkau
            lebih banyak pelanggan, dan memberikan pengalaman yang tak
            terlupakan.
          </p>
          <div className="border-b border-neutral-300 w-16 mx-auto"></div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-medium text-neutral-800 mb-3">
            Mengapa Website Profesional Penting?
          </h2>
          <ul className="list-disc pl-5 text-neutral-600 mb-4">
            <li>Kesan pertama yang memikat pelanggan</li>
            <li>Responsif di semua perangkat</li>
            <li>Siap bersaing di mesin pencari (SEO-ready)</li>
            <li>Dirancang untuk meningkatkan konversi</li>
          </ul>
          <p className="text-neutral-600 mb-4">
            Website yang profesional tidak hanya memberikan kesan pertama yang
            baik, tetapi juga memastikan bahwa pelanggan Anda dapat dengan mudah
            menemukan informasi yang mereka butuhkan. Dengan desain yang
            responsif, website Anda akan terlihat sempurna di perangkat apa pun,
            mulai dari ponsel hingga komputer desktop.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-medium text-neutral-800 mb-3">
            Fitur yang Kami Tawarkan
          </h2>
          <ul className="list-disc pl-5 text-neutral-600 mb-4">
            <li>Desain modern dan menarik</li>
            <li>Kecepatan loading yang optimal</li>
            <li>Integrasi dengan media sosial</li>
            <li>Formulir kontak yang mudah digunakan</li>
            <li>Analitik untuk melacak performa website</li>
          </ul>
          <p className="text-neutral-600 mb-4">
            Kami memahami bahwa setiap bisnis memiliki kebutuhan yang unik. Oleh
            karena itu, kami menawarkan solusi yang dapat disesuaikan dengan
            kebutuhan Anda. Dari desain hingga pengembangan, kami memastikan
            bahwa setiap detail diperhatikan.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-medium text-neutral-800 mb-3">
            Siap Membawa Bisnis Anda ke Level Berikutnya?
          </h2>
          <p className="text-neutral-600 mb-4">
            Jangan biarkan website Anda menjadi penghalang. Kami siap membantu
            Anda membangun website yang bekerja untuk bisnis Anda 24/7.
          </p>
          <p className="text-neutral-600 mb-4">
            Dengan pengalaman bertahun-tahun di industri ini, kami telah
            membantu banyak bisnis mencapai tujuan mereka. Kami percaya bahwa
            website yang baik adalah investasi, bukan biaya. Mari kita wujudkan
            visi Anda bersama.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link
            href={`https://wa.me/6281325205723?text=Halo%20Senkou%2C%20saya%20tertarik%20dengan%20layanan%20yang%20anda%20tawarkan`}
            className="inline-block bg-neutral-200 text-neutral-800 font-semibold py-2 px-6 rounded-full transition-colors text-sm"
          >
            Konsultasi Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
}
