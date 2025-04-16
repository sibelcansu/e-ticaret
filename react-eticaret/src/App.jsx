import React, { useEffect, useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const API_URL = "https://fakestoreapi.com/products";
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return <div>App</div>;
};

const Card = (props) => {
  const item = props.item;
  return (
    <div>
      <ul>
        <li>
          <h2>{item.title}</h2>
          <h3>Kategori: {item.category}</h3>
          <h3>Fiyat: {item.price}</h3>
          <img src={item.image} />
        </li>
      </ul>
    </div>
  );
};

export default App;
