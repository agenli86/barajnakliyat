import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import BlogSidebar from '@/components/BlogSidebar'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ofis Taşımacılığı Nasıl Yapılır? | Baraj Nakliyat Blog',
  description: 'Ofis taşımacılığı sürecini baştan sona anlatan rehber. Kurumsal nakliyat ipuçları ve profesyonel ofis taşıma yöntemleri.',
  keywords: 'ofis taşımacılığı, kurumsal taşıma, ofis nakliyat, işyeri taşıma',
  alternates: { canonical: 'https://barajnakliyat.com/blog/ofis-tasimaciligi' },
  openGraph: { title: 'Ofis Taşımacılığı Rehberi', url: 'https://barajnakliyat.com/blog/ofis-tasimaciligi', siteName: 'Baraj Nakliyat', type: 'article' },
}

export default function OfisTasimaciligiPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Ofis Taşımacılığı' }]} title="Ofis Taşımacılığı" />
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070" alt="Ofis Taşımacılığı" className="w-full h-96 object-cover" />
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="bg-accent-100 text-accent-600 px-4 py-2 rounded-full text-sm font-semibold">Ofis Taşıma</span>
                    <span className="text-gray-500">📅 2 Aralık 2024</span>
                  </div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-6">Ofis Taşımacılığı: Baştan Sona Rehber</h1>
                  <div className="prose prose-lg max-w-none">
                    <p className="lead"><strong>Ofis taşımacılığı</strong> özel bir planlama ve organizasyon gerektirir. Bu rehberde kurumsal taşıma sürecinin tüm detaylarını anlatıyoruz.</p>

                    <h2>Ofis Taşıma Planlama</h2>
                    <p>Başarılı bir <strong>ofis taşıma</strong> süreci için detaylı planlama şarttır:</p>
                    <ul>
                      <li>Taşıma tarihini en az 2 ay önceden belirleyin</li>
                      <li>Taşıma komitesi oluşturun</li>
                      <li><Link href="/hizmetler/ofis-tasima" className="text-accent-600 hover:underline">Profesyonel ofis taşıma</Link> firması seçin</li>
                      <li>Çalışanları bilgilendirin</li>
                    </ul>

                    <h2>Paketleme ve Organizasyon</h2>
                    <p><strong>Kurumsal nakliyat</strong> sürecinde paketleme çok önemlidir:</p>
                    <ul>
                      <li>Her departmanı ayrı paketleyin</li>
                      <li>IT ekipmanları özenle paketleyin</li>
                      <li>Dosya ve arşivleri kategorize edin</li>
                      <li>Hassas belgeleri ayrı taşıyın</li>
                    </ul>

                    <p className="bg-primary-50 border-l-4 border-primary-500 p-6 my-8">
                      <strong>💡 İpucu:</strong> <Link href="/hizmetler/sigortali-tasima" className="text-accent-600 hover:underline">Sigortalı taşımacılık</Link> ile tüm ofis ekipmanlarınız güvence altında olur.
                    </p>

                    <h2>Taşıma Günü</h2>
                    <ul>
                      <li>Hafta sonu veya mesai dışı tercih edin</li>
                      <li>IT ekiplerini hazır bulundurun</li>
                      <li>Yeni ofiste yerleşim planını hazırlayın</li>
                      <li>İletişim sistemlerini test edin</li>
                    </ul>

                    <h2>Bölgesel Ofis Taşıma</h2>
                    <p>Adana'da ofis taşımacılığı hizmetleri:</p>
                    <ul>
                      <li><Link href="/bolge/seyhan-nakliyat" className="text-accent-600 hover:underline">Seyhan</Link> bölgesinde kurumsal taşıma</li>
                      <li><Link href="/bolge/cukurova-nakliyat" className="text-accent-600 hover:underline">Çukurova</Link> işletme merkezleri</li>
                      <li><Link href="/hizmetler/sehir-ici-nakliyat" className="text-accent-600 hover:underline">Şehir içi nakliyat</Link> hizmetleri</li>
                    </ul>

                    <h2>Sonuç</h2>
                    <p><strong>Ofis taşımacılığı</strong> profesyonel bir ekip ile sorunsuz yapılabilir. <Link href="/teklif-al" className="text-accent-600 hover:underline">Teklif almak</Link> için iletişime geçin.</p>
                  </div>
                </div>
              </article>
              <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({'@context':'https://schema.org','@type':'Article',headline:'Ofis Taşımacılığı Rehberi',datePublished:'2024-12-02'})}} />
            </div>
            <div className="lg:col-span-1"><BlogSidebar /></div>
          </div>
        </div>
      </section>
    </>
  )
}
