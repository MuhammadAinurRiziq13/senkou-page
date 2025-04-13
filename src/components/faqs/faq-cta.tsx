import { MessageCircle, Phone } from 'lucide-react';

export default function FAQCTA() {
  return (
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
            Tim kami siap membantu Anda dengan solusi yang tepat untuk kebutuhan
            bisnis digital Anda
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
  );
}
