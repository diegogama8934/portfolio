import { projectsResume } from "@/utils/Data";
import { ProjectResumeCard } from "./ProjectResumeCard";
import Link from "next/link";

export function ProjectsResume() {


  return (
    <div className="flex flex-col gap-12">

      <div className="flex justify-between items-center">
        <h2 className="text-3xl text-zinc-700 font-bold">Proyectos</h2>
        <Link className="text-blue-900 font-bold text-lg" href="/projects">Ver más</Link>
      </div>
      <hr />

      <div className="flex gap-8">

        {
          projectsResume.map(project => <ProjectResumeCard key={project.name} {...project} />)
        }

      </div>

    </div>
  );
}