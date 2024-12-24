import Image from "next/image";
import { Intro, About, Project, Mail } from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Intro />
      {/* <div className="z-50 bg-[#F0EFEB] absolute top-[calc(100vh] w-[calc(100%)]">
        <Image
          src="/mountain.svg"
          alt="about"
          width={6020}
          height={1080}
          style={{
            width: "110%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </div> */}
      <div className="px-6 lg:px-20 2xl:px-80 pt-[var(--header-height)] max-w-[calc(100%-4rem)] mx-auto">
        <main className="min-h-full flex flex-col gap-40 lg:gap-80 pt-20 lg:pt-40">
          <About />
          <Project />
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
        </main>
      </div>
    </div>
  );
}
