import { Intro, About, Project, Mail } from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Intro />
      <div className="px-16 md:px-60 pt-[var(--header-height)] max-w-[calc(100%-4rem)] mx-auto">
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
