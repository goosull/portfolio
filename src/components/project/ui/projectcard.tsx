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

export const ProjectCard = ({
  title,
  description,
  image,
  link,
  stack,
  date,
}: ProjectCardProps) => {
  return (
    <div
      className="flex flex-col gap-2 border border-[var(--badge)] text-[#232323]
      rounded-2xl shadow-sm hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out font-pretendard relative group
      sm:flex-row sm:gap-4 lg:flex-col"
    >
      <Link href={link} className="h-full w-full">
        <div className="p-4 md:p-8 cursor-pointer flex flex-col gap-2 h-full">
          <div className="relative w-full h-[200px] md:h-[240px] lg:h-[280px]">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw"
              style={{ objectFit: "cover", borderRadius: "0.5rem" }}
            />
          </div>
          <div className="flex justify-start items-center gap-1 mt-2 lg:mt-3">
            <h1 className="text-lg md:text-xl lg:text-2xl font-freesentation">
              {title}
            </h1>
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
          <p className="text-xs md:text-sm lg:text-base flex-grow">
            {description}
          </p>

          <div className="gap-1 flex-wrap hidden md:flex">
            {stack?.map((item) => (
              <Badge key={item} text={item} size="s" type="outline" />
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};
