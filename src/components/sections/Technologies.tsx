import { technologiesPool } from "@/utils/Data";
import { TechnologyItem } from "../atoms";


export function Technologies() {


  return (
    <div className="flex flex-col gap-12">
      <h2 className="text-3xl text-zinc-700 font-bold">Tecnologías</h2>
      <hr />
      <div className="flex gap-8">
        {
          technologiesPool.map((tech) => <TechnologyItem key={tech.name} {...tech} />)
        }
      </div>
    </div>
  );
}