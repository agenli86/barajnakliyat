import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import ServiceSidebar from '@/components/ServiceSidebar'
import Link from 'next/link'
import { FaTruck, FaHome, FaBoxes, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Kozan Nakliyat - Evden Eve Nakliyat | Baraj Nakliyat',
  description: 'Kozan nakliyat hizmetleri. Kozan evden eve nakliyat, asansörlü nakliyat ve kamyonet nakliye hizmetleri. Uygun fiyat, güvenli taşıma.',
  keywords: 'kozan nakliyat, kozan evden eve nakliyat, kozan asansörlü nakliyat, kozan kamyonet nakliye, kozan taşımacılık',
}

export default function KozanNakliyatPage() {
  const neighborhoods = ['Merkez', 'Cumhuriyet', 'Hacıömerli', 'Misis', 'Fevzipaşa']

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Bölgelerimiz', href: '/#bolgeler' },
          { label: 'Kozan Nakliyat' },
        ]}
        title="Kozan Nakliyat"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
                
                {/* Intro */}
                <div className="mb-12">
                  <div className="flex items-center space-x-2 text-accent-600 mb-4">
                    <FaMapMarkerAlt />
                    <span className="font-semibold">Kozan, Adana</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Kozan Nakliyat Hizmetleri
                  </h1>
                  
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Baraj Nakliyat olarak <strong>Kozan</strong> bölgesinde 15 yılı aşkın tecrübemizle profesyonel nakliyat hizmetleri sunuyoruz. <strong>Kozan nakliyat</strong> ihtiyaçlarınız için güvenilir, hızlı ve ekonomik çözümler üretiyoruz.
                  </p>

                  <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-lg mb-8">
                    <h3 className="font-bold text-gray-900 mb-2">📍 Hizmet Verdiğimiz Mahalleler</h3>
                    <div className="flex flex-wrap gap-2">
                      {neighborhoods.map((neighborhood, index) => (
                        <span key={index} className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                          {neighborhood}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section 1: Kozan Evden Eve Nakliyat */}
                <div className="mb-16" id="evden-eve">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-3 rounded-lg">
                      <FaHome className="text-2xl text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      Kozan Evden Eve Nakliyat
                    </h2>
                  </div>

                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200"
                    alt="Kozan Evden Eve Nakliyat"
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />

                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Kozan evden eve nakliyat</strong> hizmetimiz ile eşyalarınızı güvenle taşıyoruz. Kozan'ın tüm mahallelerinde, modern araç filomuz ve profesyonel ekibimizle hizmet vermekteyiz.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                      Kozan Evden Eve Nakliyat Özellikleri
                    </h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700"><strong>Profesyonel Paketleme:</strong> Kozan'daki evinizde tüm eşyalarınız için özel paketleme malzemeleri kullanıyoruz</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700"><strong>Sigortalı Taşımacılık:</strong> Kozan nakliyat hizmetimizde tüm eşyalarınız sigorta güvencesi altında</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700"><strong>Deneyimli Ekip:</strong> Kozan bölgesini çok iyi bilen yerel ekibimiz</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700"><strong>Uygun Fiyat:</strong> Kozan için özel kampanyalı nakliyat fiyatları</span>
                      </li>
                    </ul>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Kozan merkezden veya mahallelerden taşınıyorsanız, ücretsiz keşif hizmetimizle evinizi inceliyor ve size en uygun <strong>Kozan evden eve nakliyat fiyatı</strong>nı sunuyoruz.
                    </p>
                  </div>
                </div>

                <hr className="my-12 border-gray-200" />

                {/* Section 2: Kozan Asansörlü Nakliyat */}
                <div className="mb-16" id="asansorlu">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-3 rounded-lg">
                      <FaTruck className="text-2xl text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      Kozan Asansörlü Nakliyat
                    </h2>
                  </div>

                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200"
                    alt="Kozan Asansörlü Nakliyat"
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />

                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Kozan asansörlü nakliyat</strong> hizmeti ile yüksek katlı apartmanlarda yaşayanlar için özel çözümler sunuyoruz. Kozan'daki modern apartman ve sitelerde asansörlü taşıma sistemimiz ile hızlı ve güvenli taşıma.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                      Kozan'da Asansörlü Taşımacılık Avantajları
                    </h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700"><strong>Hızlı Taşıma:</strong> Kozan'da 15 kata kadar asansörlü nakliyat hizmeti</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700"><strong>Eşya Güvenliği:</strong> Dar merdivenlerde hasar riski olmadan taşıma</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700"><strong>Zaman Tasarrufu:</strong> Geleneksel taşımaya göre %70 daha hızlı</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700"><strong>Profesyonel Ekipman:</strong> Modern ve güvenli asansör sistemleri</span>
                      </li>
                    </ul>

                    <p className="text-gray-700 leading-relaxed">
                      Kozan'ın yeni yapılan apartman ve sitelerinde asansörsüz veya dar asansörlü binalarda <strong>Kozan asansörlü nakliyat</strong> hizmeti ideal çözümdür.
                    </p>
                  </div>
                </div>

                <hr className="my-12 border-gray-200" />

                {/* Section 3: Kozan Kamyonet Nakliye */}
                <div className="mb-12" id="kamyonet">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-3 rounded-lg">
                      <FaBoxes className="text-2xl text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      Kozan Kamyonet Nakliye
                    </h2>
                  </div>

                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200"
                    alt="Kozan Kamyonet Nakliye"
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />

                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Kozan kamyonet nakliye</strong> hizmeti ile az eşya taşımacılığı veya küçük yük taşıma ihtiyaçlarınıza ekonomik çözümler sunuyoruz. Kozan içi ve Kozan'dan diğer bölgelere kamyonet nakliye hizmeti.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                      Kozan Kamyonet Nakliye Hizmetleri
                    </h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700"><strong>Parça Eşya Taşıma:</strong> Kozan'da birkaç parça mobilya veya eşya taşıma</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700"><strong>Ofis Malzemesi:</strong> Küçük ofis taşımacılığı ve dosya arşivi taşıma</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700"><strong>Öğrenci Taşınması:</strong> Kozan'da öğrenci evi eşyaları taşıma</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700"><strong>Acil Taşıma:</strong> Aynı gün teslimat imkanı ile hızlı kamyonet nakliye</span>
                      </li>
                    </ul>

                    <div className="bg-accent-50 border-l-4 border-accent-500 p-6 rounded-lg">
                      <p className="text-gray-700 mb-0">
                        <strong>💰 Ekonomik Fiyat:</strong> Kozan kamyonet nakliye hizmetimiz, büyük nakliyat aracına ihtiyaç duymayan küçük taşımalar için ideal ve ekonomik bir çözümdür. Sadece kullandığınız alan kadar ödeme yaparsınız.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="mt-12 bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Kozan Nakliyat İçin Hemen Arayın!
                  </h3>
                  <p className="mb-6 text-lg">
                    Kozan'daki adresinizden ücretsiz keşif ve teklif için bizimle iletişime geçin.
                  </p>
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
                      className="flex items-center justify-center bg-primary-800 hover:bg-primary-900 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                    >
                      Online Teklif Al
                    </Link>
                  </div>
                </div>

              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ServiceSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
