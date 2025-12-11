import Breadcrumb from '@/components/Breadcrumb'
import BlogSidebar from '@/components/BlogSidebar'
import Link from 'next/link'

export const metadata = {
  title: 'Ofis Taşıma Planlaması - Kurumsal Nakliyat Rehberi',
  description: 'Ofis taşıma planlama rehberi. İşyeri nakliyatında dikkat edilmesi gerekenler ve başarılı ofis taşıma stratejileri.',
  keywords: 'ofis taşıma, kurumsal nakliyat, işyeri taşıma, ofis taşıma planlama',
  alternates: { canonical: 'https://barajnakliyat.com/blog/ofis-tasima-planlama' },
  openGraph: { title: 'Ofis Taşıma Planlaması', url: 'https://barajnakliyat.com/blog/ofis-tasima-planlama', siteName: 'Baraj Nakliyat', type: 'article' },
}

export default function OfisTasimaPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: 'Ofis Taşıma Planlaması' }]} title="Ofis Taşıma" />
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070" alt="Ofis Taşıma" className="w-full h-96 object-cover" />
                <div className="p-8 lg:p-12">
                  <h1 className="text-4xl font-bold mb-6">Başarılı Ofis Taşıma Planlaması</h1>
                  <div className="prose prose-lg max-w-none">
                    <p><Link href="/hizmetler/ofis-tasima" className="text-accent-600 hover:underline"><strong>Ofis taşıma</strong></Link> sürecinde profesyonel planlama kritiktir.</p>

                    <h2>Taşıma Öncesi Hazırlık</h2>
                    <ul>
                      <li>Taşıma ekibi belirleyin</li>
                      <li>Dosyaları kategorize edin</li>
                      <li>Teknolojik altyapıyı planlayın</li>
                      <li>Çalışanları bilgilendirin</li>
                    </ul>

                    <h2>Kritik Noktalar</h2>
                    <p><strong>Kurumsal nakliyat</strong> işleminde dikkat edilecekler:</p>
                    <ul>
                      <li>IT ekipmanları özenle paketlenmeli</li>
                      <li>Gizli belgeler güvenli taşınmalı</li>
                      <li>Hafta sonu taşıma tercih edilmeli</li>
                      <li>Sigorta mutlaka yaptırılmalı</li>
                    </ul>

                    <p><Link href="/hizmetler/sigortali-tasima" className="text-accent-600 hover:underline">Sigortalı taşımacılık</Link> ile tüm ekipmanlarınız güvencede.</p>

                    <h2>Sonuç</h2>
                    <p>Profesyonel <strong>ofis taşıma</strong> hizmeti ile minimal aksama. <Link href="/teklif-al" className="text-accent-600 hover:underline">Teklif almak</Link> için iletişime geçin.</p>
                  </div>
                </div>
              </article>
              <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({'@context':'https://schema.org','@type':'Article',headline:'Ofis Taşıma Planlaması'})}} />
            </div>
            <div className="lg:col-span-1"><BlogSidebar /></div>
          </div>
        </div>
      </section>
    </>
  )
}
