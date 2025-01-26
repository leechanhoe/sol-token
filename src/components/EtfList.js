import React from "react";
import "./EtfList.css";

function EtfList() {
  const etfs = [
    {
      id: 1,
      name: "SOL 글로벌탄소배출권선물ICE(합성)",
      price: 11960,
      change: "+0.55%",
    },
    {
      id: 2,
      name: "SOL 유럽탄소배출권선물S&P(H)",
      price: 11700,
      change: "+2.14%",
    },
    {
      id: 3,
      name: "SOL 유럽탄소배출권선물인버스ICE(H)",
      price: 10465,
      change: "-2.47%",
    },
  ];

  return (
    <section className="etf-list">
      <p className="title">탄소배출권 ETF</p>
      <p className="subtitle">탄소배출권 ETF에 투자해보세요</p>

      <ul>
        {etfs.map((etf) => (
          <li key={etf.id} className="etf-item">
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
