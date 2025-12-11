import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import ServiceSidebar from '@/components/ServiceSidebar'
import Link from 'next/link'
import { FaPhone } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Şehirler Arası Nakliyat - Uzun Mesafe Taşımacılık | Baraj Nakliyat',
  description: 'Şehirler arası nakliyat hizmetleri. Adanadan tüm Türkiyeye güvenli taşımacılık. Sigortalı, profesyonel uzun mesafe nakliyat.',
  keywords: 'şehirler arası nakliyat, uzun mesafe taşıma, adana istanbul nakliyat, adana ankara nakliyat',
  alternates: { canonical: 'https://barajnakliyat.com/hizmetler/sehirler-arasi-nakliyat' },
  openGraph: { title: 'Şehirler Arası Nakliyat', url: 'https://barajnakliyat.com/hizmetler/sehirler-arasi-nakliyat', siteName: 'Baraj Nakliyat', locale: 'tr_TR', type: 'website' },
}

export default function SehirlerArasiPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Hizmetler', href: '/hizmetler' }, { label: 'Şehirler Arası Nakliyat' }]} title="Şehirler Arası Nakliyat" />
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070" alt="Şehirler Arası" className="w-full h-96 object-cover" />
                <div className="p-8 lg:p-12">
                  <h1 className="text-4xl font-bold mb-6">Şehirler Arası Nakliyat Hizmetleri</h1>
                  <p className="text-lg mb-6"><strong>Şehirler arası nakliyat</strong> ile Adana'dan tüm Türkiye'ye güvenli taşımacılık. İstanbul, Ankara, İzmir ve tüm illere profesyonel hizmet.</p>
                  <h2 className="text-2xl font-bold mt-8 mb-4">Uzun Mesafe Nakliyat Avantajları</h2>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span><strong>Tam Sigorta:</strong> Uzun yolda eşyalarınız tam güvencede</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span><strong>Deneyimli Şoförler:</strong> Türkiye turlarında uzman ekip</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span><strong>Takip Sistemi:</strong> Eşyalarınızın konumunu anlık izleyin</span>
                    </li>
                  </ul>
                  <p className="mb-6">Adana'dan İstanbul'a, Ankara'ya, İzmir'e ve Türkiye'nin her yerine <Link href="/hizmetler/sigortali-tasima" className="text-accent-600 hover:underline">sigortalı taşımacılık</Link> hizmeti veriyoruz.</p>
                </div>
              </article>
              <div className="mt-8 bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Şehirler Arası Nakliyat İçin Arayın!</h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:05374092406" className="flex items-center justify-center space-x-2 bg-white text-accent-600 font-bold py-3 px-8 rounded-lg"><FaPhone /><span>0537 409 24 06</span></a>
                  <Link href="/teklif-al" className="bg-primary-800 text-white font-bold py-3 px-8 rounded-lg">Teklif Al</Link>
                </div>
              </div>
              <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({'@context':'https://schema.org','@type':'Service',name:'Şehirler Arası Nakliyat',provider:{'@type':'MovingCompany',name:'Baraj Nakliyat',telephone:'+905374092406'}})}} />
            </div>
            <div className="lg:col-span-1"><ServiceSidebar /></div>
          </div>
        </div>
      </section>
    </>
  )
}
