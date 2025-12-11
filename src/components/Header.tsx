'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaPhone, FaMapMarkerAlt, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-700 text-white py-2 hidden md:block">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:05374092406" className="flex items-center hover:text-accent-300 transition-colors">
                <FaPhone className="mr-2" />
                0537 409 24 06
              </a>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                Çukurova, Adana
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-accent-300 font-semibold">7/24 Hizmet</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-primary-600 to-accent-500 p-3 rounded-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Baraj Nakliyat</h1>
                <p className="text-xs text-gray-600">Güvenilir Taşımacılık</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-accent-500 font-medium transition-colors"
              >
                Anasayfa
              </Link>
              <Link
                href="/hakkimizda"
                className="text-gray-700 hover:text-accent-500 font-medium transition-colors"
              >
                Hakkımızda
              </Link>
              
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="flex items-center text-gray-700 hover:text-accent-500 font-medium transition-colors">
                  Hizmetler
                  <FaChevronDown className="ml-1 text-xs" />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 animate-fadeInUp max-h-96 overflow-y-auto">
                    <Link
                      href="/hizmetler/asansorlu-tasimacilik"
                      className="block px-4 py-3 text-gray-700 hover:bg-accent-50 hover:text-accent-600 transition-colors"
                    >
                      Asansörlü Taşımacılık
                    </Link>
                    <Link
                      href="/hizmetler/sehir-ici-nakliyat"
                      className="block px-4 py-3 text-gray-700 hover:bg-accent-50 hover:text-accent-600 transition-colors"
                    >
                      Şehir İçi Nakliyat
                    </Link>
                    <Link
                      href="/hizmetler/sehirler-arasi-nakliyat"
                      className="block px-4 py-3 text-gray-700 hover:bg-accent-50 hover:text-accent-600 transition-colors"
                    >
                      Şehirler Arası Nakliyat
                    </Link>
                    <Link
                      href="/hizmetler/ofis-tasima"
                      className="block px-4 py-3 text-gray-700 hover:bg-accent-50 hover:text-accent-600 transition-colors"
                    >
                      Ofis Taşıma
                    </Link>
                    <Link
                      href="/hizmetler/asansor-kiralama"
                      className="block px-4 py-3 text-gray-700 hover:bg-accent-50 hover:text-accent-600 transition-colors"
                    >
                      Asansör Kiralama
                    </Link>
                    <Link
                      href="/hizmetler/kamyonet-nakliye"
                      className="block px-4 py-3 text-gray-700 hover:bg-accent-50 hover:text-accent-600 transition-colors"
                    >
                      Kamyonet Nakliye
                    </Link>
                    <Link
                      href="/hizmetler/sigortali-tasima"
                      className="block px-4 py-3 text-gray-700 hover:bg-accent-50 hover:text-accent-600 transition-colors"
                    >
                      Sigortalı Taşımacılık
                    </Link>
                    <Link
                      href="/hizmetler"
                      className="block px-4 py-3 text-accent-600 hover:bg-accent-50 font-semibold transition-colors border-t"
                    >
                      → Tüm Hizmetler
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/blog"
                className="text-gray-700 hover:text-accent-500 font-medium transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/galeri"
                className="text-gray-700 hover:text-accent-500 font-medium transition-colors"
              >
                Galeri
              </Link>
              <Link
                href="/iletisim"
                className="text-gray-700 hover:text-accent-500 font-medium transition-colors"
              >
                İletişim
              </Link>
              <Link href="/teklif-al" className="btn-primary">
                Teklif Al
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-700 text-2xl"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t animate-fadeInUp">
            <div className="container-custom py-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-accent-500 font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Anasayfa
                </Link>
                <Link
                  href="/hakkimizda"
                  className="text-gray-700 hover:text-accent-500 font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Hakkımızda
                </Link>
                <Link
                  href="/hizmetler"
                  className="text-gray-700 hover:text-accent-500 font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Hizmetler
                </Link>
                <Link
                  href="/hizmetler/asansorlu-tasimacilik"
                  className="text-gray-700 hover:text-accent-500 font-medium transition-colors pl-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  → Asansörlü Taşımacılık
                </Link>
                <Link
                  href="/hizmetler/sehir-ici-nakliyat"
                  className="text-gray-700 hover:text-accent-500 font-medium transition-colors pl-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  → Şehir İçi Nakliyat
                </Link>
                <Link
                  href="/hizmetler/sehirler-arasi-nakliyat"
                  className="text-gray-700 hover:text-accent-500 font-medium transition-colors pl-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  → Şehirler Arası Nakliyat
                </Link>
                <Link
                  href="/hizmetler/ofis-tasima"
                  className="text-gray-700 hover:text-accent-500 font-medium transition-colors pl-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  → Ofis Taşıma
                </Link>
                <Link
                  href="/hizmetler/asansor-kiralama"
                  className="text-gray-700 hover:text-accent-500 font-medium transition-colors pl-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  → Asansör Kiralama
                </Link>
                <Link
                  href="/hizmetler/kamyonet-nakliye"
                  className="text-gray-700 hover:text-accent-500 font-medium transition-colors pl-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  → Kamyonet Nakliye
                </Link>
                <Link
                  href="/hizmetler/sigortali-tasima"
                  className="text-gray-700 hover:text-accent-500 font-medium transition-colors pl-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  → Sigortalı Taşımacılık
                </Link>
                <Link
                  href="/blog"
                  className="text-gray-700 hover:text-accent-500 font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/galeri"
                  className="text-gray-700 hover:text-accent-500 font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Galeri
                </Link>
                <Link
                  href="/iletisim"
                  className="text-gray-700 hover:text-accent-500 font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  İletişim
                </Link>
                <Link
                  href="/teklif-al"
                  className="btn-primary inline-block text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Teklif Al
                </Link>
                <a
                  href="tel:05374092406"
                  className="flex items-center text-primary-600 font-semibold"
                >
                  <FaPhone className="mr-2" />
                  0537 409 24 06
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
