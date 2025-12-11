import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'
import { FaTruck, FaHome, FaBuilding, FaBoxes, FaMapMarkedAlt, FaShieldAlt, FaCheckCircle, FaArrowRight } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Hizmetlerimiz - Baraj Nakliyat | Nakliyat ve Taşımacılık',
  description: 'Baraj Nakliyat hizmetleri: Evden eve nakliyat, asansörlü taşımacılık, ofis taşımacılığı, parça eşya taşıma ve şehirler arası nakliyat.',
  openGraph: {
    title: 'Hizmetlerimiz - Baraj Nakliyat',
    description: 'Profesyonel nakliyat ve taşımacılık hizmetleri.',
  },
}

const services = [
  {
    icon: FaHome,
    title: 'Evden Eve Nakliyat',
    description: 'Profesyonel ekibimiz ve modern araç filomuzla evden eve nakliyat hizmetinde uzmanız. Eşyalarınızı sigortalı ve güvenli bir şekilde yeni adresinize taşıyoruz.',
    features: [
      'Profesyonel paketleme hizmeti',
      'Sigortalı taşımacılık',
      'Deneyimli personel',
      'Modern araç filosu',
    ],
    link: '/hizmetler/evden-eve-nakliyat',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: FaTruck,
    title: 'Asansörlü Taşımacılık',
    description: 'Yüksek katlı binalarda asansörlü taşımacılık sistemi ile eşyalarınızı hızlı ve güvenli bir şekilde taşıyoruz. 15 kata kadar hizmet veriyoruz.',
    features: [
      'Yüksek katlarda hızlı taşıma',
      'Güvenli sistem',
      'Eşya koruma garantisi',
      'Ekonomik çözüm',
    ],
    link: '/hizmetler/asansorlu-tasimacilik',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: FaBuilding,
    title: 'Ofis Taşımacılığı',
    description: 'İş yerinizi en kısa sürede ve minimum kesinti ile yeni adresinize taşıyoruz. Profesyonel ofis nakliyat hizmetlerimizle yanınızdayız.',
    features: [
      'Hafta sonu taşıma imkanı',
      'Minimum iş kesintisi',
      'Teknik ekipman taşıma',
      'Kurulum desteği',
    ],
    link: '/hizmetler/ofis-tasimaciligi',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: FaBoxes,
    title: 'Parça Eşya Taşıma',
    description: 'Az sayıda eşyanızı ekonomik fiyatlarla güvenle taşıyoruz. Esnek çözümlerimizle ihtiyacınıza uygun hizmet sunuyoruz.',
    features: [
      'Ekonomik fiyatlandırma',
      'Esnek taşıma seçenekleri',
      'Hızlı teslimat',
      'Güvenli paketleme',
    ],
    link: '/hizmetler/parca-esya-tasima',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: FaMapMarkedAlt,
    title: 'Şehirler Arası Nakliyat',
    description: 'Türkiye\'nin her yerine güvenli ve hızlı şehirler arası nakliyat hizmeti sunuyoruz. Uzun mesafe taşımacılıkta uzmanız.',
    features: [
      'Tüm Türkiye\'ye hizmet',
      'Sigortalı taşıma',
      'Takip sistemi',
      'Kapıdan kapıya servis',
    ],
    link: '/hizmetler/sehirler-arasi-nakliyat',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: FaShieldAlt,
    title: 'Sigortalı Taşımacılık',
    description: 'Tüm taşımacılık hizmetlerimizde sigorta garantisi veriyoruz. Eşyalarınız tam güvence altında.',
    features: [
      'Tam kapsamlı sigorta',
      'Hasar garantisi',
      'Anında değer tespiti',
      'Hızlı ödeme',
    ],
    link: '/hizmetler/sigortali-tasimacilik',
    color: 'from-indigo-500 to-indigo-600',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: 'Hizmetler' }]}
        title="Hizmetlerimiz"
      />

      {/* Intro Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Profesyonel Nakliyat Çözümleri
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Baraj Nakliyat olarak, 15 yılı aşkın tecrübemiz ile ev taşıma, ofis nakliyat ve tüm taşımacılık ihtiyaçlarınız için profesyonel çözümler sunuyoruz. Müşteri memnuniyeti odaklı hizmet anlayışımız ve modern araç filomuzla her zaman yanınızdayız.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
                >
                  {/* Icon Header */}
                  <div className={`bg-gradient-to-r ${service.color} p-8 text-white`}>
                    <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Icon className="text-3xl" />
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <p className="text-gray-700 mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <FaCheckCircle className="text-accent-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Link */}
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-accent-600 font-semibold hover:text-accent-700 transition-colors group"
                    >
                      Detaylı Bilgi
                      <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Neden Baraj Nakliyat?</h2>
            <p className="section-subtitle">
              Tüm hizmetlerimizde kalite ve güvenlik garantisi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🏆',
                title: '15+ Yıl Tecrübe',
                description: 'Sektörde 15 yıldır başarıyla hizmet veriyoruz',
              },
              {
                icon: '🛡️',
                title: 'Sigortalı Hizmet',
                description: 'Tüm taşımalarımız sigorta güvencesi altında',
              },
              {
                icon: '👨‍🔧',
                title: 'Profesyonel Ekip',
                description: 'Deneyimli ve eğitimli personel kadrosu',
              },
              {
                icon: '💰',
                title: 'Uygun Fiyat',
                description: 'Kaliteli hizmeti ekonomik fiyatlarla sunuyoruz',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center card-hover">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Çalışma Sürecimiz</h2>
            <p className="section-subtitle">
              Profesyonel hizmet için 4 adımlık sistemimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'İletişim',
                description: 'Bizimle iletişime geçin, ihtiyaçlarınızı paylaşın',
              },
              {
                step: '02',
                title: 'Keşif & Teklif',
                description: 'Ücretsiz keşif yapıp size özel teklif sunuyoruz',
              },
              {
                step: '03',
                title: 'Planlama',
                description: 'Taşınma tarihini ve detayları planlıyoruz',
              },
              {
                step: '04',
                title: 'Taşıma',
                description: 'Profesyonel ekibimiz güvenli taşımayı gerçekleştiriyor',
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-8 shadow-lg card-hover text-center">
                  <div className="bg-gradient-to-br from-primary-500 to-accent-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <FaArrowRight className="text-accent-500 text-2xl" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-500 to-accent-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Hizmetlerimiz Hakkında Detaylı Bilgi Alın
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Size en uygun nakliyat çözümü için bizimle iletişime geçin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/teklif-al" className="bg-white hover:bg-gray-100 text-accent-600 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Ücretsiz Teklif Al
            </Link>
            <a href="tel:05374092406" className="bg-primary-700 hover:bg-primary-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Hemen Ara: 0537 409 24 06
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
