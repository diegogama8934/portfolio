import { ProgressBar } from ".";
import type { TechnologyItem } from "@/utils/Interfaces";
import Image from "next/image";

export function TechnologyItem({ name, image, level, knowledge }: TechnologyItem) {


  return (
    <div className="flex-1 p-8 rounded-lg bg-white shadow items-end">
      <div className="flex gap-4">

        <Image
          src={image}
          width={100}
          height={100}
          className="w-[60px] h-[60px] object-contain"
          alt={`${name} image`}
        />

        <div className="flex flex-col flex-1 gap-2">
          <span className="text-2xl text-zinc-700">{name}</span>
          <ProgressBar level={level} />
        </div>

      </div>

      <ul className="list-disc ml-4 text-zinc-500">
        {
          knowledge.map((item, index) => <li className="my-2" key={index}>{item}</li>)
        }
      </ul>

    </div>
  );
}