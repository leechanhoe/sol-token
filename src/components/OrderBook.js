import React from "react";
import "./OrderBook.css";

const OrderBook = ({ entries = [] }) => {
  const maxAmount = 300;

  return (
    <div className="orderBook">
      {entries.map((entry, index) => (
        <div key={index} className={`orderEntry ${entry.type}`}>
          <span
            className={`amount ${entry.type === "sell" ? "left" : "right"}`}
          >
            {entry.amount}개
          </span>
          {entry.type === "sell" && (
            <div
              className="bar leftBar"
              style={{
                width: `${(entry.amount / maxAmount) * 100}%`,
              }}
            />
          )}
          <span className="price">
            {typeof entry.price === "number"
              ? entry.price.toLocaleString()
              : "N/A"}
            원
          </span>
          {entry.type === "buy" && (
            <div
              className="bar rightBar"
              style={{
                width: `${(entry.amount / maxAmount) * 100}%`,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default OrderBook;
