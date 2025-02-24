import { useLocation } from "react-router-dom";

import { NAV_ITEMS } from "@/shared/constants/navbar";

import { NavItem } from "./nav-item";
import { NavProps } from "./nav.types";

export const Nav = ({ onNavigate, ...props }: NavProps) => {
  const location = useLocation();

  return (
    <nav {...props}>
      <ul className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
        {NAV_ITEMS.map((item) => (
          <NavItem
            key={item.label}
            {...item}
            isActive={location.pathname === item.href}
            onNavigate={onNavigate}
          />
        ))}
      </ul>
    </nav>
  );
};
