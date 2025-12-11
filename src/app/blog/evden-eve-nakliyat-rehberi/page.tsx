import Breadcrumb from '@/components/Breadcrumb'
import BlogSidebar from '@/components/BlogSidebar'
import Link from 'next/link'

export const metadata = {
  title: 'Evden Eve Nakliyat Rehberi: Püf Noktaları | Baraj Nakliyat',
  description: 'Evden eve nakliyat püf noktaları ve ipuçları. Başarılı ev taşıma için bilmeniz gereken her şey bu rehberde.',
  keywords: 'evden eve nakliyat, ev taşıma, nakliyat ipuçları, evden eve nakliyat fiyatları',
  alternates: { canonical: 'https://barajnakliyat.com/blog/evden-eve-nakliyat-rehberi' },
  openGraph: { title: 'Evden Eve Nakliyat Rehberi', url: 'https://barajnakliyat.com/blog/evden-eve-nakliyat-rehberi', siteName: 'Baraj Nakliyat', type: 'article' },
}

export default function EvdenEveNakliyatPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Evden Eve Nakliyat Rehberi' }]} title="Evden Eve Nakliyat" />
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070" alt="Evden Eve Nakliyat" className="w-full h-96 object-cover" />
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="bg-accent-100 text-accent-600 px-4 py-2 rounded-full text-sm font-semibold">Nakliyat</span>
                    <span className="text-gray-500">📅 3 Aralık 2024</span>
                  </div>
                  <h1 className="text-4xl font-bold mb-6">Evden Eve Nakliyat: Bilmeniz Gereken Her Şey</h1>
                  <div className="prose prose-lg max-w-none">
                    <p><strong>Evden eve nakliyat</strong> işleminde başarı için doğru firma seçimi ve planlama şarttır.</p>

                    <h2>Nakliyat Firması Seçimi</h2>
                    <ul>
                      <li>Referansları kontrol edin</li>
                      <li><Link href="/hizmetler/sigortali-tasima" className="text-accent-600 hover:underline">Sigortalı taşımacılık</Link> yapıp yapmadığını sorun</li>
                      <li>En az 3 firmadan teklif alın</li>
                      <li>Gizli masraf olup olmadığını öğrenin</li>
                    </ul>

                    <h2>Evden Eve Nakliyat Fiyatları</h2>
                    <p><strong>Ev taşıma fiyatları</strong> şu faktörlere bağlıdır:</p>
                    <ul>
                      <li>Mesafe (şehir içi veya şehirler arası)</li>
                      <li>Eşya miktarı ve hacmi</li>
                      <li>Kat sayısı ve asansör durumu</li>
                      <li>Ekstra hizmetler (paketleme, montaj)</li>
                    </ul>

                    <p className="bg-accent-50 border-l-4 border-accent-500 p-6 my-8">
                      <strong>💰 Fiyat Teklifi:</strong> <Link href="/teklif-al" className="text-accent-600 hover:underline">Ücretsiz keşif</Link> hizmeti ile tam fiyat alın.
                    </p>

                    <h2>Bölgesel Hizmetler</h2>
                    <p>Adana'da <Link href="/bolge/kozan-nakliyat" className="text-accent-600 hover:underline">Kozan nakliyat</Link>, <Link href="/bolge/ceyhan-nakliyat" className="text-accent-600 hover:underline">Ceyhan nakliyat</Link> gibi tüm ilçelerde hizmet.</p>

                    <h2>Sonuç</h2>
                    <p><strong>Evden eve nakliyat</strong> sürecinde profesyonel destek almak zaman ve para tasarrufu sağlar. <Link href="/hizmetler/sehir-ici-nakliyat" className="text-accent-600 hover:underline">Şehir içi nakliyat</Link> veya <Link href="/hizmetler/sehirler-arasi-nakliyat" className="text-accent-600 hover:underline">şehirler arası nakliyat</Link> ihtiyacınız için bizimle iletişime geçin.</p>
                  </div>
                </div>
              </article>
              <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({'@context':'https://schema.org','@type':'Article',headline:'Evden Eve Nakliyat Rehberi',datePublished:'2024-12-03'})}} />
            </div>
            <div className="lg:col-span-1"><BlogSidebar /></div>
          </div>
        </div>
      </section>
    </>
  )
}
