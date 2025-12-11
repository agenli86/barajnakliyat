import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import ServiceSidebar from '@/components/ServiceSidebar'
import Link from 'next/link'
import { FaTruck, FaHome, FaBoxes, FaPhone } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Çukurova Nakliyat - Evden Eve Nakliyat | Baraj Nakliyat',
  description: 'Çukurova nakliyat, evden eve nakliyat, asansörlü nakliyat ve kamyonet nakliye. Mahfesığmaz, Güzelyalı, Beyazevler bölgelerinde güvenilir taşımacılık.',
  keywords: 'çukurova nakliyat, çukurova evden eve nakliyat, çukurova asansörlü nakliyat, çukurova kamyonet nakliye',
  alternates: {
    canonical: 'https://barajnakliyat.com/bolge/cukurova-nakliyat',
  },
  openGraph: {
    title: 'Çukurova Nakliyat - Evden Eve Nakliyat | Baraj Nakliyat',
    description: 'Çukurova merkez bölgesinde profesyonel nakliyat hizmetleri.',
    url: 'https://barajnakliyat.com/bolge/cukurova-nakliyat',
    siteName: 'Baraj Nakliyat',
    locale: 'tr_TR',
    type: 'website',
  },
}

export default function CukurovaNakliyatPage() {
  const neighborhoods = ['Mahfesığmaz', 'Güzelyalı', 'Beyazevler', 'Çınarlı', 'Belediye Evleri']

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Bölgelerimiz', href: '/#bolge' },
          { label: 'Çukurova Nakliyat' },
        ]}
        title="Çukurova Nakliyat"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <article className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
                
                <div className="mb-12">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Çukurova Nakliyat Hizmetleri
                  </h1>
                  
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    <strong>Çukurova nakliyat</strong> hizmetleri ile Adana'nın merkez konumundaki Çukurova ilçesinde profesyonel ev ve ofis taşımacılığı yapıyoruz. Çukurova'nın modern yapısına uygun nakliyat çözümleri sunuyoruz.
                  </p>

                  <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-lg mb-8">
                    <h3 className="font-bold text-gray-900 mb-2">📍 Hizmet Verdiğimiz Mahalleler</h3>
                    <div className="flex flex-wrap gap-2">
                      {neighborhoods.map((n, i) => (
                        <span key={i} className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                          {n}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Çukurova Evden Eve Nakliyat */}
                <div className="mb-16">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-3 rounded-lg">
                      <FaHome className="text-2xl text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Çukurova Evden Eve Nakliyat</h2>
                  </div>

                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200"
                    alt="Çukurova Evden Eve Nakliyat"
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Çukurova evden eve nakliyat</strong> hizmetimiz ile Mahfesığmaz, Güzelyalı, Beyazevler ve diğer tüm mahallelerde güvenli taşımacılık yapıyoruz. Çukurova'nın merkezi konumu sayesinde hızlı ve pratik nakliyat hizmeti sunuyoruz.
                  </p>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Merkezi Konum:</strong> Çukurova'nın merkezi konumunda hızlı erişim</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Modern Binalara Özel:</strong> Çukurova'nın modern apartmanlarına uygun hizmet</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Sigortalı Taşıma:</strong> Çukurova nakliyat hizmetinde tam güvence</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Profesyonel Ekip:</strong> Çukurova bölgesini iyi bilen deneyimli personel</span>
                    </li>
                  </ul>
                </div>

                <hr className="my-12 border-gray-200" />

                {/* Çukurova Asansörlü Nakliyat */}
                <div className="mb-16">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-3 rounded-lg">
                      <FaTruck className="text-2xl text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Çukurova Asansörlü Nakliyat</h2>
                  </div>

                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200"
                    alt="Çukurova Asansörlü Nakliyat"
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Çukurova asansörlü nakliyat</strong> hizmeti ile yüksek katlı modern apartmanlarda hızlı ve güvenli taşıma yapıyoruz. Çukurova'nın yeni yerleşim bölgelerindeki yüksek yapılarda özellikle tercih edilen hizmetimiz.
                  </p>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>15 Kata Kadar:</strong> Yüksek katlı binalarda profesyonel hizmet</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Zaman Tasarrufu:</strong> Geleneksel taşımaya göre çok daha hızlı</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Güvenli Ekipman:</strong> Modern asansör sistemleri ile eşya güvenliği</span>
                    </li>
                  </ul>
                </div>

                <hr className="my-12 border-gray-200" />

                {/* Çukurova Kamyonet Nakliye */}
                <div className="mb-12">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-3 rounded-lg">
                      <FaBoxes className="text-2xl text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Çukurova Kamyonet Nakliye</h2>
                  </div>

                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200"
                    alt="Çukurova Kamyonet Nakliye"
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Çukurova kamyonet nakliye</strong> hizmeti ile parça eşya taşıma, öğrenci evi taşıma ve küçük yük taşıma ihtiyaçlarınıza ekonomik çözümler sunuyoruz. Çukurova içi ve Çukurova'dan diğer bölgelere hızlı kamyonet nakliye.
                  </p>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Esnek Çözümler:</strong> İhtiyacınıza özel kamyonet nakliye seçenekleri</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Hızlı Servis:</strong> Çukurova'da aynı gün teslimat imkanı</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Ekonomik Fiyat:</strong> Uygun kamyonet nakliye tarifeleri</span>
                    </li>
                  </ul>

                  <div className="bg-accent-50 border-l-4 border-accent-500 p-6 rounded-lg">
                    <p className="text-gray-700">
                      <strong>💡 Özel Teklif:</strong> Çukurova bölgesi sakinlerine özel kampanyalı nakliyat fiyatları! Hemen arayın, avantajlı fiyatları kaçırmayın.
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-12 bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Çukurova Nakliyat İçin Hemen Arayın!</h3>
                  <p className="mb-6">Çukurova'daki adresinizden ücretsiz keşif ve teklif için bizimle iletişime geçin.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:05374092406"
                      className="flex items-center justify-center space-x-2 bg-white hover:bg-gray-100 text-accent-600 font-bold py-3 px-8 rounded-lg transition-colors"
                    >
                      <FaPhone />
                      <span>0537 409 24 06</span>
                    </a>
                    <Link
                      href="/teklif-al"
                      className="bg-primary-800 hover:bg-primary-900 text-white font-bold py-3 px-8 rounded-lg transition-colors text-center"
                    >
                      Online Teklif Al
                    </Link>
                  </div>
                </div>

              </article>

              {/* JSON-LD */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'Service',
                    name: 'Çukurova Nakliyat Hizmetleri',
                    provider: {
                      '@type': 'MovingCompany',
                      name: 'Baraj Nakliyat',
                      telephone: '+905374092406',
                      address: {
                        '@type': 'PostalAddress',
                        addressLocality: 'Çukurova',
                        addressRegion: 'Adana',
                        addressCountry: 'TR',
                      },
                    },
                    areaServed: {
                      '@type': 'City',
                      name: 'Çukurova, Adana',
                    },
                    description: 'Çukurova nakliyat, evden eve nakliyat, asansörlü nakliyat ve kamyonet nakliye hizmetleri.',
                  }),
                }}
              />
            </div>

            <div className="lg:col-span-1">
              <ServiceSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
