import { BadgeStatus } from "../../badge-status";
import { Progress } from "../../ui/progress";
import { SectionHeader } from "./section-header";
import { MAP_TEXTS } from "./section-progress.constants";
import type { SectionProgressProps } from "./section-progress.types";

export const SectionProgress = ({ progress }: SectionProgressProps) => {
  return (
    <section className="flex flex-col gap-4">
      <SectionHeader title={MAP_TEXTS.PROGRESS}>
        <BadgeStatus variant={MAP_TEXTS.ON_TRACK} />
      </SectionHeader>

      <div className="flex flex-col gap-2 justify-between items-center">
        <span className="text-2xl font-bold text-shades-aqua-8">{`${progress}%`}</span>
        <Progress value={progress} />
      </div>
    </section>
  );
};
