import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import BlogSidebar from '@/components/BlogSidebar'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Eşya Paketleme Rehberi - Taşınma Hazırlığı | Baraj Nakliyat',
  description: 'Taşınma öncesi eşya paketleme rehberi. Doğru paketleme teknikleri, malzemeler ve püf noktaları.',
  keywords: 'eşya paketleme, taşınma hazırlık, paketleme malzemeleri, nakliyat paketleme',
  alternates: { canonical: 'https://barajnakliyat.com/blog/esya-paketleme-rehberi' },
  openGraph: { title: 'Eşya Paketleme Rehberi', url: 'https://barajnakliyat.com/blog/esya-paketleme-rehberi', siteName: 'Baraj Nakliyat', type: 'article' },
}

export default function EsyaPaketlemeRehberiPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Eşya Paketleme Rehberi' }]} title="Eşya Paketleme" />
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070" alt="Eşya Paketleme" className="w-full h-96 object-cover" />
                <div className="p-8 lg:p-12">
                  <h1 className="text-4xl font-bold mb-6">Profesyonel Eşya Paketleme Rehberi</h1>
                  <div className="prose prose-lg max-w-none">
                    <p><strong>Evden eve nakliyat</strong> sürecinde doğru paketleme çok önemlidir.</p>

                    <h2>Paketleme Malzemeleri</h2>
                    <ul>
                      <li>Mukavva kutular (3 farklı boyut)</li>
                      <li>Balonlu naylon</li>
                      <li>Streç film</li>
                      <li>Paketleme kağıdı</li>
                      <li>Bantlar</li>
                      <li>Etiketler</li>
                    </ul>

                    <h2>Oda Bazında Paketleme</h2>
                    <p><strong>Mutfak:</strong></p>
                    <ul>
                      <li>Camları ayrı ayrı sarın</li>
                      <li>Tabakları dik koyun</li>
                      <li>Keskin aletleri özel paketleyin</li>
                    </ul>

                    <p><strong>Yatak Odası:</strong></p>
                    <ul>
                      <li>Kıyafetleri askıda taşıyın</li>
                      <li>Çarşaf ve battaniyeleri vakumla</li>
                      <li>Kırılabilir süsleri özel kutulara</li>
                    </ul>

                    <h2>Püf Noktaları</h2>
                    <ul>
                      <li>Ağır eşyalar küçük kutulara</li>
                      <li>Her kutuyu etiketleyin</li>
                      <li>Değerli eşyaları kendiniz taşıyın</li>
                      <li>Boşlukları doldurun</li>
                    </ul>

                    <p className="bg-accent-50 border-l-4 border-accent-500 p-6 my-8">
                      <strong>💡 Profesyonel Destek:</strong> <Link href="/hizmetler" className="text-accent-600 hover:underline">Paketleme hizmeti</Link> ile eşyalarınız profesyonel ellerde olsun.
                    </p>

                    <p>Hizmet bölgelerimiz: <Link href="/bolge/kozan-nakliyat" className="text-accent-600 hover:underline">Kozan</Link>, <Link href="/bolge/ceyhan-nakliyat" className="text-accent-600 hover:underline">Ceyhan</Link>, <Link href="/bolge/pozanti-nakliyat" className="text-accent-600 hover:underline">Pozantı</Link></p>
                  </div>
                </div>
              </article>
              <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({'@context':'https://schema.org','@type':'Article',headline:'Eşya Paketleme Rehberi'})}} />
            </div>
            <div className="lg:col-span-1"><BlogSidebar /></div>
          </div>
        </div>
      </section>
    </>
  )
}
