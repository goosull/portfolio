"use client";

import { cn } from "../lib";

interface BadgeProps {
  text: string;
  type?: "primary" | "outline";
  size?: "l" | "m" | "s";
  className?: string;
  children?: React.ReactNode;
}

export const Badge = ({
  text,
  type = "primary",
  size = "l",
  className,
  children,
}: BadgeProps) => {
  return (
    <div
      className={cn(
        "rounded-full w-max",
        type === "primary" && "bg-[var(--badge)] text-[#f0efeb]",
        type === "outline" &&
          "border-[var(--badge)] text-[var(--badge)] border-[0.5px] md:border-[2px]",
        size === "l" && "text-4xl md:text-5xl px-4 py-3",
        size === "m" && "text-xl md:text-2xl px-3 py-2",
        size === "s" &&
          "text-xs md:text-sm font-bold font-pretendard px-2 py-1",
        className
      )}
    >
      <span className="flex items-center gap-2">
        {size !== "m" && "#"} {text}
        {children}
      </span>
    </div>
  );
};
