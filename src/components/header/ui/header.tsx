"use client";

import { useState, useEffect, use } from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn, useScrollStore } from "@/shared";

export const Header = () => {
  const [scroll, setScroll] = useState(0);
  const [target, setTarget] = useState(null);
  const pathname = usePathname();
  const router = useRouter();
  const { homeScrollPosition, setHomeScrollPosition } = useScrollStore();

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);

      if (pathname.split("/")[1]) {
        setHomeScrollPosition(`.${pathname.split("/")[1]}`);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname, setHomeScrollPosition]);

  useEffect(() => {
    if (homeScrollPosition && pathname === "/") {
      const target = document.querySelector(homeScrollPosition);

      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        window.scrollBy(0, -100);
      }
    }
  }, [homeScrollPosition, pathname]);

  const handleHomeClick = () => {
    if (pathname !== "/") {
      router.push("/");

      return;
    }

    const scrollStep = -window.scrollY / 25;

    if (window.scrollY > 0) {
      const scrollInterval = setInterval(() => {
        if (window.scrollY > 500) {
          window.scrollBy(0, scrollStep * 2);
        } else if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep);
        } else {
          clearInterval(scrollInterval);
        }
      }, 15);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full px-10 h-[var(--header-height)] z-50 flex items-center justify-between transition-all duration-300 ease-in-out"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between h-full w-full",
          scroll > 1500
            ? "bg-[#F0EFEB] border-y-0 border-b border-[#232333] text-[#232333]"
            : "text-[#F0EFEB]"
        )}
      >
        <button className="ml-4" onClick={handleHomeClick}>
          Home
        </button>
        <h1 className="text-2xl">PORTFOLIO</h1>
      </div>
    </header>
  );
};
