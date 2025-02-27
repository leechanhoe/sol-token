import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Carousel from "./components/Carousel";
import MenuBar from "./components/MenuBar";
import InformationList from "./components/InformationList";

import ProjectList from "./components/ProjectList";
import MarketList from "./components/MarketList";
import EtfList from "./components/EtfList";
import ProjectDetails from "./pages/ProjectDetails";
import TradeDetails from "./pages/TradeDetails";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* 새로운 메인 화면 */}
          <Route
            path="/"
            element={
              <>
                <header className="app-header">
                  <div className="menu-tabs">
                    <span>자산</span>
                    <span>주식</span>
                    <span>ETF</span>
                    <span className="active">연금/상품</span>
                  </div>
                  <div className="icons">
                    <span>👤</span>
                    <span>🔔</span>
                    <span>🔍</span>
                  </div>
                </header>
                <Carousel />
                <MenuBar />
                <InformationList />
              </>
            }
          />
          {/* 기존 화면 (탄소배출권 경로) */}
          <Route
            path="/carbon"
            element={
              <>
                <ProjectList />
                <MarketList />
                <EtfList />
              </>
            }
          />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/trade/:name" element={<TradeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
