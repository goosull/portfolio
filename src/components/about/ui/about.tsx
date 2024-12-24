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
    <div className="about flex flex-col gap-20">
      <Badge text="ABOUT" />
      <div className="flex items-center justify-start text-[#232323] underline-offset-[4px]">
        <div className="grid grid-cols-2 grid-rows-2 gap-16  w-full px-16">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4 items-center mb-4">
              <FaAddressCard className="text-4xl" />
              <h1 className="text-4xl font-bold">Profile</h1>
            </div>
            <div className="flex flex-row gap-4 font-pretendard text-2xl">
              <span className="font-bold min-w-24">이름</span>
              <p>{about?.profile_name}</p>
            </div>
            <div className="flex flex-row gap-4 font-pretendard text-2xl">
              <span className="font-bold min-w-24">생년월일</span>
              <p>{about?.profile_birth}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4 items-center mb-4">
              <FaPhone className="text-4xl" />
              <h1 className="text-4xl font-bold">Contact</h1>
            </div>
            <div className="flex flex-row gap-4 font-pretendard text-2xl">
              <span className="font-bold min-w-24">전화번호</span>
              <p>{about?.contact_phone}</p>
            </div>
            <div className="flex flex-row gap-4 font-pretendard text-2xl">
              <span className="font-bold min-w-24">이메일</span>
              <a
                href={`mailto:${about?.contact_email}`}
                className="flex items-center gap-2 text-[#232323] hover:underline"
              >
                {about?.contact_email}
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/ios-filled/50/link--v1.png"
                  alt="link--v1"
                />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4 items-center mb-4">
              <HiChatBubbleLeftEllipsis className="text-4xl" />
              <h1 className="text-4xl font-bold">SNS</h1>
            </div>
            <div className="flex flex-row gap-4 font-pretendard text-2xl">
              <span className="font-bold min-w-24">링크드인</span>
              <a
                href={about?.sns_linkedin ?? undefined}
                className="flex items-center gap-2 text-[#232323] hover:underline"
              >
                {`linkedin/${about?.sns_linkedin?.split("/").pop()}`}
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/ios-filled/50/link--v1.png"
                  alt="link--v1"
                />
              </a>
            </div>
            <div className="flex flex-row gap-4 font-pretendard text-2xl">
              <span className="font-bold min-w-24">깃허브</span>
              <a
                href={about?.sns_github ?? undefined}
                className="flex items-center gap-2 text-[#232323] hover:underline"
              >
                {`github/${about?.sns_github?.split("/").pop()}`}
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/ios-filled/50/link--v1.png"
                  alt="link--v1"
                />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4 items-center mb-4">
              <FaGraduationCap className="text-4xl" />
              <h1 className="text-4xl font-bold">Education</h1>
            </div>
            <div className="flex flex-row gap-4  font-pretendard text-2xl">
              <span className="font-bold min-w-24">학력</span>
              {education?.map((edu) => (
                <p key={edu.id}>
                  {edu.edu_institute} {edu.edu_major} {edu.edu_degree} (
                  {edu.edu_start
                    ? `${edu.edu_start.split("-")[0]}
                      `
                    : ""}{" "}
                  ~ {edu.edu_end ? `${edu.edu_end.split("-")[0]})` : "재학 중)"}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
