import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/shared";
import { FiArrowUpRight } from "react-icons/fi";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  icon?: string;
  stack?: string[];
  date?: { start: string; end: string };
}

export const ProjectCard = ({
  title,
  description,
  image,
  link,
  icon,
  stack,
  date,
}: ProjectCardProps) => {
  return (
    <div
      className="flex flex-col gap-2 border border-[##F3F4F6] text-[#232323] hover:scale-[1.01]
      rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out font-pretendard relative group
      sm:flex-row sm:gap-4 lg:flex-col overflow-hidden bg-[#ffffff]"
    >
      <Link href={link} className="flex flex-col h-full w-full">
        {/* 이미지 컨테이너 */}
        <div className="relative w-full h-[250px]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="80vw"
            className="object-cover transition-all duration-300 ease-in-out"
          />
        </div>

        {/* 텍스트 영역 */}
        <div className="flex flex-col flex-grow p-4 cursor-pointer gap-2">
          <div className="flex justify-start items-center gap-1">
            <h1 className="text-lg md:text-xl lg:text-xl font-freesentation">
              {icon} {title}
            </h1>
            <FiArrowUpRight className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ease-in-out text-xl" />
          </div>
          {date && (
            <p className="text-sm text-[#666666]">
              {date?.start} - {date?.end}
            </p>
          )}
          <p className="text-sm flex-grow flex">{description}</p>

          <div className="gap-1 flex-wrap flex">
            {stack?.map((item) => (
              <Badge key={item} text={item} size="s" type="disabled" />
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};
