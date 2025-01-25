import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import ProjectDetails from "./pages/ProjectDetails";
import MarketList from "./components/MarketList"; // 새로 추가할 컴포넌트

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          {/* 기본 화면 */}
          <Route
            path="/"
            element={
              <>
                <ProjectList />
                <MarketList />
              </>
            }
          />
          {/* 프로젝트 목록 화면 */}
          <Route path="/projects" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
