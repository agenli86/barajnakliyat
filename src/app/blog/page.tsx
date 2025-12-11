import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import BlogSidebar from '@/components/BlogSidebar'
import Link from 'next/link'
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Blog - Nakliyat İpuçları ve Tavsiyeler | Baraj Nakliyat',
  description: 'Ev taşıma, nakliyat ve taşımacılık hakkında faydalı ipuçları, rehberler ve tavsiyeler. Uzman ekibimizden nakliyat konusunda bilgiler.',
  openGraph: {
    title: 'Blog - Baraj Nakliyat',
    description: 'Nakliyat ve ev taşıma hakkında faydalı bilgiler.',
  },
}

const blogPosts = [
  {
    id: 1,
    title: 'Taşınma İpuçları: Stresiz Ev Taşıma Rehberi',
    excerpt: 'Ev taşıma sürecini kolaylaştıracak pratik ipuçları ve öneriler. Taşınma öncesi, sırası ve sonrası yapılması gerekenler.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=500',
    date: '15 Aralık 2024',
    author: 'Baraj Nakliyat',
    category: 'Nakliyat İpuçları',
    slug: 'tasinma-ipuclari',
  },
  {
    id: 2,
    title: 'Ev Taşırken Dikkat Edilmesi Gerekenler',
    excerpt: 'Ev taşıma sürecinde dikkat edilmesi gereken önemli noktalar. Eşyalarınızı korumak için ipuçları.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=500',
    date: '10 Aralık 2024',
    author: 'Baraj Nakliyat',
    category: 'Ev Taşıma',
    slug: 'ev-tasirken-dikkat-edilmesi-gerekenler',
  },
  {
    id: 3,
    title: 'Eşya Paketleme Rehberi: Doğru Paketleme Teknikleri',
    excerpt: 'Nakliyat sırasında eşyalarınızı korumak için profesyonel paketleme teknikleri ve malzeme seçimi.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=500',
    date: '5 Aralık 2024',
    author: 'Baraj Nakliyat',
    category: 'Paketleme',
    slug: 'esya-paketleme-rehberi',
  },
  {
    id: 4,
    title: 'Asansörlü Taşımacılığın Avantajları',
    excerpt: 'Yüksek katlı binalarda asansörlü taşımacılık neden tercih edilmeli? Avantajları ve dikkat edilmesi gerekenler.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=500',
    date: '1 Aralık 2024',
    author: 'Baraj Nakliyat',
    category: 'Taşımacılık',
    slug: 'asansorlu-tasimacilik-avantajlari',
  },
  {
    id: 5,
    title: 'Ofis Taşımacılığı: İş Yerinizi Sorunsuz Taşıyın',
    excerpt: 'Ofis taşıma sürecini minimum kesinti ile tamamlamak için profesyonel çözümler ve öneriler.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=500',
    date: '28 Kasım 2024',
    author: 'Baraj Nakliyat',
    category: 'Ofis Taşıma',
    slug: 'ofis-tasimaciligi',
  },
  {
    id: 6,
    title: 'Evden Eve Nakliyat Fiyatları Nasıl Belirlenir?',
    excerpt: 'Nakliyat fiyatlarını etkileyen faktörler ve ekonomik taşınma için öneriler.',
    image: 'https://images.unsplash.com/photo-1554224311-beee4ead5fc6?q=80&w=500',
    date: '25 Kasım 2024',
    author: 'Baraj Nakliyat',
    category: 'Nakliyat İpuçları',
    slug: 'nakliyat-fiyatlari',
  },
]

export default function BlogPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: 'Blog' }]}
        title="Blog"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="md:col-span-1">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-64 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-8">
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                          <span className="bg-accent-100 text-accent-600 px-3 py-1 rounded-full font-semibold">
                            {post.category}
                          </span>
                          <div className="flex items-center">
                            <FaCalendarAlt className="mr-2" />
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <FaUser className="mr-2" />
                            {post.author}
                          </div>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-accent-600 transition-colors">
                          <Link href={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h2>
                        
                        <p className="text-gray-700 mb-6">
                          {post.excerpt}
                        </p>
                        
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center text-accent-600 font-semibold hover:text-accent-700 transition-colors"
                        >
                          Devamını Oku
                          <FaArrowRight className="ml-2" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                    Önceki
                  </button>
                  <button className="px-4 py-2 bg-accent-500 text-white rounded-lg">1</button>
                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                    Sonraki
                  </button>
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
