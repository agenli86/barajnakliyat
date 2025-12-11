import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Galeri - Baraj Nakliyat | Çalışmalarımız',
  description: 'Baraj Nakliyat\'ın ev taşıma ve nakliyat hizmetlerinden fotoğraflar. Araç filomuz, ekibimiz ve başarılı projelerimiz.',
}

const galleryImages = [
  {
    id: 1,
    title: 'Modern Araç Filomuz',
    category: 'Araçlar',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800',
  },
  {
    id: 2,
    title: 'Profesyonel Ekibimiz',
    category: 'Ekip',
    image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=800',
  },
  {
    id: 3,
    title: 'Asansörlü Taşımacılık',
    category: 'Hizmetler',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800',
  },
  {
    id: 4,
    title: 'Güvenli Paketleme',
    category: 'Hizmetler',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800',
  },
  {
    id: 5,
    title: 'Ev Taşıma',
    category: 'Projeler',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800',
  },
  {
    id: 6,
    title: 'Ofis Taşımacılığı',
    category: 'Projeler',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800',
  },
  {
    id: 7,
    title: 'Nakliyat Araçlarımız',
    category: 'Araçlar',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800',
  },
  {
    id: 8,
    title: 'Ekip Çalışması',
    category: 'Ekip',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800',
  },
]

const categories = ['Tümü', 'Araçlar', 'Ekip', 'Hizmetler', 'Projeler']

export default function GalleryPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: 'Galeri' }]}
        title="Galeri"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Çalışmalarımız</h2>
            <p className="section-subtitle">
              Araç filomuz, ekibimiz ve başarılı projelerimizden kareler
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  index === 0
                    ? 'bg-accent-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-accent-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl shadow-lg card-hover cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm font-semibold text-accent-300 mb-1">
                      {item.category}
                    </p>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Siz de Başarılı Projelerimize Dahil Olun!
              </h3>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Profesyonel nakliyat hizmetlerimiz ile güvenli ve konforlu bir taşınma deneyimi yaşayın
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/teklif-al"
                  className="bg-white hover:bg-gray-100 text-accent-600 font-bold py-4 px-8 rounded-lg transition-colors"
                >
                  Ücretsiz Teklif Al
                </a>
                <a
                  href="tel:05374092406"
                  className="bg-primary-800 hover:bg-primary-900 text-white font-bold py-4 px-8 rounded-lg transition-colors"
                >
                  0537 409 24 06
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
