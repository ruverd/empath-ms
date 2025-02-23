import { STAT_STATUS } from "@/shared/constants/stat";

import { CardStats } from "../../card-stats";
import { Badge } from "../../ui/badge";
import { MAP_TEXTS } from "./section-badges.constants";
import type { SectionStatsProps } from "./section.stats.types";

export const SectionStats = ({ stats }: SectionStatsProps) => {
  return (
    <section className="flex flex-col gap-8">
      <div className="grid grid-cols-2 gap-4">
        {stats
          ?.filter((stat) => stat.status === STAT_STATUS.ACTIVE)
          .map((stat, index) => {
            return (
              <CardStats
                key={index}
                title={stat.title}
                icon={stat.icon}
                highlightText={stat.highlightText}
                auxText={stat.auxText}
              />
            );
          })}
      </div>
      <div className="relative grid grid-cols-2 gap-4">
        <Badge className="absolute -top-4 left-1/2 -translate-x-1/2">
          {MAP_TEXTS.COMING_SOON}
        </Badge>
        {stats
          ?.filter((stat) => stat.status === STAT_STATUS.COMING_SOON)
          .map((stat, index) => {
            return (
              <CardStats
                key={index}
                title={stat.title}
                icon={stat.icon}
                highlightText={stat.highlightText}
                auxText={stat.auxText}
              />
            );
          })}
      </div>
    </section>
  );
};
