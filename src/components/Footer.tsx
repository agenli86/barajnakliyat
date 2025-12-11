import Link from 'next/link'
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-primary-600 to-accent-500 p-3 rounded-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Baraj Nakliyat</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Adana'nın güvenilir nakliyat firması. Profesyonel ekibimiz ve modern araç filomuz ile ev taşıma hizmetlerinizde yanınızdayız.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary-600 p-3 rounded-full transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-accent-500 p-3 rounded-full transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-400 p-3 rounded-full transition-colors"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Hızlı Linkler</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-accent-500 transition-colors">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-gray-400 hover:text-accent-500 transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="text-gray-400 hover:text-accent-500 transition-colors">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-accent-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="text-gray-400 hover:text-accent-500 transition-colors">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="/teklif-al" className="text-gray-400 hover:text-accent-500 transition-colors">
                  Teklif Al
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Hizmetlerimiz</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/hizmetler/asansorlu-tasimacilik" className="text-gray-400 hover:text-accent-500 transition-colors">
                  Asansörlü Taşımacılık
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="text-gray-400 hover:text-accent-500 transition-colors">
                  Evden Eve Nakliyat
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="text-gray-400 hover:text-accent-500 transition-colors">
                  Ofis Taşımacılığı
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="text-gray-400 hover:text-accent-500 transition-colors">
                  Parça Eşya Taşıma
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="text-gray-400 hover:text-accent-500 transition-colors">
                  Şehirler Arası Nakliyat
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">İletişim</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:05374092406" className="flex items-start text-gray-400 hover:text-accent-500 transition-colors">
                  <FaPhone className="mt-1 mr-3 text-accent-500" />
                  <div>
                    <p className="font-semibold text-white">Telefon</p>
                    <p>0537 409 24 06</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start text-gray-400">
                  <FaMapMarkerAlt className="mt-1 mr-3 text-accent-500" />
                  <div>
                    <p className="font-semibold text-white">Adres</p>
                    <p>Çukurova, Adana</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start text-gray-400">
                  <FaClock className="mt-1 mr-3 text-accent-500" />
                  <div>
                    <p className="font-semibold text-white">Çalışma Saatleri</p>
                    <p>7/24 Hizmet</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© {currentYear} Baraj Nakliyat. Tüm hakları saklıdır.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/gizlilik-politikasi" className="hover:text-accent-500 transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/kullanim-kosullari" className="hover:text-accent-500 transition-colors">
                Kullanım Koşulları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
