"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/shared";
import type { Database } from "@/shared";
import { getProject } from "../api";
import { FiArrowUpRight, FiLink } from "react-icons/fi";

type Project = Database["public"]["Tables"]["Project"]["Row"];

export const ProjectList = () => {
  const [projects, setProjects] = useState<Project[] | null>(null);

  useEffect(() => {
    getProject({ orderBy: "project_end" }).then((data) => {
      setProjects(data);
      console.log(data.map((project) => project.project_stack));
    });
  }, []);

  if (!projects) {
    return null;
  }

  return (
    <div className="flex flex-col gap-16 md:gap-20">
      <div className="flex flex-col gap-6 justify-between md:flex-row md:items-end">
        <Badge text="# ALL PROJECTS" type="primary" className="project" />
      </div>
      <div className="flex flex-col text-[#232323] font-pretendard">
        {/* Header */}
        <div className="grid grid-cols-12 text-base font-semibold text-[#232323] gap-6 border-b pb-4">
          <span className="col-span-3 sm:col-span-2 lg-col-span-1 xl:col-span-1">
            연도
          </span>
          <span className="col-span-9 sm:col-span-5 lg:col-span-3 flex items-center gap-1">
            프로젝트 이름
          </span>
          <span className="col-span-2 xl:col-span-1 hidden lg:block">소속</span>
          <span className="col-span-4 hidden xl:block">기술 스택</span>
          <span className="lg:col-span-3 hidden md:block lg:flex items-center gap-1">
            링크
          </span>
        </div>
        {projects.map((project) => (
          <div
            key={project.id}
            className="grid grid-cols-12 gap-6 items-start border-b pb-4 pt-4"
          >
            {/* Year */}
            <span className="col-span-3 sm:col-span-2 lg-col-span-1 xl:col-span-1 text-base  text-[#232323] font-medium">
              {new Date(project.project_end || "").getFullYear()}
            </span>

            {/* Project */}
            <a
              rel="noopener noreferrer"
              className="col-span-9 sm:col-span-5 lg:col-span-3 text-base text-[#232323] font-bold hover:underline flex flex-row items-center gap-2 group"
              href={`./${project.project_path}`}
            >
              <span>{project.project_title}</span>
              <FiArrowUpRight className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ease-in-out text-xl" />
            </a>

            {/* Made at - visible on lg */}
            <span className="col-span-2 xl:col-span-1 text-base text-[#232323] hidden lg:block">
              {project.project_organization || ""}
            </span>

            {/* Built with - visible on lg */}
            <div className="col-span-4 flex-wrap gap-2 hidden xl:flex">
              {typeof project.project_stack === "object" &&
              project.project_stack !== null &&
              "data" in project.project_stack
                ? (project.project_stack as { data: string[] }).data.map(
                    (item) => (
                      <Badge key={item} text={item} size="s" type="disabled" />
                    )
                  )
                : []}
            </div>

            {/* Link - visible on sm */}
            <div className="lg:col-span-3 hidden text-base sm:flex flex-row items-center gap-2 group hover:underline text-[#565656]">
              <a
                href={project.project_url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-2"
              >
                {project.project_url ? (
                  <>
                    <span>{project.project_url}</span>
                    <FiLink />
                  </>
                ) : null}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
