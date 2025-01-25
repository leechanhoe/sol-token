import React from "react";
import { useParams } from "react-router-dom";
import "./ProjectDetails.css";
import Header from "../components/Header";

function ProjectDetails() {
  const { id } = useParams(); // URL에서 ID 가져오기

  const projects = [
    { id: 1, code: "PC3029172638912", status: "진행중", location: "대한민국 (KR)", amount: 4000, date: "24.01.01 - 25.01.01" },
    { id: 2, code: "PC3029172638912", status: "진행중", location: "대한민국 (KR)", amount: 4000, date: "24.01.01 - 25.01.01" },
    { id: 3, code: "PC3029172638912", status: "진행중", location: "대한민국 (KR)", amount: 4000, date: "24.01.01 - 25.01.01" },
  ];

  const project = projects.find((p) => p.id === parseInt(id)); // ID로 프로젝트 찾기

  if (!project) {
    return <p>프로젝트를 찾을 수 없습니다.</p>;
  }

  return (
    <section className="project-details">
      <Header />
      <h2>프로젝트를 확인해보세요</h2>
      <div className="project-details-item">
        <div className="project-header">
          <span className="project-status">{project.status}</span>
          <span className="project-code">{project.code}</span>
        </div>
        <div className="project-body">
          <p>{project.location}</p>
          <p>
            <strong>{project.amount}</strong> tCO₂eq
          </p>
          <p>{project.date}</p>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
