import { Header, Intro, About, Project, Experience, Mail } from "@/components";

export default function Home() {
  return (
    <div className="intro min-h-screen">
      <Header />
      <Intro />
      <div className="px-6 lg:px-20 2xl:px-[18rem] pt-[var(--header-height)] max-w-[calc(100%-4rem)] mx-auto">
        <main className="min-h-full flex flex-col gap-40 lg:gap-80 pt-20 lg:pt-40">
          <About />
          <div className="flex flex-col gap-20">
            <Project />
          </div>
          <Experience />
          <h1>Home</h1>
          <h1>Home</h1>
        </main>
      </div>
    </div>
  );
}
