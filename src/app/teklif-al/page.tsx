'use client'

import Breadcrumb from '@/components/Breadcrumb'
import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHome, FaBoxes, FaCalendarAlt, FaClock } from 'react-icons/fa'
import { useState } from 'react'

export default function TeklifAlPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    fromAddress: '',
    toAddress: '',
    date: '',
    time: '',
    serviceType: '',
    roomCount: '',
    hasElevator: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form gönderme işlemi
    console.log('Form data:', formData)
    alert('Teklifiniz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <Breadcrumb
        items={[{ label: 'Teklif Al' }]}
        title="Ücretsiz Teklif Al"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Teklif Formu
              </h2>
              <p className="text-gray-600 mb-8">
                Aşağıdaki formu doldurarak ücretsiz ve yükümlülüksüz teklif alabilirsiniz. En kısa sürede sizinle iletişime geçeceğiz.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Ad Soyad */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Ad Soyad *
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                </div>

                {/* Telefon */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Telefon *
                  </label>
                  <div className="relative">
                    <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                      placeholder="0 (5XX) XXX XX XX"
                    />
                  </div>
                </div>

                {/* E-posta */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    E-posta
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>

                {/* Taşınacak Adres */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Taşınacak Adres *
                  </label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-4 top-4 text-gray-400" />
                    <textarea
                      name="fromAddress"
                      required
                      value={formData.fromAddress}
                      onChange={handleChange}
                      rows={3}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                      placeholder="Mevcut adresiniz"
                    />
                  </div>
                </div>

                {/* Varış Adresi */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Varış Adresi *
                  </label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-4 top-4 text-gray-400" />
                    <textarea
                      name="toAddress"
                      required
                      value={formData.toAddress}
                      onChange={handleChange}
                      rows={3}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                      placeholder="Taşınacağınız adres"
                    />
                  </div>
                </div>

                {/* Tarih ve Saat */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Taşınma Tarihi *
                    </label>
                    <div className="relative">
                      <FaCalendarAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Tercih Edilen Saat
                    </label>
                    <div className="relative">
                      <FaClock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 appearance-none"
                      >
                        <option value="">Seçiniz</option>
                        <option value="08:00-12:00">08:00 - 12:00</option>
                        <option value="12:00-16:00">12:00 - 16:00</option>
                        <option value="16:00-20:00">16:00 - 20:00</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Hizmet Türü */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Hizmet Türü *
                  </label>
                  <select
                    name="serviceType"
                    required
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                  >
                    <option value="">Seçiniz</option>
                    <option value="evden-eve">Evden Eve Nakliyat</option>
                    <option value="asansorlu">Asansörlü Taşımacılık</option>
                    <option value="ofis">Ofis Taşımacılığı</option>
                    <option value="parca-esya">Parça Eşya Taşıma</option>
                    <option value="sehirler-arasi">Şehirler Arası Nakliyat</option>
                  </select>
                </div>

                {/* Oda Sayısı */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Oda Sayısı
                    </label>
                    <div className="relative">
                      <FaHome className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <select
                        name="roomCount"
                        value={formData.roomCount}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 appearance-none"
                      >
                        <option value="">Seçiniz</option>
                        <option value="1+0">1+0</option>
                        <option value="1+1">1+1</option>
                        <option value="2+1">2+1</option>
                        <option value="3+1">3+1</option>
                        <option value="4+1">4+1</option>
                        <option value="5+">5+</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Asansör Var mı?
                    </label>
                    <select
                      name="hasElevator"
                      value={formData.hasElevator}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                    >
                      <option value="">Seçiniz</option>
                      <option value="evet">Evet</option>
                      <option value="hayir">Hayır</option>
                    </select>
                  </div>
                </div>

                {/* Ek Bilgiler */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Ek Bilgiler
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                    placeholder="Taşınma ile ilgili özel notlarınız veya sorularınız..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-primary text-center"
                >
                  Teklif Gönder
                </button>
              </form>
            </div>

            {/* Info Section */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="bg-gradient-to-br from-primary-600 to-accent-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  Hemen Arayın
                </h3>
                <div className="space-y-4">
                  <a href="tel:05374092406" className="flex items-center space-x-4 hover:text-accent-200 transition-colors">
                    <div className="bg-white/20 p-4 rounded-full">
                      <FaPhone className="text-2xl" />
                    </div>
                    <div>
                      <p className="text-sm opacity-90">Telefon</p>
                      <p className="text-xl font-bold">0537 409 24 06</p>
                    </div>
                  </a>
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-4 rounded-full">
                      <FaMapMarkerAlt className="text-2xl" />
                    </div>
                    <div>
                      <p className="text-sm opacity-90">Adres</p>
                      <p className="text-xl font-bold">Çukurova, Adana</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-4 rounded-full">
                      <FaClock className="text-2xl" />
                    </div>
                    <div>
                      <p className="text-sm opacity-90">Çalışma Saatleri</p>
                      <p className="text-xl font-bold">7/24 Hizmet</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Neden Baraj Nakliyat?
                </h3>
                <ul className="space-y-4">
                  {[
                    'Ücretsiz keşif ve fiyat teklifi',
                    'Sigortalı ve güvenli taşımacılık',
                    'Profesyonel ambalajlama hizmeti',
                    '15+ yıl sektör tecrübesi',
                    'Modern ve bakımlı araç filosu',
                    'Uygun ve şeffaf fiyatlandırma',
                    'Zamanında teslimat garantisi',
                    '7/24 müşteri desteği',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="bg-accent-100 rounded-full p-1">
                        <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Baraj Nakliyat ile taşınmak gerçekten çok kolaydı. Ekipleri çok profesyonel ve eşyalarıma özen gösterdiler. Fiyatları da çok uygundu. Kesinlikle tavsiye ederim!"
                </p>
                <p className="font-semibold text-gray-900">Mehmet Y.</p>
                <p className="text-sm text-gray-600">Adana</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
