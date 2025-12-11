import Link from 'next/link'
import { FaSearch, FaCalendarAlt, FaTags } from 'react-icons/fa'

const recentPosts = [
  {
    title: 'Taşınma İpuçları',
    date: '15 Aralık 2024',
    slug: 'tasinma-ipuclari',
  },
  {
    title: 'Ev Taşırken Dikkat Edilmesi Gerekenler',
    date: '10 Aralık 2024',
    slug: 'ev-tasirken-dikkat-edilmesi-gerekenler',
  },
  {
    title: 'Eşya Paketleme Rehberi',
    date: '5 Aralık 2024',
    slug: 'esya-paketleme-rehberi',
  },
]

const categories = [
  { name: 'Nakliyat İpuçları', count: 12 },
  { name: 'Ev Taşıma', count: 8 },
  { name: 'Paketleme', count: 6 },
  { name: 'Taşımacılık', count: 10 },
]

const tags = [
  'Ev Taşıma',
  'Nakliyat',
  'Taşımacılık',
  'Paketleme',
  'İpuçları',
  'Asansörlü Taşıma',
  'Ofis Taşıma',
  'Ekonomik',
]

export default function BlogSidebar() {
  return (
    <aside className="space-y-8">
      {/* Search Box */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Arama</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Blog yazısı ara..."
            className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-accent-500">
            <FaSearch className="text-xl" />
          </button>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Son Yazılar</h3>
        <div className="space-y-4">
          {recentPosts.map((post, index) => (
            <Link
              key={index}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <h4 className="font-semibold text-gray-900 group-hover:text-accent-600 transition-colors mb-1">
                {post.title}
              </h4>
              <div className="flex items-center text-sm text-gray-600">
                <FaCalendarAlt className="mr-2" />
                {post.date}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Kategoriler</h3>
        <ul className="space-y-3">
          {categories.map((category, index) => (
            <li key={index}>
              <Link
                href={`/blog/kategori/${category.name.toLowerCase().replace(/ /g, '-')}`}
                className="flex items-center justify-between text-gray-700 hover:text-accent-600 transition-colors"
              >
                <span>{category.name}</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                  {category.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Etiketler</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
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

      {/* CTA Box */}
      <div className="bg-gradient-to-br from-primary-600 to-accent-500 rounded-xl p-6 text-white">
        <h3 className="text-xl font-bold mb-4">Teklif Almak İster misiniz?</h3>
        <p className="mb-4 text-sm">
          Profesyonel nakliyat hizmetlerimiz hakkında detaylı bilgi alın.
        </p>
        <Link
          href="/teklif-al"
          className="block bg-white hover:bg-gray-100 text-accent-600 font-semibold py-3 px-6 rounded-lg text-center transition-colors"
        >
          Ücretsiz Teklif Al
        </Link>
      </div>
    </aside>
  )
}
