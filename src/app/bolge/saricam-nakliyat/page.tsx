import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import ServiceSidebar from '@/components/ServiceSidebar'
import Link from 'next/link'
import { FaTruck, FaHome, FaBoxes, FaPhone } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Sarıçam Nakliyat - Evden Eve Nakliyat | Baraj Nakliyat',
  description: 'Sarıçam nakliyat, evden eve nakliyat, asansörlü nakliyat ve kamyonet nakliye hizmetleri. Dörtağaç, Balcalı, Gümüşler bölgelerinde güvenilir taşımacılık.',
  keywords: 'sarıçam nakliyat, sarıçam evden eve nakliyat, sarıçam asansörlü nakliyat, sarıçam kamyonet nakliye',
  alternates: {
    canonical: 'https://barajnakliyat.com/bolge/saricam-nakliyat',
  },
  openGraph: {
    title: 'Sarıçam Nakliyat - Evden Eve Nakliyat | Baraj Nakliyat',
    description: 'Sarıçam bölgesinde profesyonel nakliyat hizmetleri. Güvenli ve ekonomik ev taşıma.',
    url: 'https://barajnakliyat.com/bolge/saricam-nakliyat',
    siteName: 'Baraj Nakliyat',
    locale: 'tr_TR',
    type: 'website',
  },
}

export default function SaricamNakliyatPage() {
  const neighborhoods = ['Dörtağaç', 'Balcalı', 'Gümüşler', 'Akdam', 'Yamaçlı']

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Bölgelerimiz', href: '/#bolge' },
          { label: 'Sarıçam Nakliyat' },
        ]}
        title="Sarıçam Nakliyat"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <article className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
                
                <div className="mb-12">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Sarıçam Nakliyat Hizmetleri
                  </h1>
                  
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    <strong>Sarıçam nakliyat</strong> hizmetleri ile Adana'nın hızla gelişen ilçesi Sarıçam'da profesyonel ev ve ofis taşımacılığı yapıyoruz. Sarıçam'ın tüm mahallelerinde güvenilir nakliyat çözümleri sunuyoruz.
                  </p>

                  <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-lg mb-8">
                    <h3 className="font-bold text-gray-900 mb-2">📍 Hizmet Verdiğimiz Mahalleler</h3>
                    <div className="flex flex-wrap gap-2">
                      {neighborhoods.map((n, i) => (
                        <span key={i} className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">{n}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sarıçam Evden Eve Nakliyat */}
                <div className="mb-16">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-3 rounded-lg">
                      <FaHome className="text-2xl text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Sarıçam Evden Eve Nakliyat</h2>
                  </div>

                  <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200" alt="Sarıçam Evden Eve Nakliyat" className="w-full h-64 object-cover rounded-xl mb-6" />

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Sarıçam evden eve nakliyat</strong> hizmetimiz ile Dörtağaç, Balcalı, Gümüşler ve diğer tüm mahallelerde profesyonel taşımacılık yapıyoruz. Sarıçam'ın yeni gelişen bölgelerinde modern apartman ve sitelere özel nakliyat çözümleri sunuyoruz.
                  </p>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Sigortalı Taşıma:</strong> Sarıçam nakliyat hizmetimizde tüm eşyalarınız güvence altında</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Modern Araç Filosu:</strong> Sarıçam bölgesine uygun nakliyat araçları</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Ücretsiz Keşif:</strong> Sarıçam'daki adresinizde ücretsiz fiyat tespiti</span>
                    </li>
                  </ul>
                </div>

                <hr className="my-12 border-gray-200" />

                {/* Sarıçam Asansörlü Nakliyat */}
                <div className="mb-16">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-3 rounded-lg">
                      <FaTruck className="text-2xl text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Sarıçam Asansörlü Nakliyat</h2>
                  </div>

                  <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200" alt="Sarıçam Asansörlü Nakliyat" className="w-full h-64 object-cover rounded-xl mb-6" />

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Sarıçam asansörlü nakliyat</strong> hizmeti özellikle Sarıçam'ın yüksek katlı yeni binalarında ideal çözümdür. 15 kata kadar güvenli ve hızlı asansörlü taşıma hizmeti sunuyoruz.
                  </p>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Yüksek Katlara Özel:</strong> Sarıçam'daki modern apartmanlarda hızlı taşıma</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Güvenli Sistem:</strong> Son teknoloji asansör ekipmanları</span>
                    </li>
                  </ul>
                </div>

                <hr className="my-12 border-gray-200" />

                {/* Sarıçam Kamyonet Nakliye */}
                <div className="mb-12">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-3 rounded-lg">
                      <FaBoxes className="text-2xl text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Sarıçam Kamyonet Nakliye</h2>
                  </div>

                  <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200" alt="Sarıçam Kamyonet Nakliye" className="w-full h-64 object-cover rounded-xl mb-6" />

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Sarıçam kamyonet nakliye</strong> hizmeti ile öğrenci evleri, küçük daireler ve parça eşya taşıma ihtiyaçlarınıza ekonomik çözümler sunuyoruz. Sarıçam içinde ve Sarıçam'dan diğer ilçelere kamyonet nakliye hizmeti veriyoruz.
                  </p>

                  <div className="bg-accent-50 border-l-4 border-accent-500 p-6 rounded-lg">
                    <p className="text-gray-700">
                      <strong>💰 Ekonomik:</strong> Sarıçam kamyonet nakliye ile sadece ihtiyacınız kadar araç kiralayın, tasarruf edin!
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-12 bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Sarıçam Nakliyat İçin Hemen Arayın!</h3>
                  <p className="mb-6">Sarıçam'daki adresinizden ücretsiz keşif için bizimle iletişime geçin.</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="tel:05374092406" className="flex items-center justify-center space-x-2 bg-white hover:bg-gray-100 text-accent-600 font-bold py-3 px-8 rounded-lg transition-colors">
                      <FaPhone />
                      <span>0537 409 24 06</span>
                    </a>
                    <Link href="/teklif-al" className="bg-primary-800 hover:bg-primary-900 text-white font-bold py-3 px-8 rounded-lg transition-colors text-center">
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
                    name: 'Sarıçam Nakliyat Hizmetleri',
                    provider: {
                      '@type': 'MovingCompany',
                      name: 'Baraj Nakliyat',
                      telephone: '+905374092406',
                      address: {
                        '@type': 'PostalAddress',
                        addressLocality: 'Sarıçam',
                        addressRegion: 'Adana',
                        addressCountry: 'TR',
                      },
                    },
                    areaServed: {
                      '@type': 'City',
                      name: 'Sarıçam, Adana',
                    },
                    description: 'Sarıçam nakliyat, evden eve nakliyat, asansörlü nakliyat ve kamyonet nakliye hizmetleri.',
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
