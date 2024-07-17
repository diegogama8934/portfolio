import type { ProjectResume } from "@/utils/Interfaces";
import Link from "next/link";

export function ProjectResumeCard({ name, description, link, objective }: ProjectResume) {
  // TODO: Change name

  return (
    <div className="flex flex-col gap-2 lg:w-96 p-8 rounded-lg bg-white shadow items-end">

      <div className="self-start">
        <h3 className="lg:text-xl text-lg text-zinc-700">{name}</h3>
        <small className="text-zinc-400">{objective}</small>
      </div>

      <p className="text-zinc-500">{description}</p>

      <Link className="block p-2 rounded-md w-fit text-sky-800 text-sm mt-2" target="_blank" href={link}>Visita la página</Link>
    </div>
  );
}