"use client";

import { useEffect, useState } from "react";
import { cn, type Database } from "@/shared";
import { getAbout } from "../api";
import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";
import { LuArrowUpToLine } from "react-icons/lu";

type About = Database["public"]["Tables"]["About"]["Row"];

export const Contact = () => {
  const [about, setAbout] = useState<About | null>(null);

  useEffect(() => {
    getAbout().then((data) => {
      setAbout(data[0]);
    });
  }, []);

  if (!about) {
    return null;
  }

  const handleUpClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {" "}
      <div className="hidden fixed bottom-[5%] left-[2%] xl:flex flex-col justify-center items-center z-50 p-2 gap-4 rounded-full">
        <div
          className={cn(
            "flex flex-col justify-center items-center z-50 p-2 gap-4 rounded-full bg-[#545454] text-[#f0efeb]"
          )}
        >
          <Link href={`mailto:${about.contact_email}`}>
            <IoMail className="text-3xl" />
          </Link>
        </div>
        <div
          className={cn(
            "flex flex-col justify-center items-center z-50 p-2 gap-4 rounded-full bg-[#545454] text-[#f0efeb]"
          )}
        >
          <Link href={`${about.sns_github}`}>
            <IoLogoGithub className="text-3xl" />
          </Link>
        </div>
        <div
          className={cn(
            "flex flex-col justify-center items-center z-50 p-2 gap-4 rounded-full bg-[#545454] text-[#f0efeb]"
          )}
        >
          <Link href={`${about.sns_linkedin}`}>
            <IoLogoLinkedin className="text-3xl" />
          </Link>
        </div>
      </div>
      <div className="hidden fixed bottom-[5%] right-[2%] xl:flex flex-col justify-center items-center z-50 p-2 gap-4 rounded-full">
        <div
          className={cn(
            "flex flex-col justify-center items-center z-50 p-2 gap-4 rounded-full bg-[#545454] text-[#f0efeb]"
          )}
        >
          <button onClick={handleUpClick}>
            <LuArrowUpToLine className="text-3xl" />
          </button>
        </div>
      </div>
    </>
  );
};
