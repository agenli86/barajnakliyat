import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import ServiceSidebar from '@/components/ServiceSidebar'
import FAQAccordion from '@/components/FAQAccordion'
import Link from 'next/link'
import { FaPhone } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Şehir İçi Nakliyat - Adana İçi Taşımacılık | Baraj Nakliyat',
  description: 'Adana şehir içi nakliyat hizmetleri. Aynı gün teslimat, ekonomik fiyatlar, güvenli taşımacılık. Tüm ilçelerde hızlı hizmet.',
  keywords: 'şehir içi nakliyat, adana içi taşıma, şehir içi taşımacılık, aynı gün nakliyat',
  alternates: { canonical: 'https://barajnakliyat.com/hizmetler/sehir-ici-nakliyat' },
  openGraph: {
    title: 'Şehir İçi Nakliyat | Baraj Nakliyat',
    description: 'Adana şehir içi nakliyat hizmetleri. Hızlı ve güvenli taşımacılık.',
    url: 'https://barajnakliyat.com/hizmetler/sehir-ici-nakliyat',
    siteName: 'Baraj Nakliyat',
    locale: 'tr_TR',
    type: 'website',
  },
}

export default function SehirIciNakliyatPage() {
  const faqs = [
    { question: 'Şehir içi nakliyat ne kadar sürer?', answer: 'Adana içinde mesafeye göre 2-4 saat arasında tamamlanır.' },
    { question: 'Aynı gün taşıma yapıyor musunuz?', answer: 'Evet, şehir içinde aynı gün teslimat hizmeti sunuyoruz.' },
    { question: 'Hangi ilçelerde hizmet veriyorsunuz?', answer: 'Seyhan, Çukurova, Yüreğir, Sarıçam ve tüm Adana ilçelerinde.' },
  ]

  return (
    <>
      <Breadcrumb items={[{ label: 'Hizmetler', href: '/hizmetler' }, { label: 'Şehir İçi Nakliyat' }]} title="Şehir İçi Nakliyat" />
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070" alt="Şehir İçi Nakliyat" className="w-full h-96 object-cover" />
                <div className="p-8 lg:p-12">
                  <h1 className="text-4xl font-bold text-gray-900 mb-6">Adana Şehir İçi Nakliyat Hizmetleri</h1>
                  <p className="text-gray-700 text-lg mb-6"><strong>Şehir içi nakliyat</strong> hizmetimiz ile Adana'nın tüm ilçeleri arasında hızlı ve güvenli taşımacılık. Aynı gün teslimat, ekonomik fiyatlar ve profesyonel ekip ile yanınızdayız.</p>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Şehir İçi Nakliyat Avantajları</h2>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-gray-700"><strong>Hızlı Teslimat:</strong> Şehir içinde aynı gün taşıma garantisi</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-gray-700"><strong>Ekonomik Fiyat:</strong> Kısa mesafe için uygun tarifeler</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-gray-700"><strong>Yerel Bilgi:</strong> Adana'yı çok iyi bilen deneyimli ekip</span>
                    </li>
                  </ul>

                  <p className="text-gray-700 mb-6">Seyhan'dan Çukurova'ya, Yüreğir'den Sarıçam'a tüm ilçeler arası taşımacılık hizmetleri. <Link href="/bolge/seyhan-nakliyat" className="text-accent-600 hover:underline">Seyhan nakliyat</Link>, <Link href="/bolge/cukurova-nakliyat" className="text-accent-600 hover:underline">Çukurova nakliyat</Link> gibi tüm bölgelerde hizmet vermekteyiz.</p>

                  <div className="mt-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Sıkça Sorulan Sorular</h3>
                    <FAQAccordion faqs={faqs} />
                  </div>
                </div>
              </article>
              
              <div className="mt-8 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Şehir İçi Nakliyat İçin Arayın!</h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:05374092406" className="flex items-center justify-center space-x-2 bg-white hover:bg-gray-100 text-accent-600 font-bold py-3 px-8 rounded-lg"><FaPhone /><span>0537 409 24 06</span></a>
                  <Link href="/teklif-al" className="bg-primary-700 hover:bg-primary-800 text-white font-bold py-3 px-8 rounded-lg">Teklif Al</Link>
                </div>
              </div>

              <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({'@context':'https://schema.org','@type':'Service',name:'Şehir İçi Nakliyat',provider:{'@type':'MovingCompany',name:'Baraj Nakliyat',telephone:'+905374092406'},areaServed:{'@type':'City',name:'Adana'},description:'Adana şehir içi nakliyat hizmetleri'})}} />
            </div>
            <div className="lg:col-span-1"><ServiceSidebar /></div>
          </div>
        </div>
      </section>
    </>
  )
}
