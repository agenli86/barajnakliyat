import Breadcrumb from '@/components/Breadcrumb' // 👈 BURASI DÜZELTİLDİ
import BlogSidebar from '@/components/BlogSidebar'
import Link from 'next/link'

export const metadata = {
  title: 'Eşya Paketleme İpuçları - Taşınma Rehberi | Baraj Nakliyat',
  description: 'Taşınma öncesi eşya paketleme ipuçları ve püf noktaları. Kırılabilir eşyaları güvenle paketleme yöntemleri.',
  keywords: 'eşya paketleme, taşınma paketleme, kırılabilir eşya, nakliyat hazırlık',
  alternates: { canonical: 'https://barajnakliyat.com/blog/esya-paketleme-ipuclari' },
  openGraph: { title: 'Eşya Paketleme İpuçları', url: 'https://barajnakliyat.com/blog/esya-paketleme-ipuclari', siteName: 'Baraj Nakliyat', type: 'article' },
}

export default function PaketlemeIpuclariPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Paketleme İpuçları' }]} title="Eşya Paketleme" />
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070" alt="Eşya Paketleme" className="w-full h-96 object-cover" />
                <div className="p-8 lg:p-12">
                  <h1 className="text-4xl font-bold mb-6">Eşya Paketleme İpuçları ve Püf Noktaları</h1>
                  <div className="prose prose-lg max-w-none">
                    <p><strong>Evden eve nakliyat</strong> sürecinde doğru paketleme çok önemlidir.</p>

                    <h2>Paketleme Malzemeleri</h2>
                    <ul>
                      <li>Mukavva kutular (farklı boyutlarda)</li>
                      <li>Balonlu naylon (kırılabilir eşyalar için)</li>
                      <li>Streç film</li>
                      <li>Paketleme kağıdı</li>
                      <li>Bantlar</li>
                    </ul>

                    <h2>Kırılabilir Eşyalar</h2>
                    <p>Cam, porselen ve elektronik eşyaları özenle paketleyin. <Link href="/hizmetler" className="text-accent-600 hover:underline">Profesyonel nakliyat</Link> firmalarında paketleme hizmeti vardır.</p>

                    <h2>Pratik İpuçları</h2>
                    <ul>
                      <li>Ağır eşyaları küçük kutulara koyun</li>
                      <li>Her kutuyu etiketleyin</li>
                      <li>Boşlukları doldurun</li>
                      <li>Değerli eşyaları ayırın</li>
                    </ul>

                    <p>Bölgenizdeki hizmetler: <Link href="/bolge/saricam-nakliyat" className="text-accent-600 hover:underline">Sarıçam nakliyat</Link>, <Link href="/bolge/pozanti-nakliyat" className="text-accent-600 hover:underline">Pozantı nakliyat</Link></p>
                  </div>
                </div>
              </article>
              <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({'@context':'https://schema.org','@type':'Article',headline:'Eşya Paketleme İpuçları'})}} />
            </div>
            <div className="lg:col-span-1"><BlogSidebar /></div>
          </div>
        </div>
      </section>
    </>
  )
}
