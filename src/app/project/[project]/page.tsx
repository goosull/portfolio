import { Intro, Header, About, Project } from "@/components";

export default function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <div className="px-16 pt-[var(--header-height)] max-w-[1600px] mx-auto">
        <main className="min-h-full flex flex-col gap-80 pt-40">
          <About />
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
        </main>
      </div>
    </div>
  );
}
