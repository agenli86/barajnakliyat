'use client'

import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import ServiceSidebar from '@/components/ServiceSidebar'
import Link from 'next/link'
import { useState } from 'react'

export default function AsansorluTasimacilikPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Asansörlü taşımacılık hangi katlara kadar hizmet verir?',
      answer: 'Sistemimiz 15 kata kadar olan binalarda güvenli ve sorunsuz hizmet vermektedir. Modern ekipmanlarımız ile yüksek katlardaki eşyalarınızı hızlı ve güvenli bir şekilde taşıyoruz.',
    },
    {
      question: 'Asansörlü taşıma ek ücrete tabi mi?',
      answer: 'Asansörlü taşıma, standart nakliyat fiyatlarımıza ek bir maliyet olarak belirlenir. Ancak zaman ve işçilik tasarrufu sağladığı için genellikle daha ekonomiktir. Ücretsiz keşif hizmetimizle size özel fiyat teklifi sunuyoruz.',
    },
    {
      question: 'Hangi eşyalar asansörle taşınabilir?',
      answer: 'Beyaz eşya, mobilya, piyano, kasa, dolap gibi neredeyse tüm ev eşyaları asansörlü sistemimizle taşınabilir. Ağır ve hacimli eşyalarınız için ideal bir çözümdür.',
    },
    {
      question: 'Asansörlü taşıma güvenli mi?',
      answer: 'Evet, sistemimiz tüm güvenlik standartlarına uygun olarak tasarlanmıştır ve deneyimli ekibimiz tarafından kullanılmaktadır. Eşyalarınız sigorta güvencesi altında taşınır.',
    },
    {
      question: 'Kurulum ne kadar sürer?',
      answer: 'Asansör sistemimizin kurulumu ortalama 15-30 dakika sürmektedir. Hızlı montaj ve demontaj özelliği sayesinde taşıma süreniz kısalır.',
    },
  ]

  const galleryImages = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=500',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=500',
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=500',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=500',
  ]

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Hizmetler', href: '/hizmetler' },
          { label: 'Asansörlü Taşımacılık' },
        ]}
        title="Asansörlü Taşımacılık"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Featured Image */}
                <img
                  
    src="/resimler/nakliyatadana.png"  // 👈 BU SATIR DEĞİŞTİ
    alt="Asansörlü Taşımacılık"
    className="w-full h-96 object-cover"
/>
              

                <div className="p-8 lg:p-12">
                  {/* Content */}
                  <div className="prose prose-lg max-w-none">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                      Yüksek Katlı Binalardan Güvenli ve Hızlı Taşıma
                    </h2>

                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      <strong>Asansörlü taşımacılık</strong> hizmeti, yüksek katlı apartman ve binalarda yaşayanlar için özel olarak geliştirilmiş modern bir taşıma çözümüdür. Geleneksel merdiven taşımacılığının zorluklarını ortadan kaldıran bu sistem, eşyalarınızı hem daha hızlı hem de daha güvenli bir şekilde taşımanızı sağlar.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                      Asansörlü Taşımacılık Nedir?
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Baraj Nakliyat olarak, son teknoloji asansörlü taşıma sistemimiz ile Adana'da hizmet vermekteyiz. 15 kata kadar olan binalarda, eşyalarınızı dış cepheden güvenli bir şekilde indirip veya çıkarıp araçlarımıza yükleyebiliyoruz.
                    </p>

                    <p className="text-gray-700 mb-6">
                      Özellikle dar merdivenli, asansörsüz veya asansörü küçük olan binalarda bu hizmet büyük kolaylık sağlamaktadır. Profesyonel ekibimiz, tüm güvenlik önlemlerini alarak taşıma işlemini gerçekleştirir.
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                      Avantajları
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6 ml-4">
                      <li><strong>Hız:</strong> Geleneksel merdiven taşımacılığına göre %70 daha hızlı</li>
                      <li><strong>Güvenlik:</strong> Eşyalarınız dış etkenlere karşı korunur</li>
                      <li><strong>Ekonomi:</strong> Zaman ve işçilik tasarrufu sağlar</li>
                      <li><strong>Koruma:</strong> Dar merdivenlerde eşya hasarı riski olmaz</li>
                      <li><strong>Konfor:</strong> Bina sakinleri ve komşular rahatsız olmaz</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                      Hangi Eşyalar İçin Uygundur?
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Asansörlü taşımacılık sistemi ile şu eşyalarınızı güvenle taşıyabilirsiniz:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4">
                      <li>Buzdolabı, çamaşır makinesi gibi beyaz eşyalar</li>
                      <li>Koltuk takımları ve büyük mobilyalar</li>
                      <li>Dolap, gardrop, yatak gibi hacimli eşyalar</li>
                      <li>Piyano ve müzik aletleri</li>
                      <li>Kasa ve ağır eşyalar</li>
                      <li>Ofis mobilyaları ve ekipmanları</li>
                    </ul>

                    <div className="bg-accent-50 border-l-4 border-accent-500 p-6 my-8">
                      <h4 className="font-bold text-gray-900 mb-2">💡 Önemli Bilgi</h4>
                      <p className="text-gray-700">
                        15 yıllık tecrübemizle asansörlü taşımacılıkta uzmanlaştık. Tüm ekipmanlarımız düzenli bakımlıdır ve güvenlik sertifikalarına sahiptir. Eşyalarınız %100 sigorta güvencesi altında taşınır.
                      </p>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                      Çalışma Sistemimiz
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Asansörlü taşımacılık hizmetimiz şu adımlardan oluşur:
                    </p>
                    <ol className="list-decimal list-inside text-gray-700 space-y-3 mb-6 ml-4">
                      <li><strong>Ücretsiz Keşif:</strong> Uzman ekibimiz mekanınızı inceleyerek en uygun taşıma planını oluşturur</li>
                      <li><strong>Kurulum:</strong> Asansör sistemi 15-30 dakikada güvenli şekilde kurulur</li>
                      <li><strong>Taşıma:</strong> Eşyalarınız profesyonel şekilde paketlenip asansörle taşınır</li>
                      <li><strong>Teslimat:</strong> Yeni adresinize güvenli şekilde yerleştirilir</li>
                    </ol>
                  </div>

                  {/* FAQ Accordion */}
                  <div className="mt-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Sıkça Sorulan Sorular
                    </h3>
                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                          <button
                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                            className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                          >
                            <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
                            <svg
                              className={`w-6 h-6 text-accent-500 transform transition-transform flex-shrink-0 ${
                                openFaq === index ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          {openFaq === index && (
                            <div className="px-6 pb-6 bg-gray-50">
                              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Gallery */}
                  <div className="mt-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Çalışmalarımızdan Kareler
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {galleryImages.map((image, index) => (
                        <div key={index} className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow group">
                          <img
                            src={image}
                            alt={`Asansörlü Taşımacılık ${index + 1}`}
                            className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>

              {/* CTA */}
              <div className="mt-8 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Hemen Teklif Alın!</h3>
                <p className="mb-6">
                  Asansörlü taşımacılık hizmetimiz için ücretsiz keşif ve fiyat teklifi
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/teklif-al" className="bg-white hover:bg-gray-100 text-accent-600 font-bold py-3 px-8 rounded-lg transition-colors">
                    Teklif Formu
                  </Link>
                  <a href="tel:05374092406" className="bg-primary-700 hover:bg-primary-800 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                    Hemen Ara
                  </a>
                </div>
              </div>
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
