import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectList.css";
import Header from "./Header";

function ProjectList() {
  const navigate = useNavigate();
  const projects = [
    {
      id: 1,
      projectId: "PC3029172638912",
      title: "중고거래를 통한 온실가스 감축 사업",
      amount: 4000,
      date: "24.01.01 - 25.01.01",
    },
    {
      id: 2,
      projectId: "PC3029172638912",
      title: "중고거래를 통한 온실가스 감축 사업",
      amount: 4000,
      date: "24.01.01 - 25.01.01",
    },
    {
      id: 3,
      projectId: "PC3029172638912",
      title: "중고거래를 통한 온실가스 감축 사업",
      amount: 4000,
      date: "24.01.01 - 25.01.01",
    },
  ];

  const handleNavigate = (id) => {
    navigate(`/projects/${id}`); // 프로젝트 ID로 경로 이동
  };

  return (
    <div>
      <Header />
      <section className="project-list">
        <p className="title">프로젝트 현황</p>
        <p className="subtitle">최근 올라온 프로젝트를 확인해 보세요</p>
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-item"
            onClick={handleNavigate}
          >
            {/* 첫 번째 행 */}
            <div className="row" onClick={() => handleNavigate(project.id)}>
              <div className="col">
                <p className="project-id">{project.projectId}</p>
                <p className="project-title">{project.title}</p>
                <p className="project-date">{project.date}</p>
              </div>
              <div className="col">
                <p className="col-title">예상 감축량</p>
                <strong>
                  {project.amount.toLocaleString()}
                  <span className="highlight"> tCO₂eq</span>
                </strong>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ProjectList;
