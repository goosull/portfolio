import { Header, ProjectList } from "@/components";
import { Badge } from "@/shared";

export default function Home() {
  return (
    <div>
      <Header type="page" />
      <div className="px-12 pt-[var(--header-height)] max-w-[1400px] mx-auto">
        <main className="min-h-full flex flex-col gap-40 lg:gap-80 pt-20">
          <ProjectList />
        </main>
      </div>
    </div>
  );
}
