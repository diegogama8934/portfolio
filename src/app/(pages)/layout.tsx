import { NavBar } from "@/components/atoms";

export default function SectionsLayout({ children }: { children: React.ReactNode }) {


  return (
    <main className="flex flex-col gap-24">

      <NavBar />

      <div className="flex flex-col gap-24 px-48">
        {children}
      </div>

    </main>
  );
}