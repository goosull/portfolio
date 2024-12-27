"use client";

import { useEffect, useState } from "react";
import { ProjectCard } from "..";
import type { Database } from "@/shared";
import { getProject } from "../api";

type Project = Database["public"]["Tables"]["Project"]["Row"];

export const Project = () => {
  const [projects, setProjects] = useState<Project[] | null>(null);

  useEffect(() => {
    getProject(6).then((data) => {
      setProjects(data);
      console.log(data.map((project) => project.project_stack));
    });
  }, []);

  if (!projects) {
    return null;
  }

  return (
    <div className="flex flex-col gap-20">
      <div className="grid gap-8 md:gap-16 md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-1">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.project_title}
            description={project.project_description || ""}
            image={project.project_image || ""}
            link={project.project_path || ""}
            stack={
              typeof project.project_stack === "object" && project.project_stack !== null && "data" in project.project_stack
                ? (project.project_stack as { data: string[] }).data
                : []
            }
            date={{
              start: project.project_start || "",
              end: project.project_end || "",
            }}
          />
        ))}
      </div>
    </div>
  );
};
