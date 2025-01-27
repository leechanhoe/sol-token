import React from "react";
import "./Carousel.css";
import carousel from "../assets/carousel.png";

function Carousel() {
  return (
    <div className="carousel">
      <div className="carousel-card">
        <img src={carousel} alt="carousel" />
      </div>
    </div>
  );
}

export default Carousel;
