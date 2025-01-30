import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ProjectDetails.css";
import backIcon from "../assets/arrow.svg";
import map from "../assets/location.png";
import downloadIcon from "../assets/download.png";
import download from "../assets/downIcon.png";

function ProjectDetails() {
  const { id } = useParams(); // URL에서 ID 가져오기
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "화석연료 기반 차량의 전기차 전환을 통한 온실가스 감축사업",
      code: "PC101523110901",
      status: "신규",
      type: "신규",
      location: "대한민국 (KR)",
      reductionType: "감축 / 이동수단 대체",
      amount: 13750,
      dateStart: "2023.11.03",
      dateEnd: "2033.11.02",
      monitoringDate: "1",
      reductionDateStart: "2022.01.01",
      reductionDateEnd: "2033.11.02",
      method: "전기 차량 도입에 따른 화석연료 절감 사업의 방법론",
      company: "(주)피엠그로우",
      documents: [
        { name: "사업 계획서", url: "https://d1sjg004kl9yle.cloudfront.net/prod/project/204/ko/%ED%94%BC%EC%97%A0%EA%B7%B8%EB%A1%9C%EC%9A%B0_%EC%82%AC%EC%97%85%EA%B3%84%ED%9A%8D%EC%84%9C.pdf" },
        { name: "모니터링 보고서", url: "https://d1sjg004kl9yle.cloudfront.net/prod/project/204/ko/%ED%94%BC%EC%97%A0%EA%B7%B8%EB%A1%9C%EC%9A%B0_%EB%AA%A8%EB%8B%88%ED%84%B0%EB%A7%81_%EB%B3%B4%EA%B3%A0%EC%84%9C.pdf" },
        { name: "타당성 평가 보고서", url: "#" },
        { name: "검증 의견서", url: "https://d1sjg004kl9yle.cloudfront.net/prod/project/204/ko/%5BKFQ%5D_%ED%94%BC%EC%97%A0%EA%B7%B8%EB%A1%9C%EC%9A%B0_%EA%B2%80%EC%A6%9D%EC%9D%98%EA%B2%AC%EC%84%9C.pdf" },
        { name: "인증위원회 결과서", url: "https://d1sjg004kl9yle.cloudfront.net/prod/project/204/ko/%ED%94%BC%EC%97%A0%EA%B7%B8%EB%A1%9C%EC%9A%B0_%EC%9D%B8%EC%A6%9D%EC%9C%84%EC%9B%90%ED%9A%8C_%EA%B2%B0%EA%B3%BC%EC%84%9C.pdf" },
        { name: "기타", url: "#" },
      ],
    },
    {
      id: 2,
      title: "중고거래를 통한 온실가스 감축 사업",
      code: "PC090923011001",
      status: "진행중",
      type: "진행중",
      location: "대한민국 (KR)",
      reductionType: "감축 / 중고거래",
      amount: 750050,
      dateStart: "2023.01.11",
      dateEnd: "2033.01.10",
      monitoringDate: "1",
      reductionDateStart: "2023.02.02",
      reductionDateEnd: "2033.01.10",
      method: "자원순환을 위한 중고거래 방법론",
      company: "주식회사 중고나라",
      documents: [
        { name: "사업 계획서", url: "#" },
        { name: "모니터링 보고서", url: "https://d1sjg004kl9yle.cloudfront.net/prod/project/125/ko/%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%A9%E1%84%82%E1%85%A1%E1%84%85%E1%85%A1+%E1%84%86%E1%85%A9%E1%84%82%E1%85%B5%E1%84%90%E1%85%A5%E1%84%85%E1%85%B5%E1%86%BC+%E1%84%87%E1%85%A9%E1%84%80%E1%85%A9%E1%84%89%E1%85%A5.pdf" },
        { name: "타당성 평가 보고서", url: "#" },
        { name: "검증 의견서", url: "https://d1sjg004kl9yle.cloudfront.net/prod/project/125/ko/%5BKFQ%5D+%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%A9%E1%84%82%E1%85%A1%E1%84%85%E1%85%A1+%E1%84%80%E1%85%A5%E1%86%B7%E1%84%8C%E1%85%B3%E1%86%BC%E1%84%8B%E1%85%B4%E1%84%80%E1%85%A7%E1%86%AB%E1%84%89%E1%85%A5.pdf" },
        { name: "인증위원회 결과서", url: "https://d1sjg004kl9yle.cloudfront.net/prod/project/125/ko/%E1%84%8C%E1%85%AE%E1%86%BC%E1%84%80%E1%85%A9%E1%84%82%E1%85%A1%E1%84%85%E1%85%A1+%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%8C%E1%85%B3%E1%86%BC%E1%84%8B%E1%85%B1%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%92%E1%85%AC+%E1%84%80%E1%85%A7%E1%86%AF%E1%84%80%E1%85%AA%E1%84%89%E1%85%A5.pdf" },
        { name: "기타", url: "#" },
      ],
    },
    {
      id: 3,
      title: "자전거 중고거래에 의한 온실가스 갑축사업",
      code: "PC091123020302",
      status: "진행중",
      type: "진행중",
      location: "대한민국 (KR)",
      reductionType: "감축 / 중고거래",
      amount: 3380,
      dateStart: "2023.01.16",
      dateEnd: "2033.01.15",
      monitoringDate: "1",
      reductionDateStart: "2022.01.01",
      reductionDateEnd: "2032.12.31",
      method: "자원순환을 위한 중고거래 방법론",
      company: "라이트브라더스",
      documents: [
        { name: "사업 계획서", url: "#" },
        { name: "모니터링 보고서", url: "https://d1sjg004kl9yle.cloudfront.net/prod/project/140/ko/%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%90%E1%85%B3%E1%84%87%E1%85%B3%E1%84%85%E1%85%A1%E1%84%83%E1%85%A5%E1%84%89%E1%85%B3+%E1%84%86%E1%85%A9%E1%84%82%E1%85%B5%E1%84%90%E1%85%A5%E1%84%85%E1%85%B5%E1%86%BC+%E1%84%87%E1%85%A9%E1%84%80%E1%85%A9%E1%84%89%E1%85%A5.pdf" },
        { name: "타당성 평가 보고서", url: "#" },
        { name: "검증 의견서", url: "https://d1sjg004kl9yle.cloudfront.net/prod/project/140/ko/%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%90%E1%85%B3%E1%84%87%E1%85%B3%E1%84%85%E1%85%A1%E1%84%83%E1%85%A5%E1%84%89%E1%85%B3+%E1%84%80%E1%85%A5%E1%86%B7%E1%84%8C%E1%85%B3%E1%86%BC%E1%84%8B%E1%85%B4%E1%84%80%E1%85%A7%E1%86%AB%E1%84%89%E1%85%A5.pdf" },
        { name: "인증위원회 결과서", url: "https://d1sjg004kl9yle.cloudfront.net/prod/project/140/ko/%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%90%E1%85%B3%E1%84%87%E1%85%B3%E1%84%85%E1%85%A1%E1%84%83%E1%85%A5%E1%84%89%E1%85%B3+%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%8C%E1%85%B3%E1%86%BC%E1%84%8B%E1%85%B1%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%92%E1%85%AC+%E1%84%80%E1%85%A7%E1%86%AF%E1%84%80%E1%85%AA%E1%84%89%E1%85%A5.pdf" },
        { name: "기타", url: "#" },
      ],
    },
  ];

  const project = projects.find((p) => p.id === parseInt(id)); // ID로 프로젝트 찾기

  if (!project) {
    return <p>프로젝트를 찾을 수 없습니다.</p>;
  }

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
        <img
          src={backIcon}
          alt="back"
          onClick={handleBack}
          className="back-button"
        />
        <p className="title">{project.title}</p>
      </header>
      <section className="project-details">
        <br></br>
        <div className="project-detail-flex">
          <p className="title">프로젝트 상세</p>
          <p className="map-flex">
            <img src={map} alt="지도" className="map" />
            {project.location}
          </p>
        </div>

        <div className="project-info">
          <p className="project-info-flex">
            <p>감축 / 세부분야</p> {project.reductionType}
          </p>
          <p className="project-info-flex">
            <p>예상 감축량</p> <span>{project.amount} tCO₂eq</span>
          </p>
          <p className="project-info-flex">
            <p>모니터링 회차</p> {project.monitoringDate}
          </p>
          <p className="project-info-flex">
            <p>시작 / 종료일</p> {project.dateStart} ~ {project.dateEnd}
          </p>
          <p className="project-info-flex">
            <p>감축기간 시작 / 종료일</p> {project.reductionDateStart} ~{" "}
            {project.reductionDateEnd}
          </p>
          <p className="project-info-flex">
            <p>방법</p> {project.method}
          </p>
          <p className="project-info-flex">
            <p>프로젝트 상태</p> {project.status}
          </p>
          <p className="project-info-flex">
            <p>프로젝트 ID</p> {project.code}
          </p>
          <p className="project-info-flex">
            <p>프로젝트 실행 기업</p> {project.company}
          </p>
        </div>

        <div className="project-documents">
          <div className="project-detail-flex">
            <p className="title">투자관련문서</p>
          </div>
          <ul>
            {project.documents
              .filter((doc) => doc.url !== "#") // "#"을 가진 항목은 제외
              .map((doc, index) => (
                <li key={index} className="document-item">
                  <span className="document-icon">
                    <img src={downloadIcon} alt="download" />
                  </span>
                  <span className="document-name">{doc.name}</span>
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-icon"
                  >
                    <img src={download} alt="download" />
                  </a>
                </li>
              ))}
          </ul>
        </div>
        <div className="button-group">
          {project.type === "신규" ? (
            // '신규'일 때는 초록색 버튼 하나
            <button className="invest-button">프로젝트 투자하기</button>
          ) : (
            // '진행중'일 때는 기존의 두 개의 버튼
            <>
              <button className="purchase-button">보유권증서 구매</button>
              <button className="sell-button">보유권증서 판매</button>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default ProjectDetails;
