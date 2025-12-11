import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import ServiceSidebar from '@/components/ServiceSidebar'
import Link from 'next/link'
import { FaPhone } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Kamyonet Nakliye - Ekonomik Parça Eşya Taşıma | Baraj Nakliyat',
  description: 'Kamyonet nakliye hizmetleri. Küçük ev, öğrenci evi ve parça eşya taşıma. Ekonomik fiyatlarla aynı gün teslimat.',
  keywords: 'kamyonet nakliye, parça eşya taşıma, küçük nakliyat, öğrenci taşıma',
  alternates: { canonical: 'https://barajnakliyat.com/hizmetler/kamyonet-nakliye' },
  openGraph: { title: 'Kamyonet Nakliye', url: 'https://barajnakliyat.com/hizmetler/kamyonet-nakliye', siteName: 'Baraj Nakliyat', locale: 'tr_TR', type: 'website' },
}

export default function KamyonetNakliyePage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Hizmetler', href: '/hizmetler' }, { label: 'Kamyonet Nakliye' }]} title="Kamyonet Nakliye" />
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1464207687429-7505649dae38?q=80&w=2070" alt="Kamyonet Nakliye" className="w-full h-96 object-cover" />
                <div className="p-8 lg:p-12">
                  <h1 className="text-4xl font-bold mb-6">Kamyonet Nakliye Hizmetleri</h1>
                  <p className="text-lg mb-6"><strong>Kamyonet nakliye</strong> ile ekonomik parça eşya taşıma. Öğrenci evleri, küçük daireler ve az eşya taşıma ihtiyaçlarınız için ideal.</p>
                  <h2 className="text-2xl font-bold mt-8 mb-4">Kamyonet Nakliye Avantajları</h2>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span><strong>Ekonomik:</strong> Sadece ihtiyacınız kadar araç kirala</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span><strong>Hızlı:</strong> Aynı gün teslimat imkanı</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span><strong>Esnek:</strong> Farklı kamyonet boyut seçenekleri</span>
                    </li>
                  </ul>
                  <p className="mb-6">Adana'nın tüm bölgelerinde <Link href="/hizmetler/sehir-ici-nakliyat" className="text-accent-600 hover:underline">şehir içi nakliyat</Link> olarak kamyonet hizmeti.</p>
                </div>
              </article>
              <div className="mt-8 bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Kamyonet Nakliye İçin Arayın!</h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:05374092406" className="flex items-center justify-center space-x-2 bg-white text-accent-600 font-bold py-3 px-8 rounded-lg"><FaPhone /><span>0537 409 24 06</span></a>
                  <Link href="/teklif-al" className="bg-primary-800 text-white font-bold py-3 px-8 rounded-lg">Teklif Al</Link>
                </div>
              </div>
              <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({'@context':'https://schema.org','@type':'Service',name:'Kamyonet Nakliye',provider:{'@type':'MovingCompany',name:'Baraj Nakliyat',telephone:'+905374092406'}})}} />
            </div>
            <div className="lg:col-span-1"><ServiceSidebar /></div>
          </div>
        </div>
      </section>
    </>
  )
}
