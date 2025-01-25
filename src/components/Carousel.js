import React from "react";
import "./Carousel.css";

function Carousel() {
  return (
    <div className="carousel">
      <div className="carousel-card">
        <h5>타사 DC/IRP 실물이전</h5>
        <h2>타사에 있는 퇴직연금 상품 해지 없이 가져오세요</h2>
        <button>IRP 계좌 개설하기 ➔</button>
      </div>
      <div className="carousel-dots">
        <span className="active-dot">●</span>
        <span>○</span>
        <span>○</span>
      </div>
    </div>
  );
}

export default Carousel;
