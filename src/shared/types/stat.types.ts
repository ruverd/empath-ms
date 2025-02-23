import type { IconProps } from "@/shared/components/icons/icon.types";
import type { STAT_STATUS } from "@/shared/constants/stat";

export type Stat = {
  icon: React.ComponentType<IconProps>;
  title: string;
  highlightText: string;
  auxText?: string;
  status: keyof typeof STAT_STATUS;
};
