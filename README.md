# Baraj Nakliyat - Next.js Web Sitesi

Modern, SEO uyumlu ve kullanıcı dostu nakliyat web sitesi.

## 🚀 Özellikler

- ✅ **Next.js 14** (App Router)
- ✅ **TypeScript** desteği
- ✅ **Tailwind CSS** ile modern tasarım
- ✅ **SEO optimizasyonu** (Metadata, JSON-LD, Open Graph)
- ✅ **Responsive** tasarım (Mobil uyumlu)
- ✅ **Modern Slider** (Swiper.js)
- ✅ **Breadcrumb** navigasyon (arka planlı)
- ✅ **Blog sistemi** (Sidebar ile)
- ✅ **Yapışkan WhatsApp & Arama** butonları
- ✅ **Hizmetler sayfası** (Açılır menü)
- ✅ **Teklif formu**
- ✅ **İletişim sayfası** (Harita ile)
- ✅ **Galeri sistemi**

## 📁 Proje Yapısı

```
baraj-nakliyat/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Ana layout (SEO metadata)
│   │   ├── page.tsx            # Anasayfa
│   │   ├── hakkimizda/         # Hakkımızda sayfası
│   │   ├── hizmetler/          # Hizmetler sayfaları
│   │   │   └── asansorlu-tasimacilik/
│   │   ├── blog/               # Blog sayfaları
│   │   │   └── tasinma-ipuclari/
│   │   ├── galeri/             # Galeri sayfası
│   │   ├── teklif-al/          # Teklif formu
│   │   └── iletisim/           # İletişim sayfası
│   └── components/
│       ├── Header.tsx          # Üst menü
│       ├── Footer.tsx          # Alt bilgi
│       ├── HeroSlider.tsx      # Ana slider
│       ├── Breadcrumb.tsx      # Breadcrumb navigasyon
│       ├── BlogSidebar.tsx     # Blog sidebar
│       └── StickyActions.tsx   # Yapışkan butonlar
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 🎨 Renk Paleti

- **Primary (Mavi):** #2563eb, #1d4ed8, #1e40af
- **Accent (Turuncu):** #f97316, #ea580c, #c2410c
- **Background:** Beyaz, açık gri tonları

## 📄 Sayfalar

### Anasayfa
- Modern slider (3 slide)
- Hizmetler bölümü
- SEO odaklı içerik
- Özellikler
- Müşteri yorumları
- CTA (Call to Action) bölümleri

### Hakkımızda
- Firma bilgileri
- Misyon & Vizyon
- Değerler
- Başarılar (istatistikler)
- Neden biz?

### Hizmetler
- Asansörlü Taşımacılık (detaylı sayfa)
- Evden Eve Nakliyat
- Ofis Taşımacılığı
- Parça Eşya Taşıma

### Blog
- Blog listesi (pagination)
- Sidebar (son yazılar, kategoriler, etiketler, arama)
- Blog detay sayfası (örnek: Taşınma İpuçları)
- Sosyal medya paylaşım butonları

### Galeri
- Grid düzeni
- Kategori filtreleme
- Hover efektleri

### Teklif Al
- Detaylı form
- İletişim bilgileri
- Testimonial

### İletişim
- İletişim formu
- İletişim bilgileri
- Sosyal medya linkleri
- Google Maps entegrasyonu

## 🛠️ Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

3. Tarayıcıda açın:
```
http://localhost:3000
```

## 📦 Build

Production build için:
```bash
npm run build
npm start
```

## 🎯 SEO Özellikleri

- ✅ Metadata her sayfada optimize edilmiş
- ✅ JSON-LD structured data (MovingCompany)
- ✅ Open Graph tags
- ✅ Twitter Card
- ✅ Breadcrumb navigasyon
- ✅ Semantic HTML
- ✅ Alt text'ler
- ✅ Mobile-friendly
- ✅ Fast loading

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🔧 Teknolojiler

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Swiper.js
- React Icons

## 📞 İletişim Bilgileri

- **Telefon:** 0537 409 24 06
- **Adres:** Çukurova, Adana
- **Çalışma Saati:** 7/24

## 📝 Notlar

- Tüm formlar client-side validation ile çalışır
- WhatsApp ve telefon butonları sticky olarak sağ altta
- Slider otomatik oynatma (5 saniye)
- Modern animasyonlar ve hover efektleri
- Breadcrumb her sayfada arka plan ile
- Blog sidebar tüm blog sayfalarında ortak

## 🚀 Geliştirme Fikirleri

- [ ] Admin paneli entegrasyonu
- [ ] Online ödeme sistemi
- [ ] Canlı destek (chatbot)
- [ ] Müşteri paneli (takip sistemi)
- [ ] Çoklu dil desteği
- [ ] Dark mode
- [ ] PWA desteği

## 📄 Lisans

Bu proje Baraj Nakliyat için geliştirilmiştir.
