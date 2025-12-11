import Link from 'next/link'
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaClock, FaArrowRight } from 'react-icons/fa'

const relatedServices = [
  {
    title: 'Evden Eve Nakliyat',
    slug: '/hizmetler',
  },
  {
    title: 'Asansörlü Taşımacılık',
    slug: '/hizmetler/asansorlu-tasimacilik',
  },
  {
    title: 'Ofis Taşımacılığı',
    slug: '/hizmetler',
  },
  {
    title: 'Parça Eşya Taşıma',
    slug: '/hizmetler',
  },
]

const relatedPosts = [
  {
    title: 'Taşınma İpuçları',
    slug: '/blog/tasinma-ipuclari',
  },
  {
    title: 'Ev Taşırken Dikkat Edilmesi Gerekenler',
    slug: '/blog',
  },
  {
    title: 'Eşya Paketleme Rehberi',
    slug: '/blog',
  },
]

export default function ServiceSidebar() {
  return (
    <aside className="space-y-6">
      {/* Quick Contact */}
      <div className="bg-gradient-to-br from-primary-600 to-accent-500 rounded-xl p-6 text-white sticky top-24">
        <h3 className="text-xl font-bold mb-4">Hemen İletişime Geçin</h3>
        
        <div className="space-y-4 mb-6">
          <a href="tel:05374092406" className="flex items-center space-x-3 hover:text-accent-200 transition-colors">
            <div className="bg-white/20 p-3 rounded-full">
              <FaPhone />
            </div>
            <div>
              <p className="text-sm opacity-90">Telefon</p>
              <p className="font-bold">0537 409 24 06</p>
            </div>
          </a>

          <a 
            href="https://wa.me/905374092406" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 hover:text-accent-200 transition-colors"
          >
            <div className="bg-white/20 p-3 rounded-full">
              <FaWhatsapp />
            </div>
            <div>
              <p className="text-sm opacity-90">WhatsApp</p>
              <p className="font-bold">Mesaj Gönder</p>
            </div>
          </a>

          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-3 rounded-full">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className="text-sm opacity-90">Adres</p>
              <p className="font-bold">Çukurova, Adana</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-3 rounded-full">
              <FaClock />
            </div>
            <div>
              <p className="text-sm opacity-90">Çalışma</p>
              <p className="font-bold">7/24 Açık</p>
            </div>
          </div>
        </div>

        <Link
          href="/teklif-al"
          className="block bg-white hover:bg-gray-100 text-accent-600 font-bold py-3 px-6 rounded-lg text-center transition-colors"
        >
          Ücretsiz Teklif Al
        </Link>
      </div>

      {/* Related Services */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Diğer Hizmetlerimiz</h3>
        <ul className="space-y-3">
          {relatedServices.map((service, index) => (
            <li key={index}>
              <Link
                href={service.slug}
                className="flex items-center justify-between text-gray-700 hover:text-accent-600 transition-colors group"
              >
                <span>{service.title}</span>
                <FaArrowRight className="text-sm transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Related Blog Posts */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4">İlgili Yazılar</h3>
        <ul className="space-y-3">
          {relatedPosts.map((post, index) => (
            <li key={index}>
              <Link
                href={post.slug}
                className="block text-gray-700 hover:text-accent-600 transition-colors font-medium"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Box */}
      <div className="bg-gray-50 rounded-xl p-6 border-2 border-accent-200">
        <h3 className="text-lg font-bold text-gray-900 mb-3">
          💡 Ücretsiz Keşif
        </h3>
        <p className="text-gray-700 text-sm mb-4">
          Evinizdeki eşyaları görerek size özel fiyat teklifi sunuyoruz.
        </p>
        <Link
          href="/teklif-al"
          className="block bg-accent-500 hover:bg-accent-600 text-white font-semibold py-2 px-4 rounded-lg text-center transition-colors text-sm"
        >
          Keşif Talep Et
        </Link>
      </div>
    </aside>
  )
}
