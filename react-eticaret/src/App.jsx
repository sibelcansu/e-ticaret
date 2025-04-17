import React, { useEffect, useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  const [translatedItems, setTranslatedItems] = useState([]);
  const [fiyat, setFiyat] = useState(null);

  // API den ürünler çekilir
  useEffect(() => {
    const API_URL = "https://fakestoreapi.com/products";
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);


  //PRICE API
  useEffect(() => {
    const PRICE_API = "https://api.exchangerate-api.com/v4/latest/USD";
    fetch(PRICE_API)
      .then((res) => res.json())
      .then((data) => setFiyat(data.rates.TRY));
  }, []);


  //MYMEMORY API
  useEffect(() => {
    if (items.length === 0) return;

    //metin çevirisi için API kullanılarak fonksiyon tanımlanır.
    const translateText = async (text) => {
      try {
        const response = await fetch(
          `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
            text
          )}&langpair=en|tr`
        );
        const data = await response.json();
        return data.responseData.translatedText;
        
      } catch (error) {
        console.error("Çeviride hata oluştu... ", error);
        
      }
      
    };

    //metinlerin çevrilmesi
    const translateProduct = async () => {
      //map içinde await varsa promise.all() kullan
      const translated = await Promise.all(
        items.map(async (item) => {
          const translatedTitle = await translateText(item.title);
          const translatedCategory = await translateText(item.category);
          return {
            //her ürüne translatedTitle ve translatedCategory alanları eklenir.
            ...item, // .. spread operator
            translatedTitle,
            translatedCategory,
          };
        })
      );

      //çevrilen metinler translatedItem a kaydedilir.
      setTranslatedItems(translated);
    };

    translateProduct();
  }, [items]);

  return (
    <div>
      <h1>Ürün Listesi</h1>
      {translatedItems.map((item) => (
        <Card item={item} fiyat={fiyat} style={{border:"1px solid black"} } />
      ))}
    </div>
  );
};

const Card = (props) => {
  const item = props.item;
  const fiyat =props.fiyat;

  return (
    <div>
      <ul style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <li>
          <h2>{item.translatedTitle}</h2>

          <p>Kategori: {item.translatedCategory} </p>
          <p>Fiyat: {(item.price*(fiyat)).toFixed(2)+" TL"}</p>
          <img src={item.image} width={200} height={200} />
        </li>
      </ul>
    </div>
  );
};

export default App;
