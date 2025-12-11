import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import ServiceSidebar from '@/components/ServiceSidebar'
import Link from 'next/link'
import { FaTruck, FaHome, FaBoxes, FaPhone } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Ceyhan Nakliyat - Evden Eve Nakliyat | Baraj Nakliyat',
  description: 'Ceyhan nakliyat, evden eve nakliyat, asansörlü nakliyat ve kamyonet nakliye. Hamidiye, Karaduvar bölgelerinde güvenilir taşımacılık.',
  keywords: 'ceyhan nakliyat, ceyhan evden eve nakliyat, ceyhan asansörlü nakliyat, ceyhan kamyonet nakliye',
  alternates: { canonical: 'https://barajnakliyat.com/bolge/ceyhan-nakliyat' },
  openGraph: { title: 'Ceyhan Nakliyat', description: 'Ceyhan bölgesinde profesyonel nakliyat', url: 'https://barajnakliyat.com/bolge/ceyhan-nakliyat', siteName: 'Baraj Nakliyat', locale: 'tr_TR', type: 'website' },
}

export default function CeyhanNakliyatPage() {
  const neighborhoods = ['Hamidiye', 'Karaduvar', 'Büyük Mağara', 'Küçük Mağara', 'Merkez']
  return (
    <>
      <Breadcrumb items={[{ label: 'Bölgelerimiz', href: '/#bolge' }, { label: 'Ceyhan Nakliyat' }]} title="Ceyhan Nakliyat" />
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <article className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Ceyhan Nakliyat Hizmetleri</h1>
                <p className="text-gray-700 text-lg mb-6"><strong>Ceyhan nakliyat</strong> hizmetleri ile endüstri ve konut taşımacılığında uzman ekip.</p>
                <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-lg mb-8">
                  <h3 className="font-bold text-gray-900 mb-2">📍 Hizmet Verdiğimiz Mahalleler</h3>
                  <div className="flex flex-wrap gap-2">{neighborhoods.map((n,i) => <span key={i} className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">{n}</span>)}</div>
                </div>
                <div className="mb-16">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-3 rounded-lg"><FaHome className="text-2xl text-white" /></div>
                    <h2 className="text-3xl font-bold text-gray-900">Ceyhan Evden Eve Nakliyat</h2>
                  </div>
                  <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200" alt="Ceyhan Evden Eve" className="w-full h-64 object-cover rounded-xl mb-6" />
                  <p className="text-gray-700 mb-6"><strong>Ceyhan evden eve nakliyat</strong> ile Ceyhan'ın tüm mahallelerinde güvenli taşıma.</p>
                </div>
                <hr className="my-12" />
                <div className="mb-16">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-3 rounded-lg"><FaTruck className="text-2xl text-white" /></div>
                    <h2 className="text-3xl font-bold text-gray-900">Ceyhan Asansörlü Nakliyat</h2>
                  </div>
                  <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200" alt="Ceyhan Asansörlü" className="w-full h-64 object-cover rounded-xl mb-6" />
                  <p className="text-gray-700"><strong>Ceyhan asansörlü nakliyat</strong> ile hızlı ve güvenli taşıma hizmeti.</p>
                </div>
                <hr className="my-12" />
                <div className="mb-12">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-3 rounded-lg"><FaBoxes className="text-2xl text-white" /></div>
                    <h2 className="text-3xl font-bold text-gray-900">Ceyhan Kamyonet Nakliye</h2>
                  </div>
                  <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200" alt="Ceyhan Kamyonet" className="w-full h-64 object-cover rounded-xl mb-6" />
                  <p className="text-gray-700"><strong>Ceyhan kamyonet nakliye</strong> ile ekonomik küçük yük taşıma.</p>
                </div>
                <div className="mt-12 bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Ceyhan Nakliyat İçin Arayın!</h3>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="tel:05374092406" className="flex items-center justify-center space-x-2 bg-white hover:bg-gray-100 text-accent-600 font-bold py-3 px-8 rounded-lg"><FaPhone /><span>0537 409 24 06</span></a>
                    <Link href="/teklif-al" className="bg-primary-800 text-white font-bold py-3 px-8 rounded-lg text-center">Teklif Al</Link>
                  </div>
                </div>
              </article>
              <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({'@context':'https://schema.org','@type':'Service',name:'Ceyhan Nakliyat',provider:{'@type':'MovingCompany',name:'Baraj Nakliyat',telephone:'+905374092406'},areaServed:{'@type':'City',name:'Ceyhan, Adana'}})}} />
            </div>
            <div className="lg:col-span-1"><ServiceSidebar /></div>
          </div>
        </div>
      </section>
    </>
  )
}
