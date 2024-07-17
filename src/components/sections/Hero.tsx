import Image from "next/image";

export function Hero() {


  return (
    <div className="flex w-full lg:flex-row lg:justify-between flex-col items-center">

      <div className="flex flex-col lg:gap-4 gap-0 w-full">
        <h2 className="text-zinc-500 font-bold lg:text-2xl text-lg">Hola!</h2>
        <h1 className="text-zinc-800 font-bold lg:text-4xl text-2xl">Soy Diego Martínez</h1>
        <p className="text-zinc-500 lg:text-xl text-base">Y soy desarrollador front-end <span className="hidden lg:inline">👉🏽</span> <span className="lg:hidden">👇🏽</span></p>
        <button className="hidden w-full lg:block bg-zinc-900 text-zinc-300 rounded-md p-4 mt-12 hover:bg-zinc-800 transition-colors">Perfil de Github</button>
        <button className="hidden w-full lg:block bg-blue-900 text-zinc-300 rounded-md p-4 hover:bg-blue-800 transition-colors">Linked In</button>
      </div>

      <Image
        src="/yo.png"
        alt="Mi fotografía"
        width={700}
        height={800}
        className="lg:w-[400px] lg:h-[450px] w-60 h-64 mt-4 lg:mt-0"
      />

      <button className="lg:hidden w-full bg-zinc-900 text-zinc-300 rounded-md lg:p-4 p-3 lg:mt-12 mt-4 hover:bg-zinc-800 transition-colors">Perfil de Github</button>
      <button className="lg:hidden w-full bg-blue-900 text-zinc-300 rounded-md lg:p-4 p-3 lg:mt-4 mt-2 text-sm hover:bg-blue-800 transition-colors">Linked In</button>
    </div>
  );
}