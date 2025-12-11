import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import BlogSidebar from '@/components/BlogSidebar'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Asansörlü Taşımacılık Avantajları | Baraj Nakliyat',
  description: 'Asansörlü taşımacılık nedir, avantajları nelerdir? Yüksek katlarda güvenli ve hızlı nakliyat hakkında bilmeniz gerekenler.',
  keywords: 'asansörlü taşımacılık, asansörlü nakliyat, dış cephe asansörü',
  alternates: { canonical: 'https://barajnakliyat.com/blog/asansorlu-tasimacilik-avantajlari' },
  openGraph: { title: 'Asansörlü Taşımacılık Avantajları', url: 'https://barajnakliyat.com/blog/asansorlu-tasimacilik-avantajlari', siteName: 'Baraj Nakliyat', type: 'article' },
}

export default function AsansorluTasimacilikPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Asansörlü Taşımacılık' }]} title="Asansörlü Taşımacılık" />
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070" alt="Asansörlü Taşımacılık" className="w-full h-96 object-cover" />
                <div className="p-8 lg:p-12">
                  <h1 className="text-4xl font-bold mb-6">Asansörlü Taşımacılık Avantajları</h1>
                  <div className="prose prose-lg max-w-none">
                    <p><Link href="/hizmetler/asansorlu-tasimacilik" className="text-accent-600 hover:underline"><strong>Asansörlü taşımacılık</strong></Link>, yüksek katlı binalardan taşınmada en güvenli yöntemdir.</p>

                    <h2>Neden Asansörlü Nakliyat?</h2>
                    <ul>
                      <li><strong>Güvenlik:</strong> Eşyalar merdivenden taşınmaz</li>
                      <li><strong>Hız:</strong> 3 kat daha hızlı taşıma</li>
                      <li><strong>Bina Güvenliği:</strong> Duvar ve kapılara zarar yok</li>
                      <li><strong>Ekonomik:</strong> İşçilik maliyeti azalır</li>
                    </ul>

                    <h2>Nasıl Çalışır?</h2>
                    <p>Dış cephe asansörü binanın önüne kurulur ve 15 kata kadar eşya taşınır.</p>

                    <p><Link href="/hizmetler/asansor-kiralama" className="text-accent-600 hover:underline">Asansör kiralama</Link> hizmeti ile ekonomik taşıma.</p>

                    <h2>Hangi Durumlarda Gerekli?</h2>
                    <ul>
                      <li>3. kat ve üzeri daireler</li>
                      <li>Asansörsüz binalar</li>
                      <li>Dar merdivenli yapılar</li>
                      <li>Büyük mobilya taşıma</li>
                    </ul>

                    <p>Bölgelerimiz: <Link href="/bolge/seyhan-nakliyat" className="text-accent-600 hover:underline">Seyhan</Link>, <Link href="/bolge/yuregir-nakliyat" className="text-accent-600 hover:underline">Yüreğir</Link>, <Link href="/bolge/saricam-nakliyat" className="text-accent-600 hover:underline">Sarıçam</Link></p>
                  </div>
                </div>
              </article>
              <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({'@context':'https://schema.org','@type':'Article',headline:'Asansörlü Taşımacılık Avantajları'})}} />
            </div>
            <div className="lg:col-span-1"><BlogSidebar /></div>
          </div>
        </div>
      </section>
    </>
  )
}
