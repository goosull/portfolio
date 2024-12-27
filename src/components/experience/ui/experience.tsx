"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/shared";
import type { Database } from "@/shared";
import { getExperience } from "../api";

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
    <div className="about flex flex-col gap-20">
      <Badge text="# EXPERIENCE" type="primary" className="experience" />
      {experience?.map((exp: Experience) => (
        <div key={exp.id} className="flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6 md:gap-16">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 items-center mb-2">
                <h1 className="text-lg xl:text-3xl font-bold">{exp.exp_company}</h1>
              </div>
              <div className="flex flex-row gap-2 font-pretendard text-sm xl:text-base">
                <span className="font-bold min-w-20">기간</span>
                <p>
                  {exp.exp_start} ~ {exp.exp_end || "현재"}
                </p>
              </div>
              <div className="flex flex-row gap-2 font-pretendard text-sm xl:text-base">
                <span className="font-bold min-w-20">소속</span>
                <p>{exp.exp_department}</p>
              </div>
              <div className="flex flex-row gap-2 font-pretendard text-sm xl:text-base">
                <span className="font-bold min-w-20">직책</span>
                <p>{exp.exp_role}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 items-center mb-2">
                <h1 className="text-lg xl:text-3xl font-bold">업무</h1>
              </div>
              <div className="flex flex-col gap-2 font-pretendard text-sm xl:text-base">
                <span className="font-bold min-w-20">업무내용</span>
                <ul className="list-none ml-5">
                  {Array.isArray(exp.exp_description?.data) &&
                    exp.exp_description.data.map((desc, index) => (
                      <li key={index} className="mb-4">
                        {/* header와 body 각각 스타일링 */}
                        {desc.header && <h2 className="text-base xl:text-xl font-semibold">{desc.header}</h2>}
                        <p className="text-sm xl:text-base">{desc.body}</p>
                      </li>
                    ))}
                  {!Array.isArray(exp.exp_description?.data) && <p>업무 내용이 없습니다.</p>}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
