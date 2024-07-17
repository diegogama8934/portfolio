import { projectsResume } from "@/utils/Data";
import { ProjectResumeCard } from "../atoms";
import Link from "next/link";

export function ProjectsResume() {
  // TODO: Change name

  return (
    <div className="flex flex-col gap-12">

      <div className="flex justify-between items-center">
        <h2 className="lg:text-3xl text-xl text-zinc-700 font-bold">Proyectos 🚀</h2>
        <Link className="text-blue-900 font-bold lg:text-lg text-sm" href="/projects">Ver más</Link>
      </div>
      <hr />

      <div className="flex flex-col lg:flex-row gap-8">

        {
          projectsResume.map(project => <ProjectResumeCard key={project.name} {...project} />)
        }

      </div>

    </div>
  );
}