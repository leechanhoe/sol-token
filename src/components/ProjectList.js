import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectList.css";

function ProjectList() {
  const navigate = useNavigate();

  const projects = [
    { id: 1, title: "중고거래를 통한 온실가스 감축 사업", amount: 4000, date: "24.01.01 - 25.01.01" },
    { id: 2, title: "중고거래를 통한 온실가스 감축 사업", amount: 4000, date: "24.01.01 - 25.01.01" },
    { id: 3, title: "중고거래를 통한 온실가스 감축 사업", amount: 4000, date: "24.01.01 - 25.01.01" },
  ];

  const handleNavigate = () => {
    navigate("/projects");
  };

  return (
    <section className="project-list">
      <h2>프로젝트 현황</h2>
      <p>최근 올라온 프로젝트를 확인해 보세요</p>
      {projects.map((project) => (
        <div key={project.id} className="project-item" onClick={handleNavigate}>
          <h3>{project.title}</h3>
          <p>{project.date}</p>
          <p>
            <span>예상 감축량</span> <strong>{project.amount} tCO₂eq</strong>
          </p>
        </div>
      ))}
    </section>
  );
}

export default ProjectList;
