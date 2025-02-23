import type { Stat } from "@/shared/types/stat.types";

export interface CardStatsProps extends Omit<Stat, "status"> {}
