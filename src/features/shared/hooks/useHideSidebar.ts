import { usePathname } from "next/navigation";

const allowedPaths = ["/overview", "/build", "/class", "/quest", "/map"];

export default function useHideSidebar(): boolean {
  const pathname = usePathname();
  return !allowedPaths.includes(pathname);
}