"use client";

import { cn } from "@/shared";

export const Footer = () => {
  return (
    <footer
      className={cn(
        "w-full px-6 md:px-10 h-[var(--header-height)] z-50 flex flex-col items-center justify-center transition-all duration-300 ease-in-out"
      )}
    >
      <div
        className={cn(
          "flex flex-col items-center justify-center h-full w-full border-t border-[#232333] bg-[#ffffff] text-[#232333]"
        )}
      >
        <p className="text-[14px] md:text-[12px] text-gray-500 mt-1">
          © {new Date().getFullYear()} KIM SEUNGWON. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
