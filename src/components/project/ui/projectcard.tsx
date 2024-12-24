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
      className="flex flex-col gap-4 border-2 border-[var(--badge)] text-[#232323]
      rounded-[2rem] shadow-sm hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out font-pretendard relative group
      sm:flex-row sm:gap-6 lg:flex-col"
    >
      <Link href={link} className="h-full w-full">
        <div className="p-4 md:p-6 lg:p-8 cursor-pointer flex flex-col gap-3 h-full">
          <div className="relative w-full h-[200px] md:h-[250px] lg:h-[350px]">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover", borderRadius: "1rem" }}
            />
          </div>
          <div className="flex justify-start items-center gap-2 mt-3 lg:mt-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-freesentation">
              {title}
            </h1>
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/ios-filled/50/up-right-arrow.png"
              alt="up-right-arrow"
              className="transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300 ease-in-out"
            />
          </div>
          {date && (
            <p className="text-sm md:text-md lg:text-lg text-[#666666]">
              {date?.start} - {date?.end}
            </p>
          )}
          <p className="text-sm md:text-lg lg:text-xl flex-grow">
            {description}
          </p>

          <div className="gap-2 flex-wrap hidden md:flex">
            {stack?.map((item) => (
              <Badge key={item} text={item} size="s" type="outline" />
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};
