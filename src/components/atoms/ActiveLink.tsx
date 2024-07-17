"use client";
import type { ActiveLink } from "@/utils/Interfaces";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function ActiveLink({ href, pageName }: ActiveLink) {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={`hidden lg:block md:py-8 md:hover:bg-zinc-200 md:w-40 md:text-center ${pathName == href && "md:bg-zinc-100 md:border-b-2 md:border-blue-400"}`}>
      {pageName}
    </Link>
  );
}