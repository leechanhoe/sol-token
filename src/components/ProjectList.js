import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectList.css";
import Header from "./Header";

function ProjectList() {
  const navigate = useNavigate();
  const projects = [
    {
      id: 1,
      projectId: "PC302124062701",
      title: "롯데마트 수리서비스에 따른 온실가스 감축 사업",
      amount: 4000,
      date: "24.06.27 - 27.12.31",
      type: "신규",
    },
    {
      id: 2,
      projectId: "PC090923011001",
      title: "중고거래를 통한 온실가스 감축 사업",
      amount: 750050,
      date: "23.01.11 - 33.01.10",
      type: "진행중",
    },
    {
      id: 3,
      projectId: "PC091123020302",
      title: "자전거 중고거래에 의한 온실가스 갑축사업",
      amount: 3380,
      date: "23.01.16 - 33.01.15",
      type: "진행중",
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
            onClick={() => handleNavigate(project.id)}
          >
            {/* 첫 번째 행 */}
            <div className="row">
              <div className="col">
                <div className="col-flex">
                  <span
                    className={`type ${
                      project.type === "진행중"
                        ? "type-in-progress"
                        : "type-new"
                    }`}
                  >
                    {project.type}
                  </span>
                  <p className="project-id">{project.projectId}</p>
                </div>
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
