import { Sun as IconSun } from "lucide-react";

import { IconBell, IconMoon, IconSearch } from "@/shared/components/icons";
import { Avatar, AvatarFallback } from "@/shared/components/ui/avatar";
import { USER_AUTHENTICATED } from "@/shared/constants/user";
import { useTheme } from "@/shared/hooks/use-theme";
import { getInitials } from "@/shared/lib/utils";

export const UserActions = () => {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={handleToggleTheme}
        className="hover:opacity-80 rounded p-0.5 transition-opacity duration-300 ease-in-out"
      >
        {theme === "dark" ? <IconMoon /> : <IconSun />}
      </button>
      <button className="hover:opacity-80 rounded p-0.5 transition-opacity duration-300 ease-in-out">
        <IconSearch />
      </button>
      <button className="hover:opacity-80 rounded p-0.5 transition-opacity duration-300 ease-in-out">
        <IconBell />
      </button>

      <Avatar className="cursor-pointer size-8">
        <AvatarFallback className="bg-shades-aqua-5 text-sm font-bold text-primary-indigo">
          {getInitials(USER_AUTHENTICATED.name)}
        </AvatarFallback>
      </Avatar>
    </div>
  );
};
