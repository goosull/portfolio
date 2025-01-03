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
      <div className="relative h-[calc(120vh)] flex items-end bg-[#232323] overflow-hidden text-[#F0EFEB]">
        {BUBBLE_KEYFRAMES.map((keyframe, index) => (
          <div
            key={index}
            className={`absolute rounded-full bg-white opacity-30 ${keyframe} z-30`}
            style={{
              width: `${1 + index * 0.5}vw`,
              height: `${1 + index * 0.5}vw`,
              left: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
        <div className="absolute z-40 w-full h-full top-40 left-0 flex flex-col items-center gap-4 px-4 md:top-60 xl:top-80 text-3xl md:text-5xl xl:text-6xl font-bold">
          <h1 className="text-[3rem] md:text-[5rem] xl-text-[6rem] font-bold text-center">안녕하세요</h1>
          <span className="flex flex-wrap justify-center">
            <h2>항상&nbsp;</h2>
            <h2 className="text-[#FFD700]">발전하고자&nbsp;</h2>
            <h2 className="font-bold">하는</h2>
          </span>
          <h2 className="z-40 text-center">
            프론트엔드 개발자&nbsp;
            <span className=" rainbow-hover">김승원</span>
            입니다.
          </h2>

          <div className="mt-20 lg:mt-40 border-[#F0EFEB] border-4 w-10 h-16 lg:w-16 lg:h-24 rounded-full justify-center flex">
            <div className="w-1 lg:w-2 h-4 lg:h-6 bg-[#F0EFEB] rounded-full mt-2 lg:mt-4 animate-bounceDown"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
