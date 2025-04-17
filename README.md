# Ürün Listeleme ve Çeviri Uygulaması

Bu proje, [Fake Store API](https://fakestoreapi.com/) üzerinden alınan ürün verilerini Türkçeye çevirerek, döviz kurunu da dikkate alarak fiyatları Türk Lirasına çeviren basit bir React uygulamasıdır.

## ✨ Özellikler

- Ürün verileri `Fake Store API` üzerinden çekilir.
- Ürün başlığı ve kategorisi `MyMemory API` ile İngilizceden Türkçeye çevirilir.
- Ürün fiyatı anlık kur bilgisine göre `ExchangeRate-API` ile Türk Lirasına çevirilir (`USD -> TRY`)

## 🚀 Kurulum

Projeyi başlatmak için aşağıdaki adımları izleyebilirsiniz:

```bash
# 1. Projeyi klonlayın
git clone https://github.com/kullaniciadi/proje-adi.git

# 2. Proje klasörüne geçin
cd proje-adi

# 3. Bağımlılıkları yükleyin
npm install

# 4. Uygulamayı çalıştırın
npm start
```

## 🛠 Kullanılan Teknolojiler

React – Kullanıcı arayüzü

Fake Store API – Ürün verileri

MyMemory Translation API – Başlık ve kategori çevirisi

ExchangeRate API – USD → TRY dönüşüm oranı

## ⚠️ Notlar

- MyMemory API'nin ücretsiz versiyonu sınırlı sayıda çeviri yapabilir. Bu yüzden çok sık istek gönderilmesi durumunda yanıt gecikebilir veya başarısız olabilir.

- ExchangeRate API'nin versiyonlarına dikkat edilmelidir. Bu projede https://api.exchangerate-api.com/v4/latest/USD kullanılmıştır.
