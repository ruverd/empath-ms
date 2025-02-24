import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Logo } from "../logo";
import { Button } from "../ui/button";
import { Sheet, SheetContent } from "../ui/sheet";
import { Nav } from "./components/nav";
import { UserActions } from "./components/user-actions";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-background shadow-dark px-6 h-[68px] flex items-center">
      <div className="mx-auto flex justify-between items-center w-full">
        <div className="flex items-center gap-[50px]">
          <Link to="/">
            <Logo />
          </Link>
          <Nav className="hidden lg:block" />
        </div>
        <div className="hidden lg:block">
          <UserActions />
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="size-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent
          side="right"
          className="w-[300px] sm:w-[400px] p-0 rounded-tl-2xl rounded-bl-2xl"
        >
          <div className="flex flex-col h-full">
            <div className="p-6">
              <Nav onNavigate={handleClose} />
            </div>
            <div className="mt-auto border-t p-6">
              <UserActions onAction={handleClose} />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
