'use client'

import { FaWhatsapp, FaPhone } from 'react-icons/fa'

export default function StickyActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/905374092406?text=Merhaba,%20nakliyat%20hizmeti%20hakkında%20bilgi%20almak%20istiyorum."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 animate-pulse"
        title="WhatsApp'tan İletişime Geç"
      >
        <FaWhatsapp className="text-3xl" />
      </a>

      {/* Call Button */}
      <a
        href="tel:05374092406"
        className="bg-accent-500 hover:bg-accent-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110"
        title="Hemen Ara"
      >
        <FaPhone className="text-2xl" />
      </a>
    </div>
  )
}
