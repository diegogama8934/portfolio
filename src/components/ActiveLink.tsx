"use client";
import type { ActiveLink } from "@/utils/Interfaces";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function ActiveLink({ href, pageName }: ActiveLink) {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={`py-8 hover:bg-zinc-200 w-40 text-center ${pathName == href && "bg-zinc-100 border-b-2 border-blue-400"}`}>
      {pageName}
    </Link>
  );
}