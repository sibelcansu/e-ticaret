import React, { useEffect, useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  const [translatedItems, setTranslatedItems] = useState([]);
  const [exchange, setExchange] = useState(null);


  useEffect(() => {
    const API_URL = "https://fakestoreapi.com/products";
    fetch(API_URL)
      .then((res) => res.json())
      .then((veri) => setItems(veri));
  }, []);

  useEffect(() => {
    if(items.length===0) return;
    const translateText = async (text) => {
      const response = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          text
        )}&langpair=en|tr`
      );
      const data = await response.json();
      return data.responseData.translatedText;
    };

    const translateProduct=async()=>{
      const translated=await Promise.all(
      items.map(async (item)=>{
        const translatedTitle=await translateText(item.title);
        const translatedCategory=await translateText(item.category);
        return {
          ...item,
          translatedTitle,
          translatedCategory,
        };
      })
    );
      setTranslatedItems(translated);
    };

    translateProduct();
    
  }, [items])
  

  return (
    <div>
      <h1>Ürün Listesi</h1>
      {translatedItems.map((item) => (
        <Card item={item} />
      ))}
    </div>
  );
};

const Card = (props) => {
  const item = props.item;

  return (
    <div>
      <ul style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <li>
          <h2>{item.translatedTitle}</h2>

          <p>Kategori: {item.translatedCategory} </p>
          <p>Fiyat: ${item.price}</p>
          <img src={item.image} width={200} height={200} />
        </li>
      </ul>
    </div>
  );
};

export default App;
