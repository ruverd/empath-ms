import { MyProgress } from "@/shared/components/my-progress";
import { USER_AUTHENTICATED } from "@/shared/constants/user";
import { MOCK_STATS } from "@/shared/mocks/stats.mock";

import { SectionAssigned } from "./components/section-assigned";

export const DashboardPage = () => {
  return (
    <div className="flex w-full min-h-[calc(100vh-68px)]">
      <div className="flex-1 p-6 flex flex-col gap-4">
        <SectionAssigned />
        <section className="flex flex-col gap-4">
          <header className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">New Courses & Live Streams!</h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>Card New Course</div>
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <header className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Featured Courses</h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>Card Featured Courses 1</div>
            <div>Card Featured Courses 2</div>
          </div>
        </section>
      </div>
      <MyProgress
        progress={40}
        user={USER_AUTHENTICATED}
        stats={MOCK_STATS.stats}
      />
    </div>
  );
};
