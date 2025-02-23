import { type VariantProps } from "class-variance-authority";

import type { badgeStatusVariants } from "./badge-status";

export interface BadgeStatusProps
  extends VariantProps<typeof badgeStatusVariants> {}
