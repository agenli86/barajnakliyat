import type { Metadata } from 'next'
import HeroSlider from '@/components/HeroSlider'
import Link from 'next/link'
import { FaTruck, FaBoxes, FaHome, FaBuilding, FaShieldAlt, FaMoneyBillWave, FaClock, FaUsers, FaCheckCircle, FaStar } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Baraj Nakliyat - Adana Evden Eve Nakliyat | Güvenilir Ev Taşıma Hizmetleri',
  description: 'Adana\'da evden eve nakliyat fiyatları, ev taşıma, taşımacılık hizmetleri. Profesyonel nakliyat süreci ile güvenli ve ekonomik ev taşıma. 0537 409 24 06',
  keywords: 'ev taşıma, nakliyat, evden eve nakliyat, evden eve nakliyat fiyatları, taşımacılık, evden eve nakliyat süreci, ev taşıma fiyatları, Adana nakliyat',
}

const services = [
  {
    icon: FaHome,
    title: 'Evden Eve Nakliyat',
    description: 'Profesyonel ekibimizle ev taşıma işlemlerinizi güvenle gerçekleştiriyoruz. Eşyalarınız sigortalı ve güvence altında.',
    link: '/hizmetler',
  },
  {
    icon: FaTruck,
    title: 'Asansörlü Taşımacılık',
    description: 'Yüksek katlı binalarda asansörlü taşımacılık hizmeti ile eşyalarınızı hızlı ve güvenli şekilde taşıyoruz.',
    link: '/hizmetler/asansorlu-tasimacilik',
  },
  {
    icon: FaBuilding,
    title: 'Ofis Taşımacılığı',
    description: 'İş yerinizi en kısa sürede ve en az kesinti ile yeni adresinize taşıyoruz. Profesyonel ofis nakliyat çözümleri.',
    link: '/hizmetler',
  },
  {
    icon: FaBoxes,
    title: 'Parça Eşya Taşıma',
    description: 'Birkaç parça eşyanızı ekonomik fiyatlarla güvenle taşıyoruz. Esnek ve uygun çözümler sunuyoruz.',
    link: '/hizmetler',
  },
]

const features = [
  {
    icon: FaShieldAlt,
    title: 'Sigortalı Taşımacılık',
    description: 'Tüm eşyalarınız sigorta güvencesi altında taşınır.',
  },
  {
    icon: FaMoneyBillWave,
    title: 'Uygun Fiyatlar',
    description: 'Adana\'nın en ekonomik nakliyat fiyatları.',
  },
  {
    icon: FaClock,
    title: '7/24 Hizmet',
    description: 'Hafta sonu ve resmi tatillerde de hizmetinizdeyiz.',
  },
  {
    icon: FaUsers,
    title: 'Profesyonel Ekip',
    description: 'Deneyimli ve uzman personel kadromuz.',
  },
]

