"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getProject } from "../api";
import { Badge, type Database } from "@/shared";
import { GrGithub } from "react-icons/gr";
import { CiGlobe } from "react-icons/ci";

type Project = Database["public"]["Tables"]["Project"]["Row"];

export const ProjectDetail = () => {
  const path = usePathname();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    getProject({ path }).then((data) => {
      console.log(data, "data");
      setProject(data[0]);
    });
  }, [path]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {project && (
        <div className="flex flex-col gap-16 md:gap-20 text-[#232323] bg-white px-6 md:px-16 py-12 font-pretendard">
          {/* 프로젝트 타이틀 */}
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <h1 className="text-3xl font-bold">{project.project_title}</h1>
            <div className="flex gap-2">
              {project.project_git && (
                <GrGithub
                  className="text-3xl cursor-pointer"
                  onClick={() =>
                    project.project_git &&
                    window.open(project.project_git, "_blank")
                  }
                />
              )}
              {project.project_url && (
                <CiGlobe
                  className="text-3xl cursor-pointer"
                  onClick={() =>
                    project.project_url &&
                    window.open(project.project_url, "_blank")
                  }
                />
              )}
            </div>
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
              </div>

              {/* 기술 스택 */}
              <div className="flex flex-wrap gap-2">
                {typeof project.project_stack === "object" &&
                project.project_stack !== null &&
                "data" in project.project_stack
                  ? (project.project_stack as { data: string[] }).data.map(
                      (stack, index) => (
                        <Badge
                          key={index}
                          text={stack}
                          size="s"
                          type="disabled"
                        />
                      )
                    )
                  : null}
              </div>
            </div>

            {/* 우측: 프로젝트 이미지 */}
            {project.project_image && (
              <div className="md:col-span-3 flex justify-center">
                <img
                  src={project.project_image}
                  alt={project.project_title}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            )}
          </div>

          {/* 주요 기여 사항 */}
          <div>
            <h3 className="text-xl font-semibold">주요 기여 사항</h3>
            <ul className="list-disc list-inside text-[#6B7280] mt-2">
              {project.project_contributions?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
