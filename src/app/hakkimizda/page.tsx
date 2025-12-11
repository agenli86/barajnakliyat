import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import Link from 'next/link'
import { FaTruck, FaShieldAlt, FaUsers, FaAward, FaHandshake, FaCheckCircle } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Hakkımızda - Baraj Nakliyat | Adana Evden Eve Nakliyat',
  description: 'Baraj Nakliyat, 15 yıldır Adana\'da evden eve nakliyat ve taşımacılık hizmetleri sunmaktadır. Profesyonel ekibimiz ve güvenilir hizmet anlayışımızla yanınızdayız.',
  openGraph: {
    title: 'Hakkımızda - Baraj Nakliyat',
    description: '15 yıldır Adana\'da güvenilir nakliyat hizmetleri sunuyoruz.',
  },
}

const values = [
  {
    icon: FaShieldAlt,
    title: 'Güvenilirlik',
    description: 'Eşyalarınızın güvenliği bizim için en önemli önceliktir.',
  },
  {
    icon: FaUsers,
    title: 'Profesyonellik',
    description: 'Deneyimli ve uzman ekibimizle profesyonel hizmet sunuyoruz.',
  },
  {
    icon: FaHandshake,
    title: 'Müşteri Memnuniyeti',
    description: 'Müşterilerimizin memnuniyeti bizim başarımızdır.',
  },
  {
    icon: FaAward,
    title: 'Kalite',
    description: 'Yüksek kalite standartlarıyla hizmet veriyoruz.',
  },
]

const achievements = [
  { number: '15+', label: 'Yıl Tecrübe' },
  { number: '5000+', label: 'Mutlu Müşteri' },
  { number: '50+', label: 'Profesyonel Personel' },
  { number: '100%', label: 'Müşteri Memnuniyeti' },
]

export default function AboutPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: 'Hakkımızda' }]}
        title="Hakkımızda"
      />

      {/* Company Introduction */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Adana'nın Güvenilir Nakliyat Firması
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Baraj Nakliyat</strong> olarak 15 yıldır Adana'da evden eve nakliyat ve taşımacılık hizmetleri sunmaktayız. Çukurova bölgesinde başlayan yolculuğumuz, müşteri memnuniyeti odaklı hizmet anlayışımız sayesinde büyüyerek devam etmektedir.
                </p>
                <p>
                  Profesyonel ekibimiz, modern araç filomuz ve güvenli taşımacılık sistemlerimizle binlerce ailenin ev taşıma sürecini başarıyla tamamladık. Müşterilerimizin eşyalarına gösterdiğimiz özen ve titizlik, bizi sektörde öne çıkaran en önemli özelliklerimizdendir.
                </p>
                <p>
                  Evden eve nakliyat, ofis taşımacılığı, asansörlü taşımacılık ve parça eşya taşıma gibi geniş bir hizmet yelpazesi sunuyoruz. Tüm hizmetlerimizde sigortalı taşımacılık garantisi veriyoruz.
                </p>
              </div>

              <div className="mt-8">
                <Link href="/teklif-al" className="btn-primary">
                  Ücretsiz Teklif Al
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Misyonumuz</h3>
                <p className="mb-8 leading-relaxed">
                  Müşterilerimize en yüksek kalitede, güvenilir ve ekonomik nakliyat hizmetleri sunmak. Her taşıma işlemini, eşyalarını kendi evimizden taşıyormuş gibi özenle gerçekleştirmek.
                </p>

                <h3 className="text-2xl font-bold mb-6">Vizyonumuz</h3>
                <p className="leading-relaxed">
                  Adana'nın en güvenilir ve tercih edilen nakliyat firması olmak. Sürekli gelişen teknoloji ve hizmet anlayışımızla sektörde öncü konumda yer almak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Değerlerimiz</h2>
            <p className="section-subtitle">
              Hizmet kalitemizi şekillendiren temel değerlerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg card-hover text-center">
                  <div className="bg-gradient-to-br from-primary-500 to-accent-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-3xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Başarılarımız</h2>
            <p className="text-xl text-gray-200">
              Rakamlarla Baraj Nakliyat
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent-300 mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg text-gray-200">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Neden Bizi Tercih Etmelisiniz?</h2>
            <p className="section-subtitle">
              Size en iyi hizmeti sunmak için çalışıyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Sigortalı taşımacılık garantisi',
              'Profesyonel ambalajlama hizmeti',
              'Modern ve bakımlı araç filosu',
              'Deneyimli ve eğitimli personel',
              'Uygun ve şeffaf fiyatlandırma',
              '7/24 müşteri hizmetleri',
              'Zamanında teslimat garantisi',
              'Şehir içi ve şehirler arası hizmet',
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md">
                <FaCheckCircle className="text-2xl text-accent-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{item}</span>
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
            Nakliyat ihtiyaçlarınız için bizimle iletişime geçin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/iletisim" className="bg-white hover:bg-gray-100 text-accent-600 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              İletişime Geç
            </Link>
            <a href="tel:05374092406" className="bg-primary-700 hover:bg-primary-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Hemen Ara
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
