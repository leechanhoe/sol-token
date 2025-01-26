import React from "react";
import { useParams } from "react-router-dom";
import "./ProjectDetails.css";
import Header from "../components/Header";

function ProjectDetails() {
  const { id } = useParams(); // URL에서 ID 가져오기

  const projects = [
    {
      id: 1,
      code: "PC302124062701",
      status: "Certification Pending",
      location: "대한민국 (KR)",
      amount: 4000,
      dateStart: "2024.06.27",
      dateEnd: "2027.12.31",
      monitoringDate: "-",
      reductionDateStart: "2023.01.01",
      reductionDateEnd: "2027.12.31",
      method: "대체사업의 방법론",
      company: "롯데하이마트",
      documents: [
        { name: "사업 계획서", url: "#" },
        { name: "모니터링 보고서", url: "#" },
        { name: "타당성 평가 보고서", url: "#" },
        { name: "검증 의견서", url: "#" },
        { name: "인증위원회 결과서", url: "#" },
        { name: "기타", url: "#" },
      ],
    },
    {
      id: 2,
      code: "PC302124062701",
      status: "Certification Pending",
      location: "대한민국 (KR)",
      amount: 4000,
      dateStart: "2024.06.27",
      dateEnd: "2027.12.31",
      monitoringDate: "-",
      reductionDateStart: "2023.01.01",
      reductionDateEnd: "2027.12.31",
      method: "대체사업의 방법론",
      company: "롯데하이마트",
      documents: [
        { name: "사업 계획서", url: "#" },
        { name: "모니터링 보고서", url: "#" },
        { name: "타당성 평가 보고서", url: "#" },
        { name: "검증 의견서", url: "#" },
        { name: "인증위원회 결과서", url: "#" },
        { name: "기타", url: "#" },
      ],
    },
    {
      id: 3,
      code: "PC302124062701",
      status: "Certification Pending",
      location: "대한민국 (KR)",
      amount: 4000,
      dateStart: "2024.06.27",
      dateEnd: "2027.12.31",
      monitoringDate: "-",
      reductionDateStart: "2023.01.01",
      reductionDateEnd: "2027.12.31",
      method: "대체사업의 방법론",
      company: "롯데하이마트",
      documents: [
        { name: "사업 계획서", url: "#" },
        { name: "모니터링 보고서", url: "#" },
        { name: "타당성 평가 보고서", url: "#" },
        { name: "검증 의견서", url: "#" },
        { name: "인증위원회 결과서", url: "#" },
        { name: "기타", url: "#" },
      ],
    },
  ];

  const project = projects.find((p) => p.id === parseInt(id)); // ID로 프로젝트 찾기

  if (!project) {
    return <p>프로젝트를 찾을 수 없습니다.</p>;
  }

  return (
    <section className="project-details">
      <Header />
      <h2>프로젝트 상세</h2>
      <div className="project-info">
        <p><strong>감축 / 세부분야:</strong> 감축 / 재활용</p>
        <p><strong>예상 감축량:</strong> {project.amount} tCO₂eq</p>
        <p><strong>모니터링 회차:</strong> {project.monitoringDate}</p>
        <p>
          <strong>시작 / 종료일:</strong> {project.dateStart} ~ {project.dateEnd}
        </p>
        <p>
          <strong>감축기간 시작 / 종료일:</strong> {project.reductionDateStart} ~ {project.reductionDateEnd}
        </p>
        <p><strong>방법론:</strong> {project.method}</p>
        <p><strong>프로젝트 상태:</strong> {project.status}</p>
        <p><strong>프로젝트 ID:</strong> {project.code}</p>
        <p><strong>프로젝트 실행 기업:</strong> {project.company}</p>
      </div>

      <div className="project-documents">
        <h3>투자 관련 문서</h3>
        <ul>
          {project.documents.map((doc, index) => (
            <li key={index} className="document-item">
              <span className="document-icon">📄</span>
              <span className="document-name">{doc.name}</span>
              <a href={doc.url} target="_blank" rel="noopener noreferrer" className="download-icon">⬇️</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="button-group">
        <button className="purchase-button">보유권증서 구매</button>
        <button className="sell-button">보유권증서 판매</button>
      </div>
    </section>
  );
}

export default ProjectDetails;
