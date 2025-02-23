import type { User } from "@/shared/types/user.types";

import type { Stat } from "@/shared/types/stat.types";

export interface MyProgressProps {
  progress: number;
  user: User;
  stats: Stat[];
}
