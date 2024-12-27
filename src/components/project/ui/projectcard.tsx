import Link from "next/link";
import Image from "next/image";
import { Badge, cn } from "@/shared";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  stack?: string[];
  date?: { start: string; end: string };
}

export const ProjectCard = ({ title, description, image, link, stack, date }: ProjectCardProps) => {
  return (
    <div
      className="flex flex-col gap-2 border border-[var(--badge)] text-[#232323]
      rounded-2xl shadow-sm hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out font-pretendard relative group
      sm:flex-row sm:gap-4 lg:flex-col overflow-hidden"
    >
      <Link href={link} className="flex flex-col h-full w-full">
        {/* 이미지 컨테이너 */}
        <div className="relative w-full h-[200px] md:h-[240px] lg:h-[280px]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 
                   (max-width: 1200px) 50vw, 
                   33vw"
            className="object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>

        {/* 텍스트 영역 */}
        <div className="flex flex-col flex-grow p-2 md:p-4 cursor-pointer gap-2">
          <div className="flex justify-start items-center gap-1">
            <h1 className="text-lg md:text-xl lg:text-2xl font-freesentation">{title}</h1>
            <img
              width="16"
              height="16"
              src="https://img.icons8.com/ios-filled/50/up-right-arrow.png"
              alt="up-right-arrow"
              className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ease-in-out"
            />
          </div>
          {date && (
            <p className="text-xs md:text-sm lg:text-base text-[#666666]">
              {date?.start} - {date?.end}
            </p>
          )}
          <p className="text-xs md:text-sm lg:text-base flex-grow hidden sm:flex">{description}</p>

          <div className="gap-1 flex-wrap hidden sm:flex">
            {stack?.map((item) => (
              <Badge key={item} text={item} size="s" type="outline" />
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};
