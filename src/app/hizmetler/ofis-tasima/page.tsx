import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import ServiceSidebar from '@/components/ServiceSidebar'
import Link from 'next/link'
import { FaPhone } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Ofis Taşıma - Kurumsal Nakliyat Hizmetleri | Baraj Nakliyat',
  description: 'Ofis taşıma ve kurumsal nakliyat hizmetleri. Dosya, arşiv, mobilya ve ekipman taşıma. Minimal iş kaybı ile profesyonel ofis taşımacılığı.',
  keywords: 'ofis taşıma, kurumsal nakliyat, ofis nakliyat, işyeri taşıma, dosya taşıma',
  alternates: { canonical: 'https://barajnakliyat.com/hizmetler/ofis-tasima' },
  openGraph: { title: 'Ofis Taşıma Hizmetleri', url: 'https://barajnakliyat.com/hizmetler/ofis-tasima', siteName: 'Baraj Nakliyat', locale: 'tr_TR', type: 'website' },
}

export default function OfisTasimaPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Hizmetler', href: '/hizmetler' }, { label: 'Ofis Taşıma' }]} title="Ofis Taşıma" />
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070" alt="Ofis Taşıma" className="w-full h-96 object-cover" />
                <div className="p-8 lg:p-12">
                  <h1 className="text-4xl font-bold mb-6">Profesyonel Ofis Taşıma Hizmetleri</h1>
                  <p className="text-lg mb-6"><strong>Ofis taşıma</strong> hizmeti ile işyerinizi minimum aksama ile yeni adresinize taşıyoruz. Dosya, arşiv, mobilya ve tüm ekipmanlarınız güvenle taşınır.</p>
                  <h2 className="text-2xl font-bold mt-8 mb-4">Kurumsal Nakliyat Özellikleri</h2>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span><strong>Planlı Taşıma:</strong> İş akışınızı aksatmadan hafta sonu taşıma</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span><strong>Özel Paketleme:</strong> Dosya, arşiv ve hassas ekipmanlar için</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-accent-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span><strong>Yerleştirme:</strong> Yeni ofiste düzenleme ve kurulum</span>
                    </li>
                  </ul>
                  <p className="mb-6"><Link href="/bolge/seyhan-nakliyat" className="text-accent-600 hover:underline">Seyhan</Link>, <Link href="/bolge/cukurova-nakliyat" className="text-accent-600 hover:underline">Çukurova</Link> ve Adana'nın tüm bölgelerinde ofis taşıma hizmeti.</p>
                </div>
              </article>
              <div className="mt-8 bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Ofis Taşıma İçin Arayın!</h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:05374092406" className="flex items-center justify-center space-x-2 bg-white text-accent-600 font-bold py-3 px-8 rounded-lg"><FaPhone /><span>0537 409 24 06</span></a>
                  <Link href="/teklif-al" className="bg-primary-800 text-white font-bold py-3 px-8 rounded-lg">Teklif Al</Link>
                </div>
              </div>
              <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({'@context':'https://schema.org','@type':'Service',name:'Ofis Taşıma',provider:{'@type':'MovingCompany',name:'Baraj Nakliyat',telephone:'+905374092406'}})}} />
            </div>
            <div className="lg:col-span-1"><ServiceSidebar /></div>
          </div>
        </div>
      </section>
    </>
  )
}
