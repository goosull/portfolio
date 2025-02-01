"use client";

import { useState, useEffect } from "react";
import { IoChevronForwardOutline } from "react-icons/io5";
import { Badge } from "@/shared";
import type { Database } from "@/shared";
import { getExperience } from "../api";
import { FiArrowUpRight } from "react-icons/fi";

type Experience = Database["public"]["Tables"]["Experience"]["Row"];

export const Experience = () => {
  const [experience, setExperience] = useState<Experience[] | null>(null);

  useEffect(() => {
    getExperience().then((data) => {
      console.log(data);
      setExperience(data);
    });
  }, []);

  return (
    <div className="about flex flex-col gap-16 md:gap-20">
      <div className="flex flex-col gap-6 justify-between md:flex-row md:items-end">
        <Badge text="# EXPERIENCE" type="primary" className="experience" />
        <Badge
          text="이력서 보러가기"
          type="outline"
          className="cursor-pointer"
          link="/kim_seungwon_resume.pdf"
          size="m"
        >
          <IoChevronForwardOutline className="font-bold text-[#232323]" />
        </Badge>
      </div>
      {experience?.map((exp: Experience) => (
        <div key={exp.id} className="flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-1 gap-6 md:gap-16">
            <div className="flex flex-col gap-2 md:col-span-2 md:border-r md:pr-6 border-[#232323]">
              <div className="flex flex-row gap-2 items-center mb-2">
                <a
                  className="text-xl xl:text-2xl font-bold flex items-center gap-2 group hover:underline"
                  href={exp.exp_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {exp.exp_company}
                  <FiArrowUpRight className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ease-in-out" />
                </a>
              </div>
              <div className="flex flex-row gap-2 font-pretendard text-base">
                <span className="font-bold min-w-20">기간</span>
                <p>
                  {exp.exp_start} ~ {exp.exp_end || "현재"}
                </p>
              </div>
              <div className="flex flex-row gap-2 font-pretendard text-base">
                <span className="font-bold min-w-20">직책</span>
                <p>
                  {exp.exp_department} {exp.exp_role}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 md:col-span-3 md:pl-6">
              <div className="flex flex-col gap-2 font-pretendard text-base">
                <ul className="list-none">
                  {Array.isArray(exp.exp_description?.data) &&
                    exp.exp_description.data.map((desc, index) => (
                      <li key={index} className="mb-4">
                        {/* header와 body 각각 스타일링 */}
                        {desc.header && (
                          <h2 className="text-base xl:text-lg font-extrabold mb-2">
                            {desc.header}
                          </h2>
                        )}
                        {Array.isArray(desc.body) && desc.body.length == 1 ? (
                          <p className="text-base">{desc.body}</p>
                        ) : desc.body.length > 1 ? (
                          desc.body.map((item, idx) => (
                            <p key={idx} className="text-base">
                              - {item}
                            </p>
                          ))
                        ) : null}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
