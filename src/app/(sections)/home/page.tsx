import Image from "next/image"

export default function HomePage() {


  return (
    <div className="flex w-full justify-center gap-48">

      <div className="flex flex-col gap-4">
        <h2 className="text-zinc-500 font-bold text-2xl">Hola!</h2>
        <h1 className="text-zinc-800 font-bold text-4xl">Soy Diego Martínez</h1>
        <p className="text-zinc-500 text-xl">Y soy desarrollador front-end</p>
        <button className="bg-zinc-900 text-zinc-300 rounded-md p-4 mt-12 hover:bg-zinc-800 transition-colors">Perfil de Github</button>
        <button className="bg-blue-900 text-zinc-300 rounded-md p-4 hover:bg-blue-800 transition-colors">Linked In</button>
      </div>

      <Image
        src="/yo.png"
        alt="Mi fotografía"
        width={700}
        height={800}
        className="w-[400px] h-[450px]"
      />
    </div>
  )
}