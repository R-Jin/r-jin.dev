import { ProjectData } from "@/lib/definitions";
import ProjectListItem from "./ProjectListItem";

export default function ProjectsList({
  projectsData,
}: {
  projectsData: ProjectData[];
}) {
  return (
    <ul>
      {projectsData.map((projectData) => (
        <div key={projectData.id}>
          <ProjectListItem projectData={projectData} />
        </div>
      ))}
    </ul>
  );
}
