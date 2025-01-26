import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate import
import "./Header.css";
import backIcon from "../assets/arrow.svg";
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
      <img
        src={backIcon}
        alt="back"
        onClick={handleBack}
        className="back-button"
      />
      <p className="title">탄소배출권 거래하기</p>
    </header>
  );
}

export default Header;
