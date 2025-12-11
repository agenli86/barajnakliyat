import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyActions from '@/components/StickyActions'
import AnnouncementBanner from '@/components/AnnouncementBanner'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Baraj Nakliyat - Adana Evden Eve Nakliyat | Güvenilir Taşımacılık',
  description: 'Baraj Nakliyat, Adana\'da evden eve nakliyat, ev taşıma, asansörlü taşımacılık hizmetleri sunmaktadır. Uygun fiyatlarla profesyonel nakliyat çözümleri için bizi arayın: 0537 409 24 06',
  keywords: 'ev taşıma, nakliyat, evden eve nakliyat, evden eve nakliyat fiyatları, taşımacılık, evden eve nakliyat süreci, ev taşıma fiyatları, Adana nakliyat, Çukurova nakliyat, asansörlü taşımacılık',
  authors: [{ name: 'Baraj Nakliyat' }],
  creator: 'Baraj Nakliyat',
  publisher: 'Baraj Nakliyat',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://barajnakliyat.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Baraj Nakliyat - Adana Evden Eve Nakliyat | Güvenilir Taşımacılık',
    description: 'Adana\'nın güvenilir nakliyat firması. Evden eve nakliyat, ev taşıma ve asansörlü taşımacılık hizmetleri.',
    url: 'https://barajnakliyat.com',
    siteName: 'Baraj Nakliyat',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Baraj Nakliyat - Adana Evden Eve Nakliyat',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baraj Nakliyat - Adana Evden Eve Nakliyat',
    description: 'Adana\'nın güvenilir nakliyat firması. Profesyonel ev taşıma hizmetleri.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={inter.variable}>
        <AnnouncementBanner />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <StickyActions />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MovingCompany',
              name: 'Baraj Nakliyat',
              image: 'https://barajnakliyat.com/logo.png',
              '@id': 'https://barajnakliyat.com',
              url: 'https://barajnakliyat.com',
              telephone: '+905374092406',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Çukurova',
                addressLocality: 'Adana',
                addressCountry: 'TR',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 37.0,
                longitude: 35.3213,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                  'Sunday',
                ],
                opens: '08:00',
                closes: '20:00',
              },
              sameAs: [
                'https://www.facebook.com/barajnakliyat',
                'https://www.instagram.com/barajnakliyat',
              ],
              priceRange: '$$',
              areaServed: {
                '@type': 'City',
                name: 'Adana',
              },
              description: 'Adana\'da evden eve nakliyat, ev taşıma ve asansörlü taşımacılık hizmetleri.',
            }),
          }}
        />
      </body>
    </html>
  )
}
