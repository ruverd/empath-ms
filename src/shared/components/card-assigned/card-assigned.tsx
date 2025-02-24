import { Status } from "@/shared/enums/status";
import { useTheme } from "@/shared/hooks/use-theme";
import { cn, formatDate } from "@/shared/lib/utils";
import { BadgeStatus } from "../badge-status";
import { ProgressCircle } from "../progress-circle";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "../ui/card";
import type { CardAssignedProps } from "./card-assigned.types";

export const CardAssigned = ({
  course,
  percentageCompleted = 0,
  currentLesson,
  isOnTrack,
  dueDate,
}: CardAssignedProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Card
      className={cn(
        "border border-primary-violet bg-gradient-overlay-carrousel px-1.5 w-full py-2 flex flex-col rounded-2xl overflow-hidden",
        isDark && "border-primary-violet"
      )}
    >
      <CardHeader className="p-4 flex w-full flex-row items-start justify-between gap-2">
        <div className="flex items-start gap-2">
          <img
            src={course.imageUrl}
            alt="Course Image"
            className="size-[74px] aspect-square rounded-lg"
          />
          <CardTitle className="flex flex-col gap-1 p-0 !mt-0">
            {course?.highlightTag && (
              <div>
                <Badge
                  variant={
                    course.highlightTag.variant === "primary"
                      ? "default"
                      : "outline"
                  }
                  className="text-primary-cloud"
                >
                  {course.highlightTag.title}
                </Badge>
              </div>
            )}
            {currentLesson && !course?.highlightTag && (
              <span className="text-sm font-medium text-primary-cloud">{`Lesson ${currentLesson}`}</span>
            )}
            <h3 className="text-sm font-bold line-clamp-2 text-primary-cloud">
              {course.title}
            </h3>
            {dueDate && (
              <span className="text-xs text-primary-cloud">{`Due: ${formatDate(
                dueDate
              )}`}</span>
            )}
            {!!isOnTrack && <BadgeStatus variant={Status.ON_TRACK} />}
          </CardTitle>
        </div>
        <div className="flex items-start">
          <ProgressCircle percentage={percentageCompleted} />
        </div>
      </CardHeader>
      <CardFooter className="mt-auto py-2 px-2.5 flex items-center justify-end">
        <Button variant="outline" size="xs">
          Start Lesson
        </Button>
      </CardFooter>
    </Card>
  );
};
