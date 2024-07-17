import { NavBar } from "@/components/atoms";

export default function SectionsLayout({ children }: { children: React.ReactNode }) {


  return (
    <main className="flex flex-col w-full lg:gap-24 gap-8">

      <NavBar />

      <div className="flex flex-col gap-24 lg:px-48 px-8">
        {children}
      </div>

    </main>
  );
}