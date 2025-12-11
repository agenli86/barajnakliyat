'use client'

import Breadcrumb from '@/components/Breadcrumb'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react'

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form:', formData)
    alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.')
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
        items={[{ label: 'İletişim' }]}
        title="İletişim"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Bizimle İletişime Geçin
              </h2>
              <p className="text-gray-700 text-lg mb-8">
                Nakliyat hizmetlerimiz hakkında bilgi almak, teklif talep etmek veya herhangi bir sorunuz için bizimle iletişime geçebilirsiniz. 7/24 hizmetinizdeyiz!
              </p>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Phone */}
                <a
                  href="tel:05374092406"
                  className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-lg card-hover"
                >
                  <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-4 rounded-full flex-shrink-0">
                    <FaPhone className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Telefon</h3>
                    <p className="text-gray-600 mb-2">Hemen arayın</p>
                    <p className="text-2xl font-bold text-accent-600">0537 409 24 06</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/905374092406"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-lg card-hover"
                >
                  <div className="bg-green-500 p-4 rounded-full flex-shrink-0">
                    <FaWhatsapp className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">WhatsApp</h3>
                    <p className="text-gray-600 mb-2">Mesaj gönderin</p>
                    <p className="text-lg font-semibold text-green-600">WhatsApp'tan İletişime Geç</p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-lg">
                  <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-4 rounded-full flex-shrink-0">
                    <FaMapMarkerAlt className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Adres</h3>
                    <p className="text-gray-600 mb-2">Ofis adresimiz</p>
                    <p className="text-lg text-gray-800">Çukurova, Adana</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-lg">
                  <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-4 rounded-full flex-shrink-0">
                    <FaClock className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Çalışma Saatleri</h3>
                    <p className="text-gray-600 mb-2">Her zaman hizmetinizdeyiz</p>
                    <p className="text-lg font-semibold text-accent-600">7/24 Açık</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sosyal Medya</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transition-colors"
                  >
                    <FaFacebookF className="text-xl" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white p-4 rounded-full transition-colors"
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-400 hover:bg-blue-500 text-white p-4 rounded-full transition-colors"
                  >
                    <FaTwitter className="text-xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Mesaj Gönderin
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                    placeholder="Adınız ve soyadınız"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                    placeholder="ornek@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                    placeholder="0 (5XX) XXX XX XX"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Konu *
                  </label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                  >
                    <option value="">Konu seçiniz</option>
                    <option value="teklif">Teklif Talebi</option>
                    <option value="bilgi">Bilgi Alma</option>
                    <option value="sikayet">Şikayet</option>
                    <option value="oneri">Öneri</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Mesajınız *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                    placeholder="Mesajınızı buraya yazın..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-center"
                >
                  Mesaj Gönder
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="h-96 bg-gray-200 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206253.4157726814!2d34.92346155!3d37.00132655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1527f88f6b8e7d4d%3A0x2f6e3f8e3f8e3f8e!2zw4d1a3Vyb3ZhLCBBZGFuYQ!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
