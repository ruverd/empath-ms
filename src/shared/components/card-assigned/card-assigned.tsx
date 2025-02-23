import { Status } from "@/shared/enums/status";
import { formatDate } from "@/shared/lib/utils";
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
  return (
    <Card
      className="border border-primary-violet px-1.5 w-full py-2 flex flex-col rounded-2xl overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(17, 0, 55, 0.7) 0%, #2B1553 100%)",
      }}
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
                >
                  {course.highlightTag.title}
                </Badge>
              </div>
            )}
            {currentLesson && !course?.highlightTag && (
              <span className="text-sm font-medium">{`Lesson ${currentLesson}`}</span>
            )}
            <h3 className="text-sm font-bold line-clamp-2">{course.title}</h3>
            {dueDate && (
              <span className="text-xs">{`Due: ${formatDate(dueDate)}`}</span>
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
