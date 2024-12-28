import { Header, ProjectList } from "@/components";
import { Badge } from "@/shared";

export default function Home() {
  return (
    <div>
      <Header type="page" />
      <div className="px-6 lg:px-20 2xl:px-[18rem] pt-[var(--header-height)] max-w-[calc(100%-4rem)] mx-auto">
        <main className="min-h-full flex flex-col gap-40 lg:gap-80 pt-20">
          <ProjectList />
        </main>
      </div>
    </div>
  );
}
