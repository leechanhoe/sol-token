import React from "react";
import "./ProjectDetails.css";

function ProjectDetails() {
  const projects = [
    { id: 1, code: "PC3029172638912", status: "진행중", location: "대한민국 (KR)", amount: 4000, date: "24.01.01 - 25.01.01" },
    { id: 2, code: "PC3029172638912", status: "진행중", location: "대한민국 (KR)", amount: 4000, date: "24.01.01 - 25.01.01" },
    { id: 3, code: "PC3029172638912", status: "진행중", location: "대한민국 (KR)", amount: 4000, date: "24.01.01 - 25.01.01" },
  ];

  return (
    <section className="project-details">
      <h2>프로젝트를 확인해보세요</h2>
      {projects.map((project) => (
        <div key={project.id} className="project-details-item">
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
      ))}
    </section>
  );
}

export default ProjectDetails;
