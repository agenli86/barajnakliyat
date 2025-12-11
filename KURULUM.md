# Baraj Nakliyat - Kurulum Rehberi

## 🚀 Hızlı Başlangıç

### 1. Projeyi İndirin
Proje dosyalarını bilgisayarınıza indirin.

### 2. Bağımlılıkları Yükleyin
```bash
cd baraj-nakliyat
npm install
```

### 3. Geliştirme Sunucusunu Başlatın
```bash
npm run dev
```

Tarayıcınızda şu adresi açın: http://localhost:3000

## 📦 Production Build

```bash
npm run build
npm start
```

## 🌐 Hosting (Vercel - Önerilen)

### Vercel ile Deploy (En Kolay)

1. GitHub hesabınıza projeyi yükleyin
2. [Vercel](https://vercel.com) sitesine gidin
3. "Import Project" butonuna tıklayın
4. GitHub repository'nizi seçin
5. Deploy butonuna tıklayın
6. Otomatik deploy edilecek!

### Diğer Hosting Seçenekleri

**Netlify:**
```bash
npm run build
```
Out klasörünü Netlify'a yükleyin

**cPanel/Shared Hosting:**
1. `npm run build` komutu ile build alın
2. `.next` ve `public` klasörlerini sunucuya yükleyin
3. Node.js uygulaması olarak yapılandırın

## 🔧 Özelleştirme

### Renkleri Değiştirme
`tailwind.config.js` dosyasındaki renk paletini düzenleyin:

```js
colors: {
  primary: { ... },  // Mavi tonları
  accent: { ... },   // Turuncu tonları
}
```

### İletişim Bilgilerini Güncelleme

**1. Layout (src/app/layout.tsx):**
- JSON-LD structured data içindeki telefon ve adres
- Metadata içindeki bilgiler

**2. Header (src/components/Header.tsx):**
- Telefon numarası
- Adres bilgisi

**3. Footer (src/components/Footer.tsx):**
- Tüm iletişim bilgileri

**4. StickyActions (src/components/StickyActions.tsx):**
- WhatsApp numarası
- Telefon numarası

### Logo Değiştirme
`public` klasörüne logonuzu ekleyin ve Header component'inde güncelleyin.

### Resimleri Değiştirme
Unsplash URL'lerini kendi resimlerinizle değiştirin:
- Hero slider resimleri: `src/components/HeroSlider.tsx`
- Galeri resimleri: `src/app/galeri/page.tsx`
- Blog resimleri: Blog sayfalarında

## 📝 İçerik Güncelleme

### Blog Yazısı Ekleme

1. `src/app/blog/[slug]/page.tsx` formatında yeni sayfa oluşturun
2. Metadata ekleyin
3. İçeriği yazın
4. `src/app/blog/page.tsx` dosyasına yazı bilgisini ekleyin

### Hizmet Sayfası Ekleme

1. `src/app/hizmetler/[yeni-hizmet]/page.tsx` oluşturun
2. Breadcrumb ve içerik ekleyin
3. Header menüsüne ekleyin

### SEO Güncelleme

Her sayfa için `metadata` export'unu güncelleyin:

```typescript
export const metadata: Metadata = {
  title: 'Sayfa Başlığı - Baraj Nakliyat',
  description: 'Sayfa açıklaması...',
  keywords: 'anahtar, kelimeler',
  openGraph: { ... }
}
```

## 🎨 Stil Değişiklikleri

### Global Stiller
`src/app/globals.css` dosyasında:
- Animasyonlar
- Breadcrumb arka planı
- Scrollbar stilleri
- Utility classes

### Component Stilleri
Tailwind CSS class'ları kullanılıyor. [Tailwind Dokümantasyonu](https://tailwindcss.com)

## 📱 Mobile Uyumluluk

Tüm sayfalar responsive olarak tasarlandı:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🔍 SEO Kontrol Listesi

✅ Her sayfada metadata var
✅ JSON-LD structured data eklendi
✅ Open Graph tags var
✅ Breadcrumb navigasyon
✅ Alt text'ler (resimlerde)
✅ Semantic HTML
✅ Mobile-friendly
✅ Fast loading

## 🐛 Sorun Giderme

### Port 3000 kullanımda hatası:
```bash
npx kill-port 3000
npm run dev
```

### Build hatası:
```bash
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### TypeScript hatası:
```bash
npm run lint
```

## 📞 Destek

Proje ile ilgili sorularınız için:
- Email: info@barajnakliyat.com
- Telefon: 0537 409 24 06

## 🎯 Önemli Dosyalar

- `src/app/layout.tsx` - Ana layout ve SEO metadata
- `src/components/Header.tsx` - Üst menü
- `src/components/Footer.tsx` - Alt bilgi
- `tailwind.config.js` - Renk paleti
- `next.config.js` - Next.js yapılandırması

## 📊 Google Analytics Ekleme

`src/app/layout.tsx` dosyasına ekleyin:

```typescript
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

## 🔐 Güvenlik

- Form validasyonu mevcut
- XSS koruması (Next.js default)
- CSRF koruması için token ekleyin
- Environment variables için `.env.local` kullanın

## ✅ Deployment Checklist

- [ ] Tüm iletişim bilgileri güncellendi
- [ ] Logolar değiştirildi
- [ ] Resimler optimize edildi
- [ ] Meta tags kontrol edildi
- [ ] Google Analytics eklendi
- [ ] Sitemap.xml oluşturuldu
- [ ] robots.txt eklendi
- [ ] SSL sertifikası var
- [ ] Domain ayarlandı
- [ ] Email formu çalışıyor

## 🎉 Başarılı Deploy!

Artık siteniz canlıda! 🚀

www.barajnakliyat.com

---

**Not:** Bu proje Next.js 14 App Router kullanmaktadır. Next.js 13 ve öncesi versiyonlardan farklılıklar içerir.
