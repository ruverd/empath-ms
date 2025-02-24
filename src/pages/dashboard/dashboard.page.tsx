import { MyProgress } from "@/shared/components/my-progress";

import { SectionAssigned } from "./components/section-assigned";
import { SectionFeaturedCourses } from "./components/section-featured-courses";
import { SectionNewCourses } from "./components/section-new-courses";
import { MOCK_DASHBOARD } from "./dashboard.mock";

export const DashboardPage = () => {
  return (
    <div className="flex w-full min-h-[calc(100vh-68px)]">
      <div className="flex-1 p-6 flex flex-col gap-4">
        <SectionAssigned />
        <SectionNewCourses />
        <SectionFeaturedCourses />
      </div>
      <MyProgress
        progress={MOCK_DASHBOARD.progress}
        user={MOCK_DASHBOARD.user}
        stats={MOCK_DASHBOARD.stats}
      />
    </div>
  );
};
