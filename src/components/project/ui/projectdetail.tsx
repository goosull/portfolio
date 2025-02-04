"use client";

import { useState } from "react";

export const ProjectDetail = () => {
  // 더미 데이터
  const [project] = useState({
    id: "1",
    project_name: "전자상거래 대시보드",
    project_description:
      "대규모 전자상거래 분석 플랫폼을 개발하여 실시간 데이터 분석을 제공하고 성능을 최적화하였습니다.",
    project_start: "2023-03-03",
    project_end: "2023-04-21",
    project_role: "리드 개발자",
    project_team_size: 4,
    project_stack: ["React", "Node.js", "MongoDB", "Redux", "Tailwind CSS"],
    project_contributions: [
      "WebSockets을 활용한 실시간 데이터 분석 대시보드 구현으로 데이터 갱신 속도를 40% 향상.",
      "1M+ 일일 요청을 처리하는 RESTful API를 개발하여 응답 시간을 65% 단축.",
      "자동화된 테스트 프레임워크 구축하여 90%의 코드 커버리지 달성.",
      "코드 리뷰 프로세스를 개선하여 기술 부채를 40% 감소시키고 개발 속도를 35% 향상.",
      "데이터베이스 쿼리 및 인덱스를 최적화하여 평균 쿼리 실행 시간을 2.5초에서 200ms로 감소.",
    ],
    project_image: "https://via.placeholder.com/600x400",
  });

  return (
    <div className="flex flex-col gap-16 md:gap-20 text-[#232323] bg-white px-6 md:px-16 py-12 font-pretendard">
      {/* 프로젝트 타이틀 */}
      <div className="flex flex-col gap-6 md:flex-row md:items-end">
        <h1 className="text-3xl font-bold">{project.project_name}</h1>
      </div>

      {/* 프로젝트 상세 설명 */}
      <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-1 gap-6 md:gap-16">
        {/* 좌측: 프로젝트 정보 */}
        <div className="flex flex-col gap-4 md:col-span-2 md:border-r md:pr-6 border-[#232323]">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">프로젝트 개요</h3>
            <p className="text-[#6B7280]">{project.project_description}</p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">프로젝트 정보</h3>
            <p>
              <span className="font-bold">진행 기간:</span>{" "}
              {project.project_start} ~ {project.project_end}
            </p>
            <p>
              <span className="font-bold">담당 역할:</span>{" "}
              {project.project_role}
            </p>
            <p>
              <span className="font-bold">팀원 수:</span>{" "}
              {project.project_team_size}명
            </p>
          </div>

          {/* 기술 스택 */}
          <div className="flex flex-wrap gap-2">
            {project.project_stack.map((stack, index) => (
              <span
                key={index}
                className="bg-[#F3F4F6] text-[#232323] px-3 py-1 text-sm rounded-full"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>

        {/* 우측: 프로젝트 이미지 */}
        {project.project_image && (
          <div className="md:col-span-3 flex justify-center">
            <img
              src={project.project_image}
              alt={project.project_name}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        )}
      </div>

      {/* 주요 기여 사항 */}
      <div>
        <h3 className="text-xl font-semibold">주요 기여 사항</h3>
        <ul className="list-disc list-inside text-[#6B7280] mt-2">
          {project.project_contributions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
