"use client";

import { useState, useEffect, use } from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn, useScrollStore } from "@/shared";

export const Header = () => {
  const [size, setSize] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [target, setTarget] = useState(null);
  const pathname = usePathname();
  const router = useRouter();
  const { homeScrollPosition, setHomeScrollPosition } = useScrollStore();

  useEffect(() => {
    setSize(window.innerHeight);

    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (pathname.split("/")[1]) {
      // console.log(`.${pathname.split("/")[1]}`, "pathname.split(/)[1]");
      setHomeScrollPosition(`.${pathname.split("/")[1]}`);
    }
  }, [pathname, setHomeScrollPosition]);

  const handleHomeClick = () => {
    if (pathname !== "/") {
      router.push("/");
    }

    console.log(homeScrollPosition, "homeScrollPosition");
    if (homeScrollPosition) {
      setTimeout(() => {
        const target = document.querySelector(homeScrollPosition);
        console.log(target, "target");
        if (target) {
          const offsetTop = target.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }
      }, 500);
      setHomeScrollPosition(null);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
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
          scroll > size * 1.2 ? "bg-[#F0EFEB] border-y-0 border-b border-[#232333] text-[#232333]" : "text-[#F0EFEB]"
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
