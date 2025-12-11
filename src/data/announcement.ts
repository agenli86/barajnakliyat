// Duyuru sistemi - Buradan kolayca güncelleyebilirsiniz
// active: true/false ile duyuruyu aktif/pasif yapabilirsiniz

export const announcement = {
  active: true, // false yaparsanız duyuru görünmez
  date: '7 Aralık 2024', // Tarih
  message: '🎉 Aralık Ayı Kampanyası: Tüm ilçelerde %15 indirim! Hemen teklif alın.', // Duyuru mesajı
  link: '/teklif-al', // Tıklanınca nereye gidecek (opsiyonel)
  type: 'success', // success, warning, info, error (renk değişir)
}

// Geçmiş duyurular (örnek)
export const pastAnnouncements = [
  {
    date: '5 Aralık 2024',
    message: 'Kozan bölgesinde yeni ofisimiz açıldı!',
  },
  {
    date: '1 Aralık 2024',
    message: 'Kış aylarında özel asansörlü nakliyat fiyatları.',
  },
]
