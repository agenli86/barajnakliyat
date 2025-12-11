import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import ServiceSidebar from '@/components/ServiceSidebar'
import Link from 'next/link'
import { FaTruck, FaHome, FaBoxes, FaPhone } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Pozantı Nakliyat - Evden Eve Nakliyat | Baraj Nakliyat',
  description: 'Pozantı nakliyat, evden eve nakliyat, asansörlü nakliyat ve kamyonet nakliye. Belemedik, Kaleboynu, Alihocalı bölgelerinde güvenilir taşımacılık.',
  keywords: 'pozantı nakliyat, pozantı evden eve nakliyat, pozantı asansörlü nakliyat, pozantı kamyonet nakliye',
  alternates: {
    canonical: 'https://barajnakliyat.com/bolge/pozanti-nakliyat',
  },
  openGraph: {
    title: 'Pozantı Nakliyat - Evden Eve Nakliyat | Baraj Nakliyat',
    description: 'Pozantı bölgesinde profesyonel nakliyat hizmetleri.',
    url: 'https://barajnakliyat.com/bolge/pozanti-nakliyat',
    siteName: 'Baraj Nakliyat',
    locale: 'tr_TR',
    type: 'website',
  },
}

export default function PozantiNakliyatPage() {
  const neighborhoods = ['Merkez', 'Belemedik', 'Kaleboynu', 'Alihocalı', 'Çatalpınar']

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Bölgelerimiz', href: '/#bolge' },
          { label: 'Pozantı Nakliyat' },
        ]}
        title="Pozantı Nakliyat"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <article className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
                
                <div className="mb-12">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Pozantı Nakliyat Hizmetleri
                  </h1>
                  
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    <strong>Pozantı nakliyat</strong> hizmetleri ile Adana'nın dağlık ve stratejik konumundaki Pozantı ilçesinde profesyonel taşımacılık yapıyoruz. Pozantı'nın özel coğrafi şartlarına uygun nakliyat çözümleri sunuyoruz.
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

                {/* Pozantı Evden Eve Nakliyat */}
                <div className="mb-16">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-3 rounded-lg">
                      <FaHome className="text-2xl text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Pozantı Evden Eve Nakliyat</h2>
                  </div>

                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200"
                    alt="Pozantı Evden Eve Nakliyat"
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Pozantı evden eve nakliyat</strong> hizmetimiz ile Pozantı merkez ve mahallelerinde güvenli taşımacılık yapıyoruz. Pozantı'nın dağlık arazi yapısı ve özel yol şartlarına uygun araç filomuza sahip deneyimli ekibimizle hizmet veriyoruz.
                  </p>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Dağlık Arazi Deneyimi:</strong> Pozantı'nın özel coğrafyasına uygun hizmet</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Şehirler Arası Bağlantı:</strong> Pozantı'dan Ankara/İstanbul yolu üzerinde güvenli taşıma</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Mevsim Şartları:</strong> Kış aylarında özel dikkat ve planlama</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Sigortalı Taşıma:</strong> Uzun mesafe taşımalarda tam güvence</span>
                    </li>
                  </ul>

                  <div className="bg-blue-50 p-6 rounded-lg mb-4">
                    <p className="text-gray-700">
                      <strong>🏔️ Pozantı Özel Koşulları:</strong> Pozantı'nın yüksek rakımı ve kış şartları göz önünde bulundurularak taşıma zamanlaması yapılır. Deneyimli şoförlerimiz bölge yollarını çok iyi bilir.
                    </p>
                  </div>
                </div>

                <hr className="my-12 border-gray-200" />

                {/* Pozantı Asansörlü Nakliyat */}
                <div className="mb-16">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-3 rounded-lg">
                      <FaTruck className="text-2xl text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Pozantı Asansörlü Nakliyat</h2>
                  </div>

                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200"
                    alt="Pozantı Asansörlü Nakliyat"
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Pozantı asansörlü nakliyat</strong> hizmeti ile Pozantı merkezdeki apartman ve binalarda asansörlü taşıma yapıyoruz. Pozantı'nın yeni yapılaşan bölgelerinde modern taşıma çözümleri sunuyoruz.
                  </p>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Modern Binalar:</strong> Yeni yerleşim alanlarında hızlı hizmet</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Güvenli Ekipman:</strong> Profesyonel asansör sistemleri</span>
                    </li>
                  </ul>
                </div>

                <hr className="my-12 border-gray-200" />

                {/* Pozantı Kamyonet Nakliye */}
                <div className="mb-12">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-3 rounded-lg">
                      <FaBoxes className="text-2xl text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Pozantı Kamyonet Nakliye</h2>
                  </div>

                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200"
                    alt="Pozantı Kamyonet Nakliye"
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Pozantı kamyonet nakliye</strong> hizmeti ile küçük yük taşıma, parça eşya ve öğrenci evi taşıma ihtiyaçlarınıza ekonomik çözümler sunuyoruz. Pozantı'dan Adana merkez veya diğer şehirlere kamyonet nakliye hizmeti.
                  </p>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Esnek Seçenekler:</strong> İhtiyaca özel kamyonet boyutları</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Uygun Fiyat:</strong> Ekonomik kamyonet nakliye tarifeleri</span>
                    </li>
                  </ul>

                  <div className="bg-accent-50 border-l-4 border-accent-500 p-6 rounded-lg">
                    <p className="text-gray-700">
                      <strong>🌲 Pozantı'dan Taşınıyor musunuz?</strong> Doğal güzellikleriyle ünlü Pozantı'dan taşınma işlemlerinizde özel indirimlerimizden yararlanın!
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-12 bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Pozantı Nakliyat İçin Hemen Arayın!</h3>
                  <p className="mb-6">Pozantı'daki adresinizden ücretsiz keşif ve teklif için bizimle iletişime geçin.</p>
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
                    name: 'Pozantı Nakliyat Hizmetleri',
                    provider: {
                      '@type': 'MovingCompany',
                      name: 'Baraj Nakliyat',
                      telephone: '+905374092406',
                      address: {
                        '@type': 'PostalAddress',
                        addressLocality: 'Pozantı',
                        addressRegion: 'Adana',
                        addressCountry: 'TR',
                      },
                    },
                    areaServed: {
                      '@type': 'City',
                      name: 'Pozantı, Adana',
                    },
                    description: 'Pozantı nakliyat, evden eve nakliyat, asansörlü nakliyat ve kamyonet nakliye hizmetleri.',
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
