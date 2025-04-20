import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList.jsx";
import ImgCarousel from "../components/ImgCarousel.jsx";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchedItems = ["Sản phẩm 1", "Sản phẩm 2", "Sản phẩm 3"];
    setItems(fetchedItems);
  }, []);

  return (
    <div className="home-content">
      <ImgCarousel />
      <ProductList
        title="Trang chủ"
        nameDanhmuc="Gợi ý hôm nay"
        items={items}
      />
    </div>
  );
};

export default Home;
