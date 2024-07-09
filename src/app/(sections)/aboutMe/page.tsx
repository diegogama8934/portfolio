import Image from "next/image";

export default function AboutMePage() {


  return (
    <>
      <div className="flex justify-center gap-20">

        {/* <Image
          src="/yo3.jpeg"
          alt="Fotografía mía"
          width={500}
          height={800}
          className="w-[340px] h-[450px] rounded-2xl"
        /> */}

        <div className="flex flex-col gap-4">

          <h2 className="text-zinc-800 font-bold text-4xl">¿Qué es lo que hago?</h2>

          <hr />

          <span className="text-zinc-600">Principalmente aplicaciones web usando Next JS</span>

        </div>
      </div>
    </>
  );
}