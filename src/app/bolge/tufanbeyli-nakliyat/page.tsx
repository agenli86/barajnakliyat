import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import ServiceSidebar from '@/components/ServiceSidebar'
import Link from 'next/link'
import { FaTruck, FaHome, FaBoxes, FaPhone } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Tufanbeyli Nakliyat - Evden Eve Nakliyat | Baraj Nakliyat',
  description: 'Tufanbeyli nakliyat, evden eve nakliyat, asansörlü nakliyat ve kamyonet nakliye. Merkez, Çukurhüyük bölgelerinde güvenilir taşımacılık.',
  keywords: 'tufanbeyli nakliyat, tufanbeyli evden eve nakliyat, tufanbeyli asansörlü nakliyat, tufanbeyli kamyonet nakliye',
  alternates: { canonical: 'https://barajnakliyat.com/bolge/tufanbeyli-nakliyat' },
  openGraph: { title: 'Tufanbeyli Nakliyat', description: 'Tufanbeyli bölgesinde profesyonel nakliyat', url: 'https://barajnakliyat.com/bolge/tufanbeyli-nakliyat', siteName: 'Baraj Nakliyat', locale: 'tr_TR', type: 'website' },
}

export default function TufanbeyliNakliyatPage() {
  const neighborhoods = ['Merkez', 'Çukurhüyük', 'Sarıhamzalı', 'Taşoluk', 'Akpınar']
  return (
    <>
      <Breadcrumb items={[{ label: 'Bölgelerimiz', href: '/#bolge' }, { label: 'Tufanbeyli Nakliyat' }]} title="Tufanbeyli Nakliyat" />
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <article className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Tufanbeyli Nakliyat Hizmetleri</h1>
                <p className="text-gray-700 text-lg mb-6"><strong>Tufanbeyli nakliyat</strong> hizmetleri ile güvenilir ve hızlı taşımacılık.</p>
                <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-lg mb-8">
                  <h3 className="font-bold text-gray-900 mb-2">📍 Hizmet Verdiğimiz Mahalleler</h3>
                  <div className="flex flex-wrap gap-2">{neighborhoods.map((n,i) => <span key={i} className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm">{n}</span>)}</div>
                </div>
                <div className="mb-16">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-3 rounded-lg"><FaHome className="text-2xl text-white" /></div>
                    <h2 className="text-3xl font-bold text-gray-900">Tufanbeyli Evden Eve Nakliyat</h2>
                  </div>
                  <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200" alt="Tufanbeyli Evden Eve" className="w-full h-64 object-cover rounded-xl mb-6" />
                  <p className="text-gray-700 mb-6"><strong>Tufanbeyli evden eve nakliyat</strong> ile profesyonel taşıma hizmeti.</p>
                </div>
                <hr className="my-12" />
                <div className="mb-16">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-3 rounded-lg"><FaTruck className="text-2xl text-white" /></div>
                    <h2 className="text-3xl font-bold text-gray-900">Tufanbeyli Asansörlü Nakliyat</h2>
                  </div>
                  <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200" alt="Tufanbeyli Asansörlü" className="w-full h-64 object-cover rounded-xl mb-6" />
                  <p className="text-gray-700"><strong>Tufanbeyli asansörlü nakliyat</strong> ile güvenli taşıma.</p>
                </div>
                <hr className="my-12" />
                <div className="mb-12">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-3 rounded-lg"><FaBoxes className="text-2xl text-white" /></div>
                    <h2 className="text-3xl font-bold text-gray-900">Tufanbeyli Kamyonet Nakliye</h2>
                  </div>
                  <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200" alt="Tufanbeyli Kamyonet" className="w-full h-64 object-cover rounded-xl mb-6" />
                  <p className="text-gray-700"><strong>Tufanbeyli kamyonet nakliye</strong> ile ekonomik çözümler.</p>
                </div>
                <div className="mt-12 bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Tufanbeyli Nakliyat İçin Arayın!</h3>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="tel:05374092406" className="flex items-center justify-center space-x-2 bg-white hover:bg-gray-100 text-accent-600 font-bold py-3 px-8 rounded-lg"><FaPhone /><span>0537 409 24 06</span></a>
                    <Link href="/teklif-al" className="bg-primary-800 text-white font-bold py-3 px-8 rounded-lg text-center">Teklif Al</Link>
                  </div>
                </div>
              </article>
              <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({'@context':'https://schema.org','@type':'Service',name:'Tufanbeyli Nakliyat',provider:{'@type':'MovingCompany',name:'Baraj Nakliyat',telephone:'+905374092406'},areaServed:{'@type':'City',name:'Tufanbeyli, Adana'}})}} />
            </div>
            <div className="lg:col-span-1"><ServiceSidebar /></div>
          </div>
        </div>
      </section>
    </>
  )
}
