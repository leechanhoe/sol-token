import React from "react";
import { useNavigate } from "react-router-dom";
import "./EtfList.css";

function EtfList() {
  const navigate = useNavigate();
  const etfs = [
    {
      id: 1,
      name: "SOL CER 프로젝트 3년",
      price: 12500,
      change: "+0.12%",
    },
    {
      id: 2,
      name: "SOL CER 프로젝트 제조업",
      price: 11600,
      change: "-0.88%",
    },
    {
      id: 3,
      name: "SOL 글로벌탄소배출권선물ICE(합성)",
      price: 11960,
      change: "+0.55%",
    },
  ];

  const handleNavigate = (name, price) => {
    navigate(`/trade/${name}?price=${price}`);
  };

  return (
    <section className="etf-list">
      <p className="title">탄소배출권 ETF</p>
      <p className="subtitle">탄소배출권 ETF에 투자해보세요</p>

      <ul>
        {etfs.map((etf) => (
          <li
            key={etf.id}
            className="etf-item"
            onClick={() => handleNavigate(etf.name, etf.price)}
          >
            <span className="name">{etf.name}</span>
            <span className="price">{etf.price.toLocaleString()}</span>
            <span className="change">{etf.change}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default EtfList;
