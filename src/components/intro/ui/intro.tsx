const BUBBLE_KEYFRAMES = [
  "animate-bubble-1",
  "animate-bubble-2",
  "animate-bubble-3",
  "animate-bubble-4",
  "animate-bubble-5",
  "animate-bubble-6",
  "animate-bubble-7",
  "animate-bubble-8",
  "animate-bubble-9",
  "animate-bubble-10",
  "animate-bubble-11",
  "animate-bubble-12",
];

export const Intro = () => {
  return (
    <div>
      <div className="relative h-[calc(120vh)] flex items-end bg-[#232323] overflow-hidden text-[#ffffff]">
        {BUBBLE_KEYFRAMES.map((keyframe, index) => (
          <div
            key={index}
            className={`absolute rounded-full bg-white opacity-30 ${keyframe} z-30`}
            style={{
              width: `${1 + index * 0.25}vw`,
              height: `${1 + index * 0.25}vw`,
              left: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
        <div className="absolute xl:px-40 z-40 w-full h-full top-40 left-0 flex flex-col items-center gap-4 px-4 md:top-60 xl:top-80 text-3xl md:text-5xl xl:text-6xl font-bold xl:items-start">
          <h1 className="font-bold text-center">안녕하세요</h1>
          <h2 className="z-40 text-center">
            <span className="text-[#FFD700]">프론트엔드 개발자&nbsp;</span>
            <span className=" rainbow-hover">김승원</span>
            입니다.
          </h2>
          <span className="flex flex-wrap justify-center text-2xl md:text-2xl xl:text-3xl">
            <h2>항상&nbsp;</h2>
            <h2 className="font-bold">발전하기 위해 최선을 다하고자 합니다.</h2>
          </span>
          <div className="hidden relative xl:flex flex-col gap-4 w-full bg-[#ffffff] p-1 after:content-[url('/leaf.svg')] after:absolute after:block after:-bottom-2 after:-right-40 after:z-10" />
        </div>
        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-b from-transparent via-[#232323] to-[#ffffff] z-20"></div>
      </div>
    </div>
  );
};
