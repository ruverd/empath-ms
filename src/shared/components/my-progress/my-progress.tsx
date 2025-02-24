/** this gradient cover container div but in figma file looks like something is overlaying it bg-gradient-overlay-dark */
import { PieChart, X } from "lucide-react";
import { useState } from "react";

import bgSpaceUrl from "@/assets/bg-space.png";

import { Button } from "../ui/button";
import { Sheet, SheetClose, SheetContent } from "../ui/sheet";
import { SectionBadges } from "./components/section-badges";
import { SectionProgress } from "./components/section-progress";
import { SectionStats } from "./components/section-stats";
import { WelcomeMessage } from "./components/welcome-message";
import type { MyProgressProps } from "./my-progress.types";

const MyProgressContent = ({ progress, user, stats }: MyProgressProps) => {
  return (
    <div className="flex flex-col h-full">
      <div className="p-6 flex-1 flex flex-col gap-4">
        <WelcomeMessage name={user.name} />
        <SectionProgress progress={progress} />
        <SectionStats stats={stats} />
        <SectionBadges />
      </div>
      <div
        className="size-[358px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgSpaceUrl})` }}
      />
    </div>
  );
};

export const MyProgress = (props: MyProgressProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop version */}
      <aside className="relative hidden lg:flex flex-col justify-between bg-accent min-w-[358px] rounded-tl-2xl rounded-bl-2xl overflow-hidden">
        <MyProgressContent {...props} />
      </aside>

      {/* Mobile version */}
      <div className="lg:hidden">
        <Button
          size="lg"
          className="fixed bottom-6 right-6 shadow-dark gap-2 z-50"
          onClick={() => setIsOpen(true)}
        >
          <PieChart className="size-5" />
          <span>My Progress</span>
        </Button>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent
            side="right"
            className="w-[358px] p-0 rounded-tl-2xl rounded-bl-2xl bg-accent overflow-hidden border-l-accent"
          >
            <MyProgressContent {...props} />
            <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary text-primary-cloud">
              <X className="size-4" />
              <span className="sr-only">Close</span>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};
