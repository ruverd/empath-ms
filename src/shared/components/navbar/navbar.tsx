import { Link } from "react-router-dom";

import { Logo } from "../logo";
import { Nav } from "./components/nav";
import { UserActions } from "./components/user-actions";

export const Navbar = () => {
  return (
    <div className="bg-background shadow-navbar px-6 h-[68px] flex items-center">
      <div className="mx-auto flex justify-between items-center w-full">
        <div className="flex items-center gap-[50px]">
          <Link to="/">
            <Logo />
          </Link>
          <Nav />
        </div>
        <UserActions />
      </div>
    </div>
  );
};
