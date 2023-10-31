import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/CardList";
import Navbar from "./components/Navbar";

function App() {
  const [shopData, setShopData] = useState(null);

  useEffect(() => {
    fetch("https://ioayoub.fr/api/eshop")
      .then((res) => res.json())
      .then((data) => setShopData(data));
  }, []);

  console.log(shopData);

  return (
    <>
      <Navbar />
      <CardList />
      {shopData &&
        shopData.map((s) => <img src={s.picture_resized} key={s.id} />)}
    </>
  );
}

export default App;
