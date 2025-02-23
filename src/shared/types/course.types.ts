export type CourseLevel = "beginner" | "intermediate" | "advanced";
export type CourseInstructor = {
  name: string;
  imageUrl: string;
};

export type CourseTag = {
  title: string;
  variant: "primary" | "secondary";
};

export type CourseLesson = {
  id: string;
  title: string;
  duration: number;
  number: number;
};

export type Course = {
  id: string;
  imageUrl: string;
  title: string;
  lessons: CourseLesson[];
  duration: number;
  level: CourseLevel;
  instructor: CourseInstructor;
  totalStudents: number;
  totalRatings: number;
  totalReviews: number;
  highlightTag?: CourseTag;
  tags?: CourseTag[];
  isNew?: boolean;
  isFeatured?: boolean;
  isActive?: boolean;
  createdAt: Date;
};

export type CourseAssigned = {
  course: Course;
  percentageCompleted?: number;
  currentLesson?: number;
  isOnTrack?: boolean;
  dueDate?: Date;
};
