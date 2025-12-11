import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import ServiceSidebar from '@/components/ServiceSidebar'
import Link from 'next/link'
import { FaTruck, FaHome, FaBoxes, FaPhone } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Seyhan Nakliyat - Evden Eve Nakliyat | Baraj Nakliyat',
  description: 'Seyhan nakliyat, evden eve nakliyat, asansörlü nakliyat ve kamyonet nakliye. Ziyapaşa, Kurtuluş, Kayalıbağ bölgelerinde güvenilir taşımacılık.',
  keywords: 'seyhan nakliyat, seyhan evden eve nakliyat, seyhan asansörlü nakliyat, seyhan kamyonet nakliye',
  alternates: {
    canonical: 'https://barajnakliyat.com/bolge/seyhan-nakliyat',
  },
  openGraph: {
    title: 'Seyhan Nakliyat - Evden Eve Nakliyat | Baraj Nakliyat',
    description: 'Seyhan merkez ilçede profesyonel nakliyat hizmetleri.',
    url: 'https://barajnakliyat.com/bolge/seyhan-nakliyat',
    siteName: 'Baraj Nakliyat',
    locale: 'tr_TR',
    type: 'website',
  },
}

export default function SeyhanNakliyatPage() {
  const neighborhoods = ['Ziyapaşa', 'Kurtuluş', 'Kayalıbağ', 'Reşatbey', 'Yeşilevler']

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Bölgelerimiz', href: '/#bolge' },
          { label: 'Seyhan Nakliyat' },
        ]}
        title="Seyhan Nakliyat"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <article className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
                
                <div className="mb-12">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Seyhan Nakliyat Hizmetleri
                  </h1>
                  
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    <strong>Seyhan nakliyat</strong> hizmetleri ile Adana'nın merkez ilçesi Seyhan'da 15 yılı aşkın tecrübemizle profesyonel taşımacılık yapıyoruz. Seyhan'ın tüm mahallelerinde güvenilir ve ekonomik nakliyat çözümleri sunuyoruz.
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

                {/* Seyhan Evden Eve Nakliyat */}
                <div className="mb-16">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-3 rounded-lg">
                      <FaHome className="text-2xl text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Seyhan Evden Eve Nakliyat</h2>
                  </div>

                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200"
                    alt="Seyhan Evden Eve Nakliyat"
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Seyhan evden eve nakliyat</strong> hizmetimiz ile Ziyapaşa, Kurtuluş, Kayalıbağ, Reşatbey ve diğer tüm mahallelerde profesyonel taşımacılık yapıyoruz. Seyhan'ın merkezi konumu ve geniş coğrafyasında yıllardır hizmet veren deneyimli ekibimizle yanınızdayız.
                  </p>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Yerel Uzman Ekip:</strong> Seyhan'ın her sokağını bilen deneyimli personel</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Hızlı Erişim:</strong> Merkezi konumda hızlı ve pratik taşıma</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Tam Sigorta:</strong> Seyhan nakliyat hizmetinde kapsamlı sigorta</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Ücretsiz Keşif:</strong> Seyhan'daki adresinizde ücretsiz fiyat tespiti</span>
                    </li>
                  </ul>

                  <div className="bg-primary-100 p-6 rounded-lg mb-4">
                    <p className="text-gray-700">
                      <strong>🏙️ Seyhan Merkez:</strong> Adana'nın en işlek bölgesi Seyhan'da trafik yoğunluğuna rağmen planlı çalışma sistemimiz ile taşıma sürenizi minimuma indiriyoruz.
                    </p>
                  </div>
                </div>

                <hr className="my-12 border-gray-200" />

                {/* Seyhan Asansörlü Nakliyat */}
                <div className="mb-16">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-3 rounded-lg">
                      <FaTruck className="text-2xl text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Seyhan Asansörlü Nakliyat</h2>
                  </div>

                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200"
                    alt="Seyhan Asansörlü Nakliyat"
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Seyhan asansörlü nakliyat</strong> hizmeti ile Seyhan'ın eski dar sokaklı mahallelerinde ve yüksek katlı modern binalarında asansörlü taşıma çözümleri sunuyoruz. 15 kata kadar güvenli asansörlü nakliyat hizmeti veriyoruz.
                  </p>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Dar Sokaklar:</strong> Seyhan'ın eski mahallelerinde ideal çözüm</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Yüksek Binalar:</strong> Modern apartmanlarda hızlı taşıma</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Profesyonel Ekipman:</strong> Son teknoloji asansör sistemleri</span>
                    </li>
                  </ul>
                </div>

                <hr className="my-12 border-gray-200" />

                {/* Seyhan Kamyonet Nakliye */}
                <div className="mb-12">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-3 rounded-lg">
                      <FaBoxes className="text-2xl text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Seyhan Kamyonet Nakliye</h2>
                  </div>

                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200"
                    alt="Seyhan Kamyonet Nakliye"
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />

                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Seyhan kamyonet nakliye</strong> hizmeti ile merkez bölgesinde parça eşya, öğrenci evi ve küçük ofis taşıma ihtiyaçlarınıza hızlı ve ekonomik çözümler sunuyoruz. Seyhan içi ve Seyhan'dan diğer ilçelere kamyonet nakliye hizmeti.
                  </p>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Şehir İçi Taşıma:</strong> Seyhan'da trafik yoğunluğunda pratik çözüm</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Acil Servis:</strong> Aynı gün teslimat imkanı</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700"><strong>Ekonomik:</strong> Küçük yükler için uygun fiyat</span>
                    </li>
                  </ul>

                  <div className="bg-accent-50 border-l-4 border-accent-500 p-6 rounded-lg">
                    <p className="text-gray-700">
                      <strong>🚚 Seyhan'da Öğrenci misiniz?</strong> Öğrenci evlerinden parça eşya taşıma için özel indirimli kamyonet nakliye hizmetimizden faydalanın!
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-12 bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Seyhan Nakliyat İçin Hemen Arayın!</h3>
                  <p className="mb-6">Seyhan'daki adresinizden ücretsiz keşif ve teklif için bizimle iletişime geçin.</p>
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
                    name: 'Seyhan Nakliyat Hizmetleri',
                    provider: {
                      '@type': 'MovingCompany',
                      name: 'Baraj Nakliyat',
                      telephone: '+905374092406',
                      address: {
                        '@type': 'PostalAddress',
                        addressLocality: 'Seyhan',
                        addressRegion: 'Adana',
                        addressCountry: 'TR',
                      },
                    },
                    areaServed: {
                      '@type': 'City',
                      name: 'Seyhan, Adana',
                    },
                    description: 'Seyhan nakliyat, evden eve nakliyat, asansörlü nakliyat ve kamyonet nakliye hizmetleri.',
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
