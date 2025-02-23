import { STAT_STATUS } from "@/shared/constants/stat";

import {
  IconGraduation,
  IconTime,
  IconTrophy,
  IconUsers,
} from "../components/icons";

export const MOCK_STATS = {
  stats: [
    {
      icon: IconGraduation,
      title: "Courses Completed",
      highlightText: "1",
      auxText: "/3",
      status: STAT_STATUS.ACTIVE,
    },
    {
      icon: IconTime,
      title: "Lessons Completed",
      highlightText: "17",
      auxText: "/44",
      status: STAT_STATUS.ACTIVE,
    },
    {
      icon: IconUsers,
      title: "Community",
      highlightText: "0",
      auxText: "th",
      status: STAT_STATUS.COMING_SOON,
    },
    {
      icon: IconTrophy,
      title: "Team Ranking",
      highlightText: "N/A",
      status: STAT_STATUS.COMING_SOON,
    },
  ],
};
