import { Intro, Header, About, Project } from "@/components";

export default function Home() {
  return (
    <div>
      <Header type="page" />
      <div className="px-6 lg:px-20 2xl:px-[16rem] pt-[var(--header-height)] max-w-[1600px] mx-auto">
        <main className="min-h-full flex flex-col gap-40 lg:gap-80 pt-20 lg:pt-40">
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
        </main>
      </div>
    </div>
  );
}
