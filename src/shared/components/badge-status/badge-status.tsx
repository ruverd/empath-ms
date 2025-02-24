import { cva } from "class-variance-authority";

import { STATUS } from "@/shared/constants/status";
import { Status } from "@/shared/enums/status";
import { cn } from "@/shared/lib/utils";

import type { BadgeStatusProps } from "./badge-status.types";

export const badgeStatusVariants = cva("size-2 rounded-full", {
  variants: {
    variant: {
      [Status.ON_TRACK]: "bg-secondary-green",
    },
  },
  defaultVariants: {
    variant: Status.ON_TRACK,
  },
});

export const BadgeStatus = ({ variant }: BadgeStatusProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className={cn(badgeStatusVariants({ variant }))} />
      <span className="text-xs font-medium text-primary-cloud">
        {STATUS[variant!]}
      </span>
    </div>
  );
};
