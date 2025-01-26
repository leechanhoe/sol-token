import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate import
import "./Header.css";

function Header() {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1); // 이전 페이지로 이동
    } else {
      navigate("/"); // 기본 경로로 이동
    }
  };
  

  return (
    <header className="header">
      <button className="back-button" onClick={handleBack}>←</button>
      <h1>탄소배출권 투자하기</h1>
    </header>
  );
}

export default Header;
