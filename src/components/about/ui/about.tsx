"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/shared";
import type { Database } from "@/shared";
import { getAbout, getEducation } from "../api";
import { FaAddressCard, FaGraduationCap } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { HiChatBubbleLeftEllipsis } from "react-icons/hi2";

type About = Database["public"]["Tables"]["About"]["Row"];
type Education = Database["public"]["Tables"]["Education"]["Row"];

export const About = () => {
  const [about, setAbout] = useState<About | null>(null);
  const [education, setEducation] = useState<Education[] | null>(null);

  useEffect(() => {
    getAbout().then((data) => {
      setAbout(data[0]);
    });

    getEducation().then((data) => {
      setEducation(data);
    });
  }, []);

  if (!about) {
    return null;
  }

  return (
    <div className="about flex flex-col gap-12 px-2 lg:px-8">
      <Badge text="ABOUT" />
      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6 md:gap-16">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center mb-2">
              <FaAddressCard className="text-3xl" />
              <h1 className="text-lg xl:text-3xl font-bold">Profile</h1>
            </div>
            <div className="flex flex-row gap-2 font-pretendard text-sm xl:text-base">
              <span className="font-bold min-w-20">이름</span>
              <p>{about?.profile_name}</p>
            </div>
            <div className="flex flex-row gap-2 font-pretendard text-sm xl:text-base">
              <span className="font-bold min-w-20">생년월일</span>
              <p>{about?.profile_birth}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center mb-2">
              <FaPhone className="text-3xl" />
              <h1 className="text-lg xl:text-3xl font-bold">Contact</h1>
            </div>
            <div className="flex flex-row gap-2 font-pretendard text-sm xl:text-base">
              <span className="font-bold min-w-20">전화번호</span>
              <p>{about?.contact_phone}</p>
            </div>
            <div className="flex flex-row gap-2 font-pretendard text-sm xl:text-base">
              <span className="font-bold min-w-20">이메일</span>
              <a
                href={`mailto:${about?.contact_email}`}
                className="flex items-center gap-1 text-[#232323] hover:underline"
              >
                {about?.contact_email}
                <img
                  width="16"
                  height="16"
                  src="https://img.icons8.com/ios-filled/50/link--v1.png"
                  alt="link--v1"
                />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center mb-2">
              <HiChatBubbleLeftEllipsis className="text-3xl" />
              <h1 className="text-lg xl:text-3xl font-bold">SNS</h1>
            </div>
            <div className="flex flex-row gap-2 font-pretendard text-sm xl:text-base">
              <span className="font-bold min-w-20">링크드인</span>
              <a
                href={about?.sns_linkedin ?? undefined}
                className="flex items-center gap-1 text-[#232323] hover:underline"
              >
                {`linkedin/${about?.sns_linkedin?.split("/").pop()}`}
                <img
                  width="16"
                  height="16"
                  src="https://img.icons8.com/ios-filled/50/link--v1.png"
                  alt="link--v1"
                />
              </a>
            </div>
            <div className="flex flex-row gap-2 font-pretendard text-sm xl:text-base">
              <span className="font-bold min-w-20">깃허브</span>
              <a
                href={about?.sns_github ?? undefined}
                className="flex items-center gap-1 text-[#232323] hover:underline"
              >
                {`github/${about?.sns_github?.split("/").pop()}`}
                <img
                  width="16"
                  height="16"
                  src="https://img.icons8.com/ios-filled/50/link--v1.png"
                  alt="link--v1"
                />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center mb-2">
              <FaGraduationCap className="text-3xl" />
              <h1 className="text-lg xl:text-3xl font-bold">Education</h1>
            </div>
            <div className="flex flex-col gap-2 font-pretendard text-sm xl:text-base">
              <span className="font-bold min-w-20">학력</span>
              {education?.map((edu) => (
                <p key={edu.id}>
                  {edu.edu_institute} {edu.edu_major} {edu.edu_degree} (
                  {edu.edu_start ? `${edu.edu_start.split("-")[0]}` : ""} ~{" "}
                  {edu.edu_end ? `${edu.edu_end.split("-")[0]})` : "재학 중)"}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
