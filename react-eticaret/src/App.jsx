import React, { useEffect, useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const API_URL = "https://fakestoreapi.com/products";
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div>
      <h1>Ürün Listesi</h1>
      {items.map((item)=>
      <Card item={item}/>
      )}
    </div>

  );
};

const Card = (props) => {
  const item = props.item;
  return (
    <div>
      
      <ul>
        <li>
          <h2>{item.title}</h2>
          <p>Kategori: {item.category}</p>
          <p>Fiyat: {item.price}</p>
          <img src={item.image} width={200} height={200} />
        </li>
      </ul>
    </div>
  );
};

export default App;
