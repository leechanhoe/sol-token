import React from "react";
import { useNavigate } from "react-router-dom";
import "./MarketList.css";

function MarketList() {
  const navigate = useNavigate();
  const markets = [
    { id: 1, name: "KAU24", price: 9500, change: "+1.28%" },
    { id: 2, name: "KOC22-27", price: 11600, change: "+2.56%" },
    { id: 3, name: "i-KOC22-27", price: 10000, change: "+1.56%" },
  ];

  const handleNavigate = (name, price) => {
    navigate(`/trade/${name}?price=${price}`);
  };

  return (
    <section className="market-list">
      <p className="title">탄소배출권 시장</p>
      <p className="subtitle">프로젝트를 통해 얻은 크레딧을 거래해보세요</p>

      <ul>
        {markets.map((market) => (
          <li
            key={market.id}
            onClick={() => handleNavigate(market.name, market.price)}
            className="market-item"
          >
            <span className="name">{market.name}</span>
            <span className="price">{market.price.toLocaleString()}</span>
            <p className="change">{market.change}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MarketList;
