import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import BlogSidebar from '@/components/BlogSidebar'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ev Taşırken Dikkat Edilmesi Gerekenler | Baraj Nakliyat',
  description: 'Ev taşıma sürecinde dikkat edilmesi gereken önemli noktalar. Sorunsuz taşınma için kritik ipuçları ve tavsiyeler.',
  keywords: 'ev taşıma, taşınma ipuçları, evden eve nakliyat, taşınma kontrol listesi',
  alternates: { canonical: 'https://barajnakliyat.com/blog/ev-tasirken-dikkat-edilmesi-gerekenler' },
  openGraph: { title: 'Ev Taşırken Dikkat Edilecekler', url: 'https://barajnakliyat.com/blog/ev-tasirken-dikkat-edilmesi-gerekenler', siteName: 'Baraj Nakliyat', type: 'article' },
}

export default function EvTasirkenDikkatPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Ev Taşırken Dikkat Edilecekler' }]} title="Ev Taşıma İpuçları" />
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070" alt="Ev Taşıma" className="w-full h-96 object-cover" />
                <div className="p-8 lg:p-12">
                  <h1 className="text-4xl font-bold mb-6">Ev Taşırken Dikkat Edilmesi Gerekenler</h1>
                  <div className="prose prose-lg max-w-none">
                    <p><strong>Ev taşıma</strong> sürecinde dikkat edilmesi gereken kritik noktalar.</p>

                    <h2>Taşınmadan Önce</h2>
                    <ul>
                      <li><Link href="/hizmetler" className="text-accent-600 hover:underline">Nakliyat firması</Link> araştırması yapın</li>
                      <li>Gereksiz eşyalardan kurtulun</li>
                      <li>Taşınma sigortası yaptırın</li>
                      <li>Adres değişikliği işlemleri</li>
                    </ul>

                    <h2>Nakliyat Günü</h2>
                    <ul>
                      <li>Yol tarifini açık verin</li>
                      <li>Değerli eşyaları kendiniz taşıyın</li>
                      <li>Eski evi temiz bırakın</li>
                      <li>Elektrik, su, doğalgaz sayaç okumalarını yapın</li>
                    </ul>

                    <h2>Yeni Evde</h2>
                    <ul>
                      <li>Temizlik kontrolü yapın</li>
                      <li>Eşyaları plana göre yerleştirin</li>
                      <li>Temel ihtiyaçları önce açın</li>
                      <li>Komşularla tanışın</li>
                    </ul>

                    <h2>Önemli Hatırlatmalar</h2>
                    <p className="bg-primary-50 border-l-4 border-primary-500 p-6">
                      <strong>Sigorta Önemli:</strong> <Link href="/hizmetler/sigortali-tasima" className="text-accent-600 hover:underline">Sigortalı taşımacılık</Link> hizmeti ile eşyalarınız güvende.
                    </p>

                    <h2>Bölgesel Hizmetler</h2>
                    <p>Adana genelinde güvenli taşıma:</p>
                    <ul>
                      <li><Link href="/hizmetler/sehir-ici-nakliyat" className="text-accent-600 hover:underline">Şehir içi nakliyat</Link></li>
                      <li><Link href="/hizmetler/sehirler-arasi-nakliyat" className="text-accent-600 hover:underline">Şehirler arası nakliyat</Link></li>
                      <li><Link href="/bolge/seyhan-nakliyat" className="text-accent-600 hover:underline">Seyhan nakliyat</Link></li>
                    </ul>

                    <h2>Sonuç</h2>
                    <p>Planlı bir <strong>ev taşıma</strong> süreci sorunsuz geçer. <Link href="/teklif-al" className="text-accent-600 hover:underline">Ücretsiz teklif</Link> için başvurun.</p>
                  </div>
                </div>
              </article>
              <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({'@context':'https://schema.org','@type':'Article',headline:'Ev Taşırken Dikkat Edilecekler'})}} />
            </div>
            <div className="lg:col-span-1"><BlogSidebar /></div>
          </div>
        </div>
      </section>
    </>
  )
}
