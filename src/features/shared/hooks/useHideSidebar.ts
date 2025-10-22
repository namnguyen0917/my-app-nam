'use client';
import { usePathname } from "next/navigation";

const allowedPaths = ["/"];

export default function useHideSidebar(): boolean {
  const pathname = usePathname();
  return allowedPaths.includes(pathname);
}