import { FooterCopyright, FooterLink } from '@senkou/components/footer';
import {
  CONTACT_ITEMS,
  FOOTER_LINKS,
  SERVICES,
} from '@senkou/constants/footers';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="min-w-screen max-w-screen py-16 px-10 overflow-hidden relative bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo and description */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Image
              src="/logo.svg"
              width={40}
              height={40}
              alt="Senkou Studio Logo"
            />
            <h1 className="text-xl font-bold">
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

        {/* Contact section */}
        <div>
          <h3 className="font-bold text-lg mb-6">Contact</h3>
          <ul className="space-y-3 text-gray-400">
            {CONTACT_ITEMS.map((item, idx) => (
              <li key={idx}>
                {item.href ? (
                  <FooterLink href={item.href}>{item.text}</FooterLink>
                ) : (
                  item.text
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Services section */}
        <div>
          <h3 className="font-bold text-lg mb-6">Services</h3>
          <ul className="space-y-3 text-gray-400">
            {SERVICES.map((service, idx) => (
              <li key={idx}>{service}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright and links */}
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <FooterCopyright />
          <div className="flex gap-4 mt-4 md:mt-0">
            {FOOTER_LINKS.map((link, index) => (
              <FooterLink key={index} href={link.href}>
                {link.text}
              </FooterLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
