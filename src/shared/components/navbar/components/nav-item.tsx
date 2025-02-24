import { cva } from "class-variance-authority";
import { Link } from "react-router-dom";

import type { NavItemProps } from "./nav-item.types";

const navItemVariants = cva(
  "text-sm relative text-foreground transition-all duration-300",
  {
    variants: {
      isActive: {
        true: "font-bold",
        false: "font-medium",
      },
    },
    defaultVariants: {
      isActive: false,
    },
  }
);

const navItemIndicatorVariants = cva(
  "h-1 bg-foreground absolute bottom-0 left-0 rounded-full transition-all duration-300 ease-in-out hidden lg:block",
  {
    variants: {
      isActive: {
        true: "w-full opacity-100",
        false: "w-0 opacity-0",
      },
    },
    defaultVariants: {
      isActive: false,
    },
  }
);

export const NavItem = ({
  label,
  href,
  isActive = false,
  onNavigate,
}: NavItemProps) => {
  const handleClick = () => {
    onNavigate?.();
  };

  return (
    <li className={navItemVariants({ isActive })}>
      <Link to={href} className="block py-2 lg:py-6" onClick={handleClick}>
        <span className="inline-block min-w-[max-content]">{label}</span>
      </Link>
      <div className={navItemIndicatorVariants({ isActive })} />
    </li>
  );
};
