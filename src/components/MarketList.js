import React from "react";
import "./MarketList.css";

function MarketList() {
  const markets = [
    { id: 1, name: "탄소배출권", price: 12000, change: "2.56%" },
    { id: 2, name: "KAU25", price: 11400, change: "2.56%" },
    { id: 3, name: "S&P GSCI Global Voluntary Carbon Liquidity Weighted (USD)", price: 11400, change: "2.56%" },
  ];

  return (
    <section className="market-list">
      <h2>탄소배출권 시장</h2>
      <p>프로젝트를 통해 얻은 크레딧을 거래해보세요</p>
      <ul>
        {markets.map((market) => (
          <li key={market.id} className="market-item">
            <span>{market.name}</span>
            <span className="price">{market.price.toLocaleString()} 원</span>
            <span className="change">{market.change}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MarketList;
