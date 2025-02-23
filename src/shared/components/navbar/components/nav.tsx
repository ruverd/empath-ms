import { useLocation } from "react-router-dom";

import { NAV_ITEMS } from "@/shared/constants/navbar";

import { NavItem } from "./nav-item";

export const Nav = () => {
  const location = useLocation();

  return (
    <nav>
      <ul className="flex items-center gap-8">
        {NAV_ITEMS.map((item) => (
          <NavItem
            key={item.label}
            {...item}
            isActive={location.pathname === item.href}
          />
        ))}
      </ul>
    </nav>
  );
};
