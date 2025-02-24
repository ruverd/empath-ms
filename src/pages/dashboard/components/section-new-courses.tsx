import { CardCourse } from "@/shared/components/card-course";

import course4 from "@/assets/mock/course-4.png";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/components/ui/avatar";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { getInitials } from "@/shared/lib/utils";
import { MOCK_COURSES } from "@/shared/mocks/course.mock";
import { CircleUser, Star } from "lucide-react";

export const SectionNewCourses = () => {
  return (
    <section className="flex flex-col gap-4">
      <header className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">New Courses & Live Streams!</h2>
      </header>
      <CardCourse.Root variant="horizontal">
        <CardCourse.Container className="flex flex-col p-4 gap-4">
          <div className="flex gap-2">
            {MOCK_COURSES[3].tags
              ?.map((tag) => (
                <Badge
                  key={tag.title}
                  variant={tag.variant === "primary" ? "default" : "outline"}
                  className="text-primary-cloud"
                >
                  {tag.title}
                </Badge>
              ))
              .slice(1, 3)}
          </div>
          <CardCourse.Title className="text-[2rem] font-bold text-pretty p-0 text-primary-cloud">
            {MOCK_COURSES[3].title}
          </CardCourse.Title>
          <CardCourse.Info className="flex flex-col gap-4 p-0">
            <div className="flex items-start gap-2 w-fit">
              <div className="flex flex-col items-start gap-0">
                <span className="text-sm font-bold text-primary-cloud">
                  {MOCK_COURSES[3].lessons.length ?? 0}
                </span>
                <span className="text-sm font-medium text-primary-cloud">
                  Lessons
                </span>
              </div>
              <div className="w-px h-10 bg-primary-violet" />
              <div className="flex flex-col items-start gap-0">
                <span className="text-sm font-bold text-primary-cloud">
                  1 hr 25 min
                </span>
                <span className="text-sm font-medium text-primary-cloud">
                  Time
                </span>
              </div>
              <div className="w-px h-10 bg-primary-violet" />
              <div className="flex flex-col items-start gap-0">
                <span className="text-sm font-bold text-primary-cloud">
                  Beginner
                </span>
                <span className="text-sm font-medium text-primary-cloud">
                  Level
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="size-6">
                <AvatarImage src={MOCK_COURSES[3].instructor.imageUrl} />
                <AvatarFallback>
                  {getInitials(MOCK_COURSES[3].instructor.name.charAt(0))}
                </AvatarFallback>
              </Avatar>
              <span className="space-x-2 text-xs font-medium text-primary-cloud">
                {MOCK_COURSES[3].instructor.name}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-1">
                <Star className="size-4 text-shades-violet-6 fill-shades-violet-6" />
                <Star className="size-4 text-shades-violet-6 fill-shades-violet-6" />
                <Star className="size-4 text-shades-violet-6 fill-shades-violet-6" />
                <Star className="size-4 text-shades-violet-6 fill-shades-violet-6" />
                <Star className="size-4 text-shades-violet-6 fill-shades-violet-6" />
                <span className="text-xs font-medium text-primary-cloud">
                  537 reviews
                </span>
              </div>
              <div className="flex items-center gap-1">
                <CircleUser className="size-4 text-primary-indigo fill-shades-violet-6" />
                <span className="text-xs font-medium text-primary-cloud">
                  1,394 students
                </span>
              </div>
            </div>
          </CardCourse.Info>
          <CardCourse.Action className="p-0">
            <Button size="sm">Get Started</Button>
          </CardCourse.Action>
        </CardCourse.Container>
        <CardCourse.Cover src={course4} alt="Course Image" />
      </CardCourse.Root>
    </section>
  );
};
