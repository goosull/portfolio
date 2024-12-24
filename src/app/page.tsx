import { Intro, About, Project, Mail } from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Intro />
      <div className="px-10 md:px-32 pt-[var(--header-height)] max-w-[1600px] mx-auto">
        <main className="min-h-full flex flex-col gap-80 pt-40">
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
