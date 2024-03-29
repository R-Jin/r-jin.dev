import { Metadata } from "next";
import ProjectsList from "@/ui/components/projects/ProjectsList";
import { getAllProjectsData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of projects I've developed, during my free time.",
};

export default function Page() {
  const allProjectsData = getAllProjectsData();
  return (
    <main>
      <h1 className="mt-20 text-3xl font-extrabold md:mt-20 md:text-6xl">
        Projects
      </h1>
      <p className="mb-10 mt-5 font-serif text-lg md:text-2xl">
        A selection of projects I've developed, during my free time.
      </p>
      <ProjectsList projectsData={allProjectsData} />
    </main>
  );
}
