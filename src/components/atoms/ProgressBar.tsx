

export function ProgressBar({ level }: { level: number }) {

  const levelVariants: Record<number, string> = {
    1: "w-[10%] bg-red-500",
    2: "w-[20%] bg-red-500",
    3: "w-[30%] bg-red-500",
    4: "w-[40%] bg-amber-500",
    5: "w-[50%] bg-amber-500",
    6: "w-[60%] bg-amber-500",
    7: "w-[70%] bg-amber-500",
    8: "w-[80%] bg-green-500",
    9: "w-[90%] bg-green-500",
    10: "w-full bg-green-500"
  }
  return (
    <span className="block w-full h-3 bg-zinc-200 rounded">
      <span className={`block h-3 bg-green-500 ${levelVariants[level]} rounded`}></span>
    </span>
  );
}