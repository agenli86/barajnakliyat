'use client'

import { useState } from 'react'
import Link from 'next/link'
import { announcement } from '@/data/announcement'
import { FaTimes, FaBullhorn } from 'react-icons/fa'

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true)

  // Duyuru aktif değilse veya kullanıcı kapattıysa gösterme
  if (!announcement.active || !isVisible) {
    return null
  }

  // Renk tipleri
  const colors = {
    success: 'bg-green-600 border-green-700',
    warning: 'bg-orange-600 border-orange-700',
    info: 'bg-blue-600 border-blue-700',
    error: 'bg-red-600 border-red-700',
  }

  const bgColor = colors[announcement.type as keyof typeof colors] || colors.info

  return (
    <div className={`${bgColor} border-b-2 md:border-b-2 md:border-t-0 border-t-2 py-3 relative md:static fixed bottom-0 left-0 right-0 z-50`}>
      <div className="container-custom">
        <div className="flex items-center justify-between gap-2 md:gap-4">
          {/* Sol - İkon + Mesaj */}
          <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
            <FaBullhorn className="text-white text-lg md:text-xl flex-shrink-0 animate-pulse" />
            <div className="text-white text-sm md:text-base min-w-0">
              <span className="hidden md:inline font-semibold text-sm mr-2">{announcement.date}</span>
              {announcement.link ? (
                <Link 
                  href={announcement.link}
                  className="hover:underline line-clamp-2"
                >
                  {announcement.message}
                </Link>
              ) : (
                <span className="line-clamp-2">{announcement.message}</span>
              )}
            </div>
          </div>

          {/* Sağ - Kapat Butonu */}
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:bg-white/20 p-1.5 md:p-2 rounded-full transition-colors flex-shrink-0"
            aria-label="Duyuruyu Kapat"
          >
            <FaTimes className="text-sm md:text-base" />
          </button>
        </div>
      </div>
    </div>
  )
}
