import bgSpaceUrl from "@/assets/bg-space.png";

import { SectionBadges } from "./components/section-badges";
import { SectionProgress } from "./components/section-progress";
import { SectionStats } from "./components/section-stats";
import { WelcomeMessage } from "./components/welcome-message";
import type { MyProgressProps } from "./my-progress.types";

export const MyProgress = ({ progress, user, stats }: MyProgressProps) => {
  return (
    <aside className="relative flex flex-col justify-between bg-accent min-w-[358px] rounded-tl-2xl rounded-bl-2xl overflow-hidden">
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
    </aside>
  );
};
