import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full py-16 px-10 overflow-hidden relative bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Image src="/logo.svg" width={40} height={40} alt="logo" />
            <h1 className="text-xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500">
                Senkou
              </span>{' '}
              <span className="font-extrabold">Studio</span>
            </h1>
          </div>
          <p className="text-gray-400">
            Studio pembuatan website profesional untuk bisnis dan personal
            dengan fokus pada desain modern dan performa tinggi.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-6">Contact</h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <a
                href="mailto:studio.senkou@gmail.com"
                className="hover:text-white transition-colors"
              >
                studio.senkou@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+6281325205723"
                className="hover:text-white transition-colors"
              >
                +62 813 2520 5723
              </a>
            </li>
            <li>Malang, Indonesia</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-6">Services</h3>
          <ul className="space-y-3 text-gray-400">
            <li>Website Design</li>
            <li>Web Development</li>
            <li>E-Commerce</li>
            <li>Landing Page</li>
            <li>Maintenance</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 Senkou Studio. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
