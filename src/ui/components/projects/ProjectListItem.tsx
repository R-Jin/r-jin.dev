import { ProjectData } from "@/lib/definitions";
import { format } from "date-fns";
import Link from "next/link";
import Image from "next/image";

export default function ProjectListItem({
  projectData,
}: {
  projectData: ProjectData;
}) {
  return (
    <Link href={`projects/${projectData.id}`}>
      <li className="flex border-b-[1px] border-foreground/30 px-4 py-8 hover:bg-foreground/5 active:bg-foreground/10 md:flex-row md:space-x-8">
        <div className="hidden min-w-[200px] md:block">
          <Image
            src={projectData.thumbnail}
            width={200}
            height={130}
            alt={projectData.id}
            // fill={true}
            className="rounded-lg shadow-xl"
          />
        </div>
        <div>
          <h1 className="font-sans text-2xl font-extrabold text-accent">
            {projectData.title}
          </h1>
          <p className="mb-2 font-serif text-xs">
            {format(new Date(projectData.date), "do MMMM yyyy")}
          </p>
          <p className="font-serif text-base">{projectData.description}</p>
          <ul className="mt-4 list-none overflow-hidden p-0">
            {projectData.tags.map((category) => {
              return (
                <li
                  className="float-left mr-4 font-serif text-xs underline"
                  key={category}
                >
                  {category}
                </li>
              );
            })}
          </ul>
        </div>
      </li>
    </Link>
  );
}
