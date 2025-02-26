"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Badge, cn, useScrollStore } from "@/shared";
import { IoChevronForwardOutline } from "react-icons/io5";

interface HeaderProps {
  type?: "default" | "page";
}

export const Header = ({ type = "default" }: HeaderProps) => {
  const [size, setSize] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollFinish, setScrollFinish] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { setHomeScrollPosition, getHomeScrollPosition } = useScrollStore();

  // pathname 변경 시 scroll 위치 복원
  useEffect(() => {
    if (typeof window !== "undefined") {
      const prevScrollPosition = getHomeScrollPosition(pathname);

      if (
        (pathname === "/" || pathname === "/project") &&
        prevScrollPosition !== null
      ) {
        console.log(
          prevScrollPosition,
          "prevScrollPosition",
          pathname,
          "pathname"
        );
        setTimeout(() => {
          window.scrollTo({ top: prevScrollPosition, behavior: "smooth" });
        }, 100); // setTimeout으로 비동기 호출
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      setTimeout(() => {
        setScrollFinish(true);
      }, 1000);
    }
  }, [pathname, getHomeScrollPosition]);

  // scroll 이벤트 처리
  useEffect(() => {
    if (typeof window === "undefined") return;

    setSize(window.innerHeight);

    if (!scrollFinish) return;

    const handleScroll = () => {
      // console.log(window.scrollY, "window.scrollY", pathname, "pathname");
      setScrollPosition(window.scrollY);
      setHomeScrollPosition(window.scrollY, pathname);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, setHomeScrollPosition, scrollFinish]);

  const handleHomeClick = () => {
    if (pathname !== "/") {
      router.push("/");
    }
  };

  const handleUpClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full px-6 md:px-10 h-[var(--header-height)] z-50 flex items-center justify-between transition-all duration-300 ease-in-out"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between h-full w-full",
          type === "default"
            ? scrollPosition > size * 1.25
              ? "bg-[#ffffff] border-y-0 border-b border-[#232333] text-[#232333]"
              : "text-[#ffffff]"
            : "bg-[#ffffff] border-y-0 border-b border-[#232333] text-[#232333]"
        )}
      >
        <button
          className="text-2xl"
          onClick={pathname === "/" ? handleUpClick : handleHomeClick}
        >
          KIM SEUNGWON
        </button>
        <Badge
          text="이력서 보러가기"
          type="outline"
          className={cn(
            "cursor-pointer",
            scrollPosition > size * 1.25
              ? "text-[#232323] border-[#232323]"
              : "text-[#ffffff] border-[#ffffff]"
          )}
          link="/kim_seungwon_resume.pdf"
          size="m"
        >
          <IoChevronForwardOutline
            className={cn(
              "font-bold",
              scrollPosition > size * 1.25 ? "text-[#232323]" : "text-[#ffffff]"
            )}
          />
        </Badge>
      </div>
    </header>
  );
};
