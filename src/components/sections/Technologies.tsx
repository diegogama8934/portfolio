import { technologiesPool } from "@/utils/Data";
import { TechnologyItem } from "../atoms";
import Link from "next/link";


export function Technologies() {


  return (
    <div className="flex flex-col gap-12">
      <div className="flex justify-between items-end">
        <h2 className="lg:text-3xl text-xl text-zinc-700 font-bold">Tecnologías 🕹️</h2>
        <Link className="text-blue-900 font-bold lg:text-lg text-sm" href="/aboutMe">Ver más</Link>
      </div>
      <hr />
      <div className="flex gap-8 lg:flex-row flex-col">
        {
          technologiesPool.map((tech) => <TechnologyItem key={tech.name} {...tech} />)
        }
      </div>
    </div>
  );
}