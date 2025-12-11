import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import BlogSidebar from '@/components/BlogSidebar'
import Link from 'next/link'
import { FaCalendarAlt, FaUser, FaShare, FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Taşınma İpuçları: Stresiz Ev Taşıma Rehberi | Baraj Nakliyat Blog',
  description: 'Ev taşıma sürecini kolaylaştıracak pratik ipuçları ve öneriler. Taşınma öncesi, sırası ve sonrası yapılması gerekenler hakkında profesyonel rehber.',
  openGraph: {
    title: 'Taşınma İpuçları: Stresiz Ev Taşıma Rehberi',
    description: 'Ev taşıma sürecini kolaylaştıracak pratik ipuçları.',
  },
}

export default function TasinmaIpuclariPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Blog', href: '/blog' },
          { label: 'Taşınma İpuçları' },
        ]}
        title="Taşınma İpuçları"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Blog Content */}
            <div className="lg:col-span-2">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Featured Image */}
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070"
                  alt="Taşınma İpuçları"
                  className="w-full h-96 object-cover"
                />

                <div className="p-8 lg:p-12">
                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                    <span className="bg-accent-100 text-accent-600 px-4 py-2 rounded-full font-semibold">
                      Nakliyat İpuçları
                    </span>
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2" />
                      15 Aralık 2024
                    </div>
                    <div className="flex items-center">
                      <FaUser className="mr-2" />
                      Baraj Nakliyat
                    </div>
                  </div>

                  {/* Content */}
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      Ev taşıma süreci, birçok kişi için stresli ve yorucu bir deneyim olabilir. Ancak doğru planlama ve hazırlık ile bu süreci çok daha kolay ve keyifli hale getirebilirsiniz. Bu rehberde, ev taşıma sürecinizi kolaylaştıracak profesyonel ipuçlarını sizlerle paylaşacağız.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                      Taşınma Öncesi Hazırlık (4-6 Hafta Önce)
                    </h2>

                    <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                      1. Taşınma Planı Oluşturun
                    </h3>
                    <p className="text-gray-700 mb-4">
                      İlk adım, detaylı bir taşınma planı oluşturmaktır. Taşınma tarihini belirleyin ve geriye doğru sayarak yapılması gerekenleri listeleyin. Bu plana tüm aile üyelerini dahil edin ve herkesin sorumluluklarını netleştirin.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                      2. Nakliyat Firması Seçimi
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Güvenilir bir nakliyat firması seçmek kritik öneme sahiptir. En az 3 farklı firmadan teklif alın ve şu kriterlere dikkat edin:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
                      <li>Firmanın deneyimi ve referansları</li>
                      <li>Sigorta kapsamı</li>
                      <li>Şeffaf fiyatlandırma</li>
                      <li>Müşteri yorumları</li>
                      <li>Hizmet kalitesi</li>
                    </ul>

                    <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                      3. Gereksiz Eşyalardan Kurtulun
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Taşınma, evinizdeki gereksiz eşyalardan kurtulmak için mükemmel bir fırsattır. Her odayı gözden geçirin ve kullanmadığınız eşyaları:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
                      <li>Bağışlayın</li>
                      <li>Satın</li>
                      <li>Geri dönüşüme gönderin</li>
                      <li>Çöpe atın</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                      Taşınma Öncesi Son Hazırlıklar (1-2 Hafta Önce)
                    </h2>

                    <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                      4. Paketleme Malzemelerini Hazırlayın
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Kaliteli paketleme malzemeleri, eşyalarınızın korunması için çok önemlidir:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
                      <li>Farklı boyutlarda karton kutular</li>
                      <li>Balonlu naylon</li>
                      <li>Ambalaj kağıdı</li>
                      <li>Paketleme bantı</li>
                      <li>İşaretleme kalemleri</li>
                      <li>Etiketler</li>
                    </ul>

                    <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                      5. Sistematik Paketleme
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Her odayı ayrı ayrı paketleyin ve kutuları işaretleyin. Kutu üzerine:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
                      <li>Oda adını yazın</li>
                      <li>İçindeki eşyaları listeleyin</li>
                      <li>Kırılabilir eşyaları işaretleyin</li>
                      <li>Kutulara numara verin</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                      Taşınma Günü İpuçları
                    </h2>

                    <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                      6. Önemli Eşyaları Kendiniz Taşıyın
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Bazı önemli eşyaları kendiniz taşımak daha güvenlidir:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
                      <li>Belgeler ve kimlikler</li>
                      <li>Değerli eşyalar ve mücevherler</li>
                      <li>İlaçlar</li>
                      <li>Elektronik cihazlar</li>
                      <li>Anahtar takımları</li>
                    </ul>

                    <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                      7. Nakliyat Ekibiyle İletişim
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Nakliyat ekibine özel talimatlarınızı net bir şekilde iletin. Hangi eşyaların daha dikkatli taşınması gerektiğini belirtin ve süreç boyunca ekiple iletişimde kalın.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                      Taşınma Sonrası
                    </h2>

                    <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                      8. Sistematik Açma
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Önce temel ihtiyaçlarınızı karşılayacak kutuları açın:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
                      <li>Yatak ve yatak takımları</li>
                      <li>Banyo malzemeleri</li>
                      <li>Mutfak eşyaları</li>
                      <li>Temizlik malzemeleri</li>
                    </ul>

                    <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                      9. Eşyaları Kontrol Edin
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Tüm eşyalarınızı kontrol edin ve herhangi bir hasar varsa hemen nakliyat firmasına bildirin. Sigorta kapsamındaki hasarlar için gerekli belgeleri hazırlayın.
                    </p>

                    <div className="bg-accent-50 border-l-4 border-accent-500 p-6 my-8">
                      <h4 className="font-bold text-gray-900 mb-2">💡 Profesyonel İpucu</h4>
                      <p className="text-gray-700">
                        Taşınma sürecinde profesyonel bir nakliyat firması ile çalışmak, hem zaman hem de enerji tasarrufu sağlar. Baraj Nakliyat olarak, 15 yıllık deneyimimiz ile taşınma sürecinizi en kolay ve güvenli şekilde tamamlamanız için yanınızdayız.
                      </p>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                      Sonuç
                    </h2>
                    <p className="text-gray-700 mb-4">
                      Ev taşıma süreci, doğru planlama ve hazırlık ile çok daha kolay hale gelir. Bu ipuçlarını uygulayarak, stressiz bir taşınma deneyimi yaşayabilirsiniz. Unutmayın, profesyonel bir nakliyat firması ile çalışmak, sürecin en önemli parçasıdır.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Daha fazla bilgi ve ücretsiz keşif için bizimle iletişime geçebilirsiniz. Baraj Nakliyat olarak, ev taşıma sürecinizin her aşamasında yanınızdayız!
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <div className="flex flex-wrap gap-2">
                      <span className="text-gray-600 font-semibold mr-2">Etiketler:</span>
                      {['Ev Taşıma', 'Nakliyat İpuçları', 'Taşınma Rehberi', 'Paketleme'].map((tag, index) => (
                        <Link
                          key={index}
                          href={`/blog/etiket/${tag.toLowerCase().replace(/ /g, '-')}`}
                          className="bg-gray-100 hover:bg-accent-500 hover:text-white text-gray-700 px-4 py-2 rounded-full text-sm transition-colors"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Share */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <div className="flex items-center space-x-4">
                      <span className="text-gray-600 font-semibold">Paylaş:</span>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors">
                        <FaFacebookF />
                      </button>
                      <button className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full transition-colors">
                        <FaTwitter />
                      </button>
                      <button className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-colors">
                        <FaWhatsapp />
                      </button>
                    </div>
                  </div>
                </div>
              </article>

              {/* CTA */}
              <div className="mt-8 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Profesyonel Nakliyat Hizmeti Mi Arıyorsunuz?</h3>
                <p className="mb-6">
                  Baraj Nakliyat olarak ev taşıma sürecinizde size yardımcı olmaktan mutluluk duyarız.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/teklif-al" className="bg-white hover:bg-gray-100 text-accent-600 font-bold py-3 px-8 rounded-lg transition-colors">
                    Ücretsiz Teklif Al
                  </Link>
                  <a href="tel:05374092406" className="bg-primary-700 hover:bg-primary-800 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                    Hemen Ara
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
