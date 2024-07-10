

export function ProgressBar({ level }: { level: number }) {

  return (
    <span className="block w-full h-4 bg-zinc-300 rounded">
      <span className={`block h-4 bg-green-500 w-[${level * 10}%] rounded`}></span>
    </span>
  );
}