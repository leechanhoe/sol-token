import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate import
import "./MenuBar.css";

function MenuBar() {
  const menuItems = [
    { name: "퇴직연금/IRP", icon: "💼", isPopular: true },
    { name: "채권", icon: "📈" },
    { name: "펀드", icon: "📄" },
    { name: "ELS/DLS", icon: "🏴" },
    { name: "탄소배출권", icon: "🌱", link: "/carbon" }, // 탄소배출권 항목에 링크 추가
  ];

  const navigate = useNavigate();

  const handleClick = (link) => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <div className="menu-bar">
      {menuItems.map((item, index) => (
        <div
          className="menu-item"
          key={index}
          onClick={() => handleClick(item.link)} // 클릭 시 해당 링크로 이동
        >
          <div className="menu-icon">{item.icon}</div>
          <div className="menu-label">
            {item.name}
            {item.isPopular && <span className="popular-badge">인기</span>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MenuBar;
