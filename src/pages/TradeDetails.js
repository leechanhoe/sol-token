import OrderBook from "../components/OrderBook";
import backIcon from "../assets/arrow.svg";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "./TradeDetails.css";
import Tab from "../components/Tab";
const TradeDetails = () => {
  const navigate = useNavigate();

  const { name } = useParams();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const price = Number(params.get("price"));

  const generateOrderBookData = (basePrice) => {
    const sellData = [];
    const buyData = [];

    const price = Number(basePrice) || 1000;

    const getPriceIncrement = (price) => {
      if (price >= 1000000) return 1000;
      if (price >= 100000) return 100;
      if (price >= 10000) return 50;
      if (price >= 1000) return 10;
      if (price >= 100) return 1;
      return 0.1;
    };

    const priceIncrement = getPriceIncrement(price);

    for (let i = 1; i <= 11; i++) {
      const orderPrice = price + priceIncrement * i;

      const baseAmount = Math.floor(Math.random() * 50) + 1;
      const volumeMultiplier = 1 - i * 0.05;

      sellData.push({
        price: Number(orderPrice.toFixed(2)),
        amount: Math.max(1, Math.floor(baseAmount * volumeMultiplier)),
        total: Number((orderPrice * baseAmount * volumeMultiplier).toFixed(2)),
        type: "sell",
      });
    }

    for (let i = 1; i <= 11; i++) {
      const orderPrice = price - priceIncrement * i;

      const baseAmount = Math.floor(Math.random() * 50) + 1;
      const volumeMultiplier = 1 + i * 0.05;

      buyData.push({
        price: Number(Math.max(0.01, orderPrice).toFixed(2)),
        amount: Math.floor(baseAmount * volumeMultiplier),
        total: Number((orderPrice * baseAmount * volumeMultiplier).toFixed(2)),
        type: "buy",
      });
    }

    const sortedSellData = sellData.sort((a, b) => b.price - a.price);
    const sortedBuyData = buyData.sort((a, b) => a.price - b.price);

    return [...sortedSellData, ...sortedBuyData];
  };

  const orderBookData = generateOrderBookData(price);

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1); // 이전 페이지로 이동
    } else {
      navigate("/"); // 기본 경로로 이동
    }
  };

  return (
    <div>
      <header className="header">
        <div className="header-text">
          <img
            src={backIcon}
            alt="back"
            onClick={handleBack}
            className="back-button"
          />
          <p className="header-title">{name}</p>
          <p className="red">{price.toLocaleString()}원</p>
          <p className="red">2.7%</p>
        </div>
      </header>
      <div className="content">
        <Tab />
        <OrderBook entries={orderBookData} />
      </div>
    </div>
  );
};
export default TradeDetails;
