import { Link } from "react-router-dom";

import { CardAssigned } from "@/shared/components/card-assigned";
import { useTheme } from "@/shared/hooks/use-theme";
import { MOCK_ASSIGNED_COURSES } from "@/shared/mocks/course.mock";

import { cn } from "@/shared/lib/utils";
import { MAP_TEXTS } from "./section-assigned.constants";

export const SectionAssigned = () => {
  const { theme } = useTheme();

  const isDarkTheme = theme === "dark";

  return (
    <section className="flex flex-col gap-4">
      <header className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{MAP_TEXTS.title}</h2>
        <Link
          to="/"
          className={cn(
            "text-sm font-bold text-shades-violet-5 hover:opacity-90",
            isDarkTheme && "text-secondary-aqua"
          )}
        >
          {MAP_TEXTS.seeAll}
        </Link>
      </header>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {MOCK_ASSIGNED_COURSES.map((course) => (
          <CardAssigned key={course.course.id} {...course} />
        ))}
      </div>
    </section>
  );
};
