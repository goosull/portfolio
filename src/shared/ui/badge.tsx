"use client";

import { cn } from "../lib";
import { useRouter } from "next/navigation";

interface BadgeProps {
  text?: string;
  type?: "primary" | "outline" | "disabled";
  size?: "l" | "m" | "s";
  className?: string;
  link?: string;
  children?: React.ReactNode;
}

export const Badge = ({
  text,
  type = "primary",
  size = "l",
  className,
  link,
  children,
}: BadgeProps) => {
  const router = useRouter();

  return (
    <div
      className={cn(
        "rounded-full w-max",
        type === "primary" && "bg-[var(--badge)] text-[#ffffff]",
        type === "outline" &&
          "border-[var(--badge)] text-[var(--badge)] border-[0.5px] md:border-[1px]",
        type === "disabled" && "bg-[#e8eaee] text-[#232323]",
        size === "l" && "text-2xl md:text-3xl px-4 py-3",
        size === "m" && "text-sm md:text-base font-pretendard px-3 py-2",
        size === "s" && "text-xs font-pretendard px-2 py-1",
        className
      )}
      onClick={() => {
        link && router.push(link);
      }}
    >
      <span className="flex items-center gap-2">
        {text}
        {children}
      </span>
    </div>
  );
};
