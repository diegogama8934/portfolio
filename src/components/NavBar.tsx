import { porfolioSections } from "@/utils/Data";
import { ActiveLink } from "./ActiveLink";

export function NavBar() {


  return (
    <nav className="w-full flex justify-center">
      {
        porfolioSections.map((section, index) => (<ActiveLink key={index} href={section.href} pageName={section.pageName} />))
      }
    </nav>
  );
}