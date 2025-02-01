import {
  Header,
  Intro,
  About,
  Project,
  Experience,
  Mail,
  Contact,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <div className="intro min-h-screen">
      <Header />
      <Contact />
      <Intro />
      <div className="px-12 pt-[var(--header-height)] max-w-[1400px] mx-auto">
        <main className="min-h-full flex flex-col gap-40 lg:gap-80 pt-20 lg:pt-40">
          {/* <About /> */}
          <div className="flex flex-col gap-20">
            <Project />
          </div>
          <Experience />
          <Mail />
        </main>
      </div>
      <Footer />
    </div>
  );
}
