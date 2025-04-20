import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";
import "../styles/components/ImgCarousel.css";
const ImgCarousel = () => {
  const navigate = useNavigate();
  const images = [
    {
      src: "/assets/sach.jpg",
      alt: "Sách",
      category: "/sach",
    },
    {
      src: "/assets/aophong.jpg",
      alt: "Áo phông",
      category: "/thoitrang",
    },
    {
      src: "/assets/dochoi.jpg",
      alt: "Đồ chơi",
      category: "/dochoi",
    },
  ];

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      interval={3000}
      showStatus={false}
      onClickItem={(index) => handleClick(images[index].category)}
      className="carousel-wrapper"
    >
      {images.map((img, index) => (
        <div key={index} className="carousel-slide">
          <img src={img.src} alt={img.alt} className="carousel-img" />
          <p className="legend">{img.alt}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default ImgCarousel;
