import React from "react";
import "./InformationList.css";

function InformationList() {
  const informationItems = [
    { id: 1, icon: "💵", title: "특판채권 (1월 특판 채권)", date: "2025.01.24" },
    { id: 2, icon: "🎥", title: "다시 미국지수 투자에 나선 ETF", date: "2025.01.23" },
    { id: 3, icon: "💵", title: "이번주 주목할 채권 (단기, 1월 4주)", date: "2025.01.22" },
  ];

  return (
    <section className="information-list">
      <h2 className="information-title">
        돈이 되는 정보 <span className="new-badge">N</span>
      </h2>
      <ul>
        {informationItems.map((item) => (
          <li key={item.id} className="information-item">
            <div className="info-icon">{item.icon}</div>
            <div className="info-content">
              <h3 className="info-title">{item.title}</h3>
              <p className="info-date">{item.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default InformationList;
