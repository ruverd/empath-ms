import { Link } from "react-router-dom";

import { cn } from "@/shared/lib/utils";

import type { NavItemProps } from "./nav-item.types";

export const NavItem = ({ label, href, isActive = false }: NavItemProps) => {
  const isActiveClass = isActive ? "font-bold" : "font-medium";

  return (
    <li
      className={cn(
        "text-sm relative text-foreground transition-all duration-300",
        isActiveClass
      )}
    >
      <Link to={href} className="block py-6">
        <span className="inline-block min-w-[max-content]">{label}</span>
      </Link>
      <div
        className={cn(
          "h-1 bg-foreground w-full absolute bottom-0 left-0 rounded-full transition-all duration-300 ease-in-out",
          isActive ? "w-full opacity-100" : "w-0 opacity-0"
        )}
      />
    </li>
  );
};
