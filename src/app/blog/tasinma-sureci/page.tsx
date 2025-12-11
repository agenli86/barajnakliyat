import Breadcrumb from '@/components/Breadcrumb'
import BlogSidebar from '@/components/BlogSidebar'
import Link from 'next/link'

export const metadata = {
  title: 'Taşınma Süreci: Adım Adım Rehber | Baraj Nakliyat Blog',
  description: 'Ev taşıma sürecini adım adım anlatan kapsamlı rehber. Taşınmadan önce, taşınma sırasında ve sonrasında yapılacaklar listesi.',
  keywords: 'taşınma süreci, ev taşıma adımları, taşınma rehberi, evden eve nakliyat süreci',
  alternates: { canonical: 'https://barajnakliyat.com/blog/tasinma-sureci' },
  openGraph: { title: 'Taşınma Süreci Rehberi', url: 'https://barajnakliyat.com/blog/tasinma-sureci', siteName: 'Baraj Nakliyat', type: 'article' },
}

export default function TasinmaSureciPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Taşınma Süreci' }]} title="Taşınma Süreci Rehberi" />
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070" alt="Taşınma Süreci" className="w-full h-96 object-cover" />
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="bg-accent-100 text-accent-600 px-4 py-2 rounded-full text-sm font-semibold">Taşınma Rehberi</span>
                    <span className="text-gray-500">📅 5 Aralık 2024</span>
                  </div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-6">Taşınma Süreci: Stressiz Ev Taşıma Rehberi</h1>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="lead"><strong>Taşınma süreci</strong> doğru planlandığında stressiz ve sorunsuz geçebilir. Bu rehberde ev taşıma sürecini adım adım anlatıyoruz.</p>

                    <h2>1. Taşınmadan 4 Hafta Önce</h2>
                    <p><strong>Evden eve nakliyat</strong> planlamasına erken başlamak çok önemlidir:</p>
                    <ul>
                      <li><Link href="/hizmetler" className="text-accent-600 hover:underline">Nakliyat firması</Link> araştırması yapın</li>
                      <li>Teklif alın ve fiyatları karşılaştırın</li>
                      <li>Taşınma tarihini netleştirin</li>
                      <li>Kullanmadığınız eşyaları ayıklayın</li>
                    </ul>

                    <h2>2. Taşınmadan 2 Hafta Önce</h2>
                    <p>Bu aşamada <strong>taşımacılık</strong> hazırlıkları hızlanır:</p>
                    <ul>
                      <li>Paketleme malzemelerini temin edin</li>
                      <li>Eşyaları kategorilere ayırın</li>
                      <li>Değerli eşyaları ayrı paketleyin</li>
                      <li>Adres değişikliği işlemlerini başlatın</li>
                    </ul>

                    <h2>3. Taşınma Günü</h2>
                    <p><strong>Ev taşıma</strong> günü için önemli noktalar:</p>
                    <ul>
                      <li>Nakliyat ekibine yol tarifi verin</li>
                      <li>Önemli evrakları yanınızda taşıyın</li>
                      <li>Son kontrolleri yapın</li>
                      <li>Eski evin fotoğraflarını çekin</li>
                    </ul>

                    <p className="bg-primary-50 border-l-4 border-primary-500 p-6 my-8">
                      <strong>💡 Profesyonel Tavsiye:</strong> <Link href="/hizmetler/sigortali-tasima" className="text-accent-600 hover:underline">Sigortalı taşımacılık</Link> hizmeti ile eşyalarınızı güvence altına alın.
                    </p>

                    <h2>Bölgesel Hizmetlerimiz</h2>
                    <p>Adana'nın tüm ilçelerinde profesyonel taşınma hizmetleri:</p>
                    <ul>
                      <li><Link href="/bolge/seyhan-nakliyat" className="text-accent-600 hover:underline">Seyhan nakliyat</Link></li>
                      <li><Link href="/bolge/cukurova-nakliyat" className="text-accent-600 hover:underline">Çukurova nakliyat</Link></li>
                      <li><Link href="/bolge/yuregir-nakliyat" className="text-accent-600 hover:underline">Yüreğir nakliyat</Link></li>
                    </ul>

                    <h2>Sonuç</h2>
                    <p>Planlı bir <strong>taşınma süreci</strong> ile stressiz ev değişimi mümkün. Profesyonel <Link href="/hizmetler/sehir-ici-nakliyat" className="text-accent-600 hover:underline">nakliyat hizmetleri</Link> ile süreci kolaylaştırabilirsiniz.</p>
                  </div>

                  <div className="mt-8 pt-8 border-t">
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm text-gray-600">Etiketler:</span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">taşınma</span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">evden eve nakliyat</span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">taşımacılık</span>
                    </div>
                  </div>
                </div>
              </article>
              <div className="mt-8 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Taşınma İçin Yardıma İhtiyacınız Var mı?</h3>
                <Link href="/teklif-al" className="bg-white hover:bg-gray-100 text-accent-600 font-bold py-3 px-8 rounded-lg inline-block">Ücretsiz Teklif Alın</Link>
              </div>
              <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({'@context':'https://schema.org','@type':'Article',headline:'Taşınma Süreci Rehberi',author:{'@type':'Organization',name:'Baraj Nakliyat'},datePublished:'2024-12-05',publisher:{'@type':'Organization',name:'Baraj Nakliyat'}})}} />
            </div>
            <div className="lg:col-span-1"><BlogSidebar /></div>
          </div>
        </div>
      </section>
    </>
  )
}
