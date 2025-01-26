import React, { useState } from "react";
import "./Tab.css";
const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "호가" },
    { label: "차트" },
    { label: "토론" },
    { label: "체결" },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`tab ${index === activeTab ? "active" : ""}`}
          onClick={() => handleTabClick(index)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
};

export default Tab;
