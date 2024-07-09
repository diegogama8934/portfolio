import { NavBar } from "@/components/NavBar";

export default function SectionsLayout({ children }: { children: React.ReactNode }) {


  return (
    <main className="flex flex-col gap-24">

      <NavBar />

      {children}

    </main>
  );
}