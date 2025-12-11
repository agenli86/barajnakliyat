import Breadcrumb from '@/components/Breadcrumb'
import BlogSidebar from '@/components/BlogSidebar'
import Link from 'next/link'

export const metadata = {
  title: 'Nakliyat Fiyatları 2024 - Evden Eve Nakliyat Ücretleri',
  description: 'Nakliyat fiyatları ve evden eve nakliyat ücretleri hakkında detaylı bilgi. Fiyatları etkileyen faktörler ve tasarruf ipuçları.',
  keywords: 'nakliyat fiyatları, evden eve nakliyat fiyatları, ev taşıma fiyatları, nakliyat ücretleri',
  alternates: { canonical: 'https://barajnakliyat.com/blog/nakliyat-fiyatlari' },
  openGraph: { title: 'Nakliyat Fiyatları 2024', url: 'https://barajnakliyat.com/blog/nakliyat-fiyatlari', siteName: 'Baraj Nakliyat', type: 'article' },
}

export default function NakliyatFiyatlariPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Nakliyat Fiyatları' }]} title="Nakliyat Fiyatları" />
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070" alt="Nakliyat Fiyatları" className="w-full h-96 object-cover" />
                <div className="p-8 lg:p-12">
                  <h1 className="text-4xl font-bold mb-6">Nakliyat Fiyatları: Kapsamlı Rehber 2024</h1>
                  <div className="prose prose-lg max-w-none">
                    <p><strong>Evden eve nakliyat fiyatları</strong> birçok faktöre bağlı olarak değişir.</p>

                    <h2>Fiyatı Etkileyen Faktörler</h2>
                    <ul>
                      <li><strong>Mesafe:</strong> <Link href="/hizmetler/sehir-ici-nakliyat" className="text-accent-600 hover:underline">Şehir içi</Link> veya <Link href="/hizmetler/sehirler-arasi-nakliyat" className="text-accent-600 hover:underline">şehirler arası</Link></li>
                      <li><strong>Eşya Miktarı:</strong> Metreküp hesabı</li>
                      <li><strong>Kat Sayısı:</strong> <Link href="/hizmetler/asansorlu-tasimacilik" className="text-accent-600 hover:underline">Asansörlü</Link> veya merdivenli</li>
                      <li><strong>Ekstra Hizmetler:</strong> Paketleme, montaj</li>
                    </ul>

                    <h2>Bölgesel Fiyatlar</h2>
                    <p>Adana'da bölgelere göre nakliyat fiyatları:</p>
                    <ul>
                      <li><Link href="/bolge/seyhan-nakliyat" className="text-accent-600 hover:underline">Seyhan nakliyat</Link> - Merkez bölge</li>
                      <li><Link href="/bolge/cukurova-nakliyat" className="text-accent-600 hover:underline">Çukurova nakliyat</Link> - Merkez bölge</li>
                      <li><Link href="/bolge/kozan-nakliyat" className="text-accent-600 hover:underline">Kozan nakliyat</Link> - Şehir dışı</li>
                    </ul>

                    <h2>Tasarruf İpuçları</h2>
                    <ul>
                      <li>Gereksiz eşyalardan kurtulun</li>
                      <li>Hafta içi taşının (daha ekonomik)</li>
                      <li>Kendi paketlemenizi yapın</li>
                      <li>Birden fazla teklif alın</li>
                    </ul>

                    <p className="bg-primary-50 border-l-4 border-primary-500 p-6 my-8">
                      <strong>💰 Ücretsiz Teklif:</strong> <Link href="/teklif-al" className="text-accent-600 hover:underline">Ücretsiz keşif</Link> hizmeti ile net fiyat alın.
                    </p>

                    <h2>Sonuç</h2>
                    <p><strong>Ev taşıma fiyatları</strong> konusunda şeffaf fiyatlandırma için profesyonel firmalarla çalışın. <Link href="/hizmetler" className="text-accent-600 hover:underline">Hizmetlerimiz</Link> hakkında detaylı bilgi alın.</p>
                  </div>
                </div>
              </article>
              <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({'@context':'https://schema.org','@type':'Article',headline:'Nakliyat Fiyatları 2024'})}} />
            </div>
            <div className="lg:col-span-1"><BlogSidebar /></div>
          </div>
        </div>
      </section>
    </>
  )
}
