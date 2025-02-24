/** this gradient cover container div but in figma file looks like something is overlaying it bg-gradient-overlay-dark */
import { PieChart } from "lucide-react";
import { useState } from "react";

import bgSpaceUrl from "@/assets/bg-space.png";

import { Button } from "../ui/button";
import { Sheet, SheetContent } from "../ui/sheet";
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
          variant="default"
          size="lg"
          className="fixed bottom-6 right-6 shadow-lg rounded-full gap-2 z-50"
          onClick={() => setIsOpen(true)}
        >
          <PieChart className="size-5" />
          <span>My Progress</span>
        </Button>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent
            side="right"
            className="w-[358px] p-0 rounded-tl-2xl rounded-bl-2xl bg-accent overflow-hidden"
          >
            <MyProgressContent {...props} />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};
