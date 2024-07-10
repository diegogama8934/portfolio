import { ProgressBar } from ".";
import type { TechnologyItem } from "@/utils/Interfaces";
import Image from "next/image";

export function TechnologyItem({ name, image, level, knowledge }: TechnologyItem) {


  return (
    <div className="w-96 p-8 rounded-lg bg-white shadow items-end">
      <Image
        src={image}
        width={100}
        height={100}
        alt={`${name} image`}
      />

      <span className="text-2xl">{name}</span>

      <ProgressBar level={level} />

      <ul className="list-disc ml-4 text-zinc-500">
        {
          knowledge.map((item, index) => <li className="my-2" key={index}>{item}</li>)
        }
      </ul>

    </div>
  );
}