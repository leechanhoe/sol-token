import OrderBook from "../components/OrderBook";
import backIcon from "../assets/arrow.svg";
import { useNavigate, useParams } from "react-router-dom";
import "./TradeDetails.css";
import Tab from "../components/Tab";
const TradeDetails = () => {
  const navigate = useNavigate();

  const { name } = useParams();

  const orderBookData = [
    { price: 1128, amount: 50, type: "sell" },
    { price: 1127, amount: 10, type: "sell" },
    { price: 1126, amount: 6, type: "sell" },
    { price: 1125, amount: 20, type: "sell" },
    { price: 1124, amount: 6, type: "sell" },
    { price: 1123, amount: 50, type: "sell" },
    { price: 1122, amount: 10, type: "sell" },
    { price: 1121, amount: 6, type: "sell" },
    { price: 1120, amount: 20, type: "sell" },
    { price: 1119, amount: 10, type: "sell" },
    { price: 1118, amount: 10, type: "sell" },
    { price: 1117, amount: 10, type: "buy" },
    { price: 1116, amount: 6, type: "buy" },
    { price: 1115, amount: 10, type: "buy" },
    { price: 1114, amount: 6, type: "buy" },
    { price: 1113, amount: 36, type: "buy" },
    { price: 1112, amount: 60, type: "buy" },
    { price: 1111, amount: 80, type: "buy" },
    { price: 1110, amount: 10, type: "buy" },
    { price: 1109, amount: 6, type: "buy" },
    { price: 1108, amount: 36, type: "buy" },
    { price: 1107, amount: 60, type: "buy" },
  ];
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
          <p className="red">1117원</p>
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
