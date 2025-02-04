"use client";

import { usePathname } from "next/navigation";
import { Header, ProjectDetail } from "@/components";

export default function Home() {
  const path = usePathname();
  console.log(path, "path");
  return (
    <div>
      <Header type="page" />
      <div className="px-12 pt-[var(--header-height)] max-w-[1400px] mx-auto">
        <main className="min-h-full flex flex-col gap-40 lg:gap-80 pt-20">
          <ProjectDetail />
        </main>
      </div>
    </div>
  );
}
