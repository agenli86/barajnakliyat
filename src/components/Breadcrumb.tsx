import Link from 'next/link'
import { FaHome, FaChevronRight } from 'react-icons/fa'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  title: string
}

export default function Breadcrumb({ items, title }: BreadcrumbProps) {
  return (
    <div className="breadcrumb-bg text-white py-16 relative">
      <div className="container-custom relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">
          {title}
        </h1>
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-sm animate-fadeInUp">
          <Link
            href="/"
            className="flex items-center hover:text-accent-300 transition-colors"
          >
            <FaHome className="mr-1" />
            Anasayfa
          </Link>
          
          {items.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <FaChevronRight className="text-xs opacity-70" />
              {item.href ? (
                <Link href={item.href} className="hover:text-accent-300 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-accent-300 font-semibold">{item.label}</span>
              )}
            </div>
          ))}
        </nav>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-accent-500 via-accent-400 to-accent-500"></div>
    </div>
  )
}
