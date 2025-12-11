'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import Link from 'next/link'
import { FaTruck, FaHome, FaBoxes, FaPhone } from 'react-icons/fa'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const slides = [
  {
   id: 1,
    title: 'Güvenilir Ev Taşıma Hizmetleri',
    subtitle: 'Eşyalarınız Bizimle Güvende',
    description: 'Profesyonel ekibimiz ve modern araç filomuz ile evden eve nakliyat hizmetlerinde yanınızdayız.',
    icon: FaHome,
    image: '/resimler/nakliyatadana.png', // 👈 BU SATIR DEĞİŞTİ
  },
  {
    id: 2,
    title: 'Asansörlü Taşımacılık',
    subtitle: 'Hızlı ve Güvenli Çözümler',
    description: 'Yüksek katlı binalarda asansörlü taşımacılık hizmetimizle eşyalarınızı güvenle taşıyoruz.',
    icon: FaTruck,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
  },
  {
    id: 3,
    title: 'Uygun Fiyatlarla Nakliyat',
    subtitle: 'Kalite ve Ekonomik Fiyat',
    description: 'Adana\'nın en uygun nakliyat fiyatları ile taşınma sürecinizi kolaylaştırıyoruz.',
    icon: FaBoxes,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053',
  },
]

export default function HeroSlider() {
  return (
    <section className="relative h-[600px] md:h-[700px]">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-accent-500',
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => {
          const Icon = slide.icon
          return (
            <SwiperSlide key={slide.id}>
              <div className="relative h-full">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/90 to-primary-700/85"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex items-center">
                  <div className="container-custom">
                    <div className="max-w-3xl text-white">
                      <div className="flex items-center space-x-3 mb-4 animate-slideInLeft">
                        <div className="bg-accent-500 p-4 rounded-full">
                          <Icon className="text-3xl" />
                        </div>
                        <span className="text-accent-300 font-semibold text-lg">
                          {slide.subtitle}
                        </span>
                      </div>
                      
                      <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp leading-tight">
                        {slide.title}
                      </h2>
                      
                      <p className="text-lg md:text-xl mb-8 text-gray-200 animate-fadeInUp">
                        {slide.description}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp">
                        <Link href="/teklif-al" className="btn-primary text-center">
                          Ücretsiz Teklif Al
                        </Link>
                        <a
                          href="tel:05374092406"
                          className="bg-white hover:bg-gray-100 text-primary-700 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                        >
                          <FaPhone className="mr-2" />
                          Hemen Ara
                        </a>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-6 mt-12 animate-fadeInUp">
                        <div className="text-center border-l-2 border-accent-500 pl-4">
                          <div className="text-3xl md:text-4xl font-bold text-accent-400">15+</div>
                          <div className="text-sm text-gray-300 mt-1">Yıl Tecrübe</div>
                        </div>
                        <div className="text-center border-l-2 border-accent-500 pl-4">
                          <div className="text-3xl md:text-4xl font-bold text-accent-400">5000+</div>
                          <div className="text-sm text-gray-300 mt-1">Mutlu Müşteri</div>
                        </div>
                        <div className="text-center border-l-2 border-accent-500 pl-4">
                          <div className="text-3xl md:text-4xl font-bold text-accent-400">7/24</div>
                          <div className="text-sm text-gray-300 mt-1">Hizmet</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>

      {/* Custom Pagination Styles */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 30px !important;
        }
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          width: 40px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  )
}