const testimonials = [
  {
    name: 'Mehmet Y.',
    rating: 5,
    comment: 'Baraj Nakliyat ile evden eve nakliyat sürecim çok kolay geçti. Çok profesyonel bir ekip, eşyalarıma çok özen gösterdiler. Fiyatları da oldukça uygundu.',
  },
  {
    name: 'Ayşe K.',
    rating: 5,
    comment: 'Asansörlü taşımacılık hizmeti harika! 5. kattan zorlanmadan tüm eşyalarımızı taşıdılar. Kesinlikle tavsiye ederim.',
  },
  {
    name: 'Ahmet D.',
    rating: 5,
    comment: 'Ev taşıma fiyatları çok makul ve hizmet kalitesi mükemmel. Adana\'da nakliyat için ilk tercihim Baraj Nakliyat olacak.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* About Section - Slider Altı */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image & Button */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000"
                  alt="Baraj Nakliyat Hizmetleri"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Stats on Image */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-accent-600">15+</div>
                      <div className="text-xs text-gray-700 font-medium">Yıl</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-accent-600">5000+</div>
                      <div className="text-xs text-gray-700 font-medium">Müşteri</div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-accent-600">7/24</div>
                      <div className="text-xs text-gray-700 font-medium">Hizmet</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Button Below Image */}
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Link href="/hakkimizda" className="btn-primary text-center">
                  Hakkımızda
                </Link>
                <Link href="/hizmetler" className="btn-secondary text-center">
                  Hizmetlerimiz
                </Link>
              </div>
            </div>

            {/* Right - Article/Content */}
            <div>
              <div className="inline-block bg-accent-100 text-accent-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Adana'nın Güvenilir Nakliyat Firması
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Profesyonel Nakliyat Hizmetleri ile Taşınmanın Keyfi
              </h2>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Baraj Nakliyat olarak 15 yılı aşkın süredir Adana'da evden eve nakliyat ve taşımacılık hizmetleri sunuyoruz. <strong>Ev taşıma</strong> sürecinizi en kolay ve güvenli hale getirmek için profesyonel ekibimiz ve modern araç filomuzla her zaman yanınızdayız.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Evden eve nakliyat fiyatları</strong> konusunda şeffaf ve uygun fiyat politikamız ile Çukurova bölgesinin en çok tercih edilen nakliyat firmasıyız. Her taşımada müşteri memnuniyetini ön planda tutarak, eşyalarınıza kendi eşyamız gibi özen gösteriyoruz.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent-100 rounded-full p-2 flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Sigortalı Taşımacılık</h3>
                    <p className="text-gray-600">Tüm eşyalarınız tam kapsamlı sigorta güvencesi altında</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent-100 rounded-full p-2 flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Profesyonel Ekip</h3>
                    <p className="text-gray-600">Deneyimli ve eğitimli personel kadromuz ile güvenli taşıma</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent-100 rounded-full p-2 flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Uygun Fiyatlar</h3>
                    <p className="text-gray-600">Kaliteden ödün vermeden ekonomik nakliyat çözümleri</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded">
                <p className="text-gray-700">
                  <strong>💡 Ücretsiz Keşif:</strong> Evinizdeki eşyaları görerek size en uygun <strong>ev taşıma fiyatları</strong>nı sunuyoruz. Şeffaf fiyatlandırma ve gizli maliyet yok!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Nakliyat Hizmetlerimiz</h2>
            <p className="section-subtitle">
              Ev taşıma, ofis nakliyat ve taşımacılık hizmetlerinde profesyonel çözümler sunuyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Link
                  key={index}
                  href={service.link}
                  className="bg-white rounded-xl p-8 shadow-lg card-hover group"
                >
                  <div className="bg-gradient-to-br from-primary-500 to-accent-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="text-3xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-accent-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Areas / Bölgelerimiz */}
      <section id="bolge" className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Hizmet Verdiğimiz Bölgeler</h2>
            <p className="section-subtitle">
              Adana'nın tüm ilçelerinde profesyonel nakliyat hizmetleri
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Seyhan', slug: 'seyhan-nakliyat', icon: '🏙️' },
              { name: 'Çukurova', slug: 'cukurova-nakliyat', icon: '🏢' },
              { name: 'Yüreğir', slug: 'yuregir-nakliyat', icon: '🏘️' },
              { name: 'Sarıçam', slug: 'saricam-nakliyat', icon: '🏗️' },
              { name: 'Kozan', slug: 'kozan-nakliyat', icon: '🏞️' },
              { name: 'Ceyhan', slug: 'ceyhan-nakliyat', icon: '🏭' },
              { name: 'Pozantı', slug: 'pozanti-nakliyat', icon: '⛰️' },
              { name: 'Karaisalı', slug: 'karaisali-nakliyat', icon: '🌾' },
              { name: 'Karataş', slug: 'karatas-nakliyat', icon: '🏖️' },
              { name: 'Tufanbeyli', slug: 'tufanbeyli-nakliyat', icon: '🌲' },
              { name: 'Saimbeyli', slug: 'saimbeyli-nakliyat', icon: '🏔️' },
            ].map((district, index) => (
              <Link
                key={index}
                href={`/bolge/${district.slug}`}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">{district.icon}</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-accent-600 transition-colors">
                    {district.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">Nakliyat Hizmetleri</p>
                  <div className="inline-flex items-center text-accent-600 text-sm font-semibold group-hover:gap-2 transition-all">
                    <span>Detaylı Bilgi</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 text-lg mb-6">
              <strong>Adana'nın tüm ilçelerinde</strong> evden eve nakliyat, asansörlü nakliyat ve kamyonet nakliye hizmetleri sunuyoruz.
            </p>
            <Link href="/iletisim" className="btn-primary inline-block">
              Tüm Bölgeler İçin İletişime Geçin
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Adana'da Güvenilir Evden Eve Nakliyat
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>Baraj Nakliyat</strong> olarak Adana'da <strong>ev taşıma</strong> ve <strong>nakliyat</strong> hizmetlerinde 15 yılı aşkın tecrübemizle yanınızdayız. <strong>Evden eve nakliyat süreci</strong>nde profesyonel yaklaşımımız ve modern araç filomuzla eşyalarınızı güvenle taşıyoruz.
                </p>
                <p>
                  <strong>Evden eve nakliyat fiyatları</strong> konusunda Adana'nın en uygun ve şeffaf fiyat politikasını sunuyoruz. <strong>Ev taşıma fiyatları</strong>mız kalite ve güvenlik standartlarından ödün vermeden belirlenmektedir.
                </p>
                <p>
                  <strong>Taşımacılık</strong> sektöründe edindiğimiz deneyim ve müşteri memnuniyeti odaklı hizmet anlayışımızla her zaman yanınızdayız. Çukurova bölgesinde ve Adana'nın tüm ilçelerinde hizmet vermekteyiz.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/teklif-al" className="btn-primary">
                  Ücretsiz Teklif Al
                </Link>
                <Link href="/hakkimizda" className="btn-secondary">
                  Hakkımızda
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg card-hover">
                    <div className="bg-accent-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <Icon className="text-2xl text-accent-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Neden Baraj Nakliyat?</h2>
            <p className="text-xl text-gray-200">
              Evden eve nakliyat sürecinizde size en iyi hizmeti sunmak için çalışıyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <FaCheckCircle className="text-4xl text-accent-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4">15+ Yıl Tecrübe</h3>
              <p className="text-gray-200">
                Nakliyat sektöründe 15 yılı aşkın tecrübemizle profesyonel hizmet
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <FaUsers className="text-4xl text-accent-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4">5000+ Mutlu Müşteri</h3>
              <p className="text-gray-200">
                Binlerce müşterimizin güvenini kazanmış profesyonel ekip
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <FaShieldAlt className="text-4xl text-accent-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4">%100 Sigortalı</h3>
              <p className="text-gray-200">
                Tüm eşyalarınız tam kapsamlı sigorta güvencesi altında
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Müşterilerimiz Ne Diyor?</h2>
            <p className="section-subtitle">
              Ev taşıma hizmetimizden faydalanan müşterilerimizin görüşleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg card-hover">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xl" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <div className="bg-gradient-to-br from-primary-500 to-accent-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">Müşteri</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Son Blog Yazıları</h2>
            <p className="section-subtitle">
              Taşınma, nakliyat ve ev taşıma hakkında faydalı bilgiler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Taşınma İpuçları: Stressiz Ev Taşıma Rehberi',
                excerpt: 'Ev taşıma sürecinizi kolaylaştıracak pratik ipuçları ve püf noktaları. Nasıl organize olmalı, nelere dikkat etmelisiniz?',
                image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=800',
                category: 'Taşınma Rehberi',
                date: '5 Aralık 2024',
                slug: '/blog/tasinma-ipuclari',
              },
              {
                title: 'Evden Eve Nakliyat Fiyatları Nasıl Belirlenir?',
                excerpt: 'Nakliyat fiyatlarını etkileyen faktörler nelerdir? Mesafe, eşya miktarı, kat sayısı ve diğer etkenler hakkında bilgiler.',
                image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=800',
                category: 'Fiyatlandırma',
                date: '3 Aralık 2024',
                slug: '/blog',
              },
              {
                title: 'Asansörlü Nakliyatın Avantajları',
                excerpt: 'Yüksek katlı binalardan taşınırken asansörlü nakliyat neden tercih edilmeli? Zaman ve maliyet tasarrufu hakkında.',
                image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800',
                category: 'Hizmetler',
                date: '1 Aralık 2024',
                slug: '/blog',
              },
            ].map((post, index) => (
              <Link
                key={index}
                href={post.slug}
                className="bg-white rounded-xl shadow-lg overflow-hidden group card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">📅 {post.date}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-accent-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center text-accent-600 font-semibold group-hover:gap-2 transition-all">
                    <span>Devamını Oku</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog" className="btn-secondary inline-block">
              Tüm Blog Yazılarını Gör
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-500 to-accent-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Hemen Ücretsiz Teklif Alın!
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Evden eve nakliyat fiyatları için hemen bizi arayın veya online teklif formumuzu doldurun
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/teklif-al" className="bg-white hover:bg-gray-100 text-accent-600 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Online Teklif Al
            </Link>
            <a href="tel:05374092406" className="bg-primary-700 hover:bg-primary-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              0537 409 24 06
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
